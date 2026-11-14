import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X, AlertTriangle, Trash2 } from "lucide-react";

export default function DeleteAccountModal({ onClose, onConfirm }) {
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    if (confirmText.trim().toUpperCase() !== "DELETE") return;

    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      onConfirm?.();
    }, 1000);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-7 shadow-2xl relative my-auto animate-tab-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#EAE5DC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-[#E02424] flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A2E26]">Delete Account</h3>
              <p className="text-xs text-[#7E7F7D]">Permanent action warning</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#7E7F7D] hover:text-[#1A2E26] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleDelete} className="mt-5 space-y-4">
          <div className="p-3.5 bg-red-50 rounded-xl border border-red-200 text-xs text-red-700 leading-relaxed space-y-1.5">
            <p className="font-semibold">This action cannot be undone.</p>
            <p>
              Deleting your account will permanently remove your active Ajo memberships, contribution records, and access to stored wallet funds.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
              Type <span className="font-bold text-red-600">DELETE</span> to confirm:
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="DELETE"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D6] bg-white text-sm text-[#1A2E26] focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#7E7F7D] hover:text-[#1A2E26] rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={confirmText.trim().toUpperCase() !== "DELETE" || isDeleting}
              className="px-5 py-2.5 bg-[#E02424] hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              <span>{isDeleting ? "Deleting..." : "Delete Account"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

