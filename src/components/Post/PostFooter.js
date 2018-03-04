import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

import asyncComponent from "../common/AsyncComponent/";
import PostAuthor from "./PostAuthor";

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

const PostShare = asyncComponent(() =>
  import("./PostShare")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const PostFooter = ({ classes, parts, post, slug }) => {
  const author = parts.find(el => el.node.frontmatter.title === "author");
  const authorContent = author ? author.node.html : null;

  return (
    <footer className={classes.footer}>
      <PostShare post={post} slug={slug} />
      <PostAuthor content={authorContent} />
    </footer>
  );
};

PostFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostFooter);
