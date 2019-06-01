const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Zangolotinos - Club de lectura", // <title>
  shortSiteTitle: "Zantolotinos - Club de lectura", // <title> ending for posts and pages
  siteDescription: "Aquí se reunen todos los zangolotinos.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "greg lobinski",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "Zangolotinos",
  infoTitleNote: "Club de lectura",
  // manifest.json
  manifestName: "Zangolotinos - Club de lectura",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "rasda1949@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "https://facebook.com/greglobinski" }
  ]
};
