import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * action types
 */

const SET_NAVIGATOR_POSITION = "SET_NAVIGATOR_POSITION";
const SET_NAVIGATOR_SHAPE = "SET_NAVIGATOR_SHAPE";
const SET_NAVIGATOR_FILTER = "SET_NAVIGATOR_FILTER";
const SET_IS_WIDE_SCREEN = "SET_IS_WIDE_SCREEN";
const SET_SCROLL_TO_TOP = "SET_SCROLL_TO_TOP";
const SET_FONT_SIZE_INCREASE = "SET_FONT_SIZE_INCREASE";
const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

/*
 * action creators
 */

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

export function setFontSizeIncrease(val) {
  return { type: SET_FONT_SIZE_INCREASE, val };
}

export function setCategoryFilter(val) {
  return { type: SET_CATEGORY_FILTER, val };
}

/*
 * reducer
 */
const reducer = (state, action) => {
  switch (action.type) {
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

    case SET_FONT_SIZE_INCREASE:
      return {
        ...state,
        fontSizeIncrease: action.val
      };

    case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.val
      };

    default:
      return state;
  }
};

const initialState = {
  navigatorPosition: "is-aside",
  navigatorShape: "open",
  navigatorFilter: "",
  isWideScreen: false,
  scrollToTop: false,
  fontSizeIncrease: 1,
  categoryFilter: "all posts"
};

const createStore = () =>
  reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
export default createStore;
