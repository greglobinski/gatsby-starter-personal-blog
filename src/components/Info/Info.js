import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import Link from "gatsby-link";
var find = require("lodash/find");
import Home from "material-ui-icons/Home";

import { setNavigatorIsAside, setNavigatorInTransition } from "../../state/store";
import avatar from "../../images/avatar.jpg";

const styles = theme => ({
  info: {
    background: theme.info.colors.background,
    borderBottom: "1px solid #ddd",
    position: "absolute",
    padding: "12px 1em 0",
    left: 0,
    top: 0,
    overflow: "hidden",
    height: `${theme.info.sizes.height}px`,
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      height: `${theme.info.sizes.height + 15}px`,
      padding: "15px 1.5em 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `${theme.info.sizes.width}px`,
      height: "100vh",
      borderRight: "1px solid #ddd",
      borderBottom: "none",
      padding: "20px 30px"
    }
  },
  header: {
    lineHeight: 1,
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      height: "140px",
      position: "relative"
    }
  },
  avatarLink: {
    willChange: "left, top",
    float: "left",
    display: "block",
    position: "relative",
    margin: "0 12px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 20px 0 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      position: "absolute",
      top: "10px",
      left: "50%",
      marginLeft: "-30px",
      transition: "all .8s",
      transitionTimingFunction: "ease",
      ".navigatorInTransitionFrom &": {
        left: "50%"
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        left: "8%",
        top: "0"
      }
    }
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    boxShadow: "0px 0px 0px 2px white, 0px 0px 1px 2px #666",
    display: "inline-block",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "44px",
      height: "44px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "60px",
      height: "60px"
    }
  },
  avatarIcon: {
    display: "none",
    background: theme.info.colors.avatarIcon,
    color: theme.info.colors.background,
    border: `1px solid ${theme.info.colors.background}`,
    borderRadius: "50%",
    height: "26px",
    position: "absolute",
    right: "-10px",
    top: 0,
    width: "26px",
    "& svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "-10px 0 0 -9px",
      width: "18px",
      height: "18px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      width: 0,
      height: 0,
      transition: "all .5s",
      ".navigatorIsAside &": {
        width: "26px",
        height: "26px"
      }
    }
  },
  boxTitle: {
    willChange: "transform, left, top",
    fontSize: `${theme.info.fonts.boxTitleSize}em`,
    margin: 0,
    float: "left",
    transitionTimingFunction: "ease",
    "& small": {
      display: "block",
      fontSize: ".6em",
      marginTop: ".2em"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeL}em`,
      position: "absolute",
      top: "80px",
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%)",
      transition: "all .8s",
      ".navigatorInTransitionFrom &": {
        left: "50%",
        top: "70px"
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        left: "60%",
        top: `${1.9 - theme.info.fonts.boxTitleSizeL}em`,
        textAlign: "left"
      }
    }
  },
  boxBody: {
    color: "#666",
    lineHeight: 1.5,
    fontSize: ".95em",
    textAlign: "left",
    display: "none",

    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      transition: "opacity .5s",
      transitionDelay: ".7s",
      opacity: 1,
      position: "relative",
      transitionTimingFunction: "ease",
      ".navigatorInTransitionFrom &": {
        opacity: 1
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        transitionDelay: "0s",
        transition: "opacity .3s",
        opacity: 0
      }
    }
  }
});

const Info = (props, context) => {
  const { classes, parts, navigatorIsAside, navigatorInTransition } = props;

  const info = find(parts, el => el.node.frontmatter.title === "info");
  const boxTitle = info ? info.node.frontmatter.boxTitle : null;
  const boxTitleNote = info ? info.node.frontmatter.boxTitleNote : null;
  const content = info ? info.node.html : null;

  const avatarOnClick = e => {
    e.preventDefault();

    if (props.navigatorIsAside) {
      props.setNavigatorInTransition("From");

      setTimeout(() => {
        props.setNavigatorInTransition(false);
        props.setNavigatorIsAside(false);
      }, 100);

      setTimeout(() => {
        context.router.history.push("/");
      }, 1100);
    }
  };

  return (
    <aside
      className={`${classes.info} ${
        navigatorInTransition ? "navigatorInTransition" + navigatorInTransition : ""
      } ${navigatorIsAside ? "navigatorIsAside" : ""}`}
    >
      <header className={classes.header}>
        <Link
          className={classes.avatarLink}
          onClick={avatarOnClick}
          to="/"
          title="back to Home page"
        >
          <div className={classes.avatar}>
            <img src={avatar} alt="" />
          </div>
          {/* <div className={classes.avatarIcon}>
            <Home />
          </div> */}
        </Link>
        <h1 className={classes.boxTitle}>
          {boxTitle.replace(/ /g, "\u00a0")}
          <small>{boxTitleNote}</small>
        </h1>
      </header>
      <div className={classes.boxBody} dangerouslySetInnerHTML={{ __html: content }} />
    </aside>
  );
};

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  navigatorIsAside: PropTypes.bool.isRequired,
  navigatorInTransition: PropTypes.any.isRequired,
  setNavigatorIsAside: PropTypes.func.isRequired,
  setNavigatorInTransition: PropTypes.func.isRequired
};

Info.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.parts,
    navigatorIsAside: state.navigator.isAside,
    navigatorInTransition: state.navigator.inTransition,
    isActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorIsAside: val => dispatch(setNavigatorIsAside(val)),
    setNavigatorInTransition: val => dispatch(setNavigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Info));
