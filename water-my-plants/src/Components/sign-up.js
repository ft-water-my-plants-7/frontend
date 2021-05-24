import React, { useState, useHistory, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";


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

  //EVENT HANDLERS
  const changeHandler = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };


  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={onSubmit}>
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
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          onChange={changeHandler}
        />
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
        <button>Sign Up</button>
      </form>
      <p>Already have an account?<span>Sign in.</span></p>
    </div>
  );
}
export default SignUpForm