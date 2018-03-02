import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import { setNavigatorPosition } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

import TopMenu from "./TopMenu";

const styles = theme => ({
  topBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    top: 0,
    left: 0,
    width: "100%",
    height: "48px",
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.main.sizes.linesMargin,
      right: theme.main.sizes.linesMargin,
      height: 0,
      bottom: 0,
      borderTop: `1px solid ${theme.main.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "none"
    }
  }
});

class TopBar extends React.Component {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes, pages } = this.props;

    return (
      <aside className={classes.topBar}>
        <TopMenu
          pages={pages}
          homeLinkOnClick={this.homeLinkOnClick}
          pageLinkOnClick={this.pageLinkOnClick}
        />
      </aside>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorPosition: val => dispatch(setNavigatorPosition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(TopBar));
