import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {useHistory} from 'react-router-dom'


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
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
               <input type="text" name="username" onChange={changeHandler}/> Username
               <input type="password" name="password" onChange={changeHandler}/> Password
               <button>Log in</button>
            </form>
            <p>Already have an account? <span onClick={() => history.push('/Signup')}>Sign in</span></p>
        </div>
    )
}

export default SignInForm