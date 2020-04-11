import React, { Component } from "react";

export class cards extends Component {
  render() {
    return (
      <div className="card mb-4 shadow-sm bg-light text-dark ">
        <div className="card-body">
          <h1 className="card-text font-weight-normal">
            {this.props.role}
          </h1>
          <h2 className="card-text">
            {this.props.languages}
          </h2>
          <p className="card-text">
            {this.props.libraries}
          
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
