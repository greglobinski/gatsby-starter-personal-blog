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

import { setNavigatorPosition, setNavigatorShape } from "../../state/store";
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
    padding: `0 ${theme.main.sizes.linesMargin}`,
    justifyContent: "space-between",
    height: `${theme.bars.sizes.actionsBar}px`,
    width: "100%",
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.main.sizes.linesMargin,
      right: theme.main.sizes.linesMargin,
      height: 0,
      top: 0,
      borderTop: `1px solid ${theme.main.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `0 calc(${theme.main.sizes.linesMargin} * 1.5)`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column",
      top: 0,
      right: 0,
      left: "auto",
      height: "100%",
      padding: `${theme.main.sizes.linesMargin} 0`,
      width: `${theme.bars.sizes.actionsBar}px`,
      "&::before": {
        top: theme.main.sizes.linesMargin,
        bottom: theme.main.sizes.linesMargin,
        left: 0,
        right: "auto",
        width: 0,
        height: "auto",
        borderLeft: `1px solid ${theme.main.colors.lines}`
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
          {navigatorPosition === "is-aside" && (
            <IconButton aria-label="Back to top">
              <ArrowUpwardIcon />
            </IconButton>
          )}
          {screenfull.isFullscreen}
        </div>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  isWideScreen: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorPosition: val => dispatch(setNavigatorPosition(val)),
    setNavigatorShape: val => dispatch(setNavigatorShape(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ActionsBar));
