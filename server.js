const express = require("express");
var app = express();
var PORT = process.env.PORT || 3113;
var exphbs = require("express-handlebars");
//var conn = require("./config/dbconnection");
var orm = require("./config/orm");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
    // log server activity in external file
});


// select all the burgers
orm.selectAll("burgers",function(res){
  console.log(res);
});

// orm.create("burgers","name","double duck swiss cheese",function(res){
//   console.log(res);
// })

orm.edit("burgers","name","single turkey double cheddar cheese","5",function(res){
  console.log(res.message);
})

// orm.remove("burgers",4,function(res){
//   console.log(res);
// })

  
