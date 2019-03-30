import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';



import Mynavbar from './Components/Navbar';
import Carrousel from './Components/Carrousel';
import Articles from './Components/Articles';

import logo from './logo.svg';
import './App.css';
import Sign_up from './Components/Sign_up';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Mynavbar />
          <br>
          </br>
          <br>
          </br>
          <center>
            <Carrousel />
          </center>
          <br />
          <Route exact path="/" component={Articles} />
          <Route path="/signup" component={Sign_up} />
          <Route path="/login" component={Login} />

          <br>
          </br>
          <footer style={{textAlign:'center', padding:40}}>
            All rights are reserved by Raswdhaty° 2019
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
