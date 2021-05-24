import React, { useState, useHistory, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import SignUpSchema from "../Validation/sign-up-schema"



const SignUpForm = () => {
  // STATES
  const initialFormValue = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formValue, setFormValue] = useState(initialFormValue);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
    const [disabled, setDisabled] = useState(true);

  //EVENT HANDLERS
     const changeHandler = (event) => {
       const { value, name, type, checked } = event.target;
       const valueToUse = type === "checkbox" ? checked : value;
       setFormErrors(name, valueToUse);
       setFormValue({ ...formValue, [name]: valueToUse });
     };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };

  const setFormErrors = (name, value) => {
    yup
      .reach(SignUpSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

     useEffect(() => {
       SignUpSchema.isValid(formValue).then((valid) => setDisabled(!valid));
     }, [formValue]);


  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={onSubmit}>
        {/* unique username */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        {/* valid phone number */}
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          onChange={changeHandler}
        />
        <span>{errors.phone}</span>
        {/* password required */}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirmPassword"
          onChange={changeHandler}
        />
        <button
        disabled={disabled}>Sign Up</button>
      </form>
      <p>Already have an account?<span>Sign in.</span></p>
    </div>
  );
}
export default SignUpForm