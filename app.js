//jshint esversion:6

const express= require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app=express();


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.send("Listening");
})

app.listen(3000,function(){
  console.log("Server is listening to port 3000")
})
