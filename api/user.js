import mongoose from "mongoose";
import Model from "../models/Model.js";
import 'dotenv/config';

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DB);
  }
  
  let username = req.url.split('/user/')[1] || '';
  username = username.split('?')[0];

  let exists = await Model.findOne({ username: username });
  if (exists) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
}
