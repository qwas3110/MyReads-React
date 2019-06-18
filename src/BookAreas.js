import React from 'react';
import Book from './Book';
import './App.css';


class BookAreas extends React.Component {

    render() {

        const { bookAreaType, books, updateShelf } = this.props;


        return (
            <div className='list-books-content'>
                <div>
                    <div className='bookshelf'>
                        <h2 className='bookshelf-title'>{bookAreaType}</h2>
                        <div className='bookshelf-books'>
                            <ol className='books-grid'>
                                {books.map(book => (
                                    <li key={book.id}>
                                        <Book book={book}
                                              updateShelf={updateShelf}
                                        />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookAreas;
