import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Media } from "../common/MediaForResponsive";
import HomepageHeading from "../Components/HomepageHeading";

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => {
    console.log("handleSidebarHide");
    return this.setState({ sidebarOpened: false });
  };

  handleToggle = () => {
    console.log("handleToggle");
    return this.setState({ sidebarOpened: true });
  };

  componentWillUnmount() {
    this.setState({ sidebarOpened: false });
  }

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
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
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={
                this.props.showHideHomePageHeading
                  ? { minHeight: 350, padding: "1em 0em" }
                  : { padding: "1em 0em" }
              }
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  {/*                     <Menu.Item position='right'>
                      <Button as='a' inverted>
                        Log in
                      </Button>
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Menu.Item> */}
                </Menu>
              </Container>
              {this.props.showHideHomePageHeading && <HomepageHeading mobile />}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state) => {
  return {
    showHideHomePageHeading: state.showHideHomePageHeading,
  };
};

export default connect(mapStateToProps)(MobileContainer);
