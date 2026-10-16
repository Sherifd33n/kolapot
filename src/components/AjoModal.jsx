import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AjoModal({ isOpen, onClose, initialMode = 'create', onNavigate }) {
  const [mode, setMode] = useState(initialMode); // 'create' | 'login' | 'success'
  const [circleName, setCircleName] = useState('Lagos Champions Circle');
  const [contribution, setContribution] = useState(100000);
  const [membersCount, setMembersCount] = useState(10);
  const [frequency, setFrequency] = useState('Monthly');
  const [selectedTurn, setSelectedTurn] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const totalPool = contribution * membersCount;

  const handleCreate = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setMode('success');
      // Fire celebratory confetti!
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E5A93C', '#10B981', '#34D399', '#FBBF24'],
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0B3326] border border-[#21614B] rounded-3xl p-5 sm:p-8 shadow-2xl text-[#F7F4EB]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8FA89E] hover:text-white hover:bg-[#144837] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {mode === 'success' ? (
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
                  onNavigate?.('dashboard');
                }}
                className="flex-1 py-3 bg-[#E5A93C] hover:bg-[#F3BA4E] text-[#08251B] font-bold rounded-full transition-colors cursor-pointer"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.origin + '?invite=' + encodeURIComponent(circleName));
                  alert('Circle invitation link copied to clipboard!');
                }}
                className="flex-1 py-3 bg-[#114837] hover:bg-[#1A5B45] text-white font-semibold rounded-full border border-[#276F56] transition-colors"
              >
                Copy Invite Link
              </button>
            </div>
          </div>
        ) : mode === 'login' ? (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">Welcome Back</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Access your Àjọ Pot</h3>
              <p className="text-xs text-[#8FA89E] mt-1">Track your contributions, rotation dates, and upcoming payout.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); onClose(); onNavigate?.('dashboard'); }} className="space-y-4">
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
                className="w-full py-3.5 bg-gradient-to-r from-[#F7D070] to-[#E5A93C] text-[#08251B] font-bold rounded-xl shadow-lg hover:brightness-105 transition-all text-sm"
              >
                Sign In to Circle
              </button>
            </form>
            <div className="text-center pt-2">
              <button
                onClick={() => setMode('create')}
                className="text-xs text-[#E5A93C] hover:underline"
              >
                Don't have an Àjọ circle? Create one now →
              </button>
            </div>
          </div>
        ) : (
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
                      className={`py-1.5 text-xs rounded-lg border font-semibold transition-colors ${
                        contribution === amt
                          ? 'bg-[#E5A93C] text-[#08251B] border-[#E5A93C]'
                          : 'bg-[#07241A] text-[#A8C4B9] border-[#194E3B] hover:border-[#38856B]'
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
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                        selectedTurn === turn
                          ? 'bg-[#E5A93C] text-[#08251B] scale-105 shadow-md shadow-amber-500/30'
                          : 'bg-[#07241A] text-[#A8C4B9] border border-[#194E3B] hover:border-[#38856B]'
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
                <span>{isSubmitting ? 'Creating Circle...' : 'Confirm & Launch Circle'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
