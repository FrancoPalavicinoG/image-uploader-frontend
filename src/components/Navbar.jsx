import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {

  const isDark = theme === "dark";
  return (
    <nav className={`${isDark ? "bg-gray-900" : "bg-white"} shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              Image <span className="text-blue-500">Uploader</span>
            </span>
          </div>

          {/* Theme toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 
                ${isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}