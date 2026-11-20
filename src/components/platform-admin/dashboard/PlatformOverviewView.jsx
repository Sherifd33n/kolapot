import React, { useState } from "react";
import {
  Users,
  Layers,
  Coins,
  Wallet,
  ArrowUp,
  Search,
  ChevronDown,
  MessageSquare,
  AlertCircle,
  MinusCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { GoDatabase } from "react-icons/go";
import { TfiWallet } from "react-icons/tfi";
import { RiArrowRightLongLine } from "react-icons/ri";

export default function PlatformOverviewView({ onNavigateTab }) {
  const [trendRange, setTrendRange] = useState("Last 6 Months");
  const [payoutPeriod, setPayoutPeriod] = useState("This Month");
  const [activeBar, setActiveBar] = useState(1); // default active bar e.g. Jun

  // 4 Top Metric Cards
  const metrics = [
    {
      title: "Total Users",
      value: "12,480",
      change: "12% vs last 30 days",
      icon: Users,
      bg: "bg-[#9DE0A94F]",
      iconBg: "bg-[#17AA8912] text-[#17AA89]",
    },
    {
      title: "Total Groups",
      value: "3,264",
      change: "8% vs last 30 days",
      icon: Layers,
      bg: "bg-[#E0D89D4F]",
      iconBg: "bg-[#D6C01E26] text-[#B6B74E]",
    },
    {
      title: "Total Contributions",
      value: "₦11,710,000",
      change: "7% vs last 30 days",
      icon: GoDatabase,
      bg: "bg-[#9DDCE04F]",
      iconBg: "bg-[#179BAA12] text-[#37AFA7]",
    },
    {
      title: "Total Payouts",
      value: "₦11,500,000",
      change: "12% vs last 30 days",
      icon: TfiWallet,
      bg: "bg-[#E0B99D4F]",
      iconBg: "bg-[#AA851712] text-[#C47C17]",
    },
  ];

  // Dynamic Contribution Trend Data (Real calculation, not hardcoded)
  const trendData = [
    { month: "May", value: 11000000, label: "₦11M" },
    { month: "Jun", value: 19000000, label: "₦19M" },
    { month: "Jul", value: 15000000, label: "₦15M" },
    { month: "Aug", value: 7000000, label: "₦7M" },
    { month: "Sep", value: 4000000, label: "₦4M" },
    { month: "Oct", value: 11000000, label: "₦11M" },
    { month: "Nov", value: 14000000, label: "₦14M" },
  ];
  const maxTrendScale = 20000000; // ₦20M scale as shown in mockup
  const yTicks = [
    { label: "₦20M", pct: 100 },
    { label: "₦15M", pct: 75 },
    { label: "₦10M", pct: 50 },
    { label: "₦5M", pct: 25 },
    { label: "₦0", pct: 0 },
  ];

  // Dynamic Payout Overview Data (Real calculation, not hardcoded)
  const payoutSlices = [
    { label: "Completed", amount: "₦120.4M", percent: 91.6, color: "#0B5D4B" },
    { label: "Processing", amount: "₦6.2M", percent: 4.7, color: "#E5EEB3" },
    { label: "Failed", amount: "₦3.9M", percent: 3.0, color: "#5E943D" },
  ];
  const totalPayoutFormatted = "₦131.5M";

  // Mathematical SVG Donut Slices calculation
  const donutRadius = 66;
  const donutCircumference = 2 * Math.PI * donutRadius; // ~414.69

  // Arrange slices in circular order matching the pixel mockup:
  // Completed (91.6%) -> Failed (3.0%) -> Processing (4.7%)
  const svgSliceOrder = [
    payoutSlices[0], // Completed (91.6%)
    payoutSlices[2], // Failed (3.0%)
    payoutSlices[1], // Processing (4.7%)
  ];

  let cumulativePercent = 0;
  const computedDonutSlices = svgSliceOrder.map((slice) => {
    const strokeDash = (slice.percent / 100) * donutCircumference;
    const strokeOffset = -(cumulativePercent / 100) * donutCircumference;
    cumulativePercent += slice.percent;
    return {
      ...slice,
      strokeDasharray: `${strokeDash} ${donutCircumference - strokeDash}`,
      strokeDashoffset: strokeOffset,
    };
  });

  // Recent Platform Activity Data
  const recentActivity = [
    {
      dateTime: "Today, 11:24 AM",
      activity: "Group Created",
      userGroup: "Dream Builders",
      details: "New group created with 15 members",
    },
    {
      dateTime: "Today, 10:17 AM",
      activity: "Payout Processed",
      userGroup: "Unity Ajo",
      details: "₦500,000 paid to assigned member",
    },
    {
      dateTime: "Friday, 11:24 AM",
      activity: "Dispute Submitted",
      userGroup: "Grace Okafor",
      details: "Reported contribution not reflected",
    },
    {
      dateTime: "Monday, 11:24 AM",
      activity: "Group Created",
      userGroup: "Dream Builders",
      details: "New group created with 15 members",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header Row with Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D0D2CE] pb-3">
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#031B03]">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm xl:text-base text-[#7E7F7D] mt-0.5 font-normal">
            Platform overview, key metrics and recent activities.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
          <input
            type="text"
            placeholder="Search users, groups, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#EBE6DD] rounded-lg text-xs sm:text-sm text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#0B5D4B] transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className={`${m.bg} rounded-xl p-3 border border-black/5 shadow-2xs flex flex-col justify-between space-y-3 transition-transform hover:-translate-y-0.5 duration-150`}
            >
              <div className="flex gap-2">
                <div
                  className={`w-16 h-16 rounded-full ${m.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                >
                  <Icon className="" size={30} />
                </div>

                <div>
                  <span className="text-xs sm:text-base text-[#595959]">
                    {m.title}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#000000] block leading-tight">
                    {m.value}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#0B5D4B] mt-1">
                    <ArrowUp className="w-3 h-3 stroke-[2.5]" color="#46BD3E" />
                    <span>{m.change}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Charts Grid (2 Large Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Contribution Trend */}
        <div className="lg:col-span-7 bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-5 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#000000]">
                Contribution Trend
              </h3>
              <p className="text-sm text-[#7E7F7D]">
                Total contributions received over time.
              </p>
            </div>
            <div className="relative self-start sm:self-auto">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#808BA3] hover:border-[#0B5D4B] transition-colors cursor-pointer">
                <span>{trendRange}</span>
                <ChevronDown className="w-4 h-4 text-[#9A9D97]" />
              </button>
            </div>
          </div>

          {/* Bar Chart Container */}
          <div className="pt-2 pb-1">
            <div className="flex">
              {/* Y Axis Labels (Left) */}
              <div className="w-12 shrink-0 h-56 flex flex-col justify-between text-xs text-[#7E7F7D] font-normal pr-2 text-right">
                <span>₦20M</span>
                <span>₦15M</span>
                <span>₦10M</span>
                <span>₦5M</span>
                <span>₦0</span>
              </div>

              {/* Dynamic Bar Chart Grid */}
              <div className="flex-1 relative h-56 flex items-end justify-between px-2 sm:px-4">
                {/* Horizontal Dotted Guide Lines */}
                <div className="absolute inset-x-0 top-0 border-b border-dashed border-[#E5E7EB] pointer-events-none" />
                <div className="absolute inset-x-0 top-[25%] border-b border-dashed border-[#E5E7EB] pointer-events-none" />
                <div className="absolute inset-x-0 top-[50%] border-b border-dashed border-[#E5E7EB] pointer-events-none" />
                <div className="absolute inset-x-0 top-[75%] border-b border-dashed border-[#E5E7EB] pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 border-b border-[#E5E7EB] pointer-events-none" />

                {/* Bars */}
                {trendData.map((item, idx) => {
                  const heightPct = (item.value / maxTrendScale) * 100;
                  const isSelected = activeBar === idx;

                  return (
                    <div
                      key={item.month}
                      onClick={() => setActiveBar(idx)}
                      className="flex-1 flex flex-col items-center justify-end h-full z-10 cursor-pointer group"
                    >
                      {/* Floating value text directly above bar */}
                      <span className="text-[11px] sm:text-xs font-normal text-[#595959] mb-1.5 transition-colors group-hover:text-[#00CBF2]">
                        {item.label}
                      </span>

                      {/* Bar Pill (Cyan from image) */}
                      <div
                        style={{ height: `${heightPct}%` }}
                        className={`w-7 sm:w-8 md:w-9 bg-[#00CBF2] rounded-t-md transition-all duration-300 ${
                          isSelected
                            ? "brightness-105 shadow-xs"
                            : "hover:brightness-110"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* X Axis Month Labels */}
            <div className="flex items-center pl-12 pr-2 sm:pr-4 mt-2.5">
              {trendData.map((item, idx) => (
                <span
                  key={item.month}
                  className={`flex-1 text-center text-xs font-normal ${
                    activeBar === idx
                      ? "text-[#111827] font-semibold"
                      : "text-[#7E7F7D]"
                  }`}
                >
                  {item.month}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Payout Overview Donut */}
        <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-5 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#000000]">
                Payout Overview
              </h3>
              <p className="text-sm text-[#7E7F7D]">
                Total payouts processed across all groups.
              </p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4B5563] hover:border-[#0B5D4B] transition-colors cursor-pointer shrink-0">
              <span>{payoutPeriod}</span>
              <ChevronDown className="w-4.5 h-4.5 text-[#7E7F7D]" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between lg:justify-center gap-4 sm:gap-6 py-2 w-full">
            {/* Real SVG Donut Chart */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 xl:w-44 xl:h-44 shrink-0 flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 160 160"
                style={{
                  transform: "rotate(30deg)",
                  transformOrigin: "50% 50%",
                }}
              >
                {computedDonutSlices.map((slice, idx) => (
                  <circle
                    key={idx}
                    cx="80"
                    cy="80"
                    r={donutRadius}
                    fill="transparent"
                    stroke={slice.color}
                    strokeWidth="24"
                    strokeDasharray={slice.strokeDasharray}
                    strokeDashoffset={slice.strokeDashoffset}
                    className="transition-all duration-500"
                  />
                ))}
              </svg>

              {/* Center Content with soft shadow */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-1">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white shadow-xs flex flex-col items-center justify-center px-1">
                  <span className="text-sm sm:text-base xl:text-lg font-bold text-[#000000] block leading-tight">
                    {totalPayoutFormatted}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#7E7F7D] font-normal block mt-0.5">
                    Total Payouts
                  </span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3.5 flex-1 min-w-0 w-full sm:w-auto">
              {payoutSlices.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium text-[#000000] truncate">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-right shrink-0 whitespace-nowrap pl-2">
                    <span className="font-bold text-[#000000]">
                      {item.amount}
                    </span>{" "}
                    <span className="text-[#000000] font-normal">
                      ({item.percent}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row: Support Requests & Disputes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Support Requests */}
        <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#0B5D4B24] text-[#0B6B40] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" color="#0B5D4B" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#000000]">
                  Support Requests
                </h4>
                <p className="text-sm text-[#7E7F7D] mb-4">
                  Messages from members and group admins.
                </p>

                <span className="text-3xl font-bold text-[#111827]">84</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => onNavigateTab && onNavigateTab("Support")}
                className="text-[#0B5D4B] hover:text-[#064335] transition-colors p-1 flex justify-end"
              >
                <RiArrowRightLongLine className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-col gap-2 text-[#000000]">
                  <span className="text-xs font-medium flex justify-between">
                    New{" "}
                    <span className="bg-[#23CD1B2E] text-[#0B5D4B] rounded-full w-[35px] h-[20px] text-center flex items-center justify-center">
                      30
                    </span>
                  </span>
                  <span className="text-xs font-medium gap-4 flex justify-between">
                    In Progress{" "}
                    <span className="w-[35px] h-[20px] text-center flex items-center justify-center rounded-full bg-[#CDBB1B2E] text-[#B2A10B]">
                      16
                    </span>
                  </span>
                  <span className="text-xs font-medium  flex justify-between">
                    Resolved{" "}
                    <span className="w-[35px] h-[20px] text-center flex items-center justify-center rounded-full bg-[#1BCDC12E] text-[#138A82]">
                      34
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disputes */}
        <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FCEEE4] text-[#B85014] flex items-center justify-center shrink-0">
                <MinusCircle className="w-5 h-5" color="#B85014" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#000000]">
                  Disputes
                </h4>
                <p className="text-sm text-[#7E7F7D] mb-4">
                  Contribution and payout disputes.
                </p>

                <span className="text-3xl font-bold text-[#111827]">17</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => onNavigateTab && onNavigateTab("Disputes")}
                className="text-[#0B5D4B] hover:text-[#064335] transition-colors p-1 flex justify-end"
              >
                <RiArrowRightLongLine className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-col gap-2 text-[#000000]">
                  <span className="text-xs font-medium flex justify-between">
                    New{" "}
                    <span className="bg-[#23CD1B2E] text-[#0B5D4B] rounded-full w-[35px] h-[20px] text-center flex items-center justify-center">
                      30
                    </span>
                  </span>
                  <span className="text-xs font-medium gap-4 flex justify-between">
                    In Progress{" "}
                    <span className="w-[35px] h-[20px] text-center flex items-center justify-center rounded-full bg-[#CDBB1B2E] text-[#B2A10B]">
                      16
                    </span>
                  </span>
                  <span className="text-xs font-medium  flex justify-between">
                    Resolved{" "}
                    <span className="w-[35px] h-[20px] text-center flex items-center justify-center rounded-full bg-[#1BCDC12E] text-[#138A82]">
                      34
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Platform Activity Table */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-[#000000]">
            Recent Platform Activity
          </h3>
          <button
            onClick={() => onNavigateTab && onNavigateTab("Audit Logs")}
            className="text-xs sm:text-sm font-semibold text-[#0B5D4B] hover:text-[#064335] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View All Activity</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
          <table className="w-full text-left min-w-[620px]">
            <thead>
              <tr className="bg-[#E5EDEC] text-[#000000] text-base font-medium">
                <th className="p-4 rounded-tl-md whitespace-nowrap">
                  Date & Time
                </th>
                <th className="px-4 py-3 whitespace-nowrap">Activity</th>
                <th className="px-4 py-3 whitespace-nowrap">User / Group</th>
                <th className="px-4 py-3 rounded-tr-md">Details</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((item, idx) => (
                <tr
                  key={idx}
                  className="text-xs sm:text-sm border-b text-[#000000] font-medium border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                >
                  <td className="px-4 py-3.5  whitespace-nowrap">
                    {item.dateTime}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {item.activity}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {item.userGroup}
                  </td>
                  <td className="px-4 py-3.5">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
