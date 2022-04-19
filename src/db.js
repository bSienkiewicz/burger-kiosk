var mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql11.freemysqlhosting.net",
  user: "sql11478491",
  password: "JlvPn6DpU8",
  database: "sql11478491",
});

export default db;
