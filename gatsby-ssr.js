import React from "react";
import { JssProvider, SheetsRegistry } from "react-jss";
import { MuiThemeProvider, createGenerateClassName } from "material-ui/styles";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
require("dotenv").config();

import createStore from "./src/state/store";
import theme from "./src/styles/theme";

function minifyCssString(css) {
  return css.replace(/\n/g, "").replace(/\s\s+/g, " ");
}

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheetsRegistry = new SheetsRegistry();

  const generateClassName = createGenerateClassName();

  const store = createStore();

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            {bodyComponent}
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    )
  );

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: minifyCssString(sheetsRegistry.toString()) }}
    />
  ]);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([]);
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
  return setPostBodyComponents([
    <div key="fb-root" id="fb-root" />

    // <script
    //   key={`fb-setup`}
    //   dangerouslySetInnerHTML={{
    //     __html: `(function(d, s, id) {
    //       var js, fjs = d.getElementsByTagName(s)[0];
    //       if (d.getElementById(id)) return;
    //       js = d.createElement(s); js.id = id;
    //       js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=340409213030244&autoLogAppEvents=1';
    //       fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));`
    //   }}
    // />
  ]);
};
