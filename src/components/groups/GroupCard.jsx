import React from "react";
import { Calendar } from "lucide-react";
import { IoRepeat } from "react-icons/io5";

export default function  GroupCard({ group, onView }) {
  const isDiscover = group.status === "Open";

  return (
    <div className="bg-white rounded-xl p-5 shadow-xl space-y-4 hover:shadow-2xl transition-shadow">
      {/* Group Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-14 h-14 rounded-full ${group.initialBg} font-bold text-2xl flex items-center justify-center shrink-0`}>
              {group.initial}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-[#075140]">{group.name}</h4>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${group.badgeStyle}`}>{group.badge}</span>
              </div>
              <p className="text-[12px] text-[#7A7D78] mt-0.5">Group Admin: {group.admin}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-[#E5E0D6] border-2 border-white overflow-hidden">
                      <img
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${isDiscover ? "discover" + group.id : group.name}${i}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[11px] text-[#7E7F7D] font-medium">
                  {group.displayMembers || group.members} members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution Info */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div>
          <span className="text-2xl font-bold text-[#0B5D4B] block">{group.contribution}</span>
          <span className="text-[11px] text-[#7E7F7D] block">{group.frequency}</span>
        </div>
        <div className="text-left">
          <span className="text-xs font-semibold text-[#7E7F7D] block">Total commitment</span>
          <span className="text-sm font-bold text-[#000000] block">{group.totalCommitment}</span>
          <span className="text-[10px] text-[#7E7F7D] block">{group.totalBreakdown}</span>
        </div>
      </div>

      {/* Status Row */}
      <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#F0EDE6]">
        <div>
          <span className="text-[11px] text-[#7E7F7D] block font-medium">Status</span>
          <span className="text-sm font-bold text-[#000000] block">{group.status}</span>
        </div>
        <div className="text-left">
          <span className="text-[11px] text-[#7E7F7D] block font-medium">
            {isDiscover ? "Slots left" : "Start Date"}
          </span>
          <span className="text-sm font-bold text-[#000000] block">
            {isDiscover ? (group.cardSlotsLeft || group.slotsLeft) : group.startDate}
          </span>
        </div>
      </div>

      {/* Cycle & Next Contribution (My Groups only) */}
      {!isDiscover && (
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-1.5">
            <IoRepeat className="w-7 h-7 text-[#0B5D4B]" />
            <div>
              <span className="text-[11px] text-[#7E7F7D] block font-medium">Cycle</span>
              <span className="text-xs font-bold text-[#000000]">{group.cycle}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-6 h-6 text-[#0B5D4B]" />
            <div>
              <span className="text-[11px] text-[#7E7F7D] block font-medium">Next contribution</span>
              <span className="text-xs font-bold text-[#000000]">{group.nextContribution}</span>
            </div>
          </div>
        </div>
      )}

      {/* CTA Button */}
      <button
        onClick={() => onView(group)}
        className="w-full bg-[#064335] hover:bg-[#0B5D4B] text-white text-sm font-semibold py-2.5 rounded-md transition-colors flex items-center justify-center gap-2"
      >
        {isDiscover ? "View Details →" : "View Group →"}
      </button>
    </div>
  );
}
