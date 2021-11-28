/* This files redirects all incomeing requests to the right codespace or 404 */

const app = require('express')();
import html from './html/404'
import codeFn from './html/code'
import mongoose from "mongoose";
import Model from "../models/Model";    
require("dotenv").config();
app.get('/:id', async(req, res) => {
  let f = `<HTML>Hi</html>`
  await mongoose.connect(process.env.DB)
  let id = await req.params.id;
  let document = await Model.findOne({ username: id });
  if( await document) {  // if the document exists
  let username = await document.username, code = await document.value;
  f = await codeFn(username,code);
  }
 await document ?  await res.send(f).status(200) : await res.send(html).status(404) 
});

export default app;
