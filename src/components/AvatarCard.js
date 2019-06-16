import classNames from "classnames";
import React from "react";
import { Jumbotron, Button, Navbar } from "reactstrap";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import portfolio from "../assets/portfolio4.JPG";
import github from "../assets/github.png";
import NavLink from "react-bootstrap/NavLink";
import linkedin from "../assets/linkedin.jpg";
import '../css/App.css';
import ReactHover from "react-hover"

class AvatarCard extends React.Component {

  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  render(){
  return (
   
    
    <div>
      <Jumbotron id="jumbotron">
     
          <Container className="profileContainer">
           
              
                <Image className="avatar" src={portfolio} roundedCircle />
               
                <hr className="my-2" />
       
          <h2 className="lead" id="my-name">Miranda Wozmak</h2>
          <h2 className="lead">Web Developer | Experienced Manager
          
         
            </h2>
            <div>
              
            <Button onClick={this.toggleHidden.bind(this)} className="modalButton">...</Button>
            {!this.state.isHidden && <p className='lead'>Animal Lover | Snowboarder | Amateur Painter | Nutrition Professional</p>}
            </div>
            
        <div className="links">
            {this.props.children}
            <a href="http://www.github.com" className="pic-link">
              <img src={github} onClick="http://github.com" />
            </a>
            <a href="http://www.linkedin.com" className="pic-link">
              <img src={linkedin} width="50" />
            </a>
          </div>
         
     
      
          </Container>
         
      </Jumbotron>
    </div>
  );
};
}



export default AvatarCard;
