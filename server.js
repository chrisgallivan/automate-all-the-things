var express= require ("express");
var app = express();

app.get("/url",(req,res,next) => {
res.json({"message":"Automate all the things!","timstamp":"1529729125"});
});

//app.listen (3000, () => {
//    console.log("Server running on port 3000")
//});

module.exports = app;

