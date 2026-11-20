import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  MinusCircle,
  AlertCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function DisputesView({ onViewDispute }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [timeFilter, setTimeFilter] = useState("All Time");

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  // 4 Stat Cards (Image 2)
  const stats = [
    {
      label: "Total Disputes",
      value: "12",
      icon: MinusCircle,
      bg: "bg-white",
      iconBg: "bg-[#E0F2FE] text-[#0284C7]",
    },
    {
      label: "New",
      value: "12",
      icon: AlertCircle,
      bg: "bg-white",
      iconBg: "bg-[#FEE2E2] text-[#EF4444]",
    },
    {
      label: "Under Review",
      value: "3",
      icon: Clock,
      bg: "bg-white",
      iconBg: "bg-[#FEF3C7] text-[#D97706]",
    },
    {
      label: "Resolved",
      value: "12",
      icon: CheckCircle2,
      bg: "bg-white",
      iconBg: "bg-[#DCFCE7] text-[#15803D]",
    },
  ];

  // Disputes table rows (Image 2)
  const disputesData = [
    {
      id: "DSP-00124",
      member: "Jane Doe",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      group: "Ikeja Ajo Group",
      dateSubmitted: "Nov 14, 2026, 10:24 AM",
      status: "New",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      evidenceFile: "Group_agreement.png",
      evidenceSize: "PNG · 412 KB",
      groupContext: {
        name: "Yaba Ajo Group",
        cycle: "Monthly",
        payoutOrder: "Member 4 of 20",
        admin: "John Doe",
      },
      transaction: {
        id: "TRX-082746301",
        type: "Contribution",
        amount: "₦10,000",
        date: "Nov 14, 2026, 10:20 AM",
        method: "Bank Card (Visa ****4821)",
        status: "Pending",
      },
    },
    {
      id: "DSP-00125",
      member: "Jane Doe",
      email: "jane.doe@gmail.com",
      phone: "+234 803 456 7890",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      group: "Ikeja Ajo Group",
      dateSubmitted: "Nov 14, 2026, 10:24 AM",
      status: "New",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      evidenceFile: "Group_agreement.png",
      evidenceSize: "PNG · 412 KB",
      groupContext: {
        name: "Yaba Ajo Group",
        cycle: "Monthly",
        payoutOrder: "Member 4 of 20",
        admin: "John Doe",
      },
      transaction: {
        id: "TRX-082746301",
        type: "Contribution",
        amount: "₦10,000",
        date: "Nov 14, 2026, 10:20 AM",
        method: "Bank Card (Visa ****4821)",
        status: "Pending",
      },
    },
    {
      id: "DSP-00126",
      member: "Jane Doe",
      email: "jane.doe@gmail.com",
      phone: "+234 803 456 7890",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      group: "Ikeja Ajo Group",
      dateSubmitted: "Nov 14, 2026, 10:24 AM",
      status: "New",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      evidenceFile: "Group_agreement.png",
      evidenceSize: "PNG · 412 KB",
      groupContext: {
        name: "Yaba Ajo Group",
        cycle: "Monthly",
        payoutOrder: "Member 4 of 20",
        admin: "John Doe",
      },
      transaction: {
        id: "TRX-082746301",
        type: "Contribution",
        amount: "₦10,000",
        date: "Nov 14, 2026, 10:20 AM",
        method: "Bank Card (Visa ****4821)",
        status: "Pending",
      },
    },
    {
      id: "DSP-00127",
      member: "Jane Doe",
      email: "jane.doe@gmail.com",
      phone: "+234 803 456 7890",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      group: "Ikeja Ajo Group",
      dateSubmitted: "Nov 14, 2026, 10:24 AM",
      status: "New",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      evidenceFile: "Group_agreement.png",
      evidenceSize: "PNG · 412 KB",
      groupContext: {
        name: "Yaba Ajo Group",
        cycle: "Monthly",
        payoutOrder: "Member 4 of 20",
        admin: "John Doe",
      },
      transaction: {
        id: "TRX-082746301",
        type: "Contribution",
        amount: "₦10,000",
        date: "Nov 14, 2026, 10:20 AM",
        method: "Bank Card (Visa ****4821)",
        status: "Pending",
      },
    },
    {
      id: "DSP-00128",
      member: "Jane Doe",
      email: "jane.doe@gmail.com",
      phone: "+234 803 456 7890",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      group: "Ikeja Ajo Group",
      dateSubmitted: "Nov 14, 2026, 10:24 AM",
      status: "New",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      evidenceFile: "Group_agreement.png",
      evidenceSize: "PNG · 412 KB",
      groupContext: {
        name: "Yaba Ajo Group",
        cycle: "Monthly",
        payoutOrder: "Member 4 of 20",
        admin: "John Doe",
      },
      transaction: {
        id: "TRX-082746301",
        type: "Contribution",
        amount: "₦10,000",
        date: "Nov 14, 2026, 10:20 AM",
        method: "Bank Card (Visa ****4821)",
        status: "Pending",
      },
    },
    {
      id: "DSP-00129",
      member: "Jane Doe",
      email: "jane.doe@gmail.com",
      phone: "+234 803 456 7890",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      group: "Ikeja Ajo Group",
      dateSubmitted: "Nov 14, 2026, 10:24 AM",
      status: "New",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      evidenceFile: "Group_agreement.png",
      evidenceSize: "PNG · 412 KB",
      groupContext: {
        name: "Yaba Ajo Group",
        cycle: "Monthly",
        payoutOrder: "Member 4 of 20",
        admin: "John Doe",
      },
      transaction: {
        id: "TRX-082746301",
        type: "Contribution",
        amount: "₦10,000",
        date: "Nov 14, 2026, 10:20 AM",
        method: "Bank Card (Visa ****4821)",
        status: "Pending",
      },
    },
  ];

  const filteredDisputes = disputesData.filter((item) => {
    const matchesSearch =
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.member.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.group.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "All Categories" || item.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All Statuses" || item.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
            Disputes
          </h1>
          <p className="text-sm text-[#737373] mt-1">
            Handle disputes, transaction issues, and escalated cases from groups.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search users, groups, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B] shadow-2xs"
          />
        </div>
      </div>

      {/* 4 STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-[#F3EFEA] shadow-xs flex items-center gap-3.5 sm:gap-4"
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ${card.iconBg}`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#737373] truncate">{card.label}</p>
                <p className="text-2xl font-bold text-[#111827] mt-0.5 truncate">
                  {card.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FILTERS BAR */}
      <div className="bg-white rounded-xl p-4 border border-[#F3EFEA] shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full xl:max-w-md">
          <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by dispute ID or member"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B]"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full xl:w-auto">
          {/* Categories dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[130px]">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsStatusOpen(false);
                setIsTimeOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{categoryFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isCategoryOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-44 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Categories", "Group Rules", "Payout Issue", "Contribution"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setCategoryFilter(opt);
                        setIsCategoryOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Status dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[120px]">
            <button
              onClick={() => {
                setIsStatusOpen(!isStatusOpen);
                setIsCategoryOpen(false);
                setIsTimeOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{statusFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isStatusOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-36 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Statuses", "New", "Under Review", "Resolved"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setStatusFilter(opt);
                        setIsStatusOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Time dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[120px]">
            <button
              onClick={() => {
                setIsTimeOpen(!isTimeOpen);
                setIsCategoryOpen(false);
                setIsStatusOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{timeFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isTimeOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-36 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Time", "Today", "This Week", "This Month"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setTimeFilter(opt);
                      setIsTimeOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-[#F3EFEA] shadow-xs overflow-hidden">
        <div className="overflow-x-auto w-full max-w-full">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#EAF0EE] text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 whitespace-nowrap">Dispute ID</th>
                <th className="py-3 px-4 whitespace-nowrap">Member</th>
                <th className="py-3 px-4 whitespace-nowrap">Category</th>
                <th className="py-3 px-4 whitespace-nowrap">Subject</th>
                <th className="py-3 px-4 whitespace-nowrap">Group</th>
                <th className="py-3 px-4 whitespace-nowrap">Date Submitted</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EFEA] text-xs text-[#111827]">
              {filteredDisputes.map((row) => (
                <tr key={row.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                  {/* Dispute ID */}
                  <td className="py-3.5 px-4 font-mono font-medium text-[#111827] whitespace-nowrap">
                    {row.id}
                  </td>

                  {/* Member */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#D1FAE5] text-[#065F46] flex items-center justify-center text-xs font-bold shrink-0">
                        {row.member
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-semibold text-[#111827]">
                        {row.member}
                      </span>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                      {row.category}
                    </span>
                  </td>

                  {/* Subject */}
                  <td className="py-3.5 px-4 font-medium text-[#111827] whitespace-nowrap">
                    {row.subject}
                  </td>

                  {/* Group */}
                  <td className="py-3.5 px-4 text-[#111827] whitespace-nowrap">
                    {row.group}
                  </td>

                  {/* Date Submitted */}
                  <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">
                    {row.dateSubmitted}
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {row.status === "New" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
                        New
                      </span>
                    )}
                    {row.status === "Under Review" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#D97706]">
                        Under Review
                      </span>
                    )}
                    {row.status === "Resolved" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EAF7EE] text-[#0B6B40]">
                        Resolved
                      </span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <button
                      onClick={() => onViewDispute && onViewDispute(row)}
                      className="px-3 py-1 text-xs font-medium rounded-md border border-[#0B6B40] text-[#0B6B40] hover:bg-[#0B6B40]/10 transition-colors cursor-pointer"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <span>Showing 1–{filteredDisputes.length} of 12 disputes</span>
          <div className="flex items-center gap-1.5">
            <button className="px-2.5 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              &lt;
            </button>
            <button className="px-3 py-1 rounded bg-[#82C3A7] text-white font-medium cursor-pointer">
              1
            </button>
            <button className="px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              2
            </button>
            <button className="px-2.5 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

