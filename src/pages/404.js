import React from "react";

import withRoot from "../withRoot";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";

const NotFoundPage = () => {
  return (
    <Layout>
      <Main>
        <Article>
          <PageHeader title="404 NOT FOUND" />
          <Content>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Content>
        </Article>
      </Main>
    </Layout>
  );
};

export default withRoot(NotFoundPage);
