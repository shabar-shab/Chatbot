import React from "react";
import { FiPaperclip, FiSend } from "react-icons/fi"; // Attachment and Send Icons
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

      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Message My Chatbot"
          className="w-full bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <FiSend className="text-gray-400 hover:text-gray-200 w-5 h-5" />
        </button>
      </div>

      <button className="ml-4">
        <BiMicrophone className="text-gray-400 hover:text-gray-200 w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatInput;
