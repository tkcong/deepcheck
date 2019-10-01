import React, { Component } from 'react';

import './../assets/styles/pages/home.css';

import img_service1 from './../assets/images/img-service1.png';
import img_service2 from './../assets/images/img-service2.png';
import img_service3 from './../assets/images/img-service3.png';

class Home extends Component {
  render(){
    return (
      <main id="page_home">
          <div className="container">
          	<div className="row">
          		<div className="col-sm-6">
          			<div className="img-service">
          				<img src={ img_service1 } alt="service image" />
          			</div>
          		</div>
          		<div className="col-sm-6">
          			<div className="comment-service">
          				<div className="comment-title">
          					Document Check
          				</div>
          				<div className="comment-subtitle">
          					SERVICE 1
          				</div>
          				<div className="comment-text">
          					Are you unsure if the document you have in hand is a true or false document? Our AI based detection system can detect fraud in any document in a few minutes. 
          				</div>
          				<div className="btn-comment">
          					<button className="btn btn-primary">Document Check</button>
          				</div>
          			</div>
          		</div>
          	</div>
          	<div className="row">
          		<div className="col-sm-6">
          			<div className="comment-service">
          				<div className="comment-title">
          					Document Check
          				</div>
          				<div className="comment-subtitle">
          					SERVICE 2
          				</div>
          				<div className="comment-text">
          					Are you unsure if the document you have in hand is a true or false document? Our AI based detection system can detect fraud in any document in a few minutes. 
          				</div>
          				<div className="btn-comment">
          					<button className="btn btn-primary">Document Check</button>
          				</div>
          			</div>
          		</div>
          		<div className="col-sm-6">
          			<div className="img-service">
          				<img src={ img_service2 } alt="service image" />
          			</div>
          		</div>
          	</div>
          	<div className="row">
          		<div className="col-sm-6">
          			<div className="img-service">
          				<img src={ img_service3 } alt="service image" />
          			</div>
          		</div>
          		<div className="col-sm-6">
          			<div className="comment-service">
          				<div className="comment-title">
          					Document Check
          				</div>
          				<div className="comment-subtitle">
          					SERVICE 3
          				</div>
          				<div className="comment-text">
          					Are you unsure if the document you have in hand is a true or false document? Our AI based detection system can detect fraud in any document in a few minutes. 
          				</div>
          				<div className="btn-comment">
          					<button className="btn btn-primary">Document Check</button>
          				</div>
          			</div>
          		</div>
          	</div>
          </div>
      </main>
    );
  }
}

export default Home;