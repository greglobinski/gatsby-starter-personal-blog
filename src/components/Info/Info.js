import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
var find = require("lodash/find");

//import StackIcons from "./StackIcons";
import SocialIcons from "./SocialIcons";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import InfoHeader from "./InfoHeader";
import InfoText from "./InfoText";
import asyncComponent from "../common/AsyncComponent/";

import {
  setNavigatorIsAside,
  setNavigatorInTransition,
  setNavigatorIsClosed
} from "../../state/store";

const styles = theme => ({
  info: {
    color: theme.info.colors.text,
    background: theme.info.colors.background,
    borderBottom: "1px solid #ddd",
    position: "absolute",
    padding: "12px 1.5em 0",
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
      borderBottom: "none",
      padding: "20px 40px",
      "&::after": {
        content: `""`,
        position: "absolute",
        right: 0,
        top: "20px",
        bottom: "20px",
        width: "1px",
        borderRight: `1px solid ${theme.main.colors.lines}`
      }
    }
  }
});

const StackIcons = asyncComponent(() =>
  import("./StackIcons")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

class Info extends React.Component {
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

    //this.setState({ open: !this.state.open });
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

    return (
      <aside
        className={`${classes.info} ${
          navigatorInTransition ? "navigatorInTransition" + navigatorInTransition : ""
        } ${navigatorIsAside ? "navigatorIsAside" : ""} ${
          navigatorIsClosed ? "navigatorIsClosed" : "navigatorIsOpened"
        }`}
      >
        {info && <InfoHeader info={info} avatarOnClick={this.avatarOnClick} />}
        {info && <InfoText info={info} />}
        <SocialIcons />
        {pages && <DesktopMenu pages={pages} linkOnClick={this.linkOnClick} />}
        {pages && <MobileMenu pages={pages} linkOnClick={this.linkOnClick} />}
        <StackIcons />
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
