import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * action types
 */

const SAVE_DATA = "SAVE_DATA";
const SET_NAVIGATOR_POSITION = "SET_NAVIGATOR_POSITION";
const SET_NAVIGATOR_SHAPE = "SET_NAVIGATOR_SHAPE";

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

    default:
      return state;
  }
};

const initialState = {
  posts: [],
  pages: [],
  parts: [],
  navigatorPosition: "is-featured",
  navigatorShape: "open"
};

const createStore = () =>
  reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
export default createStore;
