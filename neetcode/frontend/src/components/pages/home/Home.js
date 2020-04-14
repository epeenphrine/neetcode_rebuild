import React, { Component } from "react";
import Cards from "./Cards";
import axios from "axios";

const landing = {
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

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
    const projects = this.state.projects.map(project => {
      return (
        <div className="col-sm-6">
          <Cards key={project.id}
            title={project.project}
            content={project.description}
            image={project.image}
            url_slug = {project.url_slug}
          />
        </div>
      )
    })

    return (
      <body className="">
        <main>
          <div>
            <section className="jumbotron text-center text-white bg-dark" style={landing}>
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
            <h1 className="text-center font-weight-bold">WEB APPS</h1>
            </div>
            <div className="row my-5"> {projects} </div>

            <h1 className="text-center font-weight-bold">PROJECTS</h1>
        </main>
      </body>
    );
  }
}

export default Home;
