import React from "react";
import {
  Home,
  Users,
  CreditCard,
  Wallet,
  Send,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home },
  { name: "Groups", icon: Users },
  { name: "Contributions", icon: CreditCard },
  { name: "Payouts", icon: Send },
  { name: "Wallet", icon: Wallet },
];

export default function DashboardSidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  onNavigate,
}) {
  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#073529] text-white flex flex-col justify-between p-5 transition-transform duration-300 ease-in-out overflow-y-auto ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="space-y-6">
        {/* Logo & Mobile Close */}
        <div className="flex items-center justify-between pb-2">
          <button
            onClick={() => onNavigate?.("home")}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="PallyPot Logo"
              className="h-9 w-auto drop-shadow-sm"
              onError={(e) => { e.currentTarget.src = "/logo.png"; }}
            />
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Navigation Menu */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => { setActiveTab(item.name); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#134B3D] text-white shadow-xs font-semibold translate-x-1"
                    : "text-[#B4C6BF] hover:text-white hover:bg-[#0B4032]"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* UPDATES SECTION */}
        <div className="pt-2 border-t border-[#14483B]/80 space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#6F8C81] px-3.5 block mb-1.5">UPDATES</span>
          <button
            onClick={() => {
              setActiveTab("Notifications");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "Notifications"
                ? "bg-[#134B3D] text-white font-semibold translate-x-1"
                : "text-[#B4C6BF] hover:text-white hover:bg-[#0B4032]"
            }`}
          >
            <Bell className="w-4 h-4 shrink-0" />
            <span>Notifications</span>
          </button>
        </div>

        {/* SUPPORT SECTION */}
        <div className="pt-2 border-t border-[#14483B]/80 space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#6F8C81] px-3.5 block mb-1.5">SUPPORT</span>
          <button
            onClick={() => {
              setActiveTab("Help");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "Help"
                ? "bg-[#134B3D] text-white font-semibold translate-x-1"
                : "text-[#B4C6BF] hover:text-white hover:bg-[#0B4032]"
            }`}
          >
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>Help</span>
          </button>
        </div>
      </div>

      {/* BOTTOM USER PROFILE */}
      <div className="pt-4 border-t border-[#14483B]/80 space-y-3">
        <div className="flex items-center gap-3 px-1">
          <div className="w-9 h-9 rounded-full bg-[#E5A93C] overflow-hidden flex items-center justify-center text-white font-bold text-sm shrink-0 border border-white/20">
            <span className="text-[#073529]">AJ</span>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-semibold text-white truncate leading-tight">Amara Johnson</h4>
            <button
              onClick={() => onNavigate?.("complete-profile")}
              className="text-[11px] text-[#A6BFB5] hover:text-[#E5A93C] transition-colors"
            >
              View Profile
            </button>
          </div>
        </div>
        <div className="space-y-0.5">
          <button
            onClick={() => {
              setActiveTab("Settings");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === "Settings"
                ? "bg-[#134B3D] text-white font-semibold translate-x-1"
                : "text-[#B4C6BF] hover:text-white hover:bg-[#0B4032]"
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Settings</span>
          </button>
          <button
            onClick={() => onNavigate?.("home")}
            className="w-full flex items-center gap-3 px-3.5 py-2 text-xs font-medium text-[#B4C6BF] hover:text-[#FF8080] rounded-lg hover:bg-[#0B4032] transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
