import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * action types
 */

const TOGGLE_INFO_SCREEN = "TOGGLE_INFO";
const UPDATE_POSTS_DATA = "UPDATE_POSTS_DATA";
const SAVE_DATA = "SAVE_DATA";
const SET_NAVIGATOR_IS_ASIDE = "SET_NAVIGATOR_IS_ASIDE";
const SET_NAVIGATOR_IN_TRANSITION = "SET_NAVIGATOR_IN_TRANSITION";

/*
 * action creators
 */
export function toggleInfoScreen() {
  return { type: TOGGLE_INFO_SCREEN };
}

export function updatePostsData(data) {
  return { type: UPDATE_POSTS_DATA, data };
}

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
    case UPDATE_POSTS_DATA:
      return {
        ...state,
        posts: action.data
      };
    case SAVE_DATA:
      return {
        ...state,
        posts: action.data.posts,
        parts: action.data.parts
      };
    case TOGGLE_INFO_SCREEN:
      return {
        ...state,
        info: {
          isRolledDown: !state.info.isRolledDown
        }
      };
    default:
      return state;
  }
};

const initialState = {
  posts: [],
  parts: [],
  info: {
    isRolledDown: false,
    inTransition: false
  },
  navigator: {
    isAside: false,
    inTransition: false
  }
};

const createStore = () =>
  reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
export default createStore;
