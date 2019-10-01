import React, { Component } from 'react';

import id_check from './../assets/images/id-check.png';

class IDCheck extends Component {
  render(){
    return (
      <main id="page_id_check" className="text-center">
          <img src={ id_check } alt="id check image" style={{"width": "100%"}} />
      </main>
    );
  }
}

export default IDCheck;