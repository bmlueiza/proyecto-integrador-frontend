import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RegisterProfessional from "../../components/Forms/RegistroFormProfessional/RegistroFormProfessional";
import Footer from "../../components/Footer/Footer";

function RegistroProfessional() {
  return (
    <>
      <h1 className="title_home">Minga</h1>
      <hr className="divider" />
      <RegisterProfessional />
    </>
  );
}

export default RegistroProfessional;
