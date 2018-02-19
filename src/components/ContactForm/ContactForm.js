import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Joi from "joi-browser";
import { navigateTo } from "gatsby-link";

import { nameSchema, emailSchema, messageSchema, encode } from "../../utils/helpers";

const styles = theme => ({});

class ContactForm extends React.Component {
  state = {
    submitError: null
  };

  validateName = e => {
    const result = Joi.validate({ name: e }, nameSchema);

    return !result.error;
  };

  validateEmail = e => {
    const result = Joi.validate({ email: e }, emailSchema);

    return !result.error;
  };

  validateMessage = e => {
    const result = Joi.validate({ message: e }, messageSchema);

    return !result.error;
  };

  handleSubmit = e => {
    e.preventDefault();

    const validName = this.inputName.state.error;
    const validEmail = this.inputEmail.state.error;
    const validMessage = this.inputEmail.state.error;

    const email = this.inputEmail.input.defaultValue;
    const name = this.inputName.input.defaultValue;
    const message = this.inputMessage.input.defaultValue;

    if (!validEmail && !validName && !validMessage) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", name: name, email: email, message: message })
      })
        .then(() => {
          console.log("[Paprika] Form submission success");
          navigateTo("/success");
        })
        .catch(error => {
          console.error("[Paprika] Form submission error:", error);
          this.handleNetworkError();
        });
    } else {
      this.handleFormError();
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }
  };

  handleFormError = e => {
    this.setState({ submitError: "There was an error with your name/email." });
  };

  handleNetworkError = e => {
    this.setState({ submitError: "There was a network error." });
  };

  render() {
    //const { classes } = this.props;

    return (
      <form
        name="contact"
        ref={f => (this.form = f)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        onKeyDown={this.handleKeyDown}
      >
        <label style={{ display: "none" }}>
          Don’t fill this out: <input name="bot-field" />
        </label>
        <TextField
          id="name"
          name="name"
          label="Name"
          inputRef={f => (this.inputName = f)}
          value={this.state.name}
          margin="normal"
          fullWidth
        />
        <TextField
          id="email"
          name="email"
          label="E-mail"
          inputRef={f => (this.inputEmail = f)}
          value={this.state.name}
          margin="normal"
          fullWidth
        />
        <TextField
          id="message"
          name="message"
          label="With placeholder multiline"
          inputRef={f => (this.inputMessage = f)}
          multiline
          margin="normal"
          fullWidth
        />
        <Button variant="raised" color="primary">
          Primary
        </Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(ContactForm);
