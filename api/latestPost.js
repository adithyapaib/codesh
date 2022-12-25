const app = require('express')();
import html from './html/404'
import examCodeFn from './html/examCode'
import mongoose from "mongoose";
import Model from "../models/Model";    
require("dotenv").config();
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})
app.get('/latest', async(req, res) => {
  mongoose.connect(process.env.DB)
  // get the latest code from the database
  let latestCode = await Model.find({}).sort({$natural:-1}).limit(3);
  console.log(latestCode);
  let returnHTML = "";
  latestCode.forEach(element => {
    console.log(element);
    returnHTML +=  `<div id="card" href="/${element.username}">${element.username} ><h2 > <a href="/${element.username}">${element.username}</a> </h2><pre>${element.value.substring(0,30)}...</pre></div>`
  });

  res.status(200).send(returnHTML).end();
 

  
});
app.get('/json/:id', async(req, res) => {
  await mongoose.connect(process.env.DB)
  let id = await req.params.id;
  let document = await Model.findOne({ username: id });
  if( await document) {  // if the document exists
  let username = await document.username, code = await document.value;
    res.json({document});

  }
res.json("Error");
});

export default app;