import React from "react";
import { ShieldCheck, CreditCard, Check, ScanFace, ChevronRight } from "lucide-react";

export default function IdentityVerificationSection({
  formData,
  handleInputChange,
  facialVerified,
  handleFacialScan,
}) {
  return (
    <div className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-6 space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-[#064335] text-white flex items-center justify-center shrink-0">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#000000]">
            Identity Verification (KYC)
          </h3>
          <p className="text-xs sm:text-sm text-[#7E7F7D]">
            We use this to verify your identity and keep your account secure.
          </p>
        </div>
      </div>

      {/* BVN (Horizontal row) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
        <label className="text-xs sm:text-sm font-semibold text-[#000000] w-28 sm:w-32 shrink-0">
          BVN
        </label>
        <div className="relative flex-1 flex items-center">
          <CreditCard className="w-5 h-5 text-[#7A8A82] absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            name="bvn"
            maxLength={11}
            value={formData.bvn}
            onChange={handleInputChange}
            placeholder="Enter your 11-digit BVN"
            className="w-full pl-10 pr-3.5 py-3 bg-white border border-[#DCE4E0] rounded-[5px] text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B]"
          />
        </div>
      </div>

      {/* NIN (Horizontal row) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
        <label className="text-xs sm:text-sm font-semibold text-[#000000] w-28 sm:w-32 shrink-0">
          NIN
        </label>
        <div className="relative flex-1 flex items-center">
          <CreditCard className="w-5 h-5 text-[#7A8A82] absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            name="nin"
            maxLength={11}
            value={formData.nin}
            onChange={handleInputChange}
            placeholder="Enter your 11-digit NIN"
            className="w-full pl-10 pr-3.5 py-3 bg-white border border-[#DCE4E0] rounded-[5px] text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B]"
          />
        </div>
      </div>

      {/* Facial verification (Horizontal row) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
        <label className="text-xs sm:text-sm font-semibold text-[#000000] w-28 sm:w-32 shrink-0">
          Facial verification
        </label>
        <button
          type="button"
          onClick={handleFacialScan}
          className={`flex-1 p-3 rounded-md border flex items-center justify-between text-left transition-all ${
            facialVerified
              ? "border-[#2E7D32] bg-[#F1F8F4]"
              : "border-[#DCE4E0] bg-white hover:border-[#0B5D4B]"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                facialVerified
                  ? "bg-[#2E7D32] text-white"
                  : "bg-[#EBF6F1] text-[#064335]"
              }`}
            >
              {facialVerified ? (
                <Check className="w-5 h-5" />
              ) : (
                <ScanFace className="w-5 h-5" />
              )}
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#063127]">
                {facialVerified
                  ? "Facial Biometric Verified ✓"
                  : "Start facial verification"}
              </h4>
              <p className="text-[11px] text-[#7E7F7D]">
                {facialVerified
                  ? "Liveness check passed successfully"
                  : "You will be asked to take a live photo"}
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#7A8A82]" />
        </button>
      </div>
    </div>
  );
}
