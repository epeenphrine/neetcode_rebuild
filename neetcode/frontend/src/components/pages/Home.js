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
          <section className="jumbotron text-center">
            <div className="container">
              <h1>Album example</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </section>

          <div className="row">{items}</div>
        </div>
      </main>
    );
  }
}

export default Home;
