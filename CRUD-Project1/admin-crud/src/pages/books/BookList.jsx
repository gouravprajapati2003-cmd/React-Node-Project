import { useState, useEffect } from "react";
import axios from "axios";

function BookList() {
    let [books, setBooks] = useState([])
    useEffect(() => {
        axios({
            url: 'http://localhost:3000/books',
            method: 'get'
        }).then((res) => {
            
        }).catch((err) => {
                
        })
            
    },[])
    return (
        <>
        <h1>Here we will fetch all Books from DataBase</h1>
        </>
    )
}
export default BookList;

