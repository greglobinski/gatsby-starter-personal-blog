const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/post.js");
    //
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: { frontmatter: { path: { regex: "/.+/" } } }, limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-javascript":
      config.plugin("CommonsChunkPlugin", webpack.optimize.CommonsChunkPlugin, [
        {
          name: `commons`,
          chunks: [`app`, `component---src-layouts-index-js`, `component---src-pages-index-js`],
          minChunks: (module, count) => {
            const vendorModuleList = [
              `react`,
              `react-dom`,
              `fbjs`,
              `react-router`,
              `react-router-dom`,
              `gatsby-react-router-scroll`,
              `dom-helpers`, // Used in gatsby-react-router-scroll
              `path-to-regexp`,
              `isarray`, // Used by path-to-regexp.
              `scroll-behavior`,
              `history`,
              `resolve-pathname`, // Used by history.
              `value-equal`, // Used by history.
              `invariant`, // Used by history.
              `warning`, // Used by history.
              `babel-runtime`, // Used by history.
              `core-js`, // Used by history.
              `loose-envify`, // Used by history.
              `prop-types`,
              `gatsby-link`,
              `jss`,
              `jss-nested`,
              `jss-expand`,
              `jss-global`,
              `jss-default-units`,
              `jss-extend`,
              `redux`,
              `react-redux`,
              `material-ui`,
              `color`,
              `color-convert`,
              `react-jss`,
              `theming`,
              `color-name`
            ];
            const isFramework = _.some(
              vendorModuleList.map(vendor => {
                const regex = new RegExp(`[\\\\/]node_modules[\\\\/]${vendor}[\\\\/].*`, `i`);
                return regex.test(module.resource);
              })
            );
            return isFramework || count > 2;
          }
        }
      ]);
      config.plugin("BundleAnalyzerPlugin", BundleAnalyzerPlugin, [
        {
          analyzerMode: "static",
          reportFilename: "./report/treemap.html",
          openAnalyzer: true,
          logLevel: "error",
          defaultSizes: "gzip"
        }
      ]);

      break;
  }

  return config;
};

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([`syntax-dynamic-import`, `dynamic-import-webpack`])
  };
};
