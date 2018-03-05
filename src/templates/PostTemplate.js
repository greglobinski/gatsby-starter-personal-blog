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
    return (
      <Main>
        <Post
          post={this.props.data.post}
          slug={this.props.pathContext.slug}
          author={this.props.data.author}
        />
        <Footer footnote={this.props.data.footnote} />
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
      }
      frontmatter {
        title
        subTitle
        date(formatString: "MMMM DD, YYYY")
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
