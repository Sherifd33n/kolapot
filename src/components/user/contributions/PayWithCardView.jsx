import React from "react";
import { ArrowLeft, RefreshCw, Lock } from "lucide-react";

export default function PayWithCardView({
  group,
  contributionAmount,
  cardData,
  setCardData,
  isProcessingPayment,
  onBack,
  onSubmit,
}) {
  const g = group;

  return (
    <div className="space-y-6 animate-tab-content">
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="p-1 -ml-1 text-[#1A2E26] hover:text-[#0B5D4B] transition-colors cursor-pointer inline-flex items-center"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
          Pay with Card
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Enter your card details to complete your contribution.
        </p>
      </div>

      {/* White Card Container */}
      <div className="bg-white rounded-md border border-[#F0EDE6] p-5 space-y-6 shadow-xs max-w-7xl">
        {/* Group Header Info */}
        <div className="flex items-center gap-3.5">
          <div className="w-16 h-16 rounded-lg bg-[#DBDEE0] text-[#000000] font-bold text-lg flex items-center justify-center shrink-0 tracking-wide">
            {g.initial || "DB"}
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-base sm:text-lg font-bold text-[#000000]">
                {g.groupName || "Dream Builders"}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E6F7EC] text-[#0B5D4B]">
                {g.badge || "Ajo"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8798A6] mt-0.5 font-normal">
              Cycle {g.cycle || "10 of 26"}
            </p>
          </div>
        </div>

        {/* Amount to pay row with bottom border */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
          <span className="text-sm sm:text-base text-[#939799] font-medium">
            Amount to pay
          </span>
          <span className="text-xl sm:text-xl font-bold text-[#000000]">
            ₦{contributionAmount || g.rawAmount || "50,000"}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Card number */}
          <div>
            <label className="block text-base font-bold text-[#000000] mb-2">
              Card number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardData.cardNumber}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 16);
                const formatted = val.replace(/(\d{4})/g, "$1 ").trim();
                setCardData({ ...cardData, cardNumber: formatted });
              }}
              className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
              required
            />
          </div>

          {/* Expiry date & CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-bold text-[#000000] mb-2">
                Expiry date
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                value={cardData.expiryDate}
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, "").slice(0, 4);
                  if (val.length > 2) {
                    val = `${val.slice(0, 2)} / ${val.slice(2)}`;
                  }
                  setCardData({ ...cardData, expiryDate: val });
                }}
                className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#000000] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-base font-bold text-[#000000] mb-2">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                maxLength={4}
                value={cardData.cvv}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setCardData({ ...cardData, cvv: val });
                }}
                className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#000000] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
                required
              />
            </div>
          </div>

          {/* Cardholder name */}
          <div>
            <label className="block text-base font-bold text-[#000000] mb-2">
              Cardholder name
            </label>
            <input
              type="text"
              placeholder="Name on card"
              value={cardData.cardholderName}
              onChange={(e) =>
                setCardData({ ...cardData, cardholderName: e.target.value })
              }
              className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm sm:text-base text-[#000000] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isProcessingPayment}
              className="w-[90%]  mx-auto py-4 bg-[#0B5D4B] hover:bg-[#074738] disabled:opacity-75 text-white font-bold rounded-md text-sm sm:text-base transition-colors cursor-pointer shadow-xs active:scale-[0.99] text-center flex items-center justify-center gap-2"
            >
              {isProcessingPayment ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Processing payment...</span>
                </>
              ) : (
                `Pay ₦${contributionAmount || g.rawAmount || "50,000"}`
              )}
            </button>
          </div>

          {/* Security note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#8798A6] pt-1">
            <Lock className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <span className="font-normal text-[#6B7280]">
              Your payment is secure and encrypted.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
