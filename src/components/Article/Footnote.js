import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  container: {
    color: "#999",
    "& a": {
      color: "#999",
      textShadow: "none"
    },
    "& ul": {
      listStyle: "none",
      margin: "4em 0 0 0",
      padding: 0,
      textAlign: "center",
      fontSize: ".9em"
    },
    "& li": {
      display: "inline-block",
      margin: "0 .3em"
    }
  }
});

const Footnote = ({ classes, content }) => {
  return <div className={classes.container} dangerouslySetInnerHTML={{ __html: content }} />;
};

Footnote.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired
};

export default injectSheet(styles)(Footnote);
