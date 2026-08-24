const express = require('express');
const bodyParser = require('body-parser');
const VehicleController = require('../controllers/VehicleController');
const route = express.Router();
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));

route.post('/add/vehicle', (req, res) => {
    VehicleController.addVehicle(req, res);
});
route.get('/vehicles', (req, res) => {
    VehicleController.getVehicle(req, res);
})

module.exports = route;