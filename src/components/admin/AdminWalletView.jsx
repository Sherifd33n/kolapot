import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  ChevronDown,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  Plus,
  ArrowDown,
  ArrowUp,
  Building,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
  Calendar,
  X,
  CreditCard,
  ShieldCheck,
  Check,
  AlertCircle,
  Lock,
  Layers,
  RefreshCw,
} from "lucide-react";
import { PiWalletLight } from "react-icons/pi";
import { BsArrowLeftRight } from "react-icons/bs";

export default function AdminWalletView({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [periodFilter, setPeriodFilter] = useState("This Month");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Dropdown states
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  // Balances
  const [availableBalance, setAvailableBalance] = useState(480000);
  const [escrowBalance, setEscrowBalance] = useState(1200000);

  // Modals & toast
  const [selectedTx, setSelectedTx] = useState(null);
  const [fundModalOpen, setFundModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Form inputs
  const [fundAmount, setFundAmount] = useState("");
  const [fundMethod, setFundMethod] = useState("Debit Card");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawBank, setWithdrawBank] = useState("Access Bank (•••• 4821)");

  // Mock Transactions Data
  const [transactions, setTransactions] = useState([
    {
      id: "WLT-928172",
      type: "Contribution Inflow",
      direction: "in",
      description: "Member Contribution - Adebayo Razak",
      group: "Unity Ajo Circle",
      amount: 60000,
      channel: "Bank Transfer",
      dateTime: "Nov 18, 2026, 10:14 AM",
      status: "Successful",
      reference: "FLW-TX-984210",
      fee: 0,
    },
    {
      id: "WLT-928171",
      type: "Contribution Inflow",
      direction: "in",
      description: "Member Contribution - Chiamaka Okafor",
      group: "Unity Ajo Circle",
      amount: 60000,
      channel: "PallyPot Wallet",
      dateTime: "Nov 17, 2026, 04:30 PM",
      status: "Successful",
      reference: "PLP-WL-748291",
      fee: 0,
    },
    {
      id: "WLT-928170",
      type: "Payout Disbursement",
      direction: "out",
      description: "Cycle 3 Payout - Babajide Sanwo",
      group: "Unity Ajo Circle",
      amount: 240000,
      channel: "Guaranty Trust Bank",
      dateTime: "Oct 25, 2026, 11:20 AM",
      status: "Successful",
      reference: "GTB-TRX-948102",
      fee: 0,
    },
    {
      id: "WLT-928169",
      type: "Contribution Inflow",
      direction: "in",
      description: "Member Contribution - Folake Balogun",
      group: "Sango Ajo Group",
      amount: 50000,
      channel: "Bank Transfer",
      dateTime: "Nov 16, 2026, 01:15 PM",
      status: "Successful",
      reference: "GTB-TR-392817",
      fee: 0,
    },
    {
      id: "WLT-928168",
      type: "Wallet Top-up",
      direction: "in",
      description: "Admin Reserve Funding",
      group: "General Escrow",
      amount: 150000,
      channel: "Debit Card (•••• 2910)",
      dateTime: "Nov 15, 2026, 03:00 PM",
      status: "Successful",
      reference: "TOP-UP-581920",
      fee: 0,
    },
    {
      id: "WLT-928167",
      type: "Withdrawal",
      direction: "out",
      description: "Admin Settlement to Bank",
      group: "General Escrow",
      amount: 100000,
      channel: "Access Bank (•••• 4821)",
      dateTime: "Nov 12, 2026, 04:10 PM",
      status: "Successful",
      reference: "WTH-ACC-819204",
      fee: 50,
    },
    {
      id: "WLT-928166",
      type: "Contribution Inflow",
      direction: "in",
      description: "Member Contribution - Fatima Aliyu",
      group: "Ikeja Ajo Circle",
      amount: 20000,
      channel: "Bank Transfer",
      dateTime: "Nov 14, 2026, 09:20 AM",
      status: "Successful",
      reference: "ACC-TR-819203",
      fee: 0,
    },
    {
      id: "WLT-928165",
      type: "Payout Disbursement",
      direction: "out",
      description: "Cycle 1 Payout - Aisha Ibrahim",
      group: "Ikeja Ajo Circle",
      amount: 200000,
      channel: "First Bank (•••• 7364)",
      dateTime: "Oct 20, 2026, 02:10 PM",
      status: "Successful",
      reference: "FBN-TRX-581920",
      fee: 0,
    },
    {
      id: "WLT-928164",
      type: "Contribution Inflow",
      direction: "in",
      description: "Member Contribution - Blessing Eze",
      group: "Ikeja Ajo Circle",
      amount: 20000,
      channel: "Bank Transfer",
      dateTime: "Nov 12, 2026, 08:30 AM",
      status: "Successful",
      reference: "UBT-TR-491029",
      fee: 0,
    },
    {
      id: "WLT-928163",
      type: "Contribution Inflow",
      direction: "in",
      description: "Member Contribution - Zainab Mohammed",
      group: "Unity Ajo Circle",
      amount: 60000,
      channel: "PallyPot Wallet",
      dateTime: "Nov 13, 2026, 03:45 PM",
      status: "Successful",
      reference: "PLP-WL-301948",
      fee: 0,
    },
  ]);

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchesSearch =
        searchQuery === "" ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.group.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        typeFilter === "All Types" ||
        (typeFilter === "Inflows / Credits" && t.direction === "in") ||
        (typeFilter === "Outflows / Debits" && t.direction === "out") ||
        t.type === typeFilter;

      const matchesStatus =
        statusFilter === "All Statuses" || t.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [transactions, searchQuery, typeFilter, statusFilter]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredTransactions.length / itemsPerPage));
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTransactions.slice(start, start + itemsPerPage);
  }, [filteredTransactions, currentPage, itemsPerPage]);

  // Handle Fund Wallet
  const handleFundSubmit = (e) => {
    e.preventDefault();
    const parsed = parseFloat(fundAmount);
    if (!parsed || parsed <= 0) return;

    setAvailableBalance((prev) => prev + parsed);
    const newTx = {
      id: `WLT-${Math.floor(100000 + Math.random() * 900000)}`,
      type: "Wallet Top-up",
      direction: "in",
      description: "Admin Escrow Top-up",
      group: "General Escrow",
      amount: parsed,
      channel: fundMethod,
      dateTime: "Just now",
      status: "Successful",
      reference: `FLW-TOP-${Math.floor(100000 + Math.random() * 900000)}`,
      fee: 0,
    };
    setTransactions((prev) => [newTx, ...prev]);
    setFundModalOpen(false);
    setFundAmount("");
    setToastMessage(`₦${parsed.toLocaleString()} successfully credited to your Admin Wallet!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Handle Withdraw
  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    const parsed = parseFloat(withdrawAmount);
    if (!parsed || parsed <= 0) return;
    if (parsed > availableBalance) {
      alert("Withdrawal amount cannot exceed available balance.");
      return;
    }

    setAvailableBalance((prev) => prev - parsed);
    const newTx = {
      id: `WLT-${Math.floor(100000 + Math.random() * 900000)}`,
      type: "Withdrawal",
      direction: "out",
      description: "Settlement Withdrawal to Bank",
      group: "General Escrow",
      amount: parsed,
      channel: withdrawBank,
      dateTime: "Just now",
      status: "Successful",
      reference: `WTH-SET-${Math.floor(100000 + Math.random() * 900000)}`,
      fee: 50,
    };
    setTransactions((prev) => [newTx, ...prev]);
    setWithdrawModalOpen(false);
    setWithdrawAmount("");
    setToastMessage(`₦${parsed.toLocaleString()} withdrawn to ${withdrawBank}!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // CSV Export
  const handleExportCSV = () => {
    const headers = [
      "Transaction ID",
      "Type",
      "Description",
      "Group",
      "Amount (NGN)",
      "Channel",
      "Date & Time",
      "Status",
      "Reference",
    ];
    const rows = filteredTransactions.map((t) => [
      t.id,
      `"${t.type}"`,
      `"${t.description}"`,
      `"${t.group}"`,
      t.direction === "in" ? t.amount : -t.amount,
      `"${t.channel}"`,
      `"${t.dateTime}"`,
      t.status,
      t.reference,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `pallypot_admin_wallet_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalInflows = transactions
    .filter((t) => t.direction === "in" && t.status === "Successful")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalOutflows = transactions
    .filter((t) => t.direction === "out" && t.status === "Successful")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6 animate-tab-content pb-12 max-w-6xl">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#064335] text-white rounded-xl shadow-xl border border-white/20 animate-fade-in text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-[#86EFAC]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#031B03]">
            Admin Wallet & Escrow
          </h2>
          <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
            Manage your group pooled funds, escrow reserves, and bank settlements.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setFundModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#064335] text-white rounded-xl text-xs sm:text-sm font-medium hover:bg-[#085a47] transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Fund Wallet</span>
          </button>
          <button
            onClick={() => setWithdrawModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-[#E5E0D6] rounded-xl text-xs sm:text-sm font-medium text-[#1A2E26] hover:bg-[#FAF8F5] transition-all shadow-xs cursor-pointer"
          >
            <ArrowUpRight className="w-4 h-4 text-[#064335]" />
            <span>Withdraw</span>
          </button>
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-white border border-[#E5E0D6] rounded-xl text-xs sm:text-sm font-medium text-[#7E7F7D] hover:bg-[#FAF8F5] transition-all shadow-xs cursor-pointer"
            title="Export CSV"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4 TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Available Wallet Balance */}
        <div className="bg-[#9DE0A94F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#17AA89]/20">
          <Wallet className="text-[#17AA89]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Available Balance
            </span>
            <span className="text-2xl font-bold text-[#064335] tracking-tight">
              ₦{availableBalance.toLocaleString()}
            </span>
            <span className="text-xs text-[#0B6B40] block mt-0.5 font-medium">
              Ready for withdrawal or reserve
            </span>
          </div>
        </div>

        {/* Escrow Locked */}
        <div className="bg-[#EADB544F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#988A08]/20">
          <Lock className="text-[#988A08]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Escrow Protected
            </span>
            <span className="text-2xl font-bold text-[#000000] tracking-tight">
              ₦{escrowBalance.toLocaleString()}
            </span>
            <span className="text-xs text-[#716606] block mt-0.5">
              Pooled for active rotation payouts
            </span>
          </div>
        </div>

        {/* Total Inflows */}
        <div className="bg-[#EAF7EE] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#0B6B40]/20">
          <ArrowDownLeft className="text-[#0B6B40]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Total Inflows
            </span>
            <span className="text-2xl font-bold text-[#0B6B40] tracking-tight">
              ₦{totalInflows.toLocaleString()}
            </span>
            <span className="text-xs text-[#0B6B40] block mt-0.5">
              Contributions & deposits
            </span>
          </div>
        </div>

        {/* Total Outflows */}
        <div className="bg-[#ECD0C24F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#AD4D1A]/20">
          <ArrowUpRight className="text-[#AD4D1A]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Total Outflows
            </span>
            <span className="text-2xl font-bold text-[#AD4D1A] tracking-tight">
              ₦{totalOutflows.toLocaleString()}
            </span>
            <span className="text-xs text-[#8B3E14] block mt-0.5">
              Disbursements & withdrawals
            </span>
          </div>
        </div>
      </div>

      {/* LINKED SETTLEMENT ACCOUNT & QUICK ACTIONS */}
      <div className="bg-white rounded-[12px] p-5 shadow-xs border border-[#F0EBE1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E5E0D6] flex items-center justify-center text-[#064335] shrink-0">
            <Building className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7E7F7D]">
              Linked Settlement Account
            </span>
            <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
              Access Bank •••• 4821 (Amara Johnson)
            </h4>
            <p className="text-xs text-[#7E7F7D]">
              Automatic payout clearing & admin fee deposits
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => {
              setToastMessage("Bank account details are verified & active.");
              setTimeout(() => setToastMessage(null), 3000);
            }}
            className="flex-1 sm:flex-initial px-3.5 py-2 border border-[#E5E0D6] rounded-xl text-xs font-semibold text-[#1A2E26] hover:bg-[#FAF8F5] transition-all cursor-pointer"
          >
            Manage Accounts
          </button>
          <button
            onClick={() => setWithdrawModalOpen(true)}
            className="flex-1 sm:flex-initial px-3.5 py-2 bg-[#064335] text-white rounded-xl text-xs font-semibold hover:bg-[#085a47] transition-all cursor-pointer"
          >
            Transfer to Bank
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
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
              placeholder="Search by transaction reference, member, or group..."
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
            {/* Type Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsTypeOpen(!isTypeOpen);
                  setIsStatusOpen(false);
                  setIsPeriodOpen(false);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#FAF8F5] border border-[#E5E0D6] rounded-xl text-xs font-medium text-[#1A2E26] hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{typeFilter}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>
              {isTypeOpen && (
                <div className="absolute right-0 mt-1.5 w-48 bg-white border border-[#E5E0D6] rounded-xl shadow-lg z-20 py-1 text-xs">
                  {[
                    "All Types",
                    "Inflows / Credits",
                    "Outflows / Debits",
                    "Contribution Inflow",
                    "Payout Disbursement",
                    "Wallet Top-up",
                    "Withdrawal",
                  ].map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTypeFilter(t);
                        setIsTypeOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-[#FAF8F5] transition-colors ${
                        typeFilter === t ? "font-bold text-[#064335] bg-[#9DE0A94F]/30" : "text-[#1A2E26]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsStatusOpen(!isStatusOpen);
                  setIsTypeOpen(false);
                  setIsPeriodOpen(false);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#FAF8F5] border border-[#E5E0D6] rounded-xl text-xs font-medium text-[#1A2E26] hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{statusFilter}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>
              {isStatusOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-white border border-[#E5E0D6] rounded-xl shadow-lg z-20 py-1 text-xs">
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
                  setIsTypeOpen(false);
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
                  {["This Month", "Last 30 Days", "Last 90 Days", "All Time"].map((p) => (
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

      {/* TRANSACTIONS TABLE */}
      <div className="bg-white rounded-[12px] shadow-xs border border-[#F0EBE1] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#FAF8F5] border-b border-[#EBE6DD] text-[11px] sm:text-xs font-bold text-[#384542] uppercase tracking-wider">
                <th className="py-3.5 px-4">Transaction ID</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Description</th>
                <th className="py-3.5 px-4">Group</th>
                <th className="py-3.5 px-4">Amount</th>
                <th className="py-3.5 px-4">Method / Channel</th>
                <th className="py-3.5 px-4">Date & Time</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EBE1] text-xs sm:text-sm">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-[#7E7F7D]">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="font-medium text-sm text-[#1A2E26]">No transactions found</p>
                    <p className="text-xs text-gray-500 mt-1">Try adjusting your filters.</p>
                  </td>
                </tr>
              ) : (
                paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#FAF8F5]/60 transition-colors cursor-pointer group"
                    onClick={() => setSelectedTx(item)}
                  >
                    {/* Transaction ID */}
                    <td className="py-3.5 px-4 font-mono font-medium text-[#1A2E26] whitespace-nowrap">
                      {item.id}
                    </td>

                    {/* Type badge */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                            item.direction === "in"
                              ? "bg-[#DCFCE7] text-[#15803D]"
                              : "bg-[#FEE2E2] text-[#DC2626]"
                          }`}
                        >
                          {item.direction === "in" ? (
                            <ArrowDownLeft className="w-4 h-4" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4" />
                          )}
                        </div>
                        <span className="font-medium text-[#1A2E26] text-xs">
                          {item.type}
                        </span>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="py-3.5 px-4">
                      <p className="font-medium text-[#1A2E26] truncate max-w-xs">{item.description}</p>
                      <p className="text-[11px] text-[#7E7F7D] font-mono truncate">{item.reference}</p>
                    </td>

                    {/* Group */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E5E0D6] text-xs font-medium text-[#384542]">
                        {item.group}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 px-4 whitespace-nowrap font-bold">
                      <span
                        className={
                          item.direction === "in" ? "text-[#0B6B40]" : "text-[#1A2E26]"
                        }
                      >
                        {item.direction === "in" ? "+" : "-"}₦{item.amount.toLocaleString()}
                      </span>
                    </td>

                    {/* Channel */}
                    <td className="py-3.5 px-4 text-[#52605B] whitespace-nowrap text-xs">
                      {item.channel}
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 text-[#7E7F7D] whitespace-nowrap text-xs">
                      {item.dateTime}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {item.status === "Successful" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                          Successful
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FEF3C7] text-[#D97706]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                          Pending
                        </span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedTx(item)}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg border border-[#E5E0D6] hover:bg-[#064335] hover:text-white text-[#1A2E26] transition-colors cursor-pointer"
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

        {/* PAGINATION */}
        <div className="px-4 py-3 border-t border-[#F0EBE1] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7E7F7D]">
          <div>
            Showing {(currentPage - 1) * itemsPerPage + (filteredTransactions.length > 0 ? 1 : 0)}–
            {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of{" "}
            {filteredTransactions.length} transactions
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

      {/* FUND WALLET MODAL */}
      {fundModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setFundModalOpen(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 border border-[#E5E0D6] animate-scale-up max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EBE1]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#064335] text-white flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A2E26]">Top Up Admin Wallet</h3>
                    <p className="text-xs text-[#7E7F7D]">Add liquidity to your group operating account</p>
                  </div>
                </div>
                <button
                  onClick={() => setFundModalOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFundSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#1A2E26] block mb-1.5">
                    Amount to Fund (NGN)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#7E7F7D]">
                      ₦
                    </span>
                    <input
                      type="number"
                      required
                      min="1000"
                      step="500"
                      value={fundAmount}
                      onChange={(e) => setFundAmount(e.target.value)}
                      placeholder="e.g. 100,000"
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-[#E5E0D6] text-sm text-[#1A2E26] font-semibold focus:outline-none focus:border-[#064335]"
                    />
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[50000, 100000, 200000].map((preset) => (
                      <button
                        type="button"
                        key={preset}
                        onClick={() => setFundAmount(preset.toString())}
                        className="px-2.5 py-1 text-xs rounded-lg border border-[#E5E0D6] hover:bg-[#FAF8F5] text-[#1A2E26]"
                      >
                        +₦{preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1A2E26] block mb-1.5">
                    Payment Method
                  </label>
                  <select
                    value={fundMethod}
                    onChange={(e) => setFundMethod(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:outline-none focus:border-[#064335]"
                  >
                    <option value="Debit Card">Debit Card (Mastercard / Visa / Verve)</option>
                    <option value="Direct Bank Transfer">Direct Bank Transfer</option>
                    <option value="USSD">USSD (*737#, *894#, etc.)</option>
                  </select>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E5E0D6] text-xs text-[#7E7F7D] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#064335] shrink-0 mt-0.5" />
                  <span>
                    Payments are secured with end-to-end encryption. Funds reflect instantly in your balance.
                  </span>
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#F0EBE1]">
                  <button
                    type="button"
                    onClick={() => setFundModalOpen(false)}
                    className="px-4 py-2.5 border border-[#E5E0D6] text-xs font-semibold text-[#1A2E26] rounded-xl hover:bg-[#FAF8F5]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#064335] text-white text-xs font-semibold rounded-xl hover:bg-[#085a47] transition-all shadow-md"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}

      {/* WITHDRAW MODAL */}
      {withdrawModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setWithdrawModalOpen(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 border border-[#E5E0D6] animate-scale-up max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EBE1]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#064335] text-white flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A2E26]">Withdraw to Bank</h3>
                    <p className="text-xs text-[#7E7F7D]">Transfer funds to your verified account</p>
                  </div>
                </div>
                <button
                  onClick={() => setWithdrawModalOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleWithdrawSubmit} className="space-y-4">
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E5E0D6] flex justify-between items-center text-xs">
                  <span className="text-[#7E7F7D]">Available for Withdrawal:</span>
                  <span className="text-sm font-bold text-[#064335]">
                    ₦{availableBalance.toLocaleString()}
                  </span>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1A2E26] block mb-1.5">
                    Withdrawal Amount (NGN)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#7E7F7D]">
                      ₦
                    </span>
                    <input
                      type="number"
                      required
                      min="1000"
                      max={availableBalance}
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="e.g. 50,000"
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-[#E5E0D6] text-sm text-[#1A2E26] font-semibold focus:outline-none focus:border-[#064335]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1A2E26] block mb-1.5">
                    Destination Bank Account
                  </label>
                  <select
                    value={withdrawBank}
                    onChange={(e) => setWithdrawBank(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:outline-none focus:border-[#064335]"
                  >
                    <option value="Access Bank (•••• 4821)">Access Bank •••• 4821 (Primary)</option>
                    <option value="Zenith Bank (•••• 9102)">Zenith Bank •••• 9102 (Backup)</option>
                  </select>
                </div>

                <div className="divide-y divide-[#F0EBE1] text-xs pt-1">
                  <div className="py-1.5 flex justify-between text-[#7E7F7D]">
                    <span>Transfer Fee:</span>
                    <span className="font-semibold text-[#1A2E26]">₦50</span>
                  </div>
                  <div className="py-1.5 flex justify-between font-bold text-[#1A2E26]">
                    <span>Total Debit:</span>
                    <span>
                      ₦{(parseFloat(withdrawAmount || 0) + 50).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#F0EBE1]">
                  <button
                    type="button"
                    onClick={() => setWithdrawModalOpen(false)}
                    className="px-4 py-2.5 border border-[#E5E0D6] text-xs font-semibold text-[#1A2E26] rounded-xl hover:bg-[#FAF8F5]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#064335] text-white text-xs font-semibold rounded-xl hover:bg-[#085a47] transition-all shadow-md"
                  >
                    Authorize Withdrawal
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}

      {/* TRANSACTION DETAILS MODAL */}
      {selectedTx &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setSelectedTx(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 border border-[#E5E0D6] animate-scale-up max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EBE1]">
                <div>
                  <span className="text-xs font-mono text-[#064335] bg-[#9DE0A94F]/30 px-2 py-0.5 rounded-md font-semibold">
                    {selectedTx.id}
                  </span>
                  <h3 className="text-lg font-bold text-[#1A2E26] mt-1.5">
                    Transaction Receipt
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTx(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E5E0D6] text-center space-y-1">
                  <span className="text-xs text-[#7E7F7D] font-medium block">Total Amount</span>
                  <span
                    className={`text-2xl font-bold ${
                      selectedTx.direction === "in" ? "text-[#0B6B40]" : "text-[#1A2E26]"
                    }`}
                  >
                    {selectedTx.direction === "in" ? "+" : "-"}₦{selectedTx.amount.toLocaleString()}
                  </span>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#DCFCE7] text-[#15803D]">
                    {selectedTx.status}
                  </span>
                </div>

                <div className="divide-y divide-[#F0EBE1] text-xs">
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Description</span>
                    <span className="font-semibold text-[#1A2E26]">{selectedTx.description}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Transaction Type</span>
                    <span className="font-semibold text-[#1A2E26]">{selectedTx.type}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Group / Scope</span>
                    <span className="font-semibold text-[#1A2E26]">{selectedTx.group}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Channel / Bank</span>
                    <span className="font-semibold text-[#1A2E26]">{selectedTx.channel}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Reference</span>
                    <span className="font-mono text-[#1A2E26]">{selectedTx.reference}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Date & Timestamp</span>
                    <span className="font-medium text-[#1A2E26]">{selectedTx.dateTime}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-[#F0EBE1]">
                <button
                  onClick={() => {
                    setToastMessage("Receipt downloaded!");
                    setTimeout(() => setToastMessage(null), 3000);
                  }}
                  className="px-4 py-2 bg-[#064335] text-white hover:bg-[#085a47] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Receipt</span>
                </button>
                <button
                  onClick={() => setSelectedTx(null)}
                  className="px-4 py-2 border border-[#E5E0D6] text-xs font-semibold text-[#1A2E26] rounded-xl hover:bg-[#FAF8F5]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

