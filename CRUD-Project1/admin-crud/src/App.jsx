import {BrowserRouter, Routes, Route}  from "react-router-dom";
import AddBook from './pages/books/AddBook';
import BookList from './pages/books/BookList';
import Login from './Login'

function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Login></Login>}></Route>
            <Route path = '/add/book' element = {<AddBook></AddBook>}></Route>
            <Route path = '/books' element = {<BookList></BookList>}></Route>
        </Routes>
        </BrowserRouter>
        </>

    )
}

export default App;