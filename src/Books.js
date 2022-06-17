import React from 'react';
import './App.css';

export default function Book({ book, handleDeleteBook }) {
  return (
    <>
      <div className="book-preview"
        onClick={() => handleDeleteBook(book.title)}
      >
        <h2>{book.title}</h2>
        <h5>{book.author}</h5> 
        <p>{book.year}</p>
      </div>
    </>
  );
}
