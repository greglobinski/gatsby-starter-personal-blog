import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import PropTypes from "prop-types";
import { SpringSystem, MathUtil } from "rebound";
import { forceCheck } from "react-lazyload";
import { connect } from "react-redux";

import { setScrollToTop } from "../../state/store";

class SpringScrollbars extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isNavigator && this.props.navigatorPosition !== "is-featured") {
      return;
    }

    if (this.props.scrollToTop && this.props.scrollToTop !== prevProps.scrollToTop) {
      this.scrollTop(0);
      this.props.setScrollToTop(false);
    }
  }
  componentDidMount() {
    this.springSystem = new SpringSystem();
    this.spring = this.springSystem.createSpring();
    this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
  }

  componentWillUnmount() {
    this.springSystem.deregisterSpring(this.spring);
    this.springSystem.removeAllListeners();
    this.springSystem = undefined;
    this.spring.destroy();
    this.spring = undefined;
  }

  getScrollTop() {
    return this.scrollbars.getScrollTop();
  }

  getScrollHeight() {
    return this.scrollbars.getScrollHeight();
  }

  getHeight() {
    return this.scrollbars.getHeight();
  }

  scrollTop(top) {
    const scrollTop = this.scrollbars.getScrollTop();
    const scrollHeight = this.scrollbars.getScrollHeight();
    const val = MathUtil.mapValueInRange(
      top,
      0,
      scrollHeight,
      scrollHeight * 0.01,
      scrollHeight * 0.99
    );
    this.spring.setCurrentValue(scrollTop).setAtRest();
    this.spring.setEndValue(val);
  }

  handleSpringUpdate(spring) {
    window.requestAnimationFrame(() => {
      const val = spring.getCurrentValue();
      this.scrollbars.scrollTop(val);
    });
  }

  render() {
    const { children, forceCheckOnScroll } = this.props;

    return (
      <Scrollbars
        autoHide
        universal={true}
        onScroll={forceCheckOnScroll && forceCheck}
        ref={comp => {
          this.scrollbars = comp;
        }}
      >
        {children}
      </Scrollbars>
    );
  }
}

SpringScrollbars.propTypes = {
  children: PropTypes.node.isRequired,
  scrollToTop: PropTypes.bool.isRequired,
  setScrollToTop: PropTypes.func.isRequired,
  forceCheckOnScroll: PropTypes.bool,
  navigatorPosition: PropTypes.string.isRequired,
  isNavigator: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    scrollToTop: state.scrollToTop,
    navigatorPosition: state.navigatorPosition
  };
};

const mapDispatchToProps = {
  setScrollToTop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpringScrollbars);
