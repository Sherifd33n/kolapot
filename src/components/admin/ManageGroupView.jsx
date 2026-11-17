import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  Users,
  Coins,
  RefreshCw,
  Calendar,
  Clock,
  Share2,
  Globe,
  FileText,
  AlertTriangle,
  ChevronRight,
  Link as LinkIcon,
  ExternalLink,
  Check,
  X,
  Search,
  ChevronDown,
  Bell,
  Send,
  Megaphone,
  MessageSquare,
  PieChart,
  AlertCircle,
  CheckCircle2,
  User,
  ShieldCheck,
  Activity,
  BarChart3,
  MinusCircle,
  XCircle,
  Info,
  Paperclip,
  Eye,
  Download,
  Layers,
  MousePointerClick,
  Upload,
  Mail,
  Phone,
  ChevronLeft,
} from "lucide-react";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import {
  MdCheckCircle,
  MdOutlineCheckCircleOutline,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { BsChatText, BsDatabaseAdd, BsWallet } from "react-icons/bs";
import { CiCalendar, CiCircleInfo } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { GoAlert, GoArrowUp, GoDatabase } from "react-icons/go";
import { BiRightArrowAlt } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { PiLinkSimple } from "react-icons/pi";

export default function ManageGroupView({ group, onBack }) {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Members",
    "Invitations",
    "Contributions",
    "Payouts",
    "Group Settings",
    "Group Health",
    "Disputes",
  ];

  // Mock data
  const members = [
    {
      name: "Jane Doe (You)",
      role: "Admin",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
    {
      name: "Jane Doe",
      role: "Member",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
    {
      name: "Jane Doe",
      role: "Member",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
    {
      name: "Jane Doe",
      role: "Member",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
    {
      name: "Jane Doe",
      role: "Member",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
    {
      name: "Jane Doe",
      role: "Member",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
    {
      name: "Jane Doe",
      role: "Member",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
    {
      name: "Jane Doe",
      role: "Member",
      payoutPosition: "1st Cycle",
      totalContributed: "₦400,000",
      status: "Active",
      joinedOn: "5 Nov 2026",
    },
  ];

  const groupMembers = [
    {
      name: "Jane Doe (You)",
      payoutPosition: "1st Cycle",
      thisCycle: "₦50,000",
      status: "Paid",
    },
    {
      name: "Jane Doe (You)",
      payoutPosition: "1st Cycle",
      thisCycle: "₦50,000",
      status: "Paid",
    },
    {
      name: "Jane Doe (You)",
      payoutPosition: "1st Cycle",
      thisCycle: "₦50,000",
      status: "Paid",
    },
    {
      name: "Jane Doe (You)",
      payoutPosition: "1st Cycle",
      thisCycle: "—",
      status: "Pending",
    },
  ];

  const recentActivity = [
    {
      name: "Kunle Adeola",
      action: "made a contribution",
      amount: "₦50,000",
      date: "12 October 2026, 10:24 AM",
    },
    {
      name: "Kunle Adeola",
      action: "made a contribution",
      amount: "₦50,000",
      date: "12 October 2026, 10:24 AM",
    },
    {
      name: "Kunle Adeola",
      action: "made a contribution",
      amount: "₦50,000",
      date: "12 October 2026, 10:24 AM",
    },
    {
      name: "Kunle Adeola",
      action: "made a contribution",
      amount: "₦50,000",
      date: "12 October 2026, 10:24 AM",
    },
  ];

  const newInvitations = [
    {
      name: "Jane Doe",
      source: "Group Discovery",
      sourceIcon: "globe",
      requestedOn: "3 Nov 2026, 10:24 AM",
    },
    {
      name: "Jane Doe",
      source: "Invitation",
      sourceIcon: "link",
      requestedOn: "3 Nov 2026, 10:24 AM",
    },
  ];

  const invitationHistory = [
    {
      name: "Jane Doe",
      source: "Group Discovery",
      sourceIcon: "globe",
      requestedOn: "1 Nov 2026, 10:24 AM",
      responseDate: "2 Nov 2026, 10:06 AM",
      status: "Accepted",
    },
    {
      name: "Jane Doe",
      source: "Group Discovery",
      sourceIcon: "globe",
      requestedOn: "1 Nov 2026, 10:24 AM",
      responseDate: "2 Nov 2026, 10:06 AM",
      status: "Accepted",
    },
    {
      name: "Jane Doe",
      source: "Group Discovery",
      sourceIcon: "globe",
      requestedOn: "1 Nov 2026, 10:24 AM",
      responseDate: "2 Nov 2026, 10:06 AM",
      status: "Accepted",
    },
  ];

  // Reminder Modal & Menu State
  const [reminderModalOpen, setReminderModalOpen] = useState(false);
  const [reminderMenuOpen, setReminderMenuOpen] = useState(false);
  const [reminderType, setReminderType] = useState("Remind unpaid members");
  const [reminderMessage, setReminderMessage] = useState("");
  const [reminderChannels, setReminderChannels] = useState({
    whatsapp: false,
    inApp: false,
    email: false,
  });

  // Confirm Payout Modal State (Image 3)
  const [confirmPayoutModalOpen, setConfirmPayoutModalOpen] = useState(false);
  const [confirmPayoutData, setConfirmPayoutData] = useState({
    recipient: "Tunde M.",
    position: "3rd Cycle",
    scheduledDate: "5 Nov 2026",
    gross: "₦600,000",
    deductions: "₦0",
    net: "₦600,000",
  });

  // Group Settings State (Image 2)
  const [groupSettings, setGroupSettings] = useState({
    groupName: "Unity Ajo Circle",
    groupType: "Ajo (Rotational Savings)",
    groupDescription:
      "A trusted savings group for members to contribute and receive payouts.",
    groupPrivacy: "Private (Invitation only)",
    maxMembers: "12",
    startDate: "5 Nov 2026",
    whatsappLink: "https://pallypot.com/invite/MARK8D?utm_source=kk.com",
    contributionAmount: "₦50,000",
    contributionFrequency: "Monthly",
    gracePeriod: "3 days",
    latePaymentFee: "₦2,000",
    additionalRule: "Late payment won't be tolerated.",
  });

  // Disputes State & Mock Data (Images 1 & 2)
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [disputeNote, setDisputeNote] = useState("");
  const [disputeSearch, setDisputeSearch] = useState("");
  const [disputeFilterCategory, setDisputeFilterCategory] =
    useState("All Categories");
  const [disputeFilterStatus, setDisputeFilterStatus] =
    useState("All Statuses");
  const [disputeFilterTime, setDisputeFilterTime] = useState("All Time");

  const [disputesList, setDisputesList] = useState([
    {
      id: "DSP-00124",
      member: "Jane Doe",
      memberFull: "Tunde Akinola",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Group Rules",
      subject: "Disagreement on payout order",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      submittedDate: "Nov 14, 2026, 10:24 AM",
      status: "New",
      groupContext: {
        group: "Yaba Ajo Group",
        cycle: "Monthly",
        order: "Member 4 of 20",
      },
      evidence: {
        name: "Group_agreement.png",
        size: "PNG • 412 KB",
      },
    },
    {
      id: "DSP-00124",
      member: "Jane Doe",
      memberFull: "Tunde Akinola",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Membership",
      subject: "Disagreement on payout order",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      submittedDate: "Nov 14, 2026, 10:24 AM",
      status: "In Review",
      groupContext: {
        group: "Yaba Ajo Group",
        cycle: "Monthly",
        order: "Member 4 of 20",
      },
      evidence: {
        name: "Group_agreement.png",
        size: "PNG • 412 KB",
      },
    },
    {
      id: "DSP-00124",
      member: "Jane Doe",
      memberFull: "Tunde Akinola",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Contributions",
      subject: "Disagreement on payout order",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      submittedDate: "Nov 14, 2026, 10:24 AM",
      status: "Resolved",
      groupContext: {
        group: "Yaba Ajo Group",
        cycle: "Monthly",
        order: "Member 4 of 20",
      },
      evidence: {
        name: "Group_agreement.png",
        size: "PNG • 412 KB",
      },
    },
    {
      id: "DSP-00124",
      member: "Jane Doe",
      memberFull: "Tunde Akinola",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Payout",
      subject: "Disagreement on payout order",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      submittedDate: "Nov 14, 2026, 10:24 AM",
      status: "Resolved",
      groupContext: {
        group: "Yaba Ajo Group",
        cycle: "Monthly",
        order: "Member 4 of 20",
      },
      evidence: {
        name: "Group_agreement.png",
        size: "PNG • 412 KB",
      },
    },
    {
      id: "DSP-00124",
      member: "Jane Doe",
      memberFull: "Tunde Akinola",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Membership",
      subject: "Disagreement on payout order",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      submittedDate: "Nov 14, 2026, 10:24 AM",
      status: "In Review",
      groupContext: {
        group: "Yaba Ajo Group",
        cycle: "Monthly",
        order: "Member 4 of 20",
      },
      evidence: {
        name: "Group_agreement.png",
        size: "PNG • 412 KB",
      },
    },
    {
      id: "DSP-00124",
      member: "Jane Doe",
      memberFull: "Tunde Akinola",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Contributions",
      subject: "Disagreement on payout order",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      submittedDate: "Nov 14, 2026, 10:24 AM",
      status: "Resolved",
      groupContext: {
        group: "Yaba Ajo Group",
        cycle: "Monthly",
        order: "Member 4 of 20",
      },
      evidence: {
        name: "Group_agreement.png",
        size: "PNG • 412 KB",
      },
    },
    {
      id: "DSP-00124",
      member: "Jane Doe",
      memberFull: "Tunde Akinola",
      email: "tunde.akinola@gmail.com",
      phone: "+234 803 456 7890",
      category: "Payout",
      subject: "Disagreement on payout order",
      complaint:
        "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle.",
      submittedDate: "Nov 14, 2026, 10:24 AM",
      status: "Resolved",
      groupContext: {
        group: "Yaba Ajo Group",
        cycle: "Monthly",
        order: "Member 4 of 20",
      },
      evidence: {
        name: "Group_agreement.png",
        size: "PNG • 412 KB",
      },
    },
  ]);

  // Cycle Contributions Mock Data (Image 1)
  const cycleContributions = [
    {
      member: "Jane Doe (You)",
      expected: "₦400,000",
      paid: "₦400,000",
      dueDate: "5 Nov 2026",
      paymentDate: "3 Nov 2026",
      status: "Successful",
    },
    {
      member: "Jane Doe",
      expected: "₦400,000",
      paid: "—",
      dueDate: "5 Nov 2026",
      paymentDate: "—",
      status: "Pending",
    },
    {
      member: "Jane Doe",
      expected: "₦400,000",
      paid: "₦400,000",
      dueDate: "5 Nov 2026",
      paymentDate: "3 Nov 2026",
      status: "Successful",
    },
    {
      member: "Jane Doe",
      expected: "₦400,000",
      paid: "₦400,000",
      dueDate: "5 Nov 2026",
      paymentDate: "3 Nov 2026",
      status: "Successful",
    },
  ];

  // Payout Schedule Mock Data (Image 2)
  const payoutSchedule = [
    {
      position: "1st",
      recipient: "Jane Doe (You)",
      amount: "₦600,000",
      scheduledDate: "5 Nov 2026",
      status: "Completed",
      hasAction: false,
    },
    {
      position: "1st",
      recipient: "Jane Doe",
      amount: "₦600,000",
      scheduledDate: "5 Dec 2026",
      status: "Due",
      hasAction: true,
    },
    {
      position: "1st",
      recipient: "Jane Doe",
      amount: "₦600,000",
      scheduledDate: "5 Jan 2027",
      status: "Scheduled",
      hasAction: false,
    },
    {
      position: "1st",
      recipient: "Jane Doe",
      amount: "₦600,000",
      scheduledDate: "5 Jan 2027",
      status: "Scheduled",
      hasAction: false,
    },
    {
      position: "1st",
      recipient: "Jane Doe",
      amount: "₦600,000",
      scheduledDate: "5 Jan 2027",
      status: "Scheduled",
      hasAction: false,
    },
    {
      position: "1st",
      recipient: "Jane Doe",
      amount: "₦600,000",
      scheduledDate: "5 Jan 2027",
      status: "Scheduled",
      hasAction: false,
    },
  ];

  // Payout History Mock Data (Image 2)
  const payoutHistory = [
    {
      recipient: "Jane Doe (You)",
      gross: "₦600,000",
      deductions: "₦0",
      net: "₦600,000",
      dateProcessed: "5 Nov 2026",
      reference: "PPT784302",
      status: "Completed",
    },
    {
      recipient: "Jane Doe",
      gross: "₦600,000",
      deductions: "₦0",
      net: "₦600,000",
      dateProcessed: "5 Nov 2026",
      reference: "PPT784302",
      status: "Completed",
    },
  ];

  // Filtered Disputes
  const filteredDisputes = disputesList.filter((dsp) => {
    const matchesSearch =
      disputeSearch === "" ||
      dsp.id.toLowerCase().includes(disputeSearch.toLowerCase()) ||
      dsp.member.toLowerCase().includes(disputeSearch.toLowerCase()) ||
      dsp.subject.toLowerCase().includes(disputeSearch.toLowerCase());
    const matchesCategory =
      disputeFilterCategory === "All Categories" ||
      dsp.category === disputeFilterCategory;
    const matchesStatus =
      disputeFilterStatus === "All Statuses" ||
      dsp.status === disputeFilterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // ==================== DISPUTE DETAILS VIEW ====================
  if (activeTab === "Disputes" && selectedDispute) {
    return (
      <div className="space-y-5 animate-tab-content max-w-5xl mx-auto">
        {/* Back to Disputes */}
        <button
          type="button"
          onClick={() => setSelectedDispute(null)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A2E26] hover:text-[#0B5D4B] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Disputes</span>
        </button>

        {/* Dispute Details Header & Badges */}
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-[#1A2E26]">Dispute Details</h2>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F3F4F6] text-[#374151]">
            {selectedDispute.id || "DSP-00124"}
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
              selectedDispute.status === "New"
                ? "bg-[#FEE2E2] text-[#EF4444]"
                : selectedDispute.status === "In Review"
                  ? "bg-[#FEF3C7] text-[#D97706]"
                  : "bg-[#DCFCE7] text-[#16A34A]"
            }`}
          >
            {selectedDispute.status || "New"}
          </span>
        </div>

        {/* Card 1: Subject, Category, Submitted */}
        <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[#7E7F7D]">Subject</p>
            <h3 className="text-sm sm:text-base font-bold text-[#1A2E26] mt-1">
              {selectedDispute.subject || "Disagreement on payout order"}
            </h3>
            <p className="text-xs text-[#7E7F7D] mt-4">Submitted</p>
            <p className="text-xs sm:text-sm font-semibold text-[#1A2E26] mt-0.5">
              {selectedDispute.submittedDate || "Nov 14, 2026, 10:24 AM"}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#7E7F7D] text-right">Category</p>
            <span className="inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A]">
              {selectedDispute.category || "Group Rules"}
            </span>
          </div>
        </div>

        {/* Card 2: Member */}
        <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#1A2E26]">
            <User className="w-5 h-5 text-[#1A2E26]" />
            <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
              Member
            </h4>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E2E8F0] shrink-0 border border-[#CBD5E1]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                alt={selectedDispute.memberFull || "Member"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <h5 className="text-sm font-bold text-[#1A2E26]">
                {selectedDispute.memberFull || "Tunde Akinola"}
              </h5>
              <div className="flex items-center gap-2 text-xs text-[#7E7F7D]">
                <Mail className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>
                  {selectedDispute.email || "tunde.akinola@gmail.com"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#7E7F7D]">
                <Phone className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>{selectedDispute.phone || "+234 803 456 7890"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Complaint Details */}
        <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#1A2E26]">
            <BsChatText className="w-5 h-5 text-[#1A2E26]" />
            <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
              Complaint Details
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#1A2E26] font-medium leading-relaxed">
            &ldquo;
            {selectedDispute.complaint ||
              "I disagree with the current payout order. Based on our group agreement, it should be my turn this cycle."}
            &rdquo;
          </p>
        </div>

        {/* Card 4: Supporting Evidence (1) */}
        <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#1A2E26]">
            <PiLinkSimple className="w-6 h-6 text-[#1A2E26]" />
            <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
              Supporting Evidence (1)
            </h4>
          </div>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-3.5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-14 h-10 rounded-lg bg-[#38BDF8]/20 border-2 border-[#0284C7] p-1 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-white/80 rounded flex flex-col justify-center gap-0.5 px-1">
                  <div className="h-1 w-3/4 bg-[#0284C7] rounded"></div>
                  <div className="h-1 w-1/2 bg-[#94A3B8] rounded"></div>
                  <div className="h-1 w-2/3 bg-[#94A3B8] rounded"></div>
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-[#1A2E26] truncate">
                  {selectedDispute.evidence?.name || "Group_agreement.png"}
                </p>
                <p className="text-[11px] text-[#7E7F7D]">
                  {selectedDispute.evidence?.size || "PNG • 412 KB"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                title="View evidence"
                className="p-1.5 text-[#64748B] hover:text-[#0B5D4B] hover:bg-[#F1F5F9] rounded-lg transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                type="button"
                title="Download evidence"
                className="p-1.5 text-[#64748B] hover:text-[#0B5D4B] hover:bg-[#F1F5F9] rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 5: Group Context */}
        <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#1A2E26]">
            <Layers className="w-5 h-5 text-[#1A2E26]" />
            <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
              Group Context
            </h4>
          </div>
          <div className="space-y-3 max-w-md">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#7E7F7D]">Group</span>
              <span className="font-semibold text-[#1A2E26]">
                {selectedDispute.groupContext?.group || "Yaba Ajo Group"}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#7E7F7D]">Contribution Cycle</span>
              <span className="font-semibold text-[#1A2E26]">
                {selectedDispute.groupContext?.cycle || "Monthly"}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#7E7F7D]">Payout Order (Current)</span>
              <span className="font-semibold text-[#1A2E26]">
                {selectedDispute.groupContext?.order || "Member 4 of 20"}
              </span>
            </div>
          </div>
        </div>

        {/* Card 6: Actions */}
        <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#1A2E26]">
            <MousePointerClick className="w-5 h-5 text-[#1A2E26]" />
            <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
              Actions
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => {
                const updated = { ...selectedDispute, status: "In Review" };
                setSelectedDispute(updated);
                setDisputesList((prev) =>
                  prev.map((d) => (d.id === selectedDispute.id ? updated : d)),
                );
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#F0FDF4] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Clock className="w-4 h-4" />
              <span>Mark Under Review</span>
            </button>
            <button
              type="button"
              onClick={() => {
                const updated = { ...selectedDispute, status: "Resolved" };
                setSelectedDispute(updated);
                setDisputesList((prev) =>
                  prev.map((d) => (d.id === selectedDispute.id ? updated : d)),
                );
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#F0FDF4] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Resolve Dispute</span>
            </button>
            <button
              type="button"
              onClick={() => alert("Dispute escalated to Platform Admin.")}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#F0FDF4] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Escalate to Platform Admin</span>
            </button>
          </div>
        </div>

        {/* Card 7: Send Note */}
        <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#1A2E26]">
            <BsChatText className="w-5 h-5 text-[#1A2E26]" />
            <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
              Send Note
            </h4>
          </div>
          <textarea
            rows={4}
            value={disputeNote}
            onChange={(e) => setDisputeNote(e.target.value)}
            placeholder="Respond to member regarding the complaint..."
            className="w-full bg-[#FBF8F2]/40 border border-[#E5E0D6] rounded-xl p-3.5 text-xs sm:text-sm text-[#1A2E26] placeholder-[#9CA3AF] focus:outline-hidden focus:border-[#0B5D4B] resize-none"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                if (disputeNote.trim()) {
                  alert("Note sent successfully to member!");
                  setDisputeNote("");
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Note</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-tab-content max-w-5xl mx-auto">
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1A2E26] hover:text-[#0B5D4B] transition-colors cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        <span>Back to My Groups</span>
      </button>

      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#1A2E26]">Manage Group</h2>
        <p className="text-sm text-[#7E7F7D] mt-1 font-normal">
          Oversee members, contributions, payouts and group settings.
        </p>
      </div>

      {/* Group Info Card */}
      <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-[8px] bg-[#ECD7CE] text-[#783928] font-bold text-lg flex items-center justify-center shrink-0">
            {group?.initial || "UAC"}
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-lg font-bold text-[#1A2E26]">
                {group?.name || "Unity Ajo Circle"}
              </h3>
              <span
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  group?.badgeColor || "bg-[#DDF0FA] text-[#136B94]"
                }`}
              >
                {group?.status || "Upcoming"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#7B8078] mt-0.5">
              {group?.type || "Ajo"} (Rotational Savings) | Private (Invitation
              only)
            </p>
          </div>
        </div>

        {/* Share Link Button */}
        <button
          type="button"
          onClick={() =>
            navigator.clipboard?.writeText(
              group?.inviteLink || "https://pallypot.com/invite/MARK8D",
            )
          }
          className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 bg-[#629741] hover:bg-[#073529] text-white text-sm font-semibold rounded-[6px] transition-all shadow-xs cursor-pointer shrink-0"
        >
          <LinkIcon className="w-4 h-4" />
          <span>Share link</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-[#E5E0D6] overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-0 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setSelectedDispute(null);
              }}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all cursor-pointer relative ${
                activeTab === tab
                  ? "text-[#1A2E26] font-semibold"
                  : "text-[#7E7F7D] hover:text-[#1A2E26]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A2E26] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-tab-content">
        {/* ============== OVERVIEW TAB ============== */}
        {activeTab === "Overview" && (
          <div className="space-y-6">
            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Members */}
              <div className="bg-white rounded-[8px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#000000] font-medium">Members</p>
                  <p className="text-lg font-bold text-[#1A2E26]">8/10</p>
                </div>
              </div>

              {/* Total Contributions */}
              <div className="bg-white rounded-[8px] border border-[#F0EBE1] p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <BsDatabaseAdd className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#000000] font-medium">
                    Total Contributions
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">₦400,000</p>
                </div>
              </div>

              {/* Current Cycle */}
              <div className="bg-white rounded-[8px] border border-[#F0EBE1] p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <IoCalendarClearOutline className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#000000] font-medium">
                    Current Cycle
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">1st Cycle</p>
                </div>
              </div>

              {/* Next Payout */}
              <div className="bg-white rounded-[8px] border border-[#F0EBE1] p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <BsWallet className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#000000] font-medium">
                    Next Payout
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">5 Nov 2026</p>
                </div>
              </div>
            </div>

            {/* Current Cycle + Group Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Current Cycle Section */}
              <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#1A2E26]">
                      Current cycle
                    </h4>
                    <p className="text-sm text-[#7E7F7D]">
                      1st Cycle (Nov 2026)
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-xs sm:text-sm font-semibold text-[#0B5D4B] hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    View Payout Schedule
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Contribution progress */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1A2E26] font-medium">
                      Contributions: 400,000 of 600,000
                    </span>
                    <span className="text-[#000000] text-[11px] font-semibold px-2 py-0.5 rounded-full">
                      8 of 10 members paid
                    </span>
                  </div>
                  <div className="w-full h-4 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0B5D4B] rounded-full transition-all"
                      style={{ width: "66%" }}
                    />
                  </div>
                </div>

                {/* Cycle dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F9FAFB] rounded-xl p-3 flex gap-2 items-center">
                    <LuCalendarDays size={30} />
                    <div>
                      <p className="text-[11px] text-[#7E7F7D] mb-0.5">
                        Cycle start Date
                      </p>
                      <p className="text-sm font-semibold text-[#1A2E26]">
                        11 August 2026
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-xl p-3 flex gap-2 items-center">
                    <LuCalendarDays size={30} />
                    <div>
                      <p className="text-[11px] text-[#7E7F7D] mb-0.5">
                        Cycle End Date
                      </p>
                      <p className="text-sm font-semibold text-[#1A2E26]">
                        11 August 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payout Recipient */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#24BC6321] border border-[#DCFCE7] rounded-xl p-4 sm:p-5 justify-between">
                  <div className="flex gap-4 items-center">
                    <TfiWallet className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" color="#1BC25B" />
                    <div>
                      <p className="text-xs text-[#000000] mb-0.5 sm:mb-1">
                        Payout Recipient
                      </p>
                      <p className="text-sm font-bold text-[#1A2E26]">
                        You (Admin)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <IoCalendarClearOutline className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" color="#1BC25B" />
                    <div>
                      <p className="text-xs text-[#000000] mb-0.5 sm:mb-1">Payout Date</p>
                      <p className="text-sm font-bold text-[#1A2E26]">
                        5 Nov 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Rules Section */}
              <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 space-y-4">
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Group rules
                </h4>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <GoDatabase className="w-5 h-5" />
                      <p className="text-sm text-[#000000] font-medium">
                        Contribution amount
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[#1A2E26]">
                      ₦50,000 per month
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <Calendar className="w-5 h-5" />
                      <p className="text-sm text-[#000000] font-medium">
                        Contribution frequency
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[#1A2E26]">
                      Monthly
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <RefreshCw className="w-5 h-5" />
                      <p className="text-sm text-[#000000] font-medium">
                        Payout method
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[#1A2E26]">
                      Rotational (turn-by-turn)
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <GoAlert className="w-5 h-5" />
                      <p className="text-sm text-[#000000] font-medium">
                        Late payment rule
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[#1A2E26]">
                      ₦2,000 late fee after 3 days
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center shrink-0">
                      <FileText className="w-5 h-5" />
                      <p className="text-sm text-[#000000] font-medium">
                        Other rules
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[#1A2E26] text-right max-w-xs">
                      All members must contribute on or before the due date.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Members + Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Group Members Table */}
              <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-[#1A2E26]">
                    Group Members (8)
                  </h4>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Members")}
                    className="text-xs sm:text-sm flex items-center font-semibold text-[#0B5D4B] hover:underline cursor-pointer"
                  >
                    View All <BiRightArrowAlt />
                  </button>
                </div>

                {/* Table Header */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-[#F3F4F6]">
                        <th className="text-sm font-semibold text-[#7E7F7D] pb-2.5 pr-3">
                          Member
                        </th>
                        <th className="text-sm font-semibold text-[#7E7F7D] pb-2.5 pr-3">
                          Payout Position
                        </th>
                        <th className="text-sm font-semibold text-[#7E7F7D] pb-2.5 pr-3">
                          This Cycle
                        </th>
                        <th className="text-sm font-semibold text-[#7E7F7D] pb-2.5">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupMembers.map((member, i) => (
                        <tr
                          key={i}
                          className="border-b border-[#F9FAFB] last:border-b-0"
                        >
                          <td className="py-3 pr-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-xs font-bold shrink-0">
                                J
                              </div>
                              <span className="text-xs font-medium text-[#1A2E26] whitespace-nowrap">
                                {member.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 pr-3 text-xs font-medium text-[#1A2E26]">
                            {member.payoutPosition}
                          </td>
                          <td className="py-3 pr-3 text-xs font-semibold text-[#1A2E26]">
                            {member.thisCycle}
                          </td>
                          <td className="py-3">
                            <span
                              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                                member.status === "Paid"
                                  ? "bg-[#DCFCE7] text-[#16A34A]"
                                  : "bg-[#FEF9C3] text-[#CA8A04]"
                              }`}
                            >
                              {member.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-[#1A2E26]">
                    Recent Activity
                  </h4>
                  <button
                    type="button"
                    className="text-xs sm:text-sm flex items-center font-semibold text-[#0B5D4B] hover:underline cursor-pointer"
                  >
                    View All <BiRightArrowAlt />
                  </button>
                </div>

                <div className="space-y-7">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#AAB0CF29] text-[#747BA2] flex items-center justify-center text-sm font-bold shrink-0">
                        <GoArrowUp size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-[#1A2E26]">
                          <span className="font-bold">{activity.name}</span>{" "}
                          {activity.action}
                        </p>
                        <p className="text-xs text-[#7E7F7D]">
                          {activity.amount} · {activity.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Group Banner */}
            <div className="rounded-2xl bg-white p-2">
              <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#8FEFAA4F] rounded-2xl">
                <div className="flex flex-col min-[480px]:flex-row items-start min-[480px]:items-center gap-3 sm:gap-4">
                  <FaWhatsappSquare className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 text-[#25CF43]" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#000000]">
                      WhatsApp group
                    </h4>
                    <p className="text-xs sm:text-sm text-[#7E7F7D] mt-0.5">
                      Stay connected with your savings community.
                    </p>
                    <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 mt-2 text-xs">
                      <span className="flex items-center gap-1.5 text-[#19572B]">
                        <MdCheckCircle className="w-4 h-4 text-[#25CF43] shrink-0" />{" "}
                        Give contribution reminders
                      </span>
                      <span className="flex items-center gap-1.5 text-[#19572B]">
                        <MdCheckCircle className="w-4 h-4 text-[#25CF43] shrink-0" />{" "}
                        Receive payout updates
                      </span>
                      <span className="flex items-center gap-1.5 text-[#19572B]">
                        <MdCheckCircle className="w-4 h-4 text-[#25CF43] shrink-0" />{" "}
                        Chat with group members
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0B5D4B] hover:bg-[#1DA851] text-white text-sm font-semibold rounded-[8px] transition-all cursor-pointer shrink-0"
                >
                  <span>Open WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============== MEMBERS TAB ============== */}
        {activeTab === "Members" && (
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 space-y-5">
              {/* Section Header */}
              <div>
                <h3 className="text-xl font-bold text-[#1A2E26]">
                  Members (12)
                </h3>
                <p className="text-xs sm:text-sm text-[#7E7F7D] mt-1">
                  View group members, their payout positions and status.
                </p>
              </div>

              {/* Members Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="">
                    <tr className="border-b border-[#F3F4F6] bg-[#E5EDEC]">
                      <th className="text-xs font-semibold text-[#000000] p-3 pr-4">
                        Member
                      </th>
                      <th className="text-xs font-semibold text-[#000000] p-3 pr-4">
                        Role
                      </th>
                      <th className="text-xs font-semibold text-[#000000] p-3 pr-4">
                        Payout Position
                      </th>
                      <th className="text-xs font-semibold text-[#000000] p-3 pr-4">
                        Total Contributed
                      </th>
                      <th className="text-xs font-semibold text-[#000000] p-3 pr-4">
                        Status
                      </th>
                      <th className="text-xs font-semibold text-[#7E7F7D] p-3">
                        Joined On
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#F9FAFB] last:border-b-0"
                      >
                        {/* Member Name */}
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-[#0C967821] text-[#16A34A] flex items-center justify-center text-xs font-bold shrink-0">
                              J
                            </div>
                            <span className="text-sm font-medium text-[#000000] whitespace-nowrap">
                              {member.name}
                            </span>
                          </div>
                        </td>
                        {/* Role */}
                        <td className="py-3.5 pr-4">
                          {member.role === "Admin" ? (
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#CA8A04]">
                              Admin
                            </span>
                          ) : (
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-[#7E7F7D] bg-[#EAEDEF99]">
                              Member
                            </span>
                          )}
                        </td>
                        {/* Payout Position */}
                        <td className="py-3.5 pr-4 text-xs text-[#000000]">
                          {member.payoutPosition}
                        </td>
                        {/* Total Contributed */}
                        <td className="py-3.5 pr-4 text-sm font-bold text-[#000000]">
                          {member.totalContributed}
                        </td>
                        {/* Status */}
                        <td className="py-3.5 pr-4">
                          <span className="text-xs font-semibold text-[#16A34A] bg-[#1AD82A1F] px-2 py-0.5 rounded-full cursor-pointer hover:underline">
                            {member.status}
                          </span>
                        </td>
                        {/* Joined On */}
                        <td className="py-3.5 text-sm font-semibold text-[#000000] whitespace-nowrap">
                          {member.joinedOn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============== INVITATIONS TAB ============== */}
        {activeTab === "Invitations" && (
          <div className="space-y-6">
            {/* New Invitations */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-[#1A2E26]">
                  New Invitations (3)
                </h3>
                <p className="text-xs sm:text-sm text-[#7E7F7D] mt-1">
                  People requesting to join your group.
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#F3F4F6] bg-[#E5EDEC]">
                      <th className="text-sm font-semibold text-[#000000] py-3 pl-3 pb-3 pr-4">
                        Name
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Request Source
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Requested On
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {newInvitations.map((inv, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#F9FAFB] last:border-b-0"
                      >
                        {/* Name */}
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-[#0C967821] text-[#0B5D4B] flex items-center justify-center text-sm font-bold shrink-0">
                              J
                            </div>
                            <span className="text-sm font-medium text-[#000000]">
                              {inv.name}
                            </span>
                          </div>
                        </td>
                        {/* Request Source */}
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2">
                            {inv.sourceIcon === "globe" ? (
                              <Globe className="w-4 h-4 text-[#7E7F7D]" />
                            ) : (
                              <LinkIcon className="w-4 h-4 text-[#7E7F7D]" />
                            )}
                            <span className="text-sm text-[#000000]">
                              {inv.source}
                            </span>
                          </div>
                        </td>
                        {/* Requested On */}
                        <td className="py-3.5 pr-4 text-sm text-[#000000] whitespace-nowrap">
                          {inv.requestedOn}
                        </td>
                        {/* Actions */}
                        <td className="py-3.5">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 px-3.5 py-1.5 border border-[#FCA5A5] text-[#DC2626] text-xs font-semibold rounded-[8px] hover:bg-[#FEF2F2] transition-all cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                              Reject
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-[#0B5D4B] text-white text-xs font-semibold rounded-[8px] hover:bg-[#073529] transition-all cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              Accept
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Invitation History */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#1A2E26]">
                    Invitation History
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7E7F7D] mt-1">
                    All past invitations for this group.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <select className="appearance-none pr-8 pl-3 py-2 text-xs font-medium text-[#7E7F7D] border border-[#E5E7EB] rounded-[8px] bg-white cursor-pointer focus:border-[#0B5D4B] outline-none">
                      <option>All Source</option>
                      <option>Invitation</option>
                      <option>Group Discovery</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="appearance-none pr-8 pl-3 py-2 text-xs font-medium text-[#7E7F7D] border border-[#E5E7EB] rounded-[8px] bg-white cursor-pointer focus:border-[#0B5D4B] outline-none">
                      <option>All Status</option>
                      <option>Accepted</option>
                      <option>Rejected</option>
                      <option>Pending</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* History Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#E5EDEC]">
                    <tr className="border-b border-[#F3F4F6]">
                      <th className="text-sm font-semibold text-[#000000] py-3 pl-3 pb-3 pr-4">
                        Name
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Request Source
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Requested On
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Response Date
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invitationHistory.map((inv, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#F9FAFB] last:border-b-0"
                      >
                        {/* Name */}
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-xs font-bold shrink-0">
                              J
                            </div>
                            <span className="text-sm font-medium text-[#000000]">
                              {inv.name}
                            </span>
                          </div>
                        </td>
                        {/* Request Source */}
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-[#7E7F7D]" />
                            <span className="text-sm text-[#000000]">
                              {inv.source}
                            </span>
                          </div>
                        </td>
                        {/* Requested On */}
                        <td className="py-3.5 pr-4 text-sm text-[#000000] whitespace-nowrap">
                          {inv.requestedOn}
                        </td>
                        {/* Response Date */}
                        <td className="py-3.5 pr-4 text-sm text-[#000000] whitespace-nowrap">
                          {inv.responseDate}
                        </td>
                        {/* Status */}
                        <td className="py-3.5">
                          <span className="text-xs font-semibold bg-[#1AD82A1F] px-3 py-0.5 rounded-full text-[#16A34A] cursor-pointer hover:underline">
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============== CONTRIBUTIONS TAB ============== */}
        {activeTab === "Contributions" && (
          <div className="space-y-6">
            {/* Page Header */}
            <div>
              <h3 className="text-xl font-bold text-[#1A2E26]">
                Contribution Summary (3rd Cycle)
              </h3>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {/* Total Expected */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <GoDatabase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#16A34A]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs text-[#7E7F7D] font-medium truncate">
                    Total Expected
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-[#1A2E26] truncate">
                    ₦4,800,000
                  </p>
                </div>
              </div>

              {/* Total Collected */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#16A34A]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs text-[#7E7F7D] font-medium truncate">
                    Total Collected
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-[#1A2E26] truncate">
                    ₦3,200,000
                  </p>
                </div>
              </div>

              {/* Collection Progress */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <PieChart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#16A34A]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs text-[#7E7F7D] font-medium truncate">
                    Collection Progress
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-[#1A2E26] truncate">
                    66.7%
                  </p>
                </div>
              </div>

              {/* Outstanding */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#16A34A]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs text-[#7E7F7D] font-medium truncate">
                    Outstanding
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-[#1A2E26] truncate">
                    ₦1,600,000
                  </p>
                </div>
              </div>
            </div>

            {/* Member Contributions Card */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-4 sm:p-6 space-y-5">
              {/* Filter and Action Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap min-[380px]:flex-nowrap">
                    <span className="text-xs sm:text-sm font-bold text-[#1A2E26] shrink-0">
                      Cycle:
                    </span>
                    <div className="relative">
                      <select className="w-full appearance-none pr-8 pl-3 py-2 text-xs font-medium text-[#1A2E26] border border-[#E5E7EB] rounded-lg bg-white cursor-pointer focus:border-[#0B5D4B] outline-none">
                        <option>3rd Cycle (Nov 1 -Nov 30 2026)</option>
                        <option>2nd Cycle (Oct 1 -Oct 31 2026)</option>
                        <option>1st Cycle (Sep 1 -Sep 30 2026)</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative">
                    <select className="appearance-none pr-8 pl-3 py-2 text-xs font-medium text-[#7E7F7D] border border-[#E5E7EB] rounded-lg bg-white cursor-pointer focus:border-[#0B5D4B] outline-none">
                      <option>All Status</option>
                      <option>Successful</option>
                      <option>Pending</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Send Reminder Button + Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setReminderMenuOpen(!reminderMenuOpen)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#16A34A] text-[#16A34A] text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#F0FDF4] transition-all cursor-pointer"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Send Reminder</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  {reminderMenuOpen && (
                    <div className="absolute right-0 mt-1.5 w-full sm:w-60 bg-white rounded-xl shadow-lg border border-[#E5E0D6] py-1.5 z-20 animate-in fade-in zoom-in-95">
                      <button
                        type="button"
                        onClick={() => {
                          setReminderType("Remind unpaid members");
                          setReminderMenuOpen(false);
                          setReminderModalOpen(true);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs text-[#1A2E26] hover:bg-[#F0FDF4] flex items-center gap-2.5 transition-colors cursor-pointer"
                      >
                        <Megaphone className="w-4 h-4 text-[#16A34A]" />
                        <span>Remind unpaid members</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setReminderType("Remind overdue members");
                          setReminderMenuOpen(false);
                          setReminderModalOpen(true);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs text-[#1A2E26] hover:bg-[#F0FDF4] flex items-center gap-2.5 transition-colors cursor-pointer"
                      >
                        <Clock className="w-4 h-4 text-[#CA8A04]" />
                        <span>Remind overdue members</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setReminderType("Notify all members");
                          setReminderMenuOpen(false);
                          setReminderModalOpen(true);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs text-[#1A2E26] hover:bg-[#F0FDF4] flex items-center gap-2.5 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 text-[#2563EB]" />
                        <span>Notify all members</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setReminderType("Notify individual member");
                          setReminderMenuOpen(false);
                          setReminderModalOpen(true);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs text-[#1A2E26] hover:bg-[#F0FDF4] flex items-center gap-2.5 transition-colors cursor-pointer"
                      >
                        <User className="w-4 h-4 text-[#7E7F7D]" />
                        <span>Notify individual member</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Member Contributions Table */}
              <div className="pt-2">
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Member Contributions (3rd Cycle)
                </h4>
                <p className="text-xs text-[#7E7F7D] mt-0.5 mb-4">
                  Track contribution payments for each member in this cycle.
                </p>

                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full min-w-[650px] text-left">
                    <thead className="bg-[#E5EDEC]">
                      <tr className="border-b border-[#F3F4F6]">
                        <th className="text-xs sm:text-sm font-semibold text-[#000000] py-3 pl-3 pb-3 pr-4 whitespace-nowrap">
                          Member
                        </th>
                        <th className="text-xs sm:text-sm font-semibold text-[#000000] py-3 pb-3 pr-4 whitespace-nowrap">
                          Expected Amount
                        </th>
                        <th className="text-xs sm:text-sm font-semibold text-[#000000] py-3 pb-3 pr-4 whitespace-nowrap">
                          Amount Paid
                        </th>
                        <th className="text-xs sm:text-sm font-semibold text-[#000000] py-3 pb-3 pr-4 whitespace-nowrap">
                          Due Date
                        </th>
                        <th className="text-xs sm:text-sm font-semibold text-[#000000] py-3 pb-3 pr-4 whitespace-nowrap">
                          Payment Date
                        </th>
                        <th className="text-xs sm:text-sm font-semibold text-[#000000] py-3 pb-3 whitespace-nowrap">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cycleContributions.map((item, i) => (
                        <tr
                          key={i}
                          className="border-b border-[#F9FAFB] last:border-b-0 hover:bg-[#FBF8F2]/40 transition-colors"
                        >
                          <td className="py-3.5 pl-3 pr-4 whitespace-nowrap">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-xs font-bold shrink-0">
                                J
                              </div>
                              <span className="text-xs sm:text-sm font-medium text-[#000000]">
                                {item.member}
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 pr-4 text-xs sm:text-sm font-semibold text-[#000000] whitespace-nowrap">
                            {item.expected}
                          </td>
                          <td className="py-3.5 pr-4 text-xs sm:text-sm font-semibold text-[#000000] whitespace-nowrap">
                            {item.paid}
                          </td>
                          <td className="py-3.5 pr-4 text-xs sm:text-sm text-[#000000] whitespace-nowrap">
                            {item.dueDate}
                          </td>
                          <td className="py-3.5 pr-4 text-xs sm:text-sm text-[#000000] whitespace-nowrap">
                            {item.paymentDate}
                          </td>
                          <td className="py-3.5 whitespace-nowrap">
                            <span
                              className={`text-xs font-semibold px-3 py-0.5 rounded-full ${
                                item.status === "Successful"
                                  ? "bg-[#1AD82A1F] text-[#16A34A]"
                                  : "bg-[#FEF3C7] text-[#D97706]"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============== PAYOUTS TAB ============== */}
        {activeTab === "Payouts" && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h3 className="text-xl font-bold text-[#1A2E26]">
                Payout Overview
              </h3>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Current Cycle */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <Calendar className="w-7 h-7 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    Current Cycle
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">
                    Round 3 of 12
                  </p>
                </div>
              </div>

              {/* Next Payout Date */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <GoDatabase className="w-8 h-8 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    Next Payout Date
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">5 Nov 2026</p>
                </div>
              </div>

              {/* Next Recipient */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <User className="w-7 h-7 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    Next Recipient
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">Tunde Ali</p>
                </div>
              </div>

              {/* Total Payouts (Completed) */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    Total Payouts (Completed)
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">₦1,200,000</p>
                </div>
              </div>
            </div>

            {/* Payout Schedule Card */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Payout Schedule
                </h4>
                <p className="text-xs text-[#7E7F7D] mt-0.5">
                  Payout order, amount and status for all members in this group.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#E5EDEC]">
                    <tr className="border-b border-[#F3F4F6]">
                      <th className="text-sm font-semibold text-[#000000] py-3 pl-3 pb-3 pr-4">
                        Position
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Recipient
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Payout Amount
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Scheduled Date
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Status
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payoutSchedule.map((item, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#F9FAFB] last:border-b-0"
                      >
                        <td className="py-3.5 pl-3 pr-4">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#DCFCE7] text-[#16A34A]">
                            {item.position}
                          </span>
                        </td>
                        <td className="py-3.5 pr-4 text-sm font-medium text-[#000000]">
                          {item.recipient}
                        </td>
                        <td className="py-3.5 pr-4 text-sm font-semibold text-[#000000]">
                          {item.amount}
                        </td>
                        <td className="py-3.5 pr-4 text-sm text-[#000000] whitespace-nowrap">
                          {item.scheduledDate}
                        </td>
                        <td className="py-3.5 pr-4">
                          <span
                            className={`text-xs font-semibold px-3 py-0.5 rounded-full ${
                              item.status === "Completed"
                                ? "bg-[#1AD82A1F] text-[#16A34A]"
                                : item.status === "Due"
                                  ? "bg-[#FEF3C7] text-[#D97706]"
                                  : "bg-[#F1F5F9] text-[#64748B]"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3.5">
                          {item.hasAction ? (
                            <button
                              type="button"
                              onClick={() => {
                                setConfirmPayoutData({
                                  recipient: "Tunde M.",
                                  position: "3rd Cycle",
                                  scheduledDate:
                                    item.scheduledDate || "5 Nov 2026",
                                  gross: item.amount || "₦600,000",
                                  deductions: "₦0",
                                  net: item.amount || "₦600,000",
                                });
                                setConfirmPayoutModalOpen(true);
                              }}
                              className="px-3.5 py-1.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-xs font-semibold rounded-md transition-all cursor-pointer shadow-xs"
                            >
                              Make Payout
                            </button>
                          ) : (
                            <span className="text-sm text-[#7E7F7D]">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payout History Card */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Payout History
                </h4>
                <p className="text-xs text-[#7E7F7D] mt-0.5">
                  Record of completed payouts in this group.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#E5EDEC]">
                    <tr className="border-b border-[#F3F4F6]">
                      <th className="text-sm font-semibold text-[#000000] py-3 pl-3 pb-3 pr-4">
                        Recipient
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Gross Payout
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Deductions
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Net Amount
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Date Processed
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Reference
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payoutHistory.map((item, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#F9FAFB] last:border-b-0"
                      >
                        <td className="py-3.5 pl-3 pr-4 text-sm font-medium text-[#000000]">
                          {item.recipient}
                        </td>
                        <td className="py-3.5 pr-4 text-sm font-semibold text-[#000000]">
                          {item.gross}
                        </td>
                        <td className="py-3.5 pr-4 text-sm text-[#000000]">
                          {item.deductions}
                        </td>
                        <td className="py-3.5 pr-4 text-sm font-semibold text-[#000000]">
                          {item.net}
                        </td>
                        <td className="py-3.5 pr-4 text-sm text-[#000000] whitespace-nowrap">
                          {item.dateProcessed}
                        </td>
                        <td className="py-3.5 pr-4 text-sm text-[#000000] font-mono">
                          {item.reference}
                        </td>
                        <td className="py-3.5">
                          <span className="text-xs font-semibold bg-[#1AD82A1F] px-3 py-0.5 rounded-full text-[#16A34A]">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============== GROUP SETTINGS TAB (IMAGE 2) ============== */}
        {activeTab === "Group Settings" && (
          <div className="space-y-5">
            {/* Card 1: Group Details */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <div className="md:w-64 shrink-0 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Group Details
                </h4>
                <p className="text-xs text-[#7E7F7D]">
                  Basic information about this group.
                </p>
              </div>

              {/* Right Column: Form Fields */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Group Name
                    </label>
                    <input
                      type="text"
                      value={groupSettings.groupName}
                      onChange={(e) =>
                        setGroupSettings({
                          ...groupSettings,
                          groupName: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Group Type
                    </label>
                    <div className="relative">
                      <select
                        value={groupSettings.groupType}
                        onChange={(e) =>
                          setGroupSettings({
                            ...groupSettings,
                            groupType: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] appearance-none focus:border-[#0B5D4B] outline-none cursor-pointer"
                      >
                        <option>Ajo (Rotational Savings)</option>
                        <option>Esusu</option>
                        <option>Adashi</option>
                        <option>Target Savings</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                    Group Description
                  </label>
                  <textarea
                    rows={2}
                    value={groupSettings.groupDescription}
                    onChange={(e) =>
                      setGroupSettings({
                        ...groupSettings,
                        groupDescription: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Group Privacy
                    </label>
                    <div className="relative">
                      <select
                        value={groupSettings.groupPrivacy}
                        onChange={(e) =>
                          setGroupSettings({
                            ...groupSettings,
                            groupPrivacy: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] appearance-none focus:border-[#0B5D4B] outline-none cursor-pointer"
                      >
                        <option>Private (Invitation only)</option>
                        <option>Public</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Maximum Members
                    </label>
                    <input
                      type="number"
                      value={groupSettings.maxMembers}
                      onChange={(e) =>
                        setGroupSettings({
                          ...groupSettings,
                          maxMembers: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Group Start Date
                    </label>
                    <input
                      type="text"
                      value={groupSettings.startDate}
                      onChange={(e) =>
                        setGroupSettings({
                          ...groupSettings,
                          startDate: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                    WhatsApp Group Invite Link
                  </label>
                  <input
                    type="text"
                    value={groupSettings.whatsappLink}
                    onChange={(e) =>
                      setGroupSettings({
                        ...groupSettings,
                        whatsappLink: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Contribution Settings */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <div className="md:w-64 shrink-0 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                  <BsDatabaseAdd className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Contribution Settings
                </h4>
                <p className="text-xs text-[#7E7F7D]">
                  Set how members contribute their savings.
                </p>
              </div>

              {/* Right Column: Form Fields */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Contribution Amount
                    </label>
                    <input
                      type="text"
                      value={groupSettings.contributionAmount}
                      onChange={(e) =>
                        setGroupSettings({
                          ...groupSettings,
                          contributionAmount: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Contribution Frequency
                    </label>
                    <div className="relative">
                      <select
                        value={groupSettings.contributionFrequency}
                        onChange={(e) =>
                          setGroupSettings({
                            ...groupSettings,
                            contributionFrequency: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] appearance-none focus:border-[#0B5D4B] outline-none cursor-pointer"
                      >
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Daily</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Late Payment Rules */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <div className="md:w-64 shrink-0 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Late Payment Rules
                </h4>
                <p className="text-xs text-[#7E7F7D]">
                  Set the grace period, fee and other note for late
                  contribution.
                </p>
              </div>

              {/* Right Column: Form Fields */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Grace Period
                    </label>
                    <div className="relative">
                      <select
                        value={groupSettings.gracePeriod}
                        onChange={(e) =>
                          setGroupSettings({
                            ...groupSettings,
                            gracePeriod: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] appearance-none focus:border-[#0B5D4B] outline-none cursor-pointer"
                      >
                        <option>3 days</option>
                        <option>1 day</option>
                        <option>2 days</option>
                        <option>5 days</option>
                        <option>7 days</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                      Late Payment Fee
                    </label>
                    <input
                      type="text"
                      value={groupSettings.latePaymentFee}
                      onChange={(e) =>
                        setGroupSettings({
                          ...groupSettings,
                          latePaymentFee: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A2E26] mb-1.5">
                    Additional Rule
                  </label>
                  <textarea
                    rows={2}
                    value={groupSettings.additionalRule}
                    onChange={(e) =>
                      setGroupSettings({
                        ...groupSettings,
                        additionalRule: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D6] bg-white text-xs sm:text-sm text-[#1A2E26] focus:border-[#0B5D4B] outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => alert("Settings saved successfully!")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-sm font-semibold rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* ============== GROUP HEALTH TAB (IMAGE 1) ============== */}
        {activeTab === "Group Health" && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h3 className="text-xl font-bold text-[#1A2E26]">
                Group Health Overview
              </h3>
              <p className="text-xs sm:text-sm text-[#7E7F7D] mt-0.5">
                A quick snapshot of your group's performance and risk level.
              </p>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Contribution Rate */}
              <div className="bg-white rounded-[10px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <GoDatabase className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    Contribution Rate
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">100%</p>
                </div>
              </div>

              {/* On-Time Payments */}
              <div className="bg-white rounded-[10px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    On-Time Payments
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">11 of 12</p>
                </div>
              </div>

              {/* Active Members */}
              <div className="bg-white rounded-[10px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    Active Members
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">12</p>
                </div>
              </div>

              {/* Group Health */}
              <div className="bg-white rounded-[10px] border border-[#F0EBE1] p-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-[#EAF7EE] flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D] font-medium">
                    Group Health
                  </p>
                  <p className="text-lg font-bold text-[#1A2E26]">Healthy</p>
                </div>
              </div>
            </div>

            {/* Health Trend Card */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Health Trend
                </h4>
                <p className="text-xs text-[#7E7F7D] mt-0.5">
                  Group performance over the group cycles.
                </p>
              </div>

              {/* Bar Chart */}
              <div className="pt-4 pb-2 overflow-x-auto scrollbar-none">
                <div className="min-w-[440px] sm:min-w-0">
                  <div className="flex items-end gap-2 sm:gap-4 h-64 border-b border-[#E5E0D6] pb-2 pl-8 relative">
                    {/* Y Axis Labels */}
                    <div className="absolute left-0 top-0 bottom-2 flex flex-col justify-between text-[11px] font-medium text-[#7E7F7D]">
                      <span>100%</span>
                      <span>80%</span>
                      <span>60%</span>
                      <span>40%</span>
                      <span>20%</span>
                      <span>0</span>
                    </div>

                    {/* Horizontal Guide Lines */}
                    <div className="absolute left-8 right-0 top-0 border-b border-dashed border-[#F0EBE1]" />
                    <div className="absolute left-8 right-0 top-1/4 border-b border-dashed border-[#F0EBE1]" />
                    <div className="absolute left-8 right-0 top-2/4 border-b border-dashed border-[#F0EBE1]" />
                    <div className="absolute left-8 right-0 top-3/4 border-b border-dashed border-[#F0EBE1]" />

                    {/* Bars */}
                    {[
                      { label: "Cycle 1", val: 92 },
                      { label: "Cycle 1", val: 100 },
                      { label: "Cycle 1", val: 92 },
                      { label: "Cycle 1", val: 100 },
                      { label: "Cycle 1", val: 100 },
                      { label: "Cycle 1", val: 100 },
                      { label: "Cycle 1", val: 92 },
                      { label: "Cycle 1", val: 100 },
                    ].map((bar, idx) => (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center justify-end h-full relative z-10 group"
                      >
                        <span className="text-[10px] sm:text-xs font-semibold text-[#1A2E26] mb-1">
                          {bar.val}%
                        </span>
                        <div
                          style={{ height: `${bar.val}%` }}
                          className="w-full max-w-[48px] bg-[#0B5D4B] rounded-t-md hover:bg-[#073529] transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  {/* X Axis Labels */}
                  <div className="flex gap-2 sm:gap-4 pl-8 pt-2">
                    {[
                      "Cycle 1",
                      "Cycle 1",
                      "Cycle 1",
                      "Cycle 1",
                      "Cycle 1",
                      "Cycle 1",
                      "Cycle 1",
                      "Cycle 1",
                    ].map((cycle, idx) => (
                      <div
                        key={idx}
                        className="flex-1 text-center text-[10px] sm:text-xs font-medium text-[#7E7F7D]"
                      >
                        {cycle}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Cycle Status Card */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="text-base font-bold text-[#1A2E26]">
                  Current Cycle Status
                </h4>
                <p className="text-xs text-[#7E7F7D] mt-0.5">
                  A glance for the ongoing cycle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
                {/* Donut Gauge */}
                <div className="flex items-center justify-center p-4">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 160 160"
                    >
                      {/* Background circle */}
                      <circle
                        cx="80"
                        cy="80"
                        r="64"
                        className="stroke-[#EAF7EE]"
                        strokeWidth="14"
                        fill="transparent"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="80"
                        cy="80"
                        r="64"
                        className="stroke-[#0B5D4B]"
                        strokeWidth="14"
                        strokeDasharray={2 * Math.PI * 64}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-bold text-[#1A2E26]">
                        100%
                      </span>
                      <span className="text-xs font-medium text-[#7E7F7D]">
                        Collected
                      </span>
                    </div>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#F0EBE1] pt-4 md:pt-0 md:pl-6">
                  {/* Expected Contributions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      
                        <GoDatabase className="w-5 h-5" color="green"/>
                    
                      <span className="text-xs sm:text-sm font-medium text-[#1A2E26]">
                        Expected Contributions
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1A2E26]">
                      ₦600,000
                    </span>
                  </div>

                  {/* Collected */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      
                        <CheckCircle2 className="w-5 h-5" color="green"/>
                    
                      <span className="text-xs sm:text-sm font-medium text-[#1A2E26]">
                        Collected
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1A2E26]">
                      ₦600,000
                    </span>
                  </div>

                  {/* Pending */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                     
                        <Clock className="w-5 h-5" color="orange"/>
                      
                      <span className="text-xs sm:text-sm font-medium text-[#1A2E26]">
                        Pending
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1A2E26]">
                      ₦0
                    </span>
                  </div>

                  {/* Overdue */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      
                        <XCircle className="w-5 h-5" color="red"/>
               
                      <span className="text-xs sm:text-sm font-medium text-[#1A2E26]">
                        Overdue
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1A2E26]">
                      ₦0
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Status Banner */}
            <div className="bg-[#31C0503D] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#0B6B40] shrink-0">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#000000]">
                  Group Status: <span className="font-bold">Healthy</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#1A2E26] mt-0.5 font-medium">
                  Contributions are on track and the group is in good standing.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============== DISPUTES TAB (IMAGE 1) ============== */}
        {activeTab === "Disputes" && (
          <div className="space-y-5 animate-tab-content">
            {/* Top 4 Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Total Disputes */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[8px] bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                  <MinusCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D]">Total Disputes</p>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A2E26]">
                    12
                  </h3>
                </div>
              </div>

              {/* New */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[8px] bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D]">New</p>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A2E26]">
                    12
                  </h3>
                </div>
              </div>

              {/* Under Review */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[8px] bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D]">Under Review</p>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A2E26]">
                    3
                  </h3>
                </div>
              </div>

              {/* Resolved */}
              <div className="bg-white rounded-[12px] border border-[#F0EBE1] p-2 flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[8px] bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#7E7F7D]">Resolved</p>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A2E26]">
                    12
                  </h3>
                </div>
              </div>
            </div>

            {/* Scope as Group Admin Callout */}
            <div className="bg-[#ACF2C742] border border-[#B8E3C5] rounded-2xl p-5 flex items-start gap-4">
              <div className="">
                <CiCircleInfo className="w-7 h-7" />
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1A2E26]">
                    Your Scope as Group Admin
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
                    You can resolve group rules, membership, contribution
                    schedule and payout-order disputes.
                  </p>
                </div>
                <div className="border-t border-[#D1EADB] pt-2">
                  <p className="text-xs text-[#4B5563]">
                    Financial, technical, and fraud-related disputes are handled
                    by the{" "}
                    <span className="font-bold text-[#0B5D4B]">
                      PallyPot Platform Admin.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Table & Filters Card */}
            <div className="bg-white rounded-2xl border border-[#F0EBE1] p-5 shadow-xs space-y-5">
              {/* Filter controls row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {/* Search */}
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-[#7E7F7D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={disputeSearch}
                    onChange={(e) => setDisputeSearch(e.target.value)}
                    placeholder="Search by dispute ID or member"
                    className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm border border-[#E5E7EB] rounded-lg bg-white text-[#1A2E26] placeholder-[#9CA3AF] focus:outline-hidden focus:border-[#0B5D4B]"
                  />
                </div>

                {/* Dropdowns */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="relative">
                    <select
                      value={disputeFilterCategory}
                      onChange={(e) => setDisputeFilterCategory(e.target.value)}
                      className="appearance-none bg-white border border-[#E5E7EB] text-xs font-medium text-[#1A2E26] rounded-lg px-3 py-2 pr-7 cursor-pointer focus:outline-hidden focus:border-[#0B5D4B]"
                    >
                      <option>All Categories</option>
                      <option>Group Rules</option>
                      <option>Membership</option>
                      <option>Contributions</option>
                      <option>Payout</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      value={disputeFilterStatus}
                      onChange={(e) => setDisputeFilterStatus(e.target.value)}
                      className="appearance-none bg-white border border-[#E5E7EB] text-xs font-medium text-[#1A2E26] rounded-lg px-3 py-2 pr-7 cursor-pointer focus:outline-hidden focus:border-[#0B5D4B]"
                    >
                      <option>All Statuses</option>
                      <option>New</option>
                      <option>In Review</option>
                      <option>Resolved</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      value={disputeFilterTime}
                      onChange={(e) => setDisputeFilterTime(e.target.value)}
                      className="appearance-none bg-white border border-[#E5E7EB] text-xs font-medium text-[#1A2E26] rounded-lg px-3 py-2 pr-7 cursor-pointer focus:outline-hidden focus:border-[#0B5D4B]"
                    >
                      <option>All Time</option>
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>This Year</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7E7F7D] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Disputes Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#E5EDEC]">
                    <tr className="border-b border-[#F3F4F6]">
                      <th className="text-sm font-semibold text-[#000000] py-3 pl-3 pb-3 pr-4">
                        Dispute ID
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Member
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Category
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Subject
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Date Submitted
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-4">
                        Status
                      </th>
                      <th className="text-sm font-semibold text-[#000000] py-3 pb-3 pr-3 text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDisputes.map((dsp, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#F9FAFB] last:border-b-0 hover:bg-[#FBF8F2]/40 transition-colors"
                      >
                        {/* Dispute ID */}
                        <td className="py-3.5 pl-3 pr-4 text-xs sm:text-sm font-medium text-[#1A2E26] whitespace-nowrap">
                          {dsp.id}
                        </td>
                        {/* Member */}
                        <td className="py-3.5 pr-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#D1FAE5] shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-[#1A2E26]">
                              {dsp.member}
                            </span>
                          </div>
                        </td>
                        {/* Category */}
                        <td className="py-3.5 pr-4 whitespace-nowrap">
                          <span
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                              dsp.category === "Group Rules"
                                ? "bg-[#DCFCE7] text-[#16A34A]"
                                : dsp.category === "Membership"
                                  ? "bg-[#EEF2FF] text-[#4F46E5]"
                                  : dsp.category === "Contributions"
                                    ? "bg-[#FDF2F8] text-[#DB2777]"
                                    : "bg-[#FFEDD5] text-[#EA580C]"
                            }`}
                          >
                            {dsp.category}
                          </span>
                        </td>
                        {/* Subject */}
                        <td className="py-3.5 pr-4 text-xs sm:text-sm text-[#000000]">
                          {dsp.subject}
                        </td>
                        {/* Date Submitted */}
                        <td className="py-3.5 pr-4 text-xs sm:text-sm text-[#000000] whitespace-nowrap">
                          {dsp.submittedDate}
                        </td>
                        {/* Status */}
                        <td className="py-3.5 pr-4 whitespace-nowrap">
                          <span
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                              dsp.status === "New"
                                ? "bg-[#FEE2E2] text-[#EF4444]"
                                : dsp.status === "In Review"
                                  ? "bg-[#FEF3C7] text-[#D97706]"
                                  : "bg-[#DCFCE7] text-[#16A34A]"
                            }`}
                          >
                            {dsp.status}
                          </span>
                        </td>
                        {/* Action */}
                        <td className="py-3.5 pr-3 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => setSelectedDispute(dsp)}
                            className="border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#F0FDF4] px-3.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between pt-2 border-t border-[#F3F4F6]">
                <p className="text-xs text-[#7E7F7D]">
                  Showing 1–{filteredDisputes.length} of 12 disputes.
                </p>
                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    type="button"
                    className="w-7 h-7 rounded border border-[#E5E7EB] flex items-center justify-center text-[#7E7F7D] hover:bg-[#F3F4F6] cursor-pointer"
                  >
                    &lt;
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded bg-[#A3C7B5] text-[#0B5D4B] font-bold flex items-center justify-center cursor-pointer"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded text-[#7E7F7D] hover:bg-[#F3F4F6] flex items-center justify-center cursor-pointer"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded text-[#7E7F7D] hover:bg-[#F3F4F6] flex items-center justify-center cursor-pointer"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded text-[#7E7F7D] hover:bg-[#F3F4F6] flex items-center justify-center cursor-pointer"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded border border-[#E5E7EB] flex items-center justify-center text-[#7E7F7D] hover:bg-[#F3F4F6] cursor-pointer"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== SEND PAYMENT REMINDER MODAL ==================== */}
      {reminderModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setReminderModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-2xl border border-[#F0EBE1] space-y-4 animate-in zoom-in-95 my-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-1">
                <h3 className="text-lg font-bold text-[#1A2E26]">
                  Send Payment Reminder
                </h3>
                <button
                  type="button"
                  onClick={() => setReminderModalOpen(false)}
                  className="text-[#7E7F7D] hover:text-[#1A2E26] p-1 rounded-lg hover:bg-[#F3F4F6] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reminder Type */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-[#1A2E26]">
                  Reminder Type
                </label>
                <div className="relative">
                  <select
                    value={reminderType}
                    onChange={(e) => setReminderType(e.target.value)}
                    className="w-full appearance-none pr-8 pl-3.5 py-2.5 text-xs sm:text-sm text-[#1A2E26] border border-[#E5E7EB] rounded-xl bg-white cursor-pointer focus:border-[#0B5D4B] outline-none"
                  >
                    <option>Remind unpaid members</option>
                    <option>Remind overdue members</option>
                    <option>Notify all members</option>
                    <option>Notify individual member</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#7E7F7D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Recipients Callout */}
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#1A2E26]">
                    Recipients: 3 unpaid members
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#7E7F7D] mt-0.5">
                    Members who haven't completed their contributions for the
                    3rd Cycle.
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-[#1A2E26]">
                  Message
                </label>
                <textarea
                  rows={3}
                  maxLength={300}
                  value={reminderMessage}
                  onChange={(e) => setReminderMessage(e.target.value)}
                  placeholder="Type in your message..."
                  className="w-full p-3 text-xs sm:text-sm text-[#1A2E26] placeholder-[#9CA3AF] border border-[#E5E7EB] rounded-xl focus:border-[#0B5D4B] outline-none resize-none"
                />
                <div className="text-right text-[11px] text-[#9CA3AF]">
                  {reminderMessage.length}/300
                </div>
              </div>

              {/* Send Via */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-[#1A2E26]">
                  Send Via
                </label>
                <div className="space-y-2 text-xs sm:text-sm text-[#1A2E26]">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reminderChannels.whatsapp}
                      onChange={(e) =>
                        setReminderChannels({
                          ...reminderChannels,
                          whatsapp: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded accent-[#0B5D4B]"
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reminderChannels.inApp}
                      onChange={(e) =>
                        setReminderChannels({
                          ...reminderChannels,
                          inApp: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded accent-[#0B5D4B]"
                    />
                    <span>In-app Notification</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reminderChannels.email}
                      onChange={(e) =>
                        setReminderChannels({
                          ...reminderChannels,
                          email: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded accent-[#0B5D4B]"
                    />
                    <span>Email</span>
                  </label>
                </div>
              </div>

              {/* Submit Button dispute*/}
              <button
                type="button"
                onClick={() => {
                  alert("Reminder sent successfully!");
                  setReminderModalOpen(false);
                  setReminderMessage("");
                }}
                className="w-full py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Reminder</span>
              </button>
            </div>
          </div>,
          document.body,
        )}

      {/* ==================== CONFIRM PAYOUT MODAL ==================== */}
      {confirmPayoutModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setConfirmPayoutModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-2xl border border-[#F0EBE1] space-y-4 animate-in zoom-in-95 my-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1A2E26]">
                    Confirm Payout
                  </h3>
                  <p className="text-xs text-[#7E7F7D] mt-0.5">
                    You are about to make a payout to the next recipient in this
                    group.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setConfirmPayoutModalOpen(false)}
                  className="text-[#7E7F7D] hover:text-[#1A2E26] p-1 rounded-lg hover:bg-[#F3F4F6] transition-colors cursor-pointer shrink-0 ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Payout Details Box */}
              <div className="bg-[#F9FAFB] rounded-xl p-4 space-y-3">
                {/* Recipient */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#1A2E26]">
                    <User className="w-5 h-5 text-[#16A34A]" />
                    <span className="font-medium">Recipient</span>
                  </div>
                  <span className="font-bold text-[#1A2E26]">
                    {confirmPayoutData.recipient}
                  </span>
                </div>

                {/* Payout Position */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#1A2E26]">
                    <VscGraph className="w-5 h-5 text-[#16A34A]" />
                    <span className="font-medium">Payout Position</span>
                  </div>
                  <span className="font-medium text-[#1A2E26]">
                    {confirmPayoutData.position}
                  </span>
                </div>

                {/* Scheduled Date */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#1A2E26]">
                    <Calendar className="w-5 h-5 text-[#16A34A]" />
                    <span className="font-medium">Scheduled Date</span>
                  </div>
                  <span className="font-medium text-[#1A2E26]">
                    {confirmPayoutData.scheduledDate}
                  </span>
                </div>

                {/* Gross Payout */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#1A2E26]">
                    <Coins className="w-5 h-5 text-[#16A34A]" />
                    <span className="font-medium">Gross Payout</span>
                  </div>
                  <span className="font-bold text-[#1A2E26]">
                    {confirmPayoutData.gross}
                  </span>
                </div>

                {/* Deductions */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#1A2E26]">
                    <MinusCircle className="w-5 h-5 text-[#16A34A]" />
                    <span className="font-medium">Deductions</span>
                  </div>
                  <span className="font-medium text-[#1A2E26]">
                    {confirmPayoutData.deductions}
                  </span>
                </div>
              </div>

              {/* Net Payout Callout */}
              <div className="bg-[#6AD88D36] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BsWallet className="w-5 h-5 text-[#0F5B46]" />
                  <span className="font-bold text-sm sm:text-base text-[#000000]">
                    Net Payout
                  </span>
                </div>
                <span className="font-bold text-base sm:text-lg text-[#0F5B46]">
                  {confirmPayoutData.net}
                </span>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  alert(
                    `Payout of ${confirmPayoutData.net} confirmed to ${confirmPayoutData.recipient}!`,
                  );
                  setConfirmPayoutModalOpen(false);
                }}
                className="w-full py-3.5 bg-[#0B5D4B] hover:bg-[#073529] text-white text-sm font-semibold rounded-[10px] flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Payout</span>
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
