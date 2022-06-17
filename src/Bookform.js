import React from 'react';
import './App.css';

export default function Bookform({ submitBook, title, setTitle, author, setAuthor, year, setYear }) {
  return (
    <>
      <div className="book-form-container">
        <form className="bookform" onChange={e => submitBook(e.target.value)}>
          <p>Title
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
          </p>    
          <p>Author
            <input value={author} onChange={e => setAuthor(e.target.value)}></input>
          </p>
          <p>Year
            <input value={year} onChange={e => setYear(e.target.value)}></input>
          </p>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}