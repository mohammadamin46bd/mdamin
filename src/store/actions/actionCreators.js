import * as actionTypes from "./actionTypes";
//Creating them in a way so that same structure can work in a complex combination
export const showHomepageHeading = () => {
  return {
    type: actionTypes.SHOW_HOMEPAGE_HEADING,
  };
};

export const hideHomepageHeading = () => {
  return {
    type: actionTypes.HIDE_HOMEPAGE_HEADING,
  };
};
