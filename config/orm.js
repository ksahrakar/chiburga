const conn = require("./dbconnection");
// Create methods that will execute the necessary mysql commands

var orm = {
    // SELECT ALL
  selectAll: function(table,caba) {
    var query = "SELECT * FROM "+table+";";
    console.log(query);
    conn.query(query, function(err, res) {
      if (err) throw err;
      caba(res);
    });
  },
    // INSERT ONE
  create: function(table, val1,caba) {
    var query = `INSERT INTO ${table} (burger_name) VALUES ("${val1}")`;
    console.log(query);
    conn.query(query, function(err, res) {
      if (err) {throw err};
      caba(res);
    });
  },
    // UPDATE
  eat: function(table,id,caba){
    var query = `UPDATE ${table} SET devoured=true WHERE id="${id}"`;
    console.log(query);
    conn.query(query,function(err,res){
        if(err) {throw err}
        caba(res);
    })
  }
};

module.exports = orm;