import React from "react";
import { ArrowRight } from "lucide-react";

export default function AjoCreateForm({
  circleName,
  setCircleName,
  contribution,
  setContribution,
  membersCount,
  setMembersCount,
  frequency,
  setFrequency,
  selectedTurn,
  setSelectedTurn,
  totalPool,
  isSubmitting,
  handleCreate,
}) {
  return (
    <div className="space-y-5">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">Start Together</span>
        <h3 className="text-2xl font-serif font-bold text-white mt-0.5">Customize your Àjọ Circle</h3>
        <p className="text-xs text-[#8FA89E]">Configure your savings pool, frequency, and select your preferred payout turn.</p>
      </div>

      <form onSubmit={handleCreate} className="space-y-4 text-left">
        {/* Circle Name */}
        <div>
          <label className="block text-xs font-semibold text-[#C8D6D0] mb-1">Circle Name</label>
          <input
            type="text"
            value={circleName}
            onChange={(e) => setCircleName(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#07241A] border border-[#194E3B] text-white text-sm focus:outline-none focus:border-[#E5A93C]"
            placeholder="e.g. Lagos Entrepreneurs 2026"
          />
        </div>

        {/* Contribution Amount */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-semibold text-[#C8D6D0]">Contribution Amount</label>
            <span className="text-xs font-bold text-[#E5A93C]">₦{contribution.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {[25000, 50000, 100000, 250000].map((amt) => (
              <button
                type="button"
                key={amt}
                onClick={() => setContribution(amt)}
                className={`py-1.5 text-xs rounded-lg border font-semibold transition-colors cursor-pointer ${
                  contribution === amt
                    ? "bg-[#E5A93C] text-[#08251B] border-[#E5A93C]"
                    : "bg-[#07241A] text-[#A8C4B9] border-[#194E3B] hover:border-[#38856B]"
                }`}
              >
                ₦{amt / 1000}k
              </button>
            ))}
          </div>
        </div>

        {/* Number of Members & Frequency */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#C8D6D0] mb-1">Circle Size</label>
            <select
              value={membersCount}
              onChange={(e) => {
                const count = Number(e.target.value);
                setMembersCount(count);
                if (selectedTurn > count) setSelectedTurn(count);
              }}
              className="w-full px-3 py-2 rounded-xl bg-[#07241A] border border-[#194E3B] text-white text-xs focus:outline-none focus:border-[#E5A93C]"
            >
              {[4, 5, 6, 8, 10, 12].map((num) => (
                <option key={num} value={num}>{num} Members</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#C8D6D0] mb-1">Rotation Cycle</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#07241A] border border-[#194E3B] text-white text-xs focus:outline-none focus:border-[#E5A93C]"
            >
              <option value="Weekly">Weekly</option>
              <option value="Bi-weekly">Bi-weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
        </div>

        {/* Payout Turn Selection */}
        <div>
          <label className="block text-xs font-semibold text-[#C8D6D0] mb-1">Select Your Payout Turn</label>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: membersCount }, (_, i) => i + 1).map((turn) => (
              <button
                type="button"
                key={turn}
                onClick={() => setSelectedTurn(turn)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTurn === turn
                    ? "bg-[#E5A93C] text-[#08251B] scale-105 shadow-md shadow-amber-500/30"
                    : "bg-[#07241A] text-[#A8C4B9] border border-[#194E3B] hover:border-[#38856B]"
                }`}
              >
                #{turn}
              </button>
            ))}
          </div>
        </div>

        {/* Pool Summary Card */}
        <div className="p-3.5 rounded-2xl bg-[#061F16] border border-[#174836] flex items-center justify-between">
          <div>
            <span className="text-[11px] text-[#8FA89E] block">Guaranteed Lump Sum Payout:</span>
            <span className="text-xl font-extrabold text-[#E5A93C]">₦{totalPool.toLocaleString()}</span>
          </div>
          <div className="text-right text-[11px] text-[#A8C4B9]">
            <span>Turn #{selectedTurn}</span>
            <span className="block text-[#8FA89E]">Bank-Escrow Protected</span>
          </div>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-gradient-to-r from-[#F7D070] to-[#E5A93C] text-[#08251B] font-bold rounded-full shadow-lg hover:brightness-105 transition-all text-sm flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>{isSubmitting ? "Creating Circle..." : "Confirm & Launch Circle"}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}
