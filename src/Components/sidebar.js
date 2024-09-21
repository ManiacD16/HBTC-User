import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import Logo from "./Images/Logo.svg";
import "simplebar-react/dist/simplebar.min.css"; // Import SimpleBar styles
import {
  Home,
  Layout,
  FileText,
  Mail,
  MessageCircle,
  Calendar,
  ShoppingCart,
  BookOpen,
  Truck,
  DollarSign,
  X,
  UsersIcon,
  ChartBarIcon,
  ChevronDown,
  Circle,
} from "lucide-react"; // Using Lucide icons
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();

  // Toggle dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="min-h-screen w-64 shadow-lg text-gray-400 dark:text-slate-300"
      style={{
        background:
          "radial-gradient(circle at center, rgba(20, 84, 84, 0.8) -20%, rgba(13, 52, 52, 0.9) 5%, rgba(3, 11, 11, 1) 80%)",
      }}
    >
      {/* Sidebar content with custom scroll */}
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-12 h-auto" />
            <h1 className="ml-3 text-yellow-500 text-2xl font-bold">HBTC</h1>
          </div>

          {/* Close button visible only on small screens */}
          <button
            className="md:hidden text-gray-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" /> {/* Close button */}
          </button>
        </div>

        <nav className="mt-0 ml-4 mr-4">
          {/* Dashboards Menu with Dropdown */}
          <div
            className="flex items-center justify-between p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex items-center space-x-3">
              <Home className="h-5 w-5 text-gray-500 dark:text-slate-300" />
              <span className="text-gray-500 dark:text-slate-300">
                Dashboards
              </span>
            </div>
          </div>
          {/* Other Main Menu Items */}
          <div className="mb-6">
            <ul className="mt-2 space-y-2">
              <li
                className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => navigate("/team")} // Redirect to the Team page
              >
                <UsersIcon className="h-5 w-5 text-gray-500 dark:text-slate-300" />
                <span className="ml-3 text-gray-500 dark:text-slate-300">
                  Team
                </span>
              </li>
              <li
                className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => navigate("/activity")}
              >
                <ChartBarIcon className="h-5 w-5 text-gray-500 dark:text-slate-300" />
                <span className="ml-3 text-gray-500 dark:text-slate-300">
                  Activity
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
