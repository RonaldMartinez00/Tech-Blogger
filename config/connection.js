
//setup connection to database
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// If JAWSDB_URL is available in environment variable, use it, otherwise, use local MySQL database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// Export the connection to be used by other parts of the application
module.exports = sequelize;