import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";
//import { navigateTo } from "gatsby-link";

import {
  setNavigatorIsAside,
  setNavigatorInTransition,
  setNavigatorIsClosed
} from "../../state/store";
import Posts from "./Posts";

const styles = theme => ({
  navigator: {
    //willChange: "left",
    background: theme.navigator.colors.background,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    transform: "translate3d(0px, 0px, 0px)",
    transition: "left 800ms",
    width: "100%",
    "&::after": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: theme.main.sizes.linesMargin,
      right: theme.main.sizes.linesMargin,
      height: 0,
      borderTop: `1px solid ${theme.main.colors.lines}`
    },
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      "&.in-transition-to, &.is-aside": {
        left: "-100%",
        transition: "left 800ms"
      },
      "&.in-transition-to": {}
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px - 60px)`,
      transition: "left .8s, width 0s",
      transitionTimingFunction: "ease",
      left: `${theme.info.sizes.width}px`,
      "&.in-transition-to": {
        left: `calc(-100vw + 2 * ${theme.info.sizes.width}px)`,
        top: "100vh",
        transition: "left .8s, top 0s .8s"
      },
      "&.is-aside": {
        transition: "left 0s, top .5s .1s",
        left: 0,
        width: `${theme.info.sizes.width - 1}px`,
        zIndex: 1,
        "&.is-closed": {
          top: `calc(100vh - ${theme.navigator.sizes.closedHeight}px)`,
          height: `${theme.navigator.sizes.closedHeight}px`
        },
        "&.is-opened": {
          top: "100px",
          height: `calc(100vh - 100px)`
        },
        "&.in-transition-from": {
          transition: "left 0 .5s",
          left: `calc(-100vw + 2 * ${theme.info.sizes.width}px)`
          //top: "100vh"
        }
      }
    }
  }
});

class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksDisabled: false
    };
    this.linkOnClick = this.linkOnClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // this manages special case when Navigator got back from isAside mode to full mode
    if (prevProps.isAside !== this.props.isAside) {
      if (this.props.isAside === false) {
        // this prevents too early clicks during Navigator transition
        // from isAside mode, take a look at linkOnClick method below
        this.setState({
          linksDisabled: true
        });

        const { route, history } = this.context.router;
        const { location } = route;
        const { pathname } = location;
        // thanks to this Navigator smoothly finishes transition and only then the url is updated
        // this delay lets Navigator progressively cover a recently visible page
        if (pathname !== "/") {
          setTimeout(() => {
            history.push("/");
            this.setState({
              linksDisabled: false
            });
          }, 1000);
        }
      }
    }
  }

  linkOnClick(e) {
    // prevents too early clicks, a user have to wait
    // until transition from the isAside mode will be finished
    if (this.state.linksDisabled) {
      e.preventDefault();
      return;
    }

    if (!this.props.isAside) {
      this.props.setInTransition("to");

      setTimeout(() => {
        this.props.setInTransition(false);
        this.props.setIsAside(true);
        this.props.setIsClosed(false);
        // because isAside mode shows more items than full mode
        // we have to manualy force new visible pointer images to load
        setTimeout(forceCheck, 500);
      }, 1100);
    }
  }

  render() {
    const { classes, posts, isAside, inTransition, isClosed } = this.props;

    return (
      <nav
        className={`${this.state.linksDisabled ? "disabled" : ""} ${classes.navigator} ${
          inTransition ? "in-transition-" + inTransition : ""
        } ${isAside ? "is-aside" : ""} ${isClosed ? "is-closed" : "is-opened"}`}
      >
        {this.props.posts.length && (
          <Posts
            posts={posts}
            linkOnClick={this.linkOnClick}
            isAside={isAside}
            inTransition={inTransition}
          />
        )}
      </nav>
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
  setInTransition: PropTypes.func.isRequired,
  setIsClosed: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired
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
    isAside: state.navigator.isAside,
    inTransition: state.navigator.inTransition,
    isActive: state.posts.length,
    isClosed: state.navigator.isClosed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsAside: val => dispatch(setNavigatorIsAside(val)),
    setInTransition: val => dispatch(setNavigatorInTransition(val)),
    setIsClosed: val => dispatch(setNavigatorIsClosed(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Navigator));
