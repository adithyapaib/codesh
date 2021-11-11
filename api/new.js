import mongoose from "mongoose";
import Model from "../models/Model";
import express from "express";
require("dotenv").config();
const app = express();
app.set('view engine', 'ejs');
app.get('/new/:id', async (req, res) => {
    const id = req.params.id;
    await mongoose.connect(process.env.DB);
    let user = await Model.find({ username: req.url.split('/user/')[1] }).length > 0 ? true : false;
    (user) ? res.redirect('/404') : res.render('new', { username: id });
})

export default app;
