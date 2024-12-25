import React, { useState } from "react";
import "./App.css";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDescription">{description}</p>
    </div>
  );
};

const Button = ({ onClick, label }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button Clicked!");
  };

  return (
    <div className="app">
      <h1 className="appTitle">React Styling with CSS</h1>
      <div className="appContent">
        <Card
          title="Card Title"
          description="This is a description of the card component. You can add more text here."
        />
        <Button label="Click Me" onClick={handleClick} />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default App;
