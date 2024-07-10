import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import SearchAppBar from "../SearchBar/SearchBar";
import BasicMenu from "../SimpleMenu/SimpleMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Minga</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Mensajes</a>
            </li>
            <SearchAppBar className="searchbar" />
            {/* <li className="menu">
              <a href="#">
                <MenuIcon />
              </a>
            </li> */}
          </ul>
        </div>
        <BasicMenu className="prueba" />
      </nav>
    </div>
    /* hola */
  );
}

export default Navbar;
