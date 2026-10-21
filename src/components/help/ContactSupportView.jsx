import React, { useState, useRef } from "react";
import { ArrowLeft, ChevronDown, CheckCircle2 } from "lucide-react";
import { PiUploadSimple } from "react-icons/pi";
import { IoWalletSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";

export default function ContactSupportView({ onBack }) {
  const [category, setCategory] = useState("Wallet");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const categories = [
    { value: "Wallet", label: "Wallet" },
    { value: "Contributions", label: "Contributions" },
    { value: "Payouts", label: "Payouts" },
    { value: "Groups", label: "Groups" },
    { value: "Account", label: "Account" },
    { value: "General", label: "General Inquiry" },
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-md border border-[#F0EDE6] p-8 max-w-lg mx-auto text-center space-y-4 shadow-sm animate-tab-content my-10">
        <div className="w-16 h-16 rounded-full bg-[#EAF7EE] text-[#0B5D4B] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold text-[#000000]">Request Submitted!</h3>
        <p className="text-sm text-[#8798A6]">
          Thank you for reaching out. A ticket has been created and our support
          team will respond to your registered email shortly.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-sm rounded-md transition-colors cursor-pointer shadow-xs"
        >
          Back to Help & Support
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-tab-content pb-10">
      {/* Back Button */}
      <div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111827] hover:text-[#0B5D4B] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Help</span>
        </button>
      </div>

      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
          Contact Support
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          Tell us what you need help with, and our support team will assist you.
        </p>
      </div>

      {/* Form Container Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md border border-[#F0EDE6] p-5 sm:p-6 space-y-6 shadow-xs max-w-7xl"
      >
        {/* Issue Category */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-[#000000]">
            Issue Category
          </label>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0B5D4B] flex items-center pointer-events-none">
              <FaWallet className="w-5 h-5 text-[#0B5D4B]" />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-12 pr-9 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm text-[#000000] appearance-none focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all cursor-pointer font-medium"
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-[#000000]">
            Subject
          </label>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Unable to access account"
            className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all"
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-[#000000]">
            Message
          </label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your issue in detail..."
            className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-md text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B5D4B] focus:ring-1 focus:ring-[#0B5D4B] transition-all resize-y"
          />
        </div>

        {/* Attachment (optional) */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-[#000000]">
            Attachment (optional)
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                setFile(e.dataTransfer.files[0]);
              }
            }}
            className="border border-dashed border-[#8798A6] rounded-md p-6 text-center cursor-pointer hover:border-[#0B5D4B] transition-colors bg-white gap-8 flex items-center justify-center space-y-2.5"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".png,.jpg,.jpeg,.pdf"
              className="hidden"
            />
            <div className="w-16 h-16 rounded-full bg-[#E9EAF1] text-[#4B5563] flex items-center justify-center">
              <PiUploadSimple className="w-7 h-7" color="#0E1011"/>
            </div>
            <div>
              {file ? (
                <p className="text-sm font-semibold text-[#0B5D4B] truncate max-w-xs">
                  {file.name}
                </p>
              ) : (
                <p className="text-base text-[#000000]">
                  <span className="text-[#0B5D4B] font-semibold">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
              )}
              <p className="text-base text-[#8181A5] mt-0.5">
                PNG, JPG or PDF (Max 5MB)
              </p>
            </div>
          </div>
        </div>

        {/* Submit Request Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[85%] mx-auto py-3.5 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-sm sm:text-base rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting request...</span>
              </>
            ) : (
              <span>Submit Request</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
