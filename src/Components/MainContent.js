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
  UserIcon,
  Infinity,
} from "lucide-react";
import Sidebar from "./sidebar";
import Header from "./header";

const EcommerceReferralPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    // Logic for handling withdrawal goes here
    console.log("Withdraw button clicked");
    console.log("Submitting:", amount);
  };

  const [inviteLink, setInviteLink] = useState(
    "https://example.com/user/signup?referal=0xce2c8dcbda3efcd335385bfd47b128d5b2513b47"
  );

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      className="flex h-screen relative dark:bg-gray-900 text-gray-900 dark:text-slate-300"
      style={{
        background:
          "radial-gradient(circle at center, rgba(20, 84, 84, 0.8) -20%, rgba(13, 52, 52, 0.9) 5%, rgba(3, 11, 11, 1) 80%)",
      }}
    >
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
        <main className="p-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Invite Link
          </h2>
          <div className="flex items-center bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden">
            <div className="p-2 bg-gray-100 border-r border-gray-300 dark:bg-gray-900">
              <UserIcon className="h-6 w-6 text-gray-500 " />
            </div>
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="flex-grow px-3 py-2 text-sm focus:outline-none dark:bg-gray-900"
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-[#4a5d23] text-white font-semibold hover:bg-[#3a4a1c] transition-colors duration-200"
            >
              COPY
            </button>
          </div>

          <h2 className="text-xl font-bold mb-2 text-white mt-3">Stake</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 text-black shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Stake Now",
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    className=" rounded-md px-3 text-black dark:bg-gray-900 dark:text-gray-200 w-5/6"
                  />,
                  "DollarSign",
                  "text-green-500"
                )}
                <div className="h-1/5 mt-4 flex justify-end">
                  <button
                    className="-mt-6 bg-green-500 text-white rounded-lg py-1 px-3 hover:bg-green-600 mr-2 mb-2"
                    onClick={handleWithdraw}
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Total Stake",
                  "$100.00",
                  "DollarSign",
                  "text-blue-500"
                )}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Remaining Caping Amount",
                  "$00.00",
                  "DollarSign",
                  "text-blue-500"
                )}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Available for Withdrawal",
                  "$200.00",
                  "AlertCircle",
                  "text-green-500"
                )}
                <div className=" h-1/5 mb-0 flex justify-end">
                  <button
                    className="-mt-6 bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 mr-2 mb-2"
                    onClick={() => handleWithdraw()}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">Ranks</h2>
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Active Ranks",
                  "John",
                  "Infinity",
                  "text-red-500"
                )}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Total Affiliate Stake",
                  "$0.00/0.000",
                  "UserPlus",
                  "text-yellow-500"
                )}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "3x Remaining Amount",
                  "$0.000",
                  "Infinity",
                  "text-red-500"
                )}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Available for Withdrawal",
                  "$00.00",
                  "AlertCircle",
                  "text-green-500"
                )}
                <div className="flex justify-end">
                  <button
                    className="-mt-6 bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 mr-2 mb-2"
                    onClick={() => handleWithdraw()}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2 text-white mt-6">Quick View</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Direct Referral",
                  "0/0",
                  "USerPlus",
                  "text-blue-500"
                )}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Total Team",
                  "0",
                  "AlertCircle",
                  "text-green-500"
                )}
              </div>
            </div>

            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Direct Business",
                  "0",
                  "UserPlus",
                  "text-yellow-500"
                )}
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Team Busines",
                  "0",
                  "Infinity",
                  "text-red-500"
                )}
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2 text-white mt-6">Bonuses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 ">
            <div className="flex items-stretch ">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Monthly Bounses",
                  "$00",
                  "DollarSign",
                  "text-blue-500"
                )}
                <div className="flex justify-end">
                  <button
                    className="-mt-6 bg-green-500 text-white py-1 px-4 rounded-lg w-1/3 hover:bg-green-600 mr-2 mb-2"
                    onClick={() => handleWithdraw()}
                  >
                    Claim
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col rounded-lg">
                {renderStatsCard(
                  "Weekly Bonus",
                  "$4",
                  "DollarSign",
                  "text-blue-500"
                )}
                <div className="flex justify-end">
                  <button
                    className="-mt-6 bg-green-500 text-white py-1 px-4 rounded-lg w-1/3 hover:bg-green-600 mr-2 mb-2"
                    onClick={() => handleWithdraw()}
                  >
                    Claim
                  </button>
                </div>
              </div>
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
    <div className="bg-white  rounded-lg shadow-sm p-6 dark:bg-gray-900 text-black dark:text-slate-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200">
          {title}
        </h3>
        <Icon className={`${iconColor} h-6 w-6`} />
      </div>
      <p className="text-2xl font-semibold text-gray-800 dark:text-slate-200">
        {value}
      </p>
    </div>
  );
};

export default EcommerceReferralPage;
