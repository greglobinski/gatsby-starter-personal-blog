import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

const styles = theme => ({
  footer: {}
});

class PostComments extends React.Component {
  componentDidMount() {
    this.loadFbLoginApi();

    if (typeof FB !== "undefined") {
      //eslint-disable-next-line no-undef
      //FB.XFBML.parse();
    }
  }

  loadFbLoginApi() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: 340409213030244,
        cookie: true,
        xfbml: true,
        version: "v2.5"
      });
    };

    console.log("Loading fb api");
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    const { classes, post, slug } = this.props;

    return (
      <div>
        <h1>{slug}</h1>

        <div id="fb-root" />
        <span
          className="fb-comments-count"
          data-href="https://silly-mcclintock-36e6bf.netlify.com/two-things-are-infinite/"
        />
        <div
          id="fb-comments"
          className="fb-comments"
          data-href="https://silly-mcclintock-36e6bf.netlify.com/two-things-are-infinite/"
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

/*
<script
key={`fb-setup`}
dangerouslySetInnerHTML={{
  __html: `(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=340409213030244&autoLogAppEvents=1';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`
}}
/>
*/

// <script
//           key={`fb-setup`}
//           dangerouslySetInnerHTML={{
//             __html: `(function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=340409213030244&autoLogAppEvents=1';
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));`
//           }}
//         />
//         <div id="fb-root" />
//         <span
//           className="fb-comments-count"
//           data-href="https://silly-mcclintock-36e6bf.netlify.com/two-things-are-infinite/"
//         />
//         <div
//           id="fb-comments"
//           className="fb-comments"
//           data-href="https://silly-mcclintock-36e6bf.netlify.com/two-things-are-infinite/"
//           data-width="100%"
//           data-numposts="5"
//         />
