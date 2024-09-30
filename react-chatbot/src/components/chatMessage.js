import React from 'react';

function ChatMessage({ message, isBot }) {
  return (
    <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
      <div className="message-content">{message}</div>
      <div className="message-timestamp">{new Date().toLocaleTimeString()}</div>
    </div>
  );
}

export default ChatMessage;
