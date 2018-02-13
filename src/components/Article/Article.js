import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import { Scrollbars } from "react-custom-scrollbars";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const styles = theme => ({
  wrapper: {
    position: "absolute",
    top: 0,
    left: `${theme.navigator.sizes.infoWith}px`,
    bottom: 0,
    width: `calc(100vw - ${theme.navigator.sizes.infoWith}px)`,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  article: {
    maxWidth: theme.post.sizes.maxWidth,
    margin: "0 auto",
    padding: "1.5rem",
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
      },
      "&.gatsby-resp-image-link": {
        border: "none"
      }
    }
  }
});

const Article = props => {
  const { classes, post, parts } = props;
  const { html } = post;

  return (
    <div className={classes.wrapper}>
      <Scrollbars autoHide>
        <article className={classes.article}>
          <Header {...post.frontmatter} />
          <Content html={html} />
          <Footer parts={parts} />
        </article>
      </Scrollbars>
    </div>
  );
};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired
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
