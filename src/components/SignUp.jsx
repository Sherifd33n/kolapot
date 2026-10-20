import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please verify.");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy to continue.");
      return;
    }
    if (onNavigate) {
      onNavigate("verify", { phone: formData.phone || "+234 802 123 4567" });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#FAF8F5] text-[#1A2E26]">
      {/* Left Branding & Visual Side */}
      <div className="relative w-full lg:w-[48%] xl:w-[45%] min-h-[280px] sm:min-h-[380px] lg:min-h-screen bg-[#072F24] overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        {/* Background Artwork */}
        <div className="absolute inset-0 z-0">
          <img
            src="/auth-image.png"
            alt="PallyPot Wealth and Savings Visual"
            className="w-full h-full object-cover object-bottom opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#072F24]/40 to-[#072F24]/90" />
        </div>

        {/* Top Header Content */}
        <div className="relative z-10 space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate?.("home")}
              className="group flex items-center gap-2 focus:outline-none"
              title="Return to Home"
            >
              <img
                src="/logo.png"
                alt="PallyPot Logo"
                className="h-10 sm:h-12 w-auto drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </button>

            {/* Quick Back to home on mobile/tablet */}
            <button
              onClick={() => onNavigate?.("home")}
              className="lg:hidden flex items-center gap-1.5 text-xs font-medium text-[#F7F4EB]/80 bg-[#0B4032]/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#195945] hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
          </div>

          {/* Golden Divider Line */}
          <div className="w-14 h-0.5 bg-[#D9A441]" />

          {/* Heading */}
          <div className="space-y-5 pt-5">
            <h1 className="font-['Sixtyfour',serif]  opacity-60 text-[20px] sm:text-3xl lg:text-4xl tracking-wider text-[#FFFFFF]">
              Home of
              <br />
              collective
              <br />
              <span className="text-[#F1DF7E]">saving.</span>
            </h1>

            {/* Cursive Subtitle */}
            <p className="font-['Satisfy',cursive] text-lg sm:text-xl text-[#F1DF7E] tracking-wide leading-relaxed pt-2">
              Built for you. Built by you.
              <br />
              Strengthened by community.
            </p>
          </div>
        </div>

        {/* Bottom spacer for desktop */}
        <div className="relative z-10 hidden lg:block pb-4">
          <button
            onClick={() => onNavigate?.("home")}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#C8D6D0] hover:text-[#E5A93C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to main website</span>
          </button>
        </div>
      </div>

      {/* Right Form Card Side */}
      <div className="relative flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-14 overflow-y-auto overflow-x-hidden bg-[#FAF8F5]">
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
        <div className="relative z-10 w-full max-w-[440px] space-y-6 my-auto py-4">
          {/* Header */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D9A441] block mb-1">
              LET'S GET STARTED
            </span>
            <h2 className="text-3xl font-['Lusitana',serif] font-bold text-[#063127]">
              Create your PallyPot account
            </h2>
            <p className="text-xs sm:text-sm text-[#7E7F7D] mt-1.5 font-light">
              Join a trusted community for collective saving.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-white border border-[#E3ECE7] shadow-sm text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#EBF6F1] flex items-center justify-center text-[#0B5D4B]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#083528]">
                Account Created Successfully!
              </h3>
              <p className="text-xs text-[#5B6D66]">
                Welcome to PallyPot, <strong className="text-[#083528]">{formData.fullName}</strong>. Your collective savings journey begins today.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onNavigate?.("home")}
                  className="w-full py-2.5 bg-[#064335] text-white rounded-full text-xs font-semibold hover:bg-[#052A21] transition-colors"
                >
                  Explore Àjọ Circles
                </button>
              </div>
            </div>
          ) : (
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
                    <Phone className="w-4 h-4" />
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
                    className="absolute right-3.5 text-[#889B93] hover:text-[#2C4138] focus:outline-none p-0.5"
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
                    className="absolute right-3.5 text-[#889B93] hover:text-[#2C4138] focus:outline-none p-0.5"
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
                className="w-full py-2.5 px-6 bg-[#FDFCF9] hover:bg-[#F5F2EB] border border-[#DCE4E0] text-[#000000] font-medium rounded-full transition-all text-xs sm:text-sm flex items-center justify-center gap-3 shadow-xs"
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
                    className="font-bold text-[#0B5D4B] hover:text-[#D9A441] transition-colors ml-1"
                  >
                    Log in
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
