// Connect node to mysql and export the connection
var mysql = require("mysql");

var dbconnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});
dbconnection.connect(function(err) {
    if (err) {console.error("error connecting: " + err.stack); return}
    console.log("...connected as id "+dbconnection.threadId);
  });

module.exports = dbconnection;