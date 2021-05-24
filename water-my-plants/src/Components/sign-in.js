import React, { useState, useHistory, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";


function SignInForm () {

    const initialFormValue = {
        email: "",
        password: "",
    }
    const [formValue, setFormValue] =useState(initialFormValue)

    const changeHandler = event => {
        setFormValue(event.target.value)
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
               <input type="email" name="email" id="email" onChange={changeHandler}/> Email
               <input type="password" name="password" id="password" onChange={changeHandler}/> Password
               <button>Log in</button>
            </form>
            <p>Already have an account? <span>Sign in</span></p>
        </div>
    )
}

export default SignInForm