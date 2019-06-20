import React from 'react';
import './App.css';
import Book from "./Book";
import SoryBy from 'sort-by';
import PropTypes from 'prop-types';


class BookAreas extends React.Component{

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    };

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
                                    books.sort(SoryBy('title'))
                                         .filter(b => b.shelf === shelf[index])
                                         .map(book => (
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
