import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

import PostAuthor from "./PostAuthor";
import PostComments from "./PostComments";
import PostShare from "./PostShare";

const styles = theme => ({
  footer: {
    color: theme.main.colors.footer,
    fontSize: `${theme.main.fonts.footer.size}em`,
    lineHeight: theme.main.fonts.footer.lineHeight,
    "& p": {
      margin: 0
    }
  }
});

const PostFooter = ({ classes, author, post, slug, facebook }) => {
  return (
    <footer className={classes.footer}>
      <PostShare post={post} slug={slug} />
      <PostAuthor author={author} />
      <PostComments post={post} slug={slug} facebook={facebook} />
    </footer>
  );
};

PostFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostFooter);
