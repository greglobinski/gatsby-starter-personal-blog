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
    margin: "0 0 0.4em"
  },
  subTitle: {
    color: theme.post.colors.subTitle,
    fontSize: `${theme.post.fonts.subTitle.size}em`,
    lineHeight: theme.post.fonts.subTitle.lineHeight,
    fontWeight: theme.post.fonts.subTitle.weight
  },
  meta: {
    fontSize: `${theme.post.fonts.meta.size}em`,
    fontWeight: theme.post.fonts.meta.weight,
    color: theme.post.colors.meta
  }
});

const Header = ({ classes, title, subTitle, date }) => (
  <header className={classes.header}>
    <h1 className={classes.title}>{title}</h1>
    <h2 className={classes.subTitle}>{subTitle}</h2>
    <div className={classes.meta}>{date}</div>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default injectSheet(styles)(Header);
