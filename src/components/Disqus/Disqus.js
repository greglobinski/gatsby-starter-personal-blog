import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import PropTypes from "prop-types";

import config from "../../utils/config";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }
  render() {
    const { post } = this.props;
    const { frontmatter } = post;
    const { path, title } = frontmatter;

    if (!config.disqusShortname) {
      return null;
    }

    const url = config.siteUrl + config.pathPrefix + path;
    return (
      <div style={{ willChange: "auto" }}>
        sdfasd
        {/* <ReactDisqusComments
          shortname={config.disqusShortname}
          identifier={title}
          title={title}
          url={url}
          onNewComment={this.notifyAboutComment}
        /> */}
      </div>
    );
  }
}

Disqus.propTypes = {
  post: PropTypes.object.isRequired
};

export default Disqus;
