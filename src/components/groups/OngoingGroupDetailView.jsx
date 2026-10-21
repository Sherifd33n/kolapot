import React from "react";
import {
  ChevronLeft,
  Users,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Wallet,
  Percent,
  ArrowUp,
  CreditCard,
  TrendingUp,
  Clock,
  FileText,
} from "lucide-react";
import { IoRepeat } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";

export default function OngoingGroupDetailView({ group, onBack, onNavigate }) {
  const g = group;

  return (
    <div
      key={`detail-${g.id}`}
      className="animate-tab-content space-y-4 sm:space-y-5"
    >
      {/* Back Link */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1A2E26] hover:text-[#064335] transition-colors font-medium cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to my savings groups</span>
      </button>

      {/* Group Header Card */}
      <div className="bg-white rounded-md p-2 pr-6 shadow-sm border border-[#F3EFEA]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          {/* Left side: Avatar Box + Info */}
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-24 h-24 sm:w-22 sm:h-22 rounded-md bg-[#EFE3DD] text-[#5D130B] font-bold text-2xl sm:text-3xl flex items-center justify-center shrink-0 tracking-wider select-none">
              {g.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 3)}
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
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
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

          {/* Right side: Badges and Start Date */}
          <div className="flex flex-col items-start sm:items-end justify-between self-stretch gap-4 sm:gap-8 pt-0.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                {g.badge || "Ajo"}
              </span>
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#EAF7EE] text-[#1CB726]">
                {g.status || "Ongoing"}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-[#737373] font-normal">
              Start Date:{" "}
              <span className="text-[#737373]">
                {g.startDate || "11 July 2026"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row (4 Independent Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Members */}
        <div className="bg-white rounded-md p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-base font-bold text-[#111827] block leading-tight">
              {g.members}
            </span>
            <span className="text-xs text-[#8A8D86] font-normal mt-0.5 block">
              Members
            </span>
          </div>
        </div>

        {/* Your payout position */}
        <div className="bg-white rounded-md p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-base font-bold text-[#111827] block leading-tight">
              {g.payoutPosition || "3rd (Oct 1, 2026)"}
            </span>
            <span className="text-xs text-[#8A8D86] font-normal mt-0.5 block">
              Your payout position
            </span>
          </div>
        </div>

        {/* Contribution frequency */}
        <div className="bg-white rounded-md p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
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

        {/* Current cycle */}
        <div className="bg-white rounded-md p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
            <IoRepeat className="w-6 h-6" />
          </div>
          <div>
            <span className="text-base font-bold text-[#111827] block leading-tight">
              {g.currentCycle || "Cycle 4 of 12"}
            </span>
            <span className="text-xs text-[#8A8D86] font-normal mt-0.5 block">
              Current cycle
            </span>
          </div>
        </div>
      </div>

      {/* Current Cycle + Next Contribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        {/* Current Cycle Card (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-md p-3 shadow-xs border border-[#F3EFEA] space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-[#111827]">
            Current cycle
          </h3>

          {/* Progress Bar + % */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-3.5 bg-[#E9ECEF] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#08523F] rounded-full transition-all duration-500"
                style={{ width: `${g.cycleProgress || 33}%` }}
              />
            </div>
            <span className="text-sm sm:text-base font-bold text-[#111827] shrink-0">
              {g.cycleProgress || 33}%
            </span>
          </div>

          {/* 3 Date Columns with faint dividers */}
          <div className="border-t border-[#F0ECE6] pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F0ECE6]">
            {/* Col 1 */}
            <div className="flex items-center gap-3">
              <Calendar
                className="w-6 h-6 text-[#4B5563] shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <span className="text-[11px] text-[#8A8D86] font-normal block leading-tight">
                  Cycle start date
                </span>
                <span className="text-xs font-semibold text-[#111827] block mt-0.5">
                  11 August 2026
                </span>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-4">
              <Calendar
                className="w-6 h-6 text-[#4B5563] shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <span className="text-[11px] text-[#8A8D86] font-normal block leading-tight">
                  Cycle end date
                </span>
                <span className="text-xs font-semibold text-[#111827] block mt-0.5">
                  11 Sept 2026
                </span>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-4">
              <Calendar
                className="w-6 h-6 text-[#4B5563] shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <span className="text-[11px] text-[#8A8D86] font-normal block leading-tight">
                  Next payout date
                </span>
                <span className="text-xs font-semibold text-[#111827] block mt-0.5">
                  12 Sept 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Contribution Card (4 cols) - Pastel Mint Background */}
        <div className="lg:col-span-4 bg-[#DFF5E8] border border-[#CCEEDB] rounded-md p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-md bg-[#20B19112] text-[#0B5D4B] flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-[#08523F]" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#0B5D4B] block leading-tight">
                Next contribution
              </span>
              <span className="text-2xl font-bold text-[#111827] block mt-0.5">
                {g.nextContributionAmount || "₦50,000"}
              </span>
              <span className="text-xs text-[#737373] block mt-0.5">
                {g.nextContributionDate || "15 October 2026"}
              </span>
            </div>
          </div>

          <button
            onClick={() => alert("Initiating contribution payment...")}
            className="w-full bg-[#0B5D4B] hover:bg-[#0B5D4B] text-white text-sm font-semibold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <span>Make Contribution</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Group health */}
      <div className="bg-white rounded-md p-3 shadow-xs border border-[#F3EFEA] space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-[#111827]">
          Group health
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Card 1: Contribution completion */}
          <div className="p-2 rounded-xl bg-[#F8F9FA] flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#14709D26] text-[#1B6CA8] flex items-center justify-center shrink-0">
              <Percent className="w-6 h-6 text-[#14709D]" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-[#111827] block leading-tight">
                {g.groupHealth?.contributionCompletion || 33}%
              </span>
              <span className="text-xs text-[#737373] font-medium block mt-0.5">
                Contribution completion
              </span>
              <span className="text-[11px] text-[#9CA3AF] block">
                {g.groupHealth?.completionFraction || "4 of 12 contributions"}
              </span>
            </div>
          </div>

          {/* Card 2: Outstanding contribution (Blue outline selection) */}
          <div className="p-2 rounded-xl bg-[#F8F9FA] flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#4A0B5D26] text-[#4A0B5D] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[#6A2B70]" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-[#111827] block leading-tight">
                {g.groupHealth?.outstandingContributions || 1}
              </span>
              <span className="text-xs text-[#737373] font-medium block mt-0.5">
                Outstanding contribution
              </span>
              <span className="text-[11px] text-[#9CA3AF] block">
                {g.groupHealth?.outstandingLabel || "This cycle"}
              </span>
            </div>
          </div>

          {/* Card 3: Payouts on time */}
          <div className="p-2 rounded-xl bg-[#F8F9FA] flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#0E8F4426] text-[#0E8F44] flex items-center justify-center shrink-0">
              <CheckCircle2
                className="w-6 h-6 text-[#1CB726]"
                strokeWidth={1.75}
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-[#111827] block leading-tight">
                {g.groupHealth?.payoutsOnTime || "100%"}
              </span>
              <span className="text-xs text-[#737373] font-medium block mt-0.5">
                Payouts completed on time
              </span>
              <span className="text-[11px] text-[#9CA3AF] block">
                Previous cycles
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Group Members + Group Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Group Members */}
        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#000000]">
              Group members ({g.members})
            </h3>
            <button className="text-sm underline font-semibold text-[#0B6B40] hover:underline flex items-center gap-1">
              View all
            </button>
          </div>
          <div className="space-y-0">
            {g.groupMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-3 border-t border-[#F0EDE6]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E5E0D6] overflow-hidden flex items-center justify-center shrink-0">
                    <img
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.name}${idx}`}
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
                      ? "bg-[#1CB72626] text-[#1CB726]"
                      : "bg-[#14709D26] text-[#14709D]"
                  }`}
                >
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Group Rules */}
        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-[#000000]">Group rules</h3>
          <div className="space-y-0">
            {[
              {
                icon: CreditCard,
                label: "Contribution amount",
                value: g.rules.contributionAmount,
              },
              {
                icon: Calendar,
                label: "Contribution frequency",
                value: g.rules.contributionFrequency,
              },
              {
                icon: TrendingUp,
                label: "Payout method",
                value: g.rules.payoutMethod,
              },
              {
                icon: Clock,
                label: "Late payment rule",
                value: g.rules.latePaymentRule,
              },
              {
                icon: FileText,
                label: "Other rules",
                value: g.rules.otherRules,
              },
            ].map((rule, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-3 py-3 border-t border-[#F0EDE6]"
              >
                <div className="flex items-center gap-2 w-[50%]">
                  {" "}
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

      {/* WhatsApp Group */}
      <div className="bg-white rounded-md p-2 sm:p-2.5 shadow-xs border border-[#F3EFEA]">
        <div className="bg-[#8FEFAA4F] rounded-md p-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-[#25D366] flex items-center justify-center shrink-0 shadow-xs">
              <FaWhatsapp className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-xl font-bold text-[#000000]">
                WhatsApp group
              </h3>
              <p className="text-xs font-semibold sm:text-sm text-[#7E7F7D] mt-0.5">
                Stay connected with your savings community.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-[#19572B]">
                  <GoCheckCircleFill size={15} color="#16A34A" />

                  <span>Get contribution reminders</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#19572B]">
                  <GoCheckCircleFill size={15} color="#16A34A" />
                  <span>Receive payout updates</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#19572B]">
                  <GoCheckCircleFill size={15} color="#16A34A" />
                  <span>Chat with group members</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.open("https://chat.whatsapp.com", "_blank")}
            className="bg-[#0B5D4B] hover:bg-[#063B2F] text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-md flex items-center gap-2 shadow-xs transition-colors shrink-0 cursor-pointer self-start md:self-center"
          >
            <span>Open WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-md p-6 shadow-xs border border-[#F3EFEA] space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
            Recent activity
          </h3>
          <button
            onClick={() => alert("Viewing all recent activities...")}
            className="text-xs sm:text-sm font-semibold text-[#0B5D4B] underline hover:text-[#064335] cursor-pointer"
          >
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
          {[
            {
              type: "contribution",
              name: "Kunle Adeola",
              action: "made a contribution",
              amount: "₦50,000",
              date: "12 October 2026, 10:24 AM",
            },
            {
              type: "payout",
              name: "Tolu Adebayo",
              action: "Payout received by",
              amount: "₦600,000",
              date: "Cycle 3 - 30 September 2026",
            },
            {
              type: "contribution",
              name: "Funmi Akinola",
              action: "made a contribution",
              amount: "₦50,000",
              date: "12 October 2026, 10:24 AM",
            },
            {
              type: "contribution",
              name: "Kunle Adeola",
              action: "made a contribution",
              amount: "₦50,000",
              date: "12 October 2026, 10:24 AM",
            },
            {
              type: "payout",
              name: "Tolu Adebayo",
              action: "Payout received by",
              amount: "₦600,000",
              date: "Cycle 3 - 30 September 2026",
            },
            {
              type: "contribution",
              name: "Funmi Akinola",
              action: "made a contribution",
              amount: "₦50,000",
              date: "12 October 2026, 10:24 AM",
            },
          ].map((act, idx) => (
            <div key={idx} className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#F0F3F7] flex items-center justify-center shrink-0">
                {act.type === "contribution" ? (
                  <ArrowUp
                    className="w-5 h-5 text-[#5D6B82]"
                    strokeWidth={1.75}
                  />
                ) : (
                  <svg
                    className="w-5 h-5 text-[#5D6B82]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="13" rx="2.5" />
                    <circle cx="16" cy="11.5" r="1" fill="currentColor" />
                    <path d="M7 14h6a2 2 0 0 1 2 2v1" />
                    <path d="M10 11l-3 3 3 3" />
                  </svg>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm leading-tight truncate">
                  {act.type === "contribution" ? (
                    <>
                      <span className="font-bold text-[#111827]">
                        {act.name}
                      </span>{" "}
                      <span className="text-[#8A8D86] font-normal">
                        {act.action}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#8A8D86] font-normal">
                        {act.action}
                      </span>{" "}
                      <span className="font-bold text-[#111827]">
                        {act.name}
                      </span>
                    </>
                  )}
                </p>
                <p className="text-[11px] sm:text-xs text-[#8A8D86] mt-1 font-normal">
                  {act.amount} · {act.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
