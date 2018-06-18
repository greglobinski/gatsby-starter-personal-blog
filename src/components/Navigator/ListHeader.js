import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const styles = theme => ({
  closed: {
    display: "none",
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
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
  },
  expand: {
    color: theme.navigator.colors.postsHeader
  },
  filter: {
    margin: `0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 1em calc(-.5rem + ${
      theme.base.sizes.linesMargin
    })`,
    position: "relative",
    fontSize: "1.2em",
    lineHeight: 1,
    color: theme.base.colors.accent,
    borderBottom: `1px solid ${theme.base.colors.lines}`,
    padding: "0 1em 1em",
    fontWeight: 300,
    "& strong": {
      fontWeight: 600,
      display: "block"
    },
    "& small": {
      display: "block",
      margin: "0 0 .3em 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      margin: "0 0 1em 0",
      padding: "0 1em 1.5em",
      ".is-aside &": {
        padding: "0 0 1em .5em",
        margin: `0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 1em calc(-.5rem + ${
          theme.base.sizes.linesMargin
        })`
      }
    }
  },
  clear: {
    position: "absolute",
    top: 0,
    right: 0
  }
});

const ListHeader = props => {
  const { classes, expandOnClick, categoryFilter, navigatorShape, removeFilter } = props;

  return (
    <header>
      {navigatorShape === "closed" && (
        <div className={classes.closed}>
          <h3>List of posts</h3>
          <IconButton
            aria-label="Expand the list"
            className={classes.expand}
            onClick={expandOnClick}
            title="Expand the list"
          >
            <ExpandLessIcon />
          </IconButton>
        </div>
      )}
      {navigatorShape === "open" &&
        categoryFilter !== "all posts" && (
          <div className={classes.filter}>
            <small>Active category filter:</small> <strong>{categoryFilter}</strong>
            <IconButton
              aria-label="Remove filtering"
              className={classes.clear}
              onClick={removeFilter}
              title="Clear filtering"
            >
              <CloseIcon />
            </IconButton>
          </div>
        )}
    </header>
  );
};

ListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  expandOnClick: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired
};

export default injectSheet(styles)(ListHeader);
