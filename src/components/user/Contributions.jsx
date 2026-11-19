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
import UpcomingContributionsSection from "./contributions/UpcomingContributionsSection";
import ContributionHistorySection from "./contributions/ContributionHistorySection";
import { GoClockFill } from "react-icons/go";

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
      icon: GoClockFill,
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
        <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#063127]">
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
      <UpcomingContributionsSection
        upcomingContributions={upcomingContributions}
        onViewSchedule={() => setView("schedule")}
        onMakeContribution={handleMakeContribution}
      />

      {/* Contribution History Section */}
      <ContributionHistorySection
        selectedGroupFilter={selectedGroupFilter}
        setSelectedGroupFilter={setSelectedGroupFilter}
        selectedStatusFilter={selectedStatusFilter}
        setSelectedStatusFilter={setSelectedStatusFilter}
        selectedDateFilter={selectedDateFilter}
        setSelectedDateFilter={setSelectedDateFilter}
        filteredHistory={filteredHistory}
      />

      {/* Schedule Modal */}
      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </div>
  );
}
