const rasaAPI = async (name, message, setChat) => {
    try {
      const response = await fetch("https://4787-41-246-26-241.ngrok-free.app/webhooks/rest/webhook", {
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
        const response_temp = { sender: "bot", recipient_id: recipient_id, message: recipient_message };
  
        console.log(response_temp);
        setChat((prevChat) => [...prevChat, response_temp]);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  
  export default rasaAPI;
  