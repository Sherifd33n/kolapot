import React from "react";
import { createPortal } from "react-dom";
import { X, Lock, Info } from "lucide-react";

export default function VerifyBankModal({
  selectedBank,
  accountNumber,
  accountName,
  onClose,
  onConfirm,
}) {
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative my-auto animate-tab-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#000000]">Verify Bank Account</h3>
            <p className="text-xs text-[#5B636A] mt-0.5">
              Confirm that this is your account before saving it.
            </p>
          </div>
          <button type="button" onClick={onClose} className="p-1 text-[#9CA3AF] hover:text-[#111827] rounded-md transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Account Details Found Card */}
        <div className="bg-[#FFFF0014] rounded-2xl p-5 text-center space-y-4 my-5">
          <div className="w-14 h-14 rounded-full bg-[#0C6B1430] text-[#0B5D4B] flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-[#111827]">Account Details Found</h4>
          <div className="bg-white rounded-xl p-3.5 space-y-2.5 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#F7F5F0]">
              <span className="text-[#7E7F7D] font-medium">Bank name</span>
              <span className="font-bold text-[#111827] text-right truncate max-w-[200px]">{selectedBank}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-[#F7F5F0]">
              <span className="text-[#7E7F7D] font-medium">Account number</span>
              <span className="font-bold text-[#111827] font-mono">{accountNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7E7F7D] font-medium">Account name</span>
              <span className="font-bold text-[#111827]">{accountName}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#F3F4F6] rounded-xl p-3 flex items-center gap-2.5 mb-5">
          <Info className="w-4 h-4 text-[#6B7280] shrink-0" />
          <p className="text-[11px] text-[#6B7280]">Make sure the account name matches your name before proceeding.</p>
        </div>

        <div className="space-y-2.5">
          <button
            type="button"
            onClick={onConfirm}
            className="w-full bg-[#0B5D4B] hover:bg-[#0B5D4B] text-white font-semibold py-3 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
          >
            Confirm and Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-white hover:bg-[#F9FAF8] text-[#064335] border border-[#064335] font-semibold py-3 rounded-lg text-sm transition-colors cursor-pointer"
          >
            Back
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
