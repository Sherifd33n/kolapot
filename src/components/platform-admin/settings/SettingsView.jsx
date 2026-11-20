import React, { useState, useRef } from "react";
import {
  Search,
  User,
  Edit2,
  Upload,
  Camera,
  ShieldCheck,
  Lock,
  Bell,
  Megaphone,
  MessageSquare,
  Database,
  CheckCircle2,
  X,
} from "lucide-react";

export default function SettingsView() {
  const [fullName, setFullName] = useState("Jane Doe");
  const [email, setEmail] = useState("admin@pallypot.com");
  const [isEditing, setIsEditing] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setToastMessage("File size exceeds 5MB limit.");
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatarUrl(event.target.result);
      setToastMessage("Profile photo updated successfully.");
      setTimeout(() => setToastMessage(null), 3000);
    };
    reader.readAsDataURL(file);
  };

  // Toggle states
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [operationalAlerts, setOperationalAlerts] = useState(true);
  const [disputeUpdates, setDisputeUpdates] = useState(true);
  const [financialAlerts, setFinancialAlerts] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);

  // Password Modal State
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveProfile = () => {
    setIsEditing(false);
    setToastMessage("Admin profile updated successfully.");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setShowPasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setToastMessage("Password changed successfully.");
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="bg-[#EAF7EE] border border-[#0B6B40]/30 text-[#0B6B40] px-4 py-3 rounded-xl flex items-center justify-between text-sm shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0B6B40]" />
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#0B6B40] hover:text-[#064335]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
            Settings
          </h1>
          <p className="text-sm text-[#737373] mt-1">
            Manage your administrator account, security and notification preferences.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search users, groups, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B] shadow-2xs"
          />
        </div>
      </div>

      {/* 1. ADMIN PROFILE CARD */}
      <div className="bg-white rounded-xl p-6 border border-[#F3EFEA] shadow-xs space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EAF7EE] text-[#0B6B40] flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#111827]">
                Admin Profile
              </h2>
              <p className="text-xs text-[#737373]">
                View and update your administrator details.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (isEditing) {
                handleSaveProfile();
              } else {
                setIsEditing(true);
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B5D4B] hover:text-[#074638] transition-colors cursor-pointer"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>{isEditing ? "Save Profile" : "Edit Profile"}</span>
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#111827] mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              disabled={!isEditing}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] disabled:bg-gray-50 text-xs text-[#111827] focus:bg-white focus:outline-none focus:border-[#087F5B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#111827] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              disabled={!isEditing}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] disabled:bg-gray-50 text-xs text-[#111827] focus:bg-white focus:outline-none focus:border-[#087F5B] transition-colors"
            />
          </div>
        </div>

        {/* Avatar & Photo Action */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
          {/* Hidden file inputs */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/png, image/jpeg, image/jpg"
            className="hidden"
          />
          <input
            type="file"
            ref={cameraInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            capture="user"
            className="hidden"
          />

          <div className="relative w-16 h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center shrink-0 border border-gray-200 overflow-hidden">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Admin avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-8 h-8 text-[#9CA3AF]" />
            )}
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#0B5D4B] text-white flex items-center justify-center shadow-xs">
              <Camera className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B]/10 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload photo</span>
              </button>
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="px-4 py-2 border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B]/10 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Take a photo</span>
              </button>
            </div>
            <p className="text-[11px] text-[#737373]">JPG or PNG. Max 5MB.</p>
          </div>
        </div>
      </div>

      {/* 2. ACCOUNT & SECURITY CARD */}
      <div className="bg-white rounded-xl p-6 border border-[#F3EFEA] shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#EAF7EE] text-[#0B6B40] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#111827]">
              Account & Security
            </h2>
            <p className="text-xs text-[#737373]">
              Keep your account secure and control how you sign in.
            </p>
          </div>
        </div>

        <div className="space-y-4 divide-y divide-[#F3EFEA]">
          {/* Change Password Item */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                  Change Password
                </h3>
                <p className="text-xs text-[#737373]">
                  Update your account password regularly.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPasswordModal(true)}
              className="px-4 py-2 border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B]/10 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Change Password
            </button>
          </div>

          {/* Login Alerts Item */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] flex items-center justify-center shrink-0 mt-0.5">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                  Login Alerts
                </h3>
                <p className="text-xs text-[#737373]">
                  Get notified when your account is signed in from a new device or location.
                </p>
              </div>
            </div>

            {/* Switch Toggle */}
            <button
              type="button"
              onClick={() => setLoginAlerts(!loginAlerts)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                loginAlerts ? "bg-[#0B5D4B]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  loginAlerts ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* 3. NOTIFICATION PREFERENCES CARD */}
      <div className="bg-white rounded-xl p-6 border border-[#F3EFEA] shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#EAF7EE] text-[#0B6B40] flex items-center justify-center shrink-0">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#111827]">
              Notification Preferences
            </h2>
            <p className="text-xs text-[#737373]">
              Choose which platform updates you want to receive.
            </p>
          </div>
        </div>

        <div className="space-y-4 divide-y divide-[#F3EFEA]">
          {/* 1. Operational Alerts */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] flex items-center justify-center shrink-0 mt-0.5">
                <Megaphone className="w-4 h-4 text-[#0B5D4B]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                  Operational Alerts
                </h3>
                <p className="text-xs text-[#737373]">
                  Important platform updates and system notices (e.g., downtime, maintenance).
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOperationalAlerts(!operationalAlerts)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                operationalAlerts ? "bg-[#0B5D4B]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  operationalAlerts ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* 2. Dispute Updates */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare className="w-4 h-4 text-[#0B5D4B]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                  Dispute Updates
                </h3>
                <p className="text-xs text-[#737373]">
                  Notifications on new disputes and resolutions.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setDisputeUpdates(!disputeUpdates)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                disputeUpdates ? "bg-[#0B5D4B]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  disputeUpdates ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* 3. Financial Activity Alerts */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] flex items-center justify-center shrink-0 mt-0.5">
                <Database className="w-4 h-4 text-[#0B5D4B]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                  Financial Activity Alerts
                </h3>
                <p className="text-xs text-[#737373]">
                  Updates on high-value contributions, payouts and wallet activities.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFinancialAlerts(!financialAlerts)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                financialAlerts ? "bg-[#0B5D4B]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  financialAlerts ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* 4. Security / Login Alerts */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-[#0B5D4B]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                  Security / Login Alerts
                </h3>
                <p className="text-xs text-[#737373]">
                  Alerts for new logins, password changes and other security events.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSecurityAlerts(!securityAlerts)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                securityAlerts ? "bg-[#0B5D4B]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  securityAlerts ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

