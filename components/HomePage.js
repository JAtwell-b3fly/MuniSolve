import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import axios from 'axios';
import { addHistory } from './ChatHistroyFirebase';
import {View, TouchableOpacity} from 'react-native-web'

const Chat = () => {
  const [messages, setMessages] = useState([]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  // useEffect(() => {
  //   // Set initial messages
  //   const id_num = generateRandomNumber();
  //   setMessages([
  //     {
  //       _id: id_num,
  //       text: 'Hi Ayanda, how can we assist you?',
  //       createdAt: new Date(),
  //       user: {
  //         _id: id_num, // Chatbot's id
  //         name: 'MuniSolve Chatbot',
  //       },
  //     },
  //   ]);
  //   console.log('Generated ID:', id_num);
  // }, []);

  const onSend = useCallback(async (newMessages = []) => {
    try {
      const userMessage = newMessages[0].text;
      const userMessageObject = {
        _id: generateRandomNumber(),
        text: userMessage,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'User',
        },
      };
  
      // Update state for the user's message
      setMessages((prevMessages) => [...prevMessages, userMessageObject]);
  
      // Send the user's message to Rasa and get the bot's response
      const botResponses = await rasaAPI('user', userMessage);
  
      // Check if botResponses is an array before mapping
      if (Array.isArray(botResponses)) {
        // Separate user and bot messages
        const userMessages = [userMessageObject];
        const botMessages = botResponses.map((response) => ({
          ...response,
          user: {
            _id: 2,
            name: 'MuniSolve Chatbot',
          },
        }));
  
        // Update state for the bot's responses
        setMessages((prevMessages) => [...prevMessages, ...botMessages]);
  
        // Update Firebase with user messages
        addHistory(userMessages);
  
        // Update Firebase with bot messages
        addHistory(botMessages);
      } else {
        console.error('Invalid botResponses format:', botResponses);
      }
    } catch (error) {
      console.error('Error handling message: ', error);
    }
  }, []);
  
  
  
  



  const rasaAPI = async (name, message) => {
    try {
      const response = await fetch("https://69e1-41-145-196-51.ngrok-free.app/webhooks/rest/webhook", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "charset": "UTF-8",
        },
        credentials: "same-origin",
        body: JSON.stringify({ "sender": name, "message": message }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData);
  
      if (Array.isArray(responseData)) {
        const botResponses = responseData.map((temp) => ({
          _id: generateRandomNumber(),
          text: temp.text,
          createdAt: new Date(),
          user: {
            _id: generateRandomNumber(),
            name: 'MuniSolve Chatbot',
          },
        }));
  
        // Use addHistory for bot responses
        botResponses.forEach(addHistory);
  
        return botResponses;
      } else {
        console.error('Invalid botResponses format:', responseData);
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return [];
    }
  };
  

  
  // const sendUserMessageToRasa = async (userMessage) => {
  //   try {
  //     const response = await axios.post(
  //       'https://832c-41-246-29-181.ngrok-free.app/webhooks/rest/webhook',
  //       {
  //         sender: 'user',
  //         message: userMessage,
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error sending message to Rasa:', error);
  //     return { data: [] }; // Returns an empty array in case of an error
  //   }
  // };

  // const sendMessagesToBackend = async (newMessages) => {
  //   //console.log('Messages to be sent to the backend:', newMessages);
  //   // Add your logic here to send messages to your backend
  // };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
          left: {
            backgroundColor: '#ffff',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#22719E',
          },
        }}
      />
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#ffff',
          borderRadius: 15,
          width: 'auto',
          marginBottom: 5,
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
        name: 'User',
      }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      inverted={false} // Set this to true to display the latest messages at the bottom
    />
  );
};

export default Chat;