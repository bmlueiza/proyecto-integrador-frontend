import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Categoria from "./pages/Categoria/Categoria";
import Perfil from "./pages/Perfil/Perfil";
import AcercaDe from "./pages/AcercaDe/AcercaDe";
import Login from "./pages/Login/Login";
import RegistroUser from "./pages/RegistroUser/RegistroUser";
import RegistroProfessional from "./pages/RegistroProfessional/RegistroProfessional";
import Evaluacion from "./pages/Evaluacion/Evaluacion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nombre" element={<Categoria />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro-usuario" element={<RegistroUser />} />
        <Route
          path="/registro-colaborador"
          element={<RegistroProfessional />}
        />
      </Routes>
      <Route path="/evaluacion/:id" element={<Evaluacion />} />
      <Footer />
    </>
  );
}

export default App;
