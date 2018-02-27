import React from "react";

export default function asyncComponent(getComponent, loadingComponent) {
  class AsyncComponent extends React.Component {
    state = { Component: null };

    componentDidMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return loadingComponent ? loadingComponent : <div>Loading...</div>;
    }
  }
  return AsyncComponent;
}
