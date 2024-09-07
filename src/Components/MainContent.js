import React, { useState } from "react";
import {
  FileText,
  Link,
  DollarSign,
  TrendingUp,
  Monitor,
  Smartphone,
  Tablet,
  UserPlus,
  AlertCircle,
  Infinity,
} from "lucide-react";
import Sidebar from "./sidebar";
import Header from "./header";

const EcommerceReferralPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 relative dark:bg-gray-800 text-gray-900 dark:text-slate-300">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-gray-800 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        {/* Sidebar placeholder */}
        <div className="hidden lg:block w-64 bg-white shadow-lg md:hidden">
          {/* Sidebar content goes here */}
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main content area */}
        <main className="p-6 dark:bg-gray-800">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
            <div className="shadow-xl ">
              {renderStatsCard(
                "Total Earning",
                "$24,983",
                "DollarSign",
                "text-blue-500"
              )}
            </div>
            <div className="shadow-lg">
              {renderStatsCard(
                "Unpaid Earning",
                "$8,647",
                "AlertCircle",
                "text-yellow-500"
              )}
            </div>
            <div className="shadow-lg">
              {renderStatsCard(
                "Signups",
                "2,647",
                "UserPlus",
                "text-green-500"
              )}
            </div>
            <div className="shadow-lg">
              {renderStatsCard(
                "Conversion Rate",
                "4.5%",
                "Infinity",
                "text-red-500"
              )}
            </div>
          </div>

          {/* Referral Stats */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
            <h2 className="text-lg font-semibold mb-4">Referral Stats</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
                    <th className="px-4 py-2 text-left">Referred user</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Joined</th>
                    <th className="px-4 py-2 text-left">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRow(
                    "Marvin Fuller",
                    "Active",
                    "23 Oct 2023",
                    "$45,669"
                  )}
                  {renderTableRow(
                    "Rachel Garner",
                    "Active",
                    "14 Oct 2023",
                    "$32,040"
                  )}
                  {renderTableRow(
                    "Aarav Sharma",
                    "Inactive",
                    "03 Oct 2023",
                    "$0"
                  )}
                  {renderTableRow(
                    "Emily Parker",
                    "Pending",
                    "30 Sep 2023",
                    "$15,500"
                  )}
                  {renderTableRow(
                    "David Jones",
                    "Active",
                    "18 Sep 2023",
                    "$28,705"
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Earnings & Device Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Earnings */}
            <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
              <h2 className="text-lg font-semibold mb-4">Earnings</h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold">$45,234</span>
                <span className="text-sm text-green-500">+10.23%</span>
              </div>
              <p className="text-gray-500 mb-4">
                Compared to $84,325 last year
              </p>
              {/* Placeholder for chart */}
              <div className="h-48 bg-gray-200 rounded-lg dark:bg-gray-800 text-gray-900 dark:text-slate-300"></div>
            </div>

            {/* Device Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
              <h2 className="text-lg font-semibold mb-4">Device Stats</h2>
              {renderDeviceStat("Desktop", 58.6, "Monitor")}
              {renderDeviceStat("Mobile", 34.9, "Smartphone")}
              {renderDeviceStat("Tablet", 6.5, "Tablet")}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const renderStatsCard = (title, value, icon, iconColor) => {
  const Icon =
    icon === "DollarSign"
      ? DollarSign
      : icon === "UserPlus"
      ? UserPlus
      : icon === "AlertCircle"
      ? AlertCircle
      : Infinity;
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <Icon className={`${iconColor} h-6 w-6`} />
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

const renderTableRow = (name, status, date, revenue) => {
  const statusColor =
    status === "Active"
      ? "text-green-500"
      : status === "Inactive"
      ? "text-red-500"
      : "text-yellow-500";
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{name}</td>
      <td className={`px-4 py-2 ${statusColor}`}>{status}</td>
      <td className="px-4 py-2">{date}</td>
      <td className="px-4 py-2">{revenue}</td>
    </tr>
  );
};

const renderDeviceStat = (device, percentage, icon) => {
  const Icon =
    icon === "Monitor" ? Monitor : icon === "Smartphone" ? Smartphone : Tablet;
  return (
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-gray-400 mr-4" />
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{device}</span>
          <span className="text-sm text-gray-500">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceReferralPage;
