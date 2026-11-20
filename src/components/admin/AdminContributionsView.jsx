import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  ChevronDown,
  Database,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
  Bell,
  Check,
  X,
  ExternalLink,
  Users,
  Filter,
  Calendar,
  AlertCircle,
  Eye,
  Send,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { PiWalletLight } from "react-icons/pi";
import { VscTarget } from "react-icons/vsc";
import { FiAlertOctagon } from "react-icons/fi";

export default function AdminContributionsView({ onNavigate, onSwitchToGroups }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [groupFilter, setGroupFilter] = useState("All Groups");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [periodFilter, setPeriodFilter] = useState("This Month");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Dropdown menus
  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  // Modals & toast states
  const [selectedContribution, setSelectedContribution] = useState(null);
  const [reminderToast, setReminderToast] = useState(null);
  const [bulkReminderOpen, setBulkReminderOpen] = useState(false);

  // Mock Contributions Data for Group Admin
  const [contributions, setContributions] = useState([
    {
      id: "CNB-849201",
      member: "Adebayo Razak",
      email: "adebayo.r@gmail.com",
      phone: "+234 803 234 5678",
      group: "Unity Ajo Circle",
      cycle: "Cycle 4 of 10",
      amount: 60000,
      method: "Bank Transfer",
      dateTime: "Nov 18, 2026, 10:14 AM",
      dueDate: "Nov 20, 2026",
      status: "Successful",
      reference: "FLW-TX-984210",
      paidDate: "Nov 18, 2026",
    },
    {
      id: "CNB-849202",
      member: "Chiamaka Okafor",
      email: "chiamaka.o@yahoo.com",
      phone: "+234 812 345 6789",
      group: "Unity Ajo Circle",
      cycle: "Cycle 4 of 10",
      amount: 60000,
      method: "PallyPot Wallet",
      dateTime: "Nov 17, 2026, 04:30 PM",
      dueDate: "Nov 20, 2026",
      status: "Successful",
      reference: "PLP-WL-748291",
      paidDate: "Nov 17, 2026",
    },
    {
      id: "CNB-849203",
      member: "Ibrahim Sanni",
      email: "sanni.ibrahim@outlook.com",
      phone: "+234 809 876 5432",
      group: "Unity Ajo Circle",
      cycle: "Cycle 4 of 10",
      amount: 60000,
      method: "Pending",
      dateTime: "—",
      dueDate: "Nov 20, 2026",
      status: "Pending",
      reference: "—",
      paidDate: "—",
    },
    {
      id: "CNB-849204",
      member: "Folake Balogun",
      email: "folake.b@gmail.com",
      phone: "+234 705 432 1098",
      group: "Sango Ajo Group",
      cycle: "Cycle 3 of 12",
      amount: 50000,
      method: "Bank Transfer",
      dateTime: "Nov 16, 2026, 01:15 PM",
      dueDate: "Nov 18, 2026",
      status: "Successful",
      reference: "GTB-TR-392817",
      paidDate: "Nov 16, 2026",
    },
    {
      id: "CNB-849205",
      member: "Emeka Nnamdi",
      email: "emeka.n@gmail.com",
      phone: "+234 802 987 6543",
      group: "Sango Ajo Group",
      cycle: "Cycle 3 of 12",
      amount: 50000,
      method: "Debit Card",
      dateTime: "Nov 15, 2026, 11:00 AM",
      dueDate: "Nov 18, 2026",
      status: "Failed",
      reference: "PAY-ERR-9812",
      paidDate: "—",
      failureReason: "Card insufficient funds",
    },
    {
      id: "CNB-849206",
      member: "Fatima Aliyu",
      email: "fatima.a@gmail.com",
      phone: "+234 816 789 0123",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 2 of 8",
      amount: 20000,
      method: "Bank Transfer",
      dateTime: "Nov 14, 2026, 09:20 AM",
      dueDate: "Nov 15, 2026",
      status: "Successful",
      reference: "ACC-TR-819203",
      paidDate: "Nov 14, 2026",
    },
    {
      id: "CNB-849207",
      member: "Tunde Akinola",
      email: "tunde.ak@gmail.com",
      phone: "+234 803 456 7890",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 2 of 8",
      amount: 20000,
      method: "Pending",
      dateTime: "—",
      dueDate: "Nov 15, 2026",
      status: "Pending",
      reference: "—",
      paidDate: "—",
    },
    {
      id: "CNB-849208",
      member: "Zainab Mohammed",
      email: "zainab.m@gmail.com",
      phone: "+234 808 654 3210",
      group: "Unity Ajo Circle",
      cycle: "Cycle 4 of 10",
      amount: 60000,
      method: "PallyPot Wallet",
      dateTime: "Nov 13, 2026, 03:45 PM",
      dueDate: "Nov 20, 2026",
      status: "Successful",
      reference: "PLP-WL-301948",
      paidDate: "Nov 13, 2026",
    },
    {
      id: "CNB-849209",
      member: "Olumide Bakare",
      email: "olumide.b@yahoo.com",
      phone: "+234 814 123 4567",
      group: "Sango Ajo Group",
      cycle: "Cycle 3 of 12",
      amount: 50000,
      method: "Pending",
      dateTime: "—",
      dueDate: "Nov 18, 2026",
      status: "Pending",
      reference: "—",
      paidDate: "—",
    },
    {
      id: "CNB-849210",
      member: "Blessing Eze",
      email: "blessing.e@gmail.com",
      phone: "+234 805 789 1234",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 2 of 8",
      amount: 20000,
      method: "Bank Transfer",
      dateTime: "Nov 12, 2026, 08:30 AM",
      dueDate: "Nov 15, 2026",
      status: "Successful",
      reference: "UBT-TR-491029",
      paidDate: "Nov 12, 2026",
    },
  ]);

  // Dynamic Filtering
  const filteredContributions = useMemo(() => {
    return contributions.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.member.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reference.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGroup =
        groupFilter === "All Groups" || item.group === groupFilter;

      const matchesStatus =
        statusFilter === "All Statuses" || item.status === statusFilter;

      return matchesSearch && matchesGroup && matchesStatus;
    });
  }, [contributions, searchQuery, groupFilter, statusFilter]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredContributions.length / itemsPerPage));
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredContributions.slice(start, start + itemsPerPage);
  }, [filteredContributions, currentPage, itemsPerPage]);

  // Send single reminder handler
  const handleSendReminder = (item) => {
    setReminderToast(`Payment reminder sent to ${item.member} via SMS & WhatsApp!`);
    setTimeout(() => setReminderToast(null), 3500);
  };

  // Bulk reminder
  const handleSendBulkReminder = () => {
    const pendingCount = filteredContributions.filter((c) => c.status === "Pending").length;
    setBulkReminderOpen(false);
    setReminderToast(`Reminders successfully sent to ${pendingCount} pending member(s)!`);
    setTimeout(() => setReminderToast(null), 4000);
  };

  // Mark as manually paid (Admin power)
  const handleMarkAsPaid = (item) => {
    setContributions((prev) =>
      prev.map((c) =>
        c.id === item.id
          ? {
              ...c,
              status: "Successful",
              method: "Manual Verification",
              dateTime: "Just now",
              reference: `ADM-MAN-${Math.floor(100000 + Math.random() * 900000)}`,
              paidDate: "Today",
            }
          : c
      )
    );
    setSelectedContribution((prev) =>
      prev && prev.id === item.id
        ? {
            ...prev,
            status: "Successful",
            method: "Manual Verification",
            dateTime: "Just now",
            reference: `ADM-MAN-VERIFIED`,
          }
        : prev
    );
    setReminderToast(`Contribution for ${item.member} marked as Paid!`);
    setTimeout(() => setReminderToast(null), 3500);
  };

  // CSV Export
  const handleExportCSV = () => {
    const headers = [
      "Transaction ID",
      "Member",
      "Group",
      "Cycle",
      "Amount (NGN)",
      "Payment Method",
      "Date & Time",
      "Status",
      "Reference",
    ];
    const rows = filteredContributions.map((c) => [
      c.id,
      `"${c.member}"`,
      `"${c.group}"`,
      `"${c.cycle}"`,
      c.amount,
      `"${c.method}"`,
      `"${c.dateTime}"`,
      c.status,
      c.reference,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `pallypot_contributions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Computed summary metrics
  const totalCollected = contributions
    .filter((c) => c.status === "Successful")
    .reduce((sum, c) => sum + c.amount, 0);
  const totalPending = contributions
    .filter((c) => c.status === "Pending")
    .reduce((sum, c) => sum + c.amount, 0);
  const totalFailed = contributions
    .filter((c) => c.status === "Failed")
    .reduce((sum, c) => sum + c.amount, 0);
  const totalExpected = totalCollected + totalPending + totalFailed;

  return (
    <div className="space-y-6 animate-tab-content pb-12 max-w-6xl">
      {/* Toast Notification */}
      {reminderToast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#064335] text-white rounded-xl shadow-xl border border-white/20 animate-fade-in text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-[#86EFAC]" />
          <span>{reminderToast}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#031B03]">
            Group Contributions
          </h2>
          <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
            Track, verify, and follow up on member payments across your active Ajo circles.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setBulkReminderOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white border border-[#E5E0D6] rounded-xl text-xs sm:text-sm font-medium text-[#064335] hover:bg-[#FDFCF9] transition-all shadow-xs cursor-pointer"
          >
            <Bell className="w-4 h-4 text-[#064335]" />
            <span>Send Reminders</span>
          </button>
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#064335] text-white rounded-xl text-xs sm:text-sm font-medium hover:bg-[#085a47] transition-all shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Expected */}
        <div className="bg-[#9DE0A94F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#17AA89]/20">
          <Database className="text-[#17AA89]" size={36} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Total Expected
            </span>
            <span className="text-2xl font-bold text-[#000000] tracking-tight">
              ₦{totalExpected.toLocaleString()}
            </span>
            <span className="text-xs text-[#52605B] block mt-0.5">
              Across all 3 active groups
            </span>
          </div>
        </div>

        {/* Collected / Successful */}
        <div className="bg-[#EAF7EE] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#0B6B40]/20">
          <CheckCircle2 className="text-[#0B6B40]" size={36} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Total Collected
            </span>
            <span className="text-2xl font-bold text-[#0B6B40] tracking-tight">
              ₦{totalCollected.toLocaleString()}
            </span>
            <span className="text-xs text-[#0B6B40] block mt-0.5">
              {contributions.filter((c) => c.status === "Successful").length} Successful Payments
            </span>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-[#EADB544F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#988A08]/20">
          <Clock className="text-[#988A08]" size={36} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Pending Collections
            </span>
            <span className="text-2xl font-bold text-[#988A08] tracking-tight">
              ₦{totalPending.toLocaleString()}
            </span>
            <span className="text-xs text-[#716606] block mt-0.5">
              {contributions.filter((c) => c.status === "Pending").length} awaiting payment
            </span>
          </div>
        </div>

        {/* Overdue / Failed */}
        <div className="bg-[#FEE2E2] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#DC2626]/20">
          <XCircle className="text-[#DC2626]" size={36} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Failed / Overdue
            </span>
            <span className="text-2xl font-bold text-[#DC2626] tracking-tight">
              ₦{totalFailed.toLocaleString()}
            </span>
            <span className="text-xs text-[#B91C1C] block mt-0.5">
              {contributions.filter((c) => c.status === "Failed").length} requires follow-up
            </span>
          </div>
        </div>
      </div>

      {/* FILTER CONTROLS BAR */}
      <div className="bg-white rounded-[12px] p-4 shadow-xs border border-[#F0EBE1] space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#7E7F7D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by member name, group, or transaction ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E0D6] bg-[#FAF8F5] text-xs sm:text-sm text-[#1A2E26] placeholder-[#9A9D97] focus:outline-none focus:border-[#064335] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dropdown Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {/* Group Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsGroupOpen(!isGroupOpen);
                  setIsStatusOpen(false);
                  setIsPeriodOpen(false);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#FAF8F5] border border-[#E5E0D6] rounded-xl text-xs font-medium text-[#1A2E26] hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{groupFilter}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>
              {isGroupOpen && (
                <div className="absolute right-0 mt-1.5 w-48 bg-white border border-[#E5E0D6] rounded-xl shadow-lg z-20 py-1 text-xs">
                  {["All Groups", "Unity Ajo Circle", "Sango Ajo Group", "Ikeja Ajo Circle"].map(
                    (grp) => (
                      <button
                        key={grp}
                        onClick={() => {
                          setGroupFilter(grp);
                          setIsGroupOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-3.5 py-2 hover:bg-[#FAF8F5] transition-colors ${
                          groupFilter === grp ? "font-bold text-[#064335] bg-[#9DE0A94F]/30" : "text-[#1A2E26]"
                        }`}
                      >
                        {grp}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsStatusOpen(!isStatusOpen);
                  setIsGroupOpen(false);
                  setIsPeriodOpen(false);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#FAF8F5] border border-[#E5E0D6] rounded-xl text-xs font-medium text-[#1A2E26] hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{statusFilter}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>
              {isStatusOpen && (
                <div className="absolute right-0 mt-1.5 w-40 bg-white border border-[#E5E0D6] rounded-xl shadow-lg z-20 py-1 text-xs">
                  {["All Statuses", "Successful", "Pending", "Failed"].map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        setStatusFilter(st);
                        setIsStatusOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-[#FAF8F5] transition-colors ${
                        statusFilter === st ? "font-bold text-[#064335] bg-[#9DE0A94F]/30" : "text-[#1A2E26]"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Period Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsPeriodOpen(!isPeriodOpen);
                  setIsGroupOpen(false);
                  setIsStatusOpen(false);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#FAF8F5] border border-[#E5E0D6] rounded-xl text-xs font-medium text-[#1A2E26] hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>{periodFilter}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>
              {isPeriodOpen && (
                <div className="absolute right-0 mt-1.5 w-40 bg-white border border-[#E5E0D6] rounded-xl shadow-lg z-20 py-1 text-xs">
                  {["This Month", "Last 30 Days", "Current Cycle", "All Time"].map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setPeriodFilter(p);
                        setIsPeriodOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-[#FAF8F5] transition-colors ${
                        periodFilter === p ? "font-bold text-[#064335] bg-[#9DE0A94F]/30" : "text-[#1A2E26]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CONTRIBUTIONS TABLE */}
      <div className="bg-white rounded-[12px] shadow-xs border border-[#F0EBE1] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#FAF8F5] border-b border-[#EBE6DD] text-[11px] sm:text-xs font-bold text-[#384542] uppercase tracking-wider">
                <th className="py-3.5 px-4">Transaction ID</th>
                <th className="py-3.5 px-4">Member</th>
                <th className="py-3.5 px-4">Group</th>
                <th className="py-3.5 px-4">Cycle</th>
                <th className="py-3.5 px-4">Amount</th>
                <th className="py-3.5 px-4">Payment Method</th>
                <th className="py-3.5 px-4">Date / Time</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EBE1] text-xs sm:text-sm">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-[#7E7F7D]">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="font-medium text-sm text-[#1A2E26]">No contributions found</p>
                    <p className="text-xs text-gray-500 mt-1">Try adjusting your search or filters.</p>
                  </td>
                </tr>
              ) : (
                paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#FAF8F5]/60 transition-colors cursor-pointer group"
                    onClick={() => setSelectedContribution(item)}
                  >
                    {/* Transaction ID */}
                    <td className="py-3.5 px-4 font-mono font-medium text-[#1A2E26] whitespace-nowrap">
                      {item.id}
                    </td>

                    {/* Member */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#E5A93C] text-[#073529] font-bold text-xs flex items-center justify-center shrink-0">
                          {item.member
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-[#1A2E26] truncate">{item.member}</p>
                          <p className="text-[11px] text-[#7E7F7D] truncate">{item.phone}</p>
                        </div>
                      </div>
                    </td>

                    {/* Group */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E5E0D6] text-xs font-medium text-[#384542]">
                        {item.group}
                      </span>
                    </td>

                    {/* Cycle */}
                    <td className="py-3.5 px-4 text-[#52605B] whitespace-nowrap">
                      {item.cycle}
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 px-4 font-bold text-[#1A2E26] whitespace-nowrap">
                      ₦{item.amount.toLocaleString()}
                    </td>

                    {/* Payment Method */}
                    <td className="py-3.5 px-4 text-[#52605B] whitespace-nowrap">
                      {item.method}
                    </td>

                    {/* Date / Time */}
                    <td className="py-3.5 px-4 text-[#7E7F7D] whitespace-nowrap text-xs">
                      {item.dateTime}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {item.status === "Successful" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                          Successful
                        </span>
                      ) : item.status === "Pending" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FEF3C7] text-[#D97706]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                          Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FEE2E2] text-[#DC2626]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                          Failed
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {item.status === "Pending" && (
                          <button
                            onClick={() => handleSendReminder(item)}
                            title="Send reminder to member"
                            className="p-1.5 rounded-lg border border-[#E5E0D6] bg-white hover:bg-[#064335] hover:text-white text-[#064335] transition-colors cursor-pointer"
                          >
                            <Bell className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedContribution(item)}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg border border-[#E5E0D6] hover:bg-[#064335] hover:text-white text-[#1A2E26] transition-colors cursor-pointer"
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="px-4 py-3 border-t border-[#F0EBE1] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7E7F7D]">
          <div>
            Showing {(currentPage - 1) * itemsPerPage + (filteredContributions.length > 0 ? 1 : 0)}–
            {Math.min(currentPage * itemsPerPage, filteredContributions.length)} of{" "}
            {filteredContributions.length} contributions
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-2.5 py-1.5 rounded-md border border-[#E5E0D6] hover:bg-[#FAF8F5] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                  currentPage === num
                    ? "bg-[#064335] text-white"
                    : "border border-[#E5E0D6] hover:bg-[#FAF8F5] text-[#1A2E26]"
                }`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-2.5 py-1.5 rounded-md border border-[#E5E0D6] hover:bg-[#FAF8F5] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* CONTRIBUTION DETAILS MODAL */}
      {selectedContribution &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setSelectedContribution(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 border border-[#E5E0D6] animate-scale-up max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EBE1]">
                <div>
                  <span className="text-xs font-mono text-[#064335] bg-[#9DE0A94F]/30 px-2 py-0.5 rounded-md font-semibold">
                    {selectedContribution.id}
                  </span>
                  <h3 className="text-lg font-bold text-[#1A2E26] mt-1.5">
                    Contribution Details
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedContribution(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Member Card */}
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E5E0D6] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E5A93C] text-[#073529] font-bold text-sm flex items-center justify-center">
                      {selectedContribution.member
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A2E26] text-sm">
                        {selectedContribution.member}
                      </h4>
                      <p className="text-xs text-[#7E7F7D]">{selectedContribution.email}</p>
                      <p className="text-xs text-[#7E7F7D]">{selectedContribution.phone}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-md bg-white border border-[#E5E0D6]">
                    {selectedContribution.group}
                  </span>
                </div>

                {/* Transaction Key Details */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#FDFCF9] border border-[#E5E0D6]">
                    <span className="text-[11px] text-[#7E7F7D] block">Amount</span>
                    <span className="text-lg font-bold text-[#064335]">
                      ₦{selectedContribution.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FDFCF9] border border-[#E5E0D6]">
                    <span className="text-[11px] text-[#7E7F7D] block">Status</span>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                        selectedContribution.status === "Successful"
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : selectedContribution.status === "Pending"
                          ? "bg-[#FEF3C7] text-[#D97706]"
                          : "bg-[#FEE2E2] text-[#DC2626]"
                      }`}
                    >
                      {selectedContribution.status}
                    </span>
                  </div>
                </div>

                {/* Data Rows */}
                <div className="divide-y divide-[#F0EBE1] text-xs">
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Rotation Cycle</span>
                    <span className="font-semibold text-[#1A2E26]">
                      {selectedContribution.cycle}
                    </span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Payment Method</span>
                    <span className="font-semibold text-[#1A2E26]">
                      {selectedContribution.method}
                    </span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Reference / Trx Hash</span>
                    <span className="font-mono text-[#1A2E26]">
                      {selectedContribution.reference}
                    </span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Due Date</span>
                    <span className="font-medium text-[#1A2E26]">
                      {selectedContribution.dueDate}
                    </span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Payment Timestamp</span>
                    <span className="font-medium text-[#1A2E26]">
                      {selectedContribution.dateTime}
                    </span>
                  </div>
                  {selectedContribution.failureReason && (
                    <div className="py-2 flex justify-between bg-red-50 px-2 rounded-lg text-red-600">
                      <span>Failure Reason:</span>
                      <span className="font-semibold">
                        {selectedContribution.failureReason}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer / Actions */}
              <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-[#F0EBE1]">
                {selectedContribution.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleMarkAsPaid(selectedContribution)}
                      className="px-3.5 py-2 bg-[#9DE0A94F] text-[#064335] hover:bg-[#8CD89A] text-xs font-semibold rounded-xl transition-all"
                    >
                      Mark as Paid Manually
                    </button>
                    <button
                      onClick={() => {
                        handleSendReminder(selectedContribution);
                        setSelectedContribution(null);
                      }}
                      className="px-3.5 py-2 bg-[#064335] text-white hover:bg-[#085a47] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Reminder</span>
                    </button>
                  </>
                )}
                {selectedContribution.status === "Successful" && (
                  <button
                    onClick={() => {
                      setReminderToast("Payment receipt downloaded!");
                      setTimeout(() => setReminderToast(null), 3000);
                    }}
                    className="px-3.5 py-2 bg-[#064335] text-white hover:bg-[#085a47] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Receipt</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedContribution(null)}
                  className="px-3.5 py-2 border border-[#E5E0D6] text-xs font-semibold text-[#1A2E26] rounded-xl hover:bg-[#FAF8F5] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* BULK REMINDER CONFIRMATION MODAL */}
      {bulkReminderOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setBulkReminderOpen(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-[#E5E0D6] animate-scale-up max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-full bg-[#EADB544F] text-[#988A08] flex items-center justify-center mx-auto">
                <Bell className="w-6 h-6" />
              </div>

              <div className="text-center space-y-1.5">
                <h3 className="text-lg font-bold text-[#1A2E26]">
                  Send Reminders to Pending Members
                </h3>
                <p className="text-xs sm:text-sm text-[#7E7F7D]">
                  This will automatically send SMS, email, and WhatsApp notifications to all members with pending contributions for the current cycle.
                </p>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E5E0D6] text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#7E7F7D]">Pending Members:</span>
                  <span className="font-bold text-[#1A2E26]">
                    {contributions.filter((c) => c.status === "Pending").length} members
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7F7D]">Total Due:</span>
                  <span className="font-bold text-[#D97706]">
                    ₦{totalPending.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  onClick={() => setBulkReminderOpen(false)}
                  className="px-4 py-2 border border-[#E5E0D6] text-xs font-semibold text-[#1A2E26] rounded-xl hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendBulkReminder}
                  className="px-4 py-2 bg-[#064335] text-white text-xs font-semibold rounded-xl hover:bg-[#085a47] flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm & Send</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

