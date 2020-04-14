import React, { Component } from 'react'

export class Cards extends Component {
    render() {

        return (
                <div className="card mb-4 shadow-sm bg-light" style={{ marginLeft: "20px" }}>
                    <a href={this.props.url} className="text-dark">
                        <div className="card-body">

                            <h1 className="card-text font-weight-bold">
                                {this.props.company}
                            </h1>
                            <h2 className='text-dark '>
                                Average Price:
                    </h2>
                            <h2 className="text-dark ">
                                ${this.props.average}
                            </h2>
                            <p className="card-text">
                            </p>
                            <p className="card-text">
                            </p>
                        </div>
                    </a>
                </div>
        )
    }
}

export default Cards

