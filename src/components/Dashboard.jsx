import React, { useState } from "react";
import Groups from "./Groups";
import Contributions from "./Contributions";
import Payouts from "./Payouts";
import WalletView from "./Wallet";
import Notifications from "./Notifications";
import Help from "./Help";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import HomeView from "./dashboard/HomeView";
import { Users, ChevronDown, Clock, Menu } from "lucide-react";

export default function Dashboard({ onNavigate, initialTab = "Home" }) {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined" && (window.location.hash.toLowerCase().includes("group") || window.location.hash.toLowerCase().includes("invite"))) {
      return "Groups";
    }
    if (typeof window !== "undefined" && window.location.hash.toLowerCase().includes("contribution")) {
      return "Contributions";
    }
    if (typeof window !== "undefined" && window.location.hash.toLowerCase().includes("payout")) {
      return "Payouts";
    }
    if (typeof window !== "undefined" && window.location.hash.toLowerCase().includes("wallet")) {
      return "Wallet";
    }
    if (typeof window !== "undefined" && window.location.hash.toLowerCase().includes("notification")) {
      return "Notifications";
    }
    if (typeof window !== "undefined" && window.location.hash.toLowerCase().includes("help")) {
      return "Help";
    }
    return initialTab;
  });

  const [groupsInitialView, setGroupsInitialView] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash.toLowerCase().includes("invite")) {
      return "join-invite";
    }
    return null;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState("My Ajo Groups : 3");
  const [hiddenBalances, setHiddenBalances] = useState({});

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A2E26] flex">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR */}
      <DashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onNavigate={onNavigate}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 lg:ml-64 min-w-0 px-4 sm:px-8 pt-[70px] lg:pt-3 pb-8 space-y-6">
        {/* Top Bar with Mobile Toggle and Group Selector */}
        <div className="fixed top-0 left-0 right-0 z-30 bg-[#FAF8F5] px-4 sm:px-8 py-3 border-b border-[#EBE6DD] flex items-center justify-between gap-4 lg:static lg:px-0 lg:py-0 lg:border-b lg:pb-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-white border border-[#EBE6DD] text-[#064335] shadow-xs"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-[#000000]">
              {activeTab}
            </h1>
          </div>

          {/* Group Filter Dropdown */}
          <div className="relative shrink-0">
            <button
              onClick={() => alert("Filter groups: All 3 active Ajo circles selected.")}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 bg-white border border-[#E5E0D6] rounded-md text-xs sm:text-sm font-semibold text-[#1A2E26] shadow-xs hover:bg-[#FDFCF9] transition-all"
            >
              <div className="w-5 h-5 rounded-md bg-[#EBF6F0] text-[#0B6B40] flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5" />
              </div>
              <span className="truncate max-w-[130px] sm:max-w-none">{selectedGroupFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] shrink-0" />
            </button>
          </div>
        </div>

        <div key={activeTab} className="animate-tab-content space-y-6">
          {activeTab === "Groups" ? (
            <Groups onNavigate={onNavigate} initialView={groupsInitialView} />
          ) : activeTab === "Contributions" ? (
            <Contributions onNavigate={onNavigate} />
          ) : activeTab === "Payouts" ? (
            <Payouts onNavigate={onNavigate} />
          ) : activeTab === "Wallet" ? (
            <WalletView onNavigate={onNavigate} />
          ) : activeTab === "Notifications" ? (
            <Notifications onNavigate={onNavigate} />
          ) : activeTab === "Help" ? (
            <Help onNavigate={onNavigate} />
          ) : activeTab === "Home" ? (
            <HomeView
              setActiveTab={setActiveTab}
              setGroupsInitialView={setGroupsInitialView}
              hiddenBalances={hiddenBalances}
              setHiddenBalances={setHiddenBalances}
            />
          ) : (
            <div className="bg-white rounded-xl p-12 shadow-xl text-center space-y-4 max-w-lg mx-auto my-12">
              <div className="w-16 h-16 rounded-full bg-[#0B5D4B26] text-[#064335] flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#000000]">{activeTab}</h3>
              <p className="text-sm text-[#7E7F7D]">
                This section is currently under development. Check back soon for updates!
              </p>
              <button
                onClick={() => setActiveTab("Home")}
                className="px-5 py-2.5 bg-[#064335] text-white text-sm font-semibold rounded-xl hover:bg-[#0B5D4B] transition-colors"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
