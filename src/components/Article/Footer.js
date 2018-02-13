import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Author from "./Author";
import Footnote from "./Footnote";

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
  const author = parts.find(el => el.node.frontmatter.title === "author");
  const authorContent = author ? author.node.html : null;
  const footnote = parts.find(el => el.node.frontmatter.title === "footnote");
  const footnoteContent = footnote ? footnote.node.html : null;

  return (
    <footer className={classes.footer}>
      <Author content={authorContent} />
      <Footnote content={footnoteContent} />
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired
};

export default injectSheet(styles)(Footer);
