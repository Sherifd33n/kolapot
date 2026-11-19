import React from "react";
import { ArrowLeft, Info, Landmark, Check, Copy } from "lucide-react";

export default function BankTransferView({
  group,
  contributionAmount,
  copiedField,
  handleCopy,
  onBack,
  onComplete,
  onCancel,
}) {
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
          Complete Your Bank Transfer
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Transfer the exact amount below using the account details provided.
        </p>
      </div>

      {/* Yellow Info Banner */}
      <div className="bg-[#FFFF0021] rounded-md p-3.5 sm:p-4.5 flex items-center gap-3">
        <Info className="w-5 h-5 text-[#432A06] shrink-0" />
        <p className="text-xs sm:text-sm text-[#432A06] font-normal leading-relaxed">
          Your contribution will be marked as paid once we confirm your payment.
        </p>
      </div>

      {/* White Account Details Card */}
      <div className="bg-white rounded-md border border-[#F0EDE6] p-5 space-y-6 shadow-xs max-w-7xl">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Landmark className="w-8 h-8 text-[#073529] stroke-[2]" />
          <h3 className="text-base sm:text-lg font-bold text-[#111827]">
            Transfer to this Account
          </h3>
        </div>

        {/* Account Details Box */}
        <div className="bg-[#EDF5F1] rounded-md px-5 py-2 divide-y divide-[#DCE7E1]">
          {/* Bank name */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-[#67746D] font-medium">
              Bank name
            </span>
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-bold text-[#111827]">
                Moniepoint MFB
              </span>
              <button
                type="button"
                onClick={() => handleCopy("Moniepoint MFB", "bankName")}
                className="p-1 text-[#0B5D4B] hover:text-[#073529] transition-colors cursor-pointer rounded"
                title="Copy bank name"
              >
                {copiedField === "bankName" ? (
                  <Check className="w-4 h-4 text-[#0B5D4B]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Account number */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-[#67746D] font-medium">
              Account number
            </span>
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-bold text-[#111827] tracking-wider">
                1234567890
              </span>
              <button
                type="button"
                onClick={() => handleCopy("1234567890", "accountNumber")}
                className="p-1 text-[#0B5D4B] hover:text-[#073529] transition-colors cursor-pointer rounded"
                title="Copy account number"
              >
                {copiedField === "accountNumber" ? (
                  <Check className="w-4 h-4 text-[#0B5D4B]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Account name */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-[1234567890] font-medium">
              Account name
            </span>
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-bold text-[#111827]">
                PallyPot Payments
              </span>
              <button
                type="button"
                onClick={() => handleCopy("PallyPot Payments", "accountName")}
                className="p-1 text-[#0B5D4B] hover:text-[#073529] transition-colors cursor-pointer rounded"
                title="Copy account name"
              >
                {copiedField === "accountName" ? (
                  <Check className="w-4 h-4 text-[#0B5D4B]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Payment reference */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-[#6B7280] font-medium">
              Payment reference
            </span>
            <span className="text-sm sm:text-base font-bold text-[#111827]">
              PPD784629
            </span>
          </div>
        </div>

        {/* I Have Made the Transfer Button */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={onComplete}
            className="w-[90%] flex justify-center mx-auto py-4 bg-[#0B5D4B] hover:bg-[#0B4032] text-white font-semibold rounded-md text-sm sm:text-base transition-colors cursor-pointer shadow-xs active:scale-[0.99] text-center"
          >
            I  Have Made the Transfer
          </button>

          {/* Cancel Contribution Link */}
          <button
            type="button"
            onClick={onCancel}
            className="w-full text-center text-xs sm:text-sm font-semibold text-[#6B7280] hover:text-[#073529] transition-colors cursor-pointer py-1"
          >
            Cancel Contribution
          </button>
        </div>
      </div>
    </div>
  );
}
