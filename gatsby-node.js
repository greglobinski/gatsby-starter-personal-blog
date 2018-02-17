const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/post.js");
    const pageTemplate = path.resolve("./src/templates/page.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: { id: { regex: "//posts|pages//" } }, limit: 1000) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
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
          // removes date subtring from slug
          const slug = edge.node.fields.slug.replace(/\d{4}-\d{1,2}-\d{1,2}--/i, "");
          const isPost = /posts/.test(edge.node.id);

          createPage({
            path: slug,
            component: isPost ? postTemplate : pageTemplate,
            context: {
              slug: slug
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
