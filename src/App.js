import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import AboutUs from './pages/AboutUs';
import AccountingCheck from './pages/AccountingCheck';
import DocumentCheck from './pages/DocumentCheck';
import Home from './pages/Home';
import IDCheck from './pages/IDCheck';

import Todos from './components/Todos';

import './assets/styles/app.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about-us" exact component={ AboutUs } />
            <Route path="/accounting-check" exact component={ AccountingCheck } />
            <Route path="/document-check" exact component={ DocumentCheck } />
            <Route path="/id-check" exact component={ IDCheck } />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;