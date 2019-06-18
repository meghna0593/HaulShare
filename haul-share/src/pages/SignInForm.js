import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const SignInForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string().required("No password provided.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <div className="FormCenter">
          <form onSubmit={handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>

              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />

              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>

            <div className="FormField">
              <button
                type="submit"
                disabled={isSubmitting}
                className="FormField__Button mr-20"
              >
                Sign In
              </button>{" "}
              <Link exact to="/" className="FormField__Link">
                Sign-up
              </Link>
            </div>
          </form>
        </div>
      );
    }}
  </Formik>
);

export default SignInForm;
