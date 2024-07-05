import "./ResultadoCategoria.css";
import { FaStar, FaRegStar } from "react-icons/fa";

function ResultadoCategoria({ professional }) {
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    puntuacion,
    categorias = [],
    disponibilidad,
    comunas = [],
  } = professional;
  const imagen = `https://ui-avatars.com/api/?name=${nombre}+${apellido_paterno}&background=random&color=fff`;
  return (
    <div className="rccard">
      <div className="rccard_header">
        <img className="foto_perfil" src={imagen} alt="imagen_perfil" />
        <div className="rccard_header_content">
          <h2 className="no_margin">
            {nombre} {apellido_paterno} {apellido_materno}
          </h2>
        </div>
      </div>
      <div className="rccard_content">
        <div className="puntuacion">
          {[...Array(puntuacion)].map((_, index) => (
            <FaStar key={index} className="star_icon" />
          ))}
          {[...Array(5 - puntuacion)].map((_, index) => (
            <FaRegStar key={index} className="star_icon" />
          ))}
        </div>
        <p>{categorias.join(", ")}</p>
        <p>Trabaja en: {comunas.join(", ")}</p>
      </div>
    </div>
  );
}

export default ResultadoCategoria;
