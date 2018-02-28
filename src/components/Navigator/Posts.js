import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { Scrollbars } from "react-custom-scrollbars";
import LazyLoad from "react-lazyload";

import PostsHeader from "./PostsHeader";

const styles = theme => ({
  posts: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100%"
  },
  inner: {
    padding: `calc(1.3em + ${theme.info.sizes.height}px) .5em 1.3em`,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(3em + ${theme.info.sizes.height}px) 2em 2.5em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "1em 2em 1em",
      left: `${theme.info.sizes.width}px`,
      ".moving-featured &, .is-aside &": {
        padding: "1rem .8rem 1rem .5rem"
      }
    }
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    }
  },
  listItem: {
    margin: "0 0 .7em 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 1.5rem 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: "0 0 0 0"
      }
    }
  },
  listLink: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: ".7em 1em",
    color: theme.navigator.colors.postsListItemLink,
    "@media (hover: hover)": {
      "&:hover": {
        color: theme.navigator.colors.postsListItemLinkHover,
        "& .pointer": {
          borderRadius: "65% 75%"
        }
      }
    }
  },
  listItemPointer: {
    position: "relative",
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: "75% 65%",
    width: "60px",
    height: "60px",
    margin: "0",
    transition: "all .5s",
    "& img": {
      width: "100%",
      height: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      marginRight: ".5em",
      width: "80px",
      height: "80px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      marginRight: ".8em",
      width: "90px",
      height: "90px",
      transition: "all .3s",
      transitionTimingFunction: "ease",
      ".moving-featured &, .is-aside &": {
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
        ".moving-featured &, .is-aside &": {
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
        ".moving-featured &, .is-aside &": {
          display: "none"
        }
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: "0 0 0 .5em"
      }
    }
  }
});

const Posts = props => {
  const { classes, posts, linkOnClick, openOnClick } = props;

  return (
    <div className={classes.posts}>
      <Scrollbars autoHide>
        <div className={classes.inner}>
          <PostsHeader openOnClick={openOnClick} />
          <ul className={classes.list}>
            {posts &&
              posts.map(post => {
                return (
                  <li
                    className={`${classes.listItem} ${post.node.frontmatter.category}`}
                    key={post.node.fields.slug}
                  >
                    <Link
                      activeClassName="active"
                      className={classes.listLink}
                      to={post.node.fields.slug}
                      onClick={linkOnClick}
                    >
                      <div className={`${classes.listItemPointer} pointer`}>
                        <LazyLoad
                          height={60}
                          overflow={true}
                          throttle={300}
                          once={true}
                          offset={100}
                        >
                          <picture>
                            <source
                              type="image/webp"
                              srcSet={
                                post.node.frontmatter.cover.children[0].resolutions.srcSetWebp
                              }
                            />
                            <source
                              srcSet={post.node.frontmatter.cover.children[0].resolutions.srcSet}
                            />
                            <img
                              srcSet={post.node.frontmatter.cover.children[0].resolutions.src}
                              alt=""
                            />
                          </picture>
                        </LazyLoad>
                        {/*<Img sizes={post.node.frontmatter.cover.children[0].sizes} />*/}
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
  linkOnClick: PropTypes.func.isRequired,
  openOnClick: PropTypes.func.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired
};

export default injectSheet(styles)(Posts);
