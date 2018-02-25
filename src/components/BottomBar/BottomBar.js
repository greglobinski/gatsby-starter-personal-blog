import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  bar: {
    position: "absolute",
    left: 0,
    height: "60px",
    bottom: 0,
    width: "100%",
    background: "#fff",
    zIndex: 10,
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: "20px",
      right: "20px",
      height: "1px",
      borderTop: `1px solid ${theme.main.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `${theme.info.sizes.width}px`
    }
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
