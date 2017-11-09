import React, { Component } from 'react';

class Skills extends Component {
	render() {
	  return(
      <section className="SkillsSection">
      <h2>Skills</h2>
      <ul id="frontend">
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Javascript</li>
        <li>webpack</li>
      </ul>
      <ul id="backend">
        <li>Python</li>
        <li>Flask</li>
        <li>Sqlalchemy</li>
        <li>SQL</li>
        <li>Linux</li>
      </ul>
      </section>
    )
	}
}

export default Skills;