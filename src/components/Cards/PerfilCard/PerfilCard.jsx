import "./PerfilCard.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function PerfilCard({ professional }) {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    puntuacion,
    categorias = [],
    comunas = [],
    disponibilidad,
  } = professional;

  const comunasText = comunas.map((comuna) => comuna.nombre).join(" - ");

  const imagen = `https://ui-avatars.com/api/?name=${nombre}+${apellidoPaterno}&background=random&color=fff`;

  return (
    <div className="perfil_card">
      <img className="perfil_card_foto" src={imagen} alt="imagen_perfil" />
      <div className="perfil_card_content">
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
        <div className="chip chip_comuna">{comunasText}</div>
        <div className="container_chips">
          {categorias.map((categoria, index) => (
            <Link
              key={`categoria-${categoria.id}-${index}`}
              to={`/categoria/${categoria.nombre}`}
              className="chip chip_categoria"
            >
              {categoria.nombre}
            </Link>
          ))}
        </div>
      </div>
      <div className="perfil_disponibilidad">
        {/* que muestre si está disponible o no */}
        {disponibilidad ? (
          <div className="disponible">Disponible</div>
        ) : (
          <div className="no_disponible">No Disponible</div>
        )}
      </div>
    </div>
  );
}

export default PerfilCard;
