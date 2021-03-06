import React from 'react';
import './App.css';


class BookStatus extends React.Component{

    changeShelf = (e) => {
        this.props.moveBook(this.props.book,e.target.value);
    };


    render() {

        const { book } = this.props;



        return (
            <div className="book-shelf-changer">
                <select value={book.shelf || 'none'}
                        onChange={this.changeShelf}
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
