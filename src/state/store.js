import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * action types
 */

const SAVE_DATA = "SAVE_DATA";
const SET_NAVIGATOR_IS_ASIDE = "SET_NAVIGATOR_IS_ASIDE";
const SET_NAVIGATOR_IN_TRANSITION = "SET_NAVIGATOR_IN_TRANSITION";

/*
 * action creators
 */
export function saveData(data) {
  return { type: SAVE_DATA, data };
}

export function setNavigatorIsAside(val) {
  return { type: SET_NAVIGATOR_IS_ASIDE, val };
}

export function setNavigatorInTransition(val) {
  return { type: SET_NAVIGATOR_IN_TRANSITION, val };
}

/*
 * reducer
 */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAVIGATOR_IS_ASIDE:
      return {
        ...state,
        navigator: {
          isAside: action.val,
          inTransition: state.navigator.inTransition
        }
      };
    case SET_NAVIGATOR_IN_TRANSITION:
      return {
        ...state,
        navigator: {
          isAside: state.navigator.isAside,
          inTransition: action.val
        }
      };
    case SAVE_DATA:
      return {
        ...state,
        posts: action.data.posts,
        pages: action.data.pages,
        parts: action.data.parts
      };
    default:
      return state;
  }
};

const initialState = {
  posts: [],
  pages: [],
  parts: [],
  info: {
    isRolledDown: false,
    inTransition: false
  },
  navigator: {
    isAside: true,
    inTransition: false
  }
};

const createStore = () =>
  reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
export default createStore;
