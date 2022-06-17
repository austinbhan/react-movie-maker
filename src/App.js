import './App.css';
import { useState } from 'react';
import Bookform from './Bookform';
import Book from './Books';

function App() {
// UseState Go here
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const [allBooks, setBooks] = useState([]);

// Functions Go Here
  function submitBook(e) {
    e.preventDefault();
    const book = {
      title: title,
      author: author,
      year: year
    };

    const updatedBooks = [...allBooks, book];
    setBooks(updatedBooks);
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

          <div id="preview">
            <p>Preview goes here</p>
            <Book 
              title={title}/>
          </div>

          <div id="filter-and-delete">
            <p>Filter and delete buttons go here</p>
          </div>

          <div id="list-display">
            <p>Display List goes here</p>
          </div>
        </section>
        <footer>

        </footer>
      </div>
    </>
  );
}

export default App;
