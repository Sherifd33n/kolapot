import React from "react";
import { ChevronDown } from "lucide-react";

export default function PayoutHistorySection({
  filteredHistory,
  historyGroupFilter,
  setHistoryGroupFilter,
  historyStatusFilter,
  setHistoryStatusFilter,
  historyDateFilter,
  setHistoryDateFilter,
}) {
  return (
    <div className="space-y-3 pt-2 bg-white p-4 rounded-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#111827]">Payout History</h3>
          <p className="text-sm text-[#7E7F7D] mt-0.5">Previously processed payouts from your groups.</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { value: historyGroupFilter, onChange: setHistoryGroupFilter, options: [["All Groups","All Groups"],["Dream Builders","Dream Builders"]] },
            { value: historyStatusFilter, onChange: setHistoryStatusFilter, options: [["All Statuses","All Statuses"],["Completed","Completed"]] },
            { value: historyDateFilter, onChange: setHistoryDateFilter, options: [["This Month","This Month"],["Last Month","Last Month"],["All Time","All Time"]] },
          ].map((filter, i) => (
            <div key={i} className="relative">
              <select
                value={filter.value}
                onChange={(e) => filter.onChange(e.target.value)}
                className="appearance-none bg-white border border-[#E5E0D6] rounded-md text-xs font-medium text-[#1A2E26] pl-3 pr-7 py-2 shadow-xs cursor-pointer focus:outline-none focus:border-[#0B5D4B]"
              >
                {filter.options.map(([val, label]) => <option key={val} value={val}>{label}</option>)}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-md shadow-xs border border-[#F3EFEA] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#EBEEEC] border-b border-[#F0ECE6] text-[13px] font-semibold text-[#6B7280]">
                <th className="py-4 px-4 sm:px-6">Group</th>
                <th className="py-4 px-4">Cycle</th>
                <th className="py-4 px-4">Payout Position</th>
                <th className="py-4 px-4">Payout Amount</th>
                <th className="py-4 px-4">Deductions</th>
                <th className="py-4 px-4">Amount Received</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0ECE6] text-xs">
              {filteredHistory.map((item) => (
                <tr key={item.id} className="hover:bg-[#FAF9F6] transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#000000]">{item.group}</td>
                  <td className="py-4 px-4 text-[#505D56] font-normal">{item.cycle}</td>
                  <td className="py-4 px-4 font-semibold text-[#000000]">{item.position}</td>
                  <td className="py-4 px-4 font-bold text-[#000000]">{item.amount}</td>
                  <td className="py-4 px-4 font-bold text-[#000000]">{item.deductions}</td>
                  <td className="py-4 px-4 font-bold text-[#000000]">{item.received}</td>
                  <td className="py-4 px-4 font-bold text-[#000000]">{item.date}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-md ${item.statusStyle}`}>{item.status}</span>
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
