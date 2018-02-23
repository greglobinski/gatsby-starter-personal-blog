import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import Link from "gatsby-link";
var find = require("lodash/find");
import Button from "material-ui/Button";
import { MenuItem, MenuList } from "material-ui/Menu";
import MoreVertIcon from "material-ui-icons/MoreVert";
import IconButton from "material-ui/IconButton";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Grow from "material-ui/transitions/Grow";
import Paper from "material-ui/Paper";
import classNames from "classnames";

import {
  setNavigatorIsAside,
  setNavigatorInTransition,
  setNavigatorIsClosed
} from "../../state/store";
import avatar from "../../images/avatar.jpg";

const styles = theme => ({
  info: {
    background: theme.info.colors.background,
    //background: "red",
    borderBottom: "1px solid #ddd",
    position: "absolute",
    padding: "12px 1em 0",
    left: 0,
    top: 0,
    height: `${theme.info.sizes.height}px`,
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      height: `${theme.info.sizes.height + 15}px`,
      padding: "15px 1.5em 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `${theme.info.sizes.width}px`,
      height: "100vh",
      borderRight: "1px solid #ddd",
      borderBottom: "none",
      padding: "20px 30px"
    }
  },
  header: {
    lineHeight: 1,
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      height: "140px",
      position: "relative"
    }
  },
  avatarLink: {
    willChange: "left, top",
    float: "left",
    display: "block",
    position: "relative",
    margin: "0 12px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 20px 0 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      position: "absolute",
      top: "10px",
      left: "50%",
      marginLeft: "-30px",
      transition: "all .8s",
      transitionTimingFunction: "ease",
      ".navigatorInTransitionFrom.navigatorIsOpened &": {
        left: "50%"
      },
      ".navigatorInTransitionTo.navigatorIsOpened &, .navigatorIsAside.navigatorIsOpened &": {
        left: "8%",
        top: "0"
      }
    }
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    boxShadow: "0px 0px 0px 2px white, 0px 0px 1px 2px #666",
    display: "inline-block",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "44px",
      height: "44px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "60px",
      height: "60px"
    }
  },
  avatarIcon: {
    display: "none",
    background: theme.info.colors.avatarIcon,
    color: theme.info.colors.background,
    border: `1px solid ${theme.info.colors.background}`,
    borderRadius: "50%",
    height: "26px",
    position: "absolute",
    right: "-10px",
    top: 0,
    width: "26px",
    "& svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "-10px 0 0 -9px",
      width: "18px",
      height: "18px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      width: 0,
      height: 0,
      transition: "all .5s",
      ".navigatorIsAside &": {
        width: "26px",
        height: "26px"
      }
    }
  },
  boxTitle: {
    willChange: "transform, left, top",
    fontSize: `${theme.info.fonts.boxTitleSize}em`,
    margin: 0,
    float: "left",
    transitionTimingFunction: "ease",
    "& small": {
      display: "block",
      fontSize: ".6em",
      marginTop: ".3em"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeL}em`,
      position: "absolute",
      top: "80px",
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%)",
      transition: "all .8s",
      ".navigatorInTransitionFrom &": {
        left: "50%",
        top: "70px"
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        left: "60%",
        top: `${1.9 - theme.info.fonts.boxTitleSizeL}em`,
        textAlign: "left"
      }
    }
  },
  boxBody: {
    color: "#666",
    lineHeight: 1.5,
    fontSize: ".95em",
    textAlign: "left",
    display: "none",

    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      transition: "opacity .5s",
      transitionDelay: ".7s",
      opacity: 1,
      position: "relative",
      transitionTimingFunction: "ease",
      ".navigatorInTransitionFrom &": {
        opacity: 1
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        transitionDelay: "0s",
        transition: "opacity .3s",
        opacity: 0
      }
    }
  },
  boxMenu: {
    display: "none",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "flex"
    }
  },
  topMenu: {
    position: "absolute",
    top: "6px",
    right: "2px",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      top: "14px"
      //right: "10px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "none"
    }
  },
  buttonRoot: {
    "&:hover": {
      background: "rgba(0, 0, 0, 0.04)"
    }
  },
  buttonLabel: {
    textTransform: "none",
    fontSize: "1.4em",
    color: "#777"
  },
  popperClose: {
    pointerEvents: "none"
  }
});

class Info extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  avatarOnClick = e => {
    e.preventDefault();

    if (this.props.navigatorIsAside) {
      this.props.setNavigatorInTransition("From");

      setTimeout(() => {
        this.props.setNavigatorInTransition(false);
        this.props.setNavigatorIsAside(false);
      }, 100);
    }
  };

  linkOnClick = e => {
    console.log("linkOnClick");
    console.log(e.target);

    if (e.target.hasAttribute("data-slug")) {
      if (e.target.getAttribute("data-slug") === "/") {
        if (this.props.navigatorIsAside) {
          this.props.setNavigatorInTransition("From");

          setTimeout(() => {
            this.props.setNavigatorInTransition(false);
            this.props.setNavigatorIsAside(false);
          }, 100);
        }
      }
    } else {
      this.props.setNavigatorInTransition("To");

      setTimeout(() => {
        this.props.setNavigatorIsClosed(false);
        this.props.setNavigatorInTransition(false);
        this.props.setNavigatorIsAside(true);
      }, 1100);
    }

    this.setState({ open: !this.state.open });
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    // setTimeout to ensure a close event comes after a target click event
    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  render() {
    const {
      classes,
      parts,
      pages,
      navigatorIsAside,
      navigatorInTransition,
      navigatorIsClosed
    } = this.props;

    const info = find(parts, el => el.node.frontmatter.title === "info");
    const boxTitle = info ? info.node.frontmatter.boxTitle : null;
    const boxTitleNote = info ? info.node.frontmatter.boxTitleNote : null;
    const content = info ? info.node.html : null;
    const { anchorEl, open } = this.state;

    return (
      <aside
        className={`${classes.info} ${
          navigatorInTransition ? "navigatorInTransition" + navigatorInTransition : ""
        } ${navigatorIsAside ? "navigatorIsAside" : ""} ${
          navigatorIsClosed ? "navigatorIsClosed" : "navigatorIsOpened"
        }`}
      >
        <header className={classes.header}>
          <Link
            className={classes.avatarLink}
            onClick={this.avatarOnClick}
            to="/"
            title="back to Home page"
          >
            <div className={classes.avatar}>
              <img src={avatar} alt="" />
            </div>
          </Link>
          <h1 className={classes.boxTitle}>
            {boxTitle.replace(/ /g, "\u00a0")}
            <small>{boxTitleNote}</small>
          </h1>
        </header>
        <div className={classes.boxBody} dangerouslySetInnerHTML={{ __html: content }} />
        <ul className={classes.boxMenu}>
          {pages.map((page, i) => (
            <li key={i}>
              <Button
                onClick={this.linkOnClick}
                href={page.node.fields.slug}
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel
                }}
              >
                {page.node.frontmatter.title}
              </Button>
            </li>
          ))}
        </ul>

        <nav className={classes.topMenu}>
          <Manager>
            <Target>
              <IconButton
                aria-label="More"
                aria-owns={anchorEl ? "long-menu" : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            </Target>
            <Popper
              placement="bottom-end"
              eventsEnabled={open}
              className={classNames({ [classes.popperClose]: !open })}
            >
              <ClickAwayListener onClickAway={this.handleClose}>
                <Grow in={open} id="menu-list" style={{ transformOrigin: "0 0 0" }}>
                  <Paper>
                    <MenuList role="menu">
                      <MenuItem onClick={this.linkOnClick} data-slug="/">
                        Home
                      </MenuItem>
                      {pages.map((page, i) => (
                        <a
                          key={page.node.fields.slug}
                          href={page.node.fields.slug}
                          style={{ display: "block" }}
                        >
                          <MenuItem onClick={this.linkOnClick}>
                            {page.node.frontmatter.title}
                          </MenuItem>
                        </a>
                      ))}
                      <a href="/contact/" style={{ display: "block" }}>
                        <MenuItem onClick={this.linkOnClick}>Contact</MenuItem>
                      </a>
                    </MenuList>
                  </Paper>
                </Grow>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </nav>
      </aside>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  navigatorIsAside: PropTypes.bool.isRequired,
  navigatorInTransition: PropTypes.any.isRequired,
  setNavigatorIsAside: PropTypes.func.isRequired,
  setNavigatorInTransition: PropTypes.func.isRequired,
  setNavigatorIsClosed: PropTypes.func.isRequired,
  navigatorIsClosed: PropTypes.bool.isRequired
};

Info.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.parts,
    pages: state.pages,
    navigatorIsAside: state.navigator.isAside,
    navigatorInTransition: state.navigator.inTransition,
    navigatorIsClosed: state.navigator.isClosed,
    isActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorIsAside: val => dispatch(setNavigatorIsAside(val)),
    setNavigatorInTransition: val => dispatch(setNavigatorInTransition(val)),
    setNavigatorIsClosed: val => dispatch(setNavigatorIsClosed(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Info));
