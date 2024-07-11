import "./Button.css";
import PropTypes from "prop-types";

function Button({ text = null, icon = null, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {icon && <span className="button-icon">{icon}</span>}
      {text && <span className="button-text">{text}</span>}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
