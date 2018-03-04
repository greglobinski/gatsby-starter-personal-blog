import React from "react";
import PropTypes from "prop-types";
import Main from "../components/Main/";
require("core-js/fn/array/find");

//import Seo from "../components/Other/Seo";
import Post from "../components/Post/";
import Footer from "../components/Footer/";

class PostTemplate extends React.Component {
  componentDidMount() {
    //console.log("%c componentDidMount", "background: #222; color: #bada55");
    // (function(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src =
    //     "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=890795667615233";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "facebook-jssdk");
    // window.fbAsyncInit = function() {
    //   FB.init({
    //     appId: "115517331888071",
    //     cookie: true, // enable cookies to allow the server to access the session
    //     xfbml: true, // parse social plugins on this page
    //     version: "v2.5" // use version 2.1
    //   });
    // }.bind(this);
    // // Load the SDK asynchronously
    // (function(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "//connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "facebook-jssdk");
    // setTimeout(() => {
    //   //eslint-disable-next-line no-undef
    //   if (typeof FB != "undefined" && FB != null) {
    //     console.log("%c FB", "background: #222; color: #bada55");
    //     //eslint-disable-next-line no-undef
    //     FB.XFBML.parse(null, function() {
    //       console.log("I parsed");
    //     });
    //   }
    // }, 1500);
  }

  // componentDidMount() {
  //   import("../components/Share/").then(Share => {
  //     this.setState({ Share });
  //   });
  // }

  render() {
    const { slug } = this.props.pathContext;
    const post = ((this.props || {}).data || {}).post;
    const footnote = ((this.props || {}).data || {}).footnote;
    const author = ((this.props || {}).data || {}).author;

    return (
      <Main>
        <Post post={post} slug={slug} author={author} />

        {/* <div
            id="fb-comments"
            className="fb-comments"
            data-href="https://www.facebook.com/cna.net.au/"
            data-numposts="10"
          /> */}
        {/* <div id="fb-root" /> */}
        {/* <span
            className="fb-comments-count"
            data-href="https://silly-mcclintock-36e6bf.netlify.com/two-things-are-infinite/"
          />
          <div
            id="fb-comments"
            className="fb-comments"
            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width="100%"
            data-numposts="5"
          /> */}
        <Footer footnote={footnote} />
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
