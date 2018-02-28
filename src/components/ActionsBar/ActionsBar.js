import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";

import Link from "gatsby-link";
import { connect } from "react-redux";

import HomeIcon from "material-ui-icons/Home";
import SearchIcon from "material-ui-icons/Search";
import FilterListIcon from "material-ui-icons/FilterList";
import ArrowUpwardIcon from "material-ui-icons/ArrowUpward";
import FullscreenIcon from "material-ui-icons/Fullscreen";
import FormatSizeIcon from "material-ui-icons/FormatSize";

import { setNavigatorPosition, setNavigatorShape } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

const styles = theme => ({
  actionsBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    top: 0,
    right: 0,
    height: "100vh",
    width: `${theme.bars.sizes.actionsBarWidth}px`,
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
  viewListOnClick = featureNavigator.bind(this);
  SearchOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.actionsBar}>
        <div className={classes.firstGroup}>
          <IconButton aria-label="Back to list" onClick={this.viewListOnClick}>
            <HomeIcon />
          </IconButton>
          <IconButton aria-label="Filter">
            <FilterListIcon />
          </IconButton>
          <IconButton
            aria-label="Search"
            onClick={this.SearchOnClick}
            component={Link}
            data-shape="closed"
            to="/search/"
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className={classes.secondGroup}>
          <IconButton aria-label="Font size">
            <FormatSizeIcon />
          </IconButton>
          <IconButton aria-label="Fullscreen">
            <FullscreenIcon />
          </IconButton>
          <IconButton aria-label="Back to top">
            <ArrowUpwardIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorPosition: val => dispatch(setNavigatorPosition(val)),
    setNavigatorShape: val => dispatch(setNavigatorShape(val))
  };
};

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ActionsBar));
