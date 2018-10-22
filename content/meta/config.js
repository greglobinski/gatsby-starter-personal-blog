const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "greg lobinski",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "greg lobinski",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "john@doe.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "https://facebook.com/greglobinski" }
  ]
};
