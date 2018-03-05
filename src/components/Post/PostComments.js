import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

import config from "../../../content/meta/config";

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  }
});

class PostComments extends React.Component {
  componentDidMount() {
    if (typeof FB !== "undefined") {
      //eslint-disable-next-line no-undef
      FB.XFBML.parse();
    }
  }

  render() {
    const { classes, post, slug } = this.props;

    return (
      <div id="post-comments" className={classes.postComments}>
        <div id="fb-root" />
        <div
          id="fb-comments"
          className="fb-comments"
          data-href={`${config.siteUrl}${slug}`}
          data-width="100%"
          data-numposts="5"
        />
      </div>
    );
  }
}

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostComments);
