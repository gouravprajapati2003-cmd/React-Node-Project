require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connect = require('./config/connection')
const book = require('./routes/BookRoutes')
const mobile = require('./routes/MobileRoutes')
const createAdmin = require('./createAdmin');
const app = express();
app.use(cors());
app.use(book);
app.use(mobile);
connect();
createAdmin();


app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Server is Running on 3000")
    }
});