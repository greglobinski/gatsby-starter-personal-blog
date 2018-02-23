import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  header: {
    margin: "0 0 3em"
  },
  title: {
    color: theme.post.colors.title,
    fontSize: `${theme.post.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.post.fonts.title.weight,
    lineHeight: theme.post.fonts.title.lineHeight,
    margin: "0 0 0.4em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.post.fonts.title.size * theme.post.fonts.title.xSizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.post.fonts.title.size * theme.post.fonts.title.xSizeL}em`
    }
  }
});

const Header = ({ classes, title, children }) => (
  <header className={classes.header}>
    <h1 className={classes.title}>{title}</h1>
    {children}
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default injectSheet(styles)(Header);
