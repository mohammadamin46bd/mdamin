import React, { Component } from "react";
import { connect } from "react-redux";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import Educations from "./Educations";
import Experiences from "./Experiences";
import HomepageFooter from "./HomepageFooter";
import LicensesAndCertification from "./LicensesAndCertification";
import * as actions from "../store/actions/actionCreators";

class HomepageLayout extends Component {
  componentDidMount() {
    this.props.showHomepageHeading();
  }

  render() {
    return (
      <ResponsiveContainer>
        {/* Experience   */}
        <Experiences />
        {/* Education   */}
        <Educations />
        {/* Licenses & CertificationsData   */}
        <LicensesAndCertification />
        {/* Home page footer   */}
        <HomepageFooter />
      </ResponsiveContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showHomepageHeading: () => dispatch(actions.showHomepageHeading()),
  };
};

export default connect(null, mapDispatchToProps)(HomepageLayout);
