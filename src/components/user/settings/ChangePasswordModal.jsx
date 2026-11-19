import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function ChangePasswordModal({ onClose, onSuccess }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!currentPassword) {
      setError("Please enter your current password.");
      return;
    }
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsDone(true);
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 1200);
    }, 800);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-7 shadow-2xl relative my-auto animate-tab-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#EAE5DC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E2ECE7] text-[#134B3D] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A2E26]">Change Password</h3>
              <p className="text-xs text-[#7E7F7D]">Update your account credentials</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#7E7F7D] hover:text-[#1A2E26] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDone ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#E2F4EB] text-[#0B6B40] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#1A2E26]">Password Updated</h4>
            <p className="text-xs text-[#7E7F7D]">
              Your password has been changed successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {error && (
              <div className="p-3 text-xs bg-red-50 text-red-600 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            {/* Current Password */}
            <div>
              <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E7F7D] hover:text-[#1A2E26]"
                >
                  {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E7F7D] hover:text-[#1A2E26]"
                >
                  {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E7F7D] hover:text-[#1A2E26]"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#7E7F7D] hover:text-[#1A2E26] rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-5 py-2.5 bg-[#0B5D4B] hover:bg-[#074335] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isSaving ? "Saving..." : "Update Password"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}

