import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../assets/styles/header.css';
import img_logo from './../assets/images/logo.png';
import img_cnxlogo from './../assets/images/CNXlogo128.png';

import YoutubeBackground from 'react-youtube-background';

class Header extends Component {
  render(){
    return (
      <header>
      <YoutubeBackground videoId="xvFZedM4Q-g" className="youtube-video-background">
      	<div className="container">
	      	<div className="row">
		      	<div className="col-sm-2 logo-image">
					<Link to="/">
						<img src={img_logo} alt="deepcheck" />
					</Link>
		        </div>
		        <div className="offset-sm-2 col-sm-8 navbar">
		        	<Link to="/accounting-check" className="nav-link">Accounting analysis</Link>
		        	<Link to="/document-check" className="nav-link">Document analysis</Link>
		        	<Link to="/id-check" className="nav-link">Identity analysis</Link>
		        	<Link to="/api" className="nav-link">API</Link>
		        	<Link to="/about-us" className="nav-link">About us</Link>
		        	<Link to="/login" className="nav-link btn btn-warning btn-login">Log In</Link>
		        </div>
		    </div>
		    <div className="row slogan">
		    	<span className="slogan-text">Check company <br />risks and identities</span>
		    	<img src={img_cnxlogo} alt="img_cnxlogo" />
		    </div>
		    <div className="row">
		    	<Link to="/" className="btn slogan-button">Check Now</Link>
		    </div>
		</div>
		</YoutubeBackground>
      </header>
    );
  }
}

export default Header;