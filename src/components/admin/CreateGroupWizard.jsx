import React, { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  ChevronDown,
  Info,
  Check,
  RefreshCw,
  Users,
  Clock,
  Coins,
  User,
  Pencil,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsDatabaseAdd } from "react-icons/bs";

// Helper functions for ordinals and dates
const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const formatDate = (dateStr) => {
  if (!dateStr) return "5 Nov 2026";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const day = d.getDate();
    const month = d.toLocaleString("en-US", { month: "short" });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  } catch {
    return dateStr;
  }
};

const formatMonth = (dateStr) => {
  if (!dateStr) return "Nov 2026";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "Nov 2026";
    const month = d.toLocaleString("en-US", { month: "short" });
    const year = d.getFullYear();
    return `${month} ${year}`;
  } catch {
    return "Nov 2026";
  }
};

export default function CreateGroupWizard({ onBack, onGroupCreated }) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Group Details
    groupName: "Unity Ajo Circle",
    groupType: "Ajo",
    groupDescription: "",
    groupPrivacy: "private", // 'private' | 'public'
    maxMembers: "10",
    startDate: "2026-11-05",
    whatsappLink: "",

    // Step 2: Contribution & Payout
    contributionAmount: "60,000",
    contributionFrequency: "Monthly",
    payoutArrangement: "Rotational Payout",
    gracePeriod: "1 day",
    latePaymentFee: "2,000",
    additionalRule: "",

    // Step 3: Admin Participation
    participatingAsMember: true,
    preferredSlot: "1st",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const steps = [
    { number: 1, title: "Group Details" },
    { number: 2, title: "Contribution & Payout" },
    { number: 3, title: "Admin Participation" },
    { number: 4, title: "Review & Create" },
  ];

  const handleNext = (e) => {
    e?.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleFinalSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onBack?.();
    }
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0B5D4B", "#10B981", "#34D399", "#E5A93C"],
        });
      } catch {
        // safe fallback
      }
      setTimeout(() => {
        onGroupCreated?.(formData);
      }, 1600);
    }, 900);
  };

  return (
    <div className="space-y-4 animate-tab-content max-w-5xl mx-auto">
      {/* Back button */}
      <div>
        <button
          type="button"
          onClick={handlePrev}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A2E26] hover:text-[#0B5D4B] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to My Groups</span>
        </button>
      </div>

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#1A2E26]">
          Create New Group
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          Set up your savings group, define the rules and invite members.
        </p>
      </div>

      {/* STEPPER PROGRESS BAR */}
      <div className="py-2">
        <div className="flex items-center justify-between relative">
          {steps.map((step, idx) => {
            const isCompleted = currentStep > step.number;
            const isActive = currentStep === step.number;

            return (
              <React.Fragment key={step.number}>
                {/* Step Item */}
                <div className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base transition-all duration-200 ${
                      isCompleted
                        ? "bg-[#629741] text-white"
                        : isActive
                        ? "bg-[#629741] text-white"
                        : "bg-[#FFFFFF] text-[#000000] border border-[#E5E0D6]"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`mt-2 text-[11px] sm:text-xs text-center max-w-[80px] sm:max-w-none transition-colors ${
                      isActive
                        ? "font-bold text-[#1A2E26]"
                        : isCompleted
                        ? "font-medium text-[#4E8A3C]"
                        : "text-[#7E7F7D]"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-[2px] -mt-6 mx-2 bg-[#E5E0D6]" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* SUCCESS SCREEN */}
      {isSuccess ? (
        <div className="bg-white rounded-2xl p-10 sm:p-14 border border-[#F0EBE1] text-center space-y-4 shadow-sm animate-tab-content">
          <div className="w-16 h-16 rounded-full bg-[#E2F4EB] text-[#0B6B40] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-[#1A2E26]">
            Group Created Successfully!
          </h3>
          <p className="text-sm text-[#7E7F7D] max-w-md mx-auto">
            "{formData.groupName}" is now set up. You can now invite members using your exclusive WhatsApp or direct link.
          </p>
        </div>
      ) : currentStep === 4 ? (
        /* ==================== STEP 4: REVIEW & CREATE (4 SEPARATE WHITE CARDS) ==================== */
        <div className="space-y-4 animate-tab-content">
          {/* Card 1: Group Details */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#F0EBE1] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                  <Users className="w-5 h-5 text-[#16A34A]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A2E26]">
                  Group Details
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="divide-y divide-[#F3F4F6] text-xs sm:text-sm">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Group Name</span>
                <span className="text-[#1A2E26] font-medium">{formData.groupName}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Group Type</span>
                <span className="text-[#1A2E26] font-medium">{formData.groupType}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Privacy</span>
                <span className="text-[#1A2E26] font-medium">
                  {formData.groupPrivacy === "private"
                    ? "Private (Invitation only)"
                    : "Public (Anyone can join)"}
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Members</span>
                <span className="text-[#1A2E26] font-medium">{formData.maxMembers}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Start Date</span>
                <span className="text-[#1A2E26] font-medium">{formatDate(formData.startDate)}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Contribution & Payout */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#F0EBE1] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                  <BsDatabaseAdd className="w-5 h-5 text-[#16A34A]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A2E26]">
                  Contribution & Payout
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="divide-y divide-[#F3F4F6] text-xs sm:text-sm">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Contribution Amount</span>
                <span className="text-[#1A2E26] font-medium">₦{formData.contributionAmount || "50,000"}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Contribution Frequency</span>
                <span className="text-[#1A2E26] font-medium">{formData.contributionFrequency || "Monthly"}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Payout Arrangement</span>
                <span className="text-[#1A2E26] font-medium">Rotational payout</span>
              </div>
            </div>
          </div>

          {/* Card 3: Late Payment Rules */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#F0EBE1] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                  <Clock className="w-5 h-5 text-[#16A34A]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A2E26]">
                  Late Payment Rules
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="divide-y divide-[#F3F4F6] text-xs sm:text-sm">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Grace Period</span>
                <span className="text-[#1A2E26] font-medium">{formData.gracePeriod || "3 days"}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Late Payment Fee</span>
                <span className="text-[#1A2E26] font-medium">₦{formData.latePaymentFee || "2,000"}</span>
              </div>
              <div className="py-2.5 flex items-start justify-between gap-4">
                <span className="text-[#1A2E26] font-semibold shrink-0">Additional Rule</span>
                <span className="text-[#1A2E26] text-right font-medium max-w-sm">
                  {formData.additionalRule ||
                    "Contribute on or before the due date. Notify the admin if you will miss a payment."}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Admin Participation */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#F0EBE1] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                  <User className="w-5 h-5 text-[#16A34A]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A2E26]">
                  Admin Participation
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="divide-y divide-[#F3F4F6] text-xs sm:text-sm">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Participation</span>
                <span className="text-[#1A2E26] font-medium">
                  {formData.participatingAsMember ? "Participating" : "Manage only"}
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#1A2E26] font-semibold">Payout Position</span>
                <span className="text-[#1A2E26] font-medium">
                  {formData.participatingAsMember
                    ? `${formData.preferredSlot || "1st"} Cycle (${formatMonth(formData.startDate)})`
                    : "Not participating"}
                </span>
              </div>
            </div>
          </div>

          {/* Action Button: Create Group */}
          <div className="pt-2 pb-6 flex items-center justify-end">
            <button
              type="button"
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-sm font-semibold rounded-[8px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center min-w-[150px]"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Creating...</span>
                </div>
              ) : (
                "Create Group"
              )}
            </button>
          </div>
        </div>
      ) : (
        /* FORM CARD FOR STEPS 1-3 */
        <div className="bg-white rounded-[12px] p-6 border border-[#EBEBEB] shadow-xs animate-tab-content">
          {/* ==================== STEP 1: GROUP DETAILS (IMAGE 4) ==================== */}
          {currentStep === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              {/* Card Subheader */}
              <div className="pb-2">
                <h3 className="text-lg font-bold text-[#1A2E26]">Group Details</h3>
                <p className="text-xs sm:text-sm text-[#7E7F7D]">
                  Basic information about your savings group.
                </p>
              </div>

              {/* Group Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#000000] mb-1.5">
                  Group Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.groupName}
                  onChange={(e) =>
                    setFormData({ ...formData, groupName: e.target.value })
                  }
                  placeholder="Unity Ajo Circle"
                  className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] placeholder-[#9CA3AF] focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all"
                />
              </div>

              {/* Group Type */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#000000] mb-1.5">
                  Group Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.groupType}
                    onChange={(e) =>
                      setFormData({ ...formData, groupType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] appearance-none focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all cursor-pointer"
                  >
                    <option value="Ajo">Ajo</option>
                    <option value="Esusu">Esusu</option>
                    <option value="Adashi">Adashi</option>
                    <option value="Target Savings">Target Savings</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Group Description */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#000000]">
                    Group Description
                  </label>
                </div>
                <textarea
                  rows={3}
                  maxLength={200}
                  value={formData.groupDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, groupDescription: e.target.value })
                  }
                  placeholder="Briefly explain what this group entails..."
                  className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] placeholder-[#9CA3AF] focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all resize-none"
                />
                <div className="text-right text-[11px] text-[#9CA3AF] mt-1">
                  {formData.groupDescription.length}/200
                </div>
              </div>

              {/* Group Privacy */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#000000] mb-2">
                  Group Privacy <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Private Card */}
                  <label
                    onClick={() =>
                      setFormData({ ...formData, groupPrivacy: "private" })
                    }
                    className={`flex items-start gap-3 p-4 rounded-[8px] border cursor-pointer transition-all ${
                      formData.groupPrivacy === "private"
                        ? "border-[#4E8A3C] bg-[#F7FAF5]"
                        : "border-[#E5E0D6] bg-white hover:border-[#CBD5E1]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="groupPrivacy"
                      checked={formData.groupPrivacy === "private"}
                      onChange={() => {}}
                      className="mt-0.5 accent-[#4E8A3C] cursor-pointer"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A2E26]">Private</h4>
                      <p className="text-xs text-[#7E7F7D]">By invitation only</p>
                    </div>
                  </label>

                  {/* Public Card */}
                  <label
                    onClick={() =>
                      setFormData({ ...formData, groupPrivacy: "public" })
                    }
                    className={`flex items-start gap-3 p-4 rounded-[8px] border cursor-pointer transition-all ${
                      formData.groupPrivacy === "public"
                        ? "border-[#4E8A3C] bg-[#F7FAF5]"
                        : "border-[#E5E0D6] bg-white hover:border-[#CBD5E1]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="groupPrivacy"
                      checked={formData.groupPrivacy === "public"}
                      onChange={() => {}}
                      className="mt-0.5 accent-[#4E8A3C] cursor-pointer"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A2E26]">Public</h4>
                      <p className="text-xs text-[#7E7F7D]">Anyone can request to join</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Maximum Members & Group Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Maximum Members */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A2E26] mb-1.5">
                    Maximum Members <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.maxMembers}
                      onChange={(e) =>
                        setFormData({ ...formData, maxMembers: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] appearance-none focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all cursor-pointer"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="12">12</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Group Start Date */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A2E26] mb-1.5">
                    Group Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({ ...formData, startDate: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all"
                    />
                   
                  </div>
                </div>
              </div>

              {/* WhatsApp Group Invite Link */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#1A2E26] mb-1.5">
                  WhatsApp Group Invite Link
                </label>
                <input
                  type="url"
                  value={formData.whatsappLink}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsappLink: e.target.value })
                  }
                  placeholder="Enter link here"
                  className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] placeholder-[#9CA3AF] focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all"
                />
                <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#7E7F7D]">
                  <Info className="w-3.5 h-3.5 text-[#8C9498] shrink-0" />
                  <span>
                    Add your WhatsApp group invite link so members can access the group conversation.
                  </span>
                </div>
              </div>

              {/* Navigation button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-sm font-semibold rounded-[8px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-1"
                >
                  <span>Contribution & Payout</span>
                 <BiRightArrowAlt size={15}/>
                </button>
              </div>
            </form>
          )}

          {/* ==================== STEP 2: CONTRIBUTION & PAYOUT (IMAGE 1) ==================== */}
          {currentStep === 2 && (
            <form onSubmit={handleNext} className="space-y-6">
              {/* Card Subheader */}
              <div className="">
                <h3 className="text-lg font-bold text-[#000000]">
                  Contribution & Payout
                </h3>
                <p className="text-xs sm:text-sm text-[#7E7F7D]">
                  Define how members contribute and see how members receive payouts.
                </p>
              </div>

              {/* Contribution Amount & Frequency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Amount */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#000000] mb-1.5">
                    Contribution Amount <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contributionAmount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contributionAmount: e.target.value,
                      })
                    }
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] placeholder-[#9CA3AF] focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all"
                  />
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#000000] mb-1.5">
                    Contribution Frequency <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.contributionFrequency}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contributionFrequency: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] appearance-none focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all cursor-pointer"
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-weekly">Bi-weekly</option>
                      <option value="Daily">Daily</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Payout Arrangement */}
              <div>
                <h4 className="text-sm font-semibold text-[#000000] mb-0.5">
                  Payout Arrangement
                </h4>
                <p className="text-sm text-[#1A1B18] mb-3">
                  How the group pays out the pooled contributions.
                </p>

                {/* Rotational Payout Banner */}
                <div className="bg-[#30B14C21] rounded-[10px] p-4 flex items-start sm:items-center gap-4">
                 
                    <RefreshCw className="w-8 h-8 text-[#10B981]" />
                
                  <div>
                    <h5 className="text-base font-bold text-[#000000]">
                      Rotational Payout
                    </h5>
                    <p className="text-sm text-[#7E7F7D] leading-relaxed">
                      The total contributions are paid to one member per cycle, in the order of payout positions selected by members when joining the group.
                    </p>
                  </div>
                </div>
              </div>

              {/* Late Payment Rules */}
              <div>
                <h4 className="text-sm font-semibold text-[#000000] mb-0.5">
                  Late Payment Rules
                </h4>
                <p className="text-sm text-[#1A1B18] mb-3">
                  Set what happens when a member doesn't pay on time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Grace Period */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#000000] mb-1.5">
                      Grace Period (days) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.gracePeriod}
                        onChange={(e) =>
                          setFormData({ ...formData, gracePeriod: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] appearance-none focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all cursor-pointer"
                      >
                        <option value="1 day">1 day</option>
                        <option value="2 days">2 days</option>
                        <option value="3 days">3 days</option>
                        <option value="5 days">5 days</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Late Payment Fee */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#000000] mb-1.5">
                      Late Payment Fee <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.latePaymentFee}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          latePaymentFee: e.target.value,
                        })
                      }
                      placeholder="Enter amount"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] placeholder-[#9CA3AF] focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Rule */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#00000] mb-1.5">
                  Additional Rule
                </label>
                <textarea
                  rows={3}
                  maxLength={200}
                  value={formData.additionalRule}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalRule: e.target.value })
                  }
                  placeholder="Type in other rules you may have in mind..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] placeholder-[#9CA3AF] focus:border-[#4E8A3C] focus:ring-1 focus:ring-[#4E8A3C] outline-none transition-all resize-none"
                />
                <div className="text-right text-[11px] text-[#9CA3AF] mt-1">
                  {formData.additionalRule.length}/200
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-3 border border-[#E5E0D6] text-[#1A2E26] text-sm font-semibold rounded-[5px] hover:bg-[#FAF8F5] transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                 <BiLeftArrowAlt size={20}/> Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-sm font-semibold rounded-[5px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-1"
                >
                  <span>Admin Participation</span>
                 <BiRightArrowAlt size={20}/>
                </button>
              </div>
            </form>
          )}

          {/* ==================== STEP 3: ADMIN PARTICIPATION (IMAGE 2) ==================== */}
          {currentStep === 3 && (
            <form onSubmit={handleNext} className="space-y-6">
              {/* Header */}
              <div className="pb-2">
                <h3 className="text-xl font-bold text-[#1A2E26]">
                  Admin Participation
                </h3>
                <p className="text-xs sm:text-sm text-[#7E7F7D] mt-1">
                  Choose if you (the group admin) will also contribute and receive a payout.
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3.5">
                {/* Option 1: Participate in the group */}
                <div
                  onClick={() =>
                    setFormData({ ...formData, participatingAsMember: true })
                  }
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start sm:items-center gap-4 ${
                    formData.participatingAsMember
                      ? "border-[#86EFAC] bg-[#F0FDF4]"
                      : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB]"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      formData.participatingAsMember
                        ? "border-[3px] border-[#22C55E]"
                        : "border-2 border-[#CBD5E1]"
                    }`}
                  >
                    {formData.participatingAsMember && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
                      Participate in the group
                    </h4>
                    <p className="text-xs sm:text-sm text-[#7E7F7D] mt-0.5">
                      I'll contribute and receive a payout like other members.
                    </p>
                  </div>
                </div>

                {/* Option 2: Manage only */}
                <div
                  onClick={() =>
                    setFormData({ ...formData, participatingAsMember: false })
                  }
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start sm:items-center gap-4 ${
                    !formData.participatingAsMember
                      ? "border-[#86EFAC] bg-[#F0FDF4]"
                      : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB]"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      !formData.participatingAsMember
                        ? "border-[3px] border-[#22C55E]"
                        : "border-2 border-[#CBD5E1]"
                    }`}
                  >
                    {!formData.participatingAsMember && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
                      Manage only
                    </h4>
                    <p className="text-xs sm:text-sm text-[#7E7F7D] mt-0.5">
                      I won't contribute or receive a payout. I'll only create and manage the group.
                    </p>
                  </div>
                </div>
              </div>

              {/* Position Selection (only shown when participating) */}
              {formData.participatingAsMember && (
                <div className="bg-[#FAF8ED] border border-[#F3EEDC] rounded-2xl p-5 sm:p-6 space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#1A2E26]">
                      Select Your Payout Position
                    </h4>
                    <p className="text-xs sm:text-sm text-[#7E7F7D] mt-0.5">
                      Choose the position you want to take for your payout.
                    </p>
                  </div>

                  {/* Position Circles */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
                    {Array.from(
                      {
                        length: Math.min(
                          Math.max(parseInt(formData.maxMembers, 10) || 12, 2),
                          24
                        ),
                      },
                      (_, i) => {
                        const slotLabel = getOrdinal(i + 1);
                        const isSelected =
                          formData.preferredSlot === slotLabel ||
                          (!formData.preferredSlot && i === 0);

                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                preferredSlot: slotLabel,
                              })
                            }
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center ${
                              isSelected
                                ? "border-[#0B5D4B] bg-[#0B5D4B] text-white shadow-xs"
                                : "border-[#2F6B55]/60 bg-white text-[#2F6B55] hover:border-[#0B5D4B] hover:bg-[#F0FDF4]"
                            }`}
                          >
                            {slotLabel}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              )}

              {/* Info text */}
              <div className="flex items-start sm:items-center gap-2.5 text-xs text-[#7E7F7D]">
                <Info className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  Each payout position can only be selected once. Available positions are shown based on group size.
                </span>
              </div>

              {/* Next Button */}
              <div className="pt-4 flex items-center justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-sm font-semibold rounded-[8px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-1.5"
                >
                  <span>Review & Create</span>
                  <BiRightArrowAlt size={20} />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

