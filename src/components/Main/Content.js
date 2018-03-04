import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  content: {
    color: theme.main.colors.content,
    fontSize: `${theme.main.fonts.content.size}em`,
    lineHeight: theme.main.fonts.content.lineHeight,
    "& a": {
      borderBottom: `1px solid ${theme.base.colors.link}`,
      color: theme.base.colors.link
    },
    "& .gatsby-resp-image-link": {
      margin: "2.5em -1.5rem",
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
  children: PropTypes.node
};

export default injectSheet(styles)(Content);
