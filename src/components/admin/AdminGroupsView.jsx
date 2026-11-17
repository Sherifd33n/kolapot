import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Users,
  Coins,
  RefreshCw,
  Calendar,
  PieChart,
  Copy,
  Check,
  Link as LinkIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CreateGroupWizard from "./CreateGroupWizard";
import ManageGroupView from "./ManageGroupView";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbDatabasePlus } from "react-icons/tb";
import { LuRepeat } from "react-icons/lu";
import { AiOutlinePieChart } from "react-icons/ai";

export default function AdminGroupsView({
  onNavigate,
  initialView = "list",
  onViewChange,
}) {
  const [view, setView] = useState(initialView); // "list" | "create" | "manage"
  const [managedGroup, setManagedGroup] = useState(null);

  useEffect(() => {
    onViewChange?.(view);
  }, [view, onViewChange]);
  const [activeFilter, setActiveFilter] = useState("All Groups");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  const [administeredGroups, setAdministeredGroups] = useState([
    {
      id: "admin-g-1",
      name: "Unity Ajo Circle",
      type: "Ajo",
      frequency: "Monthly",
      membersCount: 10,
      status: "Active",
      badgeColor: "bg-[#32ED1130] text-[#0B6B40]",
      contributionAmount: "₦60,000/month",
      currentCycle: "Cycle 4 of 10",
      nextDateLabel: "Next Contribution",
      nextDate: "5 Nov 2026",
      progress: "83%",
      initial: "UAC",
      initialBg: "bg-[#ECD7CE] text-[#783928]",
    },
    {
      id: "admin-g-2",
      name: "Unity Ajo Circle",
      type: "Ajo",
      frequency: "Monthly",
      membersCount: 10,
      status: "Upcoming",
      badgeColor: "bg-[#DDF0FA] text-[#136B94]",
      contributionAmount: "₦60,000/month",
      currentCycle: "—",
      nextDateLabel: "Start Date",
      nextDate: "—",
      progress: "0%",
      initial: "UAC",
      initialBg: "bg-[#ECD7CE] text-[#783928]",
      inviteLink: "https://pallypot.com/invite/MARK8D?utm_source=kk.com",
    },
    {
      id: "admin-g-3",
      name: "Unity Ajo Circle",
      type: "Ajo",
      frequency: "Monthly",
      membersCount: 10,
      status: "Active",
      badgeColor: "bg-[#32ED1130] text-[#0B6B40]",
      contributionAmount: "₦60,000/month",
      currentCycle: "Cycle 4 of 10",
      nextDateLabel: "Next Contribution",
      nextDate: "5 Nov 2026",
      progress: "83%",
      initial: "UAC",
      initialBg: "bg-[#ECD7CE] text-[#783928]",
    },
  ]);

  const handleCopyLink = (link) => {
    navigator.clipboard?.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleGroupCreated = (newGroupData) => {
    const newGroup = {
      id: `admin-g-${Date.now()}`,
      name: newGroupData.groupName,
      type: newGroupData.groupType,
      frequency: newGroupData.contributionFrequency,
      membersCount: parseInt(newGroupData.maxMembers, 10) || 10,
      status: "Upcoming",
      badgeColor: "bg-[#DDF0FA] text-[#136B94]",
      contributionAmount: `₦${newGroupData.contributionAmount}/${newGroupData.contributionFrequency.toLowerCase()}`,
      currentCycle: "—",
      nextDateLabel: "Start Date",
      nextDate: newGroupData.startDate,
      progress: "0%",
      initial:
        newGroupData.groupName
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 3)
          .toUpperCase() || "GRP",
      initialBg: "bg-[#ECD7CE] text-[#783928]",
      inviteLink:
        newGroupData.whatsappLink ||
        `https://pallypot.com/invite/${Math.random().toString(36).substring(2, 8).toUpperCase()}?utm_source=app`,
    };

    setAdministeredGroups((prev) => [newGroup, ...prev]);
    setView("list");
  };

  // If inside the Create Group Wizard flow (Image 4 & 1)
  if (view === "create") {
    return (
      <CreateGroupWizard
        onBack={() => setView("list")}
        onGroupCreated={handleGroupCreated}
      />
    );
  }

  // If inside the Manage Group view
  if (view === "manage" && managedGroup) {
    return (
      <ManageGroupView
        group={managedGroup}
        onBack={() => {
          setManagedGroup(null);
          setView("list");
        }}
      />
    );
  }

  // Filter groups
  const filteredGroups = administeredGroups.filter((group) => {
    if (activeFilter === "Active (2)" || activeFilter === "Active") {
      if (group.status !== "Active") return false;
    } else if (activeFilter === "Upcoming (1)" || activeFilter === "Upcoming") {
      if (group.status !== "Upcoming") return false;
    } else if (
      activeFilter === "Completed (1)" ||
      activeFilter === "Completed"
    ) {
      if (group.status !== "Completed") return false;
    }

    if (searchQuery.trim()) {
      return group.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
    }
    return true;
  });

  const filterTabs = [
    { label: "All Groups (3)", value: "All Groups" },
    { label: "Active (2)", value: "Active" },
    { label: "Upcoming (1)", value: "Upcoming" },
    { label: "Completed (1)", value: "Completed" },
  ];

  return (
    <div className="space-y-6 animate-tab-content max-w-5xl">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#1A2E26]">
          My Groups
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          View and manage the savings groups you administer.
        </p>
      </div>

      {/* Search Bar + Create Button Row (Image 2) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-[#7E7F7D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-4 bg-[#F2EFEA] border border-[#C6C1C1] rounded-[12px] text-sm text-[#1A2E26] placeholder-[#8A8E89] focus:bg-white focus:border-[#4E8A3C] outline-none transition-all"
          />
        </div>

        {/* Create New Group Button */}
        <button
          type="button"
          onClick={() => setView("create")}
          className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#629741] hover:bg-[#3D6E2E] text-white text-sm font-semibold rounded-[8px] transition-all shadow-xs cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Create New Group</span>
        </button>
      </div>

      {/* Filter Tabs Pills (Image 2) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive =
            activeFilter === tab.value || activeFilter === tab.label;

          return (
            <button
              key={tab.label}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#0B5D4B] text-white shadow-xs"
                  : "bg-[#ECE6D8] text-[#1A2E26] hover:bg-[#E2DBD0]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Groups List (Stack of Cards - Image 2) */}
      <div className="space-y-4">
        {filteredGroups.length === 0 ? (
          <div className="bg-[#FBF5EB] rounded-[12px] p-5 text-center space-y-2 border border-[#EBE5D8]">
            <p className="text-sm font-medium text-[#7E7F7D]">
              No administered groups found matching your criteria.
            </p>
          </div>
        ) : (
          filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[#FBF5EB] rounded-[12px] p-3 border border-[#EBE5D8] space-y-4 shadow-2xs hover:border-[#D6CEBF] transition-all"
            >
              {/* Card Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {/* Square Avatar Badge */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[8px] ${group.initialBg} font-bold text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {group.initial}
                  </div>

                  {/* Group Info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-[#000000]">
                        {group.name}
                      </h3>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${group.badgeColor}`}
                      >
                        {group.status}
                      </span>
                    </div>

                    <p className="text-sm text-[#7B8078]">
                      {group.type} • {group.frequency} contributions
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[#1A2E26] font-medium">
                      <Users className="w-3.5 h-3.5 text-[#000000]" />
                      <span className="text-[#0E1011] font-semibold">
                        {group.membersCount} members
                      </span>
                    </div>
                  </div>
                </div>

                {/* Manage Group Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setManagedGroup(group);
                      setView("manage");
                    }}
                    className="w-full sm:w-auto px-4 py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-xs sm:text-sm font-semibold rounded-[8px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Manage Group</span>
                    <BiRightArrowAlt size={20} />
                  </button>
                </div>
              </div>

              {/* 4 Metrics Pills Row */}
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1">
                {/* Contribution */}
                <div className="bg-[#2CCF292E] rounded-[8px] p-2.5 sm:p-3 space-y-1 flex gap-2.5 sm:gap-4 items-center">
                  <TbDatabasePlus className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" color="#0B5D4B" />{" "}
                  <div className="text-[11px] font-medium min-w-0">
                    <span className="text-[#666B6B]">Contribution</span>{" "}
                    <div className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                      {group.contributionAmount}
                    </div>
                  </div>
                </div>

                {/* Current Cycle */}
                <div className="bg-[#CF92292E] rounded-[8px] p-2.5 sm:p-3 space-y-1 flex gap-2.5 sm:gap-4 items-center">
                  <LuRepeat className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" color="#CE6F1C" />{" "}
                  <div className="text-[11px] font-medium min-w-0">
                    <span className="text-[#666B6B]">Current Cycle</span>{" "}
                    <div className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                      {group.currentCycle}
                    </div>
                  </div>
                </div>

                {/* Next Contribution / Start Date */}
                <div className="bg-[#2998CF2E] rounded-[8px] p-2.5 sm:p-3 space-y-1 flex gap-2.5 sm:gap-4 items-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" color="#078BCE" />{" "}
                  <div className="text-[11px] font-medium min-w-0">
                    <span className="text-[#666B6B]">
                      {group.nextDateLabel}
                    </span>{" "}
                    <div className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                      {group.nextDate}
                    </div>
                  </div>
                </div>

                {/* Contribution Progress */}
                <div className="bg-[#CF29A82E] rounded-[8px] p-2.5 sm:p-3 space-y-1 flex gap-2.5 sm:gap-4 items-center">
                  <AiOutlinePieChart className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" color="#B00F7D"/>
                  <div className="text-[11px] font-medium min-w-0">
                  <span className="text-[#666B6B]">Contribution Progress</span>{" "}
                    <div className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                      {group.progress}
                    </div>
                  </div>
                </div>
              </div>

              {/* Invite Members Row (shown for Upcoming groups or groups with inviteLink - Image 2) */}
              {group.inviteLink && (
                <div className="pt-2 border-t border-[#EAE4D7] space-y-2">
                  <div className="flex items-center gap-1.5 text-base font-semibold text-[#000000]">
                    <LinkIcon className="w-7 h-7" />
                    <span>Invite Members</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    {/* Link with copy button */}
                    <div className="flex-1 flex items-center justify-between bg-white px-3.5 py-3 rounded-xl border border-[#E5E0D6] text-sm text-[#000000]">
                      <span className="truncate pr-2 font-mono">
                        {group.inviteLink}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyLink(group.inviteLink)}
                        className="text-[#1A2E26] hover:text-[#0B5D4B] p-1 cursor-pointer shrink-0 transition-colors"
                        title="Copy invite link"
                      >
                        {copiedLink ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `Join my savings circle on PallyPot: ${group.inviteLink}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#30E00D] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold rounded-[10px] transition-all shadow-xs shrink-0 cursor-pointer"
                    >
                      <FaWhatsapp className="w-6 h-6 text-white" />
                      <span>Share on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
