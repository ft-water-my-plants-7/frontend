import React, { useState } from "react"
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


function EditUserProfile() {
    
const [user, setUser] = useState({
  user_id: "",
  username: "",
  phone_number: ""
});


const onChange = event => {
    setUser({
        ...user, 
        [event.target.name]:
        event.target.value
    })
}

    return (
      <div>
        <h1>Hello edit user page </h1>
        <form>
          Username
          <input
            type="text"
            value={user.username}
            name="username"
            onChange={onChange}
          />
          Phone Number
          <input
            type="text"
            value={user.phone_number}
            name="phone_number"
            onChange={onChange}
          />
        </form>
      </div>
    );
}

export default EditUserProfile;