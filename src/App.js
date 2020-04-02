import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" /> 
        <h1>WELCOME TO THIS PAGE</h1>
        <p>
          HELLO SARATH S KUMAR
        </p>
        <a
          className="App-link"
          href="https://redsmith.tk"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONNECT WITH ME
        </a>
      </header>
    </div>
  );
}

export default App;
