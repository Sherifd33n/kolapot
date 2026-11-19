import React from "react";
import { ArrowLeft, Calendar, Clock, AlertCircle, ChevronDown } from "lucide-react";

export default function ContributionScheduleView({
  scheduleData,
  scheduleGroupFilter,
  setScheduleGroupFilter,
  scheduleStatusFilter,
  setScheduleStatusFilter,
  scheduleDateFilter,
  setScheduleDateFilter,
  onBack,
  onMakeContribution,
}) {
  const filteredSchedule = scheduleData.filter((item) => {
    if (
      scheduleGroupFilter !== "All Groups" &&
      item.groupName !== scheduleGroupFilter
    )
      return false;
    if (
      scheduleStatusFilter !== "All Statuses" &&
      item.status.toLowerCase() !== scheduleStatusFilter.toLowerCase()
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-tab-content">
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A2E26] hover:text-[#0B5D4B] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Contributions</span>
        </button>
      </div>

      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
          Contribution Schedule
        </h2>
        <p className="text-sm sm:text-base text-[#8798A6] mt-1 font-normal">
          See when your contributions are due across your savings groups.
        </p>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Upcoming */}
        <div className="bg-[#96F9E330] rounded-md p-4 sm:p-5 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
            <Calendar className="w-8 h-8 text-[#064335] stroke-[1.8]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#0B5D4B] block">
              Upcoming
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#000000] block my-0.5">
              4
            </span>
            <span className="text-xs text-[#7B7D7A] font-normal block">
              Contributions not yet due
            </span>
          </div>
        </div>

        {/* Due Soon */}
        <div className="bg-[#E4C28230] rounded-md p-4 sm:p-5 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
            <Clock className="w-7 h-7 text-[#B45309] stroke-[1.8]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#B45309] block">
              Due Soon
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#111827] block my-0.5">
              2
            </span>
            <span className="text-xs text-[#8798A6] font-normal block">
              Due in the next 7 days
            </span>
          </div>
        </div>

        {/* Overdue */}
        <div className="bg-[#C9626B30] rounded-md p-4 sm:p-5 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
            <AlertCircle className="w-7 h-7 text-[#FA0E22] stroke-[1.8]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#FA0E22] block">
              Overdue
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#000000] block my-0.5">
              1
            </span>
            <span className="text-xs text-[#8798A6] font-normal block">
              Past due date
            </span>
          </div>
        </div>
      </div>

      {/* 3 Filters Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <select
            value={scheduleGroupFilter}
            onChange={(e) => setScheduleGroupFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-[#E5E0D6] rounded-md px-4 py-3 text-sm text-[#111827] font-medium pr-10 focus:outline-none focus:border-[#0B5D4B] cursor-pointer shadow-xs"
          >
            <option value="All Groups">All Groups</option>
            <option value="Dream Builders">Dream Builders</option>
          </select>
          <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={scheduleStatusFilter}
            onChange={(e) => setScheduleStatusFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-[#E5E0D6] rounded-md px-4 py-3 text-sm text-[#111827] font-medium pr-10 focus:outline-none focus:border-[#0B5D4B] cursor-pointer shadow-xs"
          >
            <option value="All Statuses">All Statuses</option>
            <option value="Due Soon">Due Soon</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Overdue">Overdue</option>
          </select>
          <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={scheduleDateFilter}
            onChange={(e) => setScheduleDateFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-[#E5E0D6] rounded-md px-4 py-3 text-sm text-[#111827] font-medium pr-10 focus:outline-none focus:border-[#0B5D4B] cursor-pointer shadow-xs"
          >
            <option value="This Month">This Month</option>
            <option value="Next Month">Next Month</option>
            <option value="All Months">All Months</option>
          </select>
          <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-xl border border-[#F0EDE6] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#EBEEEC] text-[#7B8078] text-sm font-semibold">
                <th className="py-6 px-5">Group</th>
                <th className="py-4 px-5">Contribution Amount</th>
                <th className="py-4 px-5">Due Date</th>
                <th className="py-4 px-5">Cycle</th>
                <th className="py-4 px-5">Status</th>
                <th className="py-4 px-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EDE6] text-xs sm:text-sm">
              {filteredSchedule.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#FAF9F6]/60 transition-colors"
                >
                  <td className="py-4 px-5 text-[#000000] font-bold">
                    {row.groupName}
                  </td>
                  <td className="py-4 px-5 text-[#000000] font-bold">
                    {row.amount}
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-[#000000] font-bold block">
                      {row.dueDate}
                    </span>
                    <span className="text-xs text-[#A4A8A2] block mt-0.5">
                      {row.dueDaysText}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-[#000000] font-bold">
                    {row.cycle}
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${
                        row.status === "Due Soon"
                          ? "bg-[#FEF3C7] text-[#B45309]"
                          : row.status === "Upcoming"
                            ? "bg-[#DCFCE7] text-[#16A34A]"
                            : "bg-[#FEE2E2] text-[#DC2626]"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <button
                      type="button"
                      onClick={() => onMakeContribution(row)}
                      className="px-4 py-2 bg-[#064335] hover:bg-[#074738] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer active:scale-95 shadow-xs whitespace-nowrap"
                    >
                      Make Contribution
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
