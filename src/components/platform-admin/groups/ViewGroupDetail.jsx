import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  LayoutGrid,
  Users,
  Database,
  ArrowLeftRight,
  BarChart2,
  Calendar,
  Edit2,
  ChevronDown,
  ArrowDown,
  ArrowUp,
  Receipt,
  Clock,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default function ViewGroupDetail({ group, onBack }) {
  const [activeTab, setActiveTab] = useState("Overview"); // Overview | Members | Contributions | Payouts | Activity
  const [contributionCycle, setContributionCycle] = useState("Cycle 1 (Apr 28 – May 4)");
  const [isCycleDropdownOpen, setIsCycleDropdownOpen] = useState(false);
  const [contribSearch, setContribSearch] = useState("");
  const [contribStatusFilter, setContribStatusFilter] = useState("All Payment Statuses");
  const [contribMethodFilter, setContribMethodFilter] = useState("All Payment Methods");

  const g = group || {
    id: "GRP-001458",
    name: "Ikeja Ajo Circle",
    admin: "Tunde Akinola",
    members: 10,
    contribution: "₦20,000 / Weekly",
    dateCreated: "Apr 18, 2025",
    startDate: "Apr 28, 2025",
    status: "Active",
    initials: "IAC",
  };

  // Members Tab Data (Image 4)
  const participants = [
    {
      name: "Aisha Ibrahim",
      id: "USR-000458",
      email: "aisha.ade@gmail.com",
      phone: "+234 803 456 7890",
      joined: "Apr 18, 2025",
      position: "1st",
      contributions: "₦80,000",
      payouts: "₦200,000",
    },
    {
      name: "Aisha Ibrahim",
      id: "USR-000458",
      email: "aisha.ade@gmail.com",
      phone: "+234 803 456 7890",
      joined: "Apr 18, 2025",
      position: "1st",
      contributions: "₦80,000",
      payouts: "NO",
    },
    {
      name: "Aisha Ibrahim",
      id: "USR-000458",
      email: "aisha.ade@gmail.com",
      phone: "+234 803 456 7890",
      joined: "Apr 18, 2025",
      position: "1st",
      contributions: "₦80,000",
      payouts: "NO",
    },
    {
      name: "Aisha Ibrahim",
      id: "USR-000458",
      email: "aisha.ade@gmail.com",
      phone: "+234 803 456 7890",
      joined: "Apr 18, 2025",
      position: "1st",
      contributions: "₦80,000",
      payouts: "NO",
    },
    {
      name: "Aisha Ibrahim",
      id: "USR-000458",
      email: "aisha.ade@gmail.com",
      phone: "+234 803 456 7890",
      joined: "Apr 18, 2025",
      position: "1st",
      contributions: "₦80,000",
      payouts: "NO",
    },
    {
      name: "Aisha Ibrahim",
      id: "USR-000458",
      email: "aisha.ade@gmail.com",
      phone: "+234 803 456 7890",
      joined: "Apr 18, 2025",
      position: "1st",
      contributions: "₦80,000",
      payouts: "NO",
    },
    {
      name: "Aisha Ibrahim",
      id: "USR-000458",
      email: "aisha.ade@gmail.com",
      phone: "+234 803 456 7890",
      joined: "Apr 18, 2025",
      position: "1st",
      contributions: "₦80,000",
      payouts: "NO",
    },
  ];

  // Contributions Tab Data (Image 1)
  const contributionsList = [
    {
      member: "Aisha Ibrahim",
      expected: "₦20,000",
      paid: "₦20,000",
      date: "Apr 18, 2025",
      method: "Wallet",
      txId: "TXN845721",
      status: "Successful",
    },
    {
      member: "Aisha Ibrahim",
      expected: "₦20,000",
      paid: "NO",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
    {
      member: "Aisha Ibrahim",
      expected: "₦20,000",
      paid: "₦20,000",
      date: "Apr 18, 2025",
      method: "Wallet",
      txId: "TXN845721",
      status: "Successful",
    },
    {
      member: "Aisha Ibrahim",
      expected: "₦20,000",
      paid: "NO",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
    {
      member: "Aisha Ibrahim",
      expected: "₦20,000",
      paid: "NO",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
  ];

  // Payouts Tab Data (Image 4)
  const [payoutCycle, setPayoutCycle] = useState("Cycle 1 (Apr 28 – May 4)");
  const [isPayoutCycleOpen, setIsPayoutCycleOpen] = useState(false);
  const [payoutSearch, setPayoutSearch] = useState("");
  const [payoutStatusFilter, setPayoutStatusFilter] = useState("All Payout Statuses");
  const [payoutMethodFilter, setPayoutMethodFilter] = useState("All Payment Methods");

  const payoutsList = [
    {
      member: "Aisha Ibrahim",
      position: "1st",
      gross: "₦200,000",
      fees: "NO",
      net: "₦200,000",
      date: "Apr 18, 2025",
      method: "Bank Transfer",
      txId: "TXN845721",
      status: "Successful",
    },
    {
      member: "Aisha Ibrahim",
      position: "1st",
      gross: "₦200,000",
      fees: "NO",
      net: "₦200,000",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
    {
      member: "Aisha Ibrahim",
      position: "1st",
      gross: "₦200,000",
      fees: "NO",
      net: "₦200,000",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
    {
      member: "Aisha Ibrahim",
      position: "1st",
      gross: "₦200,000",
      fees: "NO",
      net: "₦200,000",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
    {
      member: "Aisha Ibrahim",
      position: "1st",
      gross: "₦200,000",
      fees: "NO",
      net: "₦200,000",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
    {
      member: "Aisha Ibrahim",
      position: "1st",
      gross: "₦200,000",
      fees: "NO",
      net: "₦200,000",
      date: "—",
      method: "—",
      txId: "—",
      status: "Pending",
    },
  ];

  // Activity Tab Data (Image 3)
  const [activityCategory, setActivityCategory] = useState("All Categories");
  const activityLogs = [
    {
      activity: "Group created: Ikeja Ajo Circle",
      category: "Group",
      categoryColor: "bg-[#EEF2FF] text-[#4F46E5]",
      performedBy: "Tunde Akinola",
      dateTime: "Oct 28, 2026, 09:14 AM",
    },
    {
      activity: "Contribution settings updated",
      category: "Settings",
      categoryColor: "bg-[#FDF2F8] text-[#9333EA]",
      performedBy: "Tunde Akinola",
      dateTime: "Oct 28, 2026, 09:14 AM",
    },
    {
      activity: "Member joined: Aisha Ibrahim",
      category: "Members",
      categoryColor: "bg-[#DCFCE7] text-[#15803D]",
      performedBy: "Tunde Akinola",
      dateTime: "Oct 28, 2026, 09:14 AM",
    },
    {
      activity: "Contribution received from Tunde Akinola",
      category: "Contributions",
      categoryColor: "bg-[#FEF3C7] text-[#D97706]",
      performedBy: "System",
      dateTime: "Oct 28, 2026, 09:14 AM",
    },
    {
      activity: "Payout processed: ₦200,000 to Jane Doe",
      category: "Payouts",
      categoryColor: "bg-[#FCE7F3] text-[#BE185D]",
      performedBy: "System",
      dateTime: "Oct 28, 2026, 09:14 AM",
    },
  ];

  const filteredContributions = contributionsList.filter((c) => {
    if (contribSearch && !c.member.toLowerCase().includes(contribSearch.toLowerCase()) && !c.txId.toLowerCase().includes(contribSearch.toLowerCase())) {
      return false;
    }
    if (contribStatusFilter !== "All Payment Statuses" && c.status !== contribStatusFilter) {
      return false;
    }
    if (contribMethodFilter !== "All Payment Methods" && c.method !== contribMethodFilter) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Header Row with Search (Matching View User) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-3 border-[#D0D2CE]">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg text-[#111827] hover:bg-black/5 hover:text-[#0B5D4B] transition-colors cursor-pointer"
            aria-label="Back to groups"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            View Group
          </h1>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
          <input
            type="text"
            placeholder="Search users, groups, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#EBE6DD] rounded-lg text-xs sm:text-sm text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#0B5D4B] transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Group Profile Banner Card */}
      <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#DCFCE7] text-[#0B6B40] font-bold text-xl flex items-center justify-center shrink-0">
              {g.initials}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  {g.name}
                </h2>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF7EE] text-[#0B6B40]">
                  {g.status}
                </span>
              </div>
              <p className="text-xs text-[#737373]">
                Group ID: <span className="font-medium text-[#111827]">{g.id}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => alert(`Edit group settings for ${g.name}`)}
            className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-lg text-xs sm:text-sm font-semibold text-[#111827] hover:border-[#087F5B] hover:text-[#087F5B] transition-colors cursor-pointer self-start sm:self-auto"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit Group</span>
          </button>
        </div>

        {/* 4 Group Meta Stat Items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#F3EFEA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#111827]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#737373] block">Contribution</span>
              <span className="text-xs sm:text-sm font-bold text-[#111827]">
                {g.contribution}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#111827]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#737373] block">Members</span>
              <span className="text-xs sm:text-sm font-bold text-[#111827]">
                {g.members}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#111827]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#737373] block">Date Created</span>
              <span className="text-xs sm:text-sm font-bold text-[#111827]">
                {g.dateCreated}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#111827]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#737373] block">Start Date</span>
              <span className="text-xs sm:text-sm font-bold text-[#111827]">
                {g.startDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Tab Navigation (Matching User Management Pill Container Design) */}
      <div className="flex items-center gap-1 bg-[#E1E2E4] rounded-xl max-w-full overflow-x-auto scrollbar-none p-1">
        {[
          { id: "Overview", label: "Overview", icon: LayoutGrid },
          { id: "Members", label: "Members", icon: Users },
          { id: "Contributions", label: "Contributions", icon: Database },
          { id: "Payouts", label: "Payouts", icon: ArrowLeftRight },
          { id: "Activity", label: "Activity", icon: BarChart2 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? "bg-[#087F5B] text-white shadow-xs font-semibold"
                  : "text-[#4B5563] hover:text-[#111827] hover:bg-white/50"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW (Image 2) */}
      {activeTab === "Overview" && (
        <div className="space-y-5">
          {/* Top Row: Group Summary & Group Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Group Summary */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#111827]">
                Group Summary
              </h3>

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EAF7EE] text-[#0B6B40] flex items-center justify-center shrink-0">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#4B5563]">
                      Total Contributions
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#0B6B40]">
                    ₦600,000
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EAF7EE] text-[#0B6B40] flex items-center justify-center shrink-0">
                      <ArrowUp className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#4B5563]">
                      Payout Amount
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#0B6B40]">
                    ₦400,000
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EAF7EE] text-[#0B6B40] flex items-center justify-center shrink-0">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#4B5563]">
                      Payout Made
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#0B6B40]">
                    3
                  </span>
                </div>
              </div>
            </div>

            {/* Group Details */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#111827]">
                Group Details
              </h3>

              <div className="divide-y divide-[#F3EFEA] text-xs sm:text-sm">
                <div className="py-3 flex items-center justify-between">
                  <span className="text-[#737373]">Group Admin</span>
                  <span className="font-semibold text-[#111827]">
                    {g.admin}
                  </span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-[#737373]">Total Cycles</span>
                  <span className="font-semibold text-[#111827]">10</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-[#737373]">Current Cycle</span>
                  <span className="font-semibold text-[#111827]">3 of 10</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-[#737373]">Group Type</span>
                  <span className="font-semibold text-[#111827]">Ajo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Upcoming Payout & Next Contribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Upcoming Payout (Beige Card) */}
            <div className="bg-[#FDF8F3] rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F8E9D6] text-[#C2410C] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#111827]">
                  Upcoming Payout
                </h4>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm pt-1">
                <p className="text-[#4B5563]">
                  Member: <span className="font-bold text-[#111827]">Amaka Okoro</span>
                </p>
                <p className="text-[#4B5563]">
                  Amount: <span className="font-bold text-[#111827]">₦200,000</span>
                </p>
                <p className="text-[#4B5563]">
                  Payout Date: <span className="font-semibold text-[#111827]">May 5, 2025</span>
                </p>
              </div>
            </div>

            {/* Next Contribution (Light Green Card) */}
            <div className="bg-[#F0FDF4] rounded-xl p-5 sm:p-6 border border-[#DCFCE7] shadow-xs space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#0B6B40] flex items-center justify-center shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#111827]">
                  Next Contribution
                </h4>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm pt-1">
                <p className="text-[#4B5563]">
                  Due Date: <span className="font-semibold text-[#111827]">May 5, 2025</span>
                </p>
                <p className="text-[#4B5563]">
                  Amount per Member: <span className="font-bold text-[#111827]">₦20,000</span>
                </p>
                <p className="text-[#4B5563]">
                  Members Paid: <span className="font-semibold text-[#111827]">5 of 10</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MEMBERS (Image 4) */}
      {activeTab === "Members" && (
        <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-[#111827]">
            Group Participants ({participants.length})
          </h3>

          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="w-full text-left min-w-[780px]">
              <thead>
                <tr className="bg-[#E5EDEC] text-[#000000] text-xs font-semibold">
                  <th className="px-4 py-3 rounded-tl-md whitespace-nowrap">Member</th>
                  <th className="px-4 py-3 whitespace-nowrap">User ID</th>
                  <th className="px-4 py-3 whitespace-nowrap">Email & Phone No.</th>
                  <th className="px-4 py-3 whitespace-nowrap">Date Joined</th>
                  <th className="px-4 py-3 whitespace-nowrap">Payout Position</th>
                  <th className="px-4 py-3 whitespace-nowrap">Total Contributions</th>
                  <th className="px-4 py-3 whitespace-nowrap">Total Payouts</th>
                  <th className="px-4 py-3 rounded-tr-md whitespace-nowrap text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((p, idx) => (
                  <tr
                    key={idx}
                    className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                  >
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#D1D5DB] shrink-0" />
                        <span className="font-semibold text-[#000000]">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#69737D] whitespace-nowrap">
                      {p.id}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="text-xs">
                        <span className="text-[#000000] block">{p.email}</span>
                        <span className="text-[#69737D] block">{p.phone}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#69737D] whitespace-nowrap">
                      {p.joined}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D]">
                        {p.position}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-[#000000] whitespace-nowrap">
                      {p.contributions}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-[#000000] whitespace-nowrap">
                      {p.payouts}
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <button
                        onClick={() => alert(`View user profile for ${p.name}`)}
                        className="px-3 py-1 border border-[#E5E7EB] rounded-md text-xs font-semibold text-[#087F5B] hover:bg-[#087F5B] hover:text-white transition-colors cursor-pointer"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: CONTRIBUTIONS (Image 1) */}
      {activeTab === "Contributions" && (
        <div className="space-y-5">
          {/* Top Cycle Selector Bar */}
          <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#F0EDE6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#111827]">
                Contribution Cycle
              </span>
              <div className="relative">
                <button
                  onClick={() => setIsCycleDropdownOpen(!isCycleDropdownOpen)}
                  className="px-3.5 py-1.5 bg-white border border-[#E5E7EB] rounded-lg text-xs font-semibold text-[#111827] flex items-center gap-2 hover:border-[#087F5B] transition-colors cursor-pointer"
                >
                  <span>{contributionCycle}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
                </button>
                {isCycleDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                    {[
                      "Cycle 1 (Apr 28 – May 4)",
                      "Cycle 2 (May 5 – May 11)",
                      "Cycle 3 (May 12 – May 18)",
                    ].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setContributionCycle(c);
                          setIsCycleDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2 hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#737373]">
              <span>Cycle 1 of 10</span>
              <span>|</span>
              <span>Due Date: May 4, 2026</span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="bg-[#EAF7EE] rounded-xl p-4 shadow-2xs border border-black/5 space-y-1">
              <div className="flex items-center gap-2 text-[#0B6B40]">
                <Database className="w-4 h-4" />
                <span className="text-xs font-medium text-[#4B5563]">Total Expected</span>
              </div>
              <span className="text-xl font-bold text-[#111827] block">
                ₦200,000
              </span>
              <span className="text-[11px] text-[#737373] block">
                10 members × ₦20,000 per member
              </span>
            </div>

            <div className="bg-[#E0F2FE] rounded-xl p-4 shadow-2xs border border-black/5 space-y-1">
              <div className="flex items-center gap-2 text-[#0284C7]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-medium text-[#4B5563]">Total Collected</span>
              </div>
              <span className="text-xl font-bold text-[#111827] block">
                ₦100,000
              </span>
              <span className="text-[11px] text-[#737373] block">
                From 5 members
              </span>
            </div>

            <div className="bg-[#FEE2E2] rounded-xl p-4 shadow-2xs border border-black/5 space-y-1">
              <div className="flex items-center gap-2 text-[#DC2626]">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium text-[#4B5563]">Outstanding</span>
              </div>
              <span className="text-xl font-bold text-[#111827] block">
                ₦100,000
              </span>
              <span className="text-[11px] text-[#737373] block">
                From 5 members
              </span>
            </div>
          </div>

          {/* Contributions Table Card */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
            {/* Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
                <input
                  type="text"
                  placeholder="Search by member name or transaction ID"
                  value={contribSearch}
                  onChange={(e) => setContribSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#087F5B]"
                />
              </div>

              <div className="relative">
                <select
                  value={contribStatusFilter}
                  onChange={(e) => setContribStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#4B5563] focus:outline-none focus:border-[#087F5B] cursor-pointer"
                >
                  <option>All Payment Statuses</option>
                  <option>Successful</option>
                  <option>Pending</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={contribMethodFilter}
                  onChange={(e) => setContribMethodFilter(e.target.value)}
                  className="w-full px-3 py-2 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#4B5563] focus:outline-none focus:border-[#087F5B] cursor-pointer"
                >
                  <option>All Payment Methods</option>
                  <option>Wallet</option>
                  <option>Bank Transfer</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 pt-2">
              <table className="w-full text-left min-w-[740px]">
                <thead>
                  <tr className="bg-[#E5EDEC] text-[#000000] text-xs font-semibold">
                    <th className="px-4 py-3 rounded-tl-md whitespace-nowrap">Member</th>
                    <th className="px-4 py-3 whitespace-nowrap">Expected Amount</th>
                    <th className="px-4 py-3 whitespace-nowrap">Amount Paid</th>
                    <th className="px-4 py-3 whitespace-nowrap">Payment Date</th>
                    <th className="px-4 py-3 whitespace-nowrap">Payment Method</th>
                    <th className="px-4 py-3 whitespace-nowrap">Transaction ID</th>
                    <th className="px-4 py-3 rounded-tr-md whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContributions.map((c, idx) => (
                    <tr
                      key={idx}
                      className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                    >
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#D1D5DB] shrink-0" />
                          <span className="font-semibold text-[#000000]">{c.member}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 font-bold text-[#000000] whitespace-nowrap">
                        {c.expected}
                      </td>
                      <td className="px-4 py-3.5 font-bold text-[#000000] whitespace-nowrap">
                        {c.paid}
                      </td>
                      <td className="px-4 py-3.5 text-[#69737D] whitespace-nowrap">
                        {c.date}
                      </td>
                      <td className="px-4 py-3.5 text-[#111827] whitespace-nowrap">
                        {c.method}
                      </td>
                      <td className="px-4 py-3.5 text-[#69737D] whitespace-nowrap">
                        {c.txId}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            c.status === "Successful"
                              ? "bg-[#DCFCE7] text-[#15803D]"
                              : "bg-[#FEF3C7] text-[#D97706]"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PAYOUTS (Image 4) */}
      {activeTab === "Payouts" && (
        <div className="space-y-5">
          {/* Top Cycle Selector Bar */}
          <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#F0EDE6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#111827]">
                Payout Cycle
              </span>
              <div className="relative">
                <button
                  onClick={() => setIsPayoutCycleOpen(!isPayoutCycleOpen)}
                  className="px-3.5 py-1.5 bg-white border border-[#E5E7EB] rounded-lg text-xs font-semibold text-[#111827] flex items-center gap-2 hover:border-[#087F5B] transition-colors cursor-pointer"
                >
                  <span>{payoutCycle}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
                </button>
                {isPayoutCycleOpen && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                    {[
                      "Cycle 1 (Apr 28 – May 4)",
                      "Cycle 2 (May 5 – May 11)",
                      "Cycle 3 (May 12 – May 18)",
                    ].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setPayoutCycle(c);
                          setIsPayoutCycleOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2 hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#737373]">
              <span>Cycle 1 of 10</span>
              <span>|</span>
              <span>Scheduled Payout: May 4, 2025</span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="bg-[#EAF7EE] rounded-xl p-4 shadow-2xs border border-black/5 space-y-1">
              <div className="flex items-center gap-2 text-[#0B6B40]">
                <Database className="w-4 h-4" />
                <span className="text-xs font-medium text-[#4B5563]">Total Scheduled</span>
              </div>
              <span className="text-xl font-bold text-[#111827] block">
                ₦200,000
              </span>
              <span className="text-[11px] text-[#737373] block">
                1 recipient
              </span>
            </div>

            <div className="bg-[#E0F2FE] rounded-xl p-4 shadow-2xs border border-black/5 space-y-1">
              <div className="flex items-center gap-2 text-[#0284C7]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-medium text-[#4B5563]">Total Paid</span>
              </div>
              <span className="text-xl font-bold text-[#111827] block">
                ₦100,000
              </span>
              <span className="text-[11px] text-[#737373] block">
                From 5 members
              </span>
            </div>

            <div className="bg-[#FEE2E2] rounded-xl p-4 shadow-2xs border border-black/5 space-y-1">
              <div className="flex items-center gap-2 text-[#DC2626]">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium text-[#4B5563]">Outstanding</span>
              </div>
              <span className="text-xl font-bold text-[#111827] block">
                ₦100,000
              </span>
              <span className="text-[11px] text-[#737373] block">
                From 5 members
              </span>
            </div>
          </div>

          {/* Payouts Table Card */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
            {/* Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
                <input
                  type="text"
                  placeholder="Search by member name or transaction ID"
                  value={payoutSearch}
                  onChange={(e) => setPayoutSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#087F5B]"
                />
              </div>

              <div className="relative">
                <select
                  value={payoutStatusFilter}
                  onChange={(e) => setPayoutStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#4B5563] focus:outline-none focus:border-[#087F5B] cursor-pointer"
                >
                  <option>All Payout Statuses</option>
                  <option>Successful</option>
                  <option>Pending</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={payoutMethodFilter}
                  onChange={(e) => setPayoutMethodFilter(e.target.value)}
                  className="w-full px-3 py-2 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#4B5563] focus:outline-none focus:border-[#087F5B] cursor-pointer"
                >
                  <option>All Payment Methods</option>
                  <option>Bank Transfer</option>
                  <option>Wallet</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 pt-2">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="bg-[#E5EDEC] text-[#000000] text-xs font-semibold">
                    <th className="px-4 py-3 rounded-tl-md whitespace-nowrap">Recipient</th>
                    <th className="px-4 py-3 whitespace-nowrap">Position</th>
                    <th className="px-4 py-3 whitespace-nowrap">Gross Amount</th>
                    <th className="px-4 py-3 whitespace-nowrap">Fees</th>
                    <th className="px-4 py-3 whitespace-nowrap">Net Amount</th>
                    <th className="px-4 py-3 whitespace-nowrap">Payment Date</th>
                    <th className="px-4 py-3 whitespace-nowrap">Payment Method</th>
                    <th className="px-4 py-3 whitespace-nowrap">Transaction ID</th>
                    <th className="px-4 py-3 rounded-tr-md whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payoutsList.map((p, idx) => (
                    <tr
                      key={idx}
                      className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                    >
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#D1D5DB] shrink-0" />
                          <span className="font-semibold text-[#000000]">{p.member}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D]">
                          {p.position}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-bold text-[#000000] whitespace-nowrap">
                        {p.gross}
                      </td>
                      <td className="px-4 py-3.5 text-[#000000] font-semibold whitespace-nowrap">
                        {p.fees}
                      </td>
                      <td className="px-4 py-3.5 font-bold text-[#000000] whitespace-nowrap">
                        {p.net}
                      </td>
                      <td className="px-4 py-3.5 text-[#69737D] whitespace-nowrap">
                        {p.date}
                      </td>
                      <td className="px-4 py-3.5 text-[#111827] whitespace-nowrap">
                        {p.method}
                      </td>
                      <td className="px-4 py-3.5 text-[#69737D] whitespace-nowrap">
                        {p.txId}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            p.status === "Successful"
                              ? "bg-[#DCFCE7] text-[#15803D]"
                              : "bg-[#FEF3C7] text-[#D97706]"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: ACTIVITY (Image 3) */}
      {activeTab === "Activity" && (
        <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-base sm:text-lg font-bold text-[#111827]">
              Activity History
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <select
                  value={activityCategory}
                  onChange={(e) => setActivityCategory(e.target.value)}
                  className="px-3 py-1.5 pr-8 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#4B5563] focus:outline-none focus:border-[#0B5D4B] cursor-pointer"
                >
                  <option>All Categories</option>
                  <option>Group</option>
                  <option>Settings</option>
                  <option>Members</option>
                  <option>Contributions</option>
                  <option>Payouts</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>

              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-xs font-medium text-[#4B5563] hover:border-[#0B5D4B] transition-colors cursor-pointer">
                <Calendar className="w-3.5 h-3.5 text-[#737373]" />
                <span>Oct 12, 2026 – Oct 18, 2026</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 pt-2">
            <table className="w-full text-left min-w-[680px]">
              <thead>
                <tr className="bg-[#E5EDEC] text-[#000000] text-xs font-semibold">
                  <th className="px-4 py-3 rounded-tl-md whitespace-nowrap">Activity</th>
                  <th className="px-4 py-3 whitespace-nowrap">Category</th>
                  <th className="px-4 py-3 whitespace-nowrap">Performed By</th>
                  <th className="px-4 py-3 rounded-tr-md whitespace-nowrap">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {activityLogs.map((log, idx) => (
                  <tr
                    key={idx}
                    className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                  >
                    <td className="px-4 py-3.5 font-medium text-[#111827] whitespace-nowrap">
                      {log.activity}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${log.categoryColor}`}
                      >
                        {log.category}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-[#000000] whitespace-nowrap">
                      {log.performedBy}
                    </td>
                    <td className="px-4 py-3.5 text-[#69737D] whitespace-nowrap">
                      {log.dateTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

