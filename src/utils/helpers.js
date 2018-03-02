import theme from "../styles/theme";

export function isWideScreen() {
  const windowWidth = window.innerWidth;
  const mediaQueryL = theme.mediaQueryTresholds.L;

  return windowWidth >= mediaQueryL;
}
