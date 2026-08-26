import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookList = () => {
    let [books, setBooks] = useState([])
    let [isDelete, setIsDelete] = useState(false)
    let navigate = useNavigate()
    function goToAddBook() {
        navigate('/add/book');
    }
    function handleDelete(id) {
        axios({
            url: 'http://localhost:3000/delete/book/'+ id,
            method: 'delete'
        }).then((res) => {
            alert('Data has been Deleted Successfully..')
            setIsDelete(true);
        }).catch((err) => {
            alert(err)
        })
    }
    function handleUpdate(id) {
        navigate('/edit/book/'+ id)
    }
    useEffect(() => {
        axios({
            url: 'http://localhost:3000/books',
            method: 'get'
        }).then((res) => {
            setBooks(res.data.data)
        }).catch((err) => {
                alert(err);
        })
            
    },[isDelete])
    return (
       <Container>
        <Row>
            <Col>
            <Button className="mt-5" variant="success" style={{ float: 'right' }} onClick={goToAddBook}>Add Book+</Button>
            <h3 class="text-center text-danger mt-5">Book List</h3>
            <Table bordered>
                <thead>
                <tr>
                    <th>Book Title</th>
                    <th>Author Name</th>
                    <th>Price</th>
                    <th>ISBN No</th>
                    <th>No of Pages</th>
                    <th>Publication</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) => 
                        <tr>
                            <td>{book.bookTitle}</td>
                            <td>{book.authorName}</td>
                            <td>{book.price}</td>
                            <td>{book.isbnNo}</td>
                            <td>{book.nop}</td>
                            <td>{book.publication}</td>
                            <td>
                                <Button variant="danger" size="Sm" onClick={() => handleDelete(book._id) }>Delete</Button>
                                <Button variant="warning" className="ms-1" size="Sm" onClick={() => handleUpdate(book._id) }>Edit</Button>
                                </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
            </Col>
        </Row>
       </Container>
        
        
    )
}
export default BookList;

