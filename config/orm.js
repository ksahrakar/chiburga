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
  create: function(table,col1,val1,caba) {
    var query = `INSERT INTO ${table} (${col1}) VALUES ("${val1}")`;
    console.log(query);
    conn.query(query, function(err, res) {
      if (err) {throw err};
      caba(res);
    });
  },
    // UPDATE
  eat: function(table,id,col1,cond,caba){
    var query = `UPDATE ${table} SET ${col1}=${cond} WHERE id="${id}"`;
    console.log(query);
    conn.query(query,function(err,res){
        if(err) {throw err}
        caba(res);
    })
  }
};

module.exports = orm;