const fetch = require("node-fetch");
const express = require('express');
require("dotenv").config();

const cmeFile = require("../cme");
const gstFile = require("../gst");
const flrFile = require("../flr");
const messageFile = require("../message");


const getPosts = (req, res) => {
    console.log("getPosts...");
    res.send("this works");
}

const getCME = async (req, res) => {
    // coronal mass ejection

    const apiKey = process.env.API_KEY;
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    
    
    const CMEObject = new cmeFile.CME(data.slice(-1)[0]);

    res.json(CMEObject);
}

const getGST = async (req, res) => {
    // geomagnetic storm

    const apiKey = process.env.API_KEY;
    
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/GST?endDate=2021-03-28&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    const GSTObject = new gstFile.GST(data.slice(-1)[0]);
    res.json(GSTObject)
    
}

const getFLR = async (req, res) => {
    // solar flare

    const apiKey = process.env.API_KEY;
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/FLR?&endDate=2021-03-28&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    const FLRObject = new flrFile.FLR(data.slice(-1)[0]);
    res.json(FLRObject);
}


const getRBE = async (req, res) => {
    // radiation belt enhancement

    const apiKey = process.env.API_KEY;
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/RBE?endDate=2021-03-29&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    res.json(data);
}

const getHSS = async (req, res) => {
    // high speed stream

    const apiKey = process.env.API_KEY;
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/HSS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    res.json(data);
}

const getNotifications = async (req, res) => {

    const apiKey = process.env.API_KEY;
    const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/notifications?endDate=2021-03-29&type=all&api_key=${apiKey}`
    )
    const data = await fetchResponse.json();
    const messages = data.map(messageObj => {
        return new messageFile.Message(messageObj);
    })
    
    res.json(messages);
}
module.exports = {
    getPosts, 
    getCME, 
    getGST, 
    getFLR, 
    getRBE,
    getHSS,
    getNotifications
};