import React, { Component } from "react";
import "../src/css/App.css";
import myPDF from "../src/assets/myPDF.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import AvatarCard from "./components/AvatarCard";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Media,
  Navbar
} from "reactstrap";

import Naybo from "../src/assets/Naybo.png";
import Snow from "../src/assets/Snow.png";
import Hot from "../src/assets/HotTime.png";
import Res from "../src/assets/resumeIcon.png";
import ProjectJumbo from "../src/components/ProjectJumbo";
import Node from "../src/assets/nodejs.png";
import Heroku from "../src/assets/heroku.png";
import jQuery from "../src/assets/jquery.png";
import Firebase from "../src/assets/firebase.png";
import AWS from "../src/assets/AWS.png";
import ReactPic from "../src/assets/React.png";
import Auth from "../src/assets/Auth.png";
import Bootstrap from "../src/assets/bootstrap.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    modal: false
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    <Route
      exact
      path={`/`}
     />
      
    
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle.bind(this)}
      >
        &times;
      </button>
    );
    return (
      <div>
        <AvatarCard>
          <a className="pic-link" id="resume-pic">
            <img src={Res} alt="resume" onClick={this.toggle.bind(this)} />
          </a>
        </AvatarCard>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <Document file={myPDF} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={this.state.pageNumber} />
          </Document>
        </Modal>
        <div>
          <div className="current-projects-div">
            <h4 id="current-projects">Current Projects</h4>
          </div>

          <ProjectJumbo
            title="Naybo"
            description="A web application created to help connect neighbors looking to rent or borrow household items"
            technology="Naybo is built using jQuery, with node and express handling API requests. Naybo is hosted on Heroku using a MySQL database. AWS is used for photo uploads and storage."
            projectLink="https://apple-cobbler-47548.herokuapp.com/"
          >
            <img className="tech-pic" src={jQuery} />
            <img className="tech-pic" src={Node} />
            <img className="tech-pic" src={Heroku} />
            <img className="tech-pic" src={AWS} />
            <img className="tech-pic" src={Bootstrap} />
          </ProjectJumbo>

          <ProjectJumbo
            title="HotTime"
            description="HotTime is a payroll/timesheet manager prototype being built for the Newmarket, NH fire department. "
            technology="HotTime uses a SERN stack (MySQL, Express, ReactJS, NodeJS) and is deployed using Heroku. Auth0 handles user-authentication."
            projectLink="https://github.com/mirwoz/hot-time"
          >
            <img className="tech-pic" src={ReactPic} />
            <img className="tech-pic" src={Node} />
            <img className="tech-pic" src={Heroku} />
            <img className="tech-pic" src={Auth} />
          </ProjectJumbo>

          <ProjectJumbo
            title="Stay in the Snow"
            description="Helping you decide which ski mountain to go to by displaying side-by-side comparisons of driving distances, weather conditions and more."
            technology="Stay in the Snow uses JQuery and Bootstrap in the front end, and a node backend for API requests. "
            projectLink="https://github.com/mirwoz/hot-time"
          >
            <img className="tech-pic" src={jQuery} />
            <img className="tech-pic" src={Node} />
            <img className="tech-pic" src={Heroku} />
            <img className="tech-pic" src={Bootstrap} />
          </ProjectJumbo>
        </div>
      </div>
    );
  }
}

export default App;
