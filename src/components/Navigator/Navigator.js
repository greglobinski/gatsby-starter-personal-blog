import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { setNavigatorIsAside, setNavigatorInTransition } from "../../state/store";
import Posts from "./Posts";
import Info from "./Info";

const styles = theme => ({
  navigator: {
    //display: "none",
    //display: props => (props.isAside ? "none" : "block"),
    background: "#eee", //theme.navigator.colors.background,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    transition: "all .5s",
    width: props => (props.isAside ? "300px" : "100%")
    //width: "100%"
  }
});

class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.linkOnClick = this.linkOnClick.bind(this);
  }

  linkOnClick() {
    console.log("linkOnClic");
    if (!this.props.isAside) {
      this.props.setIsAside(true);
      this.props.setInTransition(true);
      // setTimeout(() => {
      //   this.props.setInTransition(false);
      // }, 800);
    }
  }

  render() {
    const { classes, posts, parts, isAside, inTransition, isHidden } = this.props;

    return (
      <div className={classes.navigator}>
        {this.props.posts.length && (
          <Posts
            location={location}
            posts={posts}
            linkOnClick={this.linkOnClick}
            isAside={isAside}
            inTransition={inTransition}
            isHidden={isHidden}
          />
        )}
        <Info parts={parts} />
      </div>
    );
  }
}

Navigator.propTypes = {
  posts: PropTypes.array.isRequired,
  parts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  isAside: PropTypes.bool.isRequired,
  isActive: PropTypes.any,
  isHidden: PropTypes.bool,
  inTransition: PropTypes.bool.isRequired,
  setIsAside: PropTypes.func.isRequired,
  setInTransition: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    parts: state.parts,
    isAside: state.navigator.isAside,
    inTransition: state.navigator.inTransition,
    isActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsAside: val => dispatch(setNavigatorIsAside(val)),
    setInTransition: val => dispatch(setNavigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Navigator));
