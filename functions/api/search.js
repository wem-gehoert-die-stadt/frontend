import { GLOBAL_DAILY_LIMIT, PS, db } from "../lib/createConnection";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET",
  "Content-Type": "application/json",
};

exports.handler = async (event) => {
  const {
    queryStringParameters: { city, query: queryTerm },
  } = event;

  const getRateQuery = new PS({
    name: "getRate",
    text: `SELECT count FROM public.ratelimits WHERE date=current_date LIMIT 1;`,
  });
  const updateRateQuery = new PS({
    name: "updateRate",
    text: `UPDATE public.ratelimits SET count=count+1 where date=current_date;`,
  });

  const insertRateQuery = new PS({
    name: "insertRate",
    text: `INSERT INTO public.ratelimits ("date", count) VALUES(current_date, 0);`,
  });

  const searchQuery = new PS({
    name: "search",
    text: `SELECT *
    FROM
      (SELECT owners.ID AS "ownerID",
              owners.NAME,
              owners.CATEGORY,
              'owner' AS type,
              'city' as "city"
       FROM owners
       UNION
         (SELECT a1."parentID" AS "ownerID",
                 CONCAT(a1.street, ' ', a1."houseNumber", a1."houseNumberSupplement") AS NAME,
                 o2.category AS CATEGORY,
                 'street' AS type,
                 a1.city as "city"
          FROM addresses a1
          INNER JOIN owners o2 ON a1."parentID"=o2.id WHERE LOWER(a1.city) like LOWER($1) and o2.id IS NOT NULL)
       UNION SELECT subsidiaries."parentID" AS "ownerID",
                    subsidiaries.NAME,
                    NULL AS CATEGORY,
                    'subsidiary' AS type,
                    'city' as "city"
                    
       FROM subsidiaries) AS A
    WHERE LOWER(A.name) LIKE LOWER($2)
    ORDER BY SIMILARITY(A.name, $3) ASC
    LIMIT 20;`,
  });

  searchQuery.values = [city, `%${queryTerm}%`, queryTerm];

  const insertQueryQuery = new PS({
    name: "insertQuery",
    text: `INSERT INTO public.searchqueries (datetime, querystring, dailylimitreached) VALUES(current_timestamp, $1, $2);`,
  });

  try {
    const currentRateCount = await db.one(getRateQuery);
    if (currentRateCount.count > GLOBAL_DAILY_LIMIT) {
      // SEARCH LIMIT EXCEEDED
      // RETURN ERROR
      // COUNT ANYWAY
      await db.none(updateRateQuery);
      insertQueryQuery.values = [queryTerm, true];
      await db.none(insertQueryQuery);

      return {
        statusCode: 509,
        headers,
        body: JSON.stringify([]),
      };
    }
    // SEARCH LIMIT NOT EXCEEDED
    // COUNT QUERY
    // RETURN SEARCH RESULTS
    await db.none(updateRateQuery);

    insertQueryQuery.values = [queryTerm, false];
    await db.none(insertQueryQuery);

    try {
      const searchResults = await db.many(searchQuery);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(searchResults),
      };
    } catch (error) {

      console.log(error);
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify(error),
      };
    }
  } catch {
    await db.none(insertRateQuery);
    await db.none(updateRateQuery);

    try {
      const searchResults = await db.many(searchQuery);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(searchResults),
      };
    } catch {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify([]),
      };
    }
  }
};
