import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

import rehypeReact from "rehype-react";
import Counter from "../Counter";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "interactive-counter": Counter }
}).Compiler;

const Post = props => {
  const { post, author, slug, facebook } = props;
  const frontmatter = (post || {}).frontmatter;
  const title = ((post || {}).frontmatter || {}).title;
  const subTitle = ((post || {}).frontmatter || {}).subTitle;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;
  const htmlAst = (post || {}).htmlAst;

  //console.log(htmlAst);

  return (
    <Article>
      <PostHeader title={title} subTitle={subTitle} date={date} />
      {/* <Content html={html} /> */}
      <Content>{renderAst(htmlAst)}</Content>
      <PostFooter author={author} post={post} slug={slug} facebook={facebook} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Post;
