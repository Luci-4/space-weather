const fetch = require("node-fetch");
const express = require('express');
require("dotenv").config();

const cmeFile = require("../classes/cme");
const gstFile = require("../classes/gst");
const flrFile = require("../classes/flr");
const messageFile = require("../classes/message");


const getPosts = (req, res) => {
    console.log("getPosts...");
    res.send("this works");
}

const getCME = async (req, res) => {
    // coronal mass ejection
    try{
        const apiKey = process.env.API_KEY;
        const date = new Date();
        let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        const fetchResponse = await fetch(
        `https://api.nasa.gov/DONKI/CME?endDate=${endDate}&api_key=${apiKey}`
        )
        const data = await fetchResponse.json();
        
        const CMEObjects = data.reverse().map(cmeData => {
           
            return new cmeFile.CME(cmeData);
        })
        
        // const CMEObject = new cmeFile.CME(data.slice(-1));

        res.status(200).json(CMEObjects);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

const getGST = async (req, res) => {
    // geomagnetic storm

    try {
        const apiKey = process.env.API_KEY;
        const date = new Date();
        let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        let startDate = `${date.getFullYear() -1}-${date.getMonth() + 1}-${date.getDate()}`;
        const fetchResponse = await fetch(
            `https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`
        )
        const data = await fetchResponse.json();
        const GSTObjects = data.reverse().map(gstData =>{
            return new gstFile.GST(gstData);
        })
        // const GSTObject = new gstFile.GST(data.slice(-1)[0]);
        res.status(200).json(GSTObjects)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
    
}

const getFLR = async (req, res) => {
    // solar flare
    try {
        const apiKey = process.env.API_KEY;
        const date = new Date();
        let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const fetchResponse = await fetch(
            `https://api.nasa.gov/DONKI/FLR?endDate=${endDate}&api_key=${apiKey}`
        )
        const data = await fetchResponse.json();
        const FLRObjects = data.reverse().map(flrData => {
            return new flrFile.FLR(flrData);
        })
        // const FLRObject = new flrFile.FLR(data.slice(-1)[0]);
        res.status(200).json(FLRObjects);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

const getNotifications = async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const date = new Date();
        let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const fetchResponse = await fetch(
            `https://api.nasa.gov/DONKI/notifications?endDate=${endDate}&type=all&api_key=${apiKey}`
        )
        const data = await fetchResponse.json();
        const messages = data.map(messageObj => {
            return new messageFile.Message(messageObj);
        })
        
        res.json(messages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}
module.exports = {
    getPosts, 
    getCME, 
    getGST, 
    getFLR, 
    getNotifications
};