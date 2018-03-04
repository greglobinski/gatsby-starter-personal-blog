import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import AlgoliaIcon from "../../images/svg-icons/algolia-full.svg";

const styles = theme => ({
  header: {
    margin: "0 0 3em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center"
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.size * theme.main.fonts.title.xSizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.size * theme.main.fonts.title.xSizeL}em`
    }
  },
  mark: {
    width: "110px",
    display: "block",
    margin: "0 0 0 20px",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "160px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "180px"
    }
  }
});

const Header = props => {
  const { classes, title, algolia } = props;

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      {algolia && (
        <a
          className={classes.mark}
          href="https://www.algolia.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AlgoliaIcon />
        </a>
      )}
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  algolia: PropTypes.bool
};

export default injectSheet(styles)(Header);
