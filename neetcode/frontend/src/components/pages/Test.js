import React, { Component } from 'react'
import amazon from './images/amazon.png'

const myStyle = {
    height: '200px',
    width: '300px'
}


export class Test extends Component {



    render() {
        return (
            <div className="container">
                <div class="card" >
                <img src="http://localhost:8000/media/images/0_bVnfVVG7Y7qXQcO1_4IFodE4.png" style={myStyle}class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        )
    }
}

export default Test
