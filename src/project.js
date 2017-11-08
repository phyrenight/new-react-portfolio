import React, { Component } from 'react';

class Project extends Component{
constructor(props){
	super(props);
}
	render(){
	  return(
	    <div>
        <img src="" />
        <p>{this.props.project.name}</p>
      </div>
	  )
	}
}

export default Project