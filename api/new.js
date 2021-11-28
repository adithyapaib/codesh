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
    (await Model.findOne({ username: username }) == null )? await res.send(await newFn(username)) : await res.redirect(`/${username}`)
})

export default app;