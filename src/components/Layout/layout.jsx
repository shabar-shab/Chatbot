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
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-8 left-4  text-white p-2 rounded"
        >
          <BsWindowSidebar className="size-6" />
        </button>
      )}
      <main
        className={`bg-gray-900 transition-all duration-300 ${
          isSidebarOpen ? "mx-32" : "mx-40"
        } flex-1`}
      >
        <div
          className={`mt-8 transition-all duration-600 mx-auto`}
        >
          <Header />
          <MainContent />
        </div>
      </main>
    </div>
  );
};

export default Layout;
