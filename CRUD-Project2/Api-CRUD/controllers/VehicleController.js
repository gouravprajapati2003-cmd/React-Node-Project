const Vehicle = require('../models/Vehicle')

const addVehicle = async (req, res) => {
  try {
    console.log(req.body)
    const vehicle = new Vehicle(req.body)
    await vehicle.save()
    console.log('Vehicle Added Successfully...')
    res.status(200).send({ message: 'Data Has Been Add Successfully' })
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Something Went Wrong' })
  }
}
module.exports = {
  addVehicle
}
