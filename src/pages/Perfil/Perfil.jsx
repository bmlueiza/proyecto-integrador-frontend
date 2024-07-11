import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Perfil.css";
import PerfilCard from "../../components/Cards/PerfilCard/PerfilCard";
import Button from "../../components/Button/Button";
import ContactModal from "../../components/Modals/ContactModal/ContactModal";
import Resena from "../../components/Cards/Resena/Resena";

const client = axios.create({
  baseURL: "http://localhost:8080/api/colaborador",
});

const clientResena = axios.create({
  baseURL: "http://localhost:8080/api/resenas/colaborador",
});

function Perfil() {
  const { id } = useParams(); // obtener el id del colaborador desde la URL
  const [colaborador, setColaborador] = useState(null);
  const [resenas, setResenas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      client
        .get(`/${id}`)
        .then((response) => {
          setColaborador(response.data);
        })
        .catch((error) => {
          console.error("Error buscando al colaborador:", error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      clientResena
        .get(`/${id}`)
        .then((response) => {
          setResenas(response.data);
        })
        .catch((error) => {
          console.error("Error buscando las reseñas:", error);
        });
    }
  }, [id]);

  if (!colaborador) {
    return <></>;
  }

  const handleContactClick = () => {
    setIsModalOpen(true);
    console.log("Contactar a", colaborador.nombre);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    console.log("Cerrar modal");
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Aquí puedes manejar el envío del formulario
    setIsModalOpen(false);
  };

  const imagen = `https://ui-avatars.com/api/?name=${colaborador.nombre}+${colaborador.apellidoPaterno}&background=random&color=fff`;

  return (
    <main className="perfil">
      <div className="perfil_header">
        <PerfilCard professional={colaborador} />
        <Button
          text="Contactar"
          onClick={handleContactClick}
          className="btn_big"
        />
      </div>
      <hr className="divider_perfil" />
      <h1>Valoraciones</h1>
      <div className="resenas">
        {resenas.length === 0 ? (
          <p>No hay valoraciones para este colaborador.</p>
        ) : (
          resenas.map((resena) => <Resena key={resena.id} resena={resena} />)
        )}
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />
    </main>
  );
}

export default Perfil;
