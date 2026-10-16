import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  ChevronDown,
  ChevronRight,
  Users,
  Calendar,
  CreditCard,
  Clock,
  CheckCircle2,
  AlertCircle,
  UserPlus,
  MessageCircle,
  ExternalLink,
  Shield,
  FileText,
  TrendingUp,
  Plus,
  ChevronLeft,
  Wallet,
  Percent,
  ArrowUp,
} from "lucide-react";
import { IoArrowDown, IoArrowUp, IoRepeat } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { CiRepeat } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";

export default function Groups({ onNavigate, initialGroupId = null }) {
  const myGroups = [
    {
      id: 1,
      name: "Dream Builders",
      badge: "Ajo",
      badgeStyle: "bg-[#0B5D4B26] text-[#0B5D4B]",
      admin: "Adeola Williams",
      members: 12,
      contribution: "₦50,000",
      frequency: "per month",
      totalCommitment: "₦600,000",
      totalBreakdown: "₦20,000 × 12 cycles",
      status: "Ongoing",
      startDate: "11th Apr 2026",
      cycle: "10 of 26",
      nextContribution: "18 Oct 2026",
      initial: "D",
      initialBg: "bg-[#5D130B2B] text-[#5D130B]",
      // Detail view data
      description: "Building dreams together through consistent savings.",
      payoutPosition: "3rd (Oct 1, 2026)",
      contributionFrequency: "₦50,000/month",
      currentCycle: "Cycle 4 of 12",
      cycleProgress: 33,
      nextContributionAmount: "₦50,000",
      nextContributionDate: "19 October 2026",
      groupHealth: {
        contributionCompletion: 33,
        completionFraction: "4 of 12 Builders",
        outstandingContributions: 1,
        outstandingLabel: "This cycle",
        payoutsOnTime: "100%",
        payoutsLabel: "Payouts completed on time",
      },
      groupMembers: [
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Admin" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
      ],
      rules: {
        contributionAmount: "₦50,000 per month",
        contributionFrequency: "Monthly",
        payoutMethod: "Rotational (turn by turn)",
        latePaymentRule: "₦2,000 late fee after 3 days",
        otherRules: "All members must contribute on or before the due date.",
      },
      recentActivity: [
        {
          user: "Kunle Adebola",
          action: "made a contribution",
          amount: "₦50,000",
          date: "13 October 2026, 10:14 AM",
          isIncoming: false,
        },
        {
          user: "Tolu Adebayo",
          action: "Payout received by",
          amount: "₦450,000",
          date: "Cycle 2, 11 October 2026",
          isIncoming: true,
        },
        {
          user: "Kunle Adebola",
          action: "made a contribution",
          amount: "₦50,000",
          date: "13 October 2026, 10:14 AM",
          isIncoming: false,
        },
        {
          user: "Tolu Adebayo",
          action: "Payout received by",
          amount: "₦450,000",
          date: "Cycle 2, 11 October 2026",
          isIncoming: true,
        },
        {
          user: "Kunle Akinola",
          action: "made a contribution",
          amount: "₦50,000",
          date: "13 October 2026, 10:14 AM",
          isIncoming: false,
        },
        {
          user: "Kunle Akinola",
          action: "made a contribution",
          amount: "₦50,000",
          date: "13 October 2026, 10:14 AM",
          isIncoming: false,
        },
      ],
    },
    {
      id: 2,
      name: "Unity Ajo Circle",
      badge: "Esusu",
      badgeStyle: "bg-[#14709D26] text-[#14709D]",
      admin: "Adeola Williams",
      members: 12,
      contribution: "₦50,000",
      frequency: "per month",
      totalCommitment: "₦600,000",
      totalBreakdown: "₦20,000 × 12 cycles",
      status: "Ongoing",
      startDate: "11th Apr 2026",
      cycle: "10 of 26",
      nextContribution: "18 Oct 2026",
      initial: "D",
      initialBg: "bg-[#5D130B2B] text-[#5D130B]",
      description: "Saving together for a brighter tomorrow.",
      payoutPosition: "3rd (Oct 1, 2026)",
      contributionFrequency: "₦50,000/month",
      currentCycle: "Cycle 4 of 12",
      cycleProgress: 33,
      nextContributionAmount: "₦50,000",
      nextContributionDate: "19 October 2026",
      groupHealth: {
        contributionCompletion: 33,
        completionFraction: "4 of 12 Builders",
        outstandingContributions: 1,
        outstandingLabel: "This cycle",
        payoutsOnTime: "100%",
        payoutsLabel: "Payouts completed on time",
      },
      groupMembers: [
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Admin" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
      ],
      rules: {
        contributionAmount: "₦50,000 per month",
        contributionFrequency: "Monthly",
        payoutMethod: "Rotational (turn by turn)",
        latePaymentRule: "₦2,000 late fee after 3 days",
        otherRules: "All members must contribute on or before the due date.",
      },
      recentActivity: [
        {
          user: "Kunle Adebola",
          action: "made a contribution",
          amount: "₦50,000",
          date: "13 October 2026, 10:14 AM",
          isIncoming: false,
        },
        {
          user: "Tolu Adebayo",
          action: "Payout received by",
          amount: "₦450,000",
          date: "Cycle 2, 11 October 2026",
          isIncoming: true,
        },
      ],
    },
    {
      id: 3,
      name: "Dream Builders",
      badge: "Adashi",
      badgeStyle: "bg-[#F67E0D26] text-[#F67E0D]",
      admin: "Adeola Williams",
      members: 12,
      contribution: "₦50,000",
      frequency: "per month",
      totalCommitment: "₦600,000",
      totalBreakdown: "₦20,000 × 12 cycles",
      status: "Ongoing",
      startDate: "11th Apr 2026",
      cycle: "10 of 26",
      nextContribution: "18 Oct 2026",
      initial: "D",
      initialBg: "bg-[#5D130B2B] text-[#5D130B]",
      description: "Building dreams together through consistent savings.",
      payoutPosition: "3rd (Oct 1, 2026)",
      contributionFrequency: "₦50,000/month",
      currentCycle: "Cycle 4 of 12",
      cycleProgress: 33,
      nextContributionAmount: "₦50,000",
      nextContributionDate: "19 October 2026",
      groupHealth: {
        contributionCompletion: 33,
        completionFraction: "4 of 12 Builders",
        outstandingContributions: 1,
        outstandingLabel: "This cycle",
        payoutsOnTime: "100%",
        payoutsLabel: "Payouts completed on time",
      },
      groupMembers: [
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Admin" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
        { name: "Tolu Adebayo", joined: "1 July 2026", role: "Member" },
      ],
      rules: {
        contributionAmount: "₦50,000 per month",
        contributionFrequency: "Monthly",
        payoutMethod: "Rotational (turn by turn)",
        latePaymentRule: "₦2,000 late fee after 3 days",
        otherRules: "All members must contribute on or before the due date.",
      },
      recentActivity: [
        {
          user: "Kunle Adebola",
          action: "made a contribution",
          amount: "₦50,000",
          date: "13 October 2026, 10:14 AM",
          isIncoming: false,
        },
        {
          user: "Tolu Adebayo",
          action: "Payout received by",
          amount: "₦450,000",
          date: "Cycle 2, 11 October 2026",
          isIncoming: true,
        },
      ],
    },
  ];

  const discoverGroups = [
    {
      id: 101,
      name: "Dream Builders",
      initial: "D",
      initialBg: "bg-[#EFE3DD] text-[#5D130B]",
      badge: "Ajo",
      badgeStyle: "bg-[#EAF7EE] text-[#1CB726]",
      status: "Open",
      admin: "Adeola Williams",
      description: "Saving together for a brighter tomorrow.",
      members: 12,
      displayMembers: 8,
      contribution: "₦50,000",
      frequency: "per month",
      contributionFrequency: "₦50,000/month",
      totalCommitment: "₦600,000",
      totalBreakdown: "₦20,000 × 12 cycles",
      totalAmount: "₦500,000",
      slotsLeft: 6,
      cardSlotsLeft: 2,
    },
    {
      id: 102,
      name: "Dream Builders",
      initial: "D",
      initialBg: "bg-[#EFE3DD] text-[#5D130B]",
      badge: "Ajo",
      badgeStyle: "bg-[#EAF7EE] text-[#1CB726]",
      status: "Open",
      admin: "Adeola Williams",
      description: "Saving together for a brighter tomorrow.",
      members: 12,
      displayMembers: 8,
      contribution: "₦50,000",
      frequency: "per month",
      contributionFrequency: "₦50,000/month",
      totalCommitment: "₦600,000",
      totalBreakdown: "₦20,000 × 12 cycles",
      totalAmount: "₦500,000",
      slotsLeft: 6,
      cardSlotsLeft: 2,
    },
    {
      id: 103,
      name: "Dream Builders",
      initial: "D",
      initialBg: "bg-[#EFE3DD] text-[#5D130B]",
      badge: "Ajo",
      badgeStyle: "bg-[#EAF7EE] text-[#1CB726]",
      status: "Open",
      admin: "Adeola Williams",
      description: "Saving together for a brighter tomorrow.",
      members: 12,
      displayMembers: 8,
      contribution: "₦50,000",
      frequency: "per month",
      contributionFrequency: "₦50,000/month",
      totalCommitment: "₦600,000",
      totalBreakdown: "₦20,000 × 12 cycles",
      totalAmount: "₦500,000",
      slotsLeft: 6,
      cardSlotsLeft: 2,
    },
  ];

  const [view, setView] = useState(() => (initialGroupId ? "detail" : "list"));
  const [selectedGroup, setSelectedGroup] = useState(() =>
    initialGroupId
      ? myGroups.find((g) => g.id === initialGroupId) || null
      : null,
  );
  const [activeGroupTab, setActiveGroupTab] = useState("my-groups");
  const [searchQuery, setSearchQuery] = useState("");
  const [groupTypeFilter, setGroupTypeFilter] = useState("All group types");
  const [frequencyFilter, setFrequencyFilter] = useState("All frequencies");
  const [selectedPayoutSlot, setSelectedPayoutSlot] = useState("1st");

  const handleViewGroup = (group) => {
    if (group.status === "Open") {
      setSelectedGroup({
        ...group,
        name: "Unity Ajo Circle",
        initial: "UAC",
      });
    } else {
      setSelectedGroup(group);
    }
    setView("detail");
  };

  const handleBackToList = () => {
    setSelectedGroup(null);
    setView("list");
  };

  // ==================== OPEN / DISCOVER GROUP DETAIL VIEW ====================
  if (view === "detail" && selectedGroup && selectedGroup.status === "Open") {
    const g = selectedGroup;
    return (
      <div key={`detail-open-${g.id}`} className="animate-tab-content space-y-4 sm:space-y-5">
        {/* Back Link */}
        <button
          onClick={handleBackToList}
          className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1A2E26] hover:text-[#064335] transition-colors font-medium cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to My Savings Groups</span>
        </button>

        {/* Group Header Card */}
        <div className="bg-white rounded-xl p-2 shadow-xs border border-[#F3EFEA]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-24 h-24 sm:w-22 sm:h-22 rounded-xl bg-[#EFE3DD] text-[#5D130B] font-bold text-2xl sm:text-3xl flex items-center justify-center shrink-0 tracking-wider select-none">
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
          <div className="bg-white rounded-xl p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
          <div className="bg-white rounded-xl p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
          <div className="bg-white rounded-xl p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
          <div className="bg-white rounded-xl p-3 shadow-xs border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
        <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#F3EFEA] space-y-4">
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
                    className={`w-12 h-16 rounded-t-3xl rounded-b-3xl border-2 flex flex-col items-center justify-between p-2 cursor-pointer transition-all ${
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
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-4">
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
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-4">
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
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 shadow-xs border border-[#F3EFEA] space-y-5">
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
          <div className="lg:col-span-4 bg-white rounded-2xl p-3 shadow-xs">
            <div className="bg-[#8FEFAA4F] rounded-2xl p-3 flex flex-col justify-between space-y-4">
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

  // ==================== ONGOING GROUP DETAIL VIEW ====================
  if (view === "detail" && selectedGroup) {
    const g = selectedGroup;
    return (
      <div key={`detail-${g.id}`} className="animate-tab-content space-y-4 sm:space-y-5">
        {/* Back Link */}
        <button
          onClick={handleBackToList}
          className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1A2E26] hover:text-[#064335] transition-colors font-medium cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to my savings groups</span>
        </button>

        {/* Group Header Card */}
        <div className="bg-white rounded-xl p-2 pr-6 shadow-sm border border-[#F3EFEA]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            {/* Left side: Avatar Box + Info */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-24 h-24 sm:w-22 sm:h-22 rounded-xl bg-[#EFE3DD] text-[#5D130B] font-bold text-2xl sm:text-3xl flex items-center justify-center shrink-0 tracking-wider select-none">
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
          <div className="bg-white rounded-xl p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#F3EFEA] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E3F6EC] text-[#0B5D4B] flex items-center justify-center shrink-0">
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
          <div className="lg:col-span-8 bg-white rounded-xl p-3 shadow-xs border border-[#F3EFEA] space-y-3">
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
          <div className="lg:col-span-4 bg-[#DFF5E8] border border-[#CCEEDB] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/70 text-[#08523F] flex items-center justify-center shrink-0">
                <Calendar
                  className="w-6 h-6 text-[#08523F]"
                  strokeWidth={1.5}
                />
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
              className="w-full bg-[#064335] hover:bg-[#0B5D4B] text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Make Contribution</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Group health */}
        <div className="bg-white rounded-xl p-3 shadow-xs border border-[#F3EFEA] space-y-4">
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
        <div className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-xs border border-[#F3EFEA]">
          <div className="bg-[#8FEFAA4F] rounded-xl p-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-xs">
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
        <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#F3EFEA] space-y-6">
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

  // ==================== GROUPS LIST VIEW ====================
  const filteredGroups = myGroups.filter((g) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      g.name.toLowerCase().includes(query) ||
      g.badge.toLowerCase().includes(query) ||
      g.admin.toLowerCase().includes(query)
    );
  });

  const filteredDiscoverGroups = discoverGroups.filter((g) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      g.name.toLowerCase().includes(query) ||
      g.badge.toLowerCase().includes(query) ||
      g.admin.toLowerCase().includes(query)
    );
  });

  return (
    <div key="group-list" className="animate-tab-content space-y-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-['Inria Serif',serif] font-normal text-[#063127]">
            My Savings Groups
          </h2>
          <p className="text-xs sm:text-sm text-[#7E7F7D] mt-0.5 font-semibold">
            See the groups you belong to or discover new ones to join.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0B5D4B] text-[#0B5D4B] rounded-md text-sm font-semibold hover:bg-[#064335] hover:text-white transition-all cursor-pointer w-full sm:w-auto">
          <FiLink className="w-4 h-4" />
          <span>Join with Invite</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#F0EDE6] rounded-md max-w-md w-full p-1 gap-1">
        <button
          onClick={() => setActiveGroupTab("my-groups")}
          className={`flex-1 py-3.5 px-4 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeGroupTab === "my-groups"
              ? "bg-[#084A3B] text-white shadow-md scale-[1.01]"
              : "text-[#7E7F7D] hover:text-[#1A2E26] hover:bg-[#E5E0D6]/40"
          }`}
        >
          My Groups ({myGroups.length})
        </button>
        <button
          onClick={() => setActiveGroupTab("discover")}
          className={`flex-1 py-3.5 px-4 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeGroupTab === "discover"
              ? "bg-[#084A3B] text-white shadow-md scale-[1.01]"
              : "text-[#7E7F7D] hover:text-[#1A2E26] hover:bg-[#E5E0D6]/40"
          }`}
        >
          Discover Groups
        </button>
      </div>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
          <input
            type="text"
            placeholder="Search groups by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#EBE6DD] rounded-md text-sm text-[#1A2E26] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#064335] transition-colors"
          />
        </div>
        <button className="flex items-center justify-between px-4 py-3 bg-white border border-[#EBE6DD] rounded-md text-sm text-[#7E7F7D] hover:border-[#064335] transition-colors">
          <span>{groupTypeFilter}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center justify-between px-4 py-3 bg-white border border-[#EBE6DD] rounded-md text-sm text-[#7E7F7D] hover:border-[#064335] transition-colors">
          <span>{frequencyFilter}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Groups Grid */}
      <div key={activeGroupTab} className="animate-tab-content">
        {activeGroupTab === "my-groups" ? (
        filteredGroups.length === 0 ? (
          <div className="bg-white rounded-xl p-12 shadow-xl text-center space-y-3">
            <p className="text-sm text-[#7E7F7D]">
              No groups matching "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-xl p-5 shadow-xl space-y-4 hover:shadow-2xl transition-shadow"
              >
                {/* Group Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-full ${group.initialBg} font-bold text-2xl flex items-center justify-center shrink-0`}
                      >
                        {group.initial}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-[#075140]">
                            {group.name}
                          </h4>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${group.badgeStyle}`}
                          >
                            {group.badge}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#7A7D78] mt-0.5">
                          Group Admin: {group.admin}
                        </p>{" "}
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full bg-[#E5E0D6] border-2 border-white overflow-hidden"
                              >
                                <img
                                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${group.name}${i}`}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                          <span className="text-[11px] text-[#7E7F7D] font-medium">
                            {group.members} members
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contribution Info */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-2xl font-bold text-[#0B5D4B] block">
                      {group.contribution}
                    </span>
                    <span className="text-[11px] text-[#7E7F7D] block">
                      {group.frequency}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-semibold text-[#7E7F7D] block">
                      Total commitment
                    </span>
                    <span className="text-sm font-bold text-[#000000] block">
                      {group.totalCommitment}
                    </span>
                    <span className="text-[10px] text-[#7E7F7D] block">
                      {group.totalBreakdown}
                    </span>
                  </div>
                </div>

                {/* Status & Date Row */}
                <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#F0EDE6]">
                  <div>
                    <span className="text-[11px] text-[#7E7F7D] block font-medium">
                      Status
                    </span>
                    <span className="text-sm font-bold text-[#000000] block">
                      {group.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#7E7F7D] block font-medium">
                      Start Date
                    </span>
                    <span className="text-sm font-bold text-[#000000] block">
                      {group.startDate}
                    </span>
                  </div>
                </div>

                {/* Cycle & Next Contribution */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-1.5">
                    <IoRepeat className="w-7 h-7 text-[#0B5D4B]" />
                    <div>
                      <span className="text-[11px] text-[#7E7F7D] block font-medium">
                        Cycle
                      </span>
                      <span className="text-xs font-bold text-[#000000]">
                        {group.cycle}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <Calendar className="w-6 h-6 text-[#0B5D4B]" />
                    <div className="">
                      <span className="text-[11px] text-[#7E7F7D] block font-medium">
                        Next contribution
                      </span>
                      <span className="text-xs font-bold text-[#000000]">
                        {group.nextContribution}
                      </span>
                    </div>
                  </div>
                </div>

                {/* View Group Button */}
                <button
                  onClick={() => handleViewGroup(group)}
                  className="w-full bg-[#064335] hover:bg-[#0B5D4B] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  View Group →
                </button>
              </div>
            ))}
          </div>
        )
      ) : filteredDiscoverGroups.length === 0 ? (
        <div className="bg-white rounded-xl p-12 shadow-xl text-center space-y-3">
          <p className="text-sm text-[#7E7F7D]">
            No groups matching "{searchQuery}"
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDiscoverGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl p-5 shadow-xl space-y-4 hover:shadow-2xl transition-shadow"
            >
              {/* Group Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-full ${group.initialBg} font-bold text-2xl flex items-center justify-center shrink-0`}
                    >
                      {group.initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-[#075140]">
                          {group.name}
                        </h4>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${group.badgeStyle}`}
                        >
                          {group.badge}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#7A7D78] mt-0.5">
                        Group Admin: {group.admin}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex -space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded-full bg-[#E5E0D6] border-2 border-white overflow-hidden"
                            >
                              <img
                                src={`https://api.dicebear.com/7.x/notionists/svg?seed=discover${group.id}${i}`}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-[11px] text-[#7E7F7D] font-medium">
                          {group.displayMembers || group.members} members
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contribution Info */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-2xl font-bold text-[#0B5D4B] block">
                    {group.contribution}
                  </span>
                  <span className="text-[11px] text-[#7E7F7D] block">
                    {group.frequency}
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-[#7E7F7D] block">
                    Total commitment
                  </span>
                  <span className="text-sm font-bold text-[#000000] block">
                    {group.totalCommitment}
                  </span>
                  <span className="text-[10px] text-[#7E7F7D] block">
                    {group.totalBreakdown}
                  </span>
                </div>
              </div>

              {/* Status & Slots Left */}
              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#F0EDE6]">
                <div>
                  <span className="text-[11px] text-[#7E7F7D] block font-medium">
                    Status
                  </span>
                  <span className="text-sm font-bold text-[#000000] block">
                    {group.status}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#7E7F7D] block font-medium">
                    Slots left
                  </span>
                  <span className="text-sm font-bold text-[#000000] block">
                    {group.cardSlotsLeft || group.slotsLeft}
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => handleViewGroup(group)}
                className="w-full bg-[#064335] hover:bg-[#0B5D4B] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
