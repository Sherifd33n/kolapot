import React from "react";
import { Camera, User, Upload } from "lucide-react";

export default function ProfilePhotoSection({ profileImage, handleImageUpload }) {
  return (
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
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 pt-1 justify-center">
        {/* Avatar circle */}
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E5EAE8] shadow-sm flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-12 h-12 text-[#8FA39A]" />
            )}
          </div>
          {/* Small camera badge */}
          <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#064335] text-white flex items-center justify-center border-2 border-white shadow-xs">
            <Camera className="w-4 h-4" />
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
  );
}
