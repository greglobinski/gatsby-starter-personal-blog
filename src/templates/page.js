import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";

//import Seo from "../components/Other/Seo";
import Page from "../components/Page/";

const styles = theme => ({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px)`,
      left: `${theme.info.sizes.width}px`
    }
  }
});

class PageTemplate extends React.Component {
  render() {
    const { classes, data } = this.props;
    const { page } = data;
    console.log(data);

    return (
      <div className={classes.wrapper}>
        <Page page={page} />
      </div>
    );
  }
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(PageTemplate);

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
