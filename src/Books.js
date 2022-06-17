import React from 'react';
import './App.css';

export default function Book(props) {
  console.log(props);
  return (
    <>
      <div className="books-preview">
        <label value={props.title}>{props.title}</label>
        {/* Continue from Here */}
        <label value={props.author}>Author</label> 
        <label value={props.year}>Year</label>
      </div>
    </>
  );
}
