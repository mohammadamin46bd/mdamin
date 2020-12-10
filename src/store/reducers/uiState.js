import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  showHideHomePageHeading: true,
};

const showHomePageHeading = (state, action) => {
  console.log("executing showHomePageHeading");
  return updateObject(state, { showHideHomePageHeading: true });
};

const hideHomePageHeading = (state, action) => {
  return updateObject(state, { showHideHomePageHeading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_HOMEPAGE_HEADING:
      return showHomePageHeading(state, action);
    case actionTypes.HIDE_HOMEPAGE_HEADING:
      return hideHomePageHeading(state, action);
    default:
      return state;
  }
};

export default reducer;
