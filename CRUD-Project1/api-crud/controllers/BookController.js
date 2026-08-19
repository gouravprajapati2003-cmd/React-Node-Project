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

module.exports = {
    addBook
}