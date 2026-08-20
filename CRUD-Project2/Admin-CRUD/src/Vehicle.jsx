import 'bootstrap/dist/css/bootstrap.min.css'
import './Vehicle.css'
import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'

const AddVehicle = () => {
  let [brandName, setBrandName] = useState('')
  let [modelName, setModelName] = useState('')
  let [price, setPrice] = useState('')
  let [vehicleColor, setVehicleColor] = useState('')
  let [vehicleType, setVehicleType] = useState('')
  let [vehicleNumber, setVehicleNumber] = useState('')

  let [message, setMessage] = useState('')
  let [messageType, setMessageType] = useState('success')

  const addVehicle = () => {
    let data = {
      brandName: brandName,
      modelName: modelName,
      price: Number(price),
      vehicleColor: vehicleColor,
      vehicleType: vehicleType,
      vehicleNumber: vehicleNumber
    }

    axios({
      url: 'http://localhost:3000/add/vehicle',
      method: 'post',
      data: data
    })
      .then(res => {
        // Success message
        setMessage(res.data.message)
        setMessageType('success')

        // Clear form
        setBrandName('')
        setModelName('')
        setPrice('')
        setVehicleColor('')
        setVehicleType('')
        setVehicleNumber('')
      })
      .catch(err => {
        // Error message
        setMessage('Vehicle could not be added!')
        setMessageType('danger')

        console.log(err)
      })
  }

  return (
    <>
      <Container className='align-items-center justify-content-center min-vh-100'>
        <Row className='w-100 justify-content-center'>
          <Col
            xs={12}
            md={6}
            lg={6}
            className='border p-4 rounded bg-white mt-5'
          >
            <h2 className='text-center text-danger'>Add Vehicle</h2>

            {/* Success / Error Message */}

            {message && (
              <Alert variant={messageType} className='mt-3'>
                {message}
              </Alert>
            )}

            <Form>
              {/* Brand Name */}

              <Form.Group className='mb-3'>
                <Form.Label>Brand Name</Form.Label>

                <Form.Control
                  type='text'
                  value={brandName}
                  onChange={e => setBrandName(e.target.value)}
                />
              </Form.Group>

              {/* Model Name */}

              <Form.Group className='mb-3'>
                <Form.Label>Model Name</Form.Label>

                <Form.Control
                  type='text'
                  value={modelName}
                  onChange={e => setModelName(e.target.value)}
                />
              </Form.Group>

              {/* Price */}

              <Form.Group className='mb-3'>
                <Form.Label>Price</Form.Label>

                <Form.Control
                  type='number'
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </Form.Group>

              {/* Vehicle Color */}

              <Form.Group className='mb-3'>
                <Form.Label>Vehicle Color</Form.Label>

                <Form.Control
                  type='text'
                  value={vehicleColor}
                  onChange={e => setVehicleColor(e.target.value)}
                />
              </Form.Group>

              {/* Vehicle Type Dropdown */}

              <Form.Group className='mb-3'>
                <Form.Label>Vehicle Type</Form.Label>

                <Form.Select
                  value={vehicleType}
                  onChange={e => setVehicleType(e.target.value)}
                >
                  <option value=''>-- Select Vehicle Type --</option>

                  <option value='Car'>Car</option>

                  <option value='Bike'>Bike</option>

                  <option value='Scooter'>Scooter</option>

                  <option value='Truck'>Truck</option>

                  <option value='Bus'>Bus</option>
                </Form.Select>
              </Form.Group>

              {/* Vehicle Number */}

              <Form.Group className='mb-3'>
                <Form.Label>Vehicle Number</Form.Label>

                <Form.Control
                  type='text'
                  value={vehicleNumber}
                  onChange={e => setVehicleNumber(e.target.value)}
                />
              </Form.Group>

              {/* Add Vehicle Button */}

              <div className='d-flex justify-content-center'>
                <Button variant='success' className='mt-2' onClick={addVehicle}>
                  Add Vehicle
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddVehicle
