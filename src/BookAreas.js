import React from 'react';
import Book from './Book';
import './App.css';


class BookAreas extends React.Component {

    render() {

        const { bookAreaType } = this.props;


        return (
            <div className='list-books-content'>
                <div>
                    <div className='bookshelf'>
                        <h2 className='bookshelf-title'>{bookAreaType}</h2>
                        <div className='bookshelf-books'>
                            <ol className='books-grid'>
                                <li>
                                    <Book/>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookAreas;
