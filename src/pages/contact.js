import React from "react";
import PropTypes from "prop-types";
import Obfuscate from "react-obfuscate";

import withRoot from "../withRoot";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";

const Contact = () => {
  return (
    <Layout>
      <Main>
        <Article>
          <PageHeader title="Contact" />
          <Content>
            Feel free to contact me by email: <Obfuscate email={config.contactEmail} /> or use the
            form below.
          </Content>
          <Form />
        </Article>
      </Main>
    </Layout>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(Contact);
