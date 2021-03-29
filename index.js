const express = require('express');
require("dotenv").config();
const fetch = require("node-fetch");
const cmeFile = require("./cme");
const gstFile = require("./gst");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
const apiKey = process.env.API_KEY;


app.get('/cme', async (request, response) => {
    // coronal mass ejection
    
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    
    
    const CMEObject = new cmeFile.CME(data.slice(-1)[0]);

    response.json(CMEObject);
    
})

app.get('/cmeanalisys', async (request, response) => {
    
    
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2021-03-25&endDate=2021-03-29&mostAccurateOnly=true&catalog=ALL&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    response.json(data);
    
    
})


app.get("/gst", async (request, response) => {
    // geomagnetic storm
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/GST?endDate=2021-03-28&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    const GSTObject = new gstFile.GST(data.slice(-1)[0]);
    response.json(GSTObject)
})
app.get('/flr', async (request, response) => {
    // solar flare
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/FLR?&endDate=2021-03-28&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    response.json(data);

})

app.get('/rbe', async (request, response) => {
    // radiation belt enhancement

    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    response.json(data);

})

app.get('/hss', async (request, response) => {
    // hight speed stream

    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/HSS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    response.json(data);

})

app.get('/notifications', async (request, response) => {

    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    response.json(data);

})



