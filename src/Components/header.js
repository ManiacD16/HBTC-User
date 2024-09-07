import React, { useState, useEffect } from "react";
import Logo from "./Images/logo.png";
import {
  Search,
  Globe,
  Sun,
  Grid,
  Bell,
  X,
  Menu,
  Moon,
  Monitor,
} from "lucide-react"; // Import Menu icon

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Apply theme based on selection
  const applyTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);

    // Apply the selected theme to the HTML element
    if (selectedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      // Detect system preferences for the system theme
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkScheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  // Apply the saved theme on initial load
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Dynamic Icon Rendering Based on Theme
  const renderThemeIcon = () => {
    if (theme === "light") {
      return <Sun className="h-5 w-5 text-gray-500 cursor-pointer" />;
    } else if (theme === "dark") {
      return <Moon className="h-5 w-5 text-gray-500 cursor-pointer" />;
    } else {
      return <Monitor className="h-5 w-5 text-gray-500 cursor-pointer" />;
    }
  };

  return (
    <>
      <header className="ml-5 mr-6 mt-3 h-14 flex items-center justify-between p-4 dark:bg-gray-900 text-gray-900 dark:text-gray-200 bg-white shadow-md rounded-lg">
        {/* Hamburger Menu (visible on small screens) */}
        <div className="flex items-center">
          <Menu
            className="h-6 w-6 text-gray-500 cursor-pointer md:hidden"
            onClick={() => setIsSidebarOpen(true)} // Open sidebar
          />
        </div>

        {/* Search bar and right-side icons */}
        {isSearchActive ? (
          <div className="flex items-center rounded-lg px-4 py-2 w-full">
            <Search className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-full text-gray-600"
            />
            <X
              className="h-5 w-5 text-gray-500 cursor-pointer"
              onClick={() => setIsSearchActive(false)}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center rounded-lg px-4 py-2 w-full">
              <Search
                className="h-5 w-5 mr-3 cursor-pointer"
                onClick={() => setIsSearchActive(true)}
              />
              <input
                type="text"
                placeholder="Search (Ctrl+/)"
                className="bg-transparent focus:outline-none w-full"
                onFocus={() => setIsSearchActive(true)}
              />
            </div>

            <div className="flex items-center space-x-5 mr-2">
              {/* Icons */}
              <Globe className="h-5 w-5 text-gray-500 cursor-pointer" />
              <div className="relative">
                {/* Render the theme icon based on current theme */}
                <div onClick={toggleDropdown}>{renderThemeIcon()}</div>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
                    <ul className="p-2 space-y-1">
                      <li
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${
                          theme === "light" ? "bg-indigo-100" : ""
                        }`}
                        onClick={() => applyTheme("light")}
                      >
                        <Sun className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">Light</span>
                      </li>
                      <li
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${
                          theme === "dark" ? "bg-indigo-100" : ""
                        }`}
                        onClick={() => applyTheme("dark")}
                      >
                        <Moon className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">Dark</span>
                      </li>
                      <li
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${
                          theme === "system" ? "bg-indigo-100" : ""
                        }`}
                        onClick={() => applyTheme("system")}
                      >
                        <Monitor className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">System</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Grid className="h-5 w-5 text-gray-500 cursor-pointer" />
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="relative w-9 h-9">
                {/* Circular avatar image */}
                <img
                  src={Logo}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />

                {/* Small overlapping status circle at the bottom-right */}
                <span className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white rounded-full w-4 h-4"></span>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
