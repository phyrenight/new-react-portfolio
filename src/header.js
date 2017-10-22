import React, { Component }from 'react';

class Header extends Component {
	render() {
	  return (
      <header>
        <img src="#" alt="image of Marc Preston"></img>
        <h1>Marc Preston</h1>
        <h2>Python web developer</h2>
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