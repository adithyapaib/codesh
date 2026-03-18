import mongoose from "mongoose";
import Model from "../models/Model.js";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DB);
  }

  const url = req.url || '';
  
  if (url.startsWith('/json/')) {
    const id = url.split('/json/')[1];
    let response = await Model.findOne({ username: id });
    if (response) {
      let send = response.value || '';
      res.status(200).send(send);
    } else {
      res.status(404).json({ error: "404" });
    }
    return;
  }
  
  try {
    let latestCode = await Model.find({}).sort({ $natural: -1 }).limit(3);
    let returnHTML = "";
    latestCode.forEach(element => {
      let val = element.value || '';
      returnHTML += `<a href="/${element.username}" class="post-card">
        <h3>/${element.username}</h3>
        <pre>${val.substring(0, 50).replace(/</g, '&lt;').replace(/>/g, '&gt;')}...</pre>
      </a>`;
    });
    res.status(200).send(returnHTML);
  } catch (err) {
    res.status(500).send("");
  }
}
