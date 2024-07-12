import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Perfil.css";
import PerfilCard from "../../components/Cards/PerfilCard/PerfilCard";
import Button from "../../components/Button/Button";
import ContactModal from "../../components/Modals/ContactModal/ContactModal";
import EvaluacionModal from "../../components/Modals/EvaluacionModal/EvaluacionModal";
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEvaluacionModalOpen, setIsEvaluacionModalOpen] = useState(false);

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
    setIsContactModalOpen(true);
    console.log("Contactar a", colaborador.nombre);
  };

  const handleEvaluacionClick = () => {
    setIsEvaluacionModalOpen(true);
    console.log("Dejar evaluación para", colaborador.nombre);
  };

  const handleModalClose = () => {
    setIsContactModalOpen(false);
    setIsEvaluacionModalOpen(false);
    console.log("Cerrar modal");
  };

  const handleContactFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Aquí puedes manejar el envío del formulario
    setIsModalOpen(false);
  };

  const handleEvaluacionFormSubmit = (nuevaResena) => {
    // Aquí puedes enviar la reseña al backend
    console.log("Enviando reseña:", nuevaResena);
    // Aquí deberías implementar la lógica para enviar la reseña al backend usando axios
    clientResena
      .post(`/${id}`, nuevaResena)
      .then((response) => {
        console.log("Reseña creada:", response.data);
        // Actualizar las reseñas mostradas después de enviar la nueva reseña
        setResenas([...resenas, response.data]);
      })
      .catch((error) => {
        console.error("Error al crear la reseña:", error);
      });
    setIsEvaluacionModalOpen(false);
  };

  return (
    <main className="perfil">
      <div className="perfil_header">
        <PerfilCard professional={colaborador} />
        <div className="perfil_botones">
          <Button
            text="Contactar"
            onClick={handleContactClick}
            className="btn_big"
          />
          <Button
            text="Dejar valoración"
            onClick={handleEvaluacionClick}
            className="btn_big"
          />
        </div>
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
        isOpen={isContactModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleContactFormSubmit}
      />
      <EvaluacionModal
        isOpen={isEvaluacionModalOpen}
        onRequestClose={handleModalClose}
        onSubmit={handleEvaluacionFormSubmit}
        colaboradorId={id}
      />
    </main>
  );
}

export default Perfil;
