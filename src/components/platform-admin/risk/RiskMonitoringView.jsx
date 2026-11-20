import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  ChevronDown,
  X,
  Users,
  CreditCard,
  User,
  Calendar,
  Layers,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function RiskMonitoringView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("Type: All");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [periodFilter, setPeriodFilter] = useState("This Month");

  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  // Modal State
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [toastNotice, setToastNotice] = useState(null);

  // Table Data (Image 3)
  const [records, setRecords] = useState([
    {
      id: "r1",
      reference: "RISK-0042",
      type: "Risk Flag",
      description: "Multiple failed contribution attempts in a short period.",
      relatedItem: "Unity Ajo Circle",
      relatedType: "group",
      dateDetected: "Nov 14, 2026, 10:24 AM",
      source: "System Detected",
      status: "Flagged",
    },
    {
      id: "r2",
      reference: "ALT-0198",
      type: "Operational Alert",
      description: "Contribution payment failed.",
      relatedItem: "TRX-946589",
      relatedType: "transaction",
      dateDetected: "Nov 14, 2026, 10:24 AM",
      source: "Payment Gateway",
      status: "New",
    },
    {
      id: "r3",
      reference: "RISK-0042",
      type: "Risk Flag",
      description: "Reconciliation concern for group payout.",
      relatedItem: "Unity Ajo Circle",
      relatedType: "group",
      dateDetected: "Nov 14, 2026, 10:24 AM",
      source: "System Detected",
      status: "Resolved",
    },
    {
      id: "r4",
      reference: "RISK-0041",
      type: "Risk Flag",
      description: "Multiple failed contribution attempts in a short period.",
      relatedItem: "Tunde Akinola",
      relatedType: "user",
      dateDetected: "Nov 14, 2026, 10:24 AM",
      source: "Security Guard",
      status: "Flagged",
    },
    {
      id: "r5",
      reference: "ALT-0198",
      type: "Operational Alert",
      description: "Contribution payment failed.",
      relatedItem: "TRX-946589",
      relatedType: "transaction",
      dateDetected: "Nov 14, 2026, 10:24 AM",
      source: "Payment Gateway",
      status: "New",
    },
  ]);

  const filteredRecords = records.filter((item) => {
    const matchesSearch =
      item.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.relatedItem.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      typeFilter === "Type: All" || item.type === typeFilter;

    const matchesStatus =
      statusFilter === "All Statuses" || item.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleUpdateStatus = (newStatus) => {
    if (selectedRecord) {
      setRecords((prev) =>
        prev.map((r) =>
          r.id === selectedRecord.id ? { ...r, status: newStatus } : r
        )
      );
      setSelectedRecord((prev) => (prev ? { ...prev, status: newStatus } : null));
      setToastNotice(`Record updated to ${newStatus}.`);
      setTimeout(() => setToastNotice(null), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastNotice && (
        <div className="bg-[#EAF7EE] border border-[#0B6B40]/30 text-[#0B6B40] px-4 py-3 rounded-xl flex items-center justify-between text-sm shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0B6B40]" />
            <span>{toastNotice}</span>
          </div>
          <button
            onClick={() => setToastNotice(null)}
            className="text-[#0B6B40] hover:text-[#064335]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
            Risk & Monitoring
          </h1>
          <p className="text-sm text-[#737373] mt-1">
            Review risk flags and operational alerts across the platform.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search users, groups, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B] shadow-2xs"
          />
        </div>
      </div>

      {/* FILTERS BAR */}
      <div className="bg-white rounded-xl p-4 border border-[#F3EFEA] shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full xl:max-w-md">
          <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by reference, user, group or transaction..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B]"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full xl:w-auto">
          {/* Type dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[130px]">
            <button
              onClick={() => {
                setIsTypeOpen(!isTypeOpen);
                setIsStatusOpen(false);
                setIsPeriodOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{typeFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isTypeOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-44 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["Type: All", "Risk Flag", "Operational Alert"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setTypeFilter(opt);
                      setIsTypeOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Status dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[120px]">
            <button
              onClick={() => {
                setIsStatusOpen(!isStatusOpen);
                setIsTypeOpen(false);
                setIsPeriodOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{statusFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isStatusOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-40 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Statuses", "Flagged", "New", "Resolved", "Under Review"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setStatusFilter(opt);
                        setIsStatusOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Period dropdown */}
          <div className="relative flex-1 sm:flex-initial min-w-[120px]">
            <button
              onClick={() => {
                setIsPeriodOpen(!isPeriodOpen);
                setIsTypeOpen(false);
                setIsStatusOpen(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{periodFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isPeriodOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-1 w-36 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["This Month", "Last Month", "This Year"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setPeriodFilter(opt);
                      setIsPeriodOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-[#F3EFEA] shadow-xs overflow-hidden">
        <div className="overflow-x-auto w-full max-w-full">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#EAF0EE] text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 whitespace-nowrap">Reference</th>
                <th className="py-3 px-4 whitespace-nowrap">Type</th>
                <th className="py-3 px-4 whitespace-nowrap">Description</th>
                <th className="py-3 px-4 whitespace-nowrap">Related Item</th>
                <th className="py-3 px-4 whitespace-nowrap">Date Detected</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EFEA] text-xs text-[#111827]">
              {filteredRecords.map((row) => (
                <tr key={row.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                  {/* Reference */}
                  <td className="py-3.5 px-4 font-mono font-medium text-[#111827]">
                    {row.reference}
                  </td>

                  {/* Type */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {row.type === "Risk Flag" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                        Risk Flag
                      </span>
                    )}
                    {row.type === "Operational Alert" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FCE7F3] text-[#DB2777]">
                        Operational Alert
                      </span>
                    )}
                  </td>

                  {/* Description */}
                  <td className="py-3.5 px-4 text-[#111827] font-medium whitespace-nowrap">
                    {row.description}
                  </td>

                  {/* Related Item */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-[#0B6B40] font-medium">
                      {row.relatedType === "group" && (
                        <Users className="w-4 h-4 text-[#0B6B40]" />
                      )}
                      {row.relatedType === "transaction" && (
                        <CreditCard className="w-4 h-4 text-[#0B6B40]" />
                      )}
                      {row.relatedType === "user" && (
                        <User className="w-4 h-4 text-[#0B6B40]" />
                      )}
                      <span className="text-[#111827]">{row.relatedItem}</span>
                    </div>
                  </td>

                  {/* Date Detected */}
                  <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">
                    {row.dateDetected}
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {row.status === "Flagged" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
                        Flagged
                      </span>
                    )}
                    {row.status === "New" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#DCFCE7] text-[#15803D]">
                        New
                      </span>
                    )}
                    {row.status === "Resolved" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEF9C3] text-[#CA8A04]">
                        Resolved
                      </span>
                    )}
                    {row.status === "Under Review" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#D97706]">
                        Under Review
                      </span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <button
                      onClick={() => setSelectedRecord(row)}
                      className="px-3 py-1 text-xs font-medium rounded-md border border-[#0B6B40] text-[#0B6B40] hover:bg-[#0B6B40]/10 transition-colors cursor-pointer"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <span>Showing 1–{filteredRecords.length} of 42 records.</span>
          <div className="flex items-center gap-1.5">
            <button className="px-2.5 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              &lt;
            </button>
            <button className="px-3 py-1 rounded bg-[#82C3A7] text-white font-medium cursor-pointer">
              1
            </button>
            <button className="px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              2
            </button>
            <button className="px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              3
            </button>
            <button className="px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              4
            </button>
            <button className="px-2.5 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 text-[#737373] cursor-pointer">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* VIEW DETAILS MODAL (Image 1) */}
      {selectedRecord &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
              {/* Header */}
              <div className="flex items-center justify-between pb-1">
                <h3 className="text-xl font-bold text-[#111827]">
                  View Details
                </h3>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="text-[#737373] hover:text-[#111827] p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reference & Badge */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-base font-bold text-[#111827]">
                    {selectedRecord.reference}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                    {selectedRecord.type}
                  </span>
                </div>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {selectedRecord.description}
                </p>
              </div>

              {/* Details Box */}
              <div className="bg-[#F9FAF9] rounded-xl p-4 border border-[#ECECEC] space-y-3.5 text-xs">
                {/* Related Item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-[#737373]">
                    <Users className="w-4 h-4 text-[#0B6B40]" />
                    <span className="font-medium">Related Item</span>
                  </div>
                  <span className="font-semibold text-[#111827]">
                    {selectedRecord.relatedItem}
                  </span>
                </div>

                {/* Date Detected */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-[#737373]">
                    <Calendar className="w-4 h-4 text-[#0B6B40]" />
                    <span className="font-medium">Date Detected</span>
                  </div>
                  <span className="text-[#111827]">
                    {selectedRecord.dateDetected}
                  </span>
                </div>

                {/* Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-[#737373]">
                    <Layers className="w-4 h-4 text-[#0B6B40]" />
                    <span className="font-medium">Source</span>
                  </div>
                  <span className="font-semibold text-[#111827]">
                    {selectedRecord.source || "System Detected"}
                  </span>
                </div>

                {/* Record Type */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-[#737373]">
                    <FileText className="w-4 h-4 text-[#0B6B40]" />
                    <span className="font-medium">Record Type</span>
                  </div>
                  <span className="font-medium text-[#111827]">
                    {selectedRecord.type}
                  </span>
                </div>

                {/* Current Status */}
                <div className="flex items-center justify-between pt-1 border-t border-[#ECECEC]">
                  <div className="flex items-center gap-2.5 text-[#737373]">
                    <AlertCircle className="w-4 h-4 text-[#0B6B40]" />
                    <span className="font-medium">Current Status</span>
                  </div>
                  <div>
                    {selectedRecord.status === "Flagged" && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
                        Flagged
                      </span>
                    )}
                    {selectedRecord.status === "New" && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#DCFCE7] text-[#15803D]">
                        New
                      </span>
                    )}
                    {selectedRecord.status === "Resolved" && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FEF9C3] text-[#CA8A04]">
                        Resolved
                      </span>
                    )}
                    {selectedRecord.status === "Under Review" && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#D97706]">
                        Under Review
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => handleUpdateStatus("Under Review")}
                  className="w-full py-3 bg-[#0B5D4B] hover:bg-[#074638] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Mark Under Review
                </button>
                <button
                  onClick={() => handleUpdateStatus("Resolved")}
                  className="w-full py-3 border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B]/10 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Mark As Resolved
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

