import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

import avatar from "../../images/avatar.jpg";

const styles = theme => ({
  text: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      willChange: "opacity",
      display: "block",
      fontWeight: 300,
      lineHeight: 1.5,
      fontSize: ".95em",
      textAlign: "left",
      transition: "opacity .5s",
      transitionDelay: ".7s",
      opacity: 1,
      position: "relative",
      transitionTimingFunction: "ease",
      marginBottom: ".8em",
      ".navigatorInTransitionFrom &": {
        opacity: 1
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        transitionDelay: "0s",
        transition: "opacity .3s",
        opacity: 0
      },
      "& p:last-child": {
        marginBottom: 0
      }
    }
  }
});

const InfoText = props => {
  const { classes, info } = props;
  const text = info.node.html;

  return <div className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />;
};

InfoText.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired
};

export default injectSheet(styles)(InfoText);
