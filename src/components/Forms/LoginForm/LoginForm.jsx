//Dar id o nombre(clase?) a los inputs y form
import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenido a Minga App</h1>
        <h2>Ingrese sus datos de inicio de sesión</h2>
        <label>
          Rut:
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            pattern="\d{7,8}-\d"
            placeholder="11111111-1"
            title="Ingrese su rut sin puntos y con digito verificador"
            required
          />{" "}
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            title="Ingrese su constraseña aquí"
            required
          />
        </label>
      </div>
      <button type="submit">A minguear!</button>
      {message && <p>{message}</p>}
    </form>
  );
};
export default LoginForm;
