import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing/Routing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routing/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
