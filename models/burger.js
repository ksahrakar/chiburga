var orm = require("../config/orm");

// Create code that will call the orm functions using burger specific input from the orm

var burgs = {
    all: function(caba){
        // select all the burgers
        orm.selectAll("burgers",function(res){
        caba(res)})},
    create: function(val,caba){
        // create a burger
        var name=val.burger_name;
        orm.create("burgers","burger_name",name,function(res){
        caba(res)})},
    eat: function(id,caba){
        // change a burger
        orm.eat("burgers",id,"devoured",true,function(res){
        caba(res)})}
}

module.exports = burgs;
