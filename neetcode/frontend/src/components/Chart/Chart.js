import React from "react";
import Plot from "react-plotly.js";
import style from "styled-components";
import axios from 'axios'
import Search from './Search'

class Chart extends React.Component {
  state = {
    ticker: '',
    x: null, //set null because it's in a list
    y: null,
  }
  componentDidMount() {
    axios.get("/api/data/").then(response => {
      this.setState({ticker: response.data[2].ticker, x: JSON.parse(response.data[2].x), y: JSON.parse(response.data[2].y)}) //need to JSON parse when setting state
    });
  }

  render() {
    console.log(this.state.ticker)
    console.log(this.state.x)
    console.log(this.state.y)
    return (
      <div className="row">
        <div className="col-sm-6">
        <Search />
          <div className="card">
            <div className="card-body">
            <Plot
                data={[
                  {
                    x: this.state.x,
                    y: this.state.y,                  
                    type: "scatter",
                    mode: "lines+markers",
                    marker: { color: "red" }
                  },
                  { type: "bar", x: this.state.x, y: this.state.y }
                ]}
                layout={{ title: this.state.ticker, width:400, height:400}}
                config = {{ response: true}}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <Plot
                data={[
                  {
                    x: [1, 2, 3, 4, 5, 6],
                    y: [2, 6, 3, 0, 5, 10],
                    type: "scatter",
                    mode: "lines+markers",
                    marker: { color: "red" }
                  },
                  { type: "bar", x: [1, 2, 3, 4, 5, 6], y: [2, 6, 3, 0, 5, 10] }
                ]}
                layout={{ title: "A Fancy Plot", width:400, height:400 }}
                config = {{responsive: true}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
