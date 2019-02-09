import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Avatar from "@material-ui/core/Avatar";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/avatar.jpg";

const styles = theme => ({
  author: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
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
    width: "60px",
    height: "60px",
    border: "1px solid #ddd",
    flexShrink: 0,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em 0"
    }
  },
  box: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50px",
    alignItems: "center"
  }
});

const PostAuthor = props => {
  const { classes, author } = props;

  return (
    <div className={classes.author}>
      <Avatar src={avatar} className={classes.avatar} alt={config.authorName} />
      <div className={classes.box} dangerouslySetInnerHTML={{ __html: author.html }} />
    </div>
  );
};

PostAuthor.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostAuthor);
