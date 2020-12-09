import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Media } from "../common/MediaForResponsive";

class CommonNavBar extends Component {
  state = {};

  hideFixedMenu = () => {
    return this.setState({ fixed: true });
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
            textAlign="center"
            style={{ minHeight: 150, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item name="home" as={NavLink} exact to="/">
                  Home
                </Menu.Item>
                <Menu.Item name="workgallary" as={NavLink} to="/workgallary">
                  Work gallery
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
                {/*               <Menu.Item position='right'>
                  <Button as='a' >
                    Log in
                  </Button>
                  <Button as='a'  primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item> */}
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

CommonNavBar.propTypes = {
  children: PropTypes.node,
};

export default CommonNavBar;
