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
  ShieldCheck,
  Lock,
  Check,
} from "lucide-react";
import { IoArrowDown, IoArrowUp, IoRepeat } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { CiRepeat } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import OpenGroupDetailView from "./groups/OpenGroupDetailView";
import OngoingGroupDetailView from "./groups/OngoingGroupDetailView";
import JoinWithInviteView from "./groups/JoinWithInviteView";

export default function Groups({
  onNavigate,
  initialGroupId = null,
  initialView = null,
}) {
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

  const [view, setView] = useState(() => {
    if (initialView) return initialView;
    if (
      typeof window !== "undefined" &&
      window.location.hash.toLowerCase().includes("invite")
    ) {
      return "join-invite";
    }
    return initialGroupId ? "detail" : "list";
  });
  const [inviteStep, setInviteStep] = useState(1);
  const [inviteLink, setInviteLink] = useState("");
  const [selectedInvitePosition, setSelectedInvitePosition] = useState(2);
  const [inviteAcceptedRules, setInviteAcceptedRules] = useState(false);
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

  const getSlotOrdinal = (n) => {
    if (typeof n === "string") return n;
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

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
    setInviteStep(1);
    setView("list");
  };


  // ==================== JOIN WITH INVITE VIEW ====================
  if (view === "join-invite") {
    return (
      <JoinWithInviteView
        onBack={handleBackToList}
        inviteStep={inviteStep}
        setInviteStep={setInviteStep}
        inviteLink={inviteLink}
        setInviteLink={setInviteLink}
        selectedInvitePosition={selectedInvitePosition}
        setSelectedInvitePosition={setSelectedInvitePosition}
        onComplete={handleBackToList}
        getSlotOrdinal={getSlotOrdinal}
      />
    );
  }



  // ==================== OPEN / DISCOVER GROUP DETAIL VIEW ====================
  if (view === "detail" && selectedGroup && selectedGroup.status === "Open") {
    return (
      <OpenGroupDetailView
        group={selectedGroup}
        selectedPayoutSlot={selectedPayoutSlot}
        setSelectedPayoutSlot={setSelectedPayoutSlot}
        getSlotOrdinal={getSlotOrdinal}
        onBack={handleBackToList}
        onJoinGroup={() => {
          setView("join-invite");
          setInviteStep(1);
        }}
      />
    );
  }

  // ==================== ONGOING GROUP DETAIL VIEW ====================
  if (view === "detail" && selectedGroup) {
    return (
      <OngoingGroupDetailView
        group={selectedGroup}
        onBack={handleBackToList}
        onNavigate={onNavigate}
      />
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
          <p className="text-sm sm:text-base text-[#7E7F7D] mt-0.5 font-normal">
            See the groups you belong to or discover new ones to join.
          </p>
        </div>
        <button
          onClick={() => {
            setInviteStep(1);
            setView("join-invite");
          }}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0B5D4B] text-[#0B5D4B] rounded-md text-sm font-semibold hover:bg-[#064335] hover:text-white transition-all cursor-pointer w-full sm:w-auto"
        >
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
                  className="w-full bg-[#064335] hover:bg-[#0B5D4B] text-white text-sm font-semibold py-2.5 rounded-md transition-colors flex items-center justify-center gap-2"
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
                className="w-full bg-[#064335] hover:bg-[#0B5D4B] text-white text-sm font-semibold py-2.5 rounded-md transition-colors flex items-center justify-center gap-2"
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
