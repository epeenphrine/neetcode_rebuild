import React, { Component } from "react";

export class Cover extends Component {
  render() {
    return (
      <div>
        <div className="cover-fill d-flex w-100 h-100 p-3 mx-auto flex-column text-center bg-transparent align-content-center">
          <main role="main" className="inner cover my-auto">
            <h1 className="cover-heading">{this.props.role}</h1>
            <p className="lead"></p>
            <p className="lead">
              <h2> {this.props.languages} </h2>
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>
                {this.props.libraries}
              
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Cover;
