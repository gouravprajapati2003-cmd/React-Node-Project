import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

function AddBook () {
  const navigate = useNavigate()

  const [bookData, setBookData] = useState({
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
    finalPrice: '',
    file: null
  })

  const handleChange = e => {
    const { name, value, files, type } = e.target
    const updatedValue = type === 'file' ? files[0] : value

    const nextBookData = {
      ...bookData,
      [name]: updatedValue
    }

    const originalPrice = Number(nextBookData.originalPrice) || 0
    const discount = Number(nextBookData.discount) || 0
    const discountType = nextBookData.discountType

    let finalPrice = originalPrice

    if (discountType === 'percentage') {
      finalPrice = originalPrice - (originalPrice * discount) / 100
    } else if (discountType === 'flat') {
      finalPrice = originalPrice - discount
    }

    finalPrice = Math.max(0, finalPrice)
    nextBookData.finalPrice = finalPrice.toFixed(2)

    setBookData(nextBookData)
  }

  const addBook = async e => {
    e.preventDefault()

    if (!bookData.file) {
      alert('Please select a book image')
      return
    }

    const formData = new FormData()

    formData.append('bookTittle', bookData.bookTittle)
    formData.append('authorName', bookData.authorName)
    formData.append('imprint', bookData.imprint)
    formData.append('publicationYear', bookData.publicationYear)
    formData.append('productFrom', bookData.productFrom)
    formData.append('publisher', bookData.publisher)
    formData.append('genre', bookData.genre)
    formData.append('isbnNo', bookData.isbnNo)
    formData.append('bookCategory', bookData.bookCategory)
    formData.append('bookSubCategory', bookData.bookSubCategory)
    formData.append('edition', bookData.edition)
    formData.append('language', bookData.language)
    formData.append('description', bookData.description)
    formData.append('shortDescription', bookData.shortDescription)
    formData.append('countryOfOrigin', bookData.countryOfOrigin)
    formData.append('nameOfManufacturer', bookData.nameOfManufacturer)
    formData.append('addressOfManufacturer', bookData.addressOfManufacturer)
    formData.append('nameOfPackager', bookData.nameOfPackager)
    formData.append('addressOfPackager', bookData.addressOfPackager)
    formData.append('rating', bookData.rating)
    formData.append('reviews', bookData.reviews)
    formData.append('originalPrice', bookData.originalPrice)
    formData.append('discount', bookData.discount)
    formData.append('discountType', bookData.discountType)
    formData.append('finalPrice', bookData.finalPrice)
    formData.append('file', bookData.file)

    try {
      const res = await axios({
        url: apiUrl + '/add/book',
        method: 'post',
        data: formData
      })

      alert(res.data.message)
      navigate('/books')
    } catch (err) {
      console.log(err)

      alert(err.response?.data?.message || 'Something went wrong')
    }
  }

  return (
  <Container className='py-4'>
    <Row className='justify-content-center'>
      <Col xs={12} className='border p-4 rounded bg-white'>
        <h2 className='text-center text-danger mb-4'>Add New Book</h2>

        <Form onSubmit={addBook}>
          {/* Row 1 */}
          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  type='text'
                  name='bookTittle'
                  value={bookData.bookTittle}
                  onChange={handleChange}
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
                  value={bookData.authorName}
                  onChange={handleChange}
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
                  value={bookData.imprint}
                  onChange={handleChange}
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
                  value={bookData.publicationYear}
                  onChange={handleChange}
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
                  value={bookData.productFrom}
                  onChange={handleChange}
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
                  value={bookData.publisher}
                  onChange={handleChange}
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
                  value={bookData.genre}
                  onChange={handleChange}
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
                  value={bookData.isbnNo}
                  onChange={handleChange}
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
                  value={bookData.bookCategory}
                  onChange={handleChange}
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
                  value={bookData.bookSubCategory}
                  onChange={handleChange}
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
                  value={bookData.edition}
                  onChange={handleChange}
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
                  value={bookData.language}
                  onChange={handleChange}
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
                  value={bookData.countryOfOrigin}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Name Of Manufacturer</Form.Label>
                <Form.Control
                  type='text'
                  name='nameOfManufacturer'
                  value={bookData.nameOfManufacturer}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Name Of Packager</Form.Label>
                <Form.Control
                  type='text'
                  name='nameOfPackager'
                  value={bookData.nameOfPackager}
                  onChange={handleChange}
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
                  value={bookData.rating}
                  onChange={handleChange}
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
                  value={bookData.reviews}
                  onChange={handleChange}
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
                  value={bookData.originalPrice}
                  onChange={handleChange}
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
                  value={bookData.discount}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Discount Type</Form.Label>
                <Form.Select
                  name='discountType'
                  value={bookData.discountType}
                  onChange={handleChange}
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
                  value={bookData.finalPrice}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Row 8 */}
          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Book Image</Form.Label>
                <Form.Control
                  type='file'
                  name='file'
                  accept='image/*'
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Address Of Manufacturer</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={2}
                  name='addressOfManufacturer'
                  value={bookData.addressOfManufacturer}
                  onChange={handleChange}
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
                  value={bookData.addressOfPackager}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
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
                  value={bookData.shortDescription}
                  onChange={handleChange}
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
                  value={bookData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className='text-center'>
            <Button type='submit' variant='success' className='mt-3 px-5'>
              Add Book
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
)

}

export default AddBook
