import React, { Component } from "react";
import axios from 'axios'


export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/scrape', {
      search: this.state.search
    }).then ( res => {
      this.setState({
        data: res.data
      })
    })
  }
  
  handleClick(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    console.log(this.state)
    const haveData = this.state.data.scraped
    let stuff;
    if (haveData) {
      stuff = <h2> hello ! we have data</h2>
    } else {
      stuff = <h2 className='text-center'>we don't have data</h2>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group  mt-4 w-75 container-md">
            <input
              type="text"
              className="form-control "
              placeholder="search items here"
              aria-label="search items you want"
              aria-describedby="basic-addon2"
              search={this.state.search}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit" value='Submit'>
                Submit
            </button>
            </div>
          </div>
        </form>
        {stuff}
      </div>
    );
  }
}

export default Search;
