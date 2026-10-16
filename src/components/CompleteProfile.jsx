import React, { useState } from "react";
import {
  User,
  Camera,
  ShieldCheck,
  Lock,
  Calendar,
  CreditCard,
  Upload,
  ChevronRight,
  ArrowRight,
  Check,
  CheckCircle2,
  ScanFace,
  ChevronDown,
} from "lucide-react";
import BotanicalFrame from "./BotanicalFrame";

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
      alert("Facial verification successful! Verified with live biometric check.");
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

  const nigerianStates = [
    "Abia", "Abuja (FCT)", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
    "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
    "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

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

        {/* Page Title & Subtitle */}
        <div className="text-center mb-7">
          <span className="text-[11px] font-['Lusitana',serif] sm:text-[20px] font-bold tracking-[0.02em] uppercase text-[#063127] block mb-1">
            COMPLETE YOUR PROFILE
          </span>
          <p className="text-xs sm:text-sm text-[#7E7F7D] font-normal">
            Please provide the remaining details to get started with PallyPot.
          </p>
        </div>

        {/* Profile Card / Success State */}
        <div className="w-full max-w-[700px] bg-white rounded-3xl border border-[#EBE6DD] p-6 sm:p-9 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)]">
          {isCompleted ? (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF6F1] flex items-center justify-center text-[#0B5D4B] shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-['Lusitana',serif] text-[#063127]">
                Profile Completed!
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6D66] max-w-md mx-auto">
                Welcome, <strong className="text-[#063127]">{formData.fullName}</strong>. Your identity has been verified and your PallyPot account is fully activated.
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
              {/* SECTION 1: Personal Information */}
              <div className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-6 space-y-4">
                {/* Section Header */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#064335] text-white flex items-center justify-center shrink-0">
                    <User className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#000000]">
                      Personal Information
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7E7F7D]">
                      Some details are pre-filled from your registration.
                    </p>
                  </div>
                </div>

                {/* Full name (Horizontal row) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="text-xs sm:text-sm font-semibold text-[#000000] w-28 sm:w-32 shrink-0">
                    Full name
                  </label>
                  <div className="relative flex-1 flex items-center">
                    <input
                      type="text"
                      readOnly
                      value={formData.fullName}
                      className="w-full pl-3.5 pr-10 py-3 bg-[#EAECEF] border border-[#D5D8DC] rounded-[5px] text-xs sm:text-sm text-[#505D56] font-medium cursor-not-allowed select-none"
                    />
                    <Lock className="w-4 h-4 text-[#7A8A82] absolute right-3 pointer-events-none" />
                  </div>
                </div>

                {/* Phone number (Horizontal row + Verified badge) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="text-xs sm:text-sm font-semibold text-[#000000] w-28 sm:w-32 shrink-0">
                    Phone number
                  </label>
                  <div className="flex-1 flex items-center gap-2 sm:gap-3">
                    <div className="relative flex-1 flex items-center">
                      <input
                        type="text"
                        readOnly
                        value={formData.phone}
                        className="w-full pl-3.5 pr-10 py-3 bg-[#EAECEF] border border-[#D5D8DC] rounded-[5px] text-xs sm:text-sm text-[#505D56] font-medium cursor-not-allowed select-none"
                      />
                      <Lock className="w-4 h-4 text-[#7A8A82] absolute right-3 pointer-events-none" />
                    </div>
                    {/* Verified Badge */}
                    <div className="bg-[#E8F8F0] text-[#0B8A55] border border-[#C2E8D5] font-semibold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 shadow-xs">
                      <div className="w-4 h-4 rounded-full bg-[#0B8A55] text-white flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </div>
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Email address (Horizontal row) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="text-xs sm:text-sm font-semibold text-[#000000] w-28 sm:w-32 shrink-0">
                    Email address
                  </label>
                  <div className="relative flex-1 flex items-center">
                    <input
                      type="email"
                      readOnly
                      value={formData.email}
                      className="w-full pl-3.5 pr-10 py-3 bg-[#EAECEF] border border-[#D5D8DC] rounded-[5px] text-xs sm:text-sm text-[#505D56] font-medium cursor-not-allowed select-none"
                    />
                    <Lock className="w-4 h-4 text-[#7A8A82] absolute right-3 pointer-events-none" />
                  </div>
                </div>

                {/* Date of birth (Horizontal row) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="text-xs sm:text-sm font-semibold text-[#000000] w-28 sm:w-32 shrink-0">
                    Date of birth
                  </label>
                  <div className="relative flex-1 flex items-center">
                    <input
                      type="text"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      placeholder="DD / MM / YYYY"
                      className="w-full pl-3.5 pr-10 py-3 rounded-[5px] bg-white border border-[#D5D8DC] text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B]"
                    />
                    <Calendar className="w-4 h-4 text-[#7A8A82] absolute right-3 pointer-events-none" />
                  </div>
                </div>

                {/* Residential address (Stacked) */}
                <div className="space-y-1.5 pt-1">
                  <label className="block text-xs sm:text-sm font-semibold text-[#000000]">
                    Residential address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House number, street name"
                    className="w-full px-3.5 py-3 rounded-[5px] bg-white border border-[#DCE4E0] text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B]"
                  />
                </div>

                {/* City & State Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#000000]">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      className="w-full px-3.5 py-3 bg-white border border-[#DCE4E0] rounded-[5px] text-xs sm:text-sm text-[#1B352B] placeholder-[#9CAEA7] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#000000]">
                      State
                    </label>
                    <div className="relative flex items-center">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full pl-3.5 pr-8 py-3 bg-white border border-[#DCE4E0] rounded-[5px] text-xs sm:text-sm text-[#1B352B] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] appearance-none"
                      >
                        <option value="">Select state</option>
                        {nigerianStates.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#7A8A82] absolute right-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-[#000000]">
                    Country
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-3.5 pr-8 py-3 bg-white border border-[#DCE4E0] rounded-[5px] text-xs sm:text-sm text-[#1B352B] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] appearance-none"
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#7A8A82] absolute right-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Profile Photo */}
              <div className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-6 space-y-4">
                {/* Section Header */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#064335] text-white flex items-center justify-center shrink-0">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#000000]">
                      Profile Photo
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7E7F7D]">
                      Add a profile photo to help others recognise you.
                    </p>
                  </div>
                </div>

                {/* Avatar and Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-1">
                  {/* Avatar circle */}
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#E5EAE8] border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-9 h-9 text-[#8FA39A]" />
                      )}
                    </div>
                    {/* Small camera badge */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#064335] text-white flex items-center justify-center border-2 border-white shadow-xs">
                      <Camera className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Upload / Camera Action Buttons */}
                  <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                    <div className="flex items-center gap-2.5">
                      <label className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#064335] text-[#064335] hover:bg-[#EBF3F0] rounded-[5px] text-xs sm:text-sm font-semibold cursor-pointer transition-colors shadow-xs">
                        <Upload className="w-4 h-4" />
                        <span>Upload photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>

                      <button
                        type="button"
                        onClick={() => alert("Opening camera device interface...")}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#064335] text-[#064335] hover:bg-[#EBF3F0] rounded-[5px] text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Take a photo</span>
                      </button>
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#7E7F7D] text-center sm:text-left">
                      JPG or PNG. Max 5MB.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Identity Verification (KYC) */}
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
                    className={`flex-1 p-3 rounded-xl border flex items-center justify-between text-left transition-all ${
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
                  <Lock className="w-3.5 h-3.5 text-[#064335]" />
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
