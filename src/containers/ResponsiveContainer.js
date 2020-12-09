import PropTypes from "prop-types";
import React from "react";

import { MediaContextProvider } from "../common/MediaForResponsive";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

const responsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

responsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default responsiveContainer;
