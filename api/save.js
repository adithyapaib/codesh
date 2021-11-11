import express from 'express';
const app = express(); 
import mongoose from "mongoose";
import Model from "../models/Model";
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
let detectURLs = async (string) =>await string.replace(/(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/gim,'<a href="$1">$1</a><br>');
app.post('/save', async(req, res) => {
  await mongoose.connect(process.env.DB)
  let body = await req.body.value;
  let  username = await req.body.username;
  console.log(body);
  body = await detectURLs(body)
  body = await body.replace(/\n/g, '<br>')
  let value = await `<p class="saved">${body} </p>`
  try {
    let d = await Model.create({ username: username, value: value })
    console.log(d);
    return res.redirect(`/${d.username}`);
  } catch (err) {
    res.render("404")

  } 
});


export default app;
