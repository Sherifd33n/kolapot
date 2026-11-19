import React from "react";
import { createPortal } from "react-dom";
import { X, Lock, Info, CreditCard, ChevronDown } from "lucide-react";

const nigerianBanks = [
  "Guaranty Trust Bank (GTBank)",
  "Access Bank",
  "Zenith Bank",
  "First Bank of Nigeria",
  "United Bank for Africa (UBA)",
  "Kuda Bank",
  "OPay",
  "PalmPay",
  "Fidelity Bank",
  "Stanbic IBTC Bank",
];

export default function AddBankModal({
  selectedBank,
  setSelectedBank,
  accountNumber,
  setAccountNumber,
  onClose,
  onVerify,
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
            <h3 className="text-lg font-bold text-[#000000]">Add Bank Account</h3>
            <p className="text-xs text-[#5B636A] mt-0.5 font-medium">
              This account will be used to receive your payouts.
            </p>
          </div>
          <button type="button" onClick={onClose} className="p-1 text-[#9CA3AF] hover:text-[#111827] rounded-md transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Security Banner */}
        <div className="bg-[#0C6B1414] border border-[#C2E8D5] rounded-md p-3.5 flex items-center gap-3.5 my-5">
          <div className="w-10 h-10 rounded-full bg-[#0C6B1430] text-[#064335] flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#064335]">Your details are secure.</h4>
            <p className="text-[11px] text-[#717F7C] mt-0.5 leading-snug">
              We use secure and regulated payment providers to keep your information safe.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onVerify} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#000000] block">Bank name</label>
            <div className="relative">
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full appearance-none bg-white border border-[#D1D5DB] rounded-md text-xs sm:text-sm text-[#111827] px-3.5 py-3 pr-9 focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B]"
              >
                {nigerianBanks.map((bank) => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#9CA3AF] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#000000] block">Account number</label>
            <div className="relative flex items-center">
              <input
                type="text"
                maxLength={10}
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
                placeholder="0123456789"
                className="w-full pl-3.5 pr-10 py-3 bg-white border border-[#D1D5DB] rounded-md text-xs sm:text-sm text-[#111827] font-mono placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B]"
              />
              <CreditCard className="w-4 h-4 text-[#9CA3AF] absolute right-3 pointer-events-none" />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#0B5D4B] hover:bg-[#0B5D4B] text-white font-semibold py-3 rounded-lg text-sm transition-colors cursor-pointer shadow-xs mt-2">
            Verify Account
          </button>
        </form>

        <div className="bg-[#69737D21] rounded-xl p-3 flex items-center gap-2.5 mt-4">
          <Info className="w-6 h-6 text-[#69737D] shrink-0" />
          <p className="text-[12px] text-[#69737D]">
            We'll verify the account name to make sure it matches your account.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
