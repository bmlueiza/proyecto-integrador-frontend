import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import "./EvaluacionModal.css";
import Button from "../../Button/Button";
import StarRating from "./StarRating/StarRating";

Modal.setAppElement("#root");

const EvaluacionModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaResena = {
      contenido,
      valoracion: rating,
      usuarioId: 1, // Ajusta según tu lógica
      colaboradorId: 1, // Ajusta según tu lógica
    };
    onSubmit(nuevaResena);
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
};

export default EvaluacionModal;
