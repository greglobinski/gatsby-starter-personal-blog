import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNavigatorIsAside, setNavigatorInTransition } from "../state/store";

class Index extends React.Component {
  componentWillMount() {
    if (this.props.navigatorIsAside) {
      this.props.setNavigatorIsAside(false);
    }
    //this.props.setNavigatorIsAside(false);
    // if (this.props.navigatorIsAside) {
    //   this.props.setNavigatorInTransition("From");
    //   setTimeout(() => {
    //     this.props.setNavigatorInTransition(false);
    //     this.props.setNavigatorIsAside(false);
    //   }, 1100);
    //}
    // setTimeout(() => {
    //   this.props.setNavigatorIsAside(false);
    // }, 200);
  }

  render() {
    return <div>index</div>;
  }
}

Index.propTypes = {
  navigatorIsAside: PropTypes.bool.isRequired,
  setNavigatorIsAside: PropTypes.func.isRequired,
  setNavigatorInTransition: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorIsAside: state.navigator.isAside
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorIsAside: val => dispatch(setNavigatorIsAside(val)),
    setNavigatorInTransition: val => dispatch(setNavigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
