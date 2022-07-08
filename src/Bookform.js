import React from 'react';
import './App.css';

export default function Bookform({ submitBook, title, setTitle, author, setAuthor, year, setYear }) {
  return (
    <>
      <div className="book-form-container">
        <form className="bookform" onSubmit={ submitBook }>
          <p>Title
            <input value={title} onChange={e => setTitle(e.target.value)}/>
          </p>    
          <p>Author
            <input value={author} onChange={e => setAuthor(e.target.value)} />
          </p>
          <p>Year
            <input value={year} onChange={e => setYear(e.target.value)} />
          </p>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}