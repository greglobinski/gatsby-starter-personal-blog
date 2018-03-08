const colors = require("../../src/styles/colors");

module.exports = {
  pathPrefix: "",
  appName: "PersonalBlog",
  homeTitle: "Personal blog",
  siteTitle: "PersonalBlog - a blog GatsbyJS starter",
  siteDescription: "PersonalBlog is a GatsbyJs starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  siteRss: "/rss.xml",
  // author
  authorName: "greg lobinski",
  // info
  infoTitle: "greg lobinski",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - Gatsby starter",
  manifestShortName: "PersonalBlog",
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};
