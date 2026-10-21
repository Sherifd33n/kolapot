import React from "react";

export default function AjoLoginView({ onClose, onNavigate, setMode }) {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">Welcome Back</span>
        <h3 className="text-2xl font-serif font-bold text-white mt-1">Access your Àjọ Pot</h3>
        <p className="text-xs text-[#8FA89E] mt-1">Track your contributions, rotation dates, and upcoming payout.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); onClose(); onNavigate?.("dashboard"); }} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#C8D6D0] mb-1.5">Phone Number or Email</label>
          <input
            type="text"
            required
            placeholder="e.g. 08012345678 or name@example.com"
            className="w-full px-4 py-3 rounded-xl bg-[#07241A] border border-[#194E3B] text-white placeholder-[#4E6B60] text-sm focus:outline-none focus:border-[#E5A93C]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#C8D6D0] mb-1.5">Security PIN / Password</label>
          <input
            type="password"
            required
            placeholder="••••••"
            className="w-full px-4 py-3 rounded-xl bg-[#07241A] border border-[#194E3B] text-white placeholder-[#4E6B60] text-sm focus:outline-none focus:border-[#E5A93C]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3.5 bg-gradient-to-r from-[#F7D070] to-[#E5A93C] text-[#08251B] font-bold rounded-xl shadow-lg hover:brightness-105 transition-all text-sm cursor-pointer"
        >
          Sign In to Circle
        </button>
      </form>
      <div className="text-center pt-2">
        <button
          onClick={() => setMode("create")}
          className="text-xs text-[#E5A93C] hover:underline cursor-pointer"
        >
          Don't have an Àjọ circle? Create one now →
        </button>
      </div>
    </div>
  );
}
