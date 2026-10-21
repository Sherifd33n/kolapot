import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BotanicalFrame from "./BotanicalFrame";
import { IoMdLock } from "react-icons/io";
import PersonalInfoSection from "./profile/PersonalInfoSection";
import ProfilePhotoSection from "./profile/ProfilePhotoSection";
import IdentityVerificationSection from "./profile/IdentityVerificationSection";

export default function CompleteProfile({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "Amara Ojo",
    phone: "+234 802 123 4567",
    email: "amaraojo@gmail.com",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "Nigeria",
    bvn: "",
    nin: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [facialVerified, setFacialVerified] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };

  const handleFacialScan = () => {
    alert("Starting live camera scan for facial identity match...");
    setTimeout(() => {
      setFacialVerified(true);
      alert(
        "Facial verification successful! Verified with live biometric check.",
      );
    }, 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("verified");
    } else {
      setIsCompleted(true);
    }
  };


  return (
    <BotanicalFrame>
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo at Top */}
        <div className="mb-4 text-center">
          <button
            onClick={() => onNavigate?.("home")}
            className="group inline-flex items-center gap-2 focus:outline-none"
            title="Go to home"
          >
            <img
              src="/logo-2.png"
              alt="PallyPot Logo"
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105 drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </button>
        </div>

        {/* Profile Card / Success State */}
        <div className="w-full max-w-[700px] bg-white rounded-3xl border border-[#EBE6DD] p-6 sm:p-9 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)]">
          {/* Page Title & Subtitle */}
          <div className="text-center mb-7">
            <span className="text-[11px] font-['Lusitana',serif] sm:text-[20px] font-bold tracking-[0.02em] uppercase text-[#063127] block mb-1">
              COMPLETE YOUR PROFILE
            </span>
            <p className="text-xs sm:text-sm text-[#7E7F7D] font-normal">
              Please provide the remaining details to get started with PallyPot.
            </p>
          </div>
          {isCompleted ? (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF6F1] flex items-center justify-center text-[#0B5D4B] shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-['Lusitana',serif] text-[#063127]">
                Profile Completed!
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6D66] max-w-md mx-auto">
                Welcome,{" "}
                <strong className="text-[#063127]">{formData.fullName}</strong>.
                Your identity has been verified and your PallyPot account is
                fully activated.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => onNavigate?.("home")}
                  className="w-full py-3.5 bg-[#064335] hover:bg-[#052A21] text-white font-semibold rounded-full text-sm transition-colors shadow-md"
                >
                  Start Saving With Circles →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <PersonalInfoSection
                formData={formData}
                handleInputChange={handleInputChange}
              />
              <ProfilePhotoSection
                profileImage={profileImage}
                handleImageUpload={handleImageUpload}
              />
              <IdentityVerificationSection
                formData={formData}
                handleInputChange={handleInputChange}
                facialVerified={facialVerified}
                handleFacialScan={handleFacialScan}
              />

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#064335] hover:bg-[#052A21] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base group cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Security Protection Footer */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#898D86] mt-3.5">
                  <IoMdLock className="w-6 h-6 text-[#064335]" />
                  <span>Your information is securely protected.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </BotanicalFrame>
  );
}
