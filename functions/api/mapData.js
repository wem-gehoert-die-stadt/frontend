import { PS, db } from '../lib/createConnection';
import Cities from "../../data/cities.json"

const { env } = process; 

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  const {
    queryStringParameters: { city, internal, secret },
  } = event;

  const filteredCity = Cities.find(({ slug }) => slug === city)

  const searchQuery = new PS({
    name: 'search',
    text: `SELECT *
    FROM
      (SELECT id,
              city,
              street,
              "houseNumber",
              "houseNumberSupplement",
              "zipCode",
              longitude,
              latitude,
              "parentID"
       FROM addresses
       WHERE LOWER(city) LIKE LOWER($1)) AS A
    LEFT JOIN
      (SELECT *
       FROM owners) AS B ON A."parentID" = B.id;`,
  });

  const ownerQuery = new PS({
    name: 'ownerSearch',
    text: `SELECT distinct A.id,A.name,
  A.description,
  A."flatsTotal",
  A.category,
  A."cat_karte" 
FROM
(SELECT *
FROM owners) AS A
LEFT JOIN
(select "parentID"
FROM addresses
WHERE LOWER(city) LIKE LOWER($1)) AS B ON A.id = B."parentID";`,
  });

  ownerQuery.values = [filteredCity?.name];
  searchQuery.values = [filteredCity?.name];

  try {
    const searchResults = await db.many(searchQuery);

    const ownerResults = await db.many(ownerQuery);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        objects: searchResults.map(
          ({
            parentID,
            street,
            houseNumber,
            houseNumberSupplement,
            zipCode,
            longitude,
            latitude,
          }) => ({
            parentID,
            street:
              internal !== undefined && secret !== undefined && secret === env.MAP_INTERNAL_SECRET
                ? `${street} ${houseNumber}${houseNumberSupplement}`
                : street,
            zipCode,
            latitude,
            longitude,
          })
        ),
        owners: ownerResults.map(
          ({ name, description, flatsTotal, category, cat_karte, id }) => ({
            id,
            name,
            description,
            flatsTotal,
            category,
            cat_karte,
          })
        ),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(error),
    };
  }
};
