import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import iconClose from "../assets/icon-menu-close.svg";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between px-5 py-8">
        <img src={logo} alt="logo" />
        <button onClick={() => setIsSidebarOpen(!!!isSidebarOpen)}>
          <img src={iconMenu} alt="iconMenu" className="pl-5 py-5" />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed right-0 top-0 w-full h-screen bg-black/50">
          <div className="fixed h-screen w-4/6 top-0 right-0 bg-white px-5 py-8">
            <div className="flex justify-end">
              <button onClick={() => setIsSidebarOpen(!!!isSidebarOpen)}>
                <img src={iconClose} alt="iconMenu" className="pl-5 py-3" />
              </button>
            </div>
            <div className="flex flex-col pt-16 text-xl text-very-dark-blue gap-5">
              <ul>
                <li>Home</li>
              </ul>
              <ul>
                <li>New</li>
              </ul>
              <ul>
                <li>Popular</li>
              </ul>
              <ul>
                <li>Trending</li>
              </ul>
              <ul>
                <li>Categories</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
