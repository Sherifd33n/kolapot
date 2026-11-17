import React from "react";
import {
  Users,
  Coins,
  ArrowDownLeft,
  ArrowUp,
  CheckCircle2,
  AlertCircle,
  Calendar,
  UserPlus,
  Share2,
  RefreshCw,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { GoDatabase, GoLinkExternal } from "react-icons/go";
import { BsArrowLeftRight } from "react-icons/bs";
import { PiWallet, PiWalletLight } from "react-icons/pi";
import { VscTarget } from "react-icons/vsc";
import { FiAlertOctagon } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { IoPersonAddOutline } from "react-icons/io5";

export default function AdminHomeView({
  onNavigate,
  onSwitchToCreateGroup,
  onSwitchToGroups,
  onSwitchToContributions,
  onSwitchToPayouts,
}) {
  return (
    <div className="space-y-6 animate-tab-content pb-12 max-w-6xl">
      {/* Page Header (Image 3) */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#031B03]">
          Good morning, Amara
        </h2>
        <p className="text-sm sm:text-[18px] text-[#7E7F7D] mt-1 font-normal">
          Here's what's happening across your groups.
        </p>
      </div>

      {/* 4 TOP METRIC CARDS (Image 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Groups */}
        <div className="bg-[#9DE0A94F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs">
          <Users className=" text-[#17AA89]" size={40} />

          <div>
            <span className="text-base font-medium text-[#000000] block">
              Total Groups
            </span>
            <span className="text-2xl font-bold text-[#000000] tracking-tight">
              3
            </span>
          </div>
        </div>

        {/* Card 2: Total Members */}
        <div className="bg-[#EADB544F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs">
          <Users className=" text-[#988A08]" size={40} />
          <div>
            <span className="text-base font-medium text-[#000000] block">
              Total Members
            </span>
            <span className="text-2xl font-bold text-[#000000] tracking-tight">
              36
            </span>
          </div>
        </div>

        {/* Card 3: Total Collected (This Month) */}
        <div className="bg-[#ECD0C24F] rounded-[12px] p-4 sm:p-5 space-y-3 shadow-2xs">
          <GoDatabase className=" text-[#AD4D1A]" size={40} />
          <div>
            <span className="text-xs font-semibold text-[#1A2E26] block leading-tight">
              Total Collected <br className="hidden sm:inline" />
              (This Month)
            </span>
            <span className="text-2xl font-bold text-[#1A2E26] tracking-tight">
              ₦720,000
            </span>
          </div>
        </div>

        {/* Card 4: Upcoming Payouts */}
        <div className="bg-[#ECF7F9] rounded-[12px] p-4 sm:p-5 border space-y-3 shadow-2xs">
          <BsArrowLeftRight className=" text-[#3792C0]" size={35} />
          <div>
            <span className="text-base font-medium text-[#000000] block">
              Upcoming Payouts
            </span>
            <span className="text-2xl font-bold text-[#000000] tracking-tight">
              ₦240,000
            </span>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN DASHBOARD CONTENT (Image 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN: 2 Cards (lg:col-span-2) */}
        <div className="lg:col-span-2 space-y-6">
          {/* CARD 1: Contribution Overview */}
          <div className="bg-white rounded-[12px] p-4 shadow-xs space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Contribution Overview
                </h3>
                <p className="text-xs text-[#7E7F7D]">
                  This Month • All Groups
                </p>
              </div>
              <button
                type="button"
                onClick={onSwitchToContributions}
                className="text-xs font-semibold text-[#064335] hover:text-[#073529] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View Contributions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3 Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-b border-[#F0EBE1] pb-5">
              {/* Collected */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#7FCE3142] text-[#0B6B40] flex items-center justify-center shrink-0">
                  <PiWalletLight className="w-7 h-7 text-[#0B6B40]" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#000000]">
                    ₦720,000
                  </div>
                  <div className="text-[12px] text-[#87898A]">Collected</div>
                </div>
              </div>

              {/* Expected */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#C2CBD042] text-[#7E7F7D] flex items-center justify-center shrink-0">
                  <VscTarget className="w-6 h-6  text-[#0E1011]" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#000000]">
                    ₦900,000
                  </div>
                  <div className="text-xs text-[#7E7F7D]">Expected</div>
                </div>
              </div>

              {/* Outstanding */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#D09A4142] text-[#EA9408] flex items-center justify-center shrink-0">
                  <FiAlertOctagon className="w-6 h-6 text-[#D97706]" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#000000]">
                    ₦180,000
                  </div>
                  <div className="text-xs text-[#7E7F7D]">Outstanding</div>
                </div>
              </div>
            </div>

            {/* Progress by Group */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-[#000000]">
                Progress by Group
              </h4>

              {[1, 2, 3].map((idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-[10px] bg-[#5D130B1F] text-[#5D130B] font-bold text-sm flex items-center justify-center shrink-0">
                        UAC
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#000000]">
                          Sango Ajo Group
                        </div>
                        {idx === 1 && (
                          <div className="text-[11px] text-[#7E7F7D]">
                            ₦640,000 of ₦650,000 collected
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#0B5D4B]">
                      85%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-[#E5E0D6]/60 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-[#0B5D4B] h-4 rounded-full transition-all duration-500"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2: Recent Activity */}
          <div className="bg-white rounded-[12px] p-4 shadow-xs">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-base font-semibold text-[#000000]">
                Recent Activity
              </h3>
              <button
                type="button"
                onClick={onSwitchToContributions}
                className="text-xs font-semibold text-[#0B5D4B] hover:text-[#073529] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="divide-y divide-[#F0EBE1]">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="py-3.5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#17DA1729] text-[#0B6B40] flex items-center justify-center shrink-0">
                      <ArrowUp className="w-4 h-4 text-[#0B5D4B]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#000000]">
                        Adebayo R. made a contribution
                      </h4>
                      <p className="text-xs text-[#9A9D97] font-medium">
                        Sango Ajo Group • 2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B5D4B] shrink-0">
                    ₦60,000
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3 Cards (lg:col-span-1) */}
        <div className="space-y-5">
          {/* Next Contribution Card */}
          <div className="bg-[#fcf4e3] rounded-[12px] p-5 space-y-3.5 shadow-2xs">
            <div className="flex items-center gap-3 text-[#0B5D4B]">
              <Calendar className="w-6 h-6" color="#DA950A" />
              <span className="text-base font-bold text-[#000000]">
                Next Contribution
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-[#000000]">
                Sango Ajo Group
              </h4>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-sm text-[#7E7F7D] mt-1">
                  <span className="text-[#000000] font-bold">₦60,000</span> per
                  member
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#F1DF7E7D] text-[#424441] text-[10px] font-medium rounded-full">
                    Oct 5, 2026
                  </span>
                  <span className="px-2.5 py-1 bg-[#8FF17E7D] text-[#0B5D4B] text-[10px] font-semibold rounded-full">
                    in 3 days
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onSwitchToGroups}
              className="w-full py-3 bg-[#0B5D4B] hover:bg-[#073529] text-white text-xs font-semibold rounded-[5px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-1.5"
            >
              <span>View Details</span>
              <BiRightArrowAlt size={14} />
            </button>
          </div>

          {/* Next Payout Card */}
          <div className="bg-[#fcf4e3] rounded-[12px] p-5 space-y-3.5 shadow-2xs">
            <div className="flex items-center gap-3 text-[#0B5D4B]">
              <Calendar className="w-6 h-6" color="#DA950A" />
              <span className="text-base font-bold text-[#000000]">
                Next Payout
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-[#000000]">
                Sango Ajo Group
              </h4>
              <p className="text-xs text-[#7B8078] my-1">
                Cycle 4 • Payout to member John Doe
              </p>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-[#000000] font-bold text-sm mt-1">
                  ₦260,000
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#F1DF7E7D] text-[#424441] text-[10px] font-medium rounded-full">
                    Oct 5, 2026
                  </span>
                  <span className="px-2.5 py-1 bg-[#8FF17E7D] text-[#0B5D4B] text-[10px] font-semibold rounded-full">
                    in 3 days
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onSwitchToPayouts}
              className="w-full py-3 bg-[#0B5D4B] hover:bg-[#073529] text-white text-xs font-semibold rounded-[5px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-1.5"
            >
              <span>Manage Payout</span>
              <BiRightArrowAlt size={14} />
            </button>
          </div>

          {/* Quick Actions Card */}
          <div className="space-y-2.5 bg-white rounded-[12px] p-3 shadow-2xs">
            <h4 className="text-sm font-bold text-[#000000] px-1 mb-2">
              Quick Actions
            </h4>

            {/* Create Group */}
            <button
              type="button"
              onClick={onSwitchToCreateGroup}
              className="w-full flex items-center justify-center gap-3.5 p-3.5 bg-[#FFF2DC] hover:bg-[#F3ECE0] rounded-[10px] border border-[#E8C099] transition-all cursor-pointer text-left group"
            >
              <IoPersonAddOutline className="w-6 h-6 text-[#0B5D4B]"/>

              <span className="text-xs sm:text-sm font-semibold text-[#000000] group-hover:text-[#0B5D4B] transition-colors">
                Create Group
              </span>
            </button>

            {/* Invite Members */}
            <button
              type="button"
              onClick={onSwitchToGroups}
              className="w-full flex items-center justify-center gap-3.5 p-3.5 bg-[#FFF2DC] hover:bg-[#F3ECE0] rounded-[10px] border border-[#E8C099] transition-all cursor-pointer text-left group"
            >
              <GoLinkExternal className="w-6 h-6 text-[#0B5D4B]" />

              <span className="text-xs sm:text-sm font-semibold text-[#000000] group-hover:text-[#0B5D4B] transition-colors">
                Invite Members
              </span>
            </button>

            {/* Manage Payout */}
            <button
              type="button"
              onClick={onSwitchToPayouts}
              className="w-full flex items-center justify-center gap-3.5 p-3.5 bg-[#FFF2DC] hover:bg-[#F3ECE0] rounded-[10px] border border-[#E8C099] transition-all cursor-pointer text-left group"
            >
              <BsArrowLeftRight className="w-6 h-6 text-[#0B5D4B]" />

              <span className="text-xs sm:text-sm font-semibold text-[#000000] group-hover:text-[#0B5D4B] transition-colors">
                Manage Payout
              </span>
            </button>

            {/* View Contributions */}
            <button
              type="button"
              onClick={onSwitchToContributions}
              className="w-full flex items-center justify-center gap-3.5 p-3.5 bg-[#FFF2DC] hover:bg-[#F3ECE0] rounded-[10px] border border-[#E8C099] transition-all cursor-pointer text-left group"
            >
              <PiWallet className="w-6 h-6 text-[#0B5D4B]" />

              <span className="text-xs sm:text-sm font-semibold text-[#000000] group-hover:text-[#0B5D4B] transition-colors">
                View Contributions
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
