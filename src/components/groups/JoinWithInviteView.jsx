import React from "react";
import { ArrowLeft, Check, Users, Wallet, UserPlus, Calendar, ShieldCheck } from "lucide-react";
import { FiLink } from "react-icons/fi";

export default function JoinWithInviteView({
  onBack,
  inviteStep,
  setInviteStep,
  inviteLink,
  setInviteLink,
  selectedInvitePosition,
  setSelectedInvitePosition,
  onComplete,
  getSlotOrdinal,
}) {
  return (
    <div key="join-invite-view" className="animate-tab-content space-y-6">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A2E26] hover:text-[#0D5C46] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to My Savings Groups</span>
      </button>

      {/* Header Title & Subtitle */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">
          Join with Invite
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal max-w-2xl">
          {inviteStep === 1
            ? "Enter the group link sent to you by the group admin to view the group details and join."
            : inviteStep === 2
              ? "Review the group details and select your preferred payout order."
              : "You're almost in. Review your selection and request to join the group."}
        </p>
      </div>

      {/* 3-Step Stepper Header */}
      <div className="max-w-xl mx-auto my-6 sm:my-8 px-2 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold transition-all ${
                inviteStep >= 1
                  ? "bg-[#0B5D4B] text-white shadow-xs"
                  : "bg-[#D9DCE0] text-[#3C4745]"
              }`}
            >
              {inviteStep > 1 ? (
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white stroke-[2.5]" />
              ) : (
                "1"
              )}
            </div>
            <span
              className={`mt-2 text-xs sm:text-sm transition-colors ${
                inviteStep >= 1
                  ? "font-semibold text-[#0B5D4B]"
                  : "font-medium text-[#8798A6]"
              }`}
            >
              Enter link
            </span>
          </div>

          {/* Connecting Line 1 */}
          <div
            className={`flex-1 h-[2px] mx-2 sm:mx-6 -mt-5 sm:-mt-6 transition-colors ${
              inviteStep > 1 ? "bg-[#0B5D4B]" : "bg-[#D9DCE0]"
            }`}
          />

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold transition-all ${
                inviteStep >= 2
                  ? "bg-[#0B5D4B] text-white shadow-xs"
                  : "bg-[#D9DCE0] text-[#3C4745]"
              }`}
            >
              {inviteStep > 2 ? (
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white stroke-[2.5]" />
              ) : (
                "2"
              )}
            </div>
            <span
              className={`mt-2 text-xs sm:text-sm transition-colors ${
                inviteStep >= 2
                  ? "font-semibold text-[#0B5D4B]"
                  : "font-medium text-[#8798A6]"
              }`}
            >
              Select position
            </span>
          </div>

          {/* Connecting Line 2 */}
          <div
            className={`flex-1 h-[2px] mx-2 sm:mx-6 -mt-5 sm:-mt-6 transition-colors ${
              inviteStep > 2 ? "bg-[#0B5D4B]" : "bg-[#D9DCE0]"
            }`}
          />

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold transition-all ${
                inviteStep === 3
                  ? "bg-[#0B5D4B] text-white shadow-xs"
                  : "bg-[#D9DCE0] text-[#3C4745]"
              }`}
            >
              3
            </div>
            <span
              className={`mt-2 text-xs sm:text-sm transition-colors ${
                inviteStep === 3
                  ? "font-semibold text-[#0B5D4B]"
                  : "font-medium text-[#8798A6]"
              }`}
            >
              Join group
            </span>
          </div>
        </div>
      </div>

      {/* STEP 1: ENTER LINK CARD */}
      {inviteStep === 1 && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xs border border-[#F0EDE6] max-w-2xl mx-auto text-center space-y-6">
            {/* Mint Icon Badge */}
            <div className="w-20 h-20 rounded-full bg-[#30BB9C21] flex items-center justify-center mx-auto text-[#0D5C46] transition-transform hover:scale-105">
              <FiLink className="w-8 h-8 text-[#064335] stroke-[2.2]" />
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#000000]">
                Enter Group Invite Link
              </h3>
              <p className="text-xs sm:text-sm text-[#8798A6]">
                Paste the invite link you received from the group admin.
              </p>
            </div>

            {/* Form Input with Link Icon */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setInviteStep(2);
              }}
              className="space-y-5 max-w-xl mx-auto pt-1"
            >
              <div className="relative">
                <FiLink className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  value={inviteLink}
                  onChange={(e) => setInviteLink(e.target.value)}
                  placeholder="https://pallypot.com/invite/..."
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#D1D5DB] rounded-md text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0D5C46] focus:ring-1 focus:ring-[#0D5C46] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-[90%] py-3.5 bg-[#0B5D4B] hover:bg-[#094534] text-white font-medium rounded-md text-base transition-colors cursor-pointer active:scale-[0.99] shadow-xs"
              >
                Continue
              </button>
            </form>
          </div>

          {/* Info Notice Banner */}
          <div className="max-w-2xl mx-auto bg-[#E5F3EB] border border-[#D2E7DC] rounded-xl p-4 flex items-center gap-3.5">
            <ShieldCheck className="w-7 h-7 text-[#0D5C46] shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-[#0D5C46] leading-normal">
              This link is private and can only be used to join this group.
            </p>
          </div>
        </div>
      )}

      {/* STEP 2: SELECT POSITION */}
      {inviteStep === 2 && (
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Group Overview Banner */}
          <div className="bg-white rounded-xl p-2 shadow-xs border border-[#F3EFEA] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 sm:w-22 sm:h-22 rounded-xl bg-[#EFE3DD] text-[#5D130B] font-bold text-2xl sm:text-3xl flex items-center justify-center shrink-0 tracking-wider select-none">
                UAC
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#000000]">
                  Unity Ajo Circle
                </h3>
                <p className="text-xs sm:text-sm text-[#8798A6] mt-0.5 font-normal">
                  Saving together for a brighter tomorrow.
                </p>
                <div className="flex items-center gap-2.5 mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Group Admin"
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                  />
                  <div className="leading-tight">
                    <span className="text-[11px] font-semibold text-[#1F2937] block">
                      Group Admin
                    </span>
                    <span className="text-[11px] text-[#8798A6] font-normal block">
                      Tolu Adebayo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-start sm:mt-0.5">
              <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                Ajo
              </span>
              <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                Open
              </span>
            </div>
          </div>

          {/* Stat Metrics Row */}
          <div className="py-1 px-1">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D6]">
              {/* Total members */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:first:pl-0">
                <Users className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-[#000000] block leading-tight">
                    12
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    Total members
                  </span>
                </div>
              </div>

              {/* Monthly Contribution */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:pl-6">
                <Wallet className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-[#000000] block leading-tight">
                    ₦50,000
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    per month
                  </span>
                </div>
              </div>

              {/* Slots left */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:pl-6">
                <UserPlus className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base font-bold text-[#000000] block leading-tight">
                    6
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    Slots left
                  </span>
                </div>
              </div>

              {/* Total amount */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:pl-6">
                <Wallet className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base font-bold text-[#000000] block leading-tight">
                    ₦500,000
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    Total amount
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Select Payout Order Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs border border-[#F0EDE6] space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#000000]">
                Select Your Payout Order
              </h3>
              <p className="text-xs sm:text-sm text-[#8798A6] mt-1 font-normal">
                Choose the position you want to take for your payout.
              </p>
            </div>

            {/* Payout Slots Grid: Row 1 has 7 items, Row 2 has 5 items */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-y-5 sm:gap-y-6 gap-x-1.5 sm:gap-x-4 pt-2">
              {[
                { pos: 1, label: "1st", taken: true },
                { pos: 2, label: "2nd", taken: false },
                { pos: 3, label: "3rd", taken: true },
                { pos: 4, label: "4th", taken: false },
                { pos: 5, label: "5th", taken: false },
                { pos: 6, label: "6th", taken: true },
                { pos: 7, label: "7th", taken: true },
                { pos: 8, label: "8th", taken: true },
                { pos: 9, label: "9th", taken: false },
                { pos: 10, label: "10th", taken: true },
                { pos: 11, label: "11th", taken: false },
                { pos: 12, label: "12th", taken: false },
              ].map((slot) => {
                const isSelected = selectedInvitePosition === slot.pos;
                if (slot.taken) {
                  return (
                    <div
                      key={slot.pos}
                      className="flex flex-col items-center select-none"
                    >
                      <div className="w-11 h-11 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full bg-[#EFF1F4] text-[#B0B7BF] font-medium text-xs sm:text-sm flex items-center justify-center">
                        {slot.label}
                      </div>
                      <span className="text-[10px] sm:text-xs text-[#B0B7BF] mt-1.5 sm:mt-2 font-normal">
                        Taken
                      </span>
                    </div>
                  );
                }

                return (
                  <button
                    key={slot.pos}
                    type="button"
                    onClick={() => setSelectedInvitePosition(slot.pos)}
                    className="flex flex-col items-center cursor-pointer group focus:outline-none"
                  >
                    <div
                      className={`w-11 h-11 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-all ${
                        isSelected
                          ? "bg-[#0B5D4B] text-white border-2 border-[#0B5D4B] ring-2 ring-[#0B5D4B]/20 shadow-xs scale-105"
                          : "bg-white text-[#0B5D4B] border-2 border-[#1E8A73] hover:bg-[#EAF7EE]/50 group-hover:scale-105"
                      }`}
                    >
                      {slot.label}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs mt-1.5 sm:mt-2 transition-colors ${
                        isSelected
                          ? "font-bold text-[#0B5D4B]"
                          : "font-semibold text-[#1E8A73] group-hover:text-[#0B5D4B]"
                      }`}
                    >
                      {isSelected ? "Selected" : "Available"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Continue Button */}
            <div className="pt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setInviteStep(3)}
                className="w-full max-w-xs py-3.5 bg-[#0B5D4B] hover:bg-[#094534] text-white font-medium rounded-lg text-base transition-colors cursor-pointer active:scale-[0.99] shadow-xs text-center"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: CONFIRM & REQUEST TO JOIN */}
      {inviteStep === 3 && (
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Group Overview Banner */}
          <div className="bg-white rounded-xl p-2 shadow-xs border border-[#F3EFEA] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 sm:w-22 sm:h-22 rounded-xl bg-[#EFE3DD] text-[#5D130B] font-bold text-2xl sm:text-3xl flex items-center justify-center shrink-0 tracking-wider select-none">
                UAC
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#000000]">
                  Unity Ajo Circle
                </h3>
                <p className="text-xs sm:text-sm text-[#8798A6] mt-0.5 font-normal">
                  Saving together for a brighter tomorrow.
                </p>
                <div className="flex items-center gap-2.5 mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Group Admin"
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                  />
                  <div className="leading-tight">
                    <span className="text-[11px] font-semibold text-[#1F2937] block">
                      Group Admin
                    </span>
                    <span className="text-[11px] text-[#8798A6] font-normal block">
                      Tolu Adebayo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-start sm:mt-0.5">
              <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                Ajo
              </span>
              <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                Open
              </span>
            </div>
          </div>

          {/* Stat Metrics Row */}
          <div className="py-1 px-1">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D6]">
              {/* Total members */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:first:pl-0">
                <Users className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-[#000000] block leading-tight">
                    12
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    Total members
                  </span>
                </div>
              </div>

              {/* Monthly Contribution */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:pl-6">
                <Wallet className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-[#000000] block leading-tight">
                    ₦50,000
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    per month
                  </span>
                </div>
              </div>

              {/* Slots left */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:pl-6">
                <UserPlus className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-[#000000] block leading-tight">
                    6
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    Slots left
                  </span>
                </div>
              </div>

              {/* Total amount */}
              <div className="flex items-center gap-3.5 py-2 px-3 md:pl-6">
                <Wallet className="w-8 h-8 text-[#1A2E26] shrink-0 stroke-[1.5]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-[#000000] block leading-tight">
                    ₦500,000
                  </span>
                  <span className="text-xs text-[#8798A6] font-normal block mt-0.5">
                    Total amount
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Your Selected Payout Order Card */}
          <div className="bg-[#67EFD114] rounded-xl p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#67EFD124] flex items-center justify-center shrink-0">
              <Calendar className="w-7 h-7 sm:w-10 sm:h-10 text-[#0B5D4B] stroke-[1.8]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-[#8798A6] font-medium block">
                Your Selected Payout Order
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                {getSlotOrdinal(selectedInvitePosition || 2)} Slot
              </h3>
              <p className="text-xs sm:text-sm text-[#8798A6] leading-relaxed">
                You will receive your payout in the {getSlotOrdinal(selectedInvitePosition || 2)} cycle.
                <span className="block text-[11px] sm:text-xs text-[#8798A6] mt-0.5">
                  (Your estimated payout date will be shown after the start of the ajo).
                </span>
              </p>
            </div>
          </div>

          {/* Info / Notice Banner */}
          <div className="bg-[#FFFF0021] rounded-xl p-4 sm:p-5 flex items-center gap-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#8A6A1E] flex items-center justify-center shrink-0 text-[#432A06] font-serif font-bold text-base leading-none">
              i
            </div>
            <p className="text-xs sm:text-sm text-[#432A06] font-normal leading-relaxed">
              Once you request to join, the group admin will review and approve your request. You'll be notified once it's approved.
            </p>
          </div>

          {/* Request to Join Button */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={onComplete}
              className="w-full max-w-lg py-4 bg-[#0B5D4B] hover:bg-[#094534] text-white font-medium rounded-lg text-base transition-colors cursor-pointer active:scale-[0.99] shadow-xs text-center"
            >
              Request to Join
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
