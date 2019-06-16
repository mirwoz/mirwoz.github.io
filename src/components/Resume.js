import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import myPDF from "../assets/myPDF.pdf"

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };



  render() {
    const { pageNumber, numPages, onLoadSuccess } = this.props;

    return (
      <div>
        <Document
          file={myPDF}
          onLoadSuccess={this.onLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default Resume