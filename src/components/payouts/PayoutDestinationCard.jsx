import React from "react";
import { Landmark } from "lucide-react";

export default function PayoutDestinationCard({ payoutDestination, onChangeAccount }) {
  return (
    <div className="bg-white rounded-md p-5 sm:p-6 shadow-xs border border-[#F3EFEA] space-y-3.5 flex flex-col justify-between">
      <div>
        <h3 className="text-base font-bold text-[#111827]">Payout Destination</h3>
        <p className="text-xs text-[#7E7F7D] mt-0.5">
          Your payouts will be sent to this verified bank account.
        </p>
      </div>

      {payoutDestination.isSet ? (
        <div className="bg-[#6BCAB50F] border border-dashed border-[#D1F2E7] rounded-md p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-20 h-20 rounded-full bg-[#6BCAB533] text-[#0B5D4B] flex items-center justify-center shrink-0">
              <Landmark className="w-11 h-11" color="#0B5D4B" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#000000]">{payoutDestination.bankName}</h4>
              <span className="text-xs text-[#7E7F7D] block mt-0.5 font-mono">{payoutDestination.accountNumber}</span>
              <span className="text-sm text-[#000000] font-medium block mt-0.5">{payoutDestination.accountName}</span>
              <button
                type="button"
                onClick={onChangeAccount}
                className="bg-[#064335] hover:bg-[#0B5D4B] mt-3 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-colors shrink-0 shadow-xs cursor-pointer self-start sm:self-center"
              >
                Change Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-dashed border-[#D1D5DB] rounded-xl p-6 text-center space-y-2">
          <p className="text-sm font-semibold text-[#111827]">No payout destination yet</p>
          <p className="text-xs text-[#7E7F7D]">Add a bank account to receive your payouts when due.</p>
          <button
            type="button"
            onClick={onChangeAccount}
            className="bg-[#064335] hover:bg-[#0B5D4B] text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors cursor-pointer"
          >
            Add Bank Account
          </button>
        </div>
      )}
    </div>
  );
}
