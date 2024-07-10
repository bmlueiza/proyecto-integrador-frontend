import PropTypes from "prop-types";

const Button = ({ text = null, icon = null, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {icon && <span className="button-icon">{icon}</span>}
      {text && <span className="button-text">{text}</span>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};

export default Button;
