import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import injectSheet from "react-jss";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const styles = theme => ({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px)`,
      left: `${theme.info.sizes.width}px`
    }
  },
  article: {
    maxWidth: theme.post.sizes.maxWidth,
    margin: "0 auto",
    // animationName: "phoneOut",
    // animationDuration: "1.5s",
    // animationFillMode: "forwards",
    // animationTimingFunction: "ease",
    padding: `1.5rem 1.5rem 1.5rem`,
    "& strong, & b": {
      letterSpacing: "-.02em",
      fontWeight: 600
    },
    "& a": {
      fontWeight: 600,
      letterSpacing: "-.02em",
      textShadow: `
         2px  2px ${theme.post.colors.background},
        -2px  2px ${theme.post.colors.background},
        -2px -2px ${theme.post.colors.background},
        -2px  2px ${theme.post.colors.background},
        -2px  0   ${theme.post.colors.background},
         2px  0   ${theme.post.colors.background}
      `,
      display: "inline-block",
      textDecoration: "none",
      transition: "0.3s",
      "&:hover": {
        color: theme.main.colors.linkHover
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(2.5rem + ${theme.info.sizes.height}px) 3.5rem 2.5rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "3.5rem"
    }
  },
  "@keyframes phoneOut": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)"
    },
    "50%": {
      opacity: 0,
      transform: "translateY(20px)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  }
});

const Article = props => {
  const { classes, post, parts, slug } = props;
  const { html } = post;

  return (
    <article className={classes.article}>
      <Header {...post.frontmatter} />
      <Content html={html} />
      <Footer parts={parts} post={post} slug={slug} />
    </article>
  );
};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.parts,
    navigatorIsActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Article));
