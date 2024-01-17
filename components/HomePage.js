import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import { TouchableOpacity, Text, View } from 'react-native';
import { handleProfileInfo } from "./ChatHistroyFirebase";


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [quickReplies, setQuickReplies] = useState([]);

    const [profileInfo, setProfileInfo] = useState('');




    useEffect(() =>{
      handleProfileInfo().then ((data) =>{
        console.log(data)
        setProfileInfo(data);
  
      })
    }, [])
  
    useEffect(() => {
      console.log(profileInfo)
      if (profileInfo && profileInfo.length > 0) {
        console.log(profileInfo[0].Name);
      } else {
        console.log("Profile information not available");
      } // Log the updated profileInfo
    }, [profileInfo]);






    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 1000) + 1;
    };


    const onSend = useCallback(async (newMessages = []) => {
        try {
            const userMessage = newMessages[0].text;
            const userMessageObject = {
                _id: generateRandomNumber(),
                text: userMessage,
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Ayanda',
                },
            };


            setMessages(prevMessages => [...prevMessages, userMessageObject]);


            const botResponses = await rasaAPI('user', userMessage);


            if (Array.isArray(botResponses)) {
                // Update state for the bot's responses


                setMessages((prevMessages) => [
                    ...prevMessages,
                    ...botResponses.map((response) => ({
                        ...response,
                        user: {
                            _id: 2,
                            name: 'MuniSolve Chatbot',
                        },
                    })),
                ]);
                const lastBotResponse = botResponses[botResponses.length - 1];
                if (lastBotResponse.text && lastBotResponse.text.includes('\n')) {
                    const quickRepliesString = lastBotResponse.text.split('\n').map((reply) => reply.trim());
                    const quickReplies = quickRepliesString.map((reply) => ({ title: reply, value: reply }))


                    setQuickReplies(quickReplies)


                    if (userMessage.toLowerCase() === 'hi' && quickReplies.length > 0) {
                        console.log("in")
                        const OptionsMessage = {
                            _id: generateRandomNumber(),
                            text: quickReplies[0].title,
                            createdAt: new Date(),
                            user: {
                                _id: 2,
                                name: 'Muni-solve',
                            },
                            quickReplies: {
                                type: 'radio',
                                values: quickReplies.slice(1),
                            },
                        };


                        setTimeout(() => {
                            setMessages((prevMessages) => GiftedChat.append(prevMessages, [OptionsMessage]));
                        }, 500);
                    }
                } else {


                    //setQuickReplies([]);
                }
            } else {
                console.error('Invalid botResponses format:', botResponses);
            }


            scrollToBottom();
        } catch (error) {
            console.error('Error handling message: ', error);
        }
    }, [setMessages, setQuickReplies]);






    const rasaAPI = async (name, message) => {
        console.log(message)
        try {
            const response = await fetch("https://b676-41-246-31-129.ngrok-free.app/webhooks/rest/webhook", {
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






    const handleQuickReply = async (reply) => {
        try {
            const { value } = reply;
            console.log('User Reply:', value);


            // Call rasaAPI to handle the user's message
            setMessages((prevMessages) => [...prevMessages, { text: value }]);
            const botResponses = await rasaAPI('user', value);


            console.log('Bot Responses:', botResponses);


            // Display quick reply options again
            if (Array.isArray(botResponses) && botResponses.length > 0) {
                const lastBotResponse = botResponses[botResponses.length - 1];
                console.log('Last Bot Response:', lastBotResponse);
                console.log(lastBotResponse)


                if (lastBotResponse.text && lastBotResponse.text.includes('\n')) {
                    const quickRepliesString = lastBotResponse.text.split('\n').map((reply) => reply.trim());
                    console.log('Quick Replies String:', quickRepliesString);


                    const quickReplies = quickRepliesString.map((reply) => ({ title: reply, value: reply }));
                    console.log('Quick Replies:', quickReplies);




                    setQuickReplies(quickReplies);


                    const OptionsMessage = {
                        _id: generateRandomNumber(),
                        text: quickReplies[0].title,
                        createdAt: new Date(),
                        user: {
                            _id: 3,
                            name: 'user',
                        },
                        quickReplies: {
                            type: 'radio',
                            values: quickReplies.slice(1),
                        },
                    };


                    setTimeout(() => {
                        setMessages((prevMessages) => GiftedChat.append(prevMessages, [OptionsMessage]));
                    }, 500);
                } else {
                    console.log("not array")
                    const textValue = lastBotResponse['text'];
                    console.log(textValue)


                    const OptionsMessage = {
                        _id: generateRandomNumber(),
                        text: textValue,
                        createdAt: new Date(),
                        user: {
                            _id: 3,
                            name: 'user',
                        },


                    };


                    setTimeout(() => {
                        setMessages((prevMessages) => GiftedChat.append(prevMessages, [OptionsMessage]));
                    }, 500);
                }
            }
        } catch (error) {
            console.error('Error handling quick reply: ', error);
        }
    };




    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#2E64E5',
                    },
                    left: {
                        backgroundColor: '#2E64E5',
                    },
                }}
                textStyle={{
                    right: {
                        color: '#fff',
                    },
                    left: {
                        color: '#fff',
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
    const scrollToBottom = () => {
        if (giftedChatRef.current) {
            giftedChatRef.current.scrollToBottom();
        }
    };


    const giftedChatRef = React.createRef();


    const renderChatEmpty = () => {
      return (
          
              <Text style={{textAlign: 'center', marginTop: '50%', transform: [{ scaleX: -1 }, { scaleY: -1 }] }}>
                  Hi {profileInfo.length > 0 ? profileInfo[0].Name : null} ! If you have any questions, don't hesitate to ask us.
              </Text>
          
      );
  };
  




    return (
        <GiftedChat
            ref={giftedChatRef}
            messages={messages}
            onSend={(newMessages) => onSend(newMessages)}
            user={{
                _id: 1,
            }}


            renderBubble={renderBubble}
            renderInputToolbar={renderInputToolbar}
            onQuickReply={(reply) => handleQuickReply(reply[0])}
            renderChatEmpty={renderChatEmpty}


        />
    );
};


export default Chat;