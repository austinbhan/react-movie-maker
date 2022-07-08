import React from 'react';
import Book from './Books';

export default function BookList({ books, handleDeleteBook }) {
  return (
    <><p>BookList has been successfully imported</p><div className="book-list">
      {
        books.map((book, i) => <Book key={book.title + i} book={book} handleDeleteBook={handleDeleteBook} />)
      }
    </div></>
  );
}

// Handle Delete Book???