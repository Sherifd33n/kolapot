import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import AuthSidebar from "./auth/AuthSidebar";
import SignUpForm from "./auth/SignUpForm";

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
      <AuthSidebar onNavigate={onNavigate} />

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
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D9A441] block mb-3">
              LET'S GET STARTED
            </span>
            <h2 className="text-3xl font-['Lusitana',serif] font-bold text-[#063127]">
              Create your PallyPot account
            </h2>
            <p className="text-xs sm:text-sm text-[#7E7F7D] mt-1.5 font-normal">
              Join a trusted community for collective saving.
            </p>
              <hr className="w-12 h-[1px] bg-[#D9A441] rounded-full border-none mt-4"/>
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
                  className="w-full py-2.5 bg-[#064335] text-white rounded-full text-xs font-semibold hover:bg-[#052A21] transition-colors cursor-pointer"
                >
                  Explore Àjọ Circles
                </button>
              </div>
            </div>
          ) : (
            <SignUpForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              onNavigate={onNavigate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
