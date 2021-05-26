import React from "react";
import {useHistory} from 'react-router-dom'

const Header = () => {
  const history = useHistory();

  
  return (
    <nav>
      <h2> WMP 💦 </h2>
      <h2>WELCOME, KAREN!</h2>
      <button onClick={() => history.push("/user")}>User</button>
      <button onClick={() => history.push("/collection")}>My Collection</button>
      <h2>SIGN OUT</h2>
    </nav>
  );
};

export default Header;
