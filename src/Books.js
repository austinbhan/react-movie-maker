import React from 'react';
import './App.css';

export default function Book({ book }) {
  return (
    <>
      <div className="book-preview">
        <h2>{book.title}</h2>
        <h5>{book.author}</h5> 
        <p>{book.year}</p>
      </div>
    </>
  );
}
