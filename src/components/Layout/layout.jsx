import React, { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import MainContent from "../Main";
import { BsWindowSidebar } from "react-icons/bs";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-8 left-4 text-white p-2 rounded"
        >
          <BsWindowSidebar className="size-6" />
        </button>
      )}

      <main className="flex-1 flex justify-center items-center px-4">
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "max-w-5xl" : "max-w-6xl"
          } w-full h-full flex flex-col overflow-hidden p-6 pb-2 mx-auto`}
        >
          <Header />
          <MainContent />
        </div>
      </main>
    </div>
  );
};

export default Layout;
