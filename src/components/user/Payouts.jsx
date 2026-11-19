import React, { useState } from "react";
import { FaCalendar, FaClock, FaWallet } from "react-icons/fa";
import { IoBriefcaseSharp } from "react-icons/io5";
import AddBankModal from "./payouts/AddBankModal";
import VerifyBankModal from "./payouts/VerifyBankModal";
import PayoutDestinationCard from "./payouts/PayoutDestinationCard";
import PayoutScheduleSection from "./payouts/PayoutScheduleSection";
import PayoutHistorySection from "./payouts/PayoutHistorySection";

export default function Payouts({ onNavigate }) {
  // Modal state: null | "add" | "verify"
  const [modalState, setModalState] = useState(null);

  // Bank form state
  const [selectedBank, setSelectedBank] = useState("Guaranty Trust Bank (GTBank)");
  const [accountNumber, setAccountNumber] = useState("0123456789");
  const [accountName] = useState("Amara Johnson");

  // Verified bank account currently saved in Payout Destination
  const [payoutDestination, setPayoutDestination] = useState({
    bankName: "Guaranty Trust Bank (GTBank)",
    accountNumber: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4821",
    fullAccountNumber: "0123456789",
    accountName: "Amara Johnson",
    isSet: true,
  });

  // Filters for Schedule
  const [scheduleGroupFilter, setScheduleGroupFilter] = useState("All Groups");
  const [scheduleStatusFilter, setScheduleStatusFilter] = useState("All Statuses");
  const [scheduleDateFilter, setScheduleDateFilter] = useState("This Month");

  // Filters for History
  const [historyGroupFilter, setHistoryGroupFilter] = useState("All Groups");
  const [historyStatusFilter, setHistoryStatusFilter] = useState("All Statuses");
  const [historyDateFilter, setHistoryDateFilter] = useState("This Month");

  // Top summary metric cards
  const statCards = [
    { title: "Upcoming Payout", amount: "\u20a6500,000", subtext: "30 Oct 2026", icon: FaCalendar },
    { title: "Payouts Received", amount: "3", subtext: "Across your groups", icon: FaWallet },
    { title: "Payouts Remaining", amount: "2", subtext: "Across active groups", icon: FaClock },
    { title: "Total Received", amount: "\u20a6950,000", subtext: "Completed payouts", icon: IoBriefcaseSharp },
  ];

  // Schedule items
  const scheduleItems = [
    { id: 1, group: "Dream Builders", cycle: "4 of 26", position: "4th", amount: "\u20a6500,000", rawAmount: 500000, expectedDate: "18 Oct 2026", relativeTime: "(in 2 days)", status: "Scheduled", statusStyle: "bg-[#FEF3C7] text-[#92400E]" },
    { id: 2, group: "Dream Builders", cycle: "4 of 26", position: "4th", amount: "\u20a6500,000", rawAmount: 500000, expectedDate: "18 Oct 2026", relativeTime: "(in 2 days)", status: "Processing", statusStyle: "bg-[#EEF2FF] text-[#4338CA]" },
  ];

  // History items
  const historyItems = [
    { id: 1, group: "Dream Builders", cycle: "4 of 26", position: "4th", amount: "\u20a6500,000", deductions: "\u20a65,000", received: "\u20a6495,000", date: "18 Sep 2026", status: "Completed", statusStyle: "bg-[#EAF7EE] text-[#16A34A]" },
    { id: 2, group: "Dream Builders", cycle: "4 of 26", position: "4th", amount: "\u20a6500,000", deductions: "\u20a65,000", received: "\u20a6495,000", date: "18 Sep 2026", status: "Completed", statusStyle: "bg-[#EAF7EE] text-[#16A34A]" },
    { id: 3, group: "Dream Builders", cycle: "4 of 26", position: "4th", amount: "\u20a6500,000", deductions: "\u20a65,000", received: "\u20a6495,000", date: "18 Sep 2026", status: "Completed", statusStyle: "bg-[#EAF7EE] text-[#16A34A]" },
  ];

  const filteredSchedule = scheduleItems.filter((item) => {
    if (scheduleGroupFilter !== "All Groups" && item.group !== scheduleGroupFilter) return false;
    if (scheduleStatusFilter !== "All Statuses" && item.status !== scheduleStatusFilter) return false;
    return true;
  });

  const filteredHistory = historyItems.filter((item) => {
    if (historyGroupFilter !== "All Groups" && item.group !== historyGroupFilter) return false;
    if (historyStatusFilter !== "All Statuses" && item.status !== historyStatusFilter) return false;
    return true;
  });

  const handleVerifyAccount = (e) => {
    e.preventDefault();
    if (!accountNumber || accountNumber.length < 10) {
      alert("Please enter a valid 10-digit Nigerian account number.");
      return;
    }
    setModalState("verify");
  };

  const handleConfirmAndSave = () => {
    const masked = accountNumber.length >= 4 ? `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${accountNumber.slice(-4)}` : "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4821";
    setPayoutDestination({
      bankName: selectedBank,
      accountNumber: masked,
      fullAccountNumber: accountNumber,
      accountName: accountName,
      isSet: true,
    });
    setModalState(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Title & Subtitle */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#063127]">
          My Payouts
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          See when you'll receive your savings and track your payout status.
        </p>
      </div>

      {/* 4 Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className="bg-white rounded-md p-4 sm:p-5 shadow-xs border border-[#F3EFEA] space-y-3 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0B5D4B26] text-[#064335] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#03271F]">{card.title}</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#000000] block leading-tight">{card.amount}</span>
                <span className="text-xs text-[#7B7D7A] block mt-1">{card.subtext}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Row (Upcoming Payout & Payout Destination) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Card: Upcoming Payout */}
        <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#000000]">Upcoming Payout</h3>
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-md bg-[#DBDEE0] text-[#374151] font-bold text-xl flex items-center justify-center shrink-0 tracking-wider">
                DB
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#000000]">Dream Builders</span>
                  <span className="bg-[#EAF7EE] text-[#16A34A] text-[11px] font-semibold px-2.5 py-0.5 rounded-full">Ajo</span>
                </div>
                <span className="text-xs text-[#7E7F7D] block mt-0.5 font-medium">Cycle 4 of 12 &bull; 4th in line</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#F3EFEA] pt-4 grid grid-cols-3 gap-2 items-start">
            <div>
              <span className="text-[11px] sm:text-xs text-[#7E7F7D] block font-medium">Payout amount</span>
              <span className="text-base sm:text-lg font-bold text-[#111827] block mt-0.5">500,000</span>
            </div>
            <div>
              <span className="text-[11px] sm:text-xs text-[#7E7F7D] block font-medium">Expected date</span>
              <span className="text-xs sm:text-sm font-bold text-[#111827] block mt-0.5">30 Oct 2026</span>
              <span className="text-[11px] text-[#7E7F7D] block font-medium">in 12 days</span>
            </div>
            <div className="text-right sm:text-left">
              <span className="text-[11px] sm:text-xs text-[#7E7F7D] block font-medium">Status</span>
              <span className="inline-block bg-[#FEF3C7] text-[#92400E] text-xs font-semibold px-3 py-1 rounded-md mt-1">Scheduled</span>
            </div>
          </div>
        </div>

        {/* Right Card: Payout Destination */}
        <PayoutDestinationCard
          payoutDestination={payoutDestination}
          onChangeAccount={() => setModalState("add")}
        />
      </div>

      {/* Payout Schedule Section */}
      <PayoutScheduleSection
        filteredSchedule={filteredSchedule}
        scheduleGroupFilter={scheduleGroupFilter}
        setScheduleGroupFilter={setScheduleGroupFilter}
        scheduleStatusFilter={scheduleStatusFilter}
        setScheduleStatusFilter={setScheduleStatusFilter}
        scheduleDateFilter={scheduleDateFilter}
        setScheduleDateFilter={setScheduleDateFilter}
      />

      {/* Payout History Section */}
      <PayoutHistorySection
        filteredHistory={filteredHistory}
        historyGroupFilter={historyGroupFilter}
        setHistoryGroupFilter={setHistoryGroupFilter}
        historyStatusFilter={historyStatusFilter}
        setHistoryStatusFilter={setHistoryStatusFilter}
        historyDateFilter={historyDateFilter}
        setHistoryDateFilter={setHistoryDateFilter}
      />

      {/* Add Bank Account Modal */}
      {modalState === "add" && typeof document !== "undefined" && (
        <AddBankModal
          selectedBank={selectedBank}
          setSelectedBank={setSelectedBank}
          accountNumber={accountNumber}
          setAccountNumber={setAccountNumber}
          onClose={() => setModalState(null)}
          onVerify={handleVerifyAccount}
        />
      )}

      {/* Verify Bank Account Modal */}
      {modalState === "verify" && typeof document !== "undefined" && (
        <VerifyBankModal
          selectedBank={selectedBank}
          accountNumber={accountNumber}
          accountName={accountName}
          onClose={() => setModalState("add")}
          onConfirm={handleConfirmAndSave}
        />
      )}
    </div>
  );
}
