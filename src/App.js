import './App.css';
import { useState } from 'react';
import Bookform from './Bookform';
import Books from './Books';

function App() {
// UseState Go here
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

// Functions Go Here

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
            <Books />
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
