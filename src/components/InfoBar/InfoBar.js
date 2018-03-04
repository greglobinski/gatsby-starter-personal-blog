import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import Link from "gatsby-link";
import { connect } from "react-redux";

import { setNavigatorPosition } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

import avatar from "../../images/avatar.jpg";
import TopMenu from "./TopMenu";

const styles = theme => ({
  infoBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    top: 0,
    left: 0,
    width: "100%",
    height: `${theme.bars.sizes.topBar}px`,
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      bottom: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "none"
    }
  },
  title: {
    float: "left",
    margin: "10px 0 0 15px",
    "& small": {
      display: "block",
      fontSize: ".65em",
      margin: "2px 0 0 0"
    }
  },
  avatarLink: {
    display: "block",
    float: "left",
    margin: "13px 0 0 30px"
  },
  avatar: {
    width: "36px",
    borderRadius: "65% 75%",
    height: "36px"
  }
});

class InfoBar extends React.Component {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes } = this.props;

    return (
      <aside className={classes.infoBar}>
        <Link to="/" className={classes.avatarLink} onClick={this.homeLinkOnClick}>
          <Avatar alt="asdfasd" src={avatar} className={classes.avatar} />
        </Link>
        <h3 className={classes.title}>
          asdfads
          <small>asdfa</small>
        </h3>
        <TopMenu
          pages={[]}
          homeLinkOnClick={this.homeLinkOnClick}
          pageLinkOnClick={this.pageLinkOnClick}
        />
      </aside>
    );
  }
}

InfoBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorPosition: val => dispatch(setNavigatorPosition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(InfoBar));
