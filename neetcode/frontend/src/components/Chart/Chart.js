import React from "react";
import Plot from "react-plotly.js";
import style from "styled-components";

class Chart extends React.Component {
  render() {
    return (
      <div className="row">
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
                layout={{ width: 500, height: 500, title: "A Fancy Plot" }}
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
                layout={{ width: 500, height: 500, title: "A Fancy Plot" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
