var orm = require("../config/orm");

// Create code that will call the orm functions using burger specific input from the orm

var burgs = {
    all: function(caba){
        // select all the burgers
        orm.selectAll("burgers",function(res){
        caba(res)})},
    create: function(caba){
        // create a burger
        orm.create("burgers","burger_name","devoured","triple tofu no cheese",false,function(res){
        caba(res)})},
    remove: function(caba){
        // eat a burger
        orm.remove("burgers",4,function(res){
        caba(res)})},
    consumed: function(caba){
        // select the consumed burgers
        orm.selectWhere("burgers","devoured",true,function(res){
        caba(res)})},
    edit: function(caba){
        // change a burger
        orm.edit("burgers","name","single turkey double cheddar cheese","5",function(res){
        caba(res.message)})}
}


module.exports = burgs;
