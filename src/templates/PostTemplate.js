import React from "react";
import PropTypes from "prop-types";
import Main from "../components/Main/";
require("core-js/fn/array/find");
require("prismjs/themes/prism-okaidia.css");

//import Seo from "../components/Other/Seo";
import Post from "../components/Post/";
import Footer from "../components/Footer/";

class PostTemplate extends React.Component {
  render() {
    const { data, pathContext } = this.props;

    return (
      <Main>
        <Post post={data.post} slug={pathContext.slug} author={data.author} />
        <Footer footnote={data.footnote} />
      </Main>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
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
    author: markdownRemark(id: { regex: "/author/" }) {
      id
      html
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;
