import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, parts, slug } = props;
  const { html } = post;

  return (
    <Article>
      <PostHeader {...post.frontmatter} />
      <Content html={html} />
      <PostFooter parts={parts} post={post} slug={slug} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  parts: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.parts
  };
};

export default connect(mapStateToProps)(Post);
