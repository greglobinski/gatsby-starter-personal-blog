import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Svg from "../common/Svg";

import logos from "../../images/logos";

const styles = theme => ({
  header: {
    margin: "0 0 3em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center"
  },
  title: {
    color: theme.post.colors.title,
    fontSize: `${theme.post.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.post.fonts.title.weight,
    lineHeight: theme.post.fonts.title.lineHeight,
    margin: "0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.post.fonts.title.size * theme.post.fonts.title.xSizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.post.fonts.title.size * theme.post.fonts.title.xSizeL}em`
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
          <Svg svg={logos.SEARCH} />
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
