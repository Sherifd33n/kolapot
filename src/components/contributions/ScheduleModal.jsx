import React from "react";
import { X } from "lucide-react";

export default function ScheduleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#F0EDE6] space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#F0EDE6]">
          <div>
            <h3 className="font-bold text-lg text-[#111827]">
              Upcoming Payment Schedule
            </h3>
            <p className="text-xs text-[#8798A6]">
              Rotational cycle payments for 2026-2027
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
          {[
            {
              cycle: "Cycle 10 of 26",
              date: "18 Oct 2026",
              amount: "₦50,000",
              status: "Due soon",
            },
            {
              cycle: "Cycle 11 of 26",
              date: "18 Nov 2026",
              amount: "₦50,000",
              status: "Upcoming",
            },
            {
              cycle: "Cycle 12 of 26",
              date: "18 Dec 2026",
              amount: "₦50,000",
              status: "Upcoming",
            },
            {
              cycle: "Cycle 13 of 26",
              date: "18 Jan 2027",
              amount: "₦50,000",
              status: "Upcoming",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-xl border border-[#F0EDE6] bg-[#FAF8F5]"
            >
              <div>
                <span className="text-xs font-bold text-[#111827] block">
                  {item.cycle}
                </span>
                <span className="text-[11px] text-[#8798A6]">
                  {item.date}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-[#0B5D4B] block">
                  {item.amount}
                </span>
                <span className="text-[10px] text-[#8798A6]">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#374151] font-medium rounded-lg text-xs transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}
