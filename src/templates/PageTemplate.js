import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNavigatorPosition } from "../state/store";
import Main from "../components/Main/";
import Page from "../components/Page/";
import Footer from "../components/Footer/";

class PageTemplate extends React.Component {
  componentWillMount() {
    if (this.props.navigatorPosition === "is-featured") {
      this.props.setNavigatorPosition("is-aside");
    }
  }

  render() {
    const { data } = this.props;

    return (
      <Main>
        <Page page={data.page} />
        <Footer footnote={data.footnote} />
      </Main>
    );
  }
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;
