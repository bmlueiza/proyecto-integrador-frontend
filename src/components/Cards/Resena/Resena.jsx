import "./Resena.css";
import { FaStar, FaRegStar } from "react-icons/fa";

function Resena({ resena }) {
  const { valoracion, contenido, fecha, usuario } = resena;
  const nombre = usuario?.nombre || "Desconocido";
  const apellidoPaterno = usuario?.apellidoPaterno || "";
  const comunaNombre = usuario?.comuna?.nombre || "Desconocida";

  const imagen = `https://ui-avatars.com/api/?name=${nombre}+${apellidoPaterno}&background=random&color=fff`;
  const formattedFecha = new Date(fecha).toLocaleDateString();
  const starsFilled = Array.from({ length: valoracion }, (_, index) => (
    <FaStar key={index} className="star_icon" />
  ));
  const starsEmpty = Array.from({ length: 5 - valoracion }, (_, index) => (
    <FaRegStar key={index} className="star_icon" />
  ));

  return (
    <div className="resena">
      <img className="foto_card" src={imagen} alt="imagen_perfil" />
      <div className="resena_data">
        <div className="resena_valoracion_date">
          <div className="resena_valoracion">
            {starsFilled}
            {starsEmpty}
          </div>
          <span className="resena_fecha">{formattedFecha}</span>
        </div>
        <span className="resena_comuna">
          Comuna: <span className="weight_bold">{comunaNombre}</span>
        </span>
        <div className="resena_content">
          <p>{contenido}</p>
        </div>
      </div>
    </div>
  );
}

export default Resena;
