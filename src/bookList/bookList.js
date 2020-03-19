import React, { Component } from 'react';
import './bookList.css';
import Item from '../item/item';

class BookList extends Component {

    render() {

        console.log('this is what props.books is ... => ' + this.props.books)

        const bookResults = [];

        if (!this.props.books){
            bookResults = ''
         } else {

        const bookResults = this.props.books.items.map((book, i) => 
            <Item
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                href={book.selfLink}
                key={i}
            />)
        }

        return (
            <div>
                { bookResults }
            </div>
        )
    }
}

export default BookList;