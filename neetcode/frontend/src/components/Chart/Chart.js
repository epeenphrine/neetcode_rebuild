import React from "react";


import Plot from "react-plotly.js";
import axios from "axios";
import Search from "./Search";


//redux stuff
import propTypes from 'prop-types'
import { connect } from "react-redux"; //need to connect at bottom
import { getChart } from '../../actions/chart'
class Chart extends React.Component {
  static propTypes = {
    chart: propTypes.any
  }
  componentDidMount() {
    this.props.getChart()
  }
  render() {
    const listItems = this.props.chart.map( (chartt) => 
      console.log(chartt.ticker)
    )
    return (
      <div className="row">
        <div className="col-sm-6">
          <Search />
          <Plot
            data={[
              {
                x: [1],
                y: [1],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" }
              },
              { type: "bar", x:[1], y: [1] }
            ]}
            layout={{ title: 'hello', width: 400, height: 400 }}
            config={{ response: true }}
          />
        </div>
        <div className="col-sm-6">
          <Search />
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
            layout={{ title: "A Fancy Plot", width: 400, height: 400 }}
            config={{ responsive: true }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chart: state.chart.chart
  
})

export default connect(mapStateToProps, { getChart })(Chart);
