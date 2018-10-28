import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";

import config from "../../../content/meta/config";

const styles = theme => ({
  share: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row"
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    "& .SocialMediaShareButton": {
      margin: "0 .8em",
      cursor: "pointer"
    }
  },
  label: {
    fontSize: "1.2em",
    margin: "0 1em 1em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em"
    }
  }
});

class PostShare extends React.Component {
  render() {
    const { post, classes, slug } = this.props;
    const { excerpt, frontmatter } = post;
    const { title } = frontmatter;
    const url = config.siteUrl + config.pathPrefix + slug;

    const iconSize = 36;
    const filter = count => (count > 0 ? count : "");

    return (
      <div className={classes.share}>
        <span className={classes.label}>SHARE</span>
        <div className={classes.links}>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <GooglePlusShareButton url={url}>
            <GooglePlusIcon round size={iconSize} />
            <GooglePlusShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </GooglePlusShareCount>
          </GooglePlusShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            aria-label="Facebook share"
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton url={url} title={title} description={excerpt}>
            <LinkedinIcon round size={iconSize} />
            <LinkedinShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </LinkedinShareCount>
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostShare);
