import React, { Component } from 'react';
import Header from './header.js';
import Summary from './summary.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Summary/>
        </main>
      </div>
    );
  }
}

export default App;
