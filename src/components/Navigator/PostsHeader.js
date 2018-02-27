import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";

import ExpandLessIcon from "material-ui-icons/ExpandLess";

const styles = theme => ({
  header: {
    display: "none",
    ".is-aside &": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: `${theme.navigator.sizes.closedHeight}px`,
      padding: "0 30px 0 40px"
    },
    "& h3": {
      fontSize: "1.1em",
      color: theme.navigator.colors.postsHeader,
      fontWeight: 600,
      margin: "-.2em 0 0 0",
      textTransform: "uppercase",
      "& small": {
        fontSize: ".6em",
        display: "block",
        margin: "0 0 .2em",
        fontWeight: 300,
        letterSpacing: ".2em",
        textTransform: "none"
      }
    }
  },
  icon: {
    width: 50,
    height: 50
  }
});

const PostsHeader = props => {
  const { classes } = props;

  return (
    <header className={classes.header}>
      <h3>
        <small>unfold</small>List of posts
      </h3>
      <IconButton aria-label="Filter">
        <ExpandLessIcon className={classes.icon} color="primary" />
      </IconButton>
    </header>
  );
};

PostsHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostsHeader);
