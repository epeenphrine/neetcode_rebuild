import React, { Component } from "react";
import Card from "../card/Card";
export class Home extends Component {
  render() {
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
            </div>
          </section>

          <div className="row">{items}</div>
        </div>
      </main>
    );
  }
}

export default Home;
