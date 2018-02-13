import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Avatar from "../shared/Avatar";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    "& a": {
      borderBottom: `1px solid ${theme.main.colors.link}`,
      color: theme.main.colors.link
    }
  },
  avatar: {
    marginRight: "1em",
    width: "50px",
    flexShrink: 0
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
    <div className={classes.container}>
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
