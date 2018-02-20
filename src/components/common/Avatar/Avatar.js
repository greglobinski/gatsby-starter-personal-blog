import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Avatar from "material-ui/Avatar";

import avatar from "../../../images/avatar.jpg";
import config from "../../../utils/config";

const styles = theme => ({
  avatar: {
    boxShadow: "0px 0px 0px 2px white, 0px 0px 1px 2px #666"
  }
});

const AuthorAvatar = ({ classes }) => {
  return <Avatar alt={config.authorName} src={avatar} className={classes.avatar} />;
};

AuthorAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(AuthorAvatar);
