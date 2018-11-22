const conn = require("./dbconnection");
// Create methods that will execute the necessary mysql commands

var orm = {
    // SELECT ALL
  selectAll: function(table,caba) {
    var query = "SELECT * FROM "+table;
    console.log(query);
    conn.query(query, function(err, res) {
      if (err) throw err;
      caba(res);
    });
  },
    // SELECT WHERE
  selectWhere: function(table, col, val, caba) {
    var query = "SELECT * FROM ?? WHERE ?? = ?";
    console.log(query);
    conn.query(query, [table, col, val], function(err, res) {
      if (err) throw err;
      caba(res);
    });
  },
    // INSERT ONE
  create: function(table, val1, caba) {
    var query = `INSERT INTO ${table} ("burger_name","devoured") VALUES ("${val1.toString()}",false)`;
    console.log(query);
    conn.query(query, function(err, res) {
      if (err) {throw err}
      res.redirect("/");
    });
  },
    // DELETE
  remove: function(table,IDparam,caba){
    var query = `DELETE FROM ${table} WHERE id=${IDparam}`;
    console.log(query);
    conn.query(query,function(err, res) {
      if (err) {throw err}
      caba(res);
    });
  },
    // UPDATE
  edit: function(table,col,val,IDparam,caba){
    var query = `UPDATE ${table} SET ${col}="${val}" WHERE id=${IDparam}`;
    console.log(query);
    conn.query(query,function(err,res){
        if(err) {throw err}
        caba(res);
    })
  }
};

module.exports = orm;