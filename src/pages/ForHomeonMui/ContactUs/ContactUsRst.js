import React from "react";
import Field from "./Field.js";
import Button from "./Button.js";
import classes from "./ContactUs.module.scss";
import { createS, useRState } from "rt-state";

const ContactUsRst = createS(() => {
  const data = useRState({
    firstName: { item: "", isErr: false, errMsg: "" },
    lastName: { item: "", isErr: false, errMsg: "" },
    email: { item: "", isErr: false, errMsg: "" },
    message: { item: "", isErr: false, errMsg: "" },
    isClicked: { state: false },
  });
  //   const [firstName, setFirstName] = useState({
  //     item: "",
  //     isErr: false,
  //     errMsg: "",
  //   });
  //   const [lastName, setLastName] = useState({
  //     item: "",
  //     isErr: false,
  //     errMsg: "",
  //   });
  //   const [email, setEmail] = useState({
  //     item: "",
  //     isErr: false,
  //     errMsg: "",
  //   });
  //   const [message, setMessage] = useState({
  //     item: "",
  //     isErr: false,
  //     errMsg: "",
  //   });
  //   const [isClicked, setIsClicked] = useState(false);

  const errHandler = (field) => {
    if (field.errMsg) {
      field.item = "";
      field.isErr = false;
      field.errMsg = "";
      data.isClicked.state = false;
      console.log(field.isErr);
    }
  };

  const onChangeHandler = (e, field) => {
    field.item = e.target.value;
    field.isErr = false;
    field.errMsg = "";
    console.log(e.target.value.length);
  };

  const validFirstName = () => {
    if (data.firstName.item.trim() === "" || data.firstName.item.length < 2) {
      data.firstName.item = "";
      data.firstName.isErr = true;
	  data.firstName.errMsg = "Please enter your first name.";
	  console.log(data.firstName.errMsg);
    }
  };
  const validLastName = () => {
    if (data.lastName.item.trim() === "" || data.lastName.item.length < 2) {
      data.lastName.item = "";
      data.lastName.isErr = true;
      data.lastName.errMsg = "Please enter your last name.";
    }
  };
  const validEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (data.email.item.trim() === "" || data.email.item.length < 5) {
      data.email.item = "";
      data.email.isErr = true;
      data.email.errMsg = "email must be 5 or more characters >_<";
      console.log(data.email.errMsg);
    } else if (data.email.item.indexOf("@") === -1) {
      data.email.item = "";
      data.email.isErr = true;
      data.email.errMsg = "Where is the @ symbol (-_-)b";
    } else if (
      data.email.item.indexOf("@") !== data.email.item.lastIndexOf("@")
    ) {
      data.email.item = "";
      data.email.isErr = true;
      data.email.errMsg = "One @ is perfect; two is too many (^_^)";
    } else if (data.email.item.indexOf(".") === -1) {
      data.email.item = "";
      data.email.isErr = true;
      data.email.errMsg = "Where is the . (-_-)b";
    } else if (
      data.email.item.indexOf("@") > data.email.item.lastIndexOf(".")
    ) {
      data.email.item = "";
      data.email.isErr = true;
      data.email.errMsg =
        "@ and . are two different things. En, you should swap them with each other (-_-)b";
    } else if (!emailRegex.test(data.email.item)) {
      data.email.item = "";
      data.email.isErr = true;
      data.email.errMsg = "Email does not appear to be valid.";
    }
  };
  const validMessage = () => {
    if (data.message.item.trim() === "" || data.message.item.length < 10) {
      data.message.item = "";
      data.message.isErr = true;
      data.message.errMsg = "Please say something more o(^_^)o";
    }
  };

  const validAll = () => {
    if (
      !data.firstName.isErr &&
      !data.lastName.isErr &&
      !data.email.isErr &&
      !data.message.isErr &&
      data.firstName.item !== "" &&
      data.lastName.item !== "" &&
      data.email.item !== "" &&
      data.message.item !== ""
    ) {
      window.location.href = `mailto:#?subject=Interested%20Client&body=${data.message.item}`;
    }
    if (data.firstName.item === "") {
      data.firstName.item = "";
      data.firstName.isErr = true;
      data.firstName.errMsg = "Please enter your first name.";
    }
    if (data.lastName.item === "") {
      data.lastName.item = "";
      data.lastName.isErr = true;
      data.lastName.errMsg = "Please enter your last name.";
    }
    if (data.email.item === "") {
      data.email.item = "";
      data.email.isErr = true;
      data.email.errMsg = "email must be 5 or more characters >_<";
    }
    if (data.message.item === "") {
      data.message.item = "";
      data.message.isErr = true;
      data.message.errMsg = "Please say something more o(^_^)o";
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    data.isClicked.state = true;
    console.log(data.isClicked.state);
    validAll();
  };

  return (
    <div className={classes.Wrapper}>
      <h2>Contact Us (Rst)</h2>

      <div className={classes.Form}>
        <Field
          label="First Name"
        //   onChange={(e) => onChangeHandler(e, data.firstName)}
          onChange={(e) => onChangeHandler(e, data.firstName)}
          value={data.firstName.isErr ? "" : data.firstName.item}
          onBlur={validFirstName}
          error={data.firstName.errMsg}
          isError={data.firstName.isErr}
          onClick={() => errHandler(data.firstName)}
        />
        <Field
          label="Last Name"
          onChange={(e) => onChangeHandler(e, data.lastName)}
          value={data.lastName.isErr ? "" : data.lastName.item}
          onBlur={validLastName}
          error={data.lastName.errMsg}
          isError={data.lastName.isErr}
          onClick={() => errHandler(data.lastName)}
        />

        <Field
          label="Email"
          onChange={(e) => onChangeHandler(e, data.email)}
          value={data.email.isErr ? "" : data.email.item}
          onBlur={validEmail}
          error={data.email.errMsg}
          isError={data.email.isErr}
          onClick={() => errHandler(data.email)}
        />

        <div className={data.message.isErr ? classes.Red : classes.Blu}>
          <textarea
            onChange={(e) => onChangeHandler(e, data.message)}
            value={data.message.isErr ? "" : data.message.item}
            onBlur={validMessage}
            onClick={() => errHandler(data.message)}
            placeholder={
              data.message.isErr ? data.message.errMsg : "Your Message Please"
            }
          ></textarea>
        </div>
      </div>

      <Button onClick={onSubmit} isClicked={data.isClicked.state} />
    </div>
  );
});

export default ContactUsRst;
