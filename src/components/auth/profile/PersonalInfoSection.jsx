import React from "react";
import { User, Calendar, ChevronDown } from "lucide-react";
import { IoMdLock } from "react-icons/io";
import { PiSealCheckFill } from "react-icons/pi";

const nigerianStates = [
  "Abia",
  "Abuja (FCT)",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export default function PersonalInfoSection({ formData, handleInputChange }) {
  return (
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 sm:w-[80%] w-full">
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
          <IoMdLock className="w-6 h-6 text-[#7A8A82] absolute right-3 pointer-events-none" />
        </div>
      </div>

      {/* Phone number (Horizontal row + Verified badge) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 sm:w-[99%] w-full">
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
            <IoMdLock className="w-6 h-6 text-[#7A8A82] absolute right-3 pointer-events-none" />
          </div>
          {/* Verified Badge */}
          <div className="bg-[#E8F8F0] text-[#0B5D4B] border border-[#C2E8D5] font-semibold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 shadow-xs">
            <PiSealCheckFill size={20} color="#0B5D4B" />
            <span>Verified</span>
          </div>
        </div>
      </div>

      {/* Email address (Horizontal row) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 sm:w-[80%] w-full">
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
          <IoMdLock className="w-6 h-6 text-[#7A8A82] absolute right-3 pointer-events-none" />
        </div>
      </div>

      {/* Date of birth (Horizontal row) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 sm:w-[80%] w-full">
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
          <Calendar className="w-6 h-6 text-[#7A8A82] absolute right-3 pointer-events-none" />
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
  );
}
