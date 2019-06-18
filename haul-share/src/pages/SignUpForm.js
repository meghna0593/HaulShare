import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
      name: "",
      city: "",
      options: [
        "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia",
        "Prince Edward Island"
      ]
    }}
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
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      name: Yup.string().required("Required"),
      options: Yup.string().required("Required"),
      Contact: Yup.string()
        .required("Required")
        .matches(/^[0-9\b]+$/, "Should contain only numbers.")
        .min(10, "should be 10 digits.")
        .max(10, "should be 10 digits.")
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
              <label className="FormField__Label" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="FormField__Input"
                placeholder="Enter your full name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name && "error"}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
            </div>
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
              <label className="FormField__Label">Province</label>
              <Dropdown
                type="province"
                id="province"
                options={values.options}
                placeholder="Select a Province..."
                name="province"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.options && touched.options && "error"}
              />
              {errors.options && touched.options && (
                <div className="input-feedback">{errors.options}</div>
              )}
            </div>
            <div className="FormField">
              <label className="FormField__Label">Contact Number</label>
              <input
                type="Contact"
                id="Contact"
                className="FormField__Input"
                placeholder="Enter mobile number"
                name="Contact"
                value={values.Contact}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.Contact && touched.Contact && "error"}
              />
              {errors.Contact && touched.Contact && (
                <div className="input-feedback">{errors.Contact}</div>
              )}
            </div>
            <div className="FormField">
              <button
                type="submit"
                disabled={isSubmitting}
                className="FormField__Button mr-20"
              >
                Sign Up
              </button>{" "}
              <Link to="/sign-in" className="FormField__Link">
                Use an existing account
              </Link>
            </div>
          </form>
        </div>
      );
    }}
  </Formik>
);
export default SignUpForm;
