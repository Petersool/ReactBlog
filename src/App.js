import React, { useState } from 'react';
import client from './Client';
import './App.css';

const [post, setPost] = useState([]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span>React and Contentful</span>
          </div>
        </header>
        <main>
          <div className="wrapper">
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
