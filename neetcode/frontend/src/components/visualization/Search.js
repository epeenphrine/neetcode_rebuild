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
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
        <div className="input-group  mt-4 w-75 container-md">
          <input
            type="text"
            className="form-control "
            placeholder="Ticker"
            aria-label="Ticker"
            aria-describedby="basic-addon2"
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit" value='Submit'>
              Search
            </button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default Search;
