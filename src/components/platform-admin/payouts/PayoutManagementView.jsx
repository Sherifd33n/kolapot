import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  ChevronDown,
  Database,
  CheckCircle2,
  Clock,
  XCircle,
  RotateCw,
  X,
  User,
  Users,
  CreditCard,
  Wallet,
  MinusCircle,
  AlertTriangle,
  Info,
  ArrowRight,
} from "lucide-react";

export default function PayoutManagementView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [groupFilter, setGroupFilter] = useState("All Groups");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [periodFilter, setPeriodFilter] = useState("This Month");

  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  // Modal state for Retry Payout
  const [retryModalPayout, setRetryModalPayout] = useState(null);
  const [retrySuccessNotice, setRetrySuccessNotice] = useState(false);

  // 4 Stat Cards (Image 4)
  const stats = [
    {
      label: "Total Payouts",
      value: "₦8,950,000",
      sub: "124 payouts",
      icon: Database,
      bg: "bg-[#EAF7EE]",
      iconBg: "bg-[#0B6B40]/10 text-[#0B6B40]",
    },
    {
      label: "Successful",
      value: "₦8,650,000",
      sub: "124 payouts",
      icon: CheckCircle2,
      bg: "bg-[#DCFCE7]",
      iconBg: "bg-[#15803D]/10 text-[#15803D]",
    },
    {
      label: "Pending",
      value: "₦320,000",
      sub: "2 payouts",
      icon: Clock,
      bg: "bg-[#FEF3C7]",
      iconBg: "bg-[#D97706]/10 text-[#D97706]",
    },
    {
      label: "Failed / Reversed",
      value: "₦120,000",
      sub: "2 payouts",
      icon: XCircle,
      bg: "bg-[#FEE2E2]",
      iconBg: "bg-[#DC2626]/10 text-[#DC2626]",
    },
  ];

  // Table Data matching image 4
  const [payoutsData, setPayoutsData] = useState([
    {
      id: "p1",
      recipient: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      position: "1st",
      grossAmount: "₦20,000",
      fees: "₦200",
      netAmount: "₦19,800",
      paymentDate: "Apr 28, 2025, 09:14 AM",
      paymentMethod: "Bank Transfer",
      transactionId: "POT783451",
      status: "Failed",
      failureReason: "Bank transfer unsuccessful",
    },
    {
      id: "p2",
      recipient: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      position: "1st",
      grossAmount: "₦20,000",
      fees: "₦200",
      netAmount: "₦19,800",
      paymentDate: "Apr 28, 2025, 09:14 AM",
      paymentMethod: "Bank Transfer",
      transactionId: "POT783451",
      status: "Successful",
    },
    {
      id: "p3",
      recipient: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      position: "1st",
      grossAmount: "₦20,000",
      fees: "₦200",
      netAmount: "₦19,800",
      paymentDate: "Apr 28, 2025, 09:14 AM",
      paymentMethod: "Bank Transfer",
      transactionId: "POT783451",
      status: "Successful",
    },
    {
      id: "p4",
      recipient: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      position: "1st",
      grossAmount: "₦20,000",
      fees: "₦200",
      netAmount: "₦19,800",
      paymentDate: "Apr 28, 2025, 09:14 AM",
      paymentMethod: "Bank Transfer",
      transactionId: "POT783451",
      status: "Successful",
    },
    {
      id: "p5",
      recipient: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      position: "1st",
      grossAmount: "₦20,000",
      fees: "₦200",
      netAmount: "₦19,800",
      paymentDate: "Apr 28, 2025, 09:14 AM",
      paymentMethod: "Bank Transfer",
      transactionId: "POT783451",
      status: "Successful",
    },
    {
      id: "p6",
      recipient: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      position: "1st",
      grossAmount: "₦20,000",
      fees: "₦200",
      netAmount: "₦19,800",
      paymentDate: "Apr 28, 2025, 09:14 AM",
      paymentMethod: "Bank Transfer",
      transactionId: "POT783451",
      status: "Pending",
    },
    {
      id: "p7",
      recipient: "Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      position: "1st",
      grossAmount: "₦20,000",
      fees: "₦200",
      netAmount: "₦19,800",
      paymentDate: "Apr 28, 2025, 09:14 AM",
      paymentMethod: "Bank Transfer",
      transactionId: "POT783451",
      status: "Pending",
    },
  ]);

  const filteredPayouts = payoutsData.filter((item) => {
    const matchesSearch =
      item.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.group.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGroup =
      groupFilter === "All Groups" || item.group === groupFilter;

    const matchesStatus =
      statusFilter === "All Statuses" || item.status === statusFilter;

    return matchesSearch && matchesGroup && matchesStatus;
  });

  const handleOpenRetryModal = (item) => {
    setRetryModalPayout(item);
  };

  const handleConfirmRetry = () => {
    if (retryModalPayout) {
      setPayoutsData((prev) =>
        prev.map((p) =>
          p.id === retryModalPayout.id ? { ...p, status: "Pending" } : p
        )
      );
      setRetryModalPayout(null);
      setRetrySuccessNotice(true);
      setTimeout(() => setRetrySuccessNotice(false), 4000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Success alert notice */}
      {retrySuccessNotice && (
        <div className="bg-[#EAF7EE] border border-[#0B6B40]/30 text-[#0B6B40] px-4 py-3 rounded-xl flex items-center justify-between text-sm shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0B6B40]" />
            <span>Payout retry initiated successfully. Status updated to Pending.</span>
          </div>
          <button
            onClick={() => setRetrySuccessNotice(false)}
            className="text-[#0B6B40] hover:text-[#064335]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
            Payout Management
          </h1>
          <p className="text-sm text-[#737373] mt-1">
            Monitor, track and manage payouts across all groups on PallyPot.
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
                <p className="text-xs font-medium text-[#737373] truncate">{card.label}</p>
                <p className="text-xl sm:text-2xl font-bold text-[#111827] mt-0.5 truncate">
                  {card.value}
                </p>
                <p className="text-xs text-[#737373] mt-0.5 truncate">{card.sub}</p>
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
            placeholder="Search by recipient or transaction ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
                {["All Groups", "Ikeja Ajo Circle", "Yaba Ajo Group"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setGroupFilter(opt);
                        setIsGroupOpen(false);
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
                {["All Statuses", "Successful", "Pending", "Failed"].map((opt) => (
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
                ))}
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
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#EAF0EE] text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 whitespace-nowrap">Recipient</th>
                <th className="py-3 px-4 whitespace-nowrap">Group</th>
                <th className="py-3 px-4 whitespace-nowrap">Position</th>
                <th className="py-3 px-4 whitespace-nowrap">Gross Amount</th>
                <th className="py-3 px-4 whitespace-nowrap">Fees</th>
                <th className="py-3 px-4 whitespace-nowrap">Net Amount</th>
                <th className="py-3 px-4 whitespace-nowrap">Payment Date</th>
                <th className="py-3 px-4 whitespace-nowrap">Payment Method</th>
                <th className="py-3 px-4 whitespace-nowrap">Transaction ID</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EFEA] text-xs text-[#111827]">
              {filteredPayouts.map((row) => (
                <tr key={row.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                  {/* Recipient */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center text-xs font-bold text-[#6B7280] shrink-0">
                        {row.recipient
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-semibold text-[#111827]">
                        {row.recipient}
                      </span>
                    </div>
                  </td>

                  {/* Group */}
                  <td className="py-3.5 px-4 font-medium text-[#111827] whitespace-nowrap">
                    {row.group}
                  </td>

                  {/* Position */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                      {row.position}
                    </span>
                  </td>

                  {/* Gross Amount */}
                  <td className="py-3.5 px-4 font-bold text-[#111827] whitespace-nowrap">
                    {row.grossAmount}
                  </td>

                  {/* Fees */}
                  <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">{row.fees}</td>

                  {/* Net Amount */}
                  <td className="py-3.5 px-4 font-semibold text-[#111827] whitespace-nowrap">
                    {row.netAmount}
                  </td>

                  {/* Payment Date */}
                  <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">
                    {row.paymentDate}
                  </td>

                  {/* Payment Method */}
                  <td className="py-3.5 px-4 text-[#111827] whitespace-nowrap">
                    {row.paymentMethod}
                  </td>

                  {/* Transaction ID */}
                  <td className="py-3.5 px-4 font-mono text-[#737373] whitespace-nowrap">
                    {row.transactionId}
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {row.status === "Failed" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
                        Failed
                      </span>
                    )}
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
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    {row.status === "Failed" ? (
                      <button
                        onClick={() => handleOpenRetryModal(row)}
                        className="px-2.5 py-1 text-xs font-medium rounded-md border border-[#0B6B40] text-[#0B6B40] hover:bg-[#0B6B40]/10 transition-colors cursor-pointer"
                      >
                        Retry Payout
                      </button>
                    ) : (
                      <span className="text-[#9CA3AF]">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <span>Showing 1–{filteredPayouts.length} of 200 payouts.</span>
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
            <button className="px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              3
            </button>
            <button className="px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              4
            </button>
            <button className="px-2.5 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* RETRY PAYOUT MODAL (Image 3) */}
      {retryModalPayout &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
              {/* Header */}
              <div className="flex items-center justify-between pb-1">
                <div>
                  <h3 className="text-xl font-bold text-[#111827]">
                    Retry Payout
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    Are you sure you want to retry this payout? Review the details
                    before proceeding.
                  </p>
                </div>
                <button
                  onClick={() => setRetryModalPayout(null)}
                  className="text-[#737373] hover:text-[#111827] p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Payout Details Heading */}
              <p className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                Payout Details
              </p>

              {/* Details Box */}
              <div className="bg-[#F9FAF9] rounded-xl p-4 border border-[#ECECEC] space-y-3 text-xs">
                {/* Recipient */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <User className="w-4 h-4 text-[#737373]" />
                    <span>Recipient</span>
                  </div>
                  <span className="font-semibold text-[#111827]">
                    Tunde M.
                  </span>
                </div>

                {/* Group */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <Users className="w-4 h-4 text-[#737373]" />
                    <span>Group</span>
                  </div>
                  <span className="font-semibold text-[#111827]">
                    {retryModalPayout.group || "Ikeja Ajo Circle"}
                  </span>
                </div>

                {/* Original Transaction ID */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <CreditCard className="w-4 h-4 text-[#737373]" />
                    <span>Original Transaction ID</span>
                  </div>
                  <span className="font-semibold font-mono text-[#111827]">
                    {retryModalPayout.transactionId || "POT783451"}
                  </span>
                </div>

                {/* Gross Payout */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <Wallet className="w-4 h-4 text-[#737373]" />
                    <span>Gross Payout</span>
                  </div>
                  <span className="font-bold text-[#111827]">
                    {retryModalPayout.grossAmount || "₦20,000"}
                  </span>
                </div>

                {/* Deductions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <MinusCircle className="w-4 h-4 text-[#737373]" />
                    <span>Deductions</span>
                  </div>
                  <span className="font-semibold text-[#111827]">₦0</span>
                </div>

                {/* Net Amount */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <Wallet className="w-4 h-4 text-[#737373]" />
                    <span>Net Amount</span>
                  </div>
                  <span className="font-bold text-[#111827]">
                    {retryModalPayout.netAmount || "₦19,800"}
                  </span>
                </div>

                {/* Failure Reason */}
                <div className="flex items-start justify-between pt-1 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-[#DC2626]">
                    <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0" />
                    <span className="font-medium text-[#737373]">Failure Reason</span>
                  </div>
                  <span className="font-semibold text-[#111827] text-right">
                    {retryModalPayout.failureReason || "Bank transfer unsuccessful"}
                  </span>
                </div>
              </div>

              {/* Warning / Duplicate info note */}
              <div className="bg-[#F8F9FA] rounded-xl p-3 border border-[#E9ECEF] flex items-start gap-2.5 text-xs text-[#555] leading-relaxed">
                <Info className="w-4 h-4 text-[#737373] shrink-0 mt-0.5" />
                <span>
                  The system will check that the original payout is not already
                  processing or completed to prevent duplicate payments.
                </span>
              </div>

              {/* Confirm Retry button */}
              <div className="pt-2">
                <button
                  onClick={handleConfirmRetry}
                  className="w-full py-3 bg-[#0B5D4B] hover:bg-[#074638] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <RotateCw className="w-4 h-4" />
                  <span>Confirm Retry</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

