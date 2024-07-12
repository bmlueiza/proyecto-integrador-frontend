import Modal from "react-modal";
import PropTypes from "prop-types";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import "./ContactModal.css";
import Boton from "../../Button/Button";

Modal.setAppElement("#root");

const ContactModal = ({ isOpen, onRequestClose, onSubmit, colaboradorId }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes recoger los datos del formulario y pasarlos a onSubmit
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const userData = JSON.parse(localStorage.getItem("userData"));
    const usuarioId = userData.id;

    console.log("Datos enviados:", data);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/mensajes?usuarioId=${usuarioId}&colaboradorId=${colaboradorId}`,
        JSON.stringify(data), // Transforma los datos a JSON
        {
          headers: {
            "Content-Type": "application/json", // Configura la cabecera Content-Type
          },
        }
      );
      if (response.status === 200) {
        onSubmit(data);
        onRequestClose(); // Cierra el modal al enviar correctamente
      } else {
        console.log("Error en el envío del mensaje");
      }
    } catch (error) {
      console.log("Error durante el envío", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Form"
      className="Modal"
      overlayClassName="Overlay"
      shouldCloseOnOverlayClick={false}
    >
      <button className="close-button" onClick={onRequestClose}>
        <FaTimes />
      </button>
      <div className="container_contact">
        <h2 className="title_contact">Formulario de contacto</h2>
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_label_input">
            <label className="contact_label">Asunto</label>
            <input
              className="contact_input"
              type="text"
              name="asunto"
              required
            />
          </div>
          <div className="contact_label_input">
            <label className="contact_label">Mensaje</label>
            <textarea
              className="contact_textarea"
              name="contenido" // Asegúrate de que el nombre del campo coincida con lo que espera el backend
              cols="32"
              rows="10"
              required
            ></textarea>
          </div>
          <Boton
            className="btn_big"
            type="submit"
            text="Enviar"
            onClick={() => {}} // Proporciona una función onClick vacía si no se necesita ninguna acción
          />
        </form>
      </div>
    </Modal>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  colaboradorId: PropTypes.string.isRequired,
};

export default ContactModal;
