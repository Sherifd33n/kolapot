import React, { useState } from "react";
import {
  Menu,
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
} from "lucide-react";
import PlatformSidebar from "./PlatformSidebar";
import PlatformOverviewView from "./dashboard/PlatformOverviewView";
import UserManagementView from "./users/UserManagementView";
import ViewUserDetail from "./users/ViewUserDetail";
import GroupManagementView from "./groups/GroupManagementView";
import ViewGroupDetail from "./groups/ViewGroupDetail";
import ContributionsView from "./contributions/ContributionsView";
import WalletView from "./wallet/WalletView";
import PayoutManagementView from "./payouts/PayoutManagementView";
import DisputesView from "./disputes/DisputesView";
import ViewDisputeDetail from "./disputes/ViewDisputeDetail";
import RiskMonitoringView from "./risk/RiskMonitoringView";
import SupportView from "./support/SupportView";
import ViewSupportDetail from "./support/ViewSupportDetail";
import ReportsView from "./reports/ReportsView";
import AuditLogsView from "./audit/AuditLogsView";
import SettingsView from "./settings/SettingsView";

export default function PlatformAdminDashboard({
  initialTab = "Dashboard",
  onNavigate,
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [selectedSupportRequest, setSelectedSupportRequest] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleBackToUsers = () => {
    setSelectedUser(null);
  };

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const handleBackToGroups = () => {
    setSelectedGroup(null);
  };

  const handleSelectDispute = (dispute) => {
    setSelectedDispute(dispute);
  };

  const handleBackToDisputes = () => {
    setSelectedDispute(null);
  };

  const handleSelectSupportRequest = (req) => {
    setSelectedSupportRequest(req);
  };

  const handleBackToSupport = () => {
    setSelectedSupportRequest(null);
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSelectedUser(null);
    setSelectedGroup(null);
    setSelectedDispute(null);
    setSelectedSupportRequest(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A2E26] flex flex-col lg:flex-row w-full max-w-full overflow-x-hidden">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-[#073529] px-4 py-3 flex items-center justify-between lg:hidden shadow-xs border-b border-[#14483B]/80 h-14">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg bg-[#134B3D] text-white hover:bg-[#0B4032] transition-colors cursor-pointer"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="PallyPot Logo"
              className="h-7 w-auto drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </div>
        </div>

        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#134B3D] text-[#E5A93C] uppercase tracking-wider">
          Platform Admin
        </span>
      </div>

      {/* PLATFORM ADMIN SIDEBAR */}
      <PlatformSidebar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onNavigate={onNavigate}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 lg:ml-64 min-w-0 w-full max-w-full px-3 sm:px-6 lg:px-8 pt-18 lg:pt-6 pb-12 space-y-6 overflow-x-hidden">
        {/* Dynamic Content Views */}
        <div
          key={`${activeTab}-${selectedUser ? "user-detail" : selectedGroup ? "group-detail" : selectedDispute ? "dispute-detail" : selectedSupportRequest ? "support-detail" : "list"}`}
          className="animate-tab-content w-full min-w-0 max-w-full"
        >
          {activeTab === "Dashboard" ? (
            <PlatformOverviewView onNavigateTab={handleTabChange} />
          ) : activeTab === "Users" ? (
            selectedUser ? (
              <ViewUserDetail user={selectedUser} onBack={handleBackToUsers} />
            ) : (
              <UserManagementView onViewUser={handleSelectUser} />
            )
          ) : activeTab === "Groups" ? (
            selectedGroup ? (
              <ViewGroupDetail group={selectedGroup} onBack={handleBackToGroups} />
            ) : (
              <GroupManagementView onViewGroup={handleSelectGroup} />
            )
          ) : activeTab === "Contributions" ? (
            <ContributionsView />
          ) : activeTab === "Wallet" ? (
            <WalletView />
          ) : activeTab === "Payouts" ? (
            <PayoutManagementView />
          ) : activeTab === "Disputes" ? (
            selectedDispute ? (
              <ViewDisputeDetail dispute={selectedDispute} onBack={handleBackToDisputes} />
            ) : (
              <DisputesView onViewDispute={handleSelectDispute} />
            )
          ) : activeTab === "Risk & Monitoring" ? (
            <RiskMonitoringView />
          ) : activeTab === "Support" ? (
            selectedSupportRequest ? (
              <ViewSupportDetail request={selectedSupportRequest} onBack={handleBackToSupport} />
            ) : (
              <SupportView onViewRequest={handleSelectSupportRequest} />
            )
          ) : activeTab === "Reports" ? (
            <ReportsView />
          ) : activeTab === "Audit Logs" ? (
            <AuditLogsView />
          ) : activeTab === "Settings" ? (
            <SettingsView />
          ) : (
            /* Standalone Section for other Platform Admin Modules */
            <div className="bg-white rounded-xl p-8 sm:p-12 border border-[#F3EFEA] shadow-xs text-center space-y-4 max-w-xl mx-auto my-12">
              <div className="w-16 h-16 rounded-full bg-[#E6F7EF] text-[#075140] flex items-center justify-center mx-auto shadow-2xs">
                {activeTab === "Contributions" ? (
                  <Coins className="w-8 h-8" />
                ) : activeTab === "Wallet" ? (
                  <Wallet className="w-8 h-8" />
                ) : activeTab === "Payouts" ? (
                  <ArrowUpRight className="w-8 h-8" />
                ) : activeTab === "Disputes" ? (
                  <AlertCircle className="w-8 h-8" />
                ) : activeTab === "Support" ? (
                  <MessageSquare className="w-8 h-8" />
                ) : activeTab === "Risk & Monitoring" ? (
                  <ShieldAlert className="w-8 h-8" />
                ) : activeTab === "Reports" ? (
                  <FileText className="w-8 h-8" />
                ) : activeTab === "Audit Logs" ? (
                  <ShieldCheck className="w-8 h-8" />
                ) : (
                  <Settings className="w-8 h-8" />
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                {activeTab} Management
              </h2>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                Platform administration module for {activeTab}. Configure rules, view logs,
                and supervise all global activity across PallyPot.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleTabChange("Dashboard")}
                  className="px-5 py-2.5 bg-[#075140] hover:bg-[#064335] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

