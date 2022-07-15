import React, { useReducer } from 'react';
import { v4 as uuid } from "uuid";
export const BookContext = React.createContext();

const bookReducer = (state, action) => {
    switch(action.type) {
        case "ADD_BOOK":
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid(),
            }];
        case "REMOVE_BOOK":
            return state.filter((book) => book.id !== action.id);
        default:
            return state;
        
    }
}

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, []);

    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;