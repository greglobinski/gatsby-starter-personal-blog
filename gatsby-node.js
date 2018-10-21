const webpack = require("webpack");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { store } = require(`./node_modules/gatsby/dist/redux`);

module.exports = {
  onCreateNode({ node, getNode, actions }) {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` });
      const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
      const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
      createNodeField({
        node,
        name: `prefix`,
        value: separtorIndex ? slug.substring(1, separtorIndex) : ""
      });
    }
  },

  createPages({ graphql, actions }) {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
      const postTemplate = path.resolve("./src/templates/PostTemplate.js");
      const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
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
                      prefix
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
          const { data } = result || {};
          const { allMarkdownRemark } = data || {};
          const { edges } = allMarkdownRemark || [];
          if (!edges || !edges.length <= 0) return reject(new Error("Invalid query/data."));

          // Create posts and pages.
          edges.forEach(edge => {
            const slug = edge.node.fields.slug;
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
  },

  onCreateWebpackConfig({ stage, rules, loaders, plugins, actions }) {
    // console.log("store.getState() keys", _.keysIn(store.getState()));
    // console.log("store.getState()", Array.from(store.getState().pages.keys()));
    // console.log("store.getState()", store.getState().pages);

    // let components = store.getState().pages.map(page => page.componentChunkName);
    // let components = Array.from(store.getState().pages.values()).map(
    //   page => page.componentChunkName
    // );
    // components = _.uniq(components);
    // plugins.unshift([
    //   "CommonsChunkPlugin",
    //   webpack.optimize.CommonsChunkPlugin,
    //   [
    //     {
    //       name: `commons`,
    //       chunks: [`app`, ...components],
    //       minChunks: (module, count) => {
    //         const vendorModuleList = []; // [`material-ui`, `lodash`];
    //         const isFramework = _.some(
    //           vendorModuleList.map(vendor => {
    //             const regex = new RegExp(`[\\\\/]node_modules[\\\\/]${vendor}[\\\\/].*`, `i`);
    //             return regex.test(module.resource);
    //           })
    //         );
    //         return isFramework || count > 1;
    //       }
    //     }
    //   ]
    // ]);

    actions.setWebpackConfig({
      optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: "all"
            }
          }
        }
      }
    });
  },

  modifyBabelrc({ babelrc }) {
    return {
      ...babelrc,
      plugins: babelrc.plugins.concat([`syntax-dynamic-import`, `dynamic-import-webpack`])
    };
  }
};
