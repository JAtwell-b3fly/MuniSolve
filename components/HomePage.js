import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  useEffect(() => {
    // Set initial messages
    const id_num = generateRandomNumber();
    setMessages([
      {
        _id: id_num,
        text: 'Hi Ayanda, how can we assist you?',
        createdAt: new Date(),
        user: {
          _id: id_num, // Chatbot's id
          name: 'MuniSolve Chatbot',
        },
      },
    ]);
    console.log('Generated ID:', id_num);
  }, []);

  const onSend = useCallback(async (newMessages = []) => {
    try {
      // Send the user's message to the Rasa server
      const userMessage = newMessages[0].text;
      await rasaAPI('user', userMessage);

      // Update state
      setMessages((prevMessages) => [...prevMessages, newMessages[0]]);
    } catch (error) {
      console.error('Error handling message: ', error);
    }
  }, []);

  const rasaAPI = async (name, message) => {
    try {
      const response = await fetch("https://832c-41-246-29-181.ngrok-free.app/webhooks/rest/webhook", {
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
      if (responseData && responseData.length > 0) {
        const temp = responseData[0];
        const recipient_id = temp["recipient_id"];
        const recipient_message = temp["text"];
        const response_temp = { _id: generateRandomNumber(), text: recipient_message, createdAt: new Date(), user: { _id: generateRandomNumber(), name: 'MuniSolve Chatbot' } };
        console.log(response_temp);
        setMessages((prevMessages) => [...prevMessages, response_temp]);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const sendUserMessageToRasa = async (userMessage) => {
    try {
      const response = await axios.post(
        'https://832c-41-246-29-181.ngrok-free.app/webhooks/rest/webhook',
        {
          sender: 'user',
          message: userMessage,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error sending message to Rasa:', error);
      return { data: [] }; // Returns an empty array in case of an error
    }
  };

  const sendMessagesToBackend = async (newMessages) => {
    //console.log('Messages to be sent to the backend:', newMessages);
    // Add your logic here to send messages to your backend
  };

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
    />
  );
};

export default Chat;
