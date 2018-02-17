import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { setNavigatorIsAside, setNavigatorInTransition } from "../../state/store";
import Posts from "./Posts";

const styles = theme => ({
  navigator: {
    willChange: "left",
    background: theme.navigator.colors.background,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: "ease",
    width: "100%",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      "&.inTransitionTo, &.isAside": {
        left: "-100%",
        transition: "left 1s",
        transitionTimingFunction: "ease"
      },
      "&.inTransitionTo": {
        borderRight: "1px solid #ddd"
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px)`,
      transition: "left .8s, width 0s",
      transitionTimingFunction: "ease",
      borderRight: "1px solid #ddd",
      left: `${theme.info.sizes.width}px`,
      "&.inTransitionTo": {
        left: `calc(-100vw + 2 * ${theme.info.sizes.width}px)`,
        transition: "left .8s, opacity 0s .8s",
        transitionTimingFunction: "ease",
        opacity: 0
      },
      "&.isAside": {
        transition: "left 0s, opacity .3s",
        transitionTimingFunction: "ease",
        opacity: 1,
        top: "100px",
        borderTop: "1px solid #ddd",
        borderRight: "none",
        left: 0,
        width: `${theme.info.sizes.width - 1}px`,
        zIndex: 1
      },
      "&.inTransitionFrom": {
        left: `calc(-100vw + 2 * ${theme.info.sizes.width}px)`,
        transition: "left 0s, opacity 0s",
        transitionTimingFunction: "ease",
        opacity: 0,
        borderRight: "1px solid #ddd",
        boxShadow: "5px 0 5px 0 rgba(0,0,0,.02)"
      }
    }
  }
});

class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.linkOnClick = this.linkOnClick.bind(this);
  }

  linkOnClick() {
    if (!this.props.isAside) {
      this.props.setInTransition("To");

      setTimeout(() => {
        this.props.setInTransition(false);
        this.props.setIsAside(true);
      }, 1100);
    }
  }

  render() {
    const { classes, posts, isAside, inTransition, isHidden } = this.props;

    return (
      <div
        className={`${classes.navigator} ${inTransition ? "inTransition" + inTransition : ""} ${
          isAside ? "isAside" : ""
        }`}
      >
        {this.props.posts.length && (
          <Posts
            posts={posts}
            linkOnClick={this.linkOnClick}
            isAside={isAside}
            inTransition={inTransition}
            isHidden={isHidden}
          />
        )}
      </div>
    );
  }
}

Navigator.propTypes = {
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  isAside: PropTypes.bool.isRequired,
  isActive: PropTypes.any,
  isHidden: PropTypes.bool,
  inTransition: PropTypes.any.isRequired,
  setIsAside: PropTypes.func.isRequired,
  setInTransition: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    isAside: state.navigator.isAside,
    inTransition: state.navigator.inTransition,
    isActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsAside: val => dispatch(setNavigatorIsAside(val)),
    setInTransition: val => dispatch(setNavigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Navigator));
