import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";

const styles = theme => ({
  desktopMenu: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      willChange: "opacity",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      listStyle: "none",
      margin: 0,
      width: "100%",
      transition: "opacity .5s",
      transitionDelay: ".7s",
      opacity: 1,
      position: "relative",
      transitionTimingFunction: "ease",
      ".navigatorInTransitionFrom &": {
        opacity: 1
      },
      ".navigatorInTransitionTo &, .navigatorIsAside &": {
        transitionDelay: "0s",
        transition: "opacity .3s",
        opacity: 0
      }
    }
  },
  link: {
    padding: ".5em",
    fontWeight: 300,
    color: theme.info.colors.menuLink,
    "&:hover": {
      color: theme.info.colors.menuLinkHover
    }
  }
});

const DesktopMenu = props => {
  const { classes, pages, linkOnClick } = props;

  return (
    <nav className={classes.desktopMenu}>
      {pages.map((page, i) => {
        const { fields, frontmatter } = page.node;
        return (
          <Link key={fields.slug} to={fields.slug} onClick={linkOnClick} className={classes.link}>
            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
          </Link>
        );
      })}
      <Link to="/search/" onClick={linkOnClick} className={classes.link}>
        Search
      </Link>
      <Link to="/contact/" onClick={linkOnClick} className={classes.link}>
        Contact
      </Link>
    </nav>
  );
};

DesktopMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  linkOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(DesktopMenu);

// {pages.map((page, i) => (

//   onClick={this.linkOnClick}
//   href={page.node.fields.slug}
//   classes={{
//     root: classes.buttonRoot,
//     label: classes.buttonLabel
//   }}
// >
//   {page.node.frontmatter.title}

// ))}
