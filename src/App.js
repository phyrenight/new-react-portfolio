import React, { Component } from 'react';
import Header from './header.js';
import Summary from './summary.js';
import Skills from './skills.js';
import Projects from './projects.js';
import Contact from './contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Summary/>
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
