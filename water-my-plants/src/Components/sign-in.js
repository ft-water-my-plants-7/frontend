import React, { useState, useHistory, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";


function SignInForm () {

    // STATES
    const initialFormValue = {
        email: "",
        password: ""
    }

    const [formValue, setFormValue] =useState(initialFormValue)

    //EVENT HANDLERS
    const changeHandler = event => {
        setFormValue({...formValue,[event.target.name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log(formValue)
    }

    // RETURN STATEMENT
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
               <input type="email" name="email" id="email" onChange={changeHandler}/> Email
               <input type="password" name="password" id="password" onChange={changeHandler}/> Password
               <button>Log in</button>
            </form>
            <p>Already have an account? <span>Sign in</span></p>
        </div>
    )
}

export default SignInForm