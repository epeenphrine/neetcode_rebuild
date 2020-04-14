import React, { Component } from "react";

export class cards extends Component {
  render() {
    return (
      <div className="card mb-4 shadow-sm bg-light text-dark ">
        <div className="card-body">
          <h2 className="card-text font-weight-normal">
            {this.props.title}
          </h2>
          <h2 className="card-text">
            {this.props.content}
          </h2>
          <p className="card-text">
            {this.props.publish}
          </p>
          <a href={this.props.url_slug}>

            <img src={this.props.image} className="container" hre />
          </a>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Live
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Code
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
