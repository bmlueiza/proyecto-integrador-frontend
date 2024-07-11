// src/components/ChatList/ChatList.jsx
import React from 'react';
import './ChatList.css';

const ChatList = () => {
  const messages = [
    { id: 1, sender: 'Luis Paolo', time: '12:00 PM', subject: 'Asunto x' },
    { id: 2, sender: 'Angel Quera', time: '11:00 AM', subject: 'Asunto Y' },
    { id: 3, sender: 'Myriam Hernandez', time: '10:00 AM', subject: 'Asunto D' },
    { id: 4, sender: 'Lorenzo Soto', time: '3:00 AM', subject: 'Asunto Q' },
  ];

  return (
    <div className="chat-list">
 <h2>Tus mensajes</h2>
      <input type="text" placeholder="Buscar" className="search-input" />
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <div>
              <strong>{message.sender}</strong>
              <span>{message.time}</span>
            </div>
            <div>
              {message.subject}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
