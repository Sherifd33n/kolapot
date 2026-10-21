import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import AjoSuccessView from './ajo/AjoSuccessView';
import AjoLoginView from './ajo/AjoLoginView';
import AjoCreateForm from './ajo/AjoCreateForm';

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

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0B3326] border border-[#21614B] rounded-3xl p-5 sm:p-8 shadow-2xl text-[#F7F4EB] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8FA89E] hover:text-white hover:bg-[#144837] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {mode === 'success' ? (
          <AjoSuccessView
            circleName={circleName}
            totalPool={totalPool}
            selectedTurn={selectedTurn}
            contribution={contribution}
            frequency={frequency}
            membersCount={membersCount}
            onClose={onClose}
            onNavigate={onNavigate}
          />
        ) : mode === 'login' ? (
          <AjoLoginView
            onClose={onClose}
            onNavigate={onNavigate}
            setMode={setMode}
          />
        ) : (
          <AjoCreateForm
            circleName={circleName}
            setCircleName={setCircleName}
            contribution={contribution}
            setContribution={setContribution}
            membersCount={membersCount}
            setMembersCount={setMembersCount}
            frequency={frequency}
            setFrequency={setFrequency}
            selectedTurn={selectedTurn}
            setSelectedTurn={setSelectedTurn}
            totalPool={totalPool}
            isSubmitting={isSubmitting}
            handleCreate={handleCreate}
          />
        )}
      </div>
    </div>,
    document.body
  );
}
