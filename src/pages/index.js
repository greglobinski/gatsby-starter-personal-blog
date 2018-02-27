import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";

class Index extends React.Component {
  componentWillMount() {
    // if (this.props.navigatorPosition !== "is-featured") {
    //   this.props.setNavigatorPosition("is-featured");
    // }
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
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  setNavigatorShape: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatorPosition: val => dispatch(setNavigatorPosition(val)),
    setNavigatorShape: val => dispatch(setNavigatorShape(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
