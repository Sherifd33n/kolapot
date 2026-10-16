import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import BotanicalFrame from "./BotanicalFrame";

export default function VerifyAccount({
  onNavigate,
  phoneNumber = "+234 XXX XXX 1234",
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendTimer, setResendTimer] = useState(45);
  const [resendMessage, setResendMessage] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();

    // Timer countdown
    const interval = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      // Handle paste
      const pastedDigits = value.replace(/\D/g, "").slice(0, 6).split("");
      const newOtp = [...otp];
      pastedDigits.forEach((digit, i) => {
        newOtp[i] = digit;
      });
      setOtp(newOtp);
      const nextFocus = Math.min(pastedDigits.length, 5);
      inputRefs.current[nextFocus]?.focus();
      return;
    }

    const digit = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Auto move to next input if digit entered
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    setResendTimer(45);
    setResendMessage("A new verification code has been sent!");
    setTimeout(() => setResendMessage(""), 4000);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onNavigate?.("complete-profile");
    }, 600);
  };

  return (
    <BotanicalFrame>
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Brand Logo at Top */}
        <div className="mb-6 sm:mb-8 text-center">
          <button
            onClick={() => onNavigate?.("home")}
            className="group inline-flex items-center gap-2 focus:outline-none"
            title="Go to home"
          >
            <img
              src="/logo-2.png"
              alt="PallyPot Logo"
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105 drop-shadow-sm"
            />
          </button>
        </div>

        {/* Verification Card */}
        <div className="w-full max-w-[500px] bg-white rounded-3xl border border-[#EBE6DD] p-5 sm:p-8 md:p-12 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)] text-center animate-fadeIn">
          {/* Section Kicker */}
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#0B5D4B] block mb-2">
            VERIFY YOUR ACCOUNT
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-['Salsa',serif] text-[#000000] font-normal tracking-tight">
            Confirm your details
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#555960] mt-2 font-normal leading-relaxed">
            We've sent a verification code to
            <br />
            <span className="font-semibold text-[#555960]">{phoneNumber}</span>
          </p>

          {/* Code Input Form */}
          <form onSubmit={handleVerify} className="mt-8 space-y-6">
            {/* 6 Digit Inputs */}
            <div className="flex justify-center items-center gap-1.5 sm:gap-2.5 md:gap-3.5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  placeholder="—"
                  className="w-10 h-11 sm:w-12 sm:h-14 md:w-13 md:h-16 rounded-lg sm:rounded-xl border border-[#DCE4E0] bg-white text-center text-lg sm:text-xl md:text-2xl font-bold text-[#063127] placeholder-[#C2CEC8] focus:outline-none focus:border-[#0B5D4B] focus:ring-2 focus:ring-[#0B5D4B]/20 transition-all shadow-xs"
                />
              ))}
            </div>

            {/* Resend feedback notification */}
            {resendMessage && (
              <p className="text-xs font-medium text-[#0B5D4B] animate-fadeIn">
                {resendMessage}
              </p>
            )}

            {/* Verify CTA Button */}
            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3.5 px-6 bg-[#064335] hover:bg-[#052A21] text-white font-semibold       rounded-[10px] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm group cursor-pointer disabled:opacity-75"
            >
              <span>{isVerifying ? "Verifying..." : "Verify account"}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Resend code */}
            <div className="pt-1">
              <p className="text-sm text-[#727470]">
                Didn't receive the code?
                <br />
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendTimer > 0}
                  className={`font-semibold underline underline-offset-2 transition-colors ${
                    resendTimer > 0
                      ? "text-[#A8B6B0] cursor-not-allowed"
                      : "text-[#064335] hover:text-[#D9A441]"
                  }`}
                >
                  Resend code {resendTimer > 0 && `(${resendTimer}s)`}
                </button>
              </p>
            </div>

            {/* Divider Line */}
            <div className="pt-2">
              <div className="h-px bg-[#EAE5DC] w-full" />
            </div>

            {/* Change phone number option */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => onNavigate?.("signup")}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#064335] hover:text-[#D9A441] underline underline-offset-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Change phone number</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </BotanicalFrame>
  );
}
