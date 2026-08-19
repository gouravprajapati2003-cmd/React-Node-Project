const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mobileSchema = new Schema({
    mobileName: { type: String, required: true },
    brandName: { type: String, required: true },
    price: { type: Number, required: true },
    ram: { type: Number, required: true },
    rom: { type: Number, required: true },
})

module.exports = mongoose.model('Mobile', mobileSchema)