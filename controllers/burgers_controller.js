const express = require("express");
const router = express.Router();
var burgs = require("../models/burger");
//var exphbr = require(express-handlebars);

router.get("/", function(req,res1){
    burgs.all(function(res2){
        var hbsAll = {burger:res2};
        //console.log(hbsAll);
        res1.render("index",hbsAll);
    });
});

router.post("/api/burgers", function(req, res) {
    burgs.create("burgers","name", req.body.burger, function(result) {
        // ID of the new burger
        res.json({ id: result.insertId });
        res.render("index",res);
    });
});
  
module.exports = router;