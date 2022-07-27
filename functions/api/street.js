import { PS, db } from '../lib/createConnection';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  const {
    queryStringParameters: { name, houseNumber },
  } = event;

  const searchQuery = new PS({
    name: 'search',
    text: `
      SELECT
          *
      FROM
          (
              SELECT
                  addresses.id AS "streetID",
                  addresses.city,
                  addresses."zipCode",
                  addresses.street,
                  addresses."houseNumber",
                  addresses."houseNumberSupplement",
                  addresses."parentID"
              FROM
                  addresses
              WHERE
                  LOWER(addresses.street) LIKE LOWER($1) AND
                  CONCAT(addresses."houseNumber", addresses."houseNumberSupplement") LIKE $2
          ) AS a
          LEFT JOIN (
              SELECT
                  owners.id AS "ownerID",
                  owners.category
              FROM
                  owners
          ) AS b ON a."parentID" = b."ownerID";`,
  });

  searchQuery.values = [`%${name}%`, houseNumber];

  try {
    const result = await db.many(searchQuery);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify([{}]),
    };
  }
};
