import React from 'react';
import { Route, Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import BookAreas from './BookAreas';
import BookSearch from './BookSearch';
import './App.css';


class MyReads extends React.Component {

    state = {
        bookAreaType: ['Currently Reading','Want to Read','Read']
    };

    render() {
        return (
            <div className='list-books'>
                <Route exact path='/' render={() => (
                    <div>
                        <div className='list-books-title'>
                            <h1>我的阅读</h1>
                        </div>
                        <BookAreas bookAreaType={this.state.bookAreaType[0]}/>
                        <BookAreas bookAreaType={this.state.bookAreaType[1]}/>
                        <BookAreas bookAreaType={this.state.bookAreaType[2]}/>

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
