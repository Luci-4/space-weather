const express = require('express');
require("dotenv").config();
const fetch = require("node-fetch");
const cmeFile = require("./cme");
const gstFile = require("./gst");
const flrFile = require("./flr");
const messageFile = require("./message");
const postRoutes = require("./routes/posts");

const app = express();
// app.use(express.static("public"));
app.use("/posts", postRoutes.router)
app.listen(5000, () => console.log("listening at 5000"));
const apiKey = process.env.API_KEY;




