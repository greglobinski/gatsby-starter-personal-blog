import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import SpringScrollbars from "../SpringScrollbars";

const styles = theme => ({
  main: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    animationName: "main-entry",
    animationDuration: ".5s",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px)`,
      left: `${theme.info.sizes.width}px`
    },
    "@media print": {
      position: "relative",
      "& > div": {
        overflow: "visible!important"
      },
      "& > div > div": {
        position: "relative!important"
      }
    }
  },
  article: {
    maxWidth: theme.main.sizes.maxWidth,
    margin: "0 auto",
    padding: `calc(1.5rem + ${theme.info.sizes.height}px) 1.8rem 1.5rem 1.5rem`,
    "& strong, & b": {
      letterSpacing: "-.02em",
      fontWeight: 600
    },
    "& a": {
      fontWeight: 600,
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
      padding: `calc(2.5rem + ${theme.info.sizes.height}px) 3.5rem 2.5rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "3.5rem"
    }
  },
  "@keyframes main-entry": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  }
});

const Main = props => {
  const { classes, children } = props;

  return (
    <main className={classes.main}>
      <SpringScrollbars>{children}</SpringScrollbars>
    </main>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
};

export default injectSheet(styles)(Main);
