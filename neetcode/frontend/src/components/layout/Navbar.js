import React, { Component } from "react";

const navbarStyle = {
  height: "100px",
  fontSize: '20px'
};
const logoStyle = {
  fontSize: '30px'
}

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={navbarStyle}
      >
        <div className="container">
          <a className="navbar-brand" href="#" style={logoStyle}>
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
              <a className="nav-item nav-link active" href="#">
                github.com/epeenphrine{" "}
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                about/contact
              </a>
              <a className="nav-item nav-link" href="#">
                Pricing
              </a>
              <a className="nav-item nav-link disabled" href="#">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
