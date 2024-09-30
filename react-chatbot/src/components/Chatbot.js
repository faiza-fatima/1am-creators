import { useState } from "react";
import { gsap } from "gsap";
import { sendMessageToBot } from "../services/api";  // <-- Import the service here

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [botMessage, setBotMessage] = useState("Hello! I'm your chatbot. Ask me anything.");

  // Updated sendMessage function
  const sendMessage = async () => {
    if (!userMessage.trim()) return;
    setIsBotTyping(true);

    setTimeout(async () => {
      setIsBotTyping(false);
      const botReply = await sendMessageToBot(userMessage); // Call the backend API
      setBotMessage(botReply);
      setUserMessage("");
      // Animation for showing the message
      gsap.to(".bot-message", { opacity: 1, duration: 1, ease: "power3.out" });
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-purple-700">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4 relative">
        <div className="bot-message opacity-0 text-white text-2xl bg-gray-900 p-4 rounded-lg glow-text">
          {botMessage}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}  // Trigger sendMessage function on click
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </div>
        {isBotTyping && (
          <div className="bot-typing absolute bottom-2 text-gray-500 text-sm animate-pulse">
            Bot is typing...
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
