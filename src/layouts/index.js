import React from "react";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import theme from "../styles/theme";
import globals from "../styles/globals";

import { saveData } from "../state/store";

import asyncComponent from "../components/common/AsyncComponent/";
import Loading from "../components/common/Loading/";
import Seo from "../components/common/Seo";
import Navigator from "../components/Navigator/";
import ActionsBar from "../components/ActionsBar/";
import TopBar from "../components/TopBar/";

import { isWideScreen } from "../utils/helpers";

const InfoBox = asyncComponent(
  () =>
    import("../components/InfoBox/")
      .then(module => {
        return module;
      })
      .catch(error => {}),
  <Loading
    overrides={{ width: `${theme.info.sizes.width}px`, height: "100vh", right: "auto" }}
    afterRight={true}
  />
);

class Layout extends React.Component {
  componentWillMount() {
    const posts = this.props.data.posts.edges;
    const pages = this.props.data.pages.edges;
    const parts = this.props.data.parts.edges;

    this.props.saveData({ posts, pages, parts });
  }

  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{
            padding: "1px",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden"
          }}
        >
          <Seo />
          {children()}
          <Navigator />
          {isWideScreen() && <InfoBox />}
          <ActionsBar />
          <TopBar />
        </div>
      </MuiThemeProvider>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  saveData: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveData: data => dispatch(saveData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(globals)(Layout));

//eslint-disable-next-line no-undef
export const guery = graphql`
  query LayoutQuery {
    posts: allMarkdownRemark(
      filter: { id: { regex: "//posts//" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            subTitle
            category
            cover {
              children {
                ... on ImageSharp {
                  resolutions(width: 90, height: 90) {
                    ...GatsbyImageSharpResolutions_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    parts: allMarkdownRemark(filter: { id: { regex: "//parts//" } }) {
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
