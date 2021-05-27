import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerColor}; ;
`;

const LeftSideNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 30%;
  margin-left: 2%;
  span {
    color: ${(props) => props.theme.white};
    padding-left: 5%;
    display: flex;
    font-family: ${(props) => props.theme.font};
    align-items: center;
    font-size: 2.5rem;
  }
  h2 {
    color: ${(props) => props.theme.white};
    padding-left: 5%;
    display: flex;
    font-family: ${(props) => props.theme.font};
    align-items: center;
  }
`;

const RightSideNav = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 2%;
  
  button {
    color: ${(props) => props.theme.white};
    border: none;
    font-family: ${(props) => props.theme.font};
    background-color: ${(props) => props.theme.headerColor};
  }
  button:hover {
    cursor: pointer;
  }
`;


const Header = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push("/");
  }
  const [user, setUser] =useState([])
    const user_id = localStorage.getItem('user_id')
    useEffect(() => {
        axiosWithAuth().get(`/api/users/${user_id}`)
        .then((res) => {
            console.log(res);
            setUser(res.data)
        })
    }, [user_id])

  
  return (
    <StyledNav>
      <LeftSideNav>
        <span>WMP 💦</span>
        <h2>WELCOME, {user.username}!</h2>
      </LeftSideNav>
      <RightSideNav>
        <button onClick={() => history.push("/collection")}>
          <h2>MY COLLECTION</h2>
        </button>
        <button onClick={() => history.push("/user")}>
          <h2>MY PROFILE</h2>
        </button>
        <button onClick={() => history.push("/collection")}>
          <h2 onClick={logout}>SIGN OUT</h2>
        </button>
      </RightSideNav>
    </StyledNav>
  );
};

export default Header;
