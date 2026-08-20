const express = require('express')
const cors = require('cors');
const connect = require('./connection')
const vehicle = require('./routes/VehicleRoutes')
const app = express();
app.use(cors());
app.use(vehicle);
connect();

app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server Running on Port 3000...");
        
    }
});