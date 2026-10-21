import React from "react";
import { ArrowLeft, Info, Landmark, Check, Copy } from "lucide-react";
import { RiBankLine } from "react-icons/ri";

export default function BankTransferView({
  depositAmount = "50,000",
  paymentReference = "PPD784629",
  bankDetails = {
    bankName: "Moniepoint MFB",
    accountNumber: "1234567890",
    accountName: "PallyPot Payments",
  },
  copiedField,
  handleCopy,
  isProcessing = false,
  onBack,
  onComplete,
  onCancel,
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
          Complete Your Bank Transfer
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Transfer the amount you are sending below using the account details provided.
        </p>
      </div>

      {/* Yellow Info Banner */}
      <div className="bg-[#FFFF0021] rounded-md p-3.5 sm:p-4.5 flex items-center gap-3">
        <Info className="w-6 h-6 text-[#432A06] shrink-0" />
        <p className="text-xs sm:text-sm text-[#432A06] font-normal leading-relaxed">
          Your wallet will be credited once we confirm your payment.
        </p>
      </div>

      {/* White Account Details Card */}
      <div className="bg-white rounded-md border border-[#F0EDE6] p-5 sm:p-6 space-y-6 shadow-xs max-w-7xl">
        {/* Header */}
        <div className="flex items-center gap-3">
          <RiBankLine className="w-8 h-8 text-[#064335]" />
          <h3 className="text-base sm:text-lg font-bold text-[#000000]">
            Transfer to this Account
          </h3>
        </div>

        {/* Account Details Box */}
        <div className="bg-[#0C6B1414] rounded-md px-5 py-2 divide-y divide-[#DCE7E1]">
          {/* Bank name */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-[#67746D] font-medium">
              Bank name
            </span>
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-bold text-[#111827]">
                {bankDetails.bankName}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(bankDetails.bankName, "bankName")}
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
                {bankDetails.accountNumber}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(bankDetails.accountNumber, "accountNumber")}
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
            <span className="text-sm sm:text-base text-[#67746D] font-medium">
              Account name
            </span>
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-bold text-[#111827]">
                {bankDetails.accountName}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(bankDetails.accountName, "accountName")}
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
            <span className="text-sm sm:text-base text-[#67746D] font-medium">
              Payment reference
            </span>
            <span className="text-sm sm:text-base font-bold text-[#111827]">
              {paymentReference}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            disabled={isProcessing}
            onClick={onComplete}
            className="w-[90%] mx-auto py-3.5 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-sm rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-60 flex justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Confirming payment...</span>
              </>
            ) : (
              <span>I Have Made the Transfer</span>
            )}
          </button>

          <button
            type="button"
            onClick={onCancel || onBack}
            className="w-full text-center text-sm font-semibold text-[#67746D] hover:text-[#111827] transition-colors cursor-pointer py-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
