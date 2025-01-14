import React from "react";
import { FiPaperclip } from "react-icons/fi"; // Attachment Icon
import { BsCalendar2Event, BsGlobe } from "react-icons/bs"; // Calendar and Globe Icons
import { BiMicrophone } from "react-icons/bi"; // Microphone Icon

const ChatInput = () => {
  return (
    <div className="flex items-center bg-gray-800 text-white rounded-lg p-4 shadow-md w-full">
      <button className="mr-4">
        <FiPaperclip className="text-gray-400 hover:text-gray-200 w-5 h-5" />
      </button>

      <button className="mr-4">
        <BsCalendar2Event className="text-gray-400 hover:text-gray-200 w-5 h-5" />
      </button>

      <button className="mr-4">
        <BsGlobe className="text-gray-400 hover:text-gray-200 w-5 h-5" />
      </button>

      <input
        type="text"
        placeholder="Message My Chatbot"
        className="flex-1 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="ml-4">
        <BiMicrophone className="text-gray-400 hover:text-gray-200 w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatInput;
