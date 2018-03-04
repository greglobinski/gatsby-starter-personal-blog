import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";

import Link from "gatsby-link";
import { connect } from "react-redux";
import screenfull from "screenfull";

import HomeIcon from "material-ui-icons/Home";
import SearchIcon from "material-ui-icons/Search";
import FilterListIcon from "material-ui-icons/FilterList";
import ArrowUpwardIcon from "material-ui-icons/ArrowUpward";
import FullscreenIcon from "material-ui-icons/Fullscreen";
import FullscreenExitIcon from "material-ui-icons/FullscreenExit";
import FormatSizeIcon from "material-ui-icons/FormatSize";

import { setNavigatorPosition, setNavigatorShape, setScrollToTop } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

const styles = theme => ({
  actionsBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    left: 0,
    //top: `calc(100vh - ${theme.bars.sizes.actionsBar}px)`,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    padding: `0 ${theme.base.sizes.linesMargin}`,
    justifyContent: "space-between",
    height: `${theme.bars.sizes.actionsBar}px`,
    width: "100%",
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      top: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `0 calc(${theme.base.sizes.linesMargin} * 1.5)`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column",
      top: 0,
      right: 0,
      left: "auto",
      height: "100%",
      padding: `${theme.base.sizes.linesMargin} 0`,
      width: `${theme.bars.sizes.actionsBar}px`,
      "&::before": {
        top: theme.base.sizes.linesMargin,
        bottom: theme.base.sizes.linesMargin,
        left: 0,
        right: "auto",
        width: 0,
        height: "auto",
        borderLeft: `1px solid ${theme.base.colors.lines}`
      }
    }
  },
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column"
    }
  }
});

class ActionsBar extends React.Component {
  state = {
    fullscreen: false
  };

  componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on("change", () => {
        this.setState({
          fullscreen: screenfull.isFullscreen
        });
      });
    }
  }

  homeOnClick = featureNavigator.bind(this);
  searchOnClick = moveNavigatorAside.bind(this);

  fullscreenOnClick = () => {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  };

  arrowUpOnClick = () => {
    this.props.setScrollToTop(true);
  };

  render() {
    const { classes, navigatorPosition, isWideScreen } = this.props;

    return (
      <div className={classes.actionsBar}>
        <div className={classes.group}>
          <IconButton aria-label="Back to list" onClick={this.homeOnClick}>
            <HomeIcon />
          </IconButton>
          {(isWideScreen || navigatorPosition !== "is-aside") && (
            <IconButton aria-label="Filter">
              <FilterListIcon />
            </IconButton>
          )}
          <IconButton
            aria-label="Search"
            onClick={this.searchOnClick}
            component={Link}
            data-shape="closed"
            to="/search/"
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className={classes.group}>
          {navigatorPosition === "is-aside" && (
            <IconButton aria-label="Font size">
              <FormatSizeIcon />
            </IconButton>
          )}
          {screenfull.enabled && (
            <IconButton aria-label="Fullscreen" onClick={this.fullscreenOnClick}>
              {this.state.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          )}
          <IconButton aria-label="Back to top" onClick={this.arrowUpOnClick}>
            <ArrowUpwardIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  setScrollToTop: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ActionsBar));
