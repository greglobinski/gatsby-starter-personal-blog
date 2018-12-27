import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { connect } from "react-redux";

import { setNavigatorPosition, setNavigatorShape } from "../state/store";
import { moveNavigatorAside } from "../utils/shared";

import withRoot from "../withRoot";
import Layout from "../components/Layout";
import Main from "../components/Main/";
import Post from "../components/Post/";
import Footer from "../components/Footer/";
import Seo from "../components/Seo";

require("core-js/fn/array/find");
require("prismjs/themes/prism-okaidia.css");

class PostTemplate extends React.Component {
  moveNavigatorAside = moveNavigatorAside.bind(this);

  componentDidMount() {
    if (this.props.navigatorPosition === "is-featured") {
      this.moveNavigatorAside();
    }
  }

  render() {
    const { data, pageContext } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <Layout>
        <Main>
          <Post post={data.post} slug={pageContext.slug} author={data.author} facebook={facebook} />
          <Footer footnote={data.footnote} />
          <Seo data={data.post} facebook={facebook} />
        </Main>
      </Layout>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
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
)(withRoot(PostTemplate));

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        subTitle
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    author: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
      id
      html
    }
    footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
      id
      html
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
