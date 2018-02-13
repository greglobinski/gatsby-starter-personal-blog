import React from "react";
import PropTypes from "prop-types";

//import Seo from "../components/Other/Seo";
import Article from "../components/Article/";

const PostTemplate = props => {
  const { post } = props.data;

  return <Article post={post} />;
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
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
  }
`;
