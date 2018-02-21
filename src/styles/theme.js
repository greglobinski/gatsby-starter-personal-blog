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
  info: {
    colors: {
      background: colors.white,
      avatarIcon: colors.accent
    },
    sizes: {
      width: 320,
      height: 60
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  navigator: {
    colors: {
      background: colors.white,
      postsListItemLink: colors.gray,
      postsListItemLinkHover: colors.accent
    },
    sizes: {
      postsListItemH1Font: 1.3,
      postsListItemH2Font: 1.1,
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
      maxWidth: "50em"
    },
    fonts: {
      title: {
        size: 1.9,
        weight: 600,
        lineHeight: 1.1,
        xSizeM: 1.3,
        xSizeL: 1.4
      },
      subTitle: {
        size: 1.5,
        weight: 300,
        lineHeight: 1.1,
        xSizeM: 1.2,
        xSizeL: 1.3
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        xSizeM: 1.15,
        xSizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.4,
        h3Size: 1.2,
        weight: 600,
        lineHeight: 1.3
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
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.2)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.85,
        lineHeight: 1.4
      }
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: 16
  },
  pallete: {
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  }
});

export default theme;
