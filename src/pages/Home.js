import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ValidatedLoginForm from './ValidatedLoginForm';

import './styles/styles.css';
//import platziconfLogoImage from '../images/platziconf-logo.svg';
// import astronautsImage from '../images/astronauts.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className ="App">
        <br />
        <h1>Validated Login Form</h1> 
              {/* <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              /> */}

              <br />
              <ValidatedLoginForm />
              <br />
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            <div className="Home__col d-none d-md-block col-md-8">
              {/* <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              /> */}
            </div>
          
        </div>
      </div>
    );
  }
}
