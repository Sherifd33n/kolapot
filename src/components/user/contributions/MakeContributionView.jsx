import React from "react";
import { ArrowLeft, Wallet, CreditCard, Landmark, Lock } from "lucide-react";
import { CiRepeat } from "react-icons/ci";

export default function MakeContributionView({
  group,
  paymentMethod,
  setPaymentMethod,
  contributionAmount,
  setContributionAmount,
  onBack,
  onSubmit,
}) {
  const g = group;

  return (
    <div className="space-y-6 animate-tab-content">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A2E26] hover:text-[#0D5C46] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Contributions</span>
      </button>

      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
          Make Contribution
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Make your payment to keep the group on track.
        </p>
      </div>

      {/* Group Summary Card */}
      <div className="bg-white rounded-md border border-[#F0EDE6] shadow-xs p-3 space-y-5">
        {/* Group Info Row */}
        <div className="bg-[#0C6B1414] p-3 rounded-md">
          <div className="flex items-center gap-4 ">
            <div className="w-16 h-16 rounded-md bg-[#DBDEE0] text-[#000000] font-bold text-2xl flex items-center justify-center shrink-0 tracking-wide select-none">
              {g.initial}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#000000]">
                  {g.groupName}
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#D4F1E4] text-[#0B5D4B]">
                  {g.badge}
                </span>
              </div>
              <p className="text-xs text-[#8798A6] mt-0.5 font-normal">
                Save together for a brighter future.
              </p>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-[#CBD2D2] my-4" />

          {/* 3 Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Contribution Amount */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center shrink-0 text-[#6B7280]">
                <Wallet className="w-7 h-7 text-[#000000] stroke-[1.5]" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-bold text-[#111827] block leading-tight">
                  {g.amount}
                </span>
                <span className="text-[11px] text-[#8798A6] font-normal block mt-0.5">
                  Contribution amount
                </span>
              </div>
            </div>

            {/* Cycle */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center shrink-0 text-[#6B7280]">
                <CiRepeat className="w-7 h-7 text-[#000000]" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-bold text-[#111827] block leading-tight">
                  {g.cycle}
                </span>
                <span className="text-[11px] text-[#8798A6] font-normal block mt-0.5">
                  Cycle
                </span>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center shrink-0 text-[#6B7280]">
                <Wallet className="w-6 h-6 text-[#000000]" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-bold text-[#111827] block leading-tight">
                  {g.dueDateShort}
                </span>
                <span className="text-[11px] text-[#8798A6] font-normal block mt-0.5">
                  Due date
                </span>
                <span className="text-[11px] text-[#8798A6] font-normal block">
                  {g.dueDaysText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Payment Method */}
      <div className="space-y-3 bg-white p-3 rounded-md">
        <h3 className="text-base sm:text-lg font-bold text-[#111827]">
          Choose Payment Method
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Wallet Balance */}
          <label
            className={`flex flex-col gap-3 p-2 rounded-md border-2 cursor-pointer transition-all ${
              paymentMethod === "wallet"
                ? "border-[#0B5D4B] bg-[#F0FAF5]"
                : "border-[#E5E0D6] bg-white hover:border-[#0B5D4B]/40"
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="wallet"
                checked={paymentMethod === "wallet"}
                onChange={() => setPaymentMethod("wallet")}
                className="w-4 h-4 accent-[#0B5D4B] cursor-pointer"
              />
              <div className="flex items-center justify-center shrink-0 text-[#064335] bg-white  mt-3">
                <Wallet className="w-7 h-7" />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-[#111827] block">
                Wallet Balance
              </span>
              <span className="text-[11px] text-[#8798A6] block mt-0.5">
                Available balance
              </span>
              <span className="text-sm font-bold text-[#0B5D4B] block mt-0.5">
                ₦120,000
              </span>
            </div>
          </label>

          {/* Bank Transfer */}
          <label
            className={`flex flex-col gap-3 p-2 rounded-md border-2 cursor-pointer transition-all ${
              paymentMethod === "bank"
                ? "border-[#0B5D4B] bg-[#F0FAF5]"
                : "border-[#E5E0D6] bg-white hover:border-[#0B5D4B]/40"
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="w-4 h-4 accent-[#0B5D4B] cursor-pointer"
              />
              <div className="flex items-center justify-center shrink-0 text-[#064335] bg-white mt-3">
                <Landmark className="w-7 h-7" />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-[#111827] block">
                Bank Transfer
              </span>
              <span className="text-[11px] text-[#8798A6] leading-relaxed block mt-0.5">
                Transfer from your bank using your account details.
              </span>
            </div>
          </label>

          {/* Card Payment */}
          <label
            className={`flex flex-col gap-3 p-2 rounded-md border-2 cursor-pointer transition-all ${
              paymentMethod === "card"
                ? "border-[#0B5D4B] bg-[#F0FAF5]"
                : "border-[#E5E0D6] bg-white hover:border-[#0B5D4B]/40"
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="w-4 h-4 accent-[#0B5D4B] cursor-pointer"
              />
              <div className="flex items-center justify-center shrink-0 text-[#064335] bg-white mt-3">
                <CreditCard className="w-7 h-7" />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-[#111827] block">
                Card Payment
              </span>
              <span className="text-[11px] text-[#8798A6] leading-relaxed block mt-0.5">
                Pay with your debit card (Visa, Mastercard, Verve).
              </span>
            </div>
          </label>
        </div>

        {/* Contribution Amount */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-[#111827] mt-5">
            Contribution Amount
          </h3>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-[#111827]">
              ₦
            </span>
            <input
              type="text"
              value={contributionAmount}
              onChange={(e) => setContributionAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-4 bg-white border border-[#D1D5DB] rounded-lg text-base font-semibold text-[#111827] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
            />
          </div>

          {/* Notice Banner */}
          <div className="bg-[#FFFF0021] rounded-lg p-3.5 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#432A06] flex items-center justify-center shrink-0 text-[#432A06] font-serif font-bold text-sm leading-none">
              i
            </div>
            <p className="text-xs sm:text-sm text-[#432A06] font-normal leading-relaxed">
              Please make the exact amount set by the group admin to avoid
              delays.
            </p>
          </div>
        </div>
      </div>

      {/* Make Contribution Button + Security note */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={onSubmit}
          className="w-[90%] mx-auto justify-center flex py-4 bg-[#0B5D4B] hover:bg-[#094534] text-white font-semibold rounded-lg text-base transition-colors cursor-pointer active:scale-[0.99] shadow-xs text-center"
        >
          Make Contribution
        </button>
        <div className="flex items-center justify-center gap-2 text-[#9CA3AF]">
          <Lock className="w-3.5 h-3.5" />
          <span className="text-xs font-normal">
            Your payment is secure and encrypted.
          </span>
        </div>
      </div>
    </div>
  );
}
