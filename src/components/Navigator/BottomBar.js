import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  bar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: '100%'
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
