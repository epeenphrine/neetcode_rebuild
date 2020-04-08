import React, { Component } from "react";

export class cards extends Component {
  render() {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p className="card-text">
            {this.props.title}
          </p>
          <p className="card-text">
            {this.props.content}
          </p>
          <p className="card-text">
            {this.props.publish}
          </p>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Edit
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
