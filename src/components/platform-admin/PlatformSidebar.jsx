import React from "react";
import {
  LayoutDashboard,
  Users,
  Layers,
  Coins,
  Wallet,
  ArrowUpRight,
  AlertCircle,
  MessageSquare,
  ShieldAlert,
  FileText,
  ShieldCheck,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { GoHomeFill } from "react-icons/go";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosTrendingUp, IoMdTrendingUp } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { PiWarningOctagonLight } from "react-icons/pi";

export default function PlatformSidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  onNavigate,
}) {
  const mainNavItems = [
    { name: "Dashboard", icon: GoHomeFill },
    { name: "Users", icon: Users },
    { name: "Groups", icon: Layers },
    { name: "Contributions", icon: BsDatabaseAdd },
    { name: "Wallet", icon: Wallet },
    { name: "Payouts", icon: IoMdTrendingUp },
    { name: "Disputes", icon: FiMinusCircle },
    { name: "Support", icon: MessageSquare },
    { name: "Risk & Monitoring", icon: PiWarningOctagonLight },
    { name: "Reports", icon: FileText },
    { name: "Audit Logs", icon: ShieldCheck },
  ];

  const operationsNavItems = [];

  const handleNavClick = (name) => {
    setActiveTab(name);
    if (setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#087F5B] text-white flex flex-col justify-between p-5 transition-transform duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="space-y-6 pb-4">
        {/* Logo & Mobile Close */}
        <div className="flex items-center justify-between pb-2">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate("home");
              } else {
                window.location.hash = "#home";
              }
            }}
            className="flex items-center gap-2 focus:outline-none cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="PallyPot Logo"
              className="h-12 w-auto drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </button>

          <button
            onClick={() => setSidebarOpen && setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-white hover:text-white cursor-pointer"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Navigation Menu */}
        <nav className="space-y-1">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#FFFFFF26] text-white shadow-xs"
                    : "text-[#B4C6BF] hover:text-white hover:bg-[#FFFFFF26]"
                }`}
              >
                <Icon className="shrink-0" size={18}/>
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM USER PROFILE */}

      <div className="pt-4 border-t border-[#FFFFFFB0] space-y-3">
        <button
          onClick={() => handleNavClick("Settings")}
          className={`w-full flex items-center gap-3 px-3.5 py-2 text-base rounded-lg transition-all duration-200 cursor-pointer ${
            activeTab === "Settings"
              ? "bg-[#FFFFFF26] text-white"
              : "text-[#B4C6BF] hover:text-white hover:bg-[#FFFFFF26]"
          }`}
        >
          <Settings className="" size={20} />
          <span>Settings</span>
        </button>
        <div className="flex items-center gap-3 px-1">
          <div className="w-9 h-9 rounded-full bg-[#E5A93C] overflow-hidden flex items-center justify-center text-white font-bold text-sm shrink-0 border border-white/20">
            <span className="text-[#073529]">AJ</span>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-semibold text-white truncate leading-tight">
              Amara Johnson
            </h4>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#E5A93C] block mt-0.5">
              PLATFORM ADMIN
            </span>
          </div>
        </div>

        <div className="space-y-0.5">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate("signin");
              } else {
                window.location.hash = "#signin";
              }
            }}
            className="w-full flex items-center gap-3 px-3.5 py-2 text-base text-[#B4C6BF] hover:text-[#FF8080] rounded-lg hover:bg-[#FFFFFF26] transition-colors cursor-pointer"
          >
            <LogOut className="" size={20} />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
