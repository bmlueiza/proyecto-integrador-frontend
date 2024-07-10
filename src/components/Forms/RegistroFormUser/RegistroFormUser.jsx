import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import "./RegistroFormUser.css";

const comunas = [
  { value: "alhue", label: "Alhué" },
  { value: "buin", label: "Buin" },
  { value: "calera+de+tango", label: "Calera de Tango" },
  { value: "cerrillos", label: "Cerrillos" },
  { value: "cerro+navia", label: "Cerro Navia" },
  { value: "colina", label: "Colina" },
  { value: "conchali", label: "Conchalí" },
  { value: "curacavi", label: "Curacaví" },
  { value: "el+bosque", label: "El Bosque" },
  { value: "el+monte", label: "El Monte" },
  { value: "estacion_central", label: "Estación Central" },
  { value: "huechuraba", label: "Huechuraba" },
  { value: "independencia", label: "Independencia" },
  { value: "isla+de+maipo", label: "Isla de Maipo" },
  { value: "la+cisterna", label: "La Cisterna" },
  { value: "la+florida", label: "La Florida" },
  { value: "la+granja", label: "La Granja" },
  { value: "la+pintana", label: "La Pintana" },
  { value: "la+reina", label: "La Reina" },
  { value: "lampa", label: "Lampa" },
  { value: "las+condes", label: "Las Condes" },
  { value: "lo+barnechea", label: "Lo Barnechea" },
  { value: "lo+espejo", label: "Lo Espejo" },
  { value: "lo+prado", label: "Lo Prado" },
  { value: "macul", label: "Macul" },
  { value: "maipu", label: "Maipú" },
  { value: "maria+pinto", label: "María Pinto" },
  { value: "melipilla", label: "Melipilla" },
  { value: "nunoa", label: "Ñuñoa" },
  { value: "padre+hurtado", label: "Padre Hurtado" },
  { value: "paine", label: "Paine" },
  { value: "pedro+aguirre+cerda", label: "Pedro Aguirre Cerda" },
  { value: "penalolen", label: "Peñalolén" },
  { value: "pirque", label: "Pirque" },
  { value: "providencia", label: "Providencia" },
  { value: "pudahuel", label: "Pudahuel" },
  { value: "puente+alto", label: "Puente Alto" },
  { value: "quilicura", label: "Quilicura" },
  { value: "quinta+normal", label: "Quinta Normal" },
  { value: "recoleta", label: "Recoleta" },
  { value: "renca", label: "Renca" },
  { value: "san+bernardo", label: "San Bernardo" },
  { value: "san+jose+de+maipo", label: "San José de Maipo" },
  { value: "san+joaquin", label: "San Joaquín" },
  { value: "san+miguel", label: "San Miguel" },
  { value: "san+pedro", label: "San Pedro" },
  { value: "sanfelipe", label: "San Felipe" },
  { value: "santiago", label: "Santiago" },
  { value: "tiltil", label: "Tiltil" },
  { value: "vitacura", label: "Vitacura" },
];

const RegisterUser = ({ onRegister }) => {
  const [rut, setRut] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [selectedComunas, setComunas] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      rut,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaNacimiento,
      email,
      celular,
      password,
      comunas: selectedComunas.map((comuna) => comuna.value),
    };

    console.log("Enviando datos:", data);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/usuarios",
        data
      );
      setMessage("Registro exitoso");
      onRegister(response.data);
    } catch (error) {
      setMessage("Error en el registro");
    }
  };

  return (
    <form className="user__register" onSubmit={handleSubmit}>
      <h1 className="hedding__register__user">
        Ingrese sus datos para crear su usuario
      </h1>
      <div className="user__div">
        <label className="user__label" htmlFor="rut">
          <p>Rut</p>
          <input
            id="rut"
            className="user__input"
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="11111111-1"
            pattern="\d{7,8}-\d"
            required
          ></input>
        </label>
        <label htmlFor="nombre" className="user__label">
          <p>Nombre</p>
          <input
            id="nombre"
            className="user__input"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            pattern="[A-Za-z\s]+"
            required
          ></input>
        </label>
        <label className="user__label" htmlFor="apellido-paterno">
          <p>Apellido Paterno</p>
          <input
            id="apellido-paterno"
            className="user__input"
            type="text"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
            placeholder="Apellido paterno"
            pattern="[A-Za-z\s]+"
            required
          ></input>
        </label>
        <label className="user__label" Htmlfor="apellido-materno">
          <p>Apellido materno</p>
          <input
            id="apellido-materno"
            className="user__input"
            type="text"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            placeholder="Apellido materno"
            pattern="[A-Za-z\s]+"
            required
          ></input>
        </label>
        <label className="user__label" htmlFor="fecha-nacimiento">
          <p>Fecha de nacimiento</p>
          <input
            id="fecha-nacimiento"
            className="user__input"
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          ></input>
        </label>
        <label className="user__label" htmlFor="email">
          <p>Email</p>
          <input
            id="email"
            className="user__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@minga.cl"
            // pattern="[A-Za-z]+@[A-Za-z]+.[A-Za-z]+"
            required
          />{" "}
        </label>
        <label className="user__label" htmlFor="celular">
          <p>Celular</p>
          <input
            id="celular"
            className="user__input"
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            placeholder="+56912345678"
            pattern="\+569\d{8}"
            required
          ></input>
        </label>
        <label className="user__label" htmlFor="password">
          <p>Contraseña</p>
          <input
            id="password"
            className="user__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])[A-Za-z\d@$!%*?&]+$"
            required
          ></input>
        </label>
        <label className="user__label" id="confirm-password">
          <p>Confirmar contraseña</p>
          <input
            id="confirm-password"
            className="user__input"
            type="password"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
            placeholder="********"
            //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])[A-Za-z\d@$!%*?&]+$"
            required
          ></input>
        </label>
      </div>
      <hr className="divider" />
      <div className="user__div__select">
        <label
          className="user__label user__select__label"
          htmlFor="comunas-select"
        >
          <p>Seleccione la comuna de su domicilio</p>
          <Select
            className="user__select_input"
            id="comunas__select"
            options={comunas}
            value={selectedComunas}
            onChange={(selectedOptions) => setComunas(selectedOptions)}
            required
          />
        </label>
      </div>
      <button type="submit">¡A minguear!</button>
      {message && <h2 className="hedding__register__user">{message}</h2>}
    </form>
  );
};
export default RegisterUser;
