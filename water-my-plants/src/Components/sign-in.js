import React, { useState, useHistory, useEffect } from "react";


function SignInForm () {
    return (
        <div>
            <h2>Login</h2>
            <form>
               <input type="email" name="email" id="email" />
               <input type="password" name="password" id="password"/>
               <button>Log in</button>
            </form>
            <p>Already have an account? <span>Sign in</span></p>
        </div>
    )
}

export default SignInForm