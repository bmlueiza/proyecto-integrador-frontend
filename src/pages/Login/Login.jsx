import React from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

function Login({ onLogin }) {
  return (
    <>
      <h1 className="title_home">Minga</h1>
      <hr className="divider" />
      <LoginForm onLogin={onLogin} />
    </>
  );
}

export default Login;
