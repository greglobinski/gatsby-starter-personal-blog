import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
require("core-js/fn/array/find");

//import Seo from "../components/Other/Seo";
import Article from "../components/Article/";
import Footer from "../components/Footer/";

const styles = theme => ({
  main: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px)`,
      left: `${theme.info.sizes.width}px`
    }
  }
});

// const Disqus = asyncComponent(() =>
//   import("../components/Disqus/")
//     .then(module => {
//       return module;
//     })
//     .catch(error => {})
// );

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

  componentDidUpdate() {
    //console.log("%c componentDidUpdate", "background: #222; color: #bada55");
  }
  // componentDidMount() {
  //   import("../components/Share/").then(Share => {
  //     this.setState({ Share });
  //   });
  // }

  render() {
    const { slug } = this.props.pathContext;
    const { post } = this.props.data;
    const { classes, parts } = this.props;

    const footnote = parts.find(el => el.node.frontmatter.title === "footnote");
    const footnoteContent = footnote ? footnote.node.html : null;

    //let { Share } = this.state;

    return (
      <main className={classes.main}>
        <Scrollbars autoHide>
          <Article post={post} slug={slug} />

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
          <Footer footnoteContent={footnoteContent} />
        </Scrollbars>
      </main>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.parts,
    navigatorIsActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(PostTemplate));

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
  }
`;
