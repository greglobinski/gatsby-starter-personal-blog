import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import ExpandLessIcon from "material-ui-icons/ExpandLess";

const styles = theme => ({
  closed: {
    display: "none",
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      cursor: "pointer",
      top: 0,
      left: 0,
      width: "100%",
      margin: 0,
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
        margin: "0 0 .1em",
        fontWeight: 300,
        letterSpacing: ".2em"
      }
    }
  }
});

const PostsHeader = props => {
  const { classes, openOnClick } = props;

  return (
    <header>
      <div className={classes.closed} onClick={openOnClick}>
        <h3>List of posts</h3>
        <ExpandLessIcon />
      </div>
    </header>
  );
};

PostsHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  openOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(PostsHeader);
