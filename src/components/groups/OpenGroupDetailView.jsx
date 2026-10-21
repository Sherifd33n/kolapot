import React from "react";
import {
  ChevronLeft,
  Users,
  Wallet,
  UserPlus,
  Calendar,
  AlertCircle,
  FileText,
} from "lucide-react";
import { IoRepeat } from "react-icons/io5";

export default function OpenGroupDetailView({
  group,
  selectedPayoutSlot,
  setSelectedPayoutSlot,
  getSlotOrdinal,
  onBack,
  onJoinGroup,
}) {
  const g = group;

    return (
      <div key={`detail-open-${g.id}`} className="animate-tab-content space-y-4 sm:space-y-5">
        {/* Back Link */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1A2E26] hover:text-[#064335] transition-colors font-medium cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to My Savings Groups</span>
        </button>

        {/* Group Header Card */}
        <div className="bg-white rounded-md p-2 shadow-xs border border-[#F3EFEA]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-24 h-24 sm:w-22 sm:h-22 rounded-md bg-[#EFE3DD] text-[#5D130B] font-bold text-2xl sm:text-3xl flex items-center justify-center shrink-0 tracking-wider select-none">
                {g.initial || "UAC"}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  {g.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#737373] mt-1 font-normal">
                  {g.description || "Saving together for a brighter tomorrow."}
                </p>
                <div className="flex items-center gap-2.5 mt-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Group Admin"
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                  />
                  <div className="leading-tight">
                    <span className="text-[11px] font-semibold text-[#1F2937] block">
                      Group Admin
                    </span>
                    <a
                      href="#admin"
                      onClick={(e) => e.preventDefault()}
                      className="text-xs text-[#7E7F7D] font-normal block"
                    >
                      {g.admin || "Tolu Adebayo"}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                {g.badge || "Ajo"}
              </span>
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                Open
              </span>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Card 1: Total members */}
          <div className="bg-white rounded-md p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base font-bold text-[#111827] block leading-tight">
                {g.members || 12}
              </span>
              <span className="text-xs text-[#8A8D86] font-normal mt-0.5 block">
                Total members
              </span>
            </div>
          </div>

          {/* Card 2: Contribution frequency */}
          <div className="bg-white rounded-md p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base font-bold text-[#111827] block leading-tight">
                {g.contributionFrequency || "₦50,000/month"}
              </span>
              <span className="text-xs text-[#8A8D86] font-normal mt-0.5 block">
                Contribution frequency
              </span>
            </div>
          </div>

          {/* Card 3: Slots left */}
          <div className="bg-white rounded-md p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base font-bold text-[#111827] block leading-tight">
                {g.slotsLeft || 6}
              </span>
              <span className="text-xs text-[#8A8D86] font-normal mt-0.5 block">
                Slots left
              </span>
            </div>
          </div>

          {/* Card 4: Total amount */}
          <div className="bg-white rounded-md p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base font-bold text-[#111827] block leading-tight">
                {g.totalAmount || "₦500,000"}
              </span>
              <span className="text-xs text-[#8A8D86] font-normal mt-0.5 block">
                Total amount
              </span>
            </div>
          </div>
        </div>

        {/* Available Payout Order Card */}
        <div className="bg-white rounded-md p-6 shadow-xs border border-[#F3EFEA] space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-[#111827]">
            Available Payout order
          </h3>
          <div className="flex items-center gap-3.5 sm:gap-8 flex-wrap">
            {["1st", "2nd", "3rd", "4th", "5th", "7th", "8th", "9th"].map(
              (slot) => {
                const isSelected = selectedPayoutSlot === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedPayoutSlot(slot)}
                    className={`w-12 h-16 rounded-t-3xl rounded-b-3xl border flex flex-col items-center justify-between p-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-[#0B5D4B] bg-[#EAF7EE] text-[#0B5D4B] shadow-xs"
                        : "border-[#48B198] bg-white text-[#0B5D4B] hover:bg-[#F2FAF7]"
                    }`}
                  >
                    <span className="text-base font-bold mt-1">{slot}</span>
                    {isSelected ? (
                      <div className="w-5 h-5 rounded-full bg-[#084A3B] text-white flex items-center justify-center -mb-4">
                        <svg
                          className="w-3 h-3 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-[#48b14d] -mb-4" />
                    )}
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* Middle Row: Group members + Group rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Group members */}
          <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#000000]">
                Group members (6)
              </h3>
              <button
                onClick={() => alert("Viewing all members...")}
                className="text-sm underline font-semibold text-[#0B6B40] hover:underline cursor-pointer"
              >
                View all
              </button>
            </div>
            <div className="space-y-0">
              {[
                {
                  name: "Tolu Adebayo",
                  joined: "1 July 2026",
                  role: "Admin",
                  imgSeed: "m1",
                },
                {
                  name: "Tolu Adebayo",
                  joined: "1 July 2026",
                  role: "Member",
                  imgSeed: "m2",
                },
                {
                  name: "Tolu Adebayo",
                  joined: "1 July 2026",
                  role: "Member",
                  imgSeed: "m3",
                },
                {
                  name: "Tolu Adebayo",
                  joined: "1 July 2026",
                  role: "Member",
                  imgSeed: "m4",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-t border-[#F0EDE6]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E5E0D6] overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.imgSeed}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#000000]">
                        {member.name}
                      </h4>
                      <p className="text-[11px] text-[#7E7F7D]">
                        Joined {member.joined}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                      member.role === "Admin"
                        ? "bg-[#EAF7EE] text-[#1CB726]"
                        : "bg-[#F0EDE6] text-[#7E7F7D]"
                    }`}
                  >
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Group rules */}
          <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-4">
            <h3 className="text-base font-bold text-[#000000]">Group rules</h3>
            <div className="space-y-0">
              {[
                {
                  icon: Wallet,
                  label: "Contribution amount",
                  value: "₦50,000 per month",
                },
                {
                  icon: Calendar,
                  label: "Contribution frequency",
                  value: "Monthly",
                },
                {
                  icon: IoRepeat,
                  label: "Payout method",
                  value: "Rotational (turn-by-turn)",
                },
                {
                  icon: AlertCircle,
                  label: "Late payment rule",
                  value: "₦2,000 late fee after 3 days",
                },
                {
                  icon: FileText,
                  label: "Other rules",
                  value:
                    "All members must contribute on or before the due date.",
                },
              ].map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 py-3 border-t border-[#F0EDE6]"
                >
                  <div className="flex items-center gap-2 w-[50%]">
                    <rule.icon className="w-5 h-5 text-[#1D3832]" />
                    <span className="text-xs font-semibold text-[#000000] block">
                      {rule.label}
                    </span>
                  </div>
                  <span className="text-[12px] font-medium w-[50%] text-[#838385] block mt-0.5">
                    {rule.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Recent activity (8 cols) + Join this group (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Recent activity */}
          <div className="lg:col-span-8 bg-white rounded-md p-6 shadow-xs border border-[#F3EFEA] space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#111827]">
                Recent activity
              </h3>
              <button
                onClick={() => alert("Viewing all recent activities...")}
                className="text-xs font-semibold text-[#0B5D4B] underline hover:text-[#064335] cursor-pointer"
              >
                View all
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#F0F3F7] text-[#5D6B82] flex items-center justify-center shrink-0">
                    <UserPlus className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm leading-tight truncate">
                      <span className="font-bold text-[#111827]">
                        Funmi Akinola
                      </span>{" "}
                      <span className="text-[#8A8D86] font-normal">
                        joined the group
                      </span>
                    </p>
                    <p className="text-[11px] text-[#8A8D86] mt-0.5">
                      12 October 2026, 9:15 AM
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join this group */}
          <div className="lg:col-span-4 bg-white rounded-md p-3 shadow-xs">
            <div className="bg-[#8FEFAA4F] rounded-md p-3 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-lg font-bold text-[#111827]">
                Join this group
              </h3>
              <p className="text-xs text-[#52635B] mt-2 leading-relaxed">
                Your request will be reviewed by the group admin. You'll be
                notified once it's approved.
              </p>
            </div>
            <button
              onClick={() => alert("Request to join group submitted!")}
              className="w-full bg-[#084A3B] hover:bg-[#063B2F] text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors cursor-pointer"
            >
              Request to Join
            </button>
          </div> 
          </div>
         
        </div>
      </div>
    );
}
