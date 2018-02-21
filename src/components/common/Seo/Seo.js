import React from "react";
import Helmet from "react-helmet";
import config from "../../../utils/config";

const Seo = () => {
  const title = config.siteTitle;
  const description = config.siteDescription;
  const image = config.siteImage;
  const url = config.siteUrl;

  return (
    <Helmet>
      <html lang="en" />
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ""} />
    </Helmet>
  );
};

export default Seo;
