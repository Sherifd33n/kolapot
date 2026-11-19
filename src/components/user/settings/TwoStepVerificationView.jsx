import React, { useState, useRef } from "react";
import { ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function TwoStepVerificationView({ onBack, onComplete }) {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);

  const handlePinChange = (val, idx) => {
    // Only allow single digit
    const cleaned = val.replace(/\D/g, "");
    const lastChar = cleaned.slice(-1);

    const nextPin = [...pin];
    nextPin[idx] = lastChar;
    setPin(nextPin);

    // Auto advance to next input if filled
    if (lastChar && idx < 5) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (!pin[idx] && idx > 0) {
        inputRefs.current[idx - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pastedData) return;

    const nextPin = [...pin];
    for (let i = 0; i < 6; i++) {
      nextPin[i] = pastedData[i] || "";
    }
    setPin(nextPin);

    const focusIdx = Math.min(pastedData.length, 5);
    inputRefs.current[focusIdx]?.focus();
  };

  const handleEnable = (e) => {
    e.preventDefault();
    const fullPin = pin.join("");
    if (fullPin.length !== 6) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 90,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#0B5D4B", "#10B981", "#34D399", "#E5A93C"],
        });
      } catch {
        // confetti safe fallback
      }
      setTimeout(() => {
        onComplete?.();
      }, 1600);
    }, 800);
  };

  const isPinComplete = pin.every((d) => d !== "");

  return (
    <div className="space-y-6 animate-tab-content pb-10">
      {/* Back button */}
      <div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A2E26] hover:text-[#0B5D4B] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Settings</span>
        </button>
      </div>

      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]">
          Two-Step Verification
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Add an extra layer of security to your account with a 6-digit PIN.
        </p>
      </div>

      {/* Centered White Card */}
      <div className="bg-white rounded-[10px] p-6 sm:p-10 max-w-full mx-auto shadow-xs border border-[#EBEBEB] text-center mt-4">
        {/* Shield Icon Badge */}
        <div className="w-[110px] h-[110px] rounded-full bg-[#56C17B33] flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="text-[#0B5D4B]" size={60} />
        </div>

        {/* Title & Description */}
        <div className="w-[70%] mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-2">
            Set a Verification PIN
          </h3>
          <p className="text-xs sm:text-sm text-[#7E7F7D] max-w-md mx-auto mb-8 leading-relaxed">
            Create a unique 6-digit PIN you'll use for additional account
            verification, like when you log in on a new device.
          </p>

          {isSuccess ? (
            <div className="py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#E2F4EB] text-[#0B6B40] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-[#1A2E26]">
                Two-Step Verification Enabled!
              </h4>
              <p className="text-xs text-[#7E7F7D]">
                Your 6-digit security PIN has been set successfully. Returning
                to settings...
              </p>
            </div>
          ) : (
            <form onSubmit={handleEnable}>
              {/* PIN Inputs */}
              <div className="text-left mb-6">
                <label className="block text-sm font-semibold text-[#000000] mb-5">
                  Create 6-digit PIN
                </label>
                <div className="flex items-center justify-between gap-2 sm:gap-3 w-[50%]">
                  {pin.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (inputRefs.current[idx] = el)}
                      type="password"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handlePinChange(e.target.value, idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      onPaste={handlePaste}
                      placeholder="—"
                      className="w-11 h-14 sm:w-14 sm:h-16 rounded-xl border border-[#E5E0D6] bg-white text-center text-xl sm:text-2xl font-bold text-[#1A2E26] placeholder-[#B5B5B5] focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/20 outline-none transition-all"
                    />
                  ))}
                </div>
              </div>

              {/* Security Tip Box */}
              <div className="bg-[#30BB9C21] rounded-[8px] p-4 flex items-center gap-3.5 text-left mb-7">
                <div className="text-[#0B6B40] shrink-0 mt-0.5">
                  <ShieldCheck className="" size={50}/>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0B5D4B] mb-0.5">
                    Security Tip
                  </h4>
                  <p className="text-xs text-[#728581] leading-relaxed">
                    For your security, don't reuse your login password, ATM PIN
                    or other transaction PINs. Choose a unique 6-digit PIN that
                    you can remember.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isPinComplete || isSubmitting}
                className="w-full py-3.5 px-4 bg-[#0B5D4B] hover:bg-[#074335] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enabling PIN...</span>
                  </>
                ) : (
                  "Enable Two-Step Verification"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
