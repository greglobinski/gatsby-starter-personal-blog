import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { Scrollbars } from "react-custom-scrollbars";

import config from "../../utils/config";

const styles = theme => ({
  posts: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100%"
  },
  inner: {
    padding: `calc(2em + ${theme.info.sizes.height}px) 1.5em 2em`,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(3em + ${theme.info.sizes.height}px) 4em 3em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2.8em 4em 1em",
      left: `${theme.info.sizes.width}px`,
      ".isAside &": {
        padding: "1.5em"
      }
    }
  },
  header: {
    display: "none",
    margin: "0 0 2em 0",
    "& h1": {
      margin: 0
    },
    "& h3": {
      margin: ".5em 0 0 0"
    }
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  listItem: {
    margin: "0 0 1.5em 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 3em 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".isAside &": {
        margin: "0 0 1.5em 0"
      }
    }
  },
  listLink: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    color: theme.navigator.colors.postsListItemLink,
    "@media (hover: hover)": {
      "&:hover": {
        color: theme.navigator.colors.postsListItemLinkHover
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  listItemPointer: {
    background: "#333",
    borderRadius: "65% 75% 65% 75%",
    position: "relative",
    flexShrink: 0,
    overflow: "hidden",
    width: "60px",
    height: "60px",
    margin: "0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      marginRight: ".5em",
      width: "80px",
      height: "80px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      marginRight: ".8em",
      width: "90px",
      height: "90px",
      ".isAside &": {
        width: "30px",
        height: "30px"
      }
    }
  },
  listItemText: {
    margin: "0 0 0 1.5em",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& h1": {
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      margin: 0,
      fontSize: `${theme.navigator.sizes.postsListItemH1Font}em`,
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH1Font *
          theme.navigator.sizes.fontIncraseForL}em`,
        ".isAside &": {
          fontSize: "1em",
          fontWeight: 400
        }
      }
    },
    "& h2": {
      lineHeight: 1.2,
      display: "block",
      fontSize: `${theme.navigator.sizes.postsListItemH2Font}em`,
      margin: ".3em 0 0 0",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForL}em`,
        ".isAside &": {
          display: "none"
        }
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".isAside &": {
        margin: "0 0 0 .5em"
      }
    }
  }
});

const Posts = props => {
  const { classes, posts, linkOnClick } = props;

  return (
    <div className={classes.posts}>
      <Scrollbars autoHide>
        <div className={classes.inner}>
          <header className={classes.header}>
            <h1>{config.homeTitle}</h1>
            <h3>List of Posts: </h3>
          </header>
          <ul className={classes.list}>
            {posts &&
              posts.map(post => {
                return (
                  <li className={classes.listItem} key={post.node.frontmatter.path}>
                    <Link
                      activeClassName="active"
                      className={classes.listLink}
                      to={post.node.frontmatter.path}
                      onClick={linkOnClick}
                    >
                      <div className={classes.listItemPointer}>
                        <Img sizes={post.node.frontmatter.cover.children[0].sizes} />
                      </div>
                      <div className={classes.listItemText}>
                        <h1>{post.node.frontmatter.title}</h1>
                        {post.node.frontmatter.subTitle && (
                          <h2>{post.node.frontmatter.subTitle}</h2>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </Scrollbars>
    </div>
  );
};

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  linkOnClick: PropTypes.func
};

export default injectSheet(styles)(Posts);
