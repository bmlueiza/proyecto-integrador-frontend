import React from "react";
import logo from "../../assets/logo.png"; // Importa el logo
import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <div className="presentacion">
      <div className="header">
        <img src={logo} alt="Logo Minga" className="logo" />
        <h1>Minga</h1>
      </div>
      <div className="contenido">
        <h2>¿Quiénes somos?</h2>
        <p>
          Minga es una aplicación web para conectar trabajadores domésticos con
          clientes que requieren su servicio.
        </p>
        <h2>Misión</h2>
        <p>
          Nuestra misión es facilitar la conexión entre trabajadores como
          carpinteros, albañiles, pintores y otros profesionales del hogar con
          personas que necesitan sus servicios, asegurando calidad y confianza
          en cada trabajo realizado.
        </p>
        <h2>Visión</h2>
        <p>
          Nuestra visión es ser la plataforma líder en la región para la
          contratación de servicios domésticos, reconocida por la excelencia y
          la satisfacción tanto de los trabajadores como de los clientes.
        </p>
      </div>
    </div>
  );
  return (
    <div className="presentacion">
      <div className="header">
        <img src={logo} alt="Logo Minga" className="logo" />
        <h1>Minga</h1>
      </div>

      <div className="slidercont">
        <ul className="slider">
          <li className="slider1" id="slider1">
            <img src="src\assets\Equipominga.png"></img>
          </li>
          <li className="slider2" id="slider2">
            <img src="src\assets\Equipominga1.png"></img>
          </li>
        </ul>

        <ul className="slidermenu">
          <li>
            <a href="#slider1">1</a>
          </li>
          <li>
            <a href="#slider2">2</a>
          </li>
        </ul>
      </div>

      <div className="contenido">
        <h2>¿Quiénes somos?</h2>

        <p>
          Minga es una aplicación web para conectar trabajadores domésticos con
          clientes que requieren su servicio.
        </p>
      </div>
    </div>
  );
};

export default AcercaDe;
