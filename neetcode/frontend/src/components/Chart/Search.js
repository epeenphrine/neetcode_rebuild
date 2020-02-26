import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "ticker"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }
  handleClick(event) {
    this.setState({ value: event.target.value})
  }

  render() {
    return (
      <div>
        <form className="form-inline ">
          <div className="form-group mx-sm-3 mb-2 py my-4">
            <label for="inputPassword2" className="sr-only">
              Ticker
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Ticker"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={this.handleClick}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
