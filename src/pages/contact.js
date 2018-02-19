import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import MainArticle from "../components/common/MainArticle";
import PageHeader from "../components/Page/PageHeader";
import Form from "../components/ContactForm";

const styles = theme => ({});

const Contact = () => {
  //const { classes } = this.props;

  return (
    <MainArticle>
      <PageHeader title="Contact" />
      <p>
        Feel free to contact me by email: <Obfuscate email="greglobinski@gmail.com" /> or use the
        form below.
      </p>
      <Form />
    </MainArticle>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
