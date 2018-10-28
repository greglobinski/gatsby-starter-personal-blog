import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import { setFontSizeIncrease } from "../../state/store";

const styles = theme => ({
  content: {
    color: theme.main.colors.content,
    fontSize: props => `calc(${theme.main.fonts.content.size}em * ${props.fontSizeIncrease})`,
    lineHeight: theme.main.fonts.content.lineHeight,
    "& a": {
      color: theme.base.colors.link
    },
    "& .gatsby-highlight": {
      margin: "2em 0"
    },
    "& .gatsby-resp-iframe-wrapper": {
      margin: "2em 0"
    },
    "& .gatsby-resp-image-link": {
      margin: "2em -1.5rem",
      border: "none",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        margin: "2.5em -3.5rem"
      }
    },
    "& h2, & h3": {
      color: theme.main.colors.contentHeading,
      fontSize: `${theme.main.fonts.contentHeading.h2Size}em`,
      fontWeight: theme.main.fonts.contentHeading.weight,
      lineHeight: theme.main.fonts.contentHeading.lineHeight,
      margin: "2em 0 1em",
      letterSpacing: "-0.02em"
    },
    "& h3": {
      fontSize: `${theme.main.fonts.contentHeading.h3Size}em`
    },
    "& p": {
      margin: "0 0 1.5em 0",
      fontWeight: 400
    },
    "& ul": {
      listStyle: "circle",
      padding: "0 0 0 1.3em",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        padding: "0 0 0 2em"
      }
    },
    "& li": {
      margin: "0 0 .5em 0"
    },
    "& blockquote": {
      border: `5px solid ${theme.main.colors.blockquoteFrame}`,
      fontStyle: "italic",
      margin: "2.5em 0",
      padding: "1em 1.1em 1em 1.3em",
      position: "relative",
      "& p": {
        margin: 0
      },
      "&::before, &::after": {
        background: theme.main.colors.background,
        content: `""`,
        height: "5px",
        left: "50%",
        marginLeft: "-47%",
        position: "absolute",
        top: "-5px",
        width: "94%"
      },
      "&::after": {
        top: "auto",
        bottom: "-5px"
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeL}em`
    }
  }
});

const Content = props => {
  const { classes, html, children } = props;

  if (html) {
    return <div className={classes.content} dangerouslySetInnerHTML={{ __html: html }} />;
  } else {
    return <div className={classes.content}>{children}</div>;
  }
};

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  html: PropTypes.string,
  children: PropTypes.node,
  setFontSizeIncrease: PropTypes.func.isRequired,
  fontSizeIncrease: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    fontSizeIncrease: state.fontSizeIncrease
  };
};

const mapDispatchToProps = {
  setFontSizeIncrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(Content));
