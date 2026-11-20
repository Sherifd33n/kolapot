import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  User,
  Mail,
  Phone,
  FileText,
  Paperclip,
  Eye,
  Download,
  Layers,
  Receipt,
  Sliders,
  Clock,
  Check,
  Send,
  CheckCircle2,
  X,
} from "lucide-react";

export default function ViewDisputeDetail({ dispute, onBack }) {
  const [currentStatus, setCurrentStatus] = useState(dispute?.status || "New");
  const [noteText, setNoteText] = useState("");
  const [actionNotice, setActionNotice] = useState(null);

  const d = dispute || {
    id: "DSP-00124",
    member: "Tunde Akinola",
    email: "tunde.akinola@gmail.com",
    phone: "+234 803 456 7890",
    category: "Group Rules",
    subject: "Disagreement on payout order",
    group: "Ikeja Ajo Group",
    dateSubmitted: "Nov 14, 2026, 10:24 AM",
    status: "New",
    complaint:
      "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
    evidenceFile: "Group_agreement.png",
    evidenceSize: "PNG · 412 KB",
    groupContext: {
      name: "Yaba Ajo Group",
      cycle: "Monthly",
      payoutOrder: "Member 4 of 20",
      admin: "John Doe",
    },
    transaction: {
      id: "TRX-082746301",
      type: "Contribution",
      amount: "₦10,000",
      date: "Nov 14, 2026, 10:20 AM",
      method: "Bank Card (Visa ****4821)",
      status: "Pending",
    },
  };

  const handleMarkUnderReview = () => {
    setCurrentStatus("Under Review");
    setActionNotice("Dispute marked as Under Review.");
    setTimeout(() => setActionNotice(null), 3000);
  };

  const handleResolveDispute = () => {
    setCurrentStatus("Resolved");
    setActionNotice("Dispute resolved successfully.");
    setTimeout(() => setActionNotice(null), 3000);
  };

  const handleSendNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    setActionNotice("Note sent to member successfully.");
    setNoteText("");
    setTimeout(() => setActionNotice(null), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Alert notice */}
      {actionNotice && (
        <div className="bg-[#EAF7EE] border border-[#0B6B40]/30 text-[#0B6B40] px-4 py-3 rounded-xl flex items-center justify-between text-sm shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0B6B40]" />
            <span>{actionNotice}</span>
          </div>
          <button
            onClick={() => setActionNotice(null)}
            className="text-[#0B6B40] hover:text-[#064335]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP HEADER: Back button + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xl font-bold text-[#111827] hover:text-[#087F5B] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>View Dispute</span>
        </button>

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

      {/* SUBTITLE & BADGES */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
          Dispute Details
        </h2>
        <span className="px-2.5 py-0.5 rounded bg-[#F3F4F6] text-[#374151] font-mono text-xs font-bold">
          {d.id}
        </span>
        {currentStatus === "New" && (
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
            New
          </span>
        )}
        {currentStatus === "Under Review" && (
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#D97706]">
            Under Review
          </span>
        )}
        {currentStatus === "Resolved" && (
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#EAF7EE] text-[#0B6B40]">
            Resolved
          </span>
        )}
      </div>

      {/* 1. TOP METADATA CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-[#737373]">Subject</p>
            <p className="text-sm font-bold text-[#111827] mt-1">
              {d.subject}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#737373]">Category</p>
            <div className="mt-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                {d.category}
              </span>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#737373]">Submitted</p>
            <p className="text-sm font-semibold text-[#111827] mt-1">
              {d.dateSubmitted}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#737373]">Group</p>
            <p className="text-sm font-bold text-[#111827] mt-1">
              {d.group}
            </p>
          </div>
        </div>
      </div>

      {/* 2. MEMBER CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Member</h3>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E5E7EB] shrink-0 border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt={d.member}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#111827]">
              {d.member}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-[#737373]">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9CA3AF]" />
                {d.email || "tunde.akinola@gmail.com"}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#9CA3AF]" />
                {d.phone || "+234 803 456 7890"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COMPLAINT DETAILS CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Complaint Details</h3>
        </div>
        <p className="text-sm text-[#374151] italic leading-relaxed">
          "{d.complaint}"
        </p>
      </div>

      {/* 4. SUPPORTING EVIDENCE (1) CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">
            Supporting Evidence (1)
          </h3>
        </div>

        <div className="inline-flex items-center justify-between gap-4 p-3 rounded-xl border border-[#E5E7EB] bg-white w-full sm:w-auto min-w-[280px] sm:min-w-[340px] max-w-full shadow-2xs">
          <div className="flex items-center gap-3">
            {/* Mock Thumbnail Preview */}
            <div className="w-12 h-10 rounded-md border border-[#0284C7]/40 bg-[#F0F9FF] p-1 flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#BAE6FD]/40 rounded-sm flex items-center justify-center text-[8px] font-bold text-[#0369A1]">
                DOC
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111827]">
                {d.evidenceFile || "Group_agreement.png"}
              </p>
              <p className="text-[11px] text-[#737373]">
                {d.evidenceSize || "PNG · 412 KB"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#737373]">
            <button
              title="Preview attachment"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors cursor-pointer hover:text-[#111827]"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              title="Download attachment"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors cursor-pointer hover:text-[#111827]"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. GROUP CONTEXT CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Group Context</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-xs">
          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Group</span>
            <span className="font-bold text-[#111827]">
              {d.groupContext?.name || "Yaba Ajo Group"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Contribution Cycle</span>
            <span className="font-bold text-[#111827]">
              {d.groupContext?.cycle || "Monthly"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Payout Order (Current)</span>
            <span className="font-bold text-[#111827]">
              {d.groupContext?.payoutOrder || "Member 4 of 20"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#737373]">Group Admin</span>
            <span className="font-bold text-[#111827]">
              {d.groupContext?.admin || "John Doe"}
            </span>
          </div>
        </div>
      </div>

      {/* 6. TRANSACTION DETAILS CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Receipt className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">
            Transaction Details
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-xs">
          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Transaction ID</span>
            <span className="font-mono font-bold text-[#111827]">
              {d.transaction?.id || "TRX-082746301"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Transaction Type</span>
            <span className="font-semibold text-[#111827]">
              {d.transaction?.type || "Contribution"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Amount</span>
            <span className="font-bold text-[#111827]">
              {d.transaction?.amount || "₦10,000"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Transaction Date</span>
            <span className="text-[#111827]">
              {d.transaction?.date || "Nov 14, 2026, 10:20 AM"}
            </span>
          </div>

          <div className="flex items-center justify-between border-b sm:border-b-0 pb-2 sm:pb-0 border-[#F3EFEA]">
            <span className="text-[#737373]">Payment Method</span>
            <span className="text-[#111827]">
              {d.transaction?.method || "Bank Card (Visa ****4821)"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#737373]">Transaction Status</span>
            <span className="font-semibold text-[#D97706]">
              {d.transaction?.status || "Pending"}
            </span>
          </div>
        </div>
      </div>

      {/* 7. ACTIONS CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Actions</h3>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleMarkUnderReview}
            className="px-4 py-2 border border-[#0B6B40] text-[#0B6B40] hover:bg-[#0B6B40]/10 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Clock className="w-4 h-4" />
            <span>Mark Under Review</span>
          </button>
          <button
            onClick={handleResolveDispute}
            className="px-4 py-2 border border-[#0B6B40] text-[#0B6B40] hover:bg-[#0B6B40]/10 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Resolve Dispute</span>
          </button>
        </div>
      </div>

      {/* 8. SEND NOTE CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Send Note</h3>
        </div>

        <form onSubmit={handleSendNote} className="space-y-3">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Respond to member regarding the complaint..."
            rows={4}
            className="w-full p-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] focus:bg-white text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B] transition-colors resize-y"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#0B5D4B] hover:bg-[#074638] text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Note</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

