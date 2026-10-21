import React from "react";
import { User, Phone, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";

export default function SignUpForm({
  formData,
  handleChange,
  handleSubmit,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  onNavigate,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      {/* Full name */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#063127]">
          Full name
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3.5 text-[#889B93] pointer-events-none">
            <User className="w-4 h-4" />
          </span>
          <input
            type="text"
            required
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DCE4E0] rounded-md text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Phone number */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#063127]">
          Phone number
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3.5 text-[#889B93] pointer-events-none">
            <FiPhoneCall className="w-4 h-4" />
          </span>
          <input
            type="tel"
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DCE4E0] rounded-md text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Email address */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#063127]">
          Email address
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3.5 text-[#889B93] pointer-events-none">
            <Mail className="w-4 h-4" />
          </span>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DCE4E0] rounded-md text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1">
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full pl-10 pr-11 py-2.5 bg-white border border-[#DCE4E0] rounded-md text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all shadow-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 text-[#889B93] hover:text-[#2C4138] focus:outline-none p-0.5 cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm password */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#063127]">
          Confirm password
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3.5 text-[#889B93] pointer-events-none">
            <Lock className="w-4 h-4" />
          </span>
          <input
            type={showConfirmPassword ? "text" : "password"}
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full pl-10 pr-11 py-2.5 bg-white border border-[#DCE4E0] rounded-md text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all shadow-sm"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3.5 text-[#889B93] hover:text-[#2C4138] focus:outline-none p-0.5 cursor-pointer"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Terms checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
          className="mt-0.5 w-4 h-4 rounded text-[#0B5D4B] focus:ring-[#0B5D4B] border-[#DCE4E0] cursor-pointer"
        />
        <label htmlFor="agreeToTerms" className="text-[11px] text-[#5B6D66] leading-tight select-none cursor-pointer">
          I agree to PallyPot's{" "}
          <a
            href="#terms"
            onClick={(e) => {
              e.preventDefault();
              alert("PallyPot Terms of Service: Safe, transparent collective savings.");
            }}
            className="font-semibold text-[#095947] hover:text-[#D9A441] transition-colors underline underline-offset-2"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              alert("PallyPot Privacy Policy: Your financial data is encrypted and strictly protected.");
            }}
            className="font-semibold text-[#095947] hover:text-[#D9A441] transition-colors underline underline-offset-2"
          >
            Privacy Policy
          </a>
          .
        </label>
      </div>

      {/* Create Account Button */}
      <button
        type="submit"
        className="w-full mt-2 py-3 px-6 bg-[#064335] hover:bg-[#052A21] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm group cursor-pointer"
      >
        <span>Create account</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      {/* OR Divider */}
      <div className="flex items-center gap-3 pt-1">
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
        className="w-full py-2.5 px-6 bg-[#FDFCF9] hover:bg-[#F5F2EB] border border-[#DCE4E0] text-[#000000] font-medium rounded-full transition-all text-xs sm:text-sm flex items-center justify-center gap-3 shadow-xs cursor-pointer"
      >
        <FcGoogle size={20} />
        <span>Continue with Google</span>
      </button>

      {/* Bottom Switch Link */}
      <div className="text-center pt-2">
        <p className="text-xs text-[#5B6D66]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => onNavigate?.("signin")}
            className="font-bold text-[#0B5D4B] hover:text-[#D9A441] transition-colors ml-1 cursor-pointer"
          >
            Log in
          </button>
        </p>
      </div>
    </form>
  );
}
