import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Avatar from "material-ui/Avatar";

import avatar from "../../images/avatar.jpg";

const styles = theme => ({
  author: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      borderBottom: `1px solid ${theme.base.colors.link}`,
      color: theme.base.colors.link
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row",
      justifyContent: "center"
    }
  },
  avatar: {
    margin: "0 1em 1em",
    borderRadius: "75% 65%",
    width: "50px",
    height: "50px",
    flexShrink: 0,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em 0"
    }
  },
  box: {
    display: "flex",
    flexDirction: "column",
    minHeight: "50px",
    alignItems: "center"
  }
});

const PostAuthor = ({ classes, content }) => {
  return (
    <div className={classes.author}>
      <Avatar src={avatar} className={classes.avatar} alt="" /> {/* TODO: add author name to alt */}
      <div className={classes.box} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

PostAuthor.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostAuthor);
