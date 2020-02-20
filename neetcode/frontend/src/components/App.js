//react stuff
import ReactDOM from "react-dom";
import React, { Component } from "react";

//component stuff 
import Navbar from "./layout/Navbar";
import Plot from "react-plotly.js";
import Chart from "./Chart/Chart";
import About from "./pages/About"
import Home from './pages/Home'

//router stuff
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
        <Navbar />
        <div className="container">
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/chart' exact component={Chart} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
