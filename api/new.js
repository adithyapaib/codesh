import mongoose from "mongoose";
import Model from "../models/Model";
import express from "express";
require("dotenv").config();
const app = express();
app.set('view engine', 'ejs');
app.get('/new/:id', async (req, res) => {
    let username = await req.params.id;
    await mongoose.connect(process.env.DB);
    await Model.findOne({ username: username }) ? res.redirect(`/${username}`) : res.render('new', { username: username });
})

export default app;
