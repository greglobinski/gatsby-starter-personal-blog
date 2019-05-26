const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Personal Blog", // <title>
  shortSiteTitle: "Personal Blog", // <title> ending for posts and pages
  siteDescription: "Brian Kopp's Blog",
  siteUrl: "https://blog.codekopp.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "brian kopp",
  // info
  infoTitle: "brian kopp",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "personal blog - thoughts from another coder",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "briankopp.usa@gmail.com",
  // social
  authorSocialLinks: [{ name: "github", url: "https://github.com/briankopp" }]
};
