import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const BookPageForEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [book, setBook] = useState({
    bookTittle: '',
    authorName: '',
    imprint: '',
    publicationYear: '',
    productFrom: '',
    publisher: '',
    genre: '',
    isbnNo: '',
    bookCategory: '',
    bookSubCategory: '',
    edition: '',
    language: '',
    description: '',
    shortDescription: '',
    countryOfOrigin: '',
    nameOfManufacturer: '',
    addressOfManufacturer: '',
    nameOfPackager: '',
    addressOfPackager: '',
    rating: '',
    reviews: '',
    originalPrice: '',
    discount: '',
    discountType: '',
    finalPrice: ''
  })

  // Get Book Data
  useEffect(() => {
    axios({
      url: apiUrl + '/book/for/edit/' + id,
      method: 'get'
    })
      .then(res => {
        setBook(res.data.data)
      })
      .catch(err => {
        alert(err.response?.data?.message || err.message)
      })
  }, [id])

  // Handle Change
  function manageUpdate (e) {
    const { name, value } = e.target

    const updatedBook = {
      ...book,
      [name]: value
    }

    // Final Price Calculation
    const originalPrice = Number(updatedBook.originalPrice) || 0
    const discount = Number(updatedBook.discount) || 0
    const discountType = updatedBook.discountType

    let finalPrice = originalPrice

    if (discountType === 'percentage') {
      finalPrice = originalPrice - (originalPrice * discount) / 100
    } else if (discountType === 'flat') {
      finalPrice = originalPrice - discount
    }

    updatedBook.finalPrice = Math.max(0, finalPrice).toFixed(2)

    setBook(updatedBook)
  }

  // Update Book
  function editBook (e) {
    e.preventDefault()

    axios({
      url: apiUrl + '/edit/book/' + id,
      method: 'put',
      data: book
    })
      .then(res => {
        alert(res.data.message || 'Data has been updated successfully')
        navigate('/books')
      })
      .catch(err => {
        alert(err.response?.data?.message || err.message)
      })
  }

  return (
    <Container className='py-4'>
      <Row className='justify-content-center'>
        <Col xs={12} className='border p-4 rounded bg-white'>
          <h2 className='text-center text-danger mb-4'>Edit Book</h2>

          <Form onSubmit={editBook}>
            {/* Row 1 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    type='text'
                    name='bookTittle'
                    value={book.bookTittle}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Author Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='authorName'
                    value={book.authorName}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Imprint</Form.Label>
                  <Form.Control
                    type='text'
                    name='imprint'
                    value={book.imprint}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Row 2 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Publication Year</Form.Label>
                  <Form.Control
                    type='number'
                    name='publicationYear'
                    value={book.publicationYear}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Product Form</Form.Label>
                  <Form.Control
                    type='text'
                    name='productFrom'
                    value={book.productFrom}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control
                    type='text'
                    name='publisher'
                    value={book.publisher}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Row 3 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type='text'
                    name='genre'
                    value={book.genre}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>ISBN No</Form.Label>
                  <Form.Control
                    type='text'
                    name='isbnNo'
                    value={book.isbnNo}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Book Category</Form.Label>
                  <Form.Control
                    type='text'
                    name='bookCategory'
                    value={book.bookCategory}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Row 4 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Book Sub Category</Form.Label>
                  <Form.Control
                    type='text'
                    name='bookSubCategory'
                    value={book.bookSubCategory}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Edition</Form.Label>
                  <Form.Control
                    type='text'
                    name='edition'
                    value={book.edition}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type='text'
                    name='language'
                    value={book.language}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Row 5 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Country Of Origin</Form.Label>
                  <Form.Control
                    type='text'
                    name='countryOfOrigin'
                    value={book.countryOfOrigin}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Manufacturer</Form.Label>
                  <Form.Control
                    type='text'
                    name='nameOfManufacturer'
                    value={book.nameOfManufacturer}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Packager</Form.Label>
                  <Form.Control
                    type='text'
                    name='nameOfPackager'
                    value={book.nameOfPackager}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Row 6 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type='number'
                    min='0'
                    max='5'
                    step='0.1'
                    name='rating'
                    value={book.rating}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Reviews</Form.Label>
                  <Form.Control
                    type='number'
                    name='reviews'
                    value={book.reviews}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Original Price</Form.Label>
                  <Form.Control
                    type='number'
                    name='originalPrice'
                    value={book.originalPrice}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Row 7 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    type='number'
                    name='discount'
                    value={book.discount}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Discount Type</Form.Label>
                  <Form.Select
                    name='discountType'
                    value={book.discountType}
                    onChange={manageUpdate}
                    required
                  >
                    <option value=''>Select Discount Type</option>
                    <option value='percentage'>Percentage</option>
                    <option value='flat'>Flat</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Final Price</Form.Label>
                  <Form.Control
                    type='number'
                    name='finalPrice'
                    value={book.finalPrice}
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Row 8 */}
            <Row>
              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Address Of Manufacturer</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={2}
                    name='addressOfManufacturer'
                    value={book.addressOfManufacturer}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>Address Of Packager</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={2}
                    name='addressOfPackager'
                    value={book.addressOfPackager}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>{/* Empty column */}</Col>
            </Row>

            {/* Row 9 */}
            <Row>
              <Col md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Short Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    name='shortDescription'
                    value={book.shortDescription}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    name='description'
                    value={book.description}
                    onChange={manageUpdate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className='text-center mt-3'>
              <Button type='submit' variant='success' className='px-5'>
                Update Book
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default BookPageForEdit
