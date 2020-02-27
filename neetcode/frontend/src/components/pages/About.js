import React, { Component } from "react";

import { connect } from "react-redux";
import propTypes, { string } from "prop-types";
import { getAbout } from "../../actions/about";
export class About extends Component {
  //type of data
  static propTypes = {
    about: propTypes.string,
    email: propTypes.string,
    phone: string
  };
  //call here to mount the api
  componentDidMount() {
    this.props.getAbout();
  }

  render() {
    console.log(this.props.abouts);
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">Cover</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary">
              Learn more
            </a>
          </p>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>
              Cover template for{" "}
              <a href="https://getbootstrap.com/">Bootstrap</a>, by{" "}
              <a href="https://twitter.com/mdo">@mdo</a>.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
// do all adjusting of data here
const mapStateToProps = state => ({
  abouts: state.about.about,
  about: state.about.about.about,
  email: state.about.about.email,
  phone: state.about.about.phone
});
export default connect(mapStateToProps, { getAbout })(About);
