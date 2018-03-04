import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import Avatar from "material-ui/Avatar";
import Link from "gatsby-link";

import { setNavigatorPosition } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

import TopMenu from "./TopMenu";
import avatar from "../../images/avatar.jpg";

const styles = theme => ({
  topBar: {
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

class TopBar extends React.Component {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes, pages, parts } = this.props;

    const info = parts.find(el => el.node.frontmatter.title === "info");

    const boxTitle = info ? info.node.frontmatter.boxTitle : "";
    const boxTitleNote = info ? info.node.frontmatter.boxTitleNote : "";

    return (
      <aside className={classes.topBar}>
        <Link to="/" className={classes.avatarLink} onClick={this.homeLinkOnClick}>
          <Avatar alt={boxTitle} src={avatar} className={classes.avatar} />
        </Link>
        <h3 className={classes.title}>
          {boxTitle}
          <small>{boxTitleNote}</small>
        </h3>
      </aside>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  parts: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    parts: state.parts,
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
