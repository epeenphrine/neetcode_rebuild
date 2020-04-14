import React from "react";

import axios from 'axios'

import Plot from "react-plotly.js";
import Search from "./Search";


//redux stuff
import Cards from './Cards'
import propTypes from 'prop-types'
import { connect } from 'react-redux'; //need to connect at bottom
import { getChart } from '../../actions/chart'

class Chart extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get("/api/data/").then(res => {
      this.setState({
        data: res.data
      })
    })

  }
  render() {
    console.log(this.state.data)
    const charts = this.state.data.map(dat => {
      return (
        <Cards
          key={dat.id}
          ticker={dat.ticker}
          x = {dat.x}
          y= {dat.y}
        />
      )
    })

    return (
      <div className="row" style={{paddingTop: "50px"}}>
          <Search />
          {charts}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chart: state.chart.chart

})

export default connect(mapStateToProps, { getChart })(Chart);
