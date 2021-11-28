/* The new code editor page */
import mongoose from "mongoose";
import Model from "../models/Model";
import express from "express";
import newFn from './html/new'
require("dotenv").config();
const app = express();
app.set('view engine', 'ejs');
app.get('/new/:id', async(req, res) => {
    let username = await req.params.id;
    await mongoose.connect(process.env.DB);
    let data = await Model.findOne({ username: username });
    console.log(data);
    if(data === null) {let html = await newFn(username);
    console.log(html + '\n' + username);
    res.send(html);}
    else {await res.redirect(`/${username}`);console.log('redirected')}
})

export default app;