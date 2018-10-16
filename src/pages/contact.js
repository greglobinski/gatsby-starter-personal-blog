import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";
import Layout from "../components/layout";

const styles = theme => ({});

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
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
  classes: PropTypes.object.isRequired,
  location: PropTypes.object
};

export default injectSheet(styles)(Contact);
