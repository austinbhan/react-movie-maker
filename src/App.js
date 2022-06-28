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

  useEffect(() => { // Run Handle Filter here (6/28/22)
    function filter(string) {
      const filteredBooks = allBooks.filter(book => book.title.includes(string));
      setFilteredBooks(filteredBooks);
    }
    filter(currentFilter);
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
            <p>Filters</p>
            <p>
              {
                filteredBooks.length < 1 ? 
                  'Nothing Matches' : ''
              }
            </p>
            <input value={currentFilter} onChange={(e) => setFilter(e.target.value)}/>
          </div>

          <div id="list-display">
            Display List
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
