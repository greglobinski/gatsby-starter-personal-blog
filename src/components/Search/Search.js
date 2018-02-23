import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";
import { InstantSearch, SearchBox, Hits, Stats, Pagination } from "react-instantsearch/dom";

import Hit from "./Hit";

const styles = theme => ({
  search: {
    marginTop: "-1em",
    "& .ais-SearchBox__wrapper": {
      position: "relative",
      borderBottom: "1px solid #aaa"
    },
    "& .ais-SearchBox__input": {
      border: "none",
      fontFamily: theme.main.fonts.styledFamily,
      padding: ".2em",
      fontSize: "1.4em",
      width: "calc(100% - 100px)"
    },
    "& .ais-SearchBox__submit, & .ais-SearchBox__reset": {
      background: "none",
      border: "none",
      fill: "#666",
      float: "right",
      margin: ".25em 0 0 .25em"
    },
    "& .ais-Stats__root": {
      margin: ".5em 0 2em .3em",
      fontSize: ".9em",
      color: "#999",
      display: "block"
    },
    "& a": {
      fontWeight: 400
    }
  }
});

const Search = props => {
  const { classes } = props;

  return (
    <div className={classes.search}>
      <InstantSearch appId="S7S8TCTMYW" apiKey="d34b8a792d37f60e6668336a3d0b4584" indexName="pages">
        <SearchBox translations={{ placeholder: "Search" }} />
        <Stats />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </div>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Search);
