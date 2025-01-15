import React,{useState} from "react";
import ChatInput from "../ChatInput";

const MainContent = () => {
  const [messages, setMessages] = useState([
    { type: "response", text: "Hello! How can I assist you today?" },
  ]);

  const handleSendMessage = (text) => {
    if (text.trim() !== "") {
      // Add user message
      setMessages((prev) => [...prev, { type: "user", text }]);

      // Simulate a response after a delay
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
      <div className="flex flex-col h-full bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">
          OpenAI's GPT is not entirely free...
        </h2>

        <div className="flex-1 overflow-y-auto">
          <p>
            OpenAI provides <strong>free trial credits</strong> when you sign
            up. These credits are valid for a limited time (e.g., 3 months).
          </p>
          <p className="mt-4">
            You can build your own chatbot using GPT's APIs by leveraging these
            free credits. However, after the trial, you'll need to pay for the
            service.
          </p>
          <p className="mt-4">
            Building your chatbot can also involve React, Tailwind CSS, and
            other tools for a sleek and responsive UI. Try exploring these
            frameworks!
          </p>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
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
        </div>
        <div className="p-4 border-t border-gray-700">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
      <span className="text-center text-xs text-[10px] mt-3">
        Built and created by Shabir Ahmad Dar{" "}
      </span>
    </>
  );
};

export default MainContent;
