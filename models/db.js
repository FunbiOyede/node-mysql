const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

class DB {
  constructor() {
    this.connection = "";
  }

  static Connect() {
    this.connection = mysql.createConnection({
      localAddress: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE_NAME,
      password: process.env.DB_PASSWORD
    });
    this.connection.connect(err => {
      if (err) throw err;
    });
  }
}

module.exports = DB;
