import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {useHistory} from 'react-router-dom'


const PageContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.primaryColor};
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 50%;
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
`;

const SectionThreeForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10%;

  button {
    width: 30%;
    height: 120%;
    background-color: ${(props) => props.theme.green};
    color: white;
  }

  p {
    width: 70%;
    height: 50%;
    color: ${(props) => props.theme.highlight};
  }

  p span {
    font-weight: 800;
    color: ${(props) => props.theme.black};
  }

  p span:hover {
    cursor: pointer;
  }
`;




function SignInForm () {
    const history = useHistory()

    // STATES
    const initialFormValue = {
        username: "",
        password: ""
    }

    const [formValue, setFormValue] =useState(initialFormValue)

    //EVENT HANDLERS
    const changeHandler = event => {
        setFormValue({...formValue,[event.target.name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        axios
        .post('https://ft-water-my-plants-3.herokuapp.com/api/users/login', formValue)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user_id", res.data.user_id)
            history.push('/collection')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // RETURN STATEMENT
    return (
      <PageContainer>
        <ContentContainer>
          <InnerContentContainer>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
              <label>
                <input
                  type="text"
                  name="username"
                  onChange={changeHandler}
                  placeholder="Username"
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  placeholder="Password"
                />
              </label>
              <SectionThreeForm>
                <button>LOG IN</button>
                <p>
                  Have an account? 
                  <span onClick={() => history.push("/Signup")}> Sign in.</span>
                </p>
              </SectionThreeForm>
            </form>
          </InnerContentContainer>
        </ContentContainer>
      </PageContainer>
    );
}

export default SignInForm