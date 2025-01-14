import React from "react";
import { BsWindow } from "react-icons/bs";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`w-64 bg-gray-800 p-4 pt-6 ${
        isOpen ? "translate-x-0" : " hidden -translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-lg font-semibold">My Chatbot</h2>
        <button onClick={toggleSidebar}>
          <BsWindow className="size-6"/>
        </button>
      </div>
      <nav className="space-y-2">
        <div>
          <h3 className="text-sm font-medium mb-2">Today</h3>
          <ul className="space-y-1">
            <li className="hover:bg-gray-700 p-2 rounded">
              How can I ......
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              Wha are the reasons...
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Yesterday</h3>
          <ul className="space-y-1">
            <li className="hover:bg-gray-700 p-2 rounded">
              Intesting.....
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              Boring...
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              Um nice I like it..
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Previous 7 Days</h3>
          <ul className="space-y-1">
            <li className="hover:bg-gray-700 p-2 rounded">
              Project Feedback Follow-up
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              Amazing....
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              Wonderfull..
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
