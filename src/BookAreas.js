import React from 'react';
import './App.css';
import Book from "./Book";


class BookAreas extends React.Component{

    render() {

        const { books, moveBook } = this.props;
        const shelf = ["currentlyReading","wantToRead", "read"];
        const bookShelfTitle = ["目前正在阅读", "想读", '已读'];


        return (
            <div>
                {bookShelfTitle.map((title,index) => (
                    <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    books.filter(b => b.shelf === shelf[index]).map(book => (
                                        <Book
                                            book={book}
                                            key={book.id}
                                            moveBook={moveBook}
                                        />
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default BookAreas;
