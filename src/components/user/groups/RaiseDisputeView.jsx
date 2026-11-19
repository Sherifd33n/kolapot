import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronDown, Upload, X } from "lucide-react";

export default function RaiseDisputeView({ onBack, onSubmit }) {
  const [category, setCategory] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const categories = ["Group Rules", "Payout Issues", "Contribution Issues", "Member Conduct", "Other"];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.size <= 5 * 1024 * 1024) {
      setFile(selected);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.size <= 5 * 1024 * 1024) {
      setFile(dropped);
    }
  };

  const handleSubmit = () => {
    if (!category) {
      alert("Please select a category for your dispute.");
      return;
    }
    if (!subject.trim()) {
      alert("Please enter a subject.");
      return;
    }
    if (!description.trim()) {
      alert("Please describe your issue.");
      return;
    }
    onSubmit({ category, subject: subject.trim(), description: description.trim(), file });
  };

  return (
    <div className="animate-tab-content space-y-5">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1A2E26] hover:text-[#064335] transition-colors font-medium cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to Disputes</span>
      </button>

      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">Raise a Dispute</h2>
        <p className="text-xs sm:text-sm text-[#0B5D4B] mt-0.5 sm:mt-1 font-normal">
          Report an issue related to this group.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-md p-4 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-4 sm:space-y-5">
        {/* Category */}
        <div>
          <label className="text-xs sm:text-sm font-semibold text-[#111827] block mb-1.5">Category</label>
          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#EBE6DD] rounded-md text-xs sm:text-sm text-left hover:border-[#064335] transition-colors"
            >
              <span className={category ? "text-[#111827]" : "text-[#9A9D97]"}>
                {category || "Select a category"}
              </span>
              <ChevronDown className="w-4 h-4 text-[#7E7F7D] shrink-0" />
            </button>
            {categoryOpen && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-[#EBE6DD] rounded-md shadow-lg py-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setCategory(cat); setCategoryOpen(false); }}
                    className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#111827] hover:bg-[#F8F9FA] transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="text-xs sm:text-sm font-semibold text-[#111827] block mb-1.5">Subject</label>
          <input
            type="text"
            placeholder="e.g. Unable to access account"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#EBE6DD] rounded-md text-xs sm:text-sm text-[#1A2E26] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#064335] transition-colors"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-xs sm:text-sm font-semibold text-[#111827] block mb-1.5">Describe the issue</label>
          <textarea
            placeholder="Describe your issue in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#EBE6DD] rounded-md text-xs sm:text-sm text-[#1A2E26] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#064335] transition-colors resize-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="text-xs sm:text-sm font-semibold text-[#111827] block mb-1.5">
            Supporting Evidence (optional)
          </label>
          {file ? (
            <div className="flex items-center gap-3 p-3 border border-[#EBE6DD] rounded-md bg-[#F8F9FA]">
              <span className="text-xs sm:text-sm text-[#111827] flex-1 truncate">{file.name}</span>
              <button onClick={() => setFile(null)} className="text-[#737373] hover:text-red-500 transition-colors p-1">
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="flex flex-col items-center justify-center gap-2 p-5 sm:p-6 border-2 border-dashed border-[#EBE6DD] rounded-md cursor-pointer hover:border-[#064335] transition-colors text-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#F0F3F7] flex items-center justify-center">
                <Upload className="w-5 h-5 text-[#0B5D4B]" />
              </div>
              <p className="text-xs sm:text-sm">
                <span className="text-[#0B5D4B] font-medium underline">Click to upload</span>
                <span className="text-[#737373]"> or drag and drop</span>
              </p>
              <p className="text-[11px] sm:text-xs text-[#9A9D97]">PNG, JPG or PDF (Max 5MB)</p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#0B5D4B] hover:bg-[#064335] text-white text-xs sm:text-sm font-semibold py-3 sm:py-3.5 px-4 rounded-md transition-colors cursor-pointer"
        >
          Submit Dispute
        </button>
      </div>
    </div>
  );
}

