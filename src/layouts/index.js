import React from "react";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import theme from "../styles/theme";
import globals from "../styles/globals";

import { saveData, setNavigatorIsAside, setNavigatorInTransition } from "../state/store";

import Seo from "../components/common/Seo";
import Navigator from "../components/Navigator/";
import Info from "../components/Info/";

class Layout extends React.Component {
  componentWillMount() {
    // let isWideScreen =
    //   typeof window !== "undefined" ? document.documentElement.clientWidth > 776 : false;

    const posts = this.props.data.posts.edges;
    const parts = this.props.data.parts.edges;

    this.props.saveData({ posts, parts });

    //this.props.setNavigatorIsAside(true);
    // if (typeof window !== `undefined`) {
    //   this.props.setNavigatorInTransition(true);

    //   setTimeout(() => {
    //     this.props.setNavigatorInTransition(false);
    //   }, isWideScreen ? 500 : 0);
    // }
  }

  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <main>
          <Seo />
          {children()}
          <Navigator />
          <Info />
        </main>
      </MuiThemeProvider>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  saveData: PropTypes.func.isRequired,
  updatePostsData: PropTypes.func,
  setNavigatorIsAside: PropTypes.func,
  setNavigatorInTransition: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorIsAside: state.navigator.isAside,
    navigatorIsActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveData: data => dispatch(saveData(data)),
    setNavigatorIsAside: val => dispatch(setNavigatorIsAside(val)),
    setNavigatorInTransition: val => dispatch(setNavigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(globals)(Layout));

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query LayoutQuery {
    posts: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/.+/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            subTitle
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 230) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    parts: allMarkdownRemark(filter: { frontmatter: { type: { regex: "/part/" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            boxTitle
            boxTitleNote
          }
        }
      }
    }
  }
`;
