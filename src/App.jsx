import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Mensajes from "./pages/Mensajes/Mensajes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AcercaDe from "./pages/AcercaDe/AcercaDe";
import Categoria from "./pages/Categoria/Categoria";
import Evaluacion from "./pages/Evaluacion/Evaluacion";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import RegistroProfessional from "./pages/RegistroProfessional/RegistroProfessional";
import RegistroUser from "./pages/RegistroUser/RegistroUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nombre" element={<Categoria />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/nosotros" element={<AcercaDe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro-usuario" element={<RegistroUser />} />
        <Route
          path="/registro-colaborador"
          element={<RegistroProfessional />}
        />
        <Route path="/evaluacion/:id" element={<Evaluacion />} />
        <Route path="/mensajes" element={<Mensajes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
