import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Menu, Segment, Visibility } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Media } from "../common/MediaForResponsive";

import HomepageHeading from "../Components/HomepageHeading";

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => {
    return this.setState({ fixed: false });
  };
  showFixedMenu = () => {
    return this.setState({ fixed: true });
  };
  componentWillUnmount() {
    this.setState({ sidebarOpened: false });
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={
              this.props.showHideHomePageHeading
                ? { minHeight: 450, padding: "1em 0em" }
                : { padding: "1em 0em" }
            }
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item name="home" as={NavLink} exact to="/">
                  Hem
                </Menu.Item>
                <Menu.Item name="workgallary" as={NavLink} to="/workgallary">
                 Projektgalleri
                </Menu.Item>
                <Menu.Item name="frontend" as={NavLink} to="/frontend">
                  Frontend
                </Menu.Item>
                <Menu.Item name="backend" as={NavLink} to="/backend">
                  Backend
                </Menu.Item>
                <Menu.Item name="fullstack" as={NavLink} to="/fullstack">
                  Fullstack
                </Menu.Item>

                {/*                 <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item> */}
              </Container>
            </Menu>

            {this.props.showHideHomePageHeading && <HomepageHeading />}
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state) => {
  return {
    showHideHomePageHeading: state.showHideHomePageHeading,
  };
};

export default connect(mapStateToProps)(DesktopContainer);
