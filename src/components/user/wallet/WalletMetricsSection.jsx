import React from "react";
import { FaWallet } from "react-icons/fa";

export default function WalletMetricsSection({
  balance,
  totalContributions,
  totalDeposits,
  totalWithdrawals,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1: Available Balance */}
      <div className="bg-white rounded-md p-3 shadow-xs border border-[#F3EFEA] space-y-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0B5D4B26] text-[#0B6B40] flex items-center justify-center shrink-0">
            <FaWallet className="w-4 h-4" />
          </div>
          <span className="text-sm text-[#03271F] font-medium">
            Available Balance
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#111827]">
            ₦{balance.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Card 2: Total Contributions */}
      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-[#F3EFEA] space-y-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0B5D4B26] text-[#0B6B40] flex items-center justify-center shrink-0">
            <FaWallet className="w-4 h-4" />
          </div>
          <span className="text-sm text-[#03271F] font-medium">
            Total Contributions
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#111827]">
            ₦{totalContributions.toLocaleString()}
          </h3>
          <p className="text-xs text-[#7E7F7D] mt-0.5 font-normal">To groups</p>
        </div>
      </div>

      {/* Card 3: Total Deposits */}
      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-[#F3EFEA] space-y-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0B5D4B26] text-[#0B6B40] flex items-center justify-center shrink-0">
            <FaWallet className="w-4 h-4" />
          </div>
          <span className="text-sm text-[#03271F] font-medium">
            Total Deposits
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#111827]">
            ₦{totalDeposits.toLocaleString()}
          </h3>
          <p className="text-xs text-[#7E7F7D] mt-0.5 font-normal">All time</p>
        </div>
      </div>

      {/* Card 4: Total Withdrawals */}
      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-[#F3EFEA] space-y-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0B5D4B26] text-[#0B6B40] flex items-center justify-center shrink-0">
            <FaWallet className="w-4 h-4" />
          </div>
          <span className="text-sm text-[#03271F] font-medium">
            Total Withdrawals
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#111827]">
            ₦{totalWithdrawals.toLocaleString()}
          </h3>
          <p className="text-xs text-[#7E7F7D] mt-0.5 font-normal">All time</p>
        </div>
      </div>
    </div>
  );
}
