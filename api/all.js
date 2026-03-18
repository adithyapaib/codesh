import mongoose from "mongoose";
import Model from "../models/Model.js";
import 'dotenv/config';

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DB);
  }
  
  let a = await Model.find({});
  let b = [
    { "No of codes": a.length },
    a
  ];
  res.status(200).json(b);
}
