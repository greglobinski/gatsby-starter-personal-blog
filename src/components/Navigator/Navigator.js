import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";

import { setNavigatorPosition, setNavigatorShape } from "../../state/store";
import { moveNavigatorAside } from "./../../utils/shared";

import Posts from "./Posts";

const styles = theme => ({
  navigator: {
    willChange: "left, top, width",
    background: theme.navigator.colors.background,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    transitionTimingFunction: "ease",
    transform: "translate3d(0, 0, 0)",
    transition: "left 800ms",
    width: "100%",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      "&.in-transition-to, &.is-aside": {
        left: "-100%",
        transition: "left 800ms"
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      "&.is-featured": {
        transition: "left .9s",
        width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBarWidth}px)`,
        left: `${theme.info.sizes.width}px`,
        top: 0
      },
      "&.is-aside": {
        transition: "top 0.5s",
        left: 0,
        width: `${theme.info.sizes.width - 1}px`,
        zIndex: 1,
        "&.closed": {
          top: `calc(100vh - ${theme.navigator.sizes.closedHeight}px)`,
          height: `${theme.navigator.sizes.closedHeight}px`
        },
        "&.open": {
          top: "100px",
          height: `calc(100vh - 100px)`
        },
        "&::after": {
          content: `""`,
          position: "absolute",
          top: 0,
          left: theme.main.sizes.linesMargin,
          right: theme.main.sizes.linesMargin,
          height: 0,
          borderTop: `1px solid ${theme.main.colors.lines}`
        }
      },
      "&.moving-aside": {
        transition: "left 0.9s",
        left: `calc(-100vw + ${2 * theme.info.sizes.width + 60}px)`,
        width: `calc(100vw - ${theme.info.sizes.width}px - 60px)`,
        top: 0
      },
      "&.resizing-aside": {
        transition: "none",
        width: `${theme.info.sizes.width - 1}px`,
        top: "100vh",
        left: 0
      },
      "&.moving-featured": {
        transition: "top .3s",
        top: "100vh",
        left: 0,
        zIndex: 1,
        width: `${theme.info.sizes.width - 1}px`
      },
      "&.resizing-featured": {
        transition: "none",
        top: 0,
        left: `calc(-100vw + ${2 * theme.info.sizes.width + 60}px)`,
        width: `calc(100vw - ${theme.info.sizes.width}px - 60px)`
      }
    }
  }
});

class Navigator extends React.Component {
  linkOnClick = moveNavigatorAside.bind(this);

  openOnClick = e => {
    this.props.setNavigatorShape("open");
    setTimeout(forceCheck, 600);
  };

  render() {
    const { classes, posts, navigatorPosition, navigatorShape } = this.props;

    return (
      <nav
        className={`${classes.navigator} ${navigatorPosition ? navigatorPosition : ""} ${
          navigatorShape ? navigatorShape : ""
        } `}
      >
        {this.props.posts.length && (
          <Posts
            posts={posts}
            navigatorPosition={navigatorPosition}
            navigatorShape={navigatorShape}
            linkOnClick={this.linkOnClick}
            openOnClick={this.openOnClick}
          />
        )}
      </nav>
    );
  }
}

Navigator.propTypes = {
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  setNavigatorShape: PropTypes.func.isRequired
};

Navigator.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object,
    location: PropTypes.object
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorPosition: val => dispatch(setNavigatorPosition(val)),
    setNavigatorShape: val => dispatch(setNavigatorShape(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Navigator));
