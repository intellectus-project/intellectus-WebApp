import React, { useContext } from "react";
import Navbar from "../Navbar/navbar";
import { UserContext } from "../../../services/providers/user-context";
import "./_style.scss";
import "../../../css/app.scss";

const Header = () => {
  const { user } = useContext(UserContext);
  const { menus } = user.navbar;
  
  // TODO: definir imagenes para logos

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="img/logo.png" alt="logo" />
        </div>
        <div className="NavBar">
          <Navbar navbarEntries={menus} />
        </div>
      </div>
      <div className="descriptionContainer">
        {/* <div className="rapLogo">
          <img src="img/RAP.svg" />
        </div> */}
        <div className="Intellectus">
          <p>Intellectus</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
