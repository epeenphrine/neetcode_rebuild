import React, { Component } from 'react'

export class CardsNoData extends Component {
    render() {
        return (
            <div className="card mb-4 shadow-sm bg-transparent text-dark">
                <div className="card-body container">
                    <h2 className="card-text font-weight-normal">
                    </h2>
                    <h2 className="card-text">
                    </h2>
                    <p className="card-text">
                    </p>

                        <img src={this.props.image_api} className="container" />
                  
                    <div className="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsNoData
