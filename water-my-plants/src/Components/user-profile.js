import React, { useState, useEffect } from "react";
import Header from "./header";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const Profile = () => {

const history =  useHistory();
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
        <User>
          <h2>Username:</h2>
          <Content>{ user.username}</Content>
        </User>
        <User>
          <h2>Phone Number: </h2>
          <Content>{user.phone_number}</Content>
        </User>
        <button onClick={() => history.push(`/editProfile/${user_id}`)}>Edit profile</button>
      </div>
    );
}

export default Profile;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`
const Content = styled.p`
  padding-left: 10px;
`