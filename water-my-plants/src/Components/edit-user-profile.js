import React, { useState } from "react"
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";



function EditUserProfile() {
    
const [user, setUser] = useState({
  user_id: "",
  username: "",
  phone_number: ""
});

const history = useHistory();
const { user_id } = useParams();

const onChange = event => {
    setUser({
        ...user, 
        [event.target.name]:
        event.target.value
    })
}

const handleSubmit = event => {
    event.preventDefault()
    const { username, phone_number } = user;
    axiosWithAuth()
    .put(`/api/plants/${user_id}`, { username, phone_number })
    .then((res) => {
        console.log(res)
        history.push("/user")
    })
    .catch((err) => {
        debugger
        console.log("this is the error", err)
    })
    // This is in place so that the form knows what we're talking about.
    console.log("this is submit", user);
}

const {  username, phone_number } = user;

    return (
      <div>
        <h1>Hello edit user page </h1>
        <form>
          Username
          <input
            type="text"
            // GET RID OF user dot here once handleSubmit is complete
            value={username}
            name="username"
            onChange={onChange}
          />
          Phone Number
          <input
            type="text"
            value={phone_number}
            name="phone_number"
            onChange={onChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
}

export default EditUserProfile;