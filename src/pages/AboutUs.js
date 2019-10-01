import React, { Component } from 'react';

import about_us from './../assets/images/about-us.png';

class AboutUs extends Component {
  render(){
    return (
      <main id="page_about">
          <img src={ about_us } alt="about us image" style={{"width": "100%"}}/>
      </main>
    );
  }
}

export default AboutUs;