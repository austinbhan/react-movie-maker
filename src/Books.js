import React from 'react';
import './App.css';

export default function Book(props) {
  return (
    <>
      <div className="book-preview">
        <label value={props.title}>{props.title}</label>
        <label value={props.author}>{props.author}</label> 
        <label value={props.year}>{props.year}</label>
      </div>
    </>
  );
}
