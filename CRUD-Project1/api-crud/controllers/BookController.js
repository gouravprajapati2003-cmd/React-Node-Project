const Book = require('../models/Book')
const addBook = async (req, res) => {
    try {
       console.log(req.body); 
       let book = new Book(req.body)
       await book.save();
       console.log("Data Saved Successfully...")
       res.status(200).send({message: 'Data Has Been Add Successfully'})
    } catch (error) {
        res.status(400).send({message: 'Something Went Wrong'})
    }
}
const getBooks = async (req, res) => {
    try {
        let books = await Book.find({})
            console.log(books); 
            res.status(200).send({data: books})
    } catch (error) {
        console.log(error);
        res.status(400).send({message: error})
    }
}

module.exports = {
    addBook,
    getBooks
}