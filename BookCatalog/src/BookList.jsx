import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/books/')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('ERRORR:', error);
            });
    }, []);

    return (
        <div className="book-list">
            <h2>Your Books!</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
