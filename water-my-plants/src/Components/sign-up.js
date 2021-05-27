import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import SignUpSchema from "../Validation/sign-up-schema"



const SignUpForm = () => {
  // STATES
  const initialFormValue = {
    username: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  };

  const [formValue, setFormValue] = useState(initialFormValue);
  const [errors, setErrors] = useState({
    username: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  });
    const [disabled, setDisabled] = useState(true);
    const history = useHistory()

  //EVENT HANDLERS
     const changeHandler = (event) => {
       const { value, name, type, checked } = event.target;
       const valueToUse = type === "checkbox" ? checked : value;
       setFormErrors(name, valueToUse);
       setFormValue({ ...formValue, [name]: valueToUse });
     };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formValue)
    const data = {username: formValue.username, password: formValue.password, phone_number: formValue.phone_number,}
    history.push('/')
    axios
    .post('https://ft-water-my-plants-3.herokuapp.com/api/users/register', data)
    .then((res) => {
      console.log('SIGN UP',res)
    })
    .catch((err) => {
      console.log(err)
    })
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
        <input
          type="text"
          name="username"
          id="name"
          placeholder="Name"
          onChange={changeHandler}
        />
        <p>{errors.phone_number}</p>
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          onChange={changeHandler}
        />
        <span></span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
        />
        <p>{errors.confirmPassword}</p>
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          onChange={changeHandler}
        />
        <button disabled={disabled}>Sign Up</button>
      </form>
      <p>
        Already have an account?<span>Sign in.</span>
      </p>
    </div>
  );
}
export default SignUpForm