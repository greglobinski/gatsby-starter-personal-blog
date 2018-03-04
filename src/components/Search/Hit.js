import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

const styles = theme => ({
  link: {
    padding: ".5em 0 1em 1em",
    position: "relative",
    fontSize: "1.2em",
    display: "block",
    width: "100%",
    color: "#666",
    "&::before": {
      content: `"•"`,
      position: "absolute",
      top: ".5em",
      left: ".1em",
      color: theme.base.colors.accent
    },
    "& span": {
      fontWeight: 300,
      display: "block",
      fontSize: ".9em",
      margin: ".2em 0 0 0"
    }
  }
});

const Hit = props => {
  const { classes, hit } = props;

  return (
    <Link to={hit.fields.slug} className={classes.link}>
      {hit.frontmatter.title}
      {hit.frontmatter.subTitle && <span>{hit.frontmatter.subTitle}</span>}
    </Link>
  );
};

Hit.propTypes = {
  classes: PropTypes.object.isRequired,
  hit: PropTypes.object.isRequired
};

export default injectSheet(styles)(Hit);
