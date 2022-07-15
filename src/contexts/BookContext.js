import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
export const BookContext = React.createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "Identity", author: "Robert Ludlum", id: 1},
        { title: "Supremacy", author: "Robert Ludlum", id: 2},
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {
            title,
            author,
            id: uuid()
        }])
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;