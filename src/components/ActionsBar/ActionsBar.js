import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";
import { connect } from "react-redux";

import ViewListIcon from "material-ui-icons/FormatListBulleted";
import SearchIcon from "material-ui-icons/Search";
import FilterListIcon from "material-ui-icons/FilterList";
import ArrowUpwardIcon from "material-ui-icons/ArrowUpward";
import FullscreenIcon from "material-ui-icons/Fullscreen";
import FormatSizeIcon from "material-ui-icons/FormatSize";

import { backNavigatorToFullMode } from "./../../utils/shared";
import {
  setNavigatorIsAside,
  setNavigatorInTransition,
  setNavigatorIsClosed
} from "../../state/store";

const styles = theme => ({
  actionsBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    top: 0,
    right: 0,
    height: "100vh",
    width: `${theme.bars.sizes.desktopBarWidth}px`,
    "&::before": {
      content: `""`,
      position: "absolute",
      top: theme.main.sizes.linesMargin,
      bottom: theme.main.sizes.linesMargin,
      left: 0,
      width: 0,
      borderLeft: `1px solid ${theme.main.colors.lines}`
    }
  },
  group: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    width: "100%"
  },
  firstGroup: {
    extend: "group",
    top: theme.main.sizes.linesMargin
  },
  secondGroup: {
    extend: "group",
    bottom: theme.main.sizes.linesMargin
  }
});

class ActionsBar extends React.Component {
  viewListOnClick = backNavigatorToFullMode.bind(this);

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.actionsBar}>
        <div className={classes.firstGroup}>
          <IconButton
            className={classes.button}
            aria-label="Back to list"
            onClick={this.viewListOnClick}
          >
            <ViewListIcon />
          </IconButton>
          <IconButton className={classes.button} aria-label="Filter">
            <FilterListIcon />
          </IconButton>
          <IconButton className={classes.button} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </div>
        <div className={classes.secondGroup}>
          <IconButton className={classes.button} aria-label="Font size">
            <FormatSizeIcon />
          </IconButton>
          <IconButton className={classes.button} aria-label="Fullscreen">
            <FullscreenIcon />
          </IconButton>
          <IconButton className={classes.button} aria-label="Back to top">
            <ArrowUpwardIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
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

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navigatorIsAside: PropTypes.bool.isRequired,
  navigatorInTransition: PropTypes.any.isRequired,
  setNavigatorIsAside: PropTypes.func.isRequired,
  setNavigatorInTransition: PropTypes.func.isRequired,
  setNavigatorIsClosed: PropTypes.func.isRequired,
  navigatorIsClosed: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ActionsBar));
