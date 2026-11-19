import React from "react";
import { ArrowLeft, Lock } from "lucide-react";

export default function PayWithCardView({
  depositAmount = "50,000",
  cardData,
  setCardData,
  isProcessing = false,
  onBack,
  onSubmit,
}) {
  return (
    <div className="space-y-4 animate-tab-content pb-10">
      {/* Back Button */}
      <div>
        <button
          type="button"
          onClick={onBack}
          className="p-1 -ml-1 text-[#1A2E26] hover:text-[#0B5D4B] transition-colors cursor-pointer inline-flex items-center"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
          Pay with Card
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Enter your card details to complete your deposit.
        </p>
      </div>

      {/* White Card Container */}
      <div className="bg-white rounded-md border border-[#EBEBEB] p-5 sm:p-6 space-y-6 shadow-xs max-w-7xl">
        {/* Amount Row with bottom border */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
          <span className="text-sm sm:text-base text-[#939799] font-medium">
            Amount
          </span>
          <span className="text-lg sm:text-xl font-bold text-[#000000]">
            ₦{depositAmount || "50,000"}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Card number */}
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#000000] mb-2">
              Card number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardData?.cardNumber || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 16);
                const formatted = val.replace(/(\d{4})/g, "$1 ").trim();
                setCardData((prev) => ({ ...prev, cardNumber: formatted }));
              }}
              className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
              required
            />
          </div>

          {/* Expiry date & CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm sm:text-base font-bold text-[#000000] mb-2">
                Expiry date
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                maxLength={7}
                value={cardData?.expiryDate || ""}
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, "").slice(0, 4);
                  if (val.length >= 3) {
                    val = `${val.slice(0, 2)} / ${val.slice(2)}`;
                  }
                  setCardData((prev) => ({ ...prev, expiryDate: val }));
                }}
                className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-bold text-[#000000] mb-2">
                CVV
              </label>
              <input
                type="password"
                placeholder="123"
                maxLength={4}
                value={cardData?.cvv || ""}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setCardData((prev) => ({ ...prev, cvv: val }));
                }}
                className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
                required
              />
            </div>
          </div>

          {/* Cardholder name */}
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#000000] mb-2">
              Cardholder name
            </label>
            <input
              type="text"
              placeholder="Name on card"
              value={cardData?.cardholderName || ""}
              onChange={(e) =>
                setCardData((prev) => ({
                  ...prev,
                  cardholderName: e.target.value,
                }))
              }
              className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
              required
            />
          </div>

          {/* Pay Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-[90%] mx-auto py-3.5 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-sm rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-60 flex  justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing payment...</span>
                </>
              ) : (
                <span>Pay ₦{depositAmount || "50,000"}</span>
              )}
            </button>
          </div>

          {/* Security note */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#8798A6] font-normal pt-1">
            <Lock className="w-4 h-4 text-[#8798A6]" />
            <span>Your payment is secure and encrypted.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
