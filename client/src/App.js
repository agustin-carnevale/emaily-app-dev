import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to EMAILY</h1>
        </header>

        <br/><br/>
        <a href="/auth/google">SIGN IN with GOOGLE</a>



      </div>
    );
  }
}

export default App;