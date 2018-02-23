import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  Pagination
} from "react-instantsearch/dom";

import MainArticle from "../components/common/MainArticle";
import PageHeader from "../components/Page/PageHeader";
import Search from "../components/Search";

const styles = theme => ({
  search: {
    marginTop: "-1em",
    "& .ais-SearchBox__input": {
      border: "none",
      borderBottom: "1px solid #aaa",
      padding: ".2em",
      fontSize: "1.2em",
      width: "70%"
    },
    "& .ais-SearchBox__submit, & .ais-SearchBox__reset": {
      background: "none",
      border: "none",
      fill: "#666"
    },
    "& .ais-Stats__root": {
      margin: ".5em 0 1em .3em",
      fontSize: ".9em",
      color: "#999",
      display: "block"
    }
  }
});

const SearchPage = props => {
  const { classes } = props;

  return (
    <MainArticle>
      <PageHeader title="Search by" algolia={true} />
      <Search />
    </MainArticle>
  );
};

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(SearchPage);
