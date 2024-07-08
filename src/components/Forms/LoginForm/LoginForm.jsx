//Dar id o nombre(clase?) a los inputs y form
import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@minga.cl"
            pattern="[A-Za-z]+@[A-Za-z]+.[A-Za-z]+"
            title="Ingrese su correo electrónico"
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
            title="Ingrese su constraseña"
            required
          />
        </label>
      </div>
      <button type="submit">¡A minguear!</button>
      {message && <p>{message}</p>}
    </form>
  );
};
export default LoginForm;
