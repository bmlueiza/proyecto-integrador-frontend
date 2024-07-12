import { Link } from "react-router-dom";
import "./ChatList.css";

function ChatList({ mensaje }) {
  const { asunto, contenido, fechaEnvio, usuario, colaborador } = mensaje;

  const imagen = `https://ui-avatars.com/api/?name=${colaborador.nombre}+${colaborador.apellidoPaterno}&background=random&color=fff`;

  // Opciones para formatear la fecha y hora
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Formato de 24 horas
  };

  // Formatea la fecha y hora usando las opciones definidas
  const formattedFecha = new Date(fechaEnvio).toLocaleString("es-CL", options);

  return (
    <>
      <div className="container_mensaje">
        <img className="foto_mensaje" src={imagen} alt="imagen_perfil" />
        <div className="mensaje_data">
          <div className="mensaje_nombre_date">
            <Link to={`/perfil/${colaborador.id}`} className="perfil_link">
              <span className="mensaje_nombre">
                {colaborador.nombre} {colaborador.apellidoPaterno}{" "}
                {colaborador.apellidoMaterno}
              </span>
            </Link>
            <span className="mensaje_fecha">{formattedFecha}</span>
          </div>
          <div className="mensaje_asunto_content">
            <span className="mensaje_asunto">{asunto}</span>
            <span className="mensaje_contenido">{contenido}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatList;
