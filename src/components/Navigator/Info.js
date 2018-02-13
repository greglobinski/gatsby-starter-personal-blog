import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import avatar from "../../images/avatar.jpg";

const styles = theme => ({
  info: {
    background: theme.navigator.colors.infoBackground,
    borderBottom: "1px solid #ddd",
    position: "absolute",
    padding: "12px 1em 0",
    left: 0,
    top: 0,
    overflow: "hidden",
    height: `${theme.navigator.sizes.infoHeight}px`,
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `${theme.navigator.sizes.infoWith}px`,
      height: "100vh",
      borderRight: "1px solid #ddd",
      borderBottom: "none",
      padding: "3em 2em",
      textAlign: "center"
    }
  },
  avatar: {
    float: "left",
    margin: "0 12px 0 0",
    width: "36px",
    borderRadius: "50%",
    boxShadow: "0px 0px 0px 2px white, 0px 0px 1px 2px #666",
    display: "inline-block",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      float: "none",
      margin: "0 auto",
      width: "60px"
    }
  },
  boxTitle: {
    fontSize: "1.3em",
    margin: 0,
    float: "left",
    "& small": {
      display: "block",
      fontSize: ".6em"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: "1.8em",
      flot: "none",
      width: "100%",
      margin: ".5em 0"
    }
  },
  boxBody: {
    color: "#666",
    lineHeight: 1.5,
    fontSize: ".95em",
    textAlign: "left",
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block"
    }
  }
});

const Info = props => {
  const { classes, parts } = props;

  const info = parts.find(el => el.node.frontmatter.title === "info");
  const boxTitle = info ? info.node.frontmatter.boxTitle : null;
  const boxTitleNote = info ? info.node.frontmatter.boxTitleNote : null;
  const content = info ? info.node.html : null;

  return (
    <aside className={classes.info}>
      <div className={classes.avatar}>
        <img src={avatar} alt="" />
      </div>
      <h1 className={classes.boxTitle}>
        {boxTitle}
        <small>{boxTitleNote}</small>
      </h1>
      <div className={classes.boxBody} dangerouslySetInnerHTML={{ __html: content }} />
    </aside>
  );
};

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired
};

export default injectSheet(styles)(Info);
