import React, { Component } from "react";
import { connect } from "react-redux";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import HomepageFooter from "./HomepageFooter";
import * as actions from "../store/actions/actionCreators";
import LiveWorkSites from './LiveWorkSites';

class WorkGallary extends Component {
  componentDidMount() {
    this.props.hideHomepageHeading();
  }

  render() {
    return (
      <ResponsiveContainer>
        <LiveWorkSites />
        <HomepageFooter />
      </ResponsiveContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideHomepageHeading: () => dispatch(actions.hideHomepageHeading()),
  };
};

export default connect(null, mapDispatchToProps)(WorkGallary);
