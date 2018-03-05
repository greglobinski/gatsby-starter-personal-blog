import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, author, slug } = props;
  const frontmatter = (post || {}).frontmatter;
  const html = (post || {}).html;

  return (
    <Article>
      <PostHeader {...frontmatter} />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default Post;
