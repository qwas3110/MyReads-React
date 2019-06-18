import React from 'react';
import './App.css';


class BookStatus extends React.Component {

    render() {

        const { book, shelf, updateShelf } = this.props;

        return (
            <div className="book-shelf-changer">
                <select value={shelf}
                        onChange={() => updateShelf(book,shelf)}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}


export default BookStatus;
