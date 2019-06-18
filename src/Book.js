import React from 'react';
import BookStatus from './BookStatus';
import './App.css';


class Book extends React.Component {

    render() {

        const { book,updateShelf } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <BookStatus shelf={book.shelf}
                                book={book}
                                updateShelf={updateShelf}
                    />
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors[0] }</div>
            </div>
        );
    }
}

export default Book;

