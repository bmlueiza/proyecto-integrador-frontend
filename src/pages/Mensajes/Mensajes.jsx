import React, { useState, useEffect } from "react";
import ChatList from "../../components/ChatList/ChatList";
import axios from "axios";
import "./Mensajes.css";

const Mensajes = () => {
  const [user, setUser] = useState(null);
  const [mensajes, setMensajes] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:8080/api/mensajes",
  });

  useEffect(() => {
    // Simulación de obtención de usuario desde localStorage
    const userFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
    setUser(userFromLocalStorage);
  }, []);

  useEffect(() => {
    if (user && user.id) {
      const userType = localStorage.getItem("userRole") || "usuario";

      client
        .get(`/${userType}/${user.id}`)
        .then((response) => {
          setMensajes(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los mensajes:", error);
        });
    }
  }, [user]);

  if (!user || !user.id) {
    return <></>;
  }

  return (
    <main className="justify_center">
      <div className="container_mensajes">
        <h1>Mis mensajes</h1>
        <div className="mensaje_mensajes">
          {mensajes.length === 0 ? (
            <p>No tienes mensajes.</p>
          ) : (
            mensajes.map((mensaje) => (
              <ChatList key={mensaje.id} mensaje={mensaje} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Mensajes;
