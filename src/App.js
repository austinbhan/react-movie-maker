import './App.css';
import { useState } from 'react';
import Bookform from './Bookform';
import Book from './Books';
import BookList from './Booklist';

function App() {
// UseState Go here
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const [allBooks, setBooks] = useState([{
    title: title,
    author: author,
    year: year
  }]);

// Functions Go Here
  function submitBook(e) {
    e.preventDefault();
    const books = { title: title,
      author: author,
      year: year };
    
    const updatedBooks = [...allBooks, books];
    setBooks(updatedBooks); //updateBooks is your data array 
  }


// Return Goes Here
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Movie Maker Project Title</h1>
        </header>
        <section className="body">
          <div id="input">
            <p>Inputs go here</p>
            <Bookform 
              submitBook={submitBook}
              title={title}
              setTitle={setTitle}
              author={author}
              setAuthor={setAuthor}
              year={year}
              setYear={setYear}
            />
          </div>

          <div className="book-preview">
            <p>Preview goes here</p>
            <Book 
              book={{ title: title, 
                author: author,
                year: year }}  
            />
          </div>

          <div id="filter-and-delete">
            <p>Filter and delete buttons go here</p>
          </div>

          <div id="list-display">
            <p>Display List goes here</p>
            <BookList 
              books={allBooks}
            />
          </div>
        </section>
        <footer>

        </footer>
      </div>
    </>
  );
}

export default App;
