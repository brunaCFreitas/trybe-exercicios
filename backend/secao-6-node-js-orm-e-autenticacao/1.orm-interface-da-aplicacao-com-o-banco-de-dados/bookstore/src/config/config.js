const env = process.env.NODE_ENV || 'development';

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

module.exports = {
  [env]: config,
}