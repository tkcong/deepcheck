import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import './../assets/styles/footer.css';
import img_logo from './../assets/images/logo.png';

class Footer extends Component {
  render(){
    return (
		<footer>
			<div className="container text-center">
				<div className="row">
					<div className="col-sm-12 img-logo">
						<Link to="/">
							<img src={img_logo} alt="deepcheck"/>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="offset-sm-2 col-sm-8">
						<div className="navbar">
							<Link to="/document-check" className="nav-link">Document Check</Link>
							<Link to="/accounting-check" className="nav-link">Accounting Check</Link>
							<Link to="/id-check" className="nav-link">ID Check</Link>
							<Link to="/api" className="nav-link">API Document</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<FontAwesomeIcon icon={faFacebook} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faGoogle} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faLinkedin} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faTwitter} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faWhatsapp} className="fontawesome-icon" size="lg"/>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-sm-12 copyright">
						<span>&copy;2019 DeepCheck.One all rights reserved</span>
					</div>
				</div>
			</div>
		</footer>
    );
  }
}

export default Footer;