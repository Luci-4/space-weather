var express = require('express');
var router = express.Router();
require("dotenv").config()
const axios = require("axios");
const cmeFile = require("../classes/cme");
const gstFile = require("../classes/gst");
const flrFile = require("../classes/flr");
const messageFile = require("../classes/message");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const getCME = async (req, res) => {
    // coronal mass ejection
    console.log("getCME")
    // TODO: get the rest working like cme
    // try{
        const apiKey = process.env.API_KEY;
        console.log(apiKey)
        const date = new Date();
        let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        const fetchResponse = axios
          .get(
            `https://api.nasa.gov/DONKI/CME?endDate=${endDate}&api_key=${apiKey}`
          )
          .then(response => {
            // console.log(response.data)
            const CMEObjects = response.data.reverse().map(cmeData => {
              return new cmeFile.CME(cmeData);
            })
            res.json(CMEObjects);
          })
          .catch(error => {
            console.error(error)
            res.status(502).json([null])
          })
        // const fetchResponse = await fetch(
        // `https://api.nasa.gov/DONKI/CME?endDate=${endDate}&api_key=${apiKey}`
        // )
        // console.log(fetchResponse)
        // const data = await fetchResponse.json();
        // console.log(data)
        
        // const CMEObjects = data.reverse().map(cmeData => {
        //     console.log(cmeData) 
        //     return new cmeFile.CME(cmeData);
        // })
        
        // const CMEObject = new cmeFile.CME(data.slice(-1));

        // res.status(200).json(CMEObjects);
    // } catch (error) {
    //     console.error(error)
    //   }
    // res.status(502).json([null]);
    
}

const getGST = async (req, res) => {
    // geomagnetic storm
    console.log("getGST")
    // try {
    const apiKey = process.env.API_KEY;
    const date = new Date();
    let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    let startDate = `${date.getFullYear() -1}-${date.getMonth() + 1}-${date.getDate()}`;
    const fetchResponse = axios
        .get(
            `https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`
        )
        .then(response => {
            const GSTObjects = response.data.reverse().map(gstData => {
                return new gstFile.GST(gstData)
            })
            res.json(GSTObjects)
        })
        .catch(error => {
            console.error(error)
            res.status(502).json([null])
        })
    //     const fetchResponse = await fetch(
    //         `https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`
    //     )
    //     const data = await fetchResponse.json();
    //     const GSTObjects = data.reverse().map(gstData =>{
    //         return new gstFile.GST(gstData);
    //     })
    //     // const GSTObject = new gstFile.GST(data.slice(-1)[0]);
    //     res.status(200).json(GSTObjects)
    // } catch (error) {
    //     res.status(502).json([null])
    // }
    
    
}

const getFLR = async (req, res) => {
    // solar flare
    console.log("getFLR")
    const apiKey = process.env.API_KEY;
    const date = new Date();
    let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const fetchResponse = axios
        .get(
            `https://api.nasa.gov/DONKI/FLR?endDate=${endDate}&api_key=${apiKey}`
        )
        .then(response => {
            
            const FLRObjects = response.data.reverse().map(flrData => {
                return new flrFile.FLR(flrData);
            })
            res.status(200).json(FLRObjects)
        })
        .catch(error => {
            console.error(error)
            res.status(502).json([null])
        })
}

const getNotifications = async (req, res) => {
    console.log("notifications")
    const apiKey = process.env.API_KEY;
    const date = new Date();
    let endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const fetchResponse = axios
        .get(
            `https://api.nasa.gov/DONKI/notifications?endDate=${endDate}&type=all&api_key=${apiKey}`
        )
        .then(response => {

            const messages = response.data.map(messageObj => {
                return new messageFile.Message(messageObj);
            })
            res.status(200).json(messages);
        })
        .catch(error => {
            console.error(error)
            res.status(502).json([null])
        })
    
    
}
// router.get('/', getPosts);
router.get('/cme', getCME);
router.get('/gst', getGST);
router.get('/flr', getFLR);

router.get("/notifications", getNotifications);


module.exports = router;
