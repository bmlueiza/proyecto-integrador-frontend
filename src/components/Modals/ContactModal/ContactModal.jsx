import Modal from "react-modal";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import "./ContactModal.css";
import Boton from "../../Button/Button";

Modal.setAppElement("#root");

const ContactModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes recoger los datos del formulario y pasarlos a onSubmit
    const formData = new FormData(e.target);
    onSubmit(formData);
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
              name="text"
              cols="32"
              rows="10"
              required
            ></textarea>
          </div>
          <Boton
            className="btn_big"
            type="submit"
            text="Enviar"
            onClick={handleSubmit}
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
};

export default ContactModal;
