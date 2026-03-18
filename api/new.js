import mongoose from "mongoose";
import Model from "../models/Model.js";
import newFn from './html/new.js';
import 'dotenv/config';

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DB);
  }
  
  let username = req.url.split('/new/')[1] || '';
  username = username.split('?')[0];

  if (!username) return res.redirect('/');

  let exists = await Model.findOne({ username: username });
  if (exists == null) {
    res.status(200).send(await newFn(username));
  } else {
    res.redirect(`/${username}`);
  }
}