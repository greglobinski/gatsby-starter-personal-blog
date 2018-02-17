import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import avatar from "../../../images/avatar.jpg";

const style = {};

let restyle = { float: "right" };

const styles = theme => ({
  frame: {
    width: "100%",
    borderRadius: "50%",
    boxShadow: "0px 0px 0px 2px white, 0px 0px 1px 2px #666",
    display: "inline-block",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    }
  }
});

const Avatar = ({ classes }) => {
  return (
    <span className={classes.frame}>
      <img src={avatar} alt="" />
    </span>
  );
};

Avatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Avatar);
