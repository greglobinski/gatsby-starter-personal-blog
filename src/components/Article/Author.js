import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Avatar from "../common/Avatar";

const styles = theme => ({
  author: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      borderBottom: `1px solid ${theme.main.colors.link}`,
      color: theme.main.colors.link
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row",
      justifyContent: "center"
    }
  },
  avatar: {
    margin: "0 1em 1em",
    width: "50px",
    flexShrink: 0,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em 0"
    }
  },
  box: {
    display: "flex",
    flexDirction: "column",
    minHeight: "50px",
    alignItems: "center"
  }
});

const Author = ({ classes, content }) => {
  return (
    <div className={classes.author}>
      <div className={classes.avatar}>
        <Avatar />
      </div>
      <div className={classes.box} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

Author.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired
};

export default injectSheet(styles)(Author);
