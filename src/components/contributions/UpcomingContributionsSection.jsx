import React from "react";
import { Calendar } from "lucide-react";

export default function UpcomingContributionsSection({
  upcomingContributions,
  onViewSchedule,
  onMakeContribution,
}) {
  return (
    <div className="space-y-3.5 p-4 bg-white rounded-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#111827]">
            Upcoming Contribution
          </h3>
          <p className="text-sm text-[#8798A6] mt-0.5 font-normal">
            Your next contribution across all groups.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewSchedule}
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
                onClick={() => onMakeContribution(item)}
                className="px-6 py-2.5 bg-[#073529] hover:bg-[#0B4032] text-white rounded-md text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.98] whitespace-nowrap"
              >
                Make Contribution
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
