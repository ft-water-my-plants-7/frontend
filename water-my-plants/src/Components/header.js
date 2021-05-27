import React from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";

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

  
  return (
    <StyledNav>
      <LeftSideNav>
        <span>WMP 💦</span>
        <h2>WELCOME, KAREN!</h2>
      </LeftSideNav>
      <RightSideNav>
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
