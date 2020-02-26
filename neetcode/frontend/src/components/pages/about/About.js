import React, { Component } from "react";
import axios from "axios";
import Plot from "react-plotly.js";

import Cards from "./Cards";

export class About extends Component {
  state = {
    posts: [],
    titles: []
  };
  componentDidMount() {
    axios.get("/api/about/").then(response => {
      this.setState({
        posts: response.data[0],
        titles: Object.keys(response.data[0])
      });
      //need to JSON parse when setting state
    });
  }
  render() {
    console.log(this.state.titles)
    return <div>
        <Cards title= {"Email"} 
        about={this.state.posts.email}/>
        <Cards 
          title={"Phone"}
        about= {this.state.posts.phone}/>
        <Cards 
          title = {'About'}
        about={this.state.posts.about}/>
    </div>;
  }
}

export default About;
