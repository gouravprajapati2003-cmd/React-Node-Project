const express = require('express')
const bodyParser = require('body-parser')
const MobileController = require('../controllers/MobileController')
const route = express.Router();
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));
route.post('/add/mobile', (req, res) => {
    MobileController.addMobile(req, res);
})

module.exports = route;