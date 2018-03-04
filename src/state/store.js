import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * action types
 */

const SAVE_DATA = "SAVE_DATA";
const SET_NAVIGATOR_POSITION = "SET_NAVIGATOR_POSITION";
const SET_NAVIGATOR_SHAPE = "SET_NAVIGATOR_SHAPE";
const SET_NAVIGATOR_FILTER = "SET_NAVIGATOR_FILTER";
const SET_IS_WIDE_SCREEN = "SET_IS_WIDE_SCREEN";
const SET_SCROLL_TO_TOP = "SET_SCROLL_TO_TOP";

/*
 * action creators
 */
export function saveData(data) {
  return { type: SAVE_DATA, data };
}

export function setNavigatorPosition(val) {
  return { type: SET_NAVIGATOR_POSITION, val };
}

export function setNavigatorShape(val) {
  return { type: SET_NAVIGATOR_SHAPE, val };
}

export function setNavigatorFilter(val) {
  return { type: SET_NAVIGATOR_FILTER, val };
}

export function setIsWideScreen(val) {
  return { type: SET_IS_WIDE_SCREEN, val };
}

export function setScrollToTop(val) {
  return { type: SET_SCROLL_TO_TOP, val };
}

/*
 * reducer
 */
const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        posts: action.data.posts,
        pages: action.data.pages,
        parts: action.data.parts
      };

    case SET_NAVIGATOR_POSITION:
      return {
        ...state,
        navigatorPosition: action.val
      };

    case SET_NAVIGATOR_SHAPE:
      return {
        ...state,
        navigatorShape: action.val
      };

    case SET_NAVIGATOR_FILTER:
      return {
        ...state,
        navigatorFilter: action.val
      };

    case SET_IS_WIDE_SCREEN:
      return {
        ...state,
        isWideScreen: action.val
      };

    case SET_SCROLL_TO_TOP:
      return {
        ...state,
        scrollToTop: action.val
      };

    default:
      return state;
  }
};

const initialState = {
  posts: [],
  pages: [],
  parts: [],
  navigatorPosition: "is-aside",
  navigatorShape: "open",
  navigatorFilter: "",
  isWideScreen: false,
  scrollToTop: false
};

const createStore = () =>
  reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
export default createStore;
