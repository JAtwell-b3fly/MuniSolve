import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Set initial messages
    setMessages([
      {
        _id: 2,
        text: 'Hi Ayanda, how can we assist you?',
        createdAt: new Date(),
        user: {
          _id: 2, // Chatbot's id
          name: 'Chatbot',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
    // Add your logic for sending messages or saving them to your backend here
  }, []);

  // This function can be used to send messages to your backend or perform any other necessary actions
  const sendMessagesToBackend = async (newMessages) => {
    // Add your logic here to send messages to your backend
    console.log('Messages to be sent to the backend:', newMessages);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => {
        onSend(newMessages);
        sendMessagesToBackend(newMessages);
      }}
      user={{
        _id: 1, // User's id
        name: 'User',
      }}
    />
  );
};

export default Chat;
