import React, { Component } from "react";
import Card from "../card/Card";
import axios from "axios";


export class Home extends Component {

  state = {
    projects: []
  }

  componentDidMount() {

    axios.get("/api/project/").then(res => {
      this.setState({
        projects: res.data
      })
    })

  }
  render() {
    console.log(this.state)
    const projects = this.state.projects.map( project => {
      return (
        <div className="col-sm-6">
          <div className="album py-5 bg-light ">
            <Card id={project.id}
            title= {project.title}
            content = {project.content}
            publish = {project.published} />
          </div>
        </div>
      )
    })
    const stuffs = [1, 2, 3, 4, 5, 6, 7, 8];
    const items = stuffs.map(stuff => {
      return (
        <div className="col-sm-6">
          <div className="album py-5 bg-light">
            <Card testing={stuff} />
          </div>
        </div>
      );
    });
    return (
      <main>
        <div>
          <section className="jumbotron text-center bg-light">
            <div className="container">
              <h1>Hello!</h1>
              <h3 className="lead ">
                The site uses React as frontend and Django as backend.
              </h3>
              <h3 className="lead ">
                It is designed to dynamically update contents using the content management system of django
              </h3>
              <h3 className="lead">
                the contents are served using the djangorestframework
              </h3>
            </div>
          </section>

          <div className= "row "> {projects} </div>
        </div>
      </main>
    );
  }
}

export default Home;
