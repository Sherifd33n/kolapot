import React from "react";
import { ChevronDown } from "lucide-react";

export default function ContributionHistorySection({
  selectedGroupFilter,
  setSelectedGroupFilter,
  selectedStatusFilter,
  setSelectedStatusFilter,
  selectedDateFilter,
  setSelectedDateFilter,
  filteredHistory,
}) {
  return (
    <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F0EDE6] space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#111827]">
            Contribution History
          </h3>
          <p className="text-sm text-[#8798A6] mt-0.5 font-normal">
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
  );
}
