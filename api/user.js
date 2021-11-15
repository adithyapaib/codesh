import mongoose from "mongoose";
import Model from "../models/Model";
require("dotenv").config();
export default async (req, res) => {
    await mongoose.connect(process.env.DB);
    let a = await Model.find({username: req.url.split('/user/')[1]})
    if ( a.length !=0 )
     await res.status(200).json(true).end()
    else await res.status(200).json(false).end() 
}
