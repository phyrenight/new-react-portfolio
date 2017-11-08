import React, { Component } from 'react';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {projects: [
      {name: "phoneBook",url: "a", github: "http://www.github.com/phyrenight/phonebook",skills:["Python", "Flask", "SQlalchemy"]},
      {name: "caluculator",url: "b", github: "http://www.github.com/phyrenight/Calculator",skills:["HTML", "CSS", "Javascript"]},
      {name: "A place to visit",url: "c", github: "http://www.github.com/phyrenight/APlaceToVisit",skills:["HTML", "CSS", "Javascript", "KnockOut.js", "Jquery"]},
      {name: "Local Weather",url: "d", github: "http://www.github.com/phyrenight/localweather",skills:["HTML","CSS","Javascript"]},
      {name: "twitch Streamers",url: "e", github: "http://www.github.com/phyrenight/twitchstreamers",skills:["HTML", "Javascript", "CSS",]},
      {name: "GameSwap",url: "f", github: "http://www.github.com/phyrenight/up3",skills:["Python"]}
    ]}
}
	render(){
    return(
      <section className="Project">
        <h2>Projects</h2>
        <div>
          {this.state.projects.map(project => (
            <div key={project.name}>
            <h3>{project.name}</h3>
            <section className="skills">
              <p>skills: {project.skills.map(skill => <span key={skill}> {skill} </span>)}</p>
            </section>
            <a href={project.github}> Github</a>
            </div>))}
        </div>
      </section>
    )
  }
}

export default Projects;