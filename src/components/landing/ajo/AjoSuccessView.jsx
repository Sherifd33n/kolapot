import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function AjoSuccessView({
  circleName,
  totalPool,
  selectedTurn,
  contribution,
  frequency,
  membersCount,
  onClose,
  onNavigate,
}) {
  return (
    <div className="text-center py-8 space-y-5">
      <div className="w-20 h-20 mx-auto rounded-full bg-[#114837] border-2 border-[#E5A93C] flex items-center justify-center text-[#E5A93C] shadow-lg shadow-amber-500/20">
        <CheckCircle2 className="w-10 h-10 text-[#E5A93C]" />
      </div>
      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
        Àjọ Pot Created!
      </h3>
      <p className="text-sm text-[#A8C4B9] max-w-md mx-auto">
        Your circle <strong className="text-[#E5A93C]">"{circleName}"</strong> is officially set up with a <strong className="text-white">₦{totalPool.toLocaleString()}</strong> pool. Your payout turn is locked in for <strong className="text-[#E5A93C]">Turn #{selectedTurn}</strong>.
      </p>
      <div className="p-4 rounded-2xl bg-[#07241A] border border-[#194E3B] text-left text-xs space-y-2">
        <div className="flex justify-between">
          <span className="text-[#8FA89E]">Contribution / member:</span>
          <span className="font-semibold text-white">₦{contribution.toLocaleString()} ({frequency})</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8FA89E]">Circle Members:</span>
          <span className="font-semibold text-white">{membersCount} Members</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8FA89E]">Total Lump Sum Payout:</span>
          <span className="font-bold text-[#E5A93C]">₦{totalPool.toLocaleString()}</span>
        </div>
      </div>
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => {
            onClose();
            onNavigate?.("dashboard");
          }}
          className="flex-1 py-3 bg-[#E5A93C] hover:bg-[#F3BA4E] text-[#08251B] font-bold rounded-full transition-colors cursor-pointer"
        >
          Go to Dashboard
        </button>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(window.location.origin + "?invite=" + encodeURIComponent(circleName));
            alert("Circle invitation link copied to clipboard!");
          }}
          className="flex-1 py-3 bg-[#114837] hover:bg-[#1A5B45] text-white font-semibold rounded-full border border-[#276F56] transition-colors cursor-pointer"
        >
          Copy Invite Link
        </button>
      </div>
    </div>
  );
}
