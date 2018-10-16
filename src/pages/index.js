import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import { featureNavigator } from "../utils/shared";
import Seo from "../components/Seo";
import Layout from "../components/layout";

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
      <Layout location={this.props.location}>
        <div>
          <Seo facebook={facebook} />
        </div>
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  location: PropTypes.object
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
)(Index);

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
