import './App.css';
import { useEffect, useState } from 'react';
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

  const [currentFilter, setFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const filteredBooks = allBooks.
      filter(book =>
        book.title.includes(currentFilter));
    setFilteredBooks(filteredBooks);
  }, [currentFilter, allBooks]);

// Functions Go Here


  function submitBook(e) {
    e.preventDefault();
    const books = { title: title,
      author: author,
      year: year };
    
    const updatedBooks = [...allBooks, books];
    setBooks(updatedBooks); //updateBooks is your data array 
  }

  function handleDeleteBook(title) {
    const index = allBooks.findIndex(book => book.title === title);
    allBooks.splice(index, 1);
    setBooks([...allBooks]);
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
              book={{
                title: title, 
                author: author,
                year: year }}  
            />
          </div>

          <div id="filter-and-delete">
            <p>Filter goes here</p>
            <input value={currentFilter} onChange={(e) => setFilter(e.target.value)}/>
          </div>

          <div id="list-display">
            <p>Display List goes here</p>
            <BookList 
              books={filteredBooks.length
                ? filteredBooks
                : allBooks}
              handleDeleteBook={handleDeleteBook}
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
