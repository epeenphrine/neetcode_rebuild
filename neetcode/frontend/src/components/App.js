//react stuff
import ReactDOM from "react-dom";
import React, { Component } from "react";

//component stuff
import Navbar from "./layout/Navbar";
import Plot from "react-plotly.js";
import Chart from "./Chart/Chart";
import About from "./pages/About";
import Home from "./pages/Home";

//bootstrap stuff
import { Button } from 'react-bootstrap'
//router stuff
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/chart" exact component={Chart} />
            </Switch>
          </div>
          
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
