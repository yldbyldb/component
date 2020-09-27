import React, { Component } from "react";
import Field from "./Field.js";
import Button from "./Button.js";
import classes from "./ContactUs.module.scss";

class ContactUsClass extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      isFirstNameErr: false,
      firstNameErr: "",

      lastName: "",
      isLastNameErr: false,
      lastNameErr: "",

      email: "",
      isEmailErr: false,
      emailErr: "",

      message: "",
      isMessageErr: false,
      messageErr: "",

      isClicked: false,
    };
  }

  updateField = (field, value) => {
    this.setState({ [field]: value });
  };

  errHandler = (field, fieldErr, isFieldErr) => {
    if (this.state[fieldErr]) {
      this.setState({
        [field]: "",
        isClicked: false,
        [fieldErr]: "",
        [isFieldErr]: false,
      });
    }
  };

  validFirstName = () => {
    const { firstName } = this.state;
    if (firstName.trim() === "" || firstName.length < 2) {
      this.setState({
        isFirstNameErr: true,
        firstNameErr: "Please enter your first name.",
      });
    }
  };
  validLastName = () => {
    const { lastName } = this.state;
    if (lastName.trim() === "" || lastName.length < 2) {
      this.setState({
        isLastNameErr: true,
        lastNameErr: "Please enter your last name.",
      });
    }
  };
  validEmail = () => {
    const { email } = this.state;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.trim() === "" || email.length < 5) {
      this.setState({
        isEmailErr: true,
        emailErr: "email must be 5 or more characters >_<",
      });
      console.log("blur!");
    } else if (email.indexOf("@") === -1) {
      this.setState({
        isEmailErr: true,
        emailErr: "Where is the @ symbol (-_-)b",
      });
    } else if (email.indexOf("@") !== email.lastIndexOf("@")) {
      this.setState({
        isEmailErr: true,
        emailErr: "One @ is perfect, two is too many (^_^)",
      });
    } else if (email.indexOf(".") === -1) {
      this.setState({
        isEmailErr: true,
        emailErr: "Where is the . (-_-)b",
      });
    } else if (email.indexOf("@") > email.lastIndexOf(".")) {
      this.setState({
        isEmailErr: true,
        emailErr:
          "@ and . are two different things. En, you should swap them with each other (-_-)b",
      });
    } else if (!emailRegex.test(email)) {
      this.setState({
        isEmailErr: true,
        emailErr: "Email does not appear to be valid.",
      });
    }
  };
  validMessage = () => {
    const { message } = this.state;
    if (message.trim() === "" || message.length < 10) {
      this.setState({
        isMessageErr: true,
        messageErr: "Please say something more o(^_^)o",
      });
    }
  };

  validAll = () => {
    const {
      isFirstNameErr,
      isLastNameErr,
      isEmailErr,
      isMessageErr,
      firstName,
      lastName,
      email,
      message,
    } = this.state;
    if (
      !isFirstNameErr &&
      !isLastNameErr &&
      !isEmailErr &&
      !isMessageErr &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      message !== ""
    ) {
      window.location.href = `mailto:#?subject=Interested%20Client&body=${this.state.message}`;
    }
    if (firstName === "") {
      this.setState({
        isFirstNameErr: true,
        firstNameErr: "Please enter your first name.",
      });
    }
    if (lastName === "") {
      this.setState({
        isLastNameErr: true,
        lastNameErr: "Please enter your last name.",
      });
    }
    if (email === "") {
      this.setState({
        isEmailErr: true,
        emailErr: "email must be 5 or more characters >_<",
      });
    }
    if (message === "") {
      this.setState({
        isMessageErr: true,
        messageErr: "Please say something more o(^_^)o",
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        isClicked: true,
      },
      () => console.log(this.state.isClicked)
    );
    this.validAll();
  };

  render() {
    return (
      <div className={classes.Wrapper}>
        <h2>Contact Us (Class)</h2>

        <div className={classes.Form}>
          <Field
            label="First Name"
            onChange={(e) => this.updateField("firstName", e.target.value)}
            value={this.state.isFirstNameErr ? "" : this.state.firstName}
            onBlur={this.validFirstName}
            error={this.state.firstNameErr}
            isError={this.state.isFirstNameErr}
            onClick={() =>
              this.errHandler("firstName", "firstNameErr", "isFirstNameErr")
            }
          />
          <Field
            label="Last Name"
            onChange={(e) => this.updateField("lastName", e.target.value)}
            value={this.state.isLastNameErr ? "" : this.state.lastName}
            onBlur={this.validLastName}
            error={this.state.lastNameErr}
            isError={this.state.isLastNameErr}
            onClick={() =>
              this.errHandler("lastName", "lastNameErr", "isLastNameErr")
            }
          />

          <Field
            label="Email"
            onChange={(e) => this.updateField("email", e.target.value)}
            value={this.state.isEmailErr ? "" : this.state.email}
            onBlur={this.validEmail}
            error={this.state.emailErr}
            isError={this.state.isEmailErr}
            onClick={() => this.errHandler("email", "emailErr", "isEmailErr")}
          />

          {this.state.isMessageErr ? (
            <div className={classes.Red}>
              <textarea
                onChange={(e) => this.updateField("message", e.target.value)}
                value={this.state.isMessageErr ? "" : this.state.message}
                onBlur={this.validMessage}
                onClick={() =>
                  this.errHandler("message", "messageErr", "isMessageErr")
                }
                placeholder={this.state.messageErr}
              ></textarea>
            </div>
          ) : (
            <div className={classes.Blu}>
              <textarea
                onChange={(e) => this.updateField("message", e.target.value)}
                value={this.state.isMessageErr ? "" : this.state.message}
                onBlur={this.validMessage}
                onClick={() =>
                  this.errHandler("message", "messageErr", "isMessageErr")
                }
                placeholder={"Your Message Please"}
              ></textarea>
            </div>
          )}
        </div>

        <Button
          // formValues={this.state}
          onClick={this.onSubmit}
          isClicked={this.state.isClicked}
        />
      </div>
    );
  }
}

export default ContactUsClass;
