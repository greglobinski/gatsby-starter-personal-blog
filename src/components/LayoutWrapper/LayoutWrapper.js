import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  wrapper: {
    padding: "1px",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: "hidden",
    "@media print": {
      position: "relative",
      overflow: "visible"
    }
  }
});

const LayoutWrapper = props => {
  const { classes, children } = props;

  return <div className={classes.wrapper}>{children}</div>;
};

LayoutWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default injectSheet(styles)(LayoutWrapper);
