import axios from "axios";
import React, { useState } from "react";
import "./LoginForm.css";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [route, setRoute] = useState("/usuarios/usuarioLogin");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/api${route}`, {
        params: {
          email: email,
          password: password,
        },
      });

      {
        onLogin;
      }
      if (response.data) {
        response.data;
        setMessage("¡Inicio de sesión exitoso!");
        setEmail("");
        setPassword("");

        navigate("/");
      } else {
        setMessage("Login fallido. Verfique su correo y contraseña");
      }
    } catch (error) {
      setMessage("Ocurrió un error durante el inicio de sesión");
      console.log(error);
    }
  };

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <h1 className="login__header">Ingrese sus datos de inicio de sesión</h1>
      <div className="login__div">
        <label className="login__label" htmlFor="useremail">
          <p>Correo electrónico:</p>
          <input
            className="login__input"
            id="useremail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@minga.cl"
            //pattern="[A-Za-z]+@[A-Za-z]+.[A-Za-z]+"
            title="Ingrese su correo electrónico"
            required
          />
        </label>
        <label className="login__label" htmlFor="userpassword">
          <p>Password:</p>
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
        <label className="login__label login__label__checkbox" htmlFor="rol">
          <p>¿Es colaborador?</p>
          <input
            className="login__input login__input__checkbox"
            id="rol"
            type="checkbox"
            onClick={() => setRoute("/colaborador/colaboradorLogin")}
          />
        </label>
      </div>
      <div className="login__div">
        <Button
          type="submit"
          text="¡A mingear!"
          className="button__text"
          onClick={navigate("/login")}
        />
        <Button
          type="submit"
          text="Crear cuenta usuario"
          className="button__text"
          onClick={navigate("/registro-usuario")}
        />
        <Button
          type="submit"
          text="Crear cuenta colaborador"
          className="button__text"
          onClick={navigate("/registro-colaborador")}
        />
        {message && <h2 className="login__header">{message}</h2>}
      </div>
    </form>
  );
};
export default LoginForm;
