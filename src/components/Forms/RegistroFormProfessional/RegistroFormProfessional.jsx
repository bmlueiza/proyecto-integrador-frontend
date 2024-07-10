import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
//Generar salida onRegister

//Se definen arrays para opciones de seleccion multiple por lista
const comunas = [
  { value: "alhue", label: "Alhué" },
  { value: "buin", label: "Buin" },
  { value: "calera_de_tango", label: "Calera de Tango" },
  { value: "cerrillos", label: "Cerrillos" },
  { value: "cerro_navia", label: "Cerro Navia" },
  { value: "colina", label: "Colina" },
  { value: "conchali", label: "Conchalí" },
  { value: "curacavi", label: "Curacaví" },
  { value: "el_bosque", label: "El Bosque" },
  { value: "el_monte", label: "El Monte" },
  { value: "estacion_central", label: "Estación Central" },
  { value: "huechuraba", label: "Huechuraba" },
  { value: "independencia", label: "Independencia" },
  { value: "isla_de_maipo", label: "Isla de Maipo" },
  { value: "la_cisterna", label: "La Cisterna" },
  { value: "la_florida", label: "La Florida" },
  { value: "la_granja", label: "La Granja" },
  { value: "la_pintana", label: "La Pintana" },
  { value: "la_reina", label: "La Reina" },
  { value: "lampa", label: "Lampa" },
  { value: "las_condes", label: "Las Condes" },
  { value: "lo_barnechea", label: "Lo Barnechea" },
  { value: "lo_espejo", label: "Lo Espejo" },
  { value: "lo_prado", label: "Lo Prado" },
  { value: "macul", label: "Macul" },
  { value: "maipu", label: "Maipú" },
  { value: "maria_pinto", label: "María Pinto" },
  { value: "melipilla", label: "Melipilla" },
  { value: "nunoa", label: "Ñuñoa" },
  { value: "padre_hurtado", label: "Padre Hurtado" },
  { value: "paine", label: "Paine" },
  { value: "pedro_aguirre_cerda", label: "Pedro Aguirre Cerda" },
  { value: "penalolen", label: "Peñalolén" },
  { value: "pirque", label: "Pirque" },
  { value: "providencia", label: "Providencia" },
  { value: "pudahuel", label: "Pudahuel" },
  { value: "puente_alto", label: "Puente Alto" },
  { value: "quilicura", label: "Quilicura" },
  { value: "quinta_normal", label: "Quinta Normal" },
  { value: "recoleta", label: "Recoleta" },
  { value: "renca", label: "Renca" },
  { value: "san_bernardo", label: "San Bernardo" },
  { value: "san_jose_de_maipo", label: "San José de Maipo" },
  { value: "san_joaquin", label: "San Joaquín" },
  { value: "san_miguel", label: "San Miguel" },
  { value: "san_pedro", label: "San Pedro" },
  { value: "sanfelipe", label: "San Felipe" },
  { value: "santiago", label: "Santiago" },
  { value: "tiltil", label: "Tiltil" },
  { value: "vitacura", label: "Vitacura" },
];
const categorias = [
  { value: "albanileria", label: "Albañileria" },
  { value: "carpinteria", label: "Carpinteria" },
  { value: "electricidad", label: "Electricidad" },
  { value: "gasfiteria", label: "Gasfiteria" },
  { value: "pintura", label: "Pintura" },
  { value: "jardineria", label: "Jardinaria" },
];

//Funcion de registro del profesional
const RegisterProfessional = ({ onRegister }) => {
  //Declaracion de constantes donde se almacenan respuestas del formulario
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
  const [selectedCategorias, setCategorias] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llama a la función onRegister con los datos del formulario
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
      categorias: selectedCategorias.map((categoria) => categoria.value),
    };

    console.log("Enviando datos:", data);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/colaborador",
        data
      );
      setMessage("Registro exitoso");
      onRegister(response.data);
    } catch (error) {
      setMessage("Error en el registro");
    }
  };

  return (
    <form className="professional-register" onSubmit={handleSubmit}>
      <div className="professional-div">
        <h1>Bienvenido Minguero</h1>
        <h2>Ingrese sus datos para crear su usuario</h2>
        <label className="professional-label" htmlFor="rut">
          <p>Rut</p>
          <input
            className="professional-input"
            id="rut"
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="11111111-1"
            pattern="\d{7,8}-\d"
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="nombre">
          <p>Nombre</p>
          <input
            className="professional-input"
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            pattern="[A-Za-z\s]+"
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="apellido-paterno">
          <p>Apellido Paterno</p>
          <input
            className="professional-input"
            id="apellido-paterno"
            type="text"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
            placeholder="Apellido paterno"
            pattern="[A-Za-z\s]+"
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="apellido-materno">
          <p>Apellido materno</p>
          <input
            className="professional-input"
            id="apellido-materno"
            type="text"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            placeholder="Apellido materno"
            pattern="[A-Za-z\s]+"
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="fecha-nacimiento">
          <p>Fecha de nacimiento</p>
          <input
            className="professional-input"
            id="fecha-nacimiento"
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="email">
          <p>Email</p>
          <input
            className="professional-input"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@minga.cl"
            //pattern="[A-Za-z]+@[A-Za-z]+.[A-Za-z]+"
            required
          />
        </label>
        <label className="professional-label" htmlFor="celular">
          <p>Celular</p>
          <input
            className="professional-input"
            id="celular"
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            placeholder="+56912345678"
            pattern="\+569\d{8}"
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="password">
          <p>Contraseña</p>
          <input
            className="professional-input"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])[A-Za-z\d@$!%*?&]+$"
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="confirm-password">
          <p>Confirmar contraseña</p>
          <input
            className="professional-input"
            id="confirm-password"
            type="password"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
            placeholder="********"
            //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])[A-Za-z\d@$!%*?&]+$"
            required
          ></input>
        </label>
        <label className="professional-label" htmlFor="comunas-select">
          <p>Seleccione las comunas donde trabajará</p>
          <Select
            id="comunas-select"
            className="professional-select"
            isMulti
            options={comunas}
            value={selectedComunas}
            onChange={(selectedOptions) => setComunas(selectedOptions)}
            required
          />
        </label>
        <label className="professional-label" htmlFor="categorias-select">
          <p>Seleccione las categorías de sus servicios</p>
          <Select
            id="categorias-select"
            className="professional-select"
            isMulti
            options={categorias}
            value={selectedCategorias}
            onChange={(selectedOptions) => setCategorias(selectedOptions)}
            required
          />
        </label>
      </div>
      <button type="submit">¡A minguear!</button>
      {message && <h3>{message}</h3>}
    </form>
  );
};
export default RegisterProfessional;
