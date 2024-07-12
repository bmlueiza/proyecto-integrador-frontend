import React from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import "./Login.css";

function Login() {
  return (
    <>
      <main className="login_container">
        <h1 className="title_login">Minga</h1>
        <hr className="divider" />
        <div className="align_items_center">
          <LoginForm />
        </div>
      </main>
    </>
  );
}

export default Login;
