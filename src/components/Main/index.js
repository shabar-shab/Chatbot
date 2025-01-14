import React from "react";
import ChatInput from "../ChatInput";

const MainContent = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">
        OpenAI's GPT is not entirely free...
      </h2>
      <p>
        OpenAI provides <strong>free trial credits</strong> when you sign up.
        These credits are valid for a limited time (e.g., 3 months).
      </p>
      <div className="p-4 border-t border-gray-700">
        <ChatInput />
      </div>
    </div>
  );
};

export default MainContent;
