import React, { Component } from "react";
import axios from "axios";
import Plot from "react-plotly.js";

export class About extends Component {
//backend test 
  componentDidMount() {
    axios.get("/main/api/about/")
    .then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <h1>this is working</h1>
      </div>
    );
  }
}

export default About;
