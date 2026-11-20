import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Database,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";

export default function ContributionsView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [groupFilter, setGroupFilter] = useState("All Groups");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [periodFilter, setPeriodFilter] = useState("This Month");
  const [currentPage, setCurrentPage] = useState(1);

  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  // 4 Stat Cards matching mockup media_1795191164282_e01f5f40.png
  const stats = [
    {
      label: "Total Contributions",
      value: "₦18,400,000",
      sub: "1,240 Contributions",
      icon: Database,
      bg: "bg-[#EAF7EE]",
      iconBg: "bg-[#0B6B40]/10 text-[#0B6B40]",
    },
    {
      label: "Successful",
      value: "₦17,960,000",
      sub: "1,240 Contributions",
      icon: CheckCircle2,
      bg: "bg-[#DCFCE7]",
      iconBg: "bg-[#15803D]/10 text-[#15803D]",
    },
    {
      label: "Pending",
      value: "₦320,000",
      sub: "30 Contributions",
      icon: Clock,
      bg: "bg-[#FEF3C7]",
      iconBg: "bg-[#D97706]/10 text-[#D97706]",
    },
    {
      label: "Failed / Reversed",
      value: "₦120,000",
      sub: "10 Contributions",
      icon: XCircle,
      bg: "bg-[#FEE2E2]",
      iconBg: "bg-[#DC2626]/10 text-[#DC2626]",
    },
  ];

  // Table Data matching mockup
  const rawContributions = [
    {
      id: "CNB874512",
      member: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "CNB874512",
      member: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "CNB874512",
      member: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "CNB874512",
      member: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "CNB874512",
      member: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "CNB874512",
      member: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "CNB874512",
      member: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "CNB874513",
      member: "James Danladi",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1",
      amount: "₦20,000",
      method: "Wallet",
      dateTime: "Apr 28, 2025, 10:00 AM",
      status: "Pending",
    },
    {
      id: "CNB874514",
      member: "Tunde Akinola",
      group: "Yaba Ajo Group",
      cycle: "Cycle 2",
      amount: "₦50,000",
      method: "Card",
      dateTime: "May 01, 2025, 11:30 AM",
      status: "Successful",
    },
    {
      id: "CNB874515",
      member: "Fatima Bello",
      group: "Lekki Wealth Pot",
      cycle: "Cycle 1",
      amount: "₦100,000",
      method: "Bank Transfer",
      dateTime: "May 02, 2025, 08:20 AM",
      status: "Failed / Reversed",
    },
  ];

  const filteredContributions = rawContributions.filter((c) => {
    if (statusFilter !== "All Statuses" && c.status !== statusFilter) return false;
    if (groupFilter !== "All Groups" && c.group !== groupFilter) return false;
    const q = searchQuery.toLowerCase().trim();
    if (
      q &&
      !c.member.toLowerCase().includes(q) &&
      !c.id.toLowerCase().includes(q) &&
      !c.group.toLowerCase().includes(q)
    ) {
      return false;
    }
    return true;
  });

  const pageSize = 7;
  const totalPages = Math.max(1, Math.ceil(filteredContributions.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedContributions = filteredContributions.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize
  );

  return (
    <div className="space-y-6">
      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
            Contributions
          </h1>
          <p className="text-sm text-[#737373] mt-1">
            Monitor all contributions made across groups on PallyPot.
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
              className={`rounded-xl p-4 sm:p-5 border border-[#F3EFEA] shadow-xs flex items-center gap-3.5 sm:gap-4 ${card.bg}`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#737373]">{card.label}</p>
                <p className="text-xl sm:text-2xl font-bold text-[#111827] mt-0.5">
                  {card.value}
                </p>
                <p className="text-xs text-[#737373] mt-0.5">{card.sub}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FILTERS BAR (Image 2) */}
      <div className="bg-white rounded-xl p-4 border border-[#F3EFEA] shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full xl:max-w-md">
          <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by member, group or transaction ID"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B]"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full xl:w-auto">
          {/* Groups dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[130px]">
            <button
              onClick={() => {
                setIsGroupOpen(!isGroupOpen);
                setIsStatusOpen(false);
                setIsPeriodOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{groupFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isGroupOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Groups", "Ikeja Ajo Circle", "Yaba Ajo Group", "Lekki Wealth Pot"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setGroupFilter(opt);
                        setIsGroupOpen(false);
                        setCurrentPage(1);
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
                setIsGroupOpen(false);
                setIsPeriodOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{statusFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isStatusOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-44 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Statuses", "Successful", "Pending", "Failed / Reversed"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setStatusFilter(opt);
                        setIsStatusOpen(false);
                        setCurrentPage(1);
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

          {/* Period dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[120px]">
            <button
              onClick={() => {
                setIsPeriodOpen(!isPeriodOpen);
                setIsGroupOpen(false);
                setIsStatusOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{periodFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isPeriodOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-40 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["This Month", "Last 15 Days", "Last 30 Days", "Last Month"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setPeriodFilter(opt);
                      setIsPeriodOpen(false);
                      setCurrentPage(1);
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
                <th className="py-3 px-4 whitespace-nowrap">Transaction ID</th>
                <th className="py-3 px-4 whitespace-nowrap">Member</th>
                <th className="py-3 px-4 whitespace-nowrap">Group</th>
                <th className="py-3 px-4 whitespace-nowrap">Cycle</th>
                <th className="py-3 px-4 whitespace-nowrap">Amount</th>
                <th className="py-3 px-4 whitespace-nowrap">Payment Method</th>
                <th className="py-3 px-4 whitespace-nowrap">Date & Time</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EFEA] text-xs text-[#111827]">
              {paginatedContributions.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-[#737373]">
                    No contributions found matching your filters.
                  </td>
                </tr>
              ) : (
                paginatedContributions.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/80 transition-colors">
                    {/* Transaction ID */}
                    <td className="py-3.5 px-4 font-bold text-[#111827] whitespace-nowrap">
                      {row.id}
                    </td>

                    {/* Member */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#D1D5DB] shrink-0" />
                        <span className="font-semibold text-[#111827]">
                          {row.member}
                        </span>
                      </div>
                    </td>

                    {/* Group */}
                    <td className="py-3.5 px-4 font-medium text-[#111827] whitespace-nowrap">
                      {row.group}
                    </td>

                    {/* Cycle */}
                    <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">{row.cycle}</td>

                    {/* Amount */}
                    <td className="py-3.5 px-4 font-bold text-[#111827] whitespace-nowrap">
                      {row.amount}
                    </td>

                    {/* Payment Method */}
                    <td className="py-3.5 px-4 text-[#111827] whitespace-nowrap">
                      {row.method}
                    </td>

                    {/* Date & Time */}
                    <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">
                      {row.dateTime}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {row.status === "Successful" && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EAF7EE] text-[#0B6B40]">
                          Successful
                        </span>
                      )}
                      {row.status === "Pending" && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#D97706]">
                          Pending
                        </span>
                      )}
                      {row.status === "Failed / Reversed" && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
                          Failed
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <span>
            Showing{" "}
            {filteredContributions.length === 0
              ? 0
              : (safeCurrentPage - 1) * pageSize + 1}
            –
            {Math.min(
              safeCurrentPage * pageSize,
              filteredContributions.length
            )}{" "}
            of {filteredContributions.length} contributions.
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage(Math.max(1, safeCurrentPage - 1))}
              disabled={safeCurrentPage === 1}
              className="px-2.5 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] disabled:opacity-40 cursor-pointer"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded font-medium cursor-pointer ${
                  safeCurrentPage === page
                    ? "bg-[#82C3A7] text-white"
                    : "border border-[#E5E7EB] hover:bg-gray-50 text-[#737373]"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, safeCurrentPage + 1))}
              disabled={safeCurrentPage === totalPages}
              className="px-2.5 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] disabled:opacity-40 cursor-pointer"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
