import axios from "axios";
import React, { useState } from "react";
import "./LoginForm.css";
function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [route, setRoute] = useState("/usuarios/usuarioLogin");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/api${route}`, {
        email,
        password,
      });

      if (response.status === 200) {
        onLogin(response.data);
        setMessage("Exito de sesión exitoso!");
      } else {
        setMessage("Login fallido.");
      }
    } catch (error) {
      setMessage("Ocurrió un error durante el inicio de sesión", error);
    }
  };

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <h1 className="title__header">Ingrese sus datos de inicio de sesión</h1>
      <div className="login__div">
        <label className="form__label" htmlFor="useremail">
          Correo electrónico:
          <input
            className="login__input"
            id="useremail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@minga.cl"
            pattern="[A-Za-z]+@[A-Za-z]+.[A-Za-z]+"
            title="Ingrese su correo electrónico"
            required
          />
        </label>
        <label className="form__label" htmlFor="userpassword">
          Password:
          <input
            className="login__input"
            id="userpassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            title="Ingrese su constraseña"
            required
          />
        </label>
        <label className="form__label" htmlFor="rol">
          ¿Es colaborador?
          <input
            className="login__input"
            id="rol"
            type="checkbox"
            onClick={() => setRoute("/colaborador/colaboradorLogin")}
          />
        </label>
      </div>
      <div className="login__div login__div__no__background">
        <button type="submit">¡A minguear!</button>
        {message && <h2>{message}</h2>}
      </div>
    </form>
  );
}
export default LoginForm;
