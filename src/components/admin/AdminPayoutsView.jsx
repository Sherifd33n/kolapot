import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  ChevronDown,
  Send,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Calendar,
  X,
  CreditCard,
  Building,
  ArrowRight,
  ShieldCheck,
  Check,
  RotateCcw,
  User,
  Users,
} from "lucide-react";
import { BsArrowLeftRight } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";

export default function AdminPayoutsView({ onNavigate, onSwitchToGroups }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [groupFilter, setGroupFilter] = useState("All Groups");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [periodFilter, setPeriodFilter] = useState("All Cycles");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Dropdown states
  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  // Modals & toast
  const [selectedPayout, setSelectedPayout] = useState(null);
  const [disburseModalItem, setDisburseModalItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Mock Payouts Data for Group Admin
  const [payouts, setPayouts] = useState([
    {
      id: "POT-88401",
      recipient: "Amaka Okoro",
      email: "amaka.okoro@gmail.com",
      phone: "+234 802 345 6789",
      group: "Unity Ajo Circle",
      cycle: "Cycle 4 of 10",
      rotationPosition: "4th in Rotation",
      grossAmount: 240000,
      fee: 0,
      netAmount: 240000,
      bankName: "Access Bank",
      accountNumber: "0123456789",
      accountName: "Amaka Okoro",
      scheduledDate: "Nov 25, 2026",
      disbursedDate: "—",
      status: "Upcoming", // Upcoming, Processing, Completed, Failed
      method: "Direct Bank Transfer",
      ref: "POT-REF-88401",
    },
    {
      id: "POT-88402",
      recipient: "Babajide Sanwo",
      email: "babajide.s@yahoo.com",
      phone: "+234 813 456 7890",
      group: "Unity Ajo Circle",
      cycle: "Cycle 3 of 10",
      rotationPosition: "3rd in Rotation",
      grossAmount: 240000,
      fee: 0,
      netAmount: 240000,
      bankName: "Guaranty Trust Bank",
      accountNumber: "0234567891",
      accountName: "Babajide Sanwo",
      scheduledDate: "Oct 25, 2026",
      disbursedDate: "Oct 25, 2026, 11:20 AM",
      status: "Completed",
      method: "Direct Bank Transfer",
      ref: "GTB-TRX-948102",
    },
    {
      id: "POT-88403",
      recipient: "Ngozi Eze",
      email: "ngozi.eze@gmail.com",
      phone: "+234 809 123 4567",
      group: "Unity Ajo Circle",
      cycle: "Cycle 2 of 10",
      rotationPosition: "2nd in Rotation",
      grossAmount: 240000,
      fee: 0,
      netAmount: 240000,
      bankName: "Zenith Bank",
      accountNumber: "2198765432",
      accountName: "Ngozi Eze",
      scheduledDate: "Sep 25, 2026",
      disbursedDate: "Sep 25, 2026, 09:45 AM",
      status: "Completed",
      method: "Direct Bank Transfer",
      ref: "ZEN-TRX-382910",
    },
    {
      id: "POT-88404",
      recipient: "Tunde Akinola",
      email: "tunde.ak@gmail.com",
      phone: "+234 803 456 7890",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 2 of 8",
      rotationPosition: "2nd in Rotation",
      grossAmount: 200000,
      fee: 0,
      netAmount: 200000,
      bankName: "Kuda Bank",
      accountNumber: "2019485721",
      accountName: "Tunde Akinola",
      scheduledDate: "Nov 22, 2026",
      disbursedDate: "—",
      status: "Processing",
      method: "Direct Bank Transfer",
      ref: "POT-REF-88404",
    },
    {
      id: "POT-88405",
      recipient: "Aisha Ibrahim",
      email: "aisha.ib@gmail.com",
      phone: "+234 812 987 6543",
      group: "Ikeja Ajo Circle",
      cycle: "Cycle 1 of 8",
      rotationPosition: "1st in Rotation",
      grossAmount: 200000,
      fee: 0,
      netAmount: 200000,
      bankName: "First Bank of Nigeria",
      accountNumber: "3091827364",
      accountName: "Aisha Ibrahim",
      scheduledDate: "Oct 20, 2026",
      disbursedDate: "Oct 20, 2026, 02:10 PM",
      status: "Completed",
      method: "Direct Bank Transfer",
      ref: "FBN-TRX-581920",
    },
    {
      id: "POT-88406",
      recipient: "Chinedu Okeke",
      email: "chinedu.o@gmail.com",
      phone: "+234 703 111 2233",
      group: "Sango Ajo Group",
      cycle: "Cycle 3 of 12",
      rotationPosition: "3rd in Rotation",
      grossAmount: 300000,
      fee: 0,
      netAmount: 300000,
      bankName: "United Bank for Africa",
      accountNumber: "1029384756",
      accountName: "Chinedu Okeke",
      scheduledDate: "Nov 28, 2026",
      disbursedDate: "—",
      status: "Upcoming",
      method: "PallyPot Wallet",
      ref: "POT-REF-88406",
    },
    {
      id: "POT-88407",
      recipient: "Khadijah Bello",
      email: "khadijah.b@gmail.com",
      phone: "+234 816 222 3344",
      group: "Sango Ajo Group",
      cycle: "Cycle 2 of 12",
      rotationPosition: "2nd in Rotation",
      grossAmount: 300000,
      fee: 0,
      netAmount: 300000,
      bankName: "Stanbic IBTC",
      accountNumber: "0029384711",
      accountName: "Khadijah Bello",
      scheduledDate: "Oct 28, 2026",
      disbursedDate: "Oct 28, 2026, 12:00 PM",
      status: "Completed",
      method: "Direct Bank Transfer",
      ref: "STB-TRX-491029",
    },
    {
      id: "POT-88408",
      recipient: "Samuel Ogundimu",
      email: "samuel.og@gmail.com",
      phone: "+234 808 333 4455",
      group: "Sango Ajo Group",
      cycle: "Cycle 1 of 12",
      rotationPosition: "1st in Rotation",
      grossAmount: 300000,
      fee: 0,
      netAmount: 300000,
      bankName: "Sterling Bank",
      accountNumber: "0019283746",
      accountName: "Samuel Ogundimu",
      scheduledDate: "Sep 28, 2026",
      disbursedDate: "Sep 28, 2026, 10:15 AM",
      status: "Completed",
      method: "Direct Bank Transfer",
      ref: "STE-TRX-102948",
    },
  ]);

  // Dynamic filter
  const filteredPayouts = useMemo(() => {
    return payouts.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bankName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGroup =
        groupFilter === "All Groups" || item.group === groupFilter;

      const matchesStatus =
        statusFilter === "All Statuses" || item.status === statusFilter;

      return matchesSearch && matchesGroup && matchesStatus;
    });
  }, [payouts, searchQuery, groupFilter, statusFilter]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPayouts.length / itemsPerPage));
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPayouts.slice(start, start + itemsPerPage);
  }, [filteredPayouts, currentPage, itemsPerPage]);

  // Disburse action handler
  const handleConfirmDisbursement = () => {
    if (!disburseModalItem) return;

    setPayouts((prev) =>
      prev.map((p) =>
        p.id === disburseModalItem.id
          ? {
              ...p,
              status: "Completed",
              disbursedDate: "Just now",
              ref: `PLP-DISB-${Math.floor(100000 + Math.random() * 900000)}`,
            }
          : p
      )
    );

    setToastMessage(
      `₦${disburseModalItem.netAmount.toLocaleString()} successfully disbursed to ${
        disburseModalItem.recipient
      }!`
    );
    setDisburseModalItem(null);
    if (selectedPayout && selectedPayout.id === disburseModalItem.id) {
      setSelectedPayout((prev) => ({
        ...prev,
        status: "Completed",
        disbursedDate: "Just now",
      }));
    }
    setTimeout(() => setToastMessage(null), 4000);
  };

  // CSV Export
  const handleExportCSV = () => {
    const headers = [
      "Payout ID",
      "Beneficiary",
      "Group",
      "Cycle",
      "Rotation Position",
      "Net Amount (NGN)",
      "Bank",
      "Account Number",
      "Scheduled Date",
      "Disbursed Date",
      "Status",
    ];
    const rows = filteredPayouts.map((p) => [
      p.id,
      `"${p.recipient}"`,
      `"${p.group}"`,
      `"${p.cycle}"`,
      `"${p.rotationPosition}"`,
      p.netAmount,
      `"${p.bankName}"`,
      `'${p.accountNumber}`,
      `"${p.scheduledDate}"`,
      `"${p.disbursedDate}"`,
      p.status,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `pallypot_payouts_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Summary Metrics
  const totalDisbursed = payouts
    .filter((p) => p.status === "Completed")
    .reduce((sum, p) => sum + p.netAmount, 0);

  const upcomingPayoutsAmount = payouts
    .filter((p) => p.status === "Upcoming" || p.status === "Processing")
    .reduce((sum, p) => sum + p.netAmount, 0);

  const completedCount = payouts.filter((p) => p.status === "Completed").length;
  const upcomingCount = payouts.filter((p) => p.status === "Upcoming" || p.status === "Processing").length;

  // Next upcoming beneficiary
  const nextPayout = payouts.find((p) => p.status === "Upcoming") || payouts[0];

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
            Group Payouts & Rotations
          </h2>
          <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
            Schedule, authorize, and disburse pooled pots to beneficiaries across all your circles.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white border border-[#E5E0D6] rounded-xl text-xs sm:text-sm font-medium text-[#064335] hover:bg-[#FDFCF9] transition-all shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#064335]" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* 4 TOP METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Disbursed */}
        <div className="bg-[#9DE0A94F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#17AA89]/20">
          <BsArrowLeftRight className="text-[#17AA89]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Total Disbursed
            </span>
            <span className="text-2xl font-bold text-[#000000] tracking-tight">
              ₦{totalDisbursed.toLocaleString()}
            </span>
            <span className="text-xs text-[#0B6B40] block mt-0.5 font-medium">
              {completedCount} cycles completed
            </span>
          </div>
        </div>

        {/* Upcoming This Month */}
        <div className="bg-[#ECF7F9] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#3792C0]/20">
          <Send className="text-[#3792C0]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Upcoming Payouts
            </span>
            <span className="text-2xl font-bold text-[#136B94] tracking-tight">
              ₦{upcomingPayoutsAmount.toLocaleString()}
            </span>
            <span className="text-xs text-[#136B94] block mt-0.5">
              {upcomingCount} beneficiaries scheduled
            </span>
          </div>
        </div>

        {/* Next Scheduled Due */}
        <div className="bg-[#EADB544F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#988A08]/20">
          <Calendar className="text-[#988A08]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Next Due Date
            </span>
            <span className="text-2xl font-bold text-[#000000] tracking-tight">
              Nov 25
            </span>
            <span className="text-xs text-[#716606] block mt-0.5">
              Unity Ajo Circle (Cycle 4)
            </span>
          </div>
        </div>

        {/* Beneficiaries Served */}
        <div className="bg-[#ECD0C24F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs border border-[#AD4D1A]/20">
          <Users className="text-[#AD4D1A]" size={34} />
          <div>
            <span className="text-sm font-medium text-[#1A2E26] block">
              Rotation Progress
            </span>
            <span className="text-2xl font-bold text-[#1A2E26] tracking-tight">
              {completedCount} / {payouts.length}
            </span>
            <span className="text-xs text-[#8B3E14] block mt-0.5">
              Members have received pot
            </span>
          </div>
        </div>
      </div>

      {/* UPCOMING PAYOUT HIGHLIGHT BANNER */}
      {nextPayout && (
        <div className="bg-[#FBF8F2] rounded-2xl p-5 border border-[#E5E0D6] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#064335] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#064335] bg-[#9DE0A94F]/40 px-2 py-0.5 rounded-md">
                  Next Scheduled Payout
                </span>
                <span className="text-xs text-[#7E7F7D]">
                  Due {nextPayout.scheduledDate}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1A2E26] mt-1">
                {nextPayout.recipient} • ₦{nextPayout.netAmount.toLocaleString()}
              </h3>
              <p className="text-xs text-[#52605B]">
                {nextPayout.group} • {nextPayout.cycle} • {nextPayout.bankName} (••• {nextPayout.accountNumber.slice(-4)})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedPayout(nextPayout)}
              className="flex-1 md:flex-initial px-4 py-2.5 bg-white border border-[#E5E0D6] rounded-xl text-xs font-semibold text-[#1A2E26] hover:bg-[#FAF8F5] transition-all cursor-pointer"
            >
              Review Details
            </button>
            <button
              onClick={() => setDisburseModalItem(nextPayout)}
              className="flex-1 md:flex-initial px-4 py-2.5 bg-[#064335] text-white rounded-xl text-xs font-semibold hover:bg-[#085a47] transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Disburse Payout</span>
            </button>
          </div>
        </div>
      )}

      {/* FILTERS BAR */}
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
              placeholder="Search by beneficiary name, group, or bank..."
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
                  {["All Statuses", "Completed", "Upcoming", "Processing", "Failed"].map((st) => (
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
          </div>
        </div>
      </div>

      {/* PAYOUTS TABLE */}
      <div className="bg-white rounded-[12px] shadow-xs border border-[#F0EBE1] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#FAF8F5] border-b border-[#EBE6DD] text-[11px] sm:text-xs font-bold text-[#384542] uppercase tracking-wider">
                <th className="py-3.5 px-4">Payout ID</th>
                <th className="py-3.5 px-4">Beneficiary</th>
                <th className="py-3.5 px-4">Group</th>
                <th className="py-3.5 px-4">Cycle & Position</th>
                <th className="py-3.5 px-4">Net Payout</th>
                <th className="py-3.5 px-4">Bank Details</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EBE1] text-xs sm:text-sm">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-[#7E7F7D]">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="font-medium text-sm text-[#1A2E26]">No payouts found</p>
                    <p className="text-xs text-gray-500 mt-1">Try adjusting your filters.</p>
                  </td>
                </tr>
              ) : (
                paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#FAF8F5]/60 transition-colors cursor-pointer group"
                    onClick={() => setSelectedPayout(item)}
                  >
                    {/* Payout ID */}
                    <td className="py-3.5 px-4 font-mono font-medium text-[#1A2E26] whitespace-nowrap">
                      {item.id}
                    </td>

                    {/* Beneficiary */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#17AA89]/20 text-[#064335] font-bold text-xs flex items-center justify-center shrink-0">
                          {item.recipient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-[#1A2E26] truncate">{item.recipient}</p>
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

                    {/* Cycle & Position */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="font-medium text-[#1A2E26] block">{item.rotationPosition}</span>
                      <span className="text-[11px] text-[#7E7F7D] block">{item.cycle}</span>
                    </td>

                    {/* Net Amount */}
                    <td className="py-3.5 px-4 font-bold text-[#064335] whitespace-nowrap">
                      ₦{item.netAmount.toLocaleString()}
                    </td>

                    {/* Bank Details */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <p className="text-xs font-medium text-[#1A2E26]">{item.bankName}</p>
                      <p className="text-[11px] text-[#7E7F7D] font-mono">•••• {item.accountNumber.slice(-4)}</p>
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 text-[#7E7F7D] whitespace-nowrap text-xs">
                      {item.status === "Completed" ? item.disbursedDate : item.scheduledDate}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {item.status === "Completed" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                          Completed
                        </span>
                      ) : item.status === "Processing" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FEF3C7] text-[#D97706]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                          Processing
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#E0F2FE] text-[#0369A1]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0369A1]" />
                          Upcoming
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        {item.status === "Upcoming" && (
                          <button
                            onClick={() => setDisburseModalItem(item)}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#064335] text-white hover:bg-[#085a47] transition-colors cursor-pointer"
                          >
                            Disburse
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedPayout(item)}
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
            Showing {(currentPage - 1) * itemsPerPage + (filteredPayouts.length > 0 ? 1 : 0)}–
            {Math.min(currentPage * itemsPerPage, filteredPayouts.length)} of{" "}
            {filteredPayouts.length} payouts
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

      {/* DISBURSE CONFIRMATION MODAL */}
      {disburseModalItem &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setDisburseModalItem(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 border border-[#E5E0D6] animate-scale-up max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EBE1]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#064335] text-white flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A2E26]">Confirm Payout Disbursement</h3>
                    <p className="text-xs text-[#7E7F7D]">Verify details before releasing group funds</p>
                  </div>
                </div>
                <button
                  onClick={() => setDisburseModalItem(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Payout Summary Box */}
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E5E0D6] space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#E5E0D6]">
                  <span className="text-xs text-[#7E7F7D]">Beneficiary:</span>
                  <span className="text-sm font-bold text-[#1A2E26]">{disburseModalItem.recipient}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E5E0D6]">
                  <span className="text-xs text-[#7E7F7D]">Group & Rotation:</span>
                  <span className="text-xs font-semibold text-[#1A2E26]">
                    {disburseModalItem.group} ({disburseModalItem.rotationPosition})
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E5E0D6]">
                  <span className="text-xs text-[#7E7F7D]">Bank Account:</span>
                  <span className="text-xs font-mono font-medium text-[#1A2E26]">
                    {disburseModalItem.bankName} • {disburseModalItem.accountNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm font-semibold text-[#1A2E26]">Disbursement Amount:</span>
                  <span className="text-xl font-bold text-[#064335]">
                    ₦{disburseModalItem.netAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#EAF7EE] rounded-xl border border-[#0B6B40]/20 flex items-start gap-2.5 text-xs text-[#0B6B40]">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Funds will be transferred directly from the group escrow balance to the member's verified account. An instant confirmation receipt will be generated.
                </span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#F0EBE1]">
                <button
                  onClick={() => setDisburseModalItem(null)}
                  className="px-4 py-2.5 border border-[#E5E0D6] text-xs font-semibold text-[#1A2E26] rounded-xl hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDisbursement}
                  className="px-5 py-2.5 bg-[#064335] text-white text-xs font-semibold rounded-xl hover:bg-[#085a47] flex items-center gap-1.5 shadow-md"
                >
                  <Check className="w-4 h-4" />
                  <span>Authorize & Pay ₦{disburseModalItem.netAmount.toLocaleString()}</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* VIEW DETAILS MODAL */}
      {selectedPayout &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setSelectedPayout(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 border border-[#E5E0D6] animate-scale-up max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EBE1]">
                <div>
                  <span className="text-xs font-mono text-[#064335] bg-[#9DE0A94F]/30 px-2 py-0.5 rounded-md font-semibold">
                    {selectedPayout.id}
                  </span>
                  <h3 className="text-lg font-bold text-[#1A2E26] mt-1.5">
                    Payout Record
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPayout(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E5E0D6] flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#1A2E26] text-sm">
                      {selectedPayout.recipient}
                    </h4>
                    <p className="text-xs text-[#7E7F7D]">{selectedPayout.email}</p>
                    <p className="text-xs text-[#7E7F7D]">{selectedPayout.phone}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#064335] block">
                      {selectedPayout.rotationPosition}
                    </span>
                    <span className="text-xs text-[#7E7F7D]">{selectedPayout.group}</span>
                  </div>
                </div>

                {/* Bank Details Card */}
                <div className="p-3.5 rounded-xl border border-[#E5E0D6] bg-white space-y-2">
                  <span className="text-xs font-semibold text-[#1A2E26] flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-[#064335]" />
                    <span>Beneficiary Bank Account</span>
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div>
                      <span className="text-[#7E7F7D] block">Bank Name</span>
                      <span className="font-bold text-[#1A2E26]">{selectedPayout.bankName}</span>
                    </div>
                    <div>
                      <span className="text-[#7E7F7D] block">Account Number</span>
                      <span className="font-mono font-bold text-[#1A2E26]">{selectedPayout.accountNumber}</span>
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-[#F0EBE1] text-xs">
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Gross Pot Collected</span>
                    <span className="font-semibold text-[#1A2E26]">₦{selectedPayout.grossAmount.toLocaleString()}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Platform / Admin Deductions</span>
                    <span className="font-semibold text-green-700">₦0 (0%)</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="font-bold text-[#1A2E26]">Net Amount to Recipient</span>
                    <span className="font-bold text-[#064335] text-sm">₦{selectedPayout.netAmount.toLocaleString()}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Disbursement Reference</span>
                    <span className="font-mono text-[#1A2E26]">{selectedPayout.ref}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#7E7F7D]">Status</span>
                    <span className="font-semibold text-[#1A2E26]">{selectedPayout.status}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-[#F0EBE1]">
                {selectedPayout.status === "Upcoming" && (
                  <button
                    onClick={() => {
                      const item = selectedPayout;
                      setSelectedPayout(null);
                      setDisburseModalItem(item);
                    }}
                    className="px-4 py-2 bg-[#064335] text-white hover:bg-[#085a47] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Proceed to Disburse</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedPayout(null)}
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

