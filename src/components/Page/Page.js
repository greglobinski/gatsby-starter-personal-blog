import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";

const Page = props => {
  const { page } = props;
  const html = (page || {}).html;

  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      <Content html={html} />
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
