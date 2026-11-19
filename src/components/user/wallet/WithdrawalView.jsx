import React, { useState } from "react";
import { ArrowLeft, CreditCard, Lock, ChevronDown, Star } from "lucide-react";
import { IoMdStarOutline } from "react-icons/io";

export default function WithdrawalView({
  balance = 120000,
  withdrawAmount = "50,000",
  setWithdrawAmount,
  isProcessing = false,
  onBack,
  onSubmit,
}) {
  const [bankName, setBankName] = useState("Guaranty Trust Bank (GTBank)");
  const [accountNumber, setAccountNumber] = useState("0123456789");
  const [accountName] = useState("Amara Johnson");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isDefaultBank, setIsDefaultBank] = useState(true);
  const [error, setError] = useState("");

  const presetAmounts = ["10,000", "30,000", "50,000", "100,000", "200,000"];

  const handleAmountChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) {
      setWithdrawAmount("");
      return;
    }
    const formatted = parseInt(raw, 10).toLocaleString();
    setWithdrawAmount(formatted);
    setError("");
  };

  const handleSelectPreset = (preset) => {
    setWithdrawAmount(preset);
    setError("");
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    setOtp("481920"); // pre-fill mock OTP for smooth testing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(withdrawAmount.replace(/,/g, ""), 10);
    if (!num || isNaN(num) || num <= 0) {
      setError("Please enter a valid withdrawal amount.");
      return;
    }
    if (num > balance) {
      setError(
        `Amount exceeds your available balance of ₦${balance.toLocaleString()}.`,
      );
      return;
    }
    setError("");
    onSubmit?.({
      amount: num,
      bankName,
      accountNumber,
      accountName,
      isDefaultBank,
    });
  };

  return (
    <div className="space-y-4 animate-tab-content pb-10">
      {/* Back Button */}
      <div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111827] hover:text-[#0B5D4B] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Wallet</span>
        </button>
      </div>

      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
          Withdraw from Wallet
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Transfer money from your wallet to your bank account.
        </p>
      </div>

      {/* White Container Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md border border-[#F0EDE6] p-5 sm:p-6 space-y-6 shadow-xs max-w-7xl"
      >
        {/* SECTION 1: Withdrawal Details */}
        <div className="space-y-3.5 pb-6 border-b border-[#F0ECE6]">
          <h3 className="text-base font-bold text-[#000000]">
            Withdrawal Details
          </h3>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#000000]">
              Amount (₦)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#6B7280]">
                ₦
              </span>
              <input
                type="text"
                value={withdrawAmount}
                onChange={handleAmountChange}
                placeholder="50,000"
                className="w-full pl-8 pr-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base font-bold text-[#111827] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
                required
              />
            </div>
            <p className="text-xs sm:text-sm text-[#8798A6] font-normal">
              Available balance: ₦{balance.toLocaleString()}
            </p>
            {error && (
              <p className="text-xs text-red-600 font-medium">{error}</p>
            )}
          </div>

          {/* Quick Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
            {presetAmounts.map((preset) => {
              const isSelected = withdrawAmount === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`py-2 px-3 rounded-md text-xs sm:text-sm font-bold border transition-all text-center cursor-pointer ${
                    isSelected
                      ? "border-[#0B5D4B] bg-[#F2FAF7] text-[#0B5D4B] shadow-xs"
                      : "border-[#E5E0D6] bg-white text-[#1A2E26] hover:border-[#0B5D4B]/50 hover:bg-[#FAF9F6]"
                  }`}
                >
                  ₦{preset}
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: Withdrawal Bank Account */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-[#000000]">
            Withdrawal Bank Account
          </h3>

          {/* Bank Name Dropdown */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-[#000000]">
              Bank name
            </label>
            <div className="relative">
              <select
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm text-[#111827] appearance-none focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all cursor-pointer"
              >
                <option value="Guaranty Trust Bank (GTBank)">
                  Select Bank
                </option>
                <option value="Guaranty Trust Bank (GTBank)">
                  Guaranty Trust Bank (GTBank)
                </option>
                <option value="Access Bank">Access Bank</option>
                <option value="Zenith Bank">Zenith Bank</option>
                <option value="First Bank of Nigeria">
                  First Bank of Nigeria
                </option>
                <option value="Moniepoint MFB">Moniepoint MFB</option>
                <option value="Kuda Bank">Kuda Bank</option>
                <option value="United Bank for Africa (UBA)">
                  United Bank for Africa (UBA)
                </option>
                <option value="OPay">OPay</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Account Number */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-[#000000]">
              Account number
            </label>
            <div className="relative">
              <input
                type="text"
                maxLength={10}
                value={accountNumber}
                onChange={(e) =>
                  setAccountNumber(
                    e.target.value.replace(/\D/g, "").slice(0, 10),
                  )
                }
                placeholder="0123456789"
                className="w-full px-3.5 py-2.5 pr-10 bg-white border border-[#D1D5DB] rounded-md text-sm text-[#111827] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all font-mono tracking-wider"
                required
              />
              <CreditCard className="w-5 h-5 text-[#9CA3AF] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Account Name */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-[#000000]">
              Account name
            </label>
            <input
              type="text"
              value={accountName}
              disabled
              className="w-full px-3.5 py-2.5 bg-[#F9FAF8] border border-[#E5E7EB] rounded-md text-sm text-[#4B5563] cursor-not-allowed"
            />
          </div>

          {/* OTP */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-[#000000]">
              OTP
            </label>
            <div className="flex gap-2.5 items-center">
              <div className="relative flex-1">
                <Lock className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  placeholder="Enter 6-digit OTP"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm text-[#111827] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all font-mono"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleSendOtp}
                className="px-4 sm:px-5 py-2.5 border border-[#0B5D4B] bg-[#0C6B1414] text-[#0B5D4B] hover:bg-[#F2FAF7] font-semibold text-xs sm:text-sm rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              >
                {otpSent ? "Resend OTP" : "Send OTP"}
              </button>
            </div>
            {otpSent && (
              <p className="text-xs text-[#0B5D4B]">
                OTP has been sent to your registered phone number (•••• 4567).
              </p>
            )}
          </div>

          {/* Set as default withdrawal bank banner */}
          <div className="bg-[#0C6B1414] border border-[#0B5D4B] rounded-md p-3.5 sm:p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-6">
              <div className="w-9 h-9 rounded-full bg-[#65D76F30] flex items-center justify-center text-[#0B5D4B] shrink-0">
                <IoMdStarOutline className="w-6 h-6 text-[#23D135]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#000000]">
                  Set as default withdrawal bank
                </h4>
                <p className="text-[11px] sm:text-xs text-[#66706A] mt-0.5">
                  This will be used for future withdrawals. You can change it
                  anytime.
                </p>
              </div>
            </div>

            {/* Switch Toggle */}
            <button
              type="button"
              role="switch"
              aria-checked={isDefaultBank}
              onClick={() => setIsDefaultBank(!isDefaultBank)}
              className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 shrink-0 ${
                isDefaultBank ? "bg-[#0B5D4B]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-200 ${
                  isDefaultBank ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Withdrawal Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isProcessing}
            className="w-[90%] mx-auto py-4 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-base rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processing withdrawal...</span>
              </>
            ) : (
              <span>Withdrawal</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
