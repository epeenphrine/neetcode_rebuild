import React, { Component } from "react";

export class cards extends Component {
  render() {
    return (
      <div className="card mb-4 shadow-sm bg-light text-dark">
        <div className="card-body">
          <h2 className="card-text font-weight-normal text-center">
            {this.props.title}
          </h2>
          <a href={this.props.url_slug}>

            <img src={this.props.image} className="container" />
          </a>
          <h2 className="card-text">
            {this.props.content}
          </h2>
          <p className="card-text">
            {this.props.publish}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={this.props.url_slug}>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  live
              </button>
              </a>
              <a href={this.props.github}>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  code
              </button>
              </a>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div >
      </div >
    );
  }
}

export default cards;
