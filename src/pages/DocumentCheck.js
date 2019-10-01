import React, { Component } from 'react';

import document_check from './../assets/images/document-check.png';

class DocumentCheck extends Component {
  render(){
    return (
      <main id="page_document_check" className="text-center">
          <img src={ document_check } alt="document check image" style={{"width": "100%"}} />
      </main>
    );
  }
}

export default DocumentCheck;