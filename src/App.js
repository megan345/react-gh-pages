import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
            <Main />
      </div>
    );
  }
}

export default App;
