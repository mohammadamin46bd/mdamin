import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import HomepageFooter from "./HomepageFooter";

import * as actions from "../store/actions/actionCreators";

class BackendWork extends Component {
  componentDidMount() {
    this.props.hideHomepageHeading();
  }

  render() {
    return (
      <ResponsiveContainer>
        <Header
          as="h1"
          content="Some previous backend work"
          style={{
            fontSize: "2em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "1.5em",
          }}
        />

        <p>Some previous backend work experience will be added here .</p>

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


export default connect(null, mapDispatchToProps)(BackendWork);
