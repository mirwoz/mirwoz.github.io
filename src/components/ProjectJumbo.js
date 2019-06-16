import React, {Component} from "react";
import { Jumbotron, Button } from "reactstrap";
import '../css/ProjectCard.css'

class ProjectJumbo extends Component {

    render () {

        return (

<Jumbotron>

<div className="col">

{/* <div className="project-pic">
<img src={this.props.pic}> </img>
</div> */}

<h1 className="project-title">{this.props.title}</h1>
 
<p className="card-text">{this.props.description}</p>

<h3 className="project-title">Technology</h3>
<p className="card-text">{this.props.technology}</p>

{this.props.children}
<br/>
<br/>
<br/>
<div className="row" id="button-row">
<Button href={this.props.projectLink} className="project-link">View Project</Button>
</div>
</div>
</Jumbotron>


    )
  }
}

export default ProjectJumbo