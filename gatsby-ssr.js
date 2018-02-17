import React from "react";
import { JssProvider, SheetsRegistry } from "react-jss";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import createStore from "./src/state/store";

import theme from "./src/styles/theme";

function minifyCssString(css) {
  return css.replace(/\n/g, "").replace(/\s\s+/g, " ");
}

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheets = new SheetsRegistry();
  const store = createStore();

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <JssProvider registry={sheets}>{bodyComponent}</JssProvider>
      </Provider>
    )
  );

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: minifyCssString(sheets.toString()) }}
    />
  ]);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <link
      key={`webfontsloader-preload`}
      rel="preload"
      href="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      as="script"
    />
  ]);
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
  return setPostBodyComponents([
    <div key="fb-root" id="fb-root" />,
    <script
      key={`webfontsloader-setup`}
      dangerouslySetInnerHTML={{
        __html: `
        WebFontConfig = {
          google: {
      families: ["${theme.main.fonts.styledFamily}:${theme.main.fonts.styledFonts}"]
    }
   };

   (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
   })(document);`
      }}
    />,
    <script
      key={`fb-setup`}
      dangerouslySetInnerHTML={{
        __html: `(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=340409213030244&autoLogAppEvents=1';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));`
      }}
    />
  ]);
};
