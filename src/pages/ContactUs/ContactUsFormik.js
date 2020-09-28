import React from "react";
import classes from "./ContactUsFormik.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactUsFormik = () => (
  <div className={classes.Wrapper}>
    <h2>Contact Us (Formik)</h2>
    <div className={classes.Form}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object().shape({
        name: Yup.string()
            .min(2, "Please enter your name")
            .required("Name can not be empty"),
          email: Yup.string()
            .email("Email does not appear to be valid")
            .required("Email can not be empty"),
          message: Yup.string()
            .min(10, "Message must be 10 or more characters")
            .required("Message can not be empty"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const timeOut = setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            clearTimeout(timeOut);
          }, 1000);
        }}
        render={(props) => (
          <Form>
            <div>
              <Field
                type="name"
                name="name"
                id="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <Field
                type="message"
                name="message"
                id="message"
                placeholder="Please enter your message"
                component="textarea"
              />
              <ErrorMessage name="message" component="div" />
            </div>

            <button type="submit">Contact Us</button>
          </Form>
        )}
      />
    </div>
  </div>
);

export default ContactUsFormik;
