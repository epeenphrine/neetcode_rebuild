import React, { Component } from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  fontSize: "20px"
};
const logoStyle = {
  fontSize: "30px"
};

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={navbarStyle}
        >
          <div className="container">
            <a className="navbar-brand" href="/" style={logoStyle}>
              NEETcode
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link active"
                  href="https://github.com/epeenphrine"
                >
                  github.com/epeenphrine
                  <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link current" href="/about">
                  about/contact
                </a>
                <a className="nav-item nav-link current" href="/chart">
                  Demo
                </a>
                <a className="nav-item nav-link disabled" href="#">
                  Disabled
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
