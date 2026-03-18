import mongoose from "mongoose";
import Model from "../models/Model.js";
import codeFn from './html/code.js';

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DB);
  }
  
  let username = req.url.split('/')[1] || '';
  username = username.split('?')[0];
  
  if (!username) return res.redirect('/');
  
  let document = await Model.findOne({ username: username });
  if (document) {
    let f = await codeFn(username, document.value);
    res.status(200).send(f);
  } else {
    res.status(404).send("404 Document Not Found");
  }
}
