import React from 'react';
import './item.css';

export default function Item(props) {

    return (

        <div className='list_item'>
            <div className='list_item_container'>
                <h3>{props.title}</h3>
                <h4>{props.author}</h4>
                <p>{props.description}</p>
                <p>{props.href}</p>
            </div>
        </div>

    )

}

/* 
<img src={item.items[i].volumeInfo.imageLinks.thumbnail} />
                    <h3>Title: {item.items[i].volumeInfo.title}</h3>
                    <p>Page count: {items.items[i].volumeInfo.pageCount}</p>
*/