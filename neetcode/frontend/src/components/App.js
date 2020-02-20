import ReactDOM from "react-dom";
import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Plot from "react-plotly.js";
import Chart from "./Chart/Chart";
import About from "./pages/About"
export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <About />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
