//jshint esversion:6

const express= require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https =require("https");
const app=express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true})); //use body parser

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  const firstName=req.body.fName;
  const secondName=req.body.lName;
  const email=req.body.email;

  var data={
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields :{
          FNAME : firstName,
          LNAME:secondName,
        }
      }
    ]
  };
  var jsonData=JSON.stringify(data);

const url = "https://us7.api.mailchimp.com/3.0/lists/12638d0d0f";

const options ={
  method: "POST",
  auth : "mayuraP:b522009ef405bfdca8dccd4cddce894b-us7"
}

const request = https.request(url,options,function(response){
  response.on("data",function(data){
    console.log(JSON.parse(data));
  })
})

request.write(jsonData);
request.end();
});

app.listen(3000,function(){
  console.log("Server is listening to port 3000")
})

//b522009ef405bfdca8dccd4cddce894b-us7
//12638d0d0f
