import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import {addHistory} from './ChatHistroyFirebase'
const Chat = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    addHistory()
  }, [])

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

  // Custom component for styling the message bubble
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5', // Change the background color for user's messages
          },
          left: {
            backgroundColor: '#ffff', // Change the background color for Chatbot's messages
          },
        }}
        textStyle={{
          right: {
            color: '#fff', // Change the text color for user's messages
          },
          left: {
            color: '#22719E', // Change the text color for Chatbot's messages
          },
        }}
      />
    );
  };

  // Custom component for styling the input toolbar
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#ffff', // Change the background color for the input toolbar
          borderRadius:15,
           width:'auto',
          // marginLeft:8,
           marginBottom:5,
        }}
      />
    );
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
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
    />
  );
};

export default Chat;

