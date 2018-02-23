import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
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
    "& .ais-Pagination__root": {
      display: "flex",
      listStyle: "none",
      justifyContent: "center",
      padding: 0
    },
    "& .ais-Pagination__item": {
      "& a, & span": {
        color: "#666",
        fontSize: "1.2em",
        display: "block",
        padding: ".5em .5em",
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
          fontSize: "1.3em",
          padding: ".5em .7em"
        }
      },
      "& a": {
        "&:hover": {
          color: theme.main.colors.accent
        }
      },
      "&.ais-Pagination__itemFirst, &.ais-Pagination__itemPrevious, &.ais-Pagination__itemNext": {
        "& a, & span": {
          padding: ".4em .5em .6em",
          [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            padding: ".4em .7em .6em"
          }
        }
      }
    },
    "& a": {
      fontWeight: 400
    }
  }
});

const Search = props => {
  const { classes, algolia } = props;

  return (
    <div className={classes.search}>
      <InstantSearch
        appId={algolia.appId}
        apiKey={algolia.searchOnlyApiKey}
        indexName={algolia.indexName}
      >
        <SearchBox translations={{ placeholder: "Search" }} />
        <Stats />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </div>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  algolia: PropTypes.object.isRequired
};

export default injectSheet(styles)(Search);
