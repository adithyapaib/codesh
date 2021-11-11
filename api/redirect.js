import express from 'express';
const app = express(); 
import mongoose from "mongoose";
import Model from "../models/Model";    
app.set('view engine', 'ejs');
require("dotenv").config();
app.get('/:id', async(req, res) => {
    await mongoose.connect(process.env.DB)
    let id = await req.params.id;
  let document = await Model.findOne({ username: id });
  document ?  await res.render("code", { code :document.value, username: id }): await res.render("404")
});

export default app;