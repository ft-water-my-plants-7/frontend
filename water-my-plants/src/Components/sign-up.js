import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import SignUpSchema from "../Validation/sign-up-schema";


const PageContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.primaryColor};
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 60%;
  background-color: white;
  width: 40%;
  justify-content: center;
  align-items: center;
`;


const InnerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  height: 100%;
  width: 80%;
  justify-content: space-evenly;
  align-items: flex-start;
  font-family: ${(props) => props.theme.secondaryFont};
  box-sizing: border-box;

  h1 {
    font-family: ${(props) => props.theme.secondaryFont};
    color: ${(props) => props.theme.tertiaryColor};
    background-color: "yellow";
  }

  form {
    display: flex;
    flex-direction: column;
    width: 98%;
  }

  input {
    border: none;
    width: 100%;
    height: 100%;
    padding-bottom: 4%;
    margin-bottom: 2%;
    box-sizing: border-box;
    border-bottom: 2px solid ${(props) => props.theme.green};
    font-family: ${(props) => props.theme.secondaryFont};
    color: ${(props) => props.theme.green};
    font-size: 2rem;
  }

  input::-webkit-input-placeholder {
    color: green;
    font-family: ${(props) => props.theme.secondaryFont};
    font-size: 1.5rem;
  }

  p {
    width: 70%;
    color: ${(props) => props.theme.highlight};
  }

  p span {
    font-weight: 800;
    color: ${(props) => props.theme.black};
  }
`;

 const Form = styled.form`
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  height: 80%;
 `; 

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
    <PageContainer>
      <ContentContainer>
        <InnerContentContainer>
          <h1>SIGN UP</h1>

          <Form onSubmit={onSubmit}>
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
          </Form>
          <p>
            Already have an account?
            <span onClick={() => history.push("/")}> Sign in.</span>
          </p>
        </InnerContentContainer>
      </ContentContainer>
    </PageContainer>
  );
}
export default SignUpForm