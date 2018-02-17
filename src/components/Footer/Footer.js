import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Footnote from "./Footnote";

const styles = theme => ({
  footer: {
    color: theme.post.colors.footer,
    padding: "2rem 1.5rem",
    "& p": {
      margin: 0
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `2rem 2.5rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2rem 3rem"
    }
  }
});

const Footer = ({ classes, footnoteContent }) => {
  return (
    <footer className={classes.footer}>
      <Footnote content={footnoteContent} />
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  footnoteContent: PropTypes.string.isRequired
};

export default injectSheet(styles)(Footer);
