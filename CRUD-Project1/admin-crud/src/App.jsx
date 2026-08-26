import {BrowserRouter, Routes, Route}  from "react-router-dom";
import AddBook from './pages/books/AddBook';
import BookList from './pages/books/BookList';
import Login from './Login'
import Sidebarmenu from './Sidebarmenu'
import BookPageForEdit from './pages/books/BookPageForEdit'
function App() {
    return (
        <>
        <BrowserRouter>
        <Sidebarmenu>
            <Routes>
            <Route path = '/' element = {<Login></Login>}></Route>
            <Route path = '/add/book' element = {<AddBook></AddBook>}></Route>
            <Route path = '/books' element = {<BookList></BookList>}></Route>
            <Route path = '/edit/book/:id' element = {<BookPageForEdit></BookPageForEdit>}></Route>
        </Routes>
        </Sidebarmenu>
        </BrowserRouter>
        </>

    )
}

export default App;