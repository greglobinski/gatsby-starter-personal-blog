import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
var find = require("lodash/find");

import asyncComponent from "../common/AsyncComponent/";
import Author from "./Author";

const styles = theme => ({
  footer: {
    color: theme.post.colors.footer,
    fontSize: `${theme.post.fonts.footer.size}em`,
    lineHeight: theme.post.fonts.footer.lineHeight,
    "& p": {
      margin: 0
    }
  }
});

const Share = asyncComponent(() =>
  import("../Share/")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const Footer = ({ classes, parts, post, slug }) => {
  const author = find(parts, el => el.node.frontmatter.title === "author");
  const authorContent = author ? author.node.html : null;

  return (
    <footer className={classes.footer}>
      <Share post={post} slug={slug} />
      <Author content={authorContent} />
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(Footer);
