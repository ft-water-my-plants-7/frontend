import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Header from "./header";

function EditUserProfile() {

const user_id = localStorage.getItem("user_id");
const [user, setUser] = useState({});

useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${user_id}`)
      .then((res) => {
          setUser(res.data)
      })
      .catch((err) => {
        console.log("This is an error in the useEffect", err);
      });
}, [])

const history = useHistory();

const onChange = event => {
    setUser({
        ...user, 
        [event.target.name]:
        event.target.value
    })
}

const handleSubmit = event => {
    event.preventDefault()
    const { password, phone_number, username } = user;
    axiosWithAuth()
      .put(`/api/users/${user_id}`, { password, phone_number, username })
      .then((res) => {
        history.push("/user");
      })
      .catch((err) => {
        // debugger;
        console.log("this is the error", err);
      });
    // This is in place so that the form knows what we're talking about.
}

const { password, phone_number } = user;

    return (
      <div>
        <Header />
        <h1>Hello edit user page </h1>
        <form>
          <input
            type="password"
            value={password}
            name="password"
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