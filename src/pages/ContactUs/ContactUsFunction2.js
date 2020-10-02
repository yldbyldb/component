import React, { useState } from "react";
import Field from "./Field.js";
import Button from "./Button.js";
import classes from "./ContactUs.module.scss";

const ContactUsFunction2 = () => {
  const [firstName, setFirstName] = useState({
    item: "",
    isErr: false,
    errMsg: "",
  });
  const [lastName, setLastName] = useState({
    item: "",
    isErr: false,
    errMsg: "",
  });
  const [email, setEmail] = useState({
    item: "",
    isErr: false,
    errMsg: "",
  });
  const [message, setMessage] = useState({
    item: "",
    isErr: false,
    errMsg: "",
  });
  const [isClicked, setIsClicked] = useState(false);

  const errHandler = (field, setField) => {
    if (field.errMsg) {
      setField({ item: "", isErr: false, errMsg: "" });
      setIsClicked(false);
    }
  };

  const onChangeHandler = (e, setField) => {
    setField({
      item: e.target.value,
    });
  };

  const validFirstName = () => {
    if (firstName.item.trim() === "" || firstName.item.length < 2) {
      setFirstName({
        item: "",
        isErr: true,
        errMsg: "Please enter your first name.",
      });
    }
  };
  const validLastName = () => {
    if (lastName.item.trim() === "" || lastName.item.length < 2) {
      setLastName({
        item: "",
        isErr: true,
        errMsg: "Please enter your last name.",
      });
    }
  };
  const validEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.item.trim() === "" || email.item.length < 5) {
      setEmail({
        item: "",
        isErr: true,
        errMsg: "email must be 5 or more characters >_<",
      });
      console.log("blur!");
    } else if (email.item.indexOf("@") === -1) {
      setEmail({
        item: "",
        isErr: true,
        errMsg: "Where is the @ symbol (-_-)b",
      });
    } else if (email.item.indexOf("@") !== email.item.lastIndexOf("@")) {
      setEmail({
        item: "",
        isErr: true,
        errMsg: "One @ is perfect, two is too many (^_^)",
      });
    } else if (email.item.indexOf(".") === -1) {
      setEmail({
        item: "",
        isErr: true,
        errMsg: "Where is the . (-_-)b",
      });
    } else if (email.item.indexOf("@") > email.item.lastIndexOf(".")) {
      setEmail({
        item: "",
        isErr: true,
        errMsg:
          "@ and . are two different things. En, you should swap them with each other (-_-)b",
      });
    } else if (!emailRegex.test(email.item)) {
      setEmail({
        item: "",
        isErr: true,
        errMsg: "Email does not appear to be valid.",
      });
    }
  };
  const validMessage = () => {
    if (message.item.trim() === "" || message.item.length < 10) {
      setMessage({
        item: "",
        isErr: true,
        errMsg: "Please say something more o(^_^)o",
      });
    }
  };

  const validAll = () => {
    if (
      !firstName.isErr &&
      !lastName.isErr &&
      !email.isErr &&
      !message.isErr &&
      firstName.item !== "" &&
      lastName.item !== "" &&
      email.item !== "" &&
      message.item !== ""
    ) {
      window.location.href = `mailto:#?subject=Interested%20Client&body=${this.state.message}`;
    }
    if (firstName.item === "") {
      setFirstName({
        item: "",
        isErr: true,
        errMsg: "Please enter your first name.",
      });
    }
    if (lastName.item === "") {
      setLastName({
        item: "",
        isErr: true,
        errMsg: "Please enter your last name.",
      });
    }
    if (email.item === "") {
      setEmail({
        item: "",
        isErr: true,
        errMsg: "email must be 5 or more characters >_<",
      });
    }
    if (message.item === "") {
      setMessage({
        item: "",
        isErr: true,
        errMsg: "Please say something more o(^_^)o",
      });
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
      <h2>Contact Us (Function 2)</h2>

      <div className={classes.Form}>
        <Field
          label="First Name"
          onChange={(e) => onChangeHandler(e, setFirstName)}
          value={firstName.isErr ? "" : firstName.item}
          onBlur={validFirstName}
          error={firstName.errMsg}
          isError={firstName.isErr}
          onClick={() => errHandler(firstName, setFirstName)}
        />
        <Field
          label="Last Name"
          onChange={(e) => onChangeHandler(e, setLastName)}
          value={lastName.isErr ? "" : lastName.item}
          onBlur={validLastName}
          error={lastName.errMsg}
          isError={lastName.isErr}
          onClick={() => errHandler(lastName, setLastName)}
        />

        <Field
          label="Email"
          onChange={(e) => onChangeHandler(e, setEmail)}
          value={email.isErr ? "" : email.item}
          onBlur={validEmail}
          error={email.errMsg}
          isError={email.isErr}
          onClick={() => errHandler(email, setEmail)}
        />

        <div className={message.isErr ? classes.Red : classes.Blu}>
          <textarea
            onChange={(e) => onChangeHandler(e, setMessage)}
            value={message.isErr ? "" : message.item}
            onBlur={validMessage}
            onClick={() => errHandler(message, setMessage)}
            placeholder={message.isErr ? message.errMsg : "Your Message Please"}
          ></textarea>
        </div>
      </div>

      <Button
        onClick={onSubmit}
        isClicked={isClicked}
      />
    </div>
  );
};

export default ContactUsFunction2;
