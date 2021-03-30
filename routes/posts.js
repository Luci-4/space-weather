// import { getPosts, getCME} from '../controllers/posts.js';
const gets = require('../controllers/posts.js')

const express = require('express');
const router = express.Router();

router.get('/', gets.getPosts);
router.get('/cme', gets.getCME);
router.get('/gst', gets.getGST);
router.get('/flr', gets.getFLR);

router.get("/notifications", gets.getNotifications);

module.exports = {router};