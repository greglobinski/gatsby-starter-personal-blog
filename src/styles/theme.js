import { createMuiTheme } from "material-ui/styles";
import Color from "color";

const colors = require("./colors");

const theme = createMuiTheme({
  main: {
    colors: {
      background: colors.bg,
      text: colors.dark,
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.1)
        .string()
    },
    fonts: {
      unstyledFamily: `"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"`,
      styledFamily: "Open Sans",
      styledFonts: "300,400,600,700"
    }
  },
  navigator: {
    colors: {
      background: colors.white,
      infoBackground: colors.white,
      postsListItemLink: colors.gray,
      postsListItemLinkHover: colors.accent
    },
    sizes: {
      infoWith: 320,
      infoHeight: 60,
      postsListItemH1Font: 1.4,
      postsListItemH2Font: 1.05,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  post: {
    colors: {
      background: colors.white,
      title: colors.gray,
      subTitle: colors.gray,
      meta: colors.gray,
      content: colors.dark,
      footer: colors.gray,
      contentHeading: colors.gray,
      blockquoteFrame: colors.lightGray,
      link: colors.accent,
      linkHover: colors.dark
    },
    sizes: {
      maxWidth: "46em"
    },
    fonts: {
      title: {
        size: 1.9,
        weight: 600,
        lineHeight: 1.1,
        xSizeM: 1.15,
        xSizeL: 1.3
      },
      subTitle: {
        size: 1.5,
        weight: 300,
        lineHeight: 1.1,
        xSizeM: 1.15,
        xSizeL: 1.3
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1,
        lineHeight: 1.5
      },
      contentHeading: {
        h2Size: 1.4,
        h3Size: 1.2,
        weight: 600,
        lineHeight: 1.1
      },
      footer: {
        size: 1,
        lineHeight: 1.4
      }
    }
  },
  footer: {
    colors: {
      text: colors.gray,
      link: Color(colors.gray)
        .lighten(0.2)
        .string(),
      linkHover: colors.gray
    },
    sizes: {
      height: "50px"
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  }
});

export default theme;
