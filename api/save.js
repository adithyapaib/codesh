import mongoose from "mongoose";
import Model from "../models/Model.js";

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DB);
  }
  
  if (req.method === "POST") {
    let body = req.body.value || "";
    let username = req.body.username;
    
    body = body.replace(/</g, '&lt;');
    body = body.replace(/>/g, '&gt;');
    body = body.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    body = body.replace(/"/g, '&quot;');
    body = body.replace(/'/g, '&apos;');
    
    let value = body.trim();
    
    try {
      let d = await Model.create({ username: username, value: value });
      res.redirect(`/${d.username}`);
    } catch (err) {
      res.status(404).send("404 Error saving document");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
