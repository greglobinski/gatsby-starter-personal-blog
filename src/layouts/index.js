import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "@material-ui/core/styles";

import asyncComponent from "../components/common/AsyncComponent/";
import Loading from "../components/common/Loading/";
import Navigator from "../components/Navigator/";
import ActionsBar from "../components/ActionsBar/";
import InfoBar from "../components/InfoBar/";
import InfoBox from "../components/InfoBox/";
import LayoutWrapper from "../components/LayoutWrapper/";

import { setFontSizeIncrease, setIsWideScreen } from "../state/store";
import { isWideScreen, timeoutThrottlerHandler } from "../utils/helpers";

import withRoot from "../withRoot";
import theme from "../styles/theme";
import globals from "../styles/globals";

// const InfoBox = asyncComponent(
//   () =>
//     import("../components/InfoBox/")
//       .then(module => {
//         return module;
//       })
//       .catch(error => {}),
//   <Loading
//     overrides={{ width: `${theme.info.sizes.width}px`, height: "100vh", right: "auto" }}
//     afterRight={true}
//   />
// );

class Layout extends React.Component {
  timeouts = {};
  categories = [];

  componentDidMount() {
    this.props.setIsWideScreen(isWideScreen());
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  componentWillMount() {
    if (typeof localStorage !== "undefined") {
      const inLocal = +localStorage.getItem("font-size-increase");
      const inStore = this.props.fontSizeIncrease;
      if (inLocal && inLocal !== inStore && inLocal >= 1 && inLocal <= 1.5) {
        this.props.setFontSizeIncrease(inLocal);
      }
    }
    this.getCategories();
  }

  getCategories = () => {
    this.categories = this.props.data.posts.edges.reduce((list, edge, i) => {
      const category = edge.node.frontmatter.category;
      if (category && !~list.indexOf(category)) {
        return list.concat(edge.node.frontmatter.category);
      } else {
        return list;
      }
    }, []);
  };

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 500, this.resizeHandler);
  };

  resizeHandler = () => {
    this.props.setIsWideScreen(isWideScreen());
  };

  render() {
    const { children, data } = this.props;

    return (
      <LayoutWrapper>
        {children}
        <Navigator posts={data.posts.edges} />
        <ActionsBar categories={this.categories} />
        <InfoBar pages={data.pages.edges} parts={data.parts.edges} />
        {this.props.isWideScreen && <InfoBox pages={data.pages.edges} parts={data.parts.edges} />}
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    isWideScreen: state.isWideScreen,
    fontSizeIncrease: state.fontSizeIncrease
  };
};

const mapDispatchToProps = {
  setIsWideScreen,
  setFontSizeIncrease
};

const ConnectedLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(injectSheet(globals)(Layout)));

export default props => (
  <StaticQuery
    query={graphql`
      query {
        posts: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//posts//" } }
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
          filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
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
        parts: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//parts//" } }) {
          edges {
            node {
              html
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => <ConnectedLayout {...props} data={data} />}
  />
);
