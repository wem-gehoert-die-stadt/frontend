import { PS, db } from "../lib/createConnection";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET",
  "Content-Type": "application/json",
};

exports.handler = async (event) => {
  const {
    queryStringParameters: { category, city },
  } = event;

  const searchQuery = new PS({
    name: "search",
    text: `SELECT
    *
FROM
    (
        SELECT
            owners.id,
            owners."name",
            owners."flatsTotal",
            owners.description,
            owners.cat1_rating,
            owners.cat1_rendite,
            owners.cat2_rating,
            owners.cat2_spekulation,
            owners.cat3_rating,
            owners.cat3_miete,
            owners.cat4_rating,
            owners.cat4_finanzen,
            owners.cat5_rating,
            owners.cat5_verantwortung
        FROM
            owners
        WHERE
            owners.category = $1 AND
            owners.category != 7
    ) AS A
    LEFT JOIN (
        SELECT DISTINCT ON ("housingStocks"."ownerID") 
          "housingStocks"."ownerID",
          "housingStocks"."housingstockmin",
          "housingStocks"."housingstockmax",
          "housingStocks"."housingstocksort",
          "housingStocks"."housingstocklabel",
          "housingStocks".city,
          "housingStocks"."year" 
        FROM
          "housingStocks" 
        WHERE
          LOWER("housingStocks".city) = LOWER($2) 
        ORDER BY
          "housingStocks"."ownerID", "housingStocks"."year" DESC
    ) AS B ON A.id = B."ownerID" WHERE B.city IS NOT NULL ORDER BY housingstocksort DESC`,
  });

  searchQuery.values = [category, city];

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
