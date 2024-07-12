import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import "./EvaluacionModal.css";
import Button from "../../Button/Button";
import StarRating from "./StarRating/StarRating";

/* localhost:8080/api/resenas  RUTA*/
Modal.setAppElement("#root");

const EvaluacionModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  colaboradorId,
}) => {
  const [rating, setRating] = useState(0);
  const [contenido, setContenido] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
    setUser(userFromLocalStorage);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user.id) {
      console.error("No se ha encontrado información de usuario válida");
      return;
    }

    const nuevaResena = {
      contenido,
      valoracion: rating,
    };

    // Guardar en LocalStorage
    localStorage.setItem("nuevaResena", JSON.stringify(nuevaResena));

    // Construir la URL con los parámetros usuarioId y colaboradorId
    const url = `http://localhost:8080/api/resenas?usuarioId=${user.id}&colaboradorId=${colaboradorId}`;

    // Enviar datos a la base de datos
    try {
      console.log("Enviando datos:", nuevaResena); // Verificar el cuerpo de la solicitud
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaResena),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en la solicitud");
      }
      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      onSubmit(nuevaResena); // Llama al callback onSubmit con la nueva reseña
    } catch (error) {
      console.error("Error al enviar la reseña:", error.message || error);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Evaluacion Form"
      className="EvaluacionModal"
      overlayClassName="EvaluacionOverlay"
      shouldCloseOnOverlayClick={false}
    >
      <button className="close-button" onClick={onRequestClose}>
        <FaTimes />
      </button>
      <div className="container_evaluacion">
        <h2 className="title_evaluacion">Deja tu valoración</h2>
        <form className="evaluacion_form" onSubmit={handleSubmit}>
          <div className="evaluacion_label_input">
            <label className="evaluacion_label">Contenido</label>
            <textarea
              className="evaluacion_textarea"
              name="contenido"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              cols="32"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="evaluacion_label_input">
            <label className="evaluacion_label">Valoración</label>
            <StarRating onChange={handleRatingChange} />
          </div>
          {/* Aquí puedes agregar más campos según sea necesario */}
          <Button
            className="btn_big"
            type="submit"
            text="Enviar reseña"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </Modal>
  );
};

EvaluacionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  colaboradorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default EvaluacionModal;
