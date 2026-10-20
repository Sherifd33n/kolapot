import React, { useState } from "react";
import {
  Calendar,
  CreditCard,
  Wallet,
  Clock,
  ChevronDown,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { FaWallet } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { WiTime4 } from "react-icons/wi";
import MakeContributionView from "./contributions/MakeContributionView";
import PayWithCardView from "./contributions/PayWithCardView";
import BankTransferView from "./contributions/BankTransferView";
import ContributionScheduleView from "./contributions/ContributionScheduleView";
import ScheduleModal from "./contributions/ScheduleModal";

export default function Contributions({ onNavigate }) {
  const [view, setView] = useState("list"); // "list" | "make-contribution" | "bank-transfer" | "pay-with-card" | "schedule"
  const [selectedGroupFilter, setSelectedGroupFilter] = useState("All Groups");
  const [selectedStatusFilter, setSelectedStatusFilter] =
    useState("All Statuses");
  const [selectedDateFilter, setSelectedDateFilter] = useState("This Month");
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [activePaymentGroup, setActivePaymentGroup] = useState(null);

  // Schedule view filters
  const [scheduleGroupFilter, setScheduleGroupFilter] = useState("All Groups");
  const [scheduleStatusFilter, setScheduleStatusFilter] =
    useState("All Statuses");
  const [scheduleDateFilter, setScheduleDateFilter] = useState("This Month");

  // Payment method state for Make Contribution view
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const [contributionAmount, setContributionAmount] = useState("50,000");
  const [copiedField, setCopiedField] = useState(null);

  // Card payment form state
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleCopy = (text, field) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Top metric summary cards
  const summaryCards = [
    {
      title: "Total Contributions",
      amount: "₦450,000",
      subtext: "Across all groups",
      icon: FaWallet,
    },
    {
      title: "Upcoming Contribution",
      amount: "₦50,000",
      subtext: "Due on 18 October 2026",
      icon: IoCalendarClear,
    },
    {
      title: "Pending Contributions",
      amount: "₦50,000",
      subtext: "1 payment",
      icon: WiTime4,
    },
  ];

  // Schedule table data
  const scheduleData = [
    {
      id: 1,
      groupName: "Dream Builders",
      badge: "Ajo",
      initial: "DB",
      description: "Your contribution for the next cycle.",
      amount: "₦50,000",
      rawAmount: "50,000",
      dueDate: "18 Oct 2026",
      dueDaysText: "(in 2 days)",
      cycle: "10 of 26",
      status: "Due Soon",
    },
    {
      id: 2,
      groupName: "Dream Builders",
      badge: "Ajo",
      initial: "DB",
      description: "Your contribution for the next cycle.",
      amount: "₦50,000",
      rawAmount: "50,000",
      dueDate: "18 Oct 2026",
      dueDaysText: "(in 2 days)",
      cycle: "10 of 26",
      status: "Upcoming",
    },
    {
      id: 3,
      groupName: "Dream Builders",
      badge: "Ajo",
      initial: "DB",
      description: "Your contribution for the next cycle.",
      amount: "₦50,000",
      rawAmount: "50,000",
      dueDate: "18 Oct 2026",
      dueDaysText: "(in 2 days)",
      cycle: "10 of 26",
      status: "Overdue",
    },
    {
      id: 4,
      groupName: "Dream Builders",
      badge: "Ajo",
      initial: "DB",
      description: "Your contribution for the next cycle.",
      amount: "₦50,000",
      rawAmount: "50,000",
      dueDate: "18 Oct 2026",
      dueDaysText: "(in 2 days)",
      cycle: "10 of 26",
      status: "Due Soon",
    },
  ];

  // Upcoming contributions data
  const upcomingContributions = [
    {
      id: 1,
      groupName: "Dream Builders",
      badge: "Ajo",
      initial: "DB",
      description: "Your contribution for the next cycle.",
      amount: "₦50,000",
      rawAmount: "50,000",
      dueDate: "18 October 2026",
      dueDateShort: "18 Oct 2026",
      dueDaysText: "in 5 days",
      cycle: "10 of 26",
    },
    {
      id: 2,
      groupName: "Dream Builders",
      badge: "Ajo",
      initial: "DB",
      description: "Your contribution for the next cycle.",
      amount: "₦50,000",
      rawAmount: "50,000",
      dueDate: "18 October 2026",
      dueDateShort: "18 Oct 2026",
      dueDaysText: "in 5 days",
      cycle: "10 of 26",
    },
  ];

  // History table data
  const historyData = [
    {
      id: 1,
      date: "11 Oct 2026",
      group: "Dream Builders",
      cycle: "9 of 26",
      amount: "₦50,000",
      method: "Wallet Balance",
      status: "Paid",
      ref: "PPD123456",
    },
    {
      id: 2,
      date: "11 Oct 2026",
      group: "Dream Builders",
      cycle: "9 of 26",
      amount: "₦50,000",
      method: "Wallet Balance",
      status: "Pending",
      ref: "PPD123456",
    },
    {
      id: 3,
      date: "11 Oct 2026",
      group: "Dream Builders",
      cycle: "9 of 26",
      amount: "₦50,000",
      method: "Wallet Balance",
      status: "Failed",
      ref: "PPD123456",
    },
    {
      id: 4,
      date: "11 Oct 2026",
      group: "Dream Builders",
      cycle: "9 of 26",
      amount: "₦50,000",
      method: "Wallet Balance",
      status: "Paid",
      ref: "PPD123456",
    },
  ];

  const filteredHistory = historyData.filter((item) => {
    if (
      selectedStatusFilter !== "All Statuses" &&
      item.status !== selectedStatusFilter
    )
      return false;
    if (
      selectedGroupFilter !== "All Groups" &&
      item.group !== selectedGroupFilter
    )
      return false;
    return true;
  });

  const handleMakeContribution = (group) => {
    setActivePaymentGroup(group);
    setPaymentMethod("wallet");
    setContributionAmount(group.rawAmount);
    setView("make-contribution");
  };


  // ==================== MAKE CONTRIBUTION VIEW ====================
  if (view === "make-contribution" && activePaymentGroup) {
    return (
      <MakeContributionView
        group={activePaymentGroup}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        contributionAmount={contributionAmount}
        setContributionAmount={setContributionAmount}
        onBack={() => setView("list")}
        onSubmit={() => {
          if (paymentMethod === "card") {
            setView("pay-with-card");
          } else if (paymentMethod === "bank") {
            setView("bank-transfer");
          } else {
            setView("list");
          }
        }}
      />
    );
  }

  // ==================== PAY WITH CARD VIEW ====================
  if (view === "pay-with-card") {
    const g = activePaymentGroup || upcomingContributions[0];
    return (
      <PayWithCardView
        group={g}
        contributionAmount={contributionAmount}
        cardData={cardData}
        setCardData={setCardData}
        isProcessingPayment={isProcessingPayment}
        onBack={() => setView("make-contribution")}
        onSubmit={(e) => {
          e.preventDefault();
          setIsProcessingPayment(true);
          setTimeout(() => {
            setIsProcessingPayment(false);
            setView("list");
          }, 1500);
        }}
      />
    );
  }

  // ==================== BANK TRANSFER VIEW ====================
  if (view === "bank-transfer") {
    const g = activePaymentGroup || upcomingContributions[0];
    return (
      <BankTransferView
        group={g}
        contributionAmount={contributionAmount}
        copiedField={copiedField}
        handleCopy={handleCopy}
        onBack={() => setView("make-contribution")}
        onComplete={() => setView("list")}
        onCancel={() => setView("make-contribution")}
      />
    );
  }

  // ==================== CONTRIBUTION SCHEDULE VIEW ====================
  if (view === "schedule") {
    return (
      <ContributionScheduleView
        scheduleData={scheduleData}
        scheduleGroupFilter={scheduleGroupFilter}
        setScheduleGroupFilter={setScheduleGroupFilter}
        scheduleStatusFilter={scheduleStatusFilter}
        setScheduleStatusFilter={setScheduleStatusFilter}
        scheduleDateFilter={scheduleDateFilter}
        setScheduleDateFilter={setScheduleDateFilter}
        onBack={() => setView("list")}
        onMakeContribution={handleMakeContribution}
      />
    );
  }

  // ==================== LIST VIEW ====================
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['Inria Serif',serif] font-normal text-[#063127]">
          My Contributions
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          Keep track of payments due, contributions made, and your payment
          history.
        </p>
      </div>

      {/* Top 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-md p-4 sm:p-5 shadow-xs border border-[#F0EDE6] space-y-2.5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#0B5D4B26] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#064335]" />
                </div>
                <span className="text-xs font-semibold text-[#6B7280]">
                  {card.title}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#111827] leading-tight">
                {card.amount}
              </div>
              <p className="text-xs text-[#9CA3AF] font-normal">
                {card.subtext}
              </p>
            </div>
          );
        })}
      </div>

      {/* Upcoming Contribution Section */}
      <div className="space-y-3.5 p-4 bg-white rounded-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#111827]">
              Upcoming Contribution
            </h3>
            <p className="text-xs text-[#8798A6] mt-0.5 font-normal">
              Your next contribution across all groups.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setView("schedule")}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B] hover:text-white rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.99]"
          >
            <Calendar className="w-4 h-4 stroke-[2]" />
            <span>View Schedule</span>
          </button>
        </div>

        {/* Upcoming Cards */}
        <div className="space-y-3">
          {upcomingContributions.map((item) => (
            <div
              key={item.id}
              className="bg-[#0C6B1414] border border-[#E0EFE6] rounded-md p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-all hover:border-[#0B5D4B]/40"
            >
              {/* Left group info */}
              <div className="flex items-center gap-3.5">
                <div className="w-16 h-16 rounded-full bg-[#DBDEE0] text-[#000000] font-bold text-2xl flex items-center justify-center shrink-0 select-none">
                  {item.initial}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-[#000000]">
                      {item.groupName}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#D4F1E4] text-[#0B5D4B]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#8798A6] mt-0.5 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Middle Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-8 items-start border-t border-[#E0EFE6] lg:border-t-0 pt-3 lg:pt-0">
                <div className="min-w-0">
                  <span className="text-[11px] text-[#8798A6] font-medium block">
                    Amount
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#111827] block mt-0.5 truncate">
                    {item.amount}
                  </span>
                </div>

                <div className="min-w-0">
                  <span className="text-[11px] text-[#8798A6] font-medium block">
                    Due Date
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#111827] block mt-0.5 truncate">
                    {item.dueDate}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#8798A6] block truncate">
                    {item.dueDaysText}
                  </span>
                </div>

                <div className="min-w-0">
                  <span className="text-[11px] text-[#8798A6] font-medium block">
                    Cycle
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#111827] block mt-0.5 truncate">
                    {item.cycle}
                  </span>
                </div>
              </div>

              {/* Right CTA */}
              <div className="flex justify-start sm:justify-end lg:justify-center">
                <button
                  type="button"
                  onClick={() => handleMakeContribution(item)}
                  className="px-6 py-2.5 bg-[#073529] hover:bg-[#0B4032] text-white rounded-md text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.98] whitespace-nowrap"
                >
                  Make Contribution
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution History Section */}
      <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F0EDE6] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#111827]">
              Contribution History
            </h3>
            <p className="text-xs text-[#8798A6] mt-0.5 font-normal">
              A record of all your contributions across your groups.
            </p>
          </div>

          {/* 3 Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <select
                value={selectedGroupFilter}
                onChange={(e) => setSelectedGroupFilter(e.target.value)}
                className="appearance-none bg-white border border-[#E5E0D6] rounded-md pl-3 pr-10 py-2.5 text-xs text-[#374151] font-medium cursor-pointer focus:outline-none focus:border-[#0B5D4B]"
              >
                <option value="All Groups">All Groups</option>
                <option value="Dream Builders">Dream Builders</option>
                <option value="Unity Ajo Circle">Unity Ajo Circle</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                className="appearance-none bg-white border border-[#E5E0D6] rounded-md pl-3 pr-10 py-2.5 text-xs text-[#374151] font-medium cursor-pointer focus:outline-none focus:border-[#0B5D4B]"
              >
                <option value="All Statuses">All Statuses</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={selectedDateFilter}
                onChange={(e) => setSelectedDateFilter(e.target.value)}
                className="appearance-none bg-white border border-[#E5E0D6] rounded-md pl-3 pr-10 py-2.5 text-xs text-[#374151] font-medium cursor-pointer focus:outline-none focus:border-[#0B5D4B]"
              >
                <option value="This Month">This Month</option>
                <option value="Last Month">Last Month</option>
                <option value="All Time">All Time</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto border border-[#DCDEDB] rounded-t-[8px]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#DCDEDB] text-[#6B7280] text-xs font-semibold">
                <th className="py-5 px-4 rounded-tl-md">Date</th>
                <th className="py-5 px-4">Group</th>
                <th className="py-5 px-4">Cycle</th>
                <th className="py-5 px-4">Amount</th>
                <th className="py-5 px-4">Payment Method</th>
                <th className="py-5 px-4">Status</th>
                <th className="py-5 px-4 rounded-tr-md">Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EDE6] text-xs sm:text-sm">
              {filteredHistory.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#FAF9F6]/60 transition-colors"
                >
                  <td className="py-3.5 px-4 text-[#374151] font-normal">
                    {row.date}
                  </td>
                  <td className="py-3.5 px-4 text-[#111827] font-semibold">
                    {row.group}
                  </td>
                  <td className="py-3.5 px-4 text-[#6B7280] font-normal">
                    {row.cycle}
                  </td>
                  <td className="py-3.5 px-4 text-[#111827] font-bold">
                    {row.amount}
                  </td>
                  <td className="py-3.5 px-4 text-[#4B5563] font-normal">
                    {row.method}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${
                        row.status === "Paid"
                          ? "bg-[#EAF7EE] text-[#1CB726]"
                          : row.status === "Pending"
                            ? "bg-[#FEF6E6] text-[#D97706]"
                            : "bg-[#FEECEC] text-[#DC2626]"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-[#6B7280] font-normal">
                    {row.ref}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule Modal */}
      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </div>
  );
}
