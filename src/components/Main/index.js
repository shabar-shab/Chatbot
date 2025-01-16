import React, { useState, useRef, useEffect } from "react";
import ChatInput from "../ChatInput";

const MainContent = () => {
  const [messages, setMessages] = useState([
    { type: "response", text: "Hello! How can I assist you today?" },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text) => {
    if (text.trim() !== "") {
      setMessages((prev) => [...prev, { type: "user", text }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "response", text: "This is a response from the bot." },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full bg-gray-800 rounded-lg shadow overflow-hidden">
        <h2 className="text-lg font-semibold mb-4 p-6">
          OpenAI's GPT is not entirely free...
        </h2>

        <div
          className="flex-1 px-6 overflow-y-auto custom-scrollbar scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          style={{ paddingRight: "15px" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`max-w-sm px-4 py-2 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-700">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
      <span className="text-center text-xs text-[10px] mt-3">
        Built and created by Shabir Ahmad Dar
      </span>
    </>
  );
};

export default MainContent;
