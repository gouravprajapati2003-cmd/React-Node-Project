import { useState, useEffect } from 'react'
import axios from 'axios'
import './VehicleList.css'

function VehicleList () {
  let [vehicles, setVehicles] = useState([])

  useEffect(() => {
    axios({
      url: 'http://localhost:3000/vehicles',
      method: 'get'
    })
      .then(res => {
        console.log(res.data)
        setVehicles(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className='vehicle-container'>
        <h1>All Vehicles</h1>

        <table className='vehicle-table'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Brand Name</th>
              <th>Model Name</th>
              <th>Price</th>
              <th>Vehicle Color</th>
              <th>Vehicle Type</th>
              <th>Vehicle Number</th>
            </tr>
          </thead>

          <tbody>
            {[...vehicles]
              .sort((a, b) => a.brandName.localeCompare(b.brandName))
              .map((vehicle, index) => (
                <tr key={vehicle._id}>
                  <td>{index + 1}</td>

                  <td>{vehicle.brandName}</td>

                  <td>{vehicle.modelName}</td>

                  <td>₹{vehicle.price}</td>

                  <td>{vehicle.vehicleColor}</td>

                  <td>{vehicle.vehicleType}</td>

                  <td>{vehicle.vehicleNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default VehicleList

