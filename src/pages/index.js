import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setNavigatorPosition } from "../state/store";

class Index extends React.Component {
  componentWillMount() {
    if (this.props.navigatorPosition !== "is-featured") {
      console.log(this.props.navigatorPosition);
      this.props.setNavigatorPosition("is-featured");
    }
  }

  render() {
    return <div />;
  }
}

Index.propTypes = {
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition
  };
};

const mapDispatchToProps = {
  setNavigatorPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
