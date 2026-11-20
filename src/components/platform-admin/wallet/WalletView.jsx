import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Wallet,
  ArrowUpRight,
  ArrowLeftRight,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

export default function WalletView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Transaction Types");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [periodFilter, setPeriodFilter] = useState("This Month");

  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  // 3 Stat Cards (Image 1)
  const stats = [
    {
      label: "Total Wallet Funding",
      value: "₦26,750,000",
      sub: "1,420 fundings",
      icon: Wallet,
      bg: "bg-[#EAF7EE]",
      iconBg: "bg-[#0B6B40]/10 text-[#0B6B40]",
    },
    {
      label: "Total Withdrawals",
      value: "₦6,320,000",
      sub: "340 withdrawals",
      icon: ArrowUpRight,
      bg: "bg-[#FEF3C7]",
      iconBg: "bg-[#D97706]/10 text-[#D97706]",
    },
    {
      label: "Total Wallet Transactions",
      value: "₦33,070,000",
      sub: "1,760 transactions",
      icon: ArrowLeftRight,
      bg: "bg-[#E0F2FE]",
      iconBg: "bg-[#0284C7]/10 text-[#0284C7]",
    },
  ];

  const transactionsData = [
    {
      id: "WLT874512",
      user: "Aisha Ibrahim",
      type: "Wallet Funding",
      direction: "down",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "WLT874512",
      user: "Aisha Ibrahim",
      type: "Withdrawal",
      direction: "up",
      amount: "₦20,000",
      method: "Card",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Pending",
    },
    {
      id: "WLT874512",
      user: "Aisha Ibrahim",
      type: "Wallet Funding",
      direction: "up",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "WLT874512",
      user: "Aisha Ibrahim",
      type: "Wallet Funding",
      direction: "up",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "WLT874512",
      user: "Aisha Ibrahim",
      type: "Wallet Funding",
      direction: "up",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "WLT874512",
      user: "Aisha Ibrahim",
      type: "Wallet Funding",
      direction: "up",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "WLT874512",
      user: "Aisha Ibrahim",
      type: "Wallet Funding",
      direction: "up",
      amount: "₦20,000",
      method: "Bank Transfer",
      dateTime: "Apr 28, 2025, 09:14 AM",
      status: "Successful",
    },
    {
      id: "WLT874513",
      user: "James Danladi",
      type: "Withdrawal",
      direction: "up",
      amount: "₦40,000",
      method: "Bank Transfer",
      dateTime: "Apr 29, 2025, 10:30 AM",
      status: "Pending",
    },
    {
      id: "WLT874514",
      user: "Tunde Akinola",
      type: "Wallet Funding",
      direction: "down",
      amount: "₦100,000",
      method: "Card",
      dateTime: "Apr 30, 2025, 02:15 PM",
      status: "Successful",
    },
  ];

  const filteredTransactions = transactionsData.filter((t) => {
    if (statusFilter !== "All Statuses" && t.status !== statusFilter) return false;
    if (typeFilter !== "All Transaction Types" && t.type !== typeFilter) return false;
    const q = searchQuery.toLowerCase().trim();
    if (
      q &&
      !t.user.toLowerCase().includes(q) &&
      !t.id.toLowerCase().includes(q)
    ) {
      return false;
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredTransactions.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedTransactions = filteredTransactions.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize
  );

  return (
    <div className="space-y-6">
      {/* Top Header Row with Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#111827]">
            Wallet
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] mt-0.5">
            Monitor wallet funding and withdrawals across all users on PallyPot.
          </p>
        </div>

        <div className="relative w-full sm:w-64 lg:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
          <input
            type="text"
            placeholder="Search users, groups, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#087F5B] transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* 3 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`${s.bg} rounded-xl p-4 sm:p-5 shadow-xs flex items-center gap-3.5 sm:gap-4 border border-[#F3EFEA]`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs text-[#737373] font-medium block">
                  {s.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#111827] block leading-tight mt-0.5">
                  {s.value}
                </span>
                <span className="text-xs text-[#737373] block mt-0.5">
                  {s.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter Row matching mockup card style */}
      <div className="bg-white rounded-xl p-4 border border-[#F3EFEA] shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-3">
        <div className="relative w-full xl:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
          <input
            type="text"
            placeholder="Search by user, transaction ID or reference"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#087F5B] transition-colors"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full xl:w-auto">
          {/* All Transaction Types */}
          <div className="relative flex-1 sm:flex-initial min-w-[140px]">
            <button
              onClick={() => {
                setIsTypeOpen(!isTypeOpen);
                setIsStatusOpen(false);
                setIsPeriodOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span>{typeFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isTypeOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Transaction Types", "Wallet Funding", "Withdrawal"].map(
                  (t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTypeFilter(t);
                        setIsTypeOpen(false);
                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-[#FAF8F5] transition-colors cursor-pointer text-[#111827]"
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* All Statuses */}
          <div className="relative flex-1 sm:flex-initial min-w-[120px]">
            <button
              onClick={() => {
                setIsStatusOpen(!isStatusOpen);
                setIsTypeOpen(false);
                setIsPeriodOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span>{statusFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isStatusOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-40 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Statuses", "Successful", "Pending", "Failed"].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setStatusFilter(s);
                      setIsStatusOpen(false);
                      setCurrentPage(1);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#FAF8F5] transition-colors cursor-pointer text-[#111827]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Period */}
          <div className="relative flex-1 sm:flex-initial min-w-[120px]">
            <button
              onClick={() => {
                setIsPeriodOpen(!isPeriodOpen);
                setIsTypeOpen(false);
                setIsStatusOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span>{periodFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isPeriodOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-40 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["This Month", "Last 15 Days", "Last 30 Days", "Last Month", "This Year"].map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setPeriodFilter(p);
                      setIsPeriodOpen(false);
                      setCurrentPage(1);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#FAF8F5] transition-colors cursor-pointer text-[#111827]"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wallet Transactions Table Card */}
      <div className="bg-white rounded-xl border border-[#F3EFEA] shadow-xs overflow-hidden">
        <div className="overflow-x-auto w-full max-w-full">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#EAF0EE] text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 whitespace-nowrap">Transaction ID</th>
                <th className="py-3 px-4 whitespace-nowrap">User</th>
                <th className="py-3 px-4 whitespace-nowrap">Transaction Type</th>
                <th className="py-3 px-4 whitespace-nowrap">Amount</th>
                <th className="py-3 px-4 whitespace-nowrap">Payment Method</th>
                <th className="py-3 px-4 whitespace-nowrap">Date & Time</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EFEA] text-xs text-[#111827]">
              {paginatedTransactions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-[#737373]">
                    No transactions found matching your filters.
                  </td>
                </tr>
              ) : (
                paginatedTransactions.map((t, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#FAF8F5]/80 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-bold text-[#111827] whitespace-nowrap">
                      {t.id}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#D1D5DB] shrink-0" />
                        <span className="font-semibold text-[#111827]">{t.user}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          t.type === "Wallet Funding"
                            ? "bg-[#DCFCE7] text-[#15803D]"
                            : "bg-[#FEF3C7] text-[#D97706]"
                        }`}
                      >
                        {t.direction === "down" ? (
                          <ArrowDown className="w-3 h-3" />
                        ) : (
                          <ArrowUp className="w-3 h-3" />
                        )}
                        <span>{t.type}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#111827] whitespace-nowrap">
                      {t.amount}
                    </td>
                    <td className="py-3.5 px-4 text-[#111827] whitespace-nowrap font-medium">
                      {t.method}
                    </td>
                    <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">
                      {t.dateTime}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          t.status === "Successful"
                            ? "bg-[#DCFCE7] text-[#15803D]"
                            : "bg-[#FEF3C7] text-[#D97706]"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <span className="text-center sm:text-left">
            Showing{" "}
            {filteredTransactions.length === 0
              ? 0
              : (safeCurrentPage - 1) * pageSize + 1}
            –
            {Math.min(
              safeCurrentPage * pageSize,
              filteredTransactions.length
            )}{" "}
            of {filteredTransactions.length} transactions.
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage === 1}
              className="w-7 h-7 flex items-center justify-center border border-[#EBE6DD] rounded text-[#737373] hover:bg-[#FAF8F5] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-7 h-7 flex items-center justify-center rounded font-medium cursor-pointer ${
                  safeCurrentPage === pageNum
                    ? "bg-[#087F5B] text-white font-bold shadow-2xs"
                    : "border border-[#EBE6DD] hover:bg-[#FAF8F5] text-[#111827]"
                }`}
              >
                {pageNum}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage === totalPages}
              className="w-7 h-7 flex items-center justify-center border border-[#EBE6DD] rounded text-[#737373] hover:bg-[#FAF8F5] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

