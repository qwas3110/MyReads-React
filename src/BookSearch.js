import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import sortBy from 'sort-by';
import PropTypes from 'prop-types';

class BookSearch extends React.Component{

    static propTypes = {
        books: PropTypes.array,
        moveBook: PropTypes.func.isRequired
    };

    state ={
        query: '',
        searchBooks: []
    };

    searchBooks = (query) => {
        if (!query) {
            this.setState({query: '', searchBooks: []});
        } else {
            this.setState({query:query.trim()});
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    books = []
                }
                books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)));
                this.setState({searchBooks:books})
            })
        }

    };

    render() {

        const { moveBook} = this.props;

        const { searchBooks } = this.state;


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={ (e) => this.searchBooks(e.target.value) }
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                        {
                            searchBooks.sort(sortBy('title'))
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
        );
    }
}

export default BookSearch;
