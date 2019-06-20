import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import * as BooksAPI from './BooksAPI';
import BookAreas from './BookAreas';
import BookSearch from "./BookSearch";

class MyReads extends React.Component{

    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books})
        })
    }

    moveBook = (book, shelf) => {
        if (this.state.books) {
            BooksAPI.update(book,shelf).then(() => {
                book.shelf = shelf;
                this.setState(state => ({
                    books: state.books.filter(b => b.id !== book.id).concat([book])
                }))
            })
        }
    };


    render() {

        return (
            <div className='app'>
                <Route exact path='/' render={() => (
                    <div className='list-books'>
                        <Header title={'我的读物'}/>
                        <BookAreas
                            books={this.state.books}
                            moveBook={this.moveBook}
                        />
                        <div className="open-search">
                            <Link to='/search'>
                                <button>Add a book</button>
                            </Link>
                        </div>
                    </div>
                )} />

                <Route path='/search' render={() => (
                    <BookSearch
                        books={this.state.books}
                        moveBook={this.moveBook}
                    />
                )}/>
            </div>
        );
    }
}

export default MyReads;
