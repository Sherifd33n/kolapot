import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import AuthSidebar from "./auth/AuthSidebar";

export default function SignIn({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onNavigate?.("dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#FAF8F5] text-[#1A2E26]">
      {/* Left Branding & Visual Side */}
      <AuthSidebar onNavigate={onNavigate} />

      {/* Right Form Card Side */}
      <div className="relative flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-16 overflow-y-auto overflow-x-hidden bg-[#FAF8F5]">
        {/* Decorative Corner Foliage */}
        <img
          src="/auth-top.png"
          alt=""
          className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 translate-x-[25%] -translate-y-[25%] pointer-events-none select-none z-0 object-contain object-right-top mix-blend-multiply opacity-25 sm:opacity-30"
        />

        <img
          src="/auth-bottom.png"
          alt=""
          className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 pointer-events-none select-none z-0 object-contain object-right-bottom mix-blend-multiply opacity-45 sm:opacity-50"
        />

        {/* Center Content Box */}
        <div className="relative z-10 w-full max-w-[440px] space-y-7 my-auto">
          {/* Header */}
          <div>
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#D9A441] block mb-3">
              WELCOME BACK
            </span>
            <h2 className="text-3xl font-['Lusitana',serif] font-bold text-[#063127]">
              Log in to PallyPot
            </h2>
            <p className="text-xs sm:text-sm text-[#7E7F7D] mt-1.5 font-normal">
              Access your savings, groups and contributions.
            </p>

            <hr className="w-12 h-[1px] bg-[#D9A441] rounded-full border-none mt-4"/>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-white border border-[#E3ECE7] shadow-sm text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#EBF6F1] flex items-center justify-center text-[#0B5D4B]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#083528]">
                Welcome back!
              </h3>
              <p className="text-xs text-[#5B6D66]">
                You are being redirected to your Àjọ Pot dashboard...
              </p>
              <button
                onClick={() => onNavigate?.("dashboard")}
                className="w-full py-2.5 bg-[#0B5D4B] text-white rounded-full text-xs font-semibold hover:bg-[#074637] transition-colors cursor-pointer"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone number or email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#063127]">
                  Phone number or email
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-[#889B93] pointer-events-none">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter your phone number or email"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#DCE4E0] rounded-md text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#063127]">
                  Password
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-[#889B93] pointer-events-none">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-11 py-3 bg-white border border-[#DCE4E0] rounded-md text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-[#889B93] hover:text-[#2C4138] focus:outline-none p-0.5"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {/* Forgot password */}
                <div className="text-right pt-0.5">
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        "Password reset instructions sent to your email/phone.",
                      );
                    }}
                    className="text-[11px] font-semibold text-[#095947] hover:text-[#D9A441] transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Log In Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 px-6 bg-[#064335] hover:bg-[#052A21] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm group cursor-pointer"
              >
                <span>Log in</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* OR Divider */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex-1 h-px bg-[#E2E8E4]" />
                <span className="text-[11px] font-semibold tracking-wider text-[#8A9B93] uppercase">
                  OR
                </span>
                <div className="flex-1 h-px bg-[#E2E8E4]" />
              </div>

              {/* Google Button */}
              <button
                type="button"
                onClick={() => alert("Google OAuth integration")}
                className="w-full py-2.5 px-6 bg-[#FDFCF9] hover:bg-[#F5F2EB] border border-[#DCE4E0] text-[#000000] font-medium rounded-full transition-all text-xs sm:text-sm flex items-center justify-center gap-3 shadow-xs"
              >
                <FcGoogle size={20} />
                <span>Continue with Google</span>
              </button>

              {/* Bottom Switch Link */}
              <div className="text-center pt-3">
                <p className="text-xs text-[#5B6D66]">
                  New to PallyPot?{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate?.("signup")}
                    className="font-bold text-[#0B5D4B] hover:text-[#D9A441] transition-colors ml-1"
                  >
                    Create an account
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
