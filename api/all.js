import mongoose from "mongoose";
import Model from "../models/Model";
require("dotenv").config();
export default async (req, res) => {
    await mongoose.connect(process.env.DB);
    let a = await Model.find({})
    let b = []
    b[0]= {
        "No of codes" : a.length
    }
    b[1] = a
    await res.status(200).json(b).end()
}
