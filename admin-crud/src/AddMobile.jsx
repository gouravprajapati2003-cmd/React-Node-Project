import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios"
function AddMobile() {
    let [mobileName, setMobileName] = useState('')
    let [brandName, setBrandName] = useState('')
    let [price, setPrice] = useState(0)
    let [ram, setRam] = useState(0)
    let [rom, setRom] = useState(0)
    function addMobile() {
        let data = {
           mobileName: mobileName,
           brandName: brandName,
           price: price,
           ram: ram,
           rom: rom
        }
        axios({
            url: 'http://localhost:3000/add/book',
            method: 'post',
            data: data
        }).then((res) => {
            alert(res.data.message)
        }).catch((err) => {
            alert(err)
        })
    }
    return(
        <>
        <Container className='align-items-center justify-content-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
            <Col xs={12} md={6} lg={6} className='border p-4 rounded bg-white mt-5'>
            <h2 className='text-center text-danger'>Add New Book</h2>
            <Form>
            <Form.Group>
                <Form.Label>Mobile Name</Form.Label>
                <Form.Control type="text" onChange={ (e)=> setMobileName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" onChange={ (e)=> setBrandName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" onChange={ (e)=> setPrice(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>RAM</Form.Label>
                <Form.Control type="number" onChange={ (e)=> setRam(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>ROM</Form.Label>
                <Form.Control type="number" onChange={ (e)=> setRom(e.target.value)}></Form.Control>
            </Form.Group>
            <Button variant="success" className='mt-3' onClick={addMobile}>Add Mobile</Button>
            </Form>
            </Col>
            </Row>
        </Container>
        </>
    )
}
export default AddMobile