import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  User,
  Mail,
  Phone,
  MessageSquare,
  Paperclip,
  Eye,
  Download,
  Clock,
  Check,
  Send,
  CheckCircle2,
  X,
  MousePointerClick,
} from "lucide-react";

export default function ViewSupportDetail({ request, onBack }) {
  const [currentStatus, setCurrentStatus] = useState(request?.status || "New");
  const [noteText, setNoteText] = useState("");
  const [actionNotice, setActionNotice] = useState(null);

  const req = request || {
    id: "DSP-00124",
    subject: "How do I add a new payment card?",
    sender: "Tunde Akinola",
    email: "tunde.akinola@gmail.com",
    phone: "+234 803 456 7890",
    role: "Member",
    category: "Wallet",
    dateSubmitted: "Nov 14, 2026, 10:24 AM",
    status: "New",
    message:
      "Hello, I want to add a new payment card to my account so I can make my contributions automatically. I've tried from the Wallet section but I'm not seeing the option. Please guide me on the steps.",
    attachment: "Group_agreement.png",
    attachmentSize: "PNG · 412 KB",
  };

  const handleMarkInProgress = () => {
    setCurrentStatus("In Progress");
    setActionNotice("Support request marked as In Progress.");
    setTimeout(() => setActionNotice(null), 3000);
  };

  const handleResolveRequest = () => {
    setCurrentStatus("Resolved");
    setActionNotice("Support request resolved successfully.");
    setTimeout(() => setActionNotice(null), 3000);
  };

  const handleSendNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    setActionNotice("Response note sent to member successfully.");
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
          <span>View Request</span>
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
          Support Request
        </h2>
        <span className="px-2.5 py-0.5 rounded bg-[#F3F4F6] text-[#374151] font-mono text-xs font-bold">
          {req.id}
        </span>
        {currentStatus === "New" && (
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
            New
          </span>
        )}
        {currentStatus === "In Progress" && (
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#D97706]">
            In Progress
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-[#737373]">Subject</p>
            <p className="text-sm font-bold text-[#111827] mt-1">
              {req.subject}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#737373]">Category</p>
            <div className="mt-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F3E8FF] text-[#9333EA]">
                {req.category}
              </span>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#737373]">Date Received</p>
            <p className="text-sm font-semibold text-[#111827] mt-1">
              {req.dateSubmitted}
            </p>
          </div>
        </div>
      </div>

      {/* 2. SENDER INFORMATION CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Sender Information</h3>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E5E7EB] shrink-0 border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt={req.sender}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-[#111827]">
                {req.sender}
              </p>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                {req.role}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-[#737373]">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9CA3AF]" />
                {req.email || "tunde.akinola@gmail.com"}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#9CA3AF]" />
                {req.phone || "+234 803 456 7890"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MESSAGE DETAILS CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Message Details</h3>
        </div>
        <p className="text-sm text-[#374151] leading-relaxed">
          "{req.message}"
        </p>
      </div>

      {/* 4. ATTACHMENTS (1) CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Attachments (1)</h3>
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
                {req.attachment || "Group_agreement.png"}
              </p>
              <p className="text-[11px] text-[#737373]">
                {req.attachmentSize || "PNG · 412 KB"}
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

      {/* 5. ACTIONS CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <MousePointerClick className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Actions</h3>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleMarkInProgress}
            className="px-4 py-2 border border-[#0B6B40] text-[#0B6B40] hover:bg-[#0B6B40]/10 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Clock className="w-4 h-4" />
            <span>Mark as In Progress</span>
          </button>
          <button
            onClick={handleResolveRequest}
            className="px-4 py-2 border border-[#0B6B40] text-[#0B6B40] hover:bg-[#0B6B40]/10 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Resolve Request</span>
          </button>
        </div>
      </div>

      {/* 6. SEND NOTE CARD */}
      <div className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#4B5563]" />
          <h3 className="text-sm font-bold text-[#111827]">Send Note</h3>
        </div>

        <form onSubmit={handleSendNote} className="space-y-3">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Respond to member regarding the request..."
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

