// This is a custom theme, for details go to http://forgatsby.greglobinski.com/customize-personal-blog-starter/

import { createMuiTheme } from "@material-ui/core/styles";
import Color from "color";

import colors from "./new-colors";

const theme = createMuiTheme({
  base: {
    colors: {
      background: colors.background,
      text: colors.bright,
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.1)
        .string(),
      accent: colors.accent,
      lines: colors.gray
    },
    sizes: {
      linesMargin: "20px"
    },
    fonts: {
      unstyledFamily: `Arial`,
      styledFamily: "IBM Plex Serif",
      styledFonts: "300,400,600"
    }
  },
  info: {
    colors: {
      text: colors.bright,
      background: colors.background,
      socialIcons: colors.lightGray,
      socialIconsHover: colors.accent,
      menuLink: colors.bright,
      menuLinkHover: colors.accent
    },
    sizes: {
      width: 320,
      headerHeight: 170
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  navigator: {
    colors: {
      background: colors.background,
      postsListItemLink: colors.bright,
      postsListItemLinkHover: colors.accent,
      postsHeader: colors.bright
    },
    sizes: {
      closedHeight: 80,
      postsListItemH1Font: 1.3,
      postsListItemH2Font: 1.1,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  main: {
    colors: {
      background: colors.background,
      title: colors.bright,
      subTitle: colors.bright,
      meta: colors.bright,
      content: colors.bright,
      footer: colors.bright,
      contentHeading: colors.bright,
      blockquoteFrame: colors.dark,
      link: colors.accent,
      linkHover: colors.dark,
      fbCommentsColorscheme: "dark"
    },
    sizes: {
      articleMaxWidth: "50em"
    },
    fonts: {
      title: {
        size: 1.9,
        sizeM: 2.5,
        sizeL: 2.7,
        weight: 600,
        lineHeight: 1.1
      },
      subTitle: {
        size: 1.5,
        sizeM: 1.8,
        sizeL: 1.95,
        weight: 300,
        lineHeight: 1.1
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        sizeM: 1.15,
        sizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.5,
        h3Size: 1.3,
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
      text: Color(colors.gray)
        .lighten(0.5)
        .string(),
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.2)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.8,
        lineHeight: 1.4
      }
    }
  },
  bars: {
    colors: {
      background: colors.background,
      icon: colors.bright,
      text: colors.bright
    },
    sizes: {
      actionsBar: 60,
      infoBar: 60
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  palette: {
    primary: {
      main: "#709425"
    },
    type: "dark",
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  },
  typography: {
    fontFamily: `Arial, sans-serif`,
    fontSize: 16
  }
});

export default theme;
