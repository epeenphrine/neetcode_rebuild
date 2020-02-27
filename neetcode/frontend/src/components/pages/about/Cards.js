import React, { Component } from "react";


export class Cards extends Component {
  componentDidMount;
  render() {
    return (
      <div>
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.about}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
