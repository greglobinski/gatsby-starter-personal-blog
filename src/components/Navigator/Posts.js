import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { Scrollbars } from "react-custom-scrollbars";

import config from "../../utils/config";

const styles = theme => ({
  posts: {
    background: "yellow",
    //padding: `calc(2em + ${theme.navigator.sizes.infoHeight}px) 1.5em 2em 2em`,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    transition: "left .5s",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      left: props =>
        props.isAside
          ? `calc(-100vw + ${theme.navigator.sizes.infoWith}px)`
          : `${theme.navigator.sizes.infoWith}px`,
      width: `calc(100vw - ${theme.navigator.sizes.infoWith}px)`
    }
  },
  inner: {
    padding: `calc(0em + ${theme.navigator.sizes.infoHeight}px) 1.5em 2em 2em`,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(3em + ${theme.navigator.sizes.infoHeight}px) 4em 3em 4em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2.8em 4em 1em 3em",
      left: `${theme.navigator.sizes.infoWith}px`
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
    margin: "0 0 3em 0"
  },
  listLink: {
    display: "block",
    color: theme.navigator.colors.postsListItemLink,
    "&:hover": {
      color: theme.navigator.colors.postsListItemLinkHover
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row"
    }
  },
  listItemPointer: {
    background: "#333",
    borderRadius: "50%",
    float: "left",
    overflow: "hidden",
    width: "60px",
    height: "60px",
    transition: "all .2s",
    margin: ".3em 1em 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      float: "none",
      flexShrink: 0,
      width: "90px",
      height: "90px"
    },
    "$listLink:hover &": {
      // borderRadius: "50% 10% 50% 50%",
      // transform: "rotate(45deg)"
    }
  },
  listItemText: {
    margin: "2em 0 0",
    "& h1, & h2": {},
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
          theme.navigator.sizes.fontIncraseForL}em`
      }
    },
    "& h2": {
      lineHeight: 1.2,
      fontSize: `${theme.navigator.sizes.postsListItemH2Font}em`,
      margin: ".5em 0 0 0",
      [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForM}em`
      },
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListItemH2Font *
          theme.navigator.sizes.fontIncraseForL}em`
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 0 1em"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      margin: "0 0 0 1.5em",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column"
    }
  },
  thumbnail: {}
});

const Posts = props => {
  const { classes, posts, linkOnClick, isAside } = props;

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
                      className={classes.listLink}
                      to={post.node.frontmatter.path}
                      onClick={linkOnClick}
                    >
                      <div className={classes.listItemPointer}>
                        <Img sizes={post.node.frontmatter.cover.children[0].sizes} />
                      </div>
                      <div className={classes.listItemText}>
                        <h1>{post.node.frontmatter.title}</h1>
                        {!isAside && <h2>{post.node.frontmatter.subTitle}</h2>}
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
  linkOnClick: PropTypes.func,
  isAside: PropTypes.any
};

export default injectSheet(styles)(Posts);
