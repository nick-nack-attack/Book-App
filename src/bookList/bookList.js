import React, { Component } from 'react';
import './bookList.css';
import Item from '../item/item';

class BookList extends Component {

    render() {

        const booksArray = Array.from(this.props.books);

        const books = booksArray.map ( (result, i) => 
            <Item
                {...result}
                key={i} />)

        return (
            <div>
                {books}
            </div>
        )

    }
}

BookList.defaultProps = {
    books: []
};

export default BookList;