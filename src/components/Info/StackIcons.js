import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import ReactSVG from "react-svg";
import Link from "gatsby-link";

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
    width: "24px",
    height: "24px"
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
    { name: "gatsby", url: "https://www.gatsbyjs.org/" },
    { name: "react", url: "https://reactjs.org/" },
    { name: "graphql", url: "http://graphql.org/" },
    { name: "jss", url: "http://cssinjs.org/" },
    { name: "material-ui", url: "https://reactjs.org" },
    { name: "redux", url: "https://redux.js.org/" },
    { name: "algolia", url: "https://www.algolia.com/" },
    { name: "webpack", url: "https://webpack.js.org/" },
    { name: "babel", url: "https://babeljs.io/" },
    { name: "netlify", url: "https://www.netlify.com/" }
  ];

  return (
    <div className={classes.wrapper}>
      <h5 className={classes.header}>built with:</h5>
      <div className={classes.box}>
        {items.map(item => (
          <Link to={item.url} key={item.name} className={classes.link}>
            <ReactSVG path={`/svg/${item.name}.svg`} className={classes.svg} />
          </Link>
        ))}
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
