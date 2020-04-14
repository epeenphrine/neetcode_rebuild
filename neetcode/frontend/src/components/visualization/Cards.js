import React, { Component } from "react";
import Plot from 'react-plotly.js'
export class cards extends Component {
  render() {
    console.log(JSON.parse(this.props.x))
    return (
      <div className="card mb-4 shadow-sm bg-light text-dark">
        <Plot
          data={[
            {
              x: JSON.parse(this.props.x),
              y: JSON.parse(this.props.y),
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" }
            },
            { type: "bar", x: [1], y: [1] }
          ]}
          layout={{ title: this.props.ticker, width: 400, height: 400 }}
          config={{ response: true }}
        />
      </div >
    );
  }
}

export default cards;
