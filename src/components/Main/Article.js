import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  article: {
    maxWidth: theme.main.sizes.articleMaxWidth,
    margin: "0 auto",
    padding: `calc(${theme.bars.sizes.infoBar}px + 1.5rem) 1.5rem  1.5rem 1.5rem`,
    "& strong, & b": {
      letterSpacing: "-.02em"
    },
    "& a": {
      fontWeight: "bold",
      letterSpacing: "-.02em",
      textShadow: `
           2px  2px ${theme.main.colors.background},
          -2px  2px ${theme.main.colors.background},
          -2px -2px ${theme.main.colors.background},
          -2px  2px ${theme.main.colors.background},
          -2px  0   ${theme.main.colors.background},
           2px  0   ${theme.main.colors.background}
        `,
      display: "inline-block",
      textDecoration: "none",
      transition: "0.3s",
      "&:hover": {
        color: theme.base.colors.linkHover
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(2.5rem + ${theme.bars.sizes.infoBar}px) 3.5rem 2.5rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "3.5rem"
    }
  }
});

const Article = props => {
  const { children, classes } = props;

  return <article className={classes.article}>{children}</article>;
};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default injectSheet(styles)(Article);
