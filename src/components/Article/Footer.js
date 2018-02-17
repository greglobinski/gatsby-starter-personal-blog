import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
//require("core-js/fn/array/find");
//const _ = require("lodash");
var find = require("lodash/find");

import Author from "./Author";

const styles = theme => ({
  footer: {
    color: theme.post.colors.footer,
    fontSize: `${theme.post.fonts.footer.size}em`,
    lineHeight: theme.post.fonts.footer.lineHeight,
    borderTop: "1px solid #ddd",
    padding: "2em 0 0",
    margin: "2em 0 0",
    "& p": {
      margin: 0
    }
  }
});

const Footer = ({ classes, parts }) => {
  const author = find(parts, el => el.node.frontmatter.title === "author");
  const authorContent = author ? author.node.html : null;

  return (
    <footer className={classes.footer}>
      <Author content={authorContent} />
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired
};

export default injectSheet(styles)(Footer);
