import React, { Component } from 'react';
import './bookList.css';
import Item from '../item/item';

class BookList extends Component {

    render() {

        const bookResults = this.props.books.map((book, i) => 
            <Item
                title={book.items[i].volumeInfo.title}
                author={book.items[i].volumeInfo.authors}
                description={book.items[i].volumeInfo.description}
                href={book.items[i].selfLink}
                key={i}
            />)

        return (
            <div>
                { bookResults }
            </div>
        )
    }
}

export default BookList;