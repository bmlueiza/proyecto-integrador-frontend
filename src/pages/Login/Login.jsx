import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

function Login() {
  return (
    <>
      <Navbar />
      <h1 className="title_home">Minga</h1>
      <hr className="divider" />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
