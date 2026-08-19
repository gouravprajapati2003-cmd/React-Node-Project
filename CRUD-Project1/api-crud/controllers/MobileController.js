const Mobile = require('../models/Mobile')
const addMobile = async (req, res) => {
    try {
       console.log(req.body); 
       let mobile = new Mobile(req.body)
       await mobile.save();
       console.log("Data Saved Successfully...")
       res.status(200).send({message: 'Data Has Been Add Successfully'})
    } catch (error) {
        res.status(400).send({message: 'Something Went Wrong'})
    }
}

module.exports = {
    addMobile
}