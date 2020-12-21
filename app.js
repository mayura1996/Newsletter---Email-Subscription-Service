//jshint esversion:6

const express= require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app=express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true})); //use body parser

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  var firstName=req.body.fName;
  var secondName=req.body.lName;
  var email=req.body.email;
})
app.listen(3000,function(){
  console.log("Server is listening to port 3000")
})
