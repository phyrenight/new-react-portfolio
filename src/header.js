import React, { Component }from 'react';

class Header extends Component {
	render() {
	  return (
      <header>
        <img src="#" alt="Marc Preston"></img>
        <h1>Marc Preston</h1>
        <h2>Python Web Developer</h2>
        <nav>
          <a href="">Summary</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact Me</a>
        </nav>
      </header>
    )
	}
}

export default Header