import axios from "axios";
import { useState, useEffect } from "react";

const client = axios.create({
  baseURL: "http://localhost:8080/api/colaborador",
});
function Perfil() {
  const [contador, setContador] = useState(1);
  const [colaborador, setColaborador] = useState(null);
  useEffect(() => {
    client.get(`/${contador}`).then((response) => {
      setColaborador(response.data);
    });
  }, [contador]);
  /* {
    "id": 1,
    "rut": "12345678-9",
    "nombre": "Pedro",
    "apellidoPaterno": "Gómez",
    "apellidoMaterno": "López",
    "fechaNacimiento": "1985-02-15T00:00:00.000+00:00",
    "email": "pedro.gomez@example.com",
    "celular": "+56912345678",
    "password": "password123",
    "disponibilidad": 1,
    "puntuacion": 85,
    "mensajes": [],
    "resenas": [],
    "categorias": [],
    "comunas": []
} */
  const formateDate = (date) => {
    const moonLanding = new Date(date);

    return (
      moonLanding.getDate() +
      "-" +
      moonLanding.getMonth() +
      "-" +
      moonLanding.getFullYear()
    );
  };
  return (
    <>
      <div className="container_datos">
        <div className="container">
          <div className="datos">
            <h1>{colaborador && colaborador.nombre}</h1>
            <h2>{colaborador && colaborador.apellidoPaterno}</h2>
            <h2>{colaborador && colaborador.email}</h2>
            <h2>
              {colaborador && colaborador.disponibilidad
                ? "Disponibilidad: ✓"
                : "Disponibilidad:✗"}
            </h2>
            <h2>{colaborador && formateDate(colaborador.fechaNacimiento)}</h2>
          </div>
          <div className="botones">
            <button
              className="btn btn_text"
              onClick={() => setContador(contador + 1)}
            >
              {contador}
            </button>
            <button className="btn btn_text">Editar</button>
            <button className="btn btn_text">Eliminar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
