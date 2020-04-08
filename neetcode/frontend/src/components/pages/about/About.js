import React, { Component } from "react";

import axios from "axios";

import Cover from "./Cover";

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
        <Cover
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
            <h1 className='font-weight-bold'>contact me</h1>
            <h3>Email: donghyunwon610@gmail.com</h3>
            <h3>Phone: 646-580-7514</h3>
            <h3>
              GitHub: <a href="https://github.com/epeenphrine">https://github.com/epeenphrine</a>
            </h3>
            <p className="lead my-5">
              I do development to deployment. I've listed Languages and Libraries i'm familiar with.
            </p>
        </section>

        {roles}
      </div>
    );
  }
}
export default About;
