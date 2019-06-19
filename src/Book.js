import React from 'react';
import './App.css';
import BookStatus from './BookStatus';

class Book extends React.Component{

    render() {

        const { book,moveBook } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{
                             width: 128,
                             height: 193,
                             backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})`
                                }}
                    />
                    <BookStatus
                        book={book}
                        moveBook={moveBook}
                    />
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors }</div>
            </div>
        );
    }
}


export default Book;
