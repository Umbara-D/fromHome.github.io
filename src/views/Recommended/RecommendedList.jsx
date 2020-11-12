import React from 'react';

import RecommendedResult from './RecommendedResult';

const RecommendedList = (props) => {
    const {
        books = [],
        bookshelfId,
        onRemoveBookFromBookshelf
    } = props;

    const bookList = books.map((book) => {
        return <RecommendedResult key={book.id} book={book} bookshelfId={bookshelfId} onRemoveBookFromBookshelf={handleRemoveBookFromList} />
    });

    function handleRemoveBookFromList(bookId) {
        onRemoveBookFromBookshelf(bookId);
    }

    return (
        <div className="book-list">
            <p>
                {bookList ? bookList : 'No books to display!'}
            </p>
        </div>
    )
}

export default RecommendedList;

