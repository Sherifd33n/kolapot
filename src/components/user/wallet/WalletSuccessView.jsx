import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WalletSuccessView({ depositAmount, balance, onBackToWallet }) {
  return (
    <div className="bg-white rounded-2xl border border-[#F3EFEA] p-8 max-w-lg mx-auto text-center space-y-5 shadow-sm animate-tab-content my-8">
      <div className="w-16 h-16 rounded-full bg-[#EAF7EE] text-[#0B5D4B] flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-[#111827]">
          Deposit Successful!
        </h3>
        <p className="text-xs sm:text-sm text-[#7E7F7D]">
          ₦{depositAmount} has been credited to your PallyPot wallet balance.
        </p>
      </div>
      <div className="p-4 bg-[#F9FAF8] rounded-xl border border-[#EFECE6] text-xs space-y-2">
        <div className="flex justify-between text-[#7E7F7D]">
          <span>New Wallet Balance</span>
          <span className="font-bold text-[#0B5D4B] text-sm">
            ₦{balance.toLocaleString()}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={onBackToWallet}
        className="w-full py-3 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer shadow-xs"
      >
        Back to Wallet Dashboard
      </button>
    </div>
  );
}
