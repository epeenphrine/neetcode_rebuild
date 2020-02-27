import React, { Component } from "react";

import Cards from "./Cards";

import { connect } from "react-redux";
import propTypes, { string } from "prop-types";
import { getAbout } from "../../../actions/about";
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
    console.log(this.props.abouts)
     const abouts = this.props.abouts.map( about => {

        return <Cards key={'1'} title={about.about} about={about.about}/>
     })
    return (
      <div>
        <section>
          {abouts}
        </section>
      </div>
    );
  }
}
// do all adjusting of data here 
const mapStateToProps = state => ({
  abouts: state.about.about,
  about: state.about.about.about,
  email: state.about.about.email,
  phone: state.about.about.phone,
});
export default connect(mapStateToProps, { getAbout })(About);
