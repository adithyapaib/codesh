import express from 'express';
const app = express();
require("dotenv").config();
app.get('/52', function (req, res) {
    res.json(process.env.DB);
    }
);

export default app;