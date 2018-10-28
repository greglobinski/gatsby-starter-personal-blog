import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
require("core-js/fn/array/find");

import SocialIcons from "./SocialIcons";
import InfoMenu from "./InfoMenu";
import InfoHeader from "./InfoHeader";
import InfoText from "./InfoText";
import StackIcons from "./StackIcons";

import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";
import { setNavigatorPosition, setNavigatorShape } from "../../state/store";

const styles = theme => ({
  infoBox: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      color: theme.info.colors.text,
      background: theme.info.colors.background,
      position: "absolute",
      left: 0,
      top: 0,
      width: `${theme.info.sizes.width}px`,
      height: "100%",
      padding: "20px 40px",
      "&::after": {
        content: `""`,
        position: "absolute",
        right: 0,
        top: "20px",
        bottom: "20px",
        width: "1px",
        borderRight: `1px solid ${theme.base.colors.lines}`
      }
    }
  },
  wrapper: {
    position: "absolute",
    top: `${theme.info.sizes.headerHeight}px`,
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "0 40px 0",
    willChange: "opacity, bottom",
    transition: "bottom .5s 0s",
    opacity: 1,
    transitionTimingFunction: "ease",
    ".is-aside.closed &": {
      bottom: `${theme.navigator.sizes.closedHeight}px`
    },
    ".moving-featured &": {
      bottom: 0
    }
  }
});

class InfoBox extends React.Component {
  avatarOnClick = featureNavigator.bind(this);
  menulinkOnClick = moveNavigatorAside.bind(this);

  expandOnClick = e => {
    this.props.setNavigatorShape("closed");
  };

  render() {
    const { classes, parts, pages, navigatorPosition, navigatorShape } = this.props;
    const info = parts.find(el => el.node.frontmatter.title === "info");

    return (
      <aside
        className={`${classes.infoBox} ${navigatorPosition ? navigatorPosition : ""} 
        ${navigatorShape ? navigatorShape : ""}`}
      >
        {info && (
          <InfoHeader
            info={info}
            avatarOnClick={this.avatarOnClick}
            expandOnClick={this.expandOnClick}
          />
        )}
        <div className={classes.wrapper}>
          {info && <InfoText info={info} />}
          <SocialIcons />
          {pages && <InfoMenu pages={pages} linkOnClick={this.menulinkOnClick} />}
          <StackIcons />
        </div>
      </aside>
    );
  }
}

InfoBox.propTypes = {
  classes: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  setNavigatorShape: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(InfoBox));
