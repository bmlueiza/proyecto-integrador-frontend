import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import SearchAppBar from "../SearchBar/SearchBar";
import BasicMenu from "../SimpleMenu/SimpleMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleHide = () => {
    setIsClicked(!isClicked);
  };
  const toggleNav = () => {
    setIsClicked(!isClicked);
  };

  const handleClick = () => {
    toggleHide();
    toggleNav();
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav-logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className={`nav-items ${isClicked ? "hidden" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Minga
              </Link>
              <div className="underline-nav"></div>
            </li>

            <li>
              <Link to="/" className="nav-link">
                Mensajes
              </Link>
              <div className="underline-nav"></div>
            </li>
            <li>
              <Link to="/Nosotros" className="nav-link">
                Nosotros
              </Link>
              <div className="underline-nav"></div>
            </li>
            <SearchAppBar className="searchbar" />
          </ul>
        </div>
        <div className={`div-menu ${isClicked ? "hidden" : ""}`}>
          <BasicMenu className="user-menu" />
        </div>
        <div className="menu-icon-resp" onClick={handleClick}>
          <MenuIcon fontSize="large" className={isClicked ? "hide" : ""} />
        </div>
      </nav>
    </div>

    /* hola */
  );
}

export default Navbar;
