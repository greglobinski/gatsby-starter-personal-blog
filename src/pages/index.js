import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import { featureNavigator } from "../utils/shared";

import withRoot from "../withRoot";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

class Index extends React.Component {
  featureNavigator = featureNavigator.bind(this);

  componentWillMount() {
    if (this.props.navigatorPosition !== "is-featured") {
      this.props.setNavigatorPosition("is-featured");
    }
  }

  render() {
    const { data } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <Layout>
        <Seo facebook={facebook} />
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  isWideScreen: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(Index));

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
