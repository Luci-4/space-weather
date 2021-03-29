const express = require('express');
require("dotenv").config();
const fetch = require("node-fetch");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
