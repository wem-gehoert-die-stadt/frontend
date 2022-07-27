import pgpImport from 'pg-promise';

const { env } = process;

const pgp = pgpImport();

const connection = {
  host: env.PG_HOST,
  port: 5432,
  database: env.PG_DATABASE,
  user: env.PG_USER,
  password: env.PG_PASSWORD,
};

export const db = pgp(connection);
console.log("host: ", env.PG_HOST,", database: ", env.PG_DATABASE, ", user: ", env.PG_USER, ", password: ", env.PG_PASSWORD);
console.log("database", db);

export const { PreparedStatement: PS } = pgp;
export const { GLOBAL_DAILY_LIMIT } = env;
