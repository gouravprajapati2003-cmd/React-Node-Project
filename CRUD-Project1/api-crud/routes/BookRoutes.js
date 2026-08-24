const express = require('express')
const bodyParser = require('body-parser')
const BookController = require('../controllers/BookController')
const route = express.Router();
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));
route.post('/add/book', (req, res) => {
    BookController.addBook(req, res);
})
route.get('/books', (req, res) => {
    BookController.getBooks(req, res);
})

module.exports = route;