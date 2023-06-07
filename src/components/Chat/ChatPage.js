import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UseContext/UserContext';
import api from '../../Services/Api';
import io from 'socket.io-client';

import '../Chat/Chat.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userData] = useContext(UserContext);

  useEffect(() => {
    getAllChats();

    const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT);

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('receive_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const getAllChats = async () => {
    try {
      const response = await api.get('/chats');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const handleSendMessage = async () => {
    if (messageInput.trim() !== '') {
      try {
        const newMessage = {
          user: userData._id,
          message: messageInput,
        };

        await api.post('/chats', newMessage);

        setMessageInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">Chat</h1>
      <div className="message-container">
        {messages.map((message) => (
          <div className="message" key={message._id}>
            <strong className="message-author">{message.user.name}: </strong>
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
