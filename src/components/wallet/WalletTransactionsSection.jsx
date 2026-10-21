import React from "react";
import { ChevronDown } from "lucide-react";

export default function WalletTransactionsSection({
  typeFilter,
  setTypeFilter,
  statusFilter,
  setStatusFilter,
  dateFilter,
  setDateFilter,
  filteredTransactions,
}) {
  return (
    <div className="bg-white rounded-md shadow-xs border border-[#F3EFEA] overflow-hidden py-4">
      {/* Section Header & Filters */}
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#000000]">Transactions</h3>
          <p className="text-sm text-[#8798A6] mt-0.5">
            A list of all your wallet transactions.
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Filter 1: Type */}
          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="appearance-none bg-white border border-[#E5E0D6] rounded-md text-xs font-medium text-[#1A2E26] pl-3 pr-9 py-2 shadow-xs cursor-pointer focus:outline-none focus:border-[#0B5D4B]"
            >
              <option value="All Types">All Types</option>
              <option value="Deposit">Deposit</option>
              <option value="Contribution">Contribution</option>
              <option value="Withdrawal">Withdrawal</option>
              <option value="Payout">Payout</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Filter 2: Status */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-[#E5E0D6] rounded-md text-xs font-medium text-[#1A2E26] pl-3 pr-9 py-2 shadow-xs cursor-pointer focus:outline-none focus:border-[#0B5D4B]"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Failed">Failed</option>
              <option value="Pending">Pending</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Filter 3: Date */}
          <div className="relative">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="appearance-none bg-white border border-[#E5E0D6] rounded-md text-xs font-medium text-[#1A2E26] pl-3 pr-9 py-2 shadow-xs cursor-pointer focus:outline-none focus:border-[#0B5D4B]"
            >
              <option value="This Month">This Month</option>
              <option value="Last Month">Last Month</option>
              <option value="All Time">All Time</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto px-4">
        <table className="w-full text-left border">
          <thead className="rounded-xl">
            <tr className="bg-[#DCDEDB] border-[#F0ECE6] text-[13px] font-semibold text-[#6B7280]">
              <th className="py-4 px-4 sm:px-6">Date</th>
              <th className="py-4 px-4">Type</th>
              <th className="py-4 px-4">Description</th>
              <th className="py-4 px-4">Reference</th>
              <th className="py-4 px-4">Amount</th>
              <th className="py-4 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0ECE6] text-xs">
            {filteredTransactions.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-8 text-center text-[#7E7F7D] text-xs"
                >
                  No transactions found for the selected filters.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-[#FAF9F6] transition-colors"
                >
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#000000] whitespace-nowrap">
                    {tx.date}
                  </td>
                  <td className="py-4 px-4 font-semibold text-[#000000]">
                    {tx.type}
                  </td>
                  <td className="py-4 px-4 font-semibold text-[#000000]">
                    {tx.description}
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-[#000000]">
                    {tx.reference}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#000000]">
                    {tx.amount}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-md ${
                        tx.status === "Completed"
                          ? "bg-[#E6F7EC] text-[#0B5D4B]"
                          : tx.status === "Failed"
                          ? "bg-[#FEE2E2] text-[#DC2626]"
                          : "bg-[#FEF3C7] text-[#D97706]"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
