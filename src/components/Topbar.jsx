import React from "react";
import { FiBell, FiSun, FiMoon, FiMenu } from "react-icons/fi";

const Topbar = ({ onThemeToggle, darkMode, onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 w-full flex items-center justify-between bg-white/80 backdrop-blur-lg shadow-md pl-4 pr-8 py-4">
      <div className="flex items-center">
        {/* Hamburger for mobile */}
        {onMenuClick && (
          <button
            className="text-gray-500 hover:text-blue-600 transition text-2xl mr-2 block lg:hidden"
            onClick={onMenuClick}
            title="Open menu"
          >
            <FiMenu />
          </button>
        )}
      </div>
      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-blue-600 transition text-xl" title="Notifications">
          <FiBell />
        </button>
        <button
          className="text-gray-500 hover:text-blue-600 transition text-xl"
          onClick={onThemeToggle}
          title="Toggle theme"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">A</div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 text-sm">Admin</span>
            <span className="text-xs text-gray-400">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
