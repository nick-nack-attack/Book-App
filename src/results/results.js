import React, { Component } from 'react';
import './results.css';
import BookList from '../bookList/bookList';

class Results extends Component {
    
    render() {

        return(
            <div>
                <BookList 
                    books={this.props.bookResults} />
            </div>
        )

    }
}

export default Results;