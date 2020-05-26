import React from 'react';
import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color="primary">Material button, yay</Button>;
      </header>
    </div>
  );
}

export default App;
