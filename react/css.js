import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button Clicked!');
  };

  return (
    <div className="app">
      <h1 className="title">Simple React App</h1>

      <div className="card">
        <h3 className="cardTitle">Card Title</h3>
        <p className="cardDescription">This is a simple card description.</p>
      </div>

      <button className="button" onClick={handleClick}>Click Me</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
