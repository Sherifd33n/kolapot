import React, { useState } from "react";
import {
  Lock,
  KeyRound,
  Shield,
  ChevronRight,
  Bell,
  User,
  LogOut,
  Trash2,
  Check,
} from "lucide-react";
import TwoStepVerificationView from "./settings/TwoStepVerificationView";
import ChangePasswordModal from "./settings/ChangePasswordModal";
import DeleteAccountModal from "./settings/DeleteAccountModal";

export default function Settings({ onNavigate }) {
  // view: "main" | "two-step"
  const [view, setView] = useState("main");

  // Modals state
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Notification toggles state (all true by default as shown in reference)
  const [notificationPreferences, setNotificationPreferences] = useState({
    groupUpdates: true,
    contributions: true,
    payouts: true,
    walletActivity: true,
    accountSecurity: true,
  });

  const togglePreference = (key) => {
    setNotificationPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of Pallypot?")) {
      onNavigate?.("home");
    }
  };

  // If in Two-Step Verification sub-view (Image 2)
  if (view === "two-step") {
    return (
      <TwoStepVerificationView
        onBack={() => setView("main")}
        onComplete={() => {
          setView("main");
          showToast("Two-step verification has been enabled.");
        }}
      />
    );
  }

  // Main Settings View (Image 1)
  return (
    <div className="space-y-6 animate-tab-content pb-12 max-w-5xl">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B5D4B] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-xs sm:text-sm animate-bounce">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#1A2E26]">
          Settings
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          Manage your account, security and notification preferences.
        </p>
      </div>

      <div className="space-y-5">
        {/* CARD 1: Account & Security */}
        <section className="bg-[#F8F5EE] rounded-[12px] p-5 sm:p-7">
          {/* Card Header */}
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#56C17B33] text-[#134B3D] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-[#134B3D]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1A2E26]">
                Account & Security
              </h3>
              <p className="text-xs sm:text-sm text-[#7E7F7D]">
                Keep your account safe and secure.
              </p>
            </div>
          </div>

          {/* List items */}
          <div className="divide-y divide-[#EAE5DC] pt-2">
            {/* Change Password */}
            <button
              type="button"
              onClick={() => setChangePasswordOpen(true)}
              className="w-full flex items-center justify-between py-4 text-left group transition-colors hover:bg-black/[0.015] px-1 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <KeyRound className="w-4 h-4 text-[#134B3D]" />
                <span className="text-sm font-semibold text-[#1A2E26]">
                  Change Password
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#7E7F7D] group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Two-Factor Authentication */}
            <button
              type="button"
              onClick={() => setView("two-step")}
              className="w-full flex items-center justify-between py-4 text-left group transition-colors hover:bg-black/[0.015] px-1 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#134B3D]" />
                <span className="text-sm font-semibold text-[#1A2E26]">
                  Two-Factor Authentication
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#7E7F7D] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </section>

        {/* CARD 2: Notification Preferences */}
        <section className="bg-[#F6F3EB] rounded-[12px] p-5 sm:p-7">
          {/* Card Header */}
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#56C17B33] text-[#134B3D] flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-[#134B3D]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1A2E26]">
                Notification Preferences
              </h3>
              <p className="text-xs sm:text-sm text-[#7E7F7D]">
                Choose what you want to be notified about.
              </p>
            </div>
          </div>

          {/* Toggle List */}
          <div className="divide-y divide-[#EAE5DC] pt-2">
            {/* Group Updates */}
            <div className="flex items-center justify-between py-3.5 px-1">
              <span className="text-sm font-semibold text-[#1A2E26]">
                Group Updates
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={notificationPreferences.groupUpdates}
                onClick={() => togglePreference("groupUpdates")}
                className={`relative inline-flex items-center h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  notificationPreferences.groupUpdates
                    ? "bg-[#0B5D4B]"
                    : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    notificationPreferences.groupUpdates
                      ? "translate-x-5"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Contributions */}
            <div className="flex items-center justify-between py-3.5 px-1">
              <span className="text-sm font-semibold text-[#1A2E26]">
                Contributions
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={notificationPreferences.contributions}
                onClick={() => togglePreference("contributions")}
                className={`relative inline-flex items-center h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  notificationPreferences.contributions
                    ? "bg-[#0B5D4B]"
                    : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    notificationPreferences.contributions
                      ? "translate-x-5"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Payouts */}
            <div className="flex items-center justify-between py-3.5 px-1">
              <span className="text-sm font-semibold text-[#1A2E26]">
                Payouts
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={notificationPreferences.payouts}
                onClick={() => togglePreference("payouts")}
                className={`relative inline-flex items-center h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  notificationPreferences.payouts
                    ? "bg-[#0B5D4B]"
                    : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    notificationPreferences.payouts
                      ? "translate-x-5"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Wallet Activity */}
            <div className="flex items-center justify-between py-3.5 px-1">
              <span className="text-sm font-semibold text-[#1A2E26]">
                Wallet Activity
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={notificationPreferences.walletActivity}
                onClick={() => togglePreference("walletActivity")}
                className={`relative inline-flex items-center h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  notificationPreferences.walletActivity
                    ? "bg-[#0B5D4B]"
                    : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    notificationPreferences.walletActivity
                      ? "translate-x-5"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Account & Security */}
            <div className="flex items-center justify-between py-3.5 px-1">
              <span className="text-sm font-semibold text-[#1A2E26]">
                Account & Security
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={notificationPreferences.accountSecurity}
                onClick={() => togglePreference("accountSecurity")}
                className={`relative inline-flex items-center h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  notificationPreferences.accountSecurity
                    ? "bg-[#0B5D4B]"
                    : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    notificationPreferences.accountSecurity
                      ? "translate-x-5"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* CARD 3: Account Management */}
        <section className="bg-[#F6F3EB] rounded-[12px] p-5 sm:p-7">
          {/* Card Header */}
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#56C17B33] text-[#134B3D] flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-[#134B3D]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1A2E26]">
                Account Management
              </h3>
              <p className="text-xs sm:text-sm text-[#7E7F7D]">
                Manage your account on Pallypot.
              </p>
            </div>
          </div>

          {/* List items */}
          <div className="divide-y divide-[#EAE5DC] pt-2">
            {/* Log Out */}
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-between py-4 text-left group transition-colors hover:bg-black/[0.015] px-1 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <LogOut className="w-4 h-4 text-[#1A2E26]" />
                <span className="text-sm font-semibold text-[#1A2E26]">
                  Log Out
                </span>
              </div>
            </button>

            {/* Delete Account */}
            <button
              type="button"
              onClick={() => setDeleteAccountOpen(true)}
              className="w-full flex items-center justify-between py-4 text-left group transition-colors hover:bg-red-500/[0.03] px-1 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Trash2 className="w-4 h-4 text-[#E02424]" />
                <span className="text-sm font-semibold text-[#E02424]">
                  Delete Account
                </span>
              </div>
            </button>
          </div>
        </section>
      </div>

      {/* Change Password Modal */}
      {changePasswordOpen && (
        <ChangePasswordModal
          onClose={() => setChangePasswordOpen(false)}
          onSuccess={() => showToast("Password updated successfully.")}
        />
      )}

      {/* Delete Account Modal */}
      {deleteAccountOpen && (
        <DeleteAccountModal
          onClose={() => setDeleteAccountOpen(false)}
          onConfirm={() => {
            setDeleteAccountOpen(false);
            onNavigate?.("home");
          }}
        />
      )}
    </div>
  );
}

