import pgpImport from 'pg-promise';

const { env } = process;

const pgp = pgpImport();

const connection = {
  host: env.PG_HOST,
  port: 5432,
  database: env.PG_DATABASE,
  user: env.PG_USER,
  password: env.PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
};

export const db = pgp(connection);

export const { PreparedStatement: PS } = pgp;
export const { GLOBAL_DAILY_LIMIT } = env;
