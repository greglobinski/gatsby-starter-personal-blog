import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
//import { navigateTo } from "gatsby-link";

import { setNavigatorIsAside, setNavigatorInTransition } from "../../state/store";
import Posts from "./Posts";
import BottomBar from "./BottomBar";

const styles = theme => ({
  navigator: {
    //willChange: "left",
    background: theme.navigator.colors.background,
    //background: "blue",
    position: "absolute",
    top: 0,
    left: 0,
    //bottom: 0,
    height: "100vh",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    transform: "translate3d(0px, 0px, 0px)",
    //transition: "-webkit-transform 225ms  0ms",
    transition: "left 750ms",
    width: "100%",
    borderRight: "1px solid #ddd",
    [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
      "&.inTransitionTo, &.isAside": {
        left: "-100%",
        transition: "left 750ms",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
      },
      "&.inTransitionTo": {}
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
        height: `calc(100vh - 100px)`,
        borderTop: "1px solid #ddd",
        borderRight: "none",
        left: 0,
        width: `${theme.info.sizes.width - 1}px`,
        zIndex: 1,
        "&.isClosed": {
          top: `calc(100vh - 160px)`
        }
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
      this.props.setInTransition("To");

      setTimeout(() => {
        this.props.setInTransition(false);
        this.props.setIsAside(true);
      }, 1100);
    }
  }

  render() {
    const { classes, posts, isAside, inTransition, isClosed } = this.props;

    return (
      <nav
        className={`${this.state.linksDisabled ? "disabled" : ""} ${classes.navigator} ${
          inTransition ? "inTransition" + inTransition : ""
        } ${isAside ? "isAside" : ""} ${isClosed ? "isClosed" : "isOpened"}`}
      >
        {this.props.posts.length && (
          <Posts
            posts={posts}
            linkOnClick={this.linkOnClick}
            isAside={isAside}
            inTransition={inTransition}
          />
        )}
        <BottomBar />
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
    setInTransition: val => dispatch(setNavigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Navigator));
