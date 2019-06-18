import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookAreas from './BookAreas';
import BookSearch from './BookSearch';
import './App.css';


class MyReads extends React.Component {

    state = {
        bookAreaType: ['currentlyReading','wantToRead','read'],
        books: []
    };


    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    };

    updateBookShelf = (book) => {

    };

    render() {

        const { books } = this.state;

        const currentlyReading = books.filter(b => b.shelf === 'currentlyReading');
        const wantToRead = books.filter(b => b.shelf === 'wantToRead');
        const read = books.filter(b => b.shelf === 'read');

        console.log(currentlyReading);
        console.log(wantToRead);
        console.log(read);
        return (
            <div className='list-books'>
                <Route exact path='/' render={() => (
                    <div>
                        <div className='list-books-title'>
                            <h1>我的阅读</h1>
                        </div>
                        <BookAreas
                            bookAreaType={this.state.bookAreaType[0]}
                            books={currentlyReading}
                            updateShelf={this.updateBookShelf}
                        />
                        <BookAreas bookAreaType={this.state.bookAreaType[1]} books={wantToRead}/>
                        <BookAreas bookAreaType={this.state.bookAreaType[2]} books={read}/>

                        <div className='open-search'>
                            <Link to='/search'>
                                <button>Add a book</button>
                            </Link>
                        </div>
                    </div>
                )} />

                <Route path='/search' render={() => (
                    <BookSearch/>
                )} />
            </div>

        );
    }
}


export default MyReads;
