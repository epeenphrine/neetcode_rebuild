import React, { Component } from "react";
import styled from "styled-components";

import Plot from "react-plotly.js";

export class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
        <div class="card w-50">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
