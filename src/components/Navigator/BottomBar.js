import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  bar: {
    position: "absolute",
    left: 0,
    height: "60px",
    borderTop: "1px solid #666",
    bottom: 0,
    width: "100%",
    background: "#fff"
  }
});

const BottomBar = props => {
  const { classes } = props;

  return <div className={classes.bar}>bottom bar</div>;
};

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(BottomBar);
