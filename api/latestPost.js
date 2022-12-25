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
  let response = await Model.findOne ({username : id});
  if (response) {
    let send = JSON.stringify(response.value);
    // replace \n with new line
    send = send.replace(/\\n/g, `
    `);
    // replace \t with tab
    send = send.replace(/\\t/g, `   `);
    // replace \r with carriage return
    send = send.replace(/\\r/g, ` `);
    // replace \b with backspace
    send = send.replace(/\\b/g, ` `);
  // decode the string
    send = decodeURIComponent(send);
    // replace &apos; with "
    send = send.replace(/&apos;/g, `"`);
    /// replace &quot; with "
    send = send.replace(/&quot;/g, `"`);
    // replace &gt; with >
    send = send.replace(/&gt;/g, `>`);
    // replace &lt; with <
    send = send.replace(/&lt;/g, `<`);

    



    res.status(200).send(send).end();

  
    
  }
  else {
    res.json({error: "404"}).end();
  }


});

export default app;
