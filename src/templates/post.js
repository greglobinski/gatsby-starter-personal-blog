import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
var find = require("lodash/find");
import asyncComponent from "../components/common/AsyncComponent/";

//import Seo from "../components/Other/Seo";
import Article from "../components/Article/";
import Footer from "../components/Footer/";

const styles = theme => ({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px)`,
      left: `${theme.info.sizes.width}px`
    }
  }
});

const Share = asyncComponent(() =>
  import("../components/Share/")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const Disqus = asyncComponent(() =>
  import("../components/Disqus/")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Share: null
    };
  }

  componentDidMount() {
    console.log("%c componentDidMount", "background: #222; color: #bada55");

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

    setTimeout(() => {
      if (typeof FB != "undefined" && FB != null) {
        console.log("%c FB", "background: #222; color: #bada55");
        FB.XFBML.parse();
      }
    }, 1500);
  }

  componentDidUpdate() {
    console.log("%c componentDidUpdate", "background: #222; color: #bada55");
  }
  // componentDidMount() {
  //   import("../components/Share/").then(Share => {
  //     this.setState({ Share });
  //   });
  // }

  render() {
    const { post } = this.props.data;
    const { classes, parts } = this.props;

    const footnote = find(parts, el => el.node.frontmatter.title === "footnote");
    const footnoteContent = footnote ? footnote.node.html : null;

    //let { Share } = this.state;

    return (
      <div className={classes.wrapper}>
        <Scrollbars autoHide>
          <Article post={post} />
          <Share post={post} />
          {/* <div
            id="fb-comments"
            className="fb-comments"
            data-href="https://www.facebook.com/cna.net.au/"
            data-numposts="10"
          /> */}
          {/* <div id="fb-root" /> */}
          <div
            className="fb-comments"
            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width="100%"
            data-numposts="5"
          />
          {/* <Disqus post={post} /> */}
          {/* {!Share ? <div>Loading Share ...</div> : <Share post={post} />} */}
          <Footer footnoteContent={footnoteContent} />
        </Scrollbars>
      </div>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
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
