import React from 'react';
import './App.css';

export default function Books(props) {
  console.log(props);
  return (
    <>
      <div className="books-preview">
        <h4 value={props.books.title}>Title</h4>
        <h5 value={props.books.author}>Author</h5>
        <p value={props.books.year}>Year</p>
      </div>
    </>
  );
}