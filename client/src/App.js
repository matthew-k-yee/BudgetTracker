import React, { Component } from 'react';
import Budget from './components/Budget'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Budget App</h1>
        <Budget />
      </div>
    );
  }
}

export default App;
