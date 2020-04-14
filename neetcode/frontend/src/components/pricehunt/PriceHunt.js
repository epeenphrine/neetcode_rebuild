import Cards from './Cards'
import CardsNoData from './CardsNoData'
import axios from 'axios'
import qs from 'qs'

import React, { Component } from 'react'

export class PriceHunt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: [],
      getting: false,
      images: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get("/api/images/").then(res => {
      this.setState({
        images: res.data
      })
    })
  }


  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      getting: true
    })
    const search = {
      search: this.state.search
    }
    //console.log(this.state.getting)
    //console.log(`searching for.... ${qs.stringify(search)}`)

    axios.post('/api/scrape', qs.stringify(search)).then(res => {
      this.setState({
        data: res.data
      })
    }).then(res => {
      this.setState({
        getting: false
      })
    })
    //console.log(this.state.getting)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      getting: true
    });
  }

  render() {
    //console.log(this.state.search)
    const haveData = this.state.data.scraped
    let ecommerce;
    let searched;
    let noData
    let noDataHead
    let searching

    if (this.state.getting === true) {
      searching =
        <div className="container text-center" >
          <button className="btn btn-transparent text-center" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm text-dark" role="status" aria-hidden="true"></span>
      Searching for {this.state.search}... 
    </button>
        </div>

    } else if (haveData) {
      //console.log(haveData)
      searched =
        <h2 className='container text-center '>Searched: {this.state.search}</h2>
      ecommerce = haveData.map(data => {
        return (
          <div className="col-sm-6" key={data.id}>
            <Cards
              company={data.ecommerce}
              link={data.links}
              prices={data.prices}
              average={data.average}
              url={data.url}
            />
          </div>
        )
      })
    } else {
      noDataHead = <h1 className="container text-center display-1">search these ecommerce</h1>
      noData = this.state.images.map(image => {
        return (
          <div className="col-sm-6" key={image.id}>
            <CardsNoData
              company={image.title}
              image_api={image.file}
            />
          </div>
        )
      })
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group  mt-4 w-75 container-md" style={{marginBottom:"50px"}}>
            <input
              type="text"
              className="form-control "
              placeholder="search items here"
              aria-label="search items you want"
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit" value='Submit' >
                Submit
                </button>
            </div>
          </div>
        </form>
        {searching}
        {searched}
        {noDataHead}
        <div className="row my-3">

          {noData}
        </div>
        <div className="container">
          <div className="row my-5" >
            {ecommerce}
          </div>
        </div>
      </div>
    );
  }
}
export default PriceHunt