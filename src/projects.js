import React, { Component } from 'react';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {projects: [
      {name: "phoneBook",url: "", github: "",skills:["Python", "Flask", "SQlalchemy"]},
      {name: "",url: "", github: "",skills:[]},
      {name: "",url: "", github: "",skills:[]},
      {name: "",url: "", github: "",skills:[]},
      {name: "",url: "", github: "",skills:[]},
      {name: "",url: "", github: "",skills:[]}
    ]}
}
	render(){
    return(
      <section className="Project">
        <h2>Projects</h2>
        <div className="row">
          <div>
            <img src="" alt="" />
            <p>title</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>title</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>title</p>
          </div>
        </div>
        <div className="row">
          <div>
            <img src="" alt="" />
            <p>title</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>title</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>title</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;