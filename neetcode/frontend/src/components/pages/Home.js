import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return ( <div className="row">
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
        )
    }
}

export default Home
