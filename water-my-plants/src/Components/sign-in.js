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
  background-color: black;
  height: 30%;
  width: 40%;
  justify-content: center;
  align-items: center;
`;


const InnerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  height: 80%;
  width: 80%;
  justify-content: space-evenly;
  align-items: flex-start;
  font-family: ${(props) => props.theme.secondaryFont};

  h1 {
    font-family: ${(props) => props.theme.secondaryFont};
    color: ${(props) => props.theme.tertiaryColor};
  }

  form {
    display: flex;
    flex-direction: column;
    width: 98%;
    justify-content: space-evenly;
  }

  input {
    border: none;
    width: 100%;
    height: 150%;
    color: red;
    margin-bottom: 5%;
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
  /* align-items: center; */
  justify-content: center;
  padding-top: 10%;


  button {
    width: 50%;
    height: 50%;
  }
`




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
                <button>Log in</button>
                <p>
                  Already have an account?
                  <span onClick={() => history.push("/Signup")}>Sign in</span>
                </p>
              </SectionThreeForm>
            </form>
          </InnerContentContainer>
        </ContentContainer>
      </PageContainer>
    );
}

export default SignInForm