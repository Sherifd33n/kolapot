import React from "react";
import { ArrowLeft, Landmark, CreditCard } from "lucide-react";
import { RiBankLine } from "react-icons/ri";

export default function AddFundsView({
  depositAmount,
  handleAmountChange,
  paymentMethod,
  setPaymentMethod,
  onBack,
  onContinue,
}) {
  return (
    <div className="space-y-6 animate-tab-content pb-10 max-w-4xl">
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
          Add Money to Wallet
        </h2>
        <p className="text-sm text-[#8798A6] mt-1 font-normal">
          Add money to your wallet to pay for contributions or keep a balance
          for future use.
        </p>
      </div>

      {/* 1. Enter Amount Card */}
      <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-4">
        <div>
          <h3 className="text-base font-bold text-[#000000]">
            1. Enter Amount
          </h3>
          <p className="text-sm text-[#878889] mt-0.5">
            Enter the amount you want to add to your wallet.
          </p>
        </div>

        {/* Amount Input */}
        <div className="relative">
          <div className="flex items-center w-full bg-white border border-[#D1D5DB] rounded-md px-4 py-2.5 focus-within:border-[#0B5D4B] focus-within:ring-1 focus-within:ring-[#0B5D4B] transition-all">
            <span className="text-base sm:text-lg font-bold text-[#6B7280] mr-2">
              ₦
            </span>
            <input
              type="text"
              value={depositAmount}
              onChange={handleAmountChange}
              placeholder="50,000"
              className="w-full text-base sm:text-lg font-bold text-[#111827] focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Preset Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
          {["10,000", "30,000", "50,000", "100,000", "200,000"].map(
            (preset) => {
              const isSelected = depositAmount === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() =>
                    handleAmountChange({ target: { value: preset } })
                  }
                  className={`py-2.5 px-3 rounded-md text-xs sm:text-sm font-semibold border transition-all text-center cursor-pointer ${
                    isSelected
                      ? "border-[#0B5D4B] bg-[#F2FAF7] text-[#0B5D4B] shadow-xs"
                      : "border-[#E5E0D6] bg-white text-[#1A2E26] hover:border-[#0B5D4B]/50 hover:bg-[#FAF9F6]"
                  }`}
                >
                  ₦{preset}
                </button>
              );
            },
          )}
        </div>
      </div>

      {/* 2. Select Payment Method Card */}
      <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-4">
        <div>
          <h3 className="text-base font-bold text-[#000000]">
            2. Select Payment Method
          </h3>
          <p className="text-sm text-[#878889] mt-0.5">
            Choose how you would like to fund your wallet.
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Option 1: Bank Transfer */}
          <div
            onClick={() => setPaymentMethod("bank-transfer")}
            className={`p-4 rounded-md border flex  cursor-pointer transition-all ${
              paymentMethod === "bank-transfer"
                ? "border-[#0B5D4B] bg-[#F7FBF9] shadow-xs"
                : "border-[#E5E7EB] hover:border-[#D1D5DB] bg-white"
            }`}
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#D1D5DB]">
              {paymentMethod === "bank-transfer" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#0B5D4B]" />
              )}
            </div>
            <div className="gap-1">
              <div className="w-10 h-10 rounded-full text-[#0B5D4B] flex items-center justify-center shrink-0">
                <RiBankLine className="w-7 h-7" />
              </div>

              <h4 className="text-sm font-bold text-[#111827]">
                Bank Transfer
              </h4>
              <p className="text-xs text-[#6B7280]">
                Transfer directly to a dedicated virtual bank account.
              </p>
            </div>
          </div>

          {/* Option 2: Pay with Card */}
          <div
            onClick={() => setPaymentMethod("card-payment")}
            className={`p-4 rounded-md border flex  cursor-pointer transition-all ${
              paymentMethod === "card-payment"
                ? "border-[#0B5D4B] bg-[#F7FBF9] shadow-xs"
                : "border-[#E5E7EB] hover:border-[#D1D5DB] bg-white"
            }`}
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#D1D5DB]">
              {paymentMethod === "card-payment" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#0B5D4B]" />
              )}
            </div>
            <div className="gap-1">
              <div className="w-10 h-10 rounded-full text-[#0B5D4B] flex items-center justify-center shrink-0">
                <CreditCard className="w-7 h-7" />
              </div>

              <h4 className="text-sm font-bold text-[#111827]">Debit Card</h4>
              <p className="text-xs text-[#6B7280]">
                Pay with your debit card (Visa, Mastercard, Verve).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue to Deposit Action Button */}
      <div>
        <button
          type="button"
          onClick={onContinue}
          className="w-[90%] flex justify-center mx-auto py-3.5 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-sm rounded-md transition-colors cursor-pointer shadow-xs"
        >
          Continue to Deposit
        </button>
      </div>
    </div>
  );
}
