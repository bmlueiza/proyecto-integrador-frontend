import { FaStar, FaRegStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResultadoCategoria from "../../components/Cards/ResultadoCategoria/ResultadoCategoria";
import Button from "../../components/Button/Button";
import Resena from "../../components/Cards/Resena/Resena";
import "./Perfil.css";

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

  const imagen = `https://ui-avatars.com/api/?name=${colaborador.nombre}+${colaborador.apellidoPaterno}&background=random&color=fff`;

  return (
    <main className="perfil">
      <div className="perfil_header">
        <ResultadoCategoria professional={colaborador} />
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
    </main>
  );
}

export default Perfil;
