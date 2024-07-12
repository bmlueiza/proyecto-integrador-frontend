import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatList.css";

const ChatList = ({ user, userType }) => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (!user || !user.id) {
          console.error("User or user.id is not defined.");
          return;
        }

        const response = await axios.get(
          `http://localhost:8080/api/mensajes/${userType}/${user.id}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [userType, user]);

  const filteredMessages = messages.filter((message) => {
    const sender = message.sender ? message.sender.toLowerCase() : "";
    const subject = message.subject ? message.subject.toLowerCase() : "";

    return (
      sender.includes(searchTerm.toLowerCase()) ||
      subject.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="chat-list">
      <h2>Tus mensajes</h2>
      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredMessages.map((message) => (
          <li key={message.id}>
            <div>
              <strong>{message.sender}</strong>
              <span>{message.time}</span>
            </div>
            <div>{message.subject}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
