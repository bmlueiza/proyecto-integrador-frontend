import React, { useEffect, useState } from "react";
import ChatList from "../../components/ChatList/ChatList";

const Mensajes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulación de obtención de usuario desde localStorage
    const userFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
    setUser(userFromLocalStorage);
  }, []);

  if (!user || !user.id) {
    return <div>No se ha encontrado información de usuario válida.</div>;
  }

  const userType = localStorage.getItem("userRole") || "usuario";

  return (
    <div>
      <h1>Mensajes</h1>
      <ChatList user={user} userType={userType} />
    </div>
  );
};

export default Mensajes;
