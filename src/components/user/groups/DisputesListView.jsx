import React, { useState } from "react";
import { ChevronLeft, Search, Plus, ChevronDown } from "lucide-react";

export default function DisputesListView({
  group,
  onBack,
  onRaiseDispute,
  onViewDispute,
  disputes: propDisputes,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [timeFilter, setTimeFilter] = useState("All Time");

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);

  const categories = [
    "All Categories",
    "Group Rules",
    "Payout Issues",
    "Contribution Issues",
    "Member Conduct",
    "Other",
  ];

  const statuses = ["All Statuses", "New", "In Review", "Resolved"];

  const timeOptions = ["All Time", "Last 7 days", "Last 30 days"];

  const defaultDisputes = [
    {
      id: "DSP-00124",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      date: "Nov 14, 2026, 10:24 AM",
      status: "New",
    },
    {
      id: "DSP-00124",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      date: "Nov 14, 2026, 10:24 AM",
      status: "New",
    },
    {
      id: "DSP-00124",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      date: "Nov 14, 2026, 10:24 AM",
      status: "New",
    },
    {
      id: "DSP-00124",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      date: "Nov 14, 2026, 10:24 AM",
      status: "New",
    },
    {
      id: "DSP-00124",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      date: "Nov 14, 2026, 10:24 AM",
      status: "New",
    },
    {
      id: "DSP-00124",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      date: "Nov 14, 2026, 10:24 AM",
      status: "New",
    },
  ];

  const disputes = propDisputes || defaultDisputes;

  const filteredDisputes = disputes.filter((d) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      d.id?.toLowerCase().includes(query) ||
      d.category?.toLowerCase().includes(query) ||
      d.subject?.toLowerCase().includes(query);

    const matchesCategory =
      categoryFilter === "All Categories" ||
      d.category?.toLowerCase() === categoryFilter.toLowerCase();

    const matchesStatus =
      statusFilter === "All Statuses" ||
      d.status?.toLowerCase() === statusFilter.toLowerCase();

    return matchesQuery && matchesCategory && matchesStatus;
  });

  return (
    <div className="animate-tab-content space-y-5">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1A2E26] hover:text-[#064335] transition-colors font-medium cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to {group.name}</span>
      </button>

      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">Disputes</h2>
          <p className="text-xs sm:text-sm text-[#0B5D4B] mt-0.5 sm:mt-1 font-normal">
            Raise and track issues related to this group.
          </p>
        </div>
        <button
          onClick={onRaiseDispute}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0B5D4B] hover:bg-[#064335] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer w-full sm:w-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Raise a Dispute</span>
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-md p-3 sm:p-4 shadow-xs border border-[#F3EFEA]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
            <input
              type="text"
              placeholder="Search by dispute ID or Category"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-white border border-[#EBE6DD] rounded-md text-xs sm:text-sm text-[#1A2E26] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#064335] transition-colors"
            />
          </div>
          {/* Category Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setCategoryOpen(!categoryOpen);
                setStatusOpen(false);
                setTimeOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-[#EBE6DD] rounded-md text-xs sm:text-sm text-[#7E7F7D] hover:border-[#064335] transition-colors"
            >
              <span className="truncate">{categoryFilter}</span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
            {categoryOpen && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-[#EBE6DD] rounded-md shadow-lg py-1 max-h-60 overflow-y-auto">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCategoryFilter(c);
                      setCategoryOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-[#F8F9FA] transition-colors ${
                      categoryFilter === c ? "font-bold text-[#0B5D4B]" : "text-[#111827]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Status Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setStatusOpen(!statusOpen);
                setCategoryOpen(false);
                setTimeOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-[#EBE6DD] rounded-md text-xs sm:text-sm text-[#7E7F7D] hover:border-[#064335] transition-colors"
            >
              <span className="truncate">{statusFilter}</span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
            {statusOpen && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-[#EBE6DD] rounded-md shadow-lg py-1 max-h-60 overflow-y-auto">
                {statuses.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setStatusFilter(s);
                      setStatusOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-[#F8F9FA] transition-colors ${
                      statusFilter === s ? "font-bold text-[#0B5D4B]" : "text-[#111827]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Time Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setTimeOpen(!timeOpen);
                setCategoryOpen(false);
                setStatusOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-[#EBE6DD] rounded-md text-xs sm:text-sm text-[#7E7F7D] hover:border-[#064335] transition-colors"
            >
              <span className="truncate">{timeFilter}</span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
            {timeOpen && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-[#EBE6DD] rounded-md shadow-lg py-1 max-h-60 overflow-y-auto">
                {timeOptions.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTimeFilter(t);
                      setTimeOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-[#F8F9FA] transition-colors ${
                      timeFilter === t ? "font-bold text-[#0B5D4B]" : "text-[#111827]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
          <table className="w-full text-left min-w-[620px]">
            <thead>
              <tr className="bg-[#0B5D4B] text-white text-xs font-semibold">
                <th className="px-3 sm:px-4 py-3 rounded-tl-md whitespace-nowrap">Dispute ID</th>
                <th className="px-3 sm:px-4 py-3 whitespace-nowrap">Category</th>
                <th className="px-3 sm:px-4 py-3">Subject</th>
                <th className="px-3 sm:px-4 py-3 whitespace-nowrap">Date Submitted</th>
                <th className="px-3 sm:px-4 py-3 whitespace-nowrap">Status</th>
                <th className="px-3 sm:px-4 py-3 rounded-tr-md whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDisputes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-xs sm:text-sm text-[#737373]">
                    No disputes found matching your search or filters.
                  </td>
                </tr>
              ) : (
                filteredDisputes.map((dispute, idx) => (
                  <tr
                    key={idx}
                    className={`text-xs sm:text-sm border-b border-[#F3EFEA] ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
                    }`}
                  >
                    <td className="px-3 sm:px-4 py-3.5 text-[#111827] font-medium whitespace-nowrap">
                      {dispute.id}
                    </td>
                    <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap">
                      <span className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-[#EAF7EE] text-[#0B6B40]">
                        {dispute.category}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 py-3.5 text-[#111827] max-w-[200px] sm:max-w-xs truncate">
                      {dispute.subject}
                    </td>
                    <td className="px-3 sm:px-4 py-3.5 text-[#737373] whitespace-nowrap text-xs">
                      {dispute.date}
                    </td>
                    <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap">
                      <span
                        className={`text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full ${
                          dispute.status === "In Review"
                            ? "bg-[#FFF3E0] text-[#E65100]"
                            : dispute.status === "Resolved"
                            ? "bg-[#E3F2FD] text-[#1565C0]"
                            : "bg-[#FFECEC] text-[#E02424]"
                        }`}
                      >
                        {dispute.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap">
                      <button
                        onClick={() => onViewDispute(dispute)}
                        className="text-xs font-medium px-3.5 sm:px-4 py-1.5 rounded-md border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B] hover:text-white transition-colors cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

