import React, { useState } from "react";
import Field from "./Field.js";
import Button from "./Button.js";
import classes from "./ContactUs.module.scss";

const ContactUsFunction = () => {
  const [firstName, setFirstName] = useState("");
  const [isFirstNameErr, setIsFirstNameErr] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState("");

  const [lastName, setLastName] = useState("");
  const [isLastNameErr, setIsLastNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailErr, setIsEmailErr] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const [message, setMessage] = useState("");
  const [isMessageErr, setIsMessageErr] = useState(false);
  const [messageErr, setMessageErr] = useState("");

  const [isClicked, setIsClicked] = useState(false);

  //   const updateField = (field, value) => {
  //     this.setState({ [field]: value });
  //   };

  const errHandler = (fieldErr, setField, setFieldErr, setIsFieldErr) => {
    if (fieldErr) {
      setField("");
      setIsClicked(false);
      setFieldErr("");
      setIsFieldErr(false);
    }
  };

  const validFirstName = () => {
    if (firstName.trim() === "" || firstName.length < 2) {
      setIsFirstNameErr(true);
      setFirstNameErr("Please enter your first name.");
    }
  };
  const validLastName = () => {
    if (lastName.trim() === "" || lastName.length < 2) {
      setIsLastNameErr(true);
      setLastNameErr("Please enter your last name.");
    }
  };
  const validEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.trim() === "" || email.length < 5) {
      setIsEmailErr(true);
      setEmailErr("email must be 5 or more characters >_<");
      console.log("blur!");
    } else if (email.indexOf("@") === -1) {
      setIsEmailErr(true);
      setEmailErr("Where is the @ symbol (-_-)b");
    } else if (email.indexOf("@") !== email.lastIndexOf("@")) {
      setIsEmailErr(true);
      setEmailErr("One @ is perfect, two is too many (^_^)");
    } else if (email.indexOf(".") === -1) {
      setIsEmailErr(true);
      setEmailErr("Where is the . (-_-)b");
    } else if (email.indexOf("@") > email.lastIndexOf(".")) {
      setIsEmailErr(true);
      setEmailErr(
        "@ and . are two different things. En, you should swap them with each other (-_-)b"
      );
    } else if (!emailRegex.test(email)) {
      setIsEmailErr(true);
      setEmailErr("Email does not appear to be valid.");
    }
  };
  const validMessage = () => {
    if (message.trim() === "" || message.length < 10) {
      setIsMessageErr(true);
      setMessageErr("Please say something more o(^_^)o");
    }
  };

  const validAll = () => {
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
      setIsFirstNameErr(true);
      setFirstNameErr("Please enter your first name.");
    }
    if (lastName === "") {
      setIsLastNameErr(true);
      setLastNameErr("Please enter your last name.");
    }
    if (email === "") {
      setIsEmailErr(true);
      setEmailErr("email must be 5 or more characters >_<");
    }
    if (message === "") {
      setIsMessageErr(true);
      setMessageErr("Please say something more o(^_^)o");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);
    console.log(isClicked);
    validAll();
  };

  return (
    <div className={classes.Wrapper}>
      <h2>Contact Us (Function)</h2>

      <div className={classes.Form}>
        <Field
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={isFirstNameErr ? "" : firstName}
          onBlur={validFirstName}
          error={firstNameErr}
          isError={isFirstNameErr}
          onClick={() =>
            errHandler(
              firstNameErr,
              setFirstName,
              setFirstNameErr,
              setIsFirstNameErr
            )
          }
        />
        <Field
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={isLastNameErr ? "" : lastName}
          onBlur={validLastName}
          error={lastNameErr}
          isError={isLastNameErr}
          onClick={() =>
            errHandler(
              lastNameErr,
              setLastName,
              setLastNameErr,
              setIsLastNameErr
            )
          }
        />

        <Field
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={isEmailErr ? "" : email}
          onBlur={validEmail}
          error={emailErr}
          isError={isEmailErr}
          onClick={() =>
            errHandler(emailErr, setEmail, setEmailErr, setIsEmailErr)
          }
        />

        <div className={isMessageErr ? classes.Red : classes.Blu}>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={isMessageErr ? "" : message}
            onBlur={validMessage}
            onClick={() =>
              errHandler(messageErr, setMessage, setMessageErr, setIsMessageErr)
            }
            placeholder={isMessageErr ? messageErr:"Your Message Please"}
          ></textarea>
        </div>
      </div>

      <Button
        // formValues={this.state}
        onClick={onSubmit}
        isClicked={isClicked}
      />
    </div>
  );
};

export default ContactUsFunction;
