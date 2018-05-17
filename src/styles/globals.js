import theme from "./theme";

export default {
  /*
      BEGINNING OF NORMALIZE STYLE
    */

  "@global": {
    /**
     * Add the correct display in IE9
     */
    "article, aside, footer, header, nav, section, figcaption, figure, main": {
      display: "block"
    },

    /**
     * Correct the font size and margin on `h1` elements within `section` and
     * `article` contexts in Chrome, Firefox, and Safari.
     */
    h1: {
      fontSize: "2em",
      margin: [["0.67em", 0]]
    },

    /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */
    hr: {
      boxSizing: "content-box" /* 1 */,
      height: 0 /* 1 */,
      overflow: "visible" /* 2 */
    },

    /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd `em` font sizing in all browsers.
     */
    pre: {
      fontFamily: "monospace, monospace" /* 1 */,
      fontSize: "1em" /* 2 */
    },

    /**
     * 1. Remove the gray background on active links in IE 10.
     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
     * 3. Remove the outline on focused links when they are also
     *    active or hovered in all browsers (opinionated).
     */
    // a: {
    //   background: "transparent" /* 1 */,
    //   textDecorationSkip: "objects" /* 2 */
    // },
    "a:active, a:hover": {
      outlineWidth: 0 /* 3 */
    },

    /**
     * 1. Remove the bottom border in Firefox 39-.
     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
     */
    "abbr[title]": {
      borderBottom: "none" /* 1 */,
      textDecoration: "underline" /* 2 */
    },

    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */
    "b, strong": {
      fontWeight: "bolder"
    },

    /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd `em` font sizing in all browsers.
     */
    "code, kbp, samp": {
      fontFamily: "monospace, monospace" /* 1 */,
      fontSize: "1em" /* 2 */
    },

    /**
     * Add the correct font style in Android 4.3-.
     */
    dfn: {
      fontStyle: "italic"
    },

    /**
     * Add the correct background and color in IE 9-.
     */
    mark: {
      backgroundColor: "#ff0",
      color: "#000"
    },

    /**
     * Add the correct font size in all browsers.
     */
    small: {
      fontSize: "80%"
    },

    /**
     * Prevent `sub` and `sup` elements from affecting the line height in
     * all browsers.
     */
    "sub, sup": {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline"
    },
    sup: {
      top: "-0.5em"
    },
    sub: {
      bottom: "-0.25em"
    },

    /**
     * Add the correct display in IE 9-.
     */
    "audio, video": {
      display: "inline-block"
    },

    /**
     * Add the correct display in iOS 4-7.
     */
    "audio:not([controls])": {
      display: "none",
      height: 0
    },

    /**
     * 1. Remove the border on images inside links in IE 10-.
     * 2. Remove extra space in all browsers
     */
    img: {
      borderStyle: "none" /* 1 */,
      verticalAlign: "middle" /* 2 */
    },

    /**
     * Hide the overflow in IE.
     */
    "svg:not(:root)": {
      overflow: "hidden"
    },

    /**
     * 1. Change the font styles in all browsers (opinionated).
     * 2. Remove the margin in Firefox and Safari.
     */
    "button, input, optgroup, select, textarea": {
      fontFamily: "sans-serif" /* 1 */,
      fontSize: "100%" /* 1 */,
      lineHeight: "1.15" /* 1 */,
      margin: 0 /* 2 */
    },

    /**
     * Show the overflow in IE & Edge.
     */
    "button, input": {
      overflow: "visible"
    },

    /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     */
    "button, select": {
      textTransform: "none"
    },

    /**
     * Correct the inability to style clickable types in iOS and Safari.
     */
    "button, [type=reset], [type=submit]": {
      "-webkit-appearance": "button"
    },

    /**
     * Remove the inner border and padding in Firefox.
     */
    "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
      borderStyle: "none",
      padding: 0
    },

    /**
     * Restore the focus styles unset by the previous rule.
     */
    "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
      outline: "1px dotted ButtonText"
    },

    /**
     * Change the border, margin, and padding in all browsers (opinionated).
     */
    fieldset: {
      border: "1px solid #c0c0c0",
      margin: [[0, "2px"]],
      padding: [["0.35em", "0.625em", "0.75em"]]
    },

    /**
     * 1. Correct the text wrapping in Edge and IE.
     * 2. Correct the color inheritance from `fieldset` elements in IE.
     * 3. Remove the padding so developers are not caught out when they zero out
     *    `fieldset` elements in all browsers.
     */
    legend: {
      boxSizing: "border-box" /* 1 */,
      color: "inherit" /* 2 */,
      display: "table" /* 1 */,
      maxWidth: "100%" /* 1 */,
      padding: 0 /* 3 */,
      whiteSpace: "normal" /* 1 */
    },

    /**
     * 1. Add the correct display in IE 9-.
     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */
    progress: {
      display: "inline-block" /* 1 */,
      verticalAlign: "baseline" /* 2 */
    },

    /**
     * Remove the default vertical scrollbar in IE.
     */
    textarea: {
      overflow: "auto"
    },

    /**
     * 1. Add the correct box sizing in IE 10-.
     * 2. Remove the padding in IE 10-.
     */
    "[type=checkbox], [type=radio]": {
      boxSizing: "border-box" /* 1 */,
      padding: 0 /* 2 */
    },

    /**
     * Correct the cursor style of increment and decrement buttons in Chrome.
     */
    "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
      height: "auto"
    },

    /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */
    "[type=search]": {
      appearance: "textfield" /* 1 */,
      outlineOffset: "-2px" /* 2 */
    },

    /**
     * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.
     */
    "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
      appearance: "none"
    },

    /**
     * 1. Correct the inability to style clickable types in iOS and Safari.
     * 2. Change font properties to `inherit` in Safari.
     */
    "::-webkit-file-upload-button": {
      appearance: "button" /* 1 */,
      font: "inherit" /* 2 */
    },

    /*
     * Add the correct display in Edge, IE, and Firefox.
     */
    "details, menu": {
      display: "block"
    },

    /*
     * Add the correct display in all browsers.
     */
    summary: {
      display: "list-item"
    },

    /**
     * Add the correct display in IE 9-.
     */
    canvas: {
      display: "inline-block"
    },

    /**
     * Add the correct display in IE.
     */
    template: {
      display: "none"
    },

    /**
     * Add the correct display in IE 10-.
     */
    "[hidden]": {
      display: "none"
    },

    /*
      END OF NORMALIZE STYLE
    */

    /*
      BEGiNNIG OF CUTSOM GLOBAL STYLE
     */

    html: {
      boxSizing: "border-box",
      "-webkit-text-size-adjust": "100%",
      "-moz-text-size-adjust": "none",
      "-ms-text-size-adjust": "100%",
      fontFamily: theme.base.fonts.unstyledFamily,
      lineHeight: "1.15",
      textSizeAdjust: "100%"
    },
    "html.wf-active": {
      fontFamily: theme.base.fonts.styledFamily
    },
    "*, *:before, *:after": {
      boxSizing: "inherit"
    },
    noscript: {
      background: "#d00",
      color: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      zIndex: 1000,
      transform: "translate(-50%, -50%)",
      padding: "1.5rem 2.5rem",
      fontWeight: 400,
      borderRadius: "2px",
      boxShadow: "0 0 10px 52px rgba(255,255,255,.8)"
    },
    body: {
      margin: 0,
      background: theme.base.colors.background,
      //overflow: "hidden",
      "-webkit-tap-highlight-color": "rgba(0,0,0,.05)"
    },
    wrapper: {},
    main: {
      position: "relative"
    },
    "h1, h2, h3": {
      fontWeight: 300
    },
    a: {
      background: "transparent",
      textDecorationSkip: "objects",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "0.3s"
    },
    "input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 50px white inset"
    }
  }
};
