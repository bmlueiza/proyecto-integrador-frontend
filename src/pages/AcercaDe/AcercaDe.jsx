import React from 'react';
import logo from '../../assets/logo.png'; // Importa el logo
import './AcercaDe.css'; // Asegúrate de tener la hoja de estilos en el mismo directorio

const AcercaDe = () => {
    return (
        <div className="presentacion">
            <div className="header">
                <img src={logo} alt="Logo Minga" className="logo" />
                <h1>Minga</h1>
            </div>
            <div className="contenido">
                <h2>¿Quiénes somos?</h2>
                <p>Minga es una aplicación web para conectar trabajadores domésticos con clientes que requieren su servicio.</p>
            </div>
        </div>
    );
};

export default AcercaDe;
