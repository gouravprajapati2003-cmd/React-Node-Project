import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL
import axios from "axios";

const BookList = () => {
    let [books, setBooks] = useState([])
    let [isDelete, setIsDelete] = useState(false)
    let [searchBook, setSearchBook] = useState('')
    let [nop, setNop] = useState(1);
    let [booksPerPage, setBookPerPage] = useState(3);
    let [pageNo, setPageNumber] = useState(1);
    let navigate = useNavigate()
    let items = []
    for(let i = 1; i <= nop; i++) {
        items.push(
            <Pagination.Item key={i} onClick={() => setPageNumber(i)}>{i}</Pagination.Item>
        )
    }
    function goToAddBook() {
        navigate('/add/book');
    }
    function handleDelete(id) {
        axios({
            url: apiUrl + '/delete/book/'+ id,
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
            url: apiUrl + '/books',
            method: 'get',
            params: {
                searchBook: searchBook,
                pageNo: pageNo,
                booksPerPage: booksPerPage,
            }
        }).then((res) => {
            setBooks(res.data.data)
            setNop(Math.ceil(res.data.totalBooks / 3))
        }).catch((err) => {
                alert(err);
        })
            
    },[isDelete, searchBook, pageNo])
    return (
       <Container>
        <Row>
            <Col>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter Book Title to Search..." onChange={(e) => setSearchBook(e.target.value)}></Form.Control>
                </Form.Group>   
            </Form>
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
                            {/* <td>
                                <Button variant="danger" size="Sm" onClick={() => handleDelete(book._id) }>Delete</Button>
                                <Button variant="warning" className="ms-1" size="Sm" onClick={() => handleUpdate(book._id) }>Edit</Button>
                                </td> */}
                                <td>
                                    <i class="bi bi-trash text-danger" onClick={() => handleDelete(book._id)}></i>
                                    <i class="bi bi-pencil text-info ms-4" onClick={() => handleUpdate(book._id)}></i>
                                </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
                    <Pagination size="md" className="justify-content-center">{items}</Pagination>
            </Col>
        </Row>
       </Container>
        
        
    )
}
export default BookList;

