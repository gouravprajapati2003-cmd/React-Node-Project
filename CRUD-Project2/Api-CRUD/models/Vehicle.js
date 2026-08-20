const mongoose = require('mongoose')
const Schema = mongoose.Schema
const vehicleSchema = new Schema({
  brandName: { type: String, required: true },
  modelName: { type: String, required: true },
  price: { type: Number, required: true },
  vehicleColor: { type: String, required: true },
  vehicleType: { type: String, required: true },
  vehicleNumber: { type: String, required: true }
})
module.exports = mongoose.model('Vehicle', vehicleSchema)
