import React, { Component } from "react";

import { connect } from "react-redux";
import propTypes, { string } from "prop-types";
import { getAbout } from "../../actions/about";

import axios from 'axios'

export class About extends Component {
  //type of data
 state = {
   about: [],
 }
  //call here to mount the api
  componentDidMount() {
    axios.get('/api/about/')
    .then(res => {
      this.setState({ about: res.data[0] })
    })
  }

  render() {
    console.log(this.state.about)
    return (
      <div className="cover-fill d-flex w-100 h-100 p-3 mx-auto flex-column text-center bg-transparent align-content-center" >
      

        <main role="main" className="inner cover my-auto">
          <h1 className="cover-heading">FullStack Developer</h1>
          <p className="lead">
            {this.state.about.description}
          </p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary">
              Learn more
            </a>
          </p>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>
              Cover template for{" "}
              <a href="https://getbootstrap.com/">Bootstrap</a>, by{" "}
              <a href="https://twitter.com/mdo">@mdo</a>.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
export default About