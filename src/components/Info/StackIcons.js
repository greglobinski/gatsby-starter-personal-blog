import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import AlgoliaIcon from "../../images/svg/algolia.svg";
import ReactIcon from "../../images/svg/react.svg";
import GraphqlIcon from "../../images/svg/graphql.svg";
import JssIcon from "../../images/svg/jss.svg";
import MaterialUiIcon from "../../images/svg/material-ui.svg";
import ReduxIcon from "../../images/svg/redux.svg";
import GatsbyIcon from "../../images/svg/gatsby.svg";
import WebpackIcon from "../../images/svg/webpack.svg";
import BabelIcon from "../../images/svg/babel.svg";
import NetlifyIcon from "../../images/svg/netlify.svg";

const styles = theme => ({
  wrapper: {
    position: "absolute",
    left: 0,
    bottom: "60px",
    width: "100%",
    padding: "1em 2em"
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  svg: {
    width: "22px",
    height: "22px"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300
  }
});

const StackIcons = props => {
  const { classes } = props;

  const items = [
    { name: "gatsby", url: "https://www.gatsbyjs.org/", comp: GatsbyIcon },
    { name: "react", url: "https://reactjs.org/", comp: ReactIcon },
    { name: "graphql", url: "http://graphql.org/", comp: GraphqlIcon },
    { name: "jss", url: "http://cssinjs.org/", comp: JssIcon },
    { name: "material-ui", url: "https://reactjs.org", comp: MaterialUiIcon },
    { name: "redux", url: "https://redux.js.org/", comp: ReduxIcon },
    { name: "algolia", url: "https://www.algolia.com/", comp: AlgoliaIcon },
    { name: "webpack", url: "https://webpack.js.org/", comp: WebpackIcon },
    { name: "babel", url: "https://babeljs.io/", comp: BabelIcon },
    { name: "netlify", url: "https://www.netlify.com/", comp: NetlifyIcon }
  ];

  return (
    <div className={classes.wrapper}>
      <h5 className={classes.header}>built with:</h5>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = item.comp;
          return (
            <a
              href={item.url}
              key={item.name}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon path={`/svg/${item.name}.svg`} className={classes.svg} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
