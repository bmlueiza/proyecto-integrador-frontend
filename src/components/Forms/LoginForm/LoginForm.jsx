import axios from "axios";
import React, { useState } from "react";
import "./LoginForm.css";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [route, setRoute] = useState("/usuarios/usuarioLogin");
  const [userType, setUserType] = useState("usuario"); // Usuario seleccionado por defecto

  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setRoute(
      type === "colaborador"
        ? "/colaborador/colaboradorLogin"
        : "/usuarios/usuarioLogin"
    );

    // Update localStorage
    localStorage.setItem("userRole", type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/api${route}`, {
        params: {
          email: email,
          password: password,
        },
      });

      if (response.data) {
        // Save login data to localStorage
        localStorage.setItem("userData", JSON.stringify(response.data));

        setMessage("¡Inicio de sesión exitoso!");
        setEmail("");
        setPassword("");

        // Call the onLogin callback

        // Navigate to home page
        navigate("/");
      } else {
        setMessage("Login fallido. Verifique su correo y contraseña.");
      }
    } catch (error) {
      setMessage("Ocurrió un error durante el inicio de sesión.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="container_loginform">
        <h1 className="title_loginform">Inicio de sesión</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__div">
            <label className="login_label" htmlFor="useremail">
              <p>Correo electrónico:</p>
              <input
                className="login__input"
                id="useremail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@minga.cl"
                title="Ingrese su correo electrónico"
                required
              />
            </label>
            <label className="login_label" htmlFor="userpassword">
              <p>Password:</p>
              <input
                className="login__input"
                id="userpassword"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                title="Ingrese su contraseña"
                required
              />
            </label>
            <div className="login__radio__group">
              <label className="login__radio__label">
                <input
                  type="radio"
                  name="userType"
                  value="usuario"
                  checked={userType === "usuario"}
                  onChange={() => handleUserTypeChange("usuario")}
                />
                Usuario
              </label>
              <label className="login__radio__label">
                <input
                  type="radio"
                  name="userType"
                  value="colaborador"
                  checked={userType === "colaborador"}
                  onChange={() => handleUserTypeChange("colaborador")}
                />
                Colaborador
              </label>
            </div>
          </div>
          <Button
            type="submit"
            text="Iniciar sesión"
            className="boton_login weight_bold"
            onClick={handleSubmit}
          />
        </form>
      </div>
      {message && <h2 className="login__header">{message}</h2>}
      <div className="botones_crear_cuentas">
        <Button
          type="button"
          text="Crear cuenta usuario"
          className="button__text weight_bold"
          onClick={() => navigate("/registro-usuario")}
        />
        <Button
          type="button"
          text="Crear cuenta colaborador"
          className="button__text weight_bold"
          onClick={() => navigate("/registro-colaborador")}
        />
      </div>
    </>
  );
};

export default LoginForm;
