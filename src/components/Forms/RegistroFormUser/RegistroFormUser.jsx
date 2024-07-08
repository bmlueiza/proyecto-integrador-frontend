import React, { useState } from "react";
import Select from "react-select";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    onRegister({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenido Minguero</h1>
        <h2>Ingrese sus datos para crear su usuario</h2>
        <label>
          <p>Rut</p>
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="11111111-1"
            pattern="\d{7,8}-\d"
            required
          ></input>
        </label>
        <label>
          <p>Nombre</p>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            pattern="[A-Za-z\s]"
            required
          ></input>
        </label>
        <label>
          <p>Apellido Paterno</p>
          <input
            type="text"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
            placeholder="Apellido paterno"
            pattern="[A-Za-z\s]"
            required
          ></input>
        </label>
        <label>
          <p>Apellido materno</p>
          <input
            type="text"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            placeholder="Apellido materno"
            pattern="[A-Za-z\s]"
            required
          ></input>
        </label>
        <label>
          <p>Fecha de nacimiento</p>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          ></input>
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@minga.cl"
            pattern="[A-Za-z]+@[A-Za-z]+.[A-Za-z]+"
            required
          />{" "}
        </label>
        <label>
          <p>Celular</p>
          <input
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            placeholder="+56912345678"
            pattern="\+569\d{8}"
            required
          ></input>
        </label>
        <label>
          <p>Contraseña</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])[A-Za-z\d@$!%*?&]+$"
            required
          ></input>
        </label>
        <label>
          <p>Confirmar contraseña</p>
          <input
            type="password"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
            placeholder="********"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])[A-Za-z\d@$!%*?&]+$"
            required
          ></input>
        </label>
        <label>
          <p>Seleccione las comunas donde trabajara</p>
          <Select
            isMulti
            options={comunas}
            value={selectedComunas}
            onChange={setComunas}
            required
          />
        </label>
      </div>
    </form>
  );
};
export default RegisterUser;
