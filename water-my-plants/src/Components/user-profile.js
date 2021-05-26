import React, { useState, useEffect } from "react";
import Header from "./header";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Profile = () => {

    const [user, setUser] =useState([])
    const user_id = localStorage.getItem('user_id')
    useEffect(() => {
        axiosWithAuth().get(`/api/users/${user_id}`)
        .then((res) => {
            console.log(res);
            setUser(res.data)
        })
    }, [])
    return (
      <div>
        <Header />
        <h2> Username</h2>
        <p>{user.username}</p>
        <p>{user.phone_number}</p>
        <button onClick={() => useHistory.push("/editProfile")}>Edit profile</button>
      </div>
    );
}

export default Profile;