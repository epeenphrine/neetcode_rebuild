import React, { Component } from "react";

import axios from "axios";

//components
import Cover from "./Cover";
import Card from "./Card"
import { Row } from "react-bootstrap";
export class About extends Component {
  //type of data
  state = {
    roles: []
  };

  componentDidMount() {
    axios.get("/api/about/").then(res => {
      this.setState({ roles: res.data });
    });
  }
  render() {
    console.log(this.state);
    const roles = this.state.roles.map(role => {
      return (
        <Card
          key={role.id}
          role={role.role}
          languages={role.languages}
          libraries={role.libraries}
        />
      );
    });

    return (
      <div>
        <section className="jumbotron text-center bg-light">
          <h1 className="font-weight-normal" >contact me</h1>
          <row>
          <h3>Email: donghyunwon610@gmail.com</h3>
          </row>
          <h3>Phone: 646-580-7514</h3>
          <h3>
            GitHub: <a href="https://github.com/epeenphrine">https://github.com/epeenphrine</a>
          </h3>

          <h1 className="font-weight-normal">
            I am a developer with experience in  backend, frontend, and deployment technologies.
            </h1>
        </section>
      <div className="row">
        {roles}
      </div>
      </div>
    );
  }
}
export default About;
