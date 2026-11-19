import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, Eye, Download, MessageCircle, Link2, CheckCircle2, X } from "lucide-react";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { LuClock8 } from "react-icons/lu";

export default function DisputeDetailView({ dispute, group, onBack }) {
  const d = dispute || {
    id: "DSP-00124",
    category: "Group Rules",
    subject: "Disagreement on payout order",
    date: "Nov 14, 2026, 10:24 AM",
    status: "In Review",
  };

  // Enrich with defaults for detail view
  const details = {
    ...d,
    status: d.status || "In Review",
    description:
      d.description ||
      '"I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle."',
    evidence:
      d.evidence !== undefined
        ? d.evidence
        : [{ name: "Group_agreement.png", type: "PNG", size: "412 KB" }],
    groupContext: d.groupContext || {
      group: group?.name || "Yaba Ajo Group",
      contributionCycle: "Monthly",
      payoutOrder: "Member 4 of 20",
    },
    timeline: d.timeline || [
      {
        title: "Dispute Submitted",
        description: "Your dispute was received.",
        date: d.date || "Nov 14, 2026, 10:24 AM",
        status: "completed",
      },
      {
        title: "Under Review",
        description: "The Group Admin is reviewing your complaint.",
        date: d.date || "Nov 14, 2026, 10:24 AM",
        status: "current",
      },
      {
        title: "Resolved",
        description: "A decision has been made on your dispute.",
        date: d.date || "Nov 14, 2026, 10:24 AM",
        status: "resolved",
      },
    ],
  };

  const statusColors = {
    New: "bg-[#FFECEC] text-[#E02424]",
    "In Review": "bg-[#FFF3E0] text-[#E65100]",
    Resolved: "bg-[#E3F2FD] text-[#1565C0]",
  };

  const [previewFile, setPreviewFile] = useState(null);

  useEffect(() => {
    if (previewFile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewFile]);

  const handleDownload = (file) => {
    if (file.url) {
      const a = document.createElement("a");
      a.href = file.url;
      a.download = file.name || "evidence";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 600;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FAF8F5";
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = "#0B5D4B";
      ctx.fillRect(0, 0, 800, 70);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 24px sans-serif";
      ctx.fillText(file.name || "Supporting Evidence", 30, 45);
      ctx.fillStyle = "#111827";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText(`Dispute Reference: ${details.id}`, 30, 120);
      ctx.fillStyle = "#737373";
      ctx.font = "14px sans-serif";
      ctx.fillText(`Subject: ${details.subject}`, 30, 150);
      ctx.fillText(`Group: ${details.groupContext?.group || "Group"}`, 30, 180);
      ctx.fillText(`Date: ${details.date}`, 30, 210);
      ctx.fillStyle = "#EAF7EE";
      ctx.fillRect(30, 240, 740, 180);
      ctx.fillStyle = "#0B6B40";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("Official Group Agreement & Evidence Record", 50, 280);
      ctx.fillStyle = "#374151";
      ctx.font = "14px sans-serif";
      ctx.fillText("1. Rotational payout cycle according to registered queue position.", 50, 315);
      ctx.fillText("2. All disputes are handled in accordance with collective bylaws.", 50, 345);
      ctx.fillText("3. Evidence verified and registered with group administration.", 50, 375);
      ctx.fillStyle = "#9CA3AF";
      ctx.font = "12px sans-serif";
      ctx.fillText("PallyPot Secure Platform • Verification Record", 30, 560);
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name || "Group_agreement.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  };

  return (
    <div className="animate-tab-content space-y-5">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1A2E26] hover:text-[#064335] transition-colors font-medium cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to Disputes</span>
      </button>

      {/* Header */}
      <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">Dispute Details</h2>
        <span className="text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F3EFEA] text-[#111827]">
          {details.id}
        </span>
        <span className={`text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full ${statusColors[details.status] || "bg-[#EAF7EE] text-[#0B6B40]"}`}>
          {details.status}
        </span>
      </div>

      {/* Subject & Category Card */}
      <div className="bg-white rounded-md p-4 sm:p-5 shadow-xs border border-[#F3EFEA]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <span className="text-xs text-[#737373] block mb-1">Subject</span>
            <span className="text-xs sm:text-sm font-semibold text-[#111827]">{details.subject}</span>
          </div>
          <div>
            <span className="text-xs text-[#737373] block mb-1">Category</span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EAF7EE] text-[#0B6B40] inline-block">
              {details.category}
            </span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-[#F3EFEA]">
          <span className="text-xs text-[#737373] block mb-0.5">Submitted</span>
          <span className="text-xs sm:text-sm text-[#111827]">{details.date}</span>
        </div>
      </div>

      {/* Complaint Details */}
      <div className="bg-white rounded-md p-4 sm:p-5 shadow-xs border border-[#F3EFEA]">
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <FaRegCommentDots className="text-[#111827] shrink-0" size={24} />
          <h3 className="text-xs sm:text-sm font-bold text-[#111827]">Complaint Details</h3>
        </div>
        <p className="text-xs sm:text-sm text-[#737373] leading-relaxed pl-2 sm:pl-6">
          {details.description}
        </p>
      </div>

      {/* Supporting Evidence */}
      <div className="bg-white rounded-md p-4 sm:p-5 shadow-xs border border-[#F3EFEA]">
        <div className="flex items-center gap-2 mb-3">
          <AiOutlineLink className="text-[#111827] shrink-0" size={26} />
          <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
            Supporting Evidence ({details.evidence?.length || 0})
          </h3>
        </div>
        {details.evidence && details.evidence.length > 0 ? (
          details.evidence.map((file, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#F8F9FA] rounded-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#E3F6EC] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B5D4B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs sm:text-sm font-medium text-[#111827] block truncate">{file.name}</span>
                <span className="text-[11px] sm:text-xs text-[#9A9D97]">{file.type} · {file.size}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={() => setPreviewFile(file)}
                  title="View evidence"
                  className="p-1.5 text-[#737373] hover:text-[#0B5D4B] hover:bg-[#EAF7EE] rounded-md transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDownload(file)}
                  title="Download evidence"
                  className="p-1.5 text-[#737373] hover:text-[#0B5D4B] hover:bg-[#EAF7EE] rounded-md transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xs text-[#7E7F7D] italic pl-2">No supporting evidence attached.</p>
        )}
      </div>

      {/* Group Context */}
      <div className="bg-white rounded-md p-4 sm:p-5 shadow-xs border border-[#F3EFEA]">
        <div className="flex items-center gap-2 mb-3">
          <FiLayers className="shrink-0" size={22} />
          <h3 className="text-xs sm:text-sm font-bold text-[#111827]">Group Context</h3>
        </div>
        <div className="space-y-2.5 pl-2 sm:pl-6">
          {[
            { label: "Group", value: details.groupContext?.group },
            { label: "Contribution Cycle", value: details.groupContext?.contributionCycle },
            { label: "Payout Order (Current)", value: details.groupContext?.payoutOrder },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
              <span className="text-xs sm:text-sm text-[#737373]">{item.label}</span>
              <span className="text-xs sm:text-sm font-medium text-[#111827]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Resolution Updates Timeline */}
      <div className="bg-white rounded-md p-4 sm:p-5 shadow-xs border border-[#F3EFEA]">
        <div className="flex items-center gap-2 mb-4">
          <LuClock8 className="shrink-0" size={22} />
          <h3 className="text-xs sm:text-sm font-bold text-[#111827]">Resolution Updates</h3>
        </div>
        <div className="space-y-0 pl-1 sm:pl-2">
          {details.timeline?.map((step, idx) => (
            <div key={idx} className="flex gap-3 sm:gap-4">
              {/* Timeline dot + line */}
              <div className="flex flex-col items-center">
                {step.status === "completed" ? (
                  <div className="w-6 h-6 rounded-full bg-[#0B6B40] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                ) : step.status === "current" ? (
                  <div className="w-6 h-6 rounded-full bg-[#E5E7EB] flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#9CA3AF]" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                  </div>
                )}
                {idx < details.timeline.length - 1 && (
                  <div className="w-px h-10 bg-[#E5E7EB]" />
                )}
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-start justify-between pb-4 -mt-0.5 gap-1 sm:gap-4">
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-[#111827] block">{step.title}</span>
                  <span className="text-[11px] sm:text-xs text-[#737373] block mt-0.5">{step.description}</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#737373] shrink-0">{step.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evidence Preview Modal */}
      {previewFile && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setPreviewFile(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-3 sm:px-5 py-3 sm:py-4 border-b border-[#F0EDE6] flex items-center justify-between gap-2 sm:gap-3 bg-[#FAF8F5]">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <AiOutlineLink className="text-[#0B5D4B] shrink-0" size={18} />
                <div className="truncate">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827] truncate">
                    {previewFile.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#737373]">
                    {previewFile.type} · {previewFile.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={() => handleDownload(previewFile)}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#0B5D4B] hover:bg-[#064335] text-white text-[11px] sm:text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="p-1 sm:p-1.5 text-[#737373] hover:text-[#111827] hover:bg-[#EBE6DD]/50 rounded-md transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-3 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#F9FAFB] min-h-[260px] sm:min-h-[300px]">
              {previewFile.url && (previewFile.type?.includes("PNG") || previewFile.type?.includes("JPG") || previewFile.type?.includes("JPEG")) ? (
                <img
                  src={previewFile.url}
                  alt={previewFile.name}
                  className="max-h-[50vh] sm:max-h-[60vh] max-w-full rounded-md shadow-xs object-contain"
                />
              ) : previewFile.url && previewFile.type?.includes("PDF") ? (
                <iframe
                  src={previewFile.url}
                  title={previewFile.name}
                  className="w-full h-[50vh] sm:h-[60vh] rounded-md border border-[#E5E7EB]"
                />
              ) : (
                /* Simulated Document Preview */
                <div className="w-full max-w-lg bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-4">
                  <div className="border-b border-[#F0EDE6] pb-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#0B5D4B] uppercase tracking-wider block">
                        Verified Evidence Document
                      </span>
                      <h5 className="text-base font-bold text-[#111827]">
                        {previewFile.name}
                      </h5>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF7EE] text-[#0B6B40]">
                      Verified
                    </span>
                  </div>

                  <div className="text-xs text-[#4B5563] space-y-2 leading-relaxed">
                    <p className="font-semibold text-[#111827]">
                      Group Reference: {details.groupContext?.group || "Savings Group"}
                    </p>
                    <p>
                      This document records the collective agreement and rotational cycle order approved by all group participants upon registration.
                    </p>
                    <div className="p-3 bg-[#FAF8F5] rounded-md border border-[#F0EDE6] space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-[#737373]">Dispute ID:</span>
                        <span className="font-semibold text-[#111827]">{details.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#737373]">Category:</span>
                        <span className="font-semibold text-[#111827]">{details.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#737373]">Payout Position:</span>
                        <span className="font-semibold text-[#111827]">{details.groupContext?.payoutOrder || "Member 4 of 20"}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF] pt-2 border-t border-[#F0EDE6]">
                      Timestamped and registered on {details.date}.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

