import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
const BookPageForEdit = () => {
    let params = useParams();
    let id = params.id;
    let [book, setBook] = useState({
        bookTitle: '',
        authorName: '',
        price: 0,
        isbnNo: '',
        nop: 0,
        publication: ''
    });
    useEffect(() => {
        axios({
            url: 'http://localhost:3000/book/for/edit/'+ id,
            method: 'get'
        }).then((res) => {
            setBook(res.data.data);
        }).catch((err) => {
            alert(err)
        })
    }, [])
    function manageUpdate(e) {
        let name = e.target.name
        let value = e.target.value
        setBook((prev) => {
            return {
                ...prev, [name]: value 
            }
        })
    }
    function editBook() {
        axios({
            url: 'http://localhost:3000/edit/book/' + id,
            method: 'put',
            data: book
        }).then((res) => {
            alert("Data has been updated Successfully")
        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <>
        <Container className='align-items-center justify-content-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
            <Col xs={12} md={6} lg={6} className='border p-4 rounded bg-white mt-5'>
            <h2 className='text-center text-danger'>Edit Book</h2>
            <Form>
                <Form.Group>
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" name="bookTitle" value={book.bookTitle} onChange={manageUpdate}></Form.Control>
            </Form.Group>
                <Form.Group>
                <Form.Label>Author Name</Form.Label>
                <Form.Control type="text" name="authorName" value={book.authorName} onChange={manageUpdate}></Form.Control>
            </Form.Group>
                <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={book.price} onChange={manageUpdate}></Form.Control>
            </Form.Group>
                <Form.Group>
                <Form.Label>ISBN No</Form.Label>
                <Form.Control type="text" name="isbnNo" value={book.isbnNo} onChange={manageUpdate}></Form.Control>
            </Form.Group>
                <Form.Group>
                <Form.Label>No of Pages</Form.Label>
                <Form.Control type="number" name="nop" value={book.nop} onChange={manageUpdate}></Form.Control>
            </Form.Group>
                <Form.Group>
                <Form.Label>Publication</Form.Label>
                <Form.Control type="text" name="publication" value={book.publication} onChange={manageUpdate}></Form.Control>
            </Form.Group>
            <Button variant="danger" className='mt-3' onClick={editBook}>Edit Book</Button>
            </Form>
            </Col>
            </Row>
        </Container>
        </>
    )
}
export default BookPageForEdit;