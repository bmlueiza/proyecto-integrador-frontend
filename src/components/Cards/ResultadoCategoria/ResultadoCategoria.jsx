import "./ResultadoCategoria.css";
import { FaStar, FaRegStar } from "react-icons/fa";

function ResultadoCategoria({ professional, onClick }) {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    puntuacion,
    categorias = [],
    comunas = [],
  } = professional;

  const comunasText = comunas.map((comuna) => comuna.nombre).join(" - ");

  const imagen = `https://ui-avatars.com/api/?name=${nombre}+${apellidoPaterno}&background=random&color=fff`;

  return (
    <div className="rccard" onClick={onClick}>
      <div className="rccard_header">
        <img className="foto_card" src={imagen} alt="imagen_perfil" />
        <div className="rccard_header_content">
          <h2 className="no_margin">
            {nombre} {apellidoPaterno} {apellidoMaterno}
          </h2>
          <div className="puntuacion">
            {[...Array(puntuacion)].map((_, index) => (
              <FaStar key={index} className="star_icon" />
            ))}
            {[...Array(5 - puntuacion)].map((_, index) => (
              <FaRegStar key={index} className="star_icon" />
            ))}
          </div>
        </div>
      </div>
      <div className="rccard_content">
        <div className="chip chip_comuna">{comunasText}</div>
        <div className="container_chips">
          {categorias.map((categoria, index) => (
            <div
              key={`categoria-${categoria.id}-${index}`}
              className="chip chip_categoria"
            >
              {categoria.nombre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultadoCategoria;
