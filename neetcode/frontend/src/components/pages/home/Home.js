import React, { Component } from "react";
import Cards from "./Cards";
import axios from "axios";

const landing = {
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: "100vh"
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
    //console.log(this.state)
    const projects = this.state.projects.map(project => {
      return (
        <div className="col-sm-6" key={project.id}>
          <Cards 
            title={project.project}
            content={project.description}
            image={project.image}
            url_slug={project.url_slug}
            github={project.github}
          />
        </div>
      )
    })

    return (
      <main>
        <div>
          <section className="jumbotron text-center text-white bg-dark" style={landing}>
            <div className="container">
              <h1 className="display-2">Hello!</h1>
              <h1>
                This site  uses React as frontend and Django as backend.
              </h1>
              <h1 className="">
                The goal of this site is to learn deployment and development technologies
              </h1>
              <a href="https://github.com/epeenphrine">
                <h1 className="text-white display-2">
                  {"</ source code />"}
            </h1>
              </a>
            </div>
            <h1 className="text-left" style={{marginTop: "150px"}}>
              scroll down to see web apps 
            </h1>
          </section>
          <h1 className="text-center font-weight-bold">WEB APPS</h1>
        </div>
        <div className="row my-5"> {projects} </div>

        <h1 className="text-center font-weight-bold">PROJECTS</h1>
      </main >
    );
  }
}

export default Home;
