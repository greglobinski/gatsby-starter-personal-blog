import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Avatar from "material-ui/Avatar";

import avatar from "../../../images/avatar.jpg";
import config from "../../../../content/meta/config";

const styles = theme => ({
  avatar: {
    width: "28px",
    height: "28px",
    float: "left",
    margin: "10px 0 0 30px"
  }
});

const AuthorAvatar = ({ classes }) => {
  return <Avatar alt={config.authorName} src={avatar} className={classes.avatar} />;
};

AuthorAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(AuthorAvatar);
