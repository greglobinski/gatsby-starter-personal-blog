import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Footnote from "./Footnote";

const styles = theme => ({
  footer: {
    color: theme.main.colors.footer,
    padding: `1.5rem 1.5rem  calc(${theme.bars.sizes.actionsBar}px + 1.5rem) 1.5rem`,
    "& p": {
      margin: 0
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `2rem 2.5rem  calc(${theme.bars.sizes.actionsBar}px + 2rem) 2.5rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: `2rem 3rem 2rem 3rem`
    }
  }
});

const Footer = props => {
  const { classes, footnote } = props;
  const { html } = footnote;

  return (
    <footer className={classes.footer}>
      <Footnote content={html} />
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  footnote: PropTypes.object.isRequired
};

export default injectSheet(styles)(Footer);
