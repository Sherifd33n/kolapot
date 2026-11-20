import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  User,
  Users,
  Database,
  BarChart2,
  ShieldCheck,
  Check,
  X,
  Edit2,
  Clock,
  Calendar,
  ChevronDown,
  ArrowDown,
  ArrowUp,
  Wallet,
  FileText,
} from "lucide-react";
import { BsBarChart } from "react-icons/bs";
import { RiBarChart2Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GoInfo } from "react-icons/go";

export default function ViewUserDetail({ user, onBack }) {
  const [activeTab, setActiveTab] = useState("Overview"); // Overview | Groups | Transactions | Activity
  const [kycStatus, setKycStatus] = useState("Under Review");
  const [imageError, setImageError] = useState(false);
  const [txSearch, setTxSearch] = useState("");
  const [txStatusFilter, setTxStatusFilter] = useState("All Statuses");
  const [txTypeFilter, setTxTypeFilter] = useState("Transaction type");
  const [txGroupFilter, setTxGroupFilter] = useState("Group");
  const [activityCategoryFilter, setActivityCategoryFilter] =
    useState("All Categories");

  const u = user || {
    id: "USR-000458",
    name: "James Danladi",
    initials: "JD",
    role: "Group Admin",
    email: "aishaibrahim@gmail.com",
    phone: "0803 456 7890",
    dob: "Mar 10, 2000",
    address: "12 Goodwill Close, Alagbado",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    registrationDate: "Apr 14, 2025, 10:24 AM",
    lastLogin: "Nov 5, 2026, 9:18 AM",
    accountStatus: "Active",
    avatar: null,
    bvn: "********1234",
    nin: "********1564",
  };

  const userInitials =
    u.initials ||
    u.name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ||
    "JD";

  const handleApproveKYC = () => {
    setKycStatus("Verified");
    alert(`KYC for ${u.name} has been approved successfully.`);
  };

  const handleRejectKYC = () => {
    setKycStatus("Rejected");
    alert(`KYC for ${u.name} has been rejected.`);
  };

  // Transactions Tab Data
  const transactionStats = [
    {
      label: "Total Contributions",
      value: "₦350,000",
      icon: ArrowDown,
      bg: "bg-[#EAF7EE]",
      iconBg: "bg-[#17AA891F] text-[#0B6B40]",
    },
    {
      label: "Total Payouts Received",
      value: "₦300,000",
      icon: ArrowUp,
      bg: "bg-[#FEEFEA]",
      iconBg: "bg-[#EA580C1F] text-[#C2410C]",
    },
    {
      label: "Total Wallet Funding",
      value: "₦750,000",
      icon: Wallet,
      bg: "bg-[#F3E8FF]",
      iconBg: "bg-[#9333EA1F] text-[#7E22CE]",
    },
    {
      label: "Total Transactions",
      value: "8",
      icon: FileText,
      bg: "bg-[#FEF9C3]",
      iconBg: "bg-[#CA8A041F] text-[#A16207]",
    },
  ];

  const transactionsList = [
    {
      id: "TRX-008763",
      type: "Contribution",
      typeColor: "bg-[#DCFCE7] text-[#15803D]",
      group: "Ikeja Ajo Circle",
      amount: "₦600,000",
      dateTime: "Oct 28, 2026, 09:14 AM",
      paymentMethod: "Bank Transfer",
      status: "Successful",
      statusColor: "bg-[#DCFCE7] text-[#15803D]",
    },
    {
      id: "TRX-008763",
      type: "Payout",
      typeColor: "bg-[#E0E7FF] text-[#4338CA]",
      group: "Ikeja Ajo Circle",
      amount: "₦600,000",
      dateTime: "Oct 28, 2026, 09:14 AM",
      paymentMethod: "Bank Transfer",
      status: "Successful",
      statusColor: "bg-[#DCFCE7] text-[#15803D]",
    },
    {
      id: "TRX-008763",
      type: "Wallet Funding",
      typeColor: "bg-[#FFEDD5] text-[#C2410C]",
      group: "Ikeja Ajo Circle",
      amount: "₦600,000",
      dateTime: "Oct 28, 2026, 09:14 AM",
      paymentMethod: "Bank Transfer",
      status: "Successful",
      statusColor: "bg-[#DCFCE7] text-[#15803D]",
    },
    {
      id: "TRX-008763",
      type: "Contribution",
      typeColor: "bg-[#DCFCE7] text-[#15803D]",
      group: "Ikeja Ajo Circle",
      amount: "₦600,000",
      dateTime: "Oct 28, 2026, 09:14 AM",
      paymentMethod: "Bank Transfer",
      status: "Successful",
      statusColor: "bg-[#DCFCE7] text-[#15803D]",
    },
    {
      id: "TRX-008763",
      type: "Contribution",
      typeColor: "bg-[#DCFCE7] text-[#15803D]",
      group: "Ikeja Ajo Circle",
      amount: "₦600,000",
      dateTime: "Oct 28, 2026, 09:14 AM",
      paymentMethod: "Bank Transfer",
      status: "Successful",
      statusColor: "bg-[#DCFCE7] text-[#15803D]",
    },
  ];

  // Activity Tab Data
  const activityList = [
    {
      activity: "Member account created",
      category: "Account",
      categoryColor: "bg-[#EEF2FF] text-[#4F46E5]",
      dateTime: "Oct 28, 2026, 09:14 AM",
      device: "Web (Chrome)",
    },
    {
      activity: "Profile information updated",
      category: "Account",
      categoryColor: "bg-[#EEF2FF] text-[#4F46E5]",
      dateTime: "Oct 28, 2026, 09:14 AM",
      device: "Web (Chrome)",
    },
    {
      activity: "Password changed",
      category: "Security",
      categoryColor: "bg-[#DCFCE7] text-[#15803D]",
      dateTime: "Oct 28, 2026, 09:14 AM",
      device: "Web (Chrome)",
    },
    {
      activity: "Joined group: Ikeja Ajo Circle",
      category: "Groups",
      categoryColor: "bg-[#FCE7F3] text-[#BE185D]",
      dateTime: "Oct 28, 2026, 09:14 AM",
      device: "Web (Chrome)",
    },
    {
      activity: "Password changed",
      category: "Security",
      categoryColor: "bg-[#DCFCE7] text-[#15803D]",
      dateTime: "Oct 28, 2026, 09:14 AM",
      device: "Web (Chrome)",
    },
  ];

  const filteredTransactions = transactionsList.filter((tx) => {
    if (txSearch && !tx.id.toLowerCase().includes(txSearch.toLowerCase())) {
      return false;
    }
    if (txStatusFilter !== "All Statuses" && tx.status !== txStatusFilter) {
      return false;
    }
    if (txTypeFilter !== "Transaction type" && tx.type !== txTypeFilter) {
      return false;
    }
    if (txGroupFilter !== "Group" && tx.group !== txGroupFilter) {
      return false;
    }
    return true;
  });

  const filteredActivity = activityList.filter((act) => {
    if (
      activityCategoryFilter !== "All Categories" &&
      act.category !== activityCategoryFilter
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Header Row with Search (Matching User Management) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-3 border-[#D0D2CE]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            User Management
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] mt-0.5 font-normal">
            View and manage all registered users on PallyPot.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
          <input
            type="text"
            placeholder="Search users, groups, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#EBE6DD] rounded-lg text-xs sm:text-sm text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#0B5D4B] transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Back Link */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs sm:text-sm text-[#111827] hover:text-[#0B5D4B] transition-colors font-medium cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Users</span>
      </button>

      {/* Page Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
        View User
      </h2>

      {/* User Header Profile Card */}
      <div className="">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {u.avatar && !imageError ? (
              <img
                src={u.avatar}
                alt={u.name}
                onError={() => setImageError(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#005A8740] text-[#005A87] font-bold text-xl sm:text-2xl flex items-center justify-center shrink-0">
                {userInitials}
              </div>
            )}
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#000000]">
                  {u.name}
                </h2>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-[5px] ${
                    u.role === "Member"
                      ? "bg-[#29C7362E] text-[#29C736]"
                      : "bg-[#CCDC162E] text-[#CCDC16]"
                  }`}
                >
                  {u.role}
                </span>
              </div>
              <p className="text-xs text-[#737373]">
                User ID:{" "}
                <span className="font-medium text-[#111827]">{u.id}</span>
              </p>
              <p className="text-xs text-[#737373]">
                Registered: {u.registrationDate}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    (u.status || u.accountStatus || "Active") === "Active"
                      ? "bg-[#08B72B2E] text-[#08B72B]"
                      : "bg-[#FA38382E] text-[#FA3838]"
                  }`}
                >
                  {u.status || u.accountStatus || "Active"}
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    kycStatus === "Verified"
                      ? "bg-[#EAF7EE] text-[#0B6B40]"
                      : kycStatus === "Rejected"
                        ? "bg-[#FEE2E2] text-[#DC2626]"
                        : "bg-[#FEF3C7] text-[#D97706]"
                  }`}
                >
                  KYC: {kycStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation (Matching User Management Tab Pill Design) */}
      <div className="flex items-center gap-1 bg-[#E1E2E4] rounded-xl max-w-full overflow-x-auto scrollbar-none p-1">
        {[
          { id: "Overview", label: "Overview", icon: FaRegUserCircle },
          { id: "Groups", label: "Groups", icon: Users },
          { id: "Transactions", label: "Transactions", icon: Database },
          { id: "Activity", label: "Activity", icon: RiBarChart2Line },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? "bg-[#087F5B] text-white shadow-xs font-semibold"
                  : "text-[#000000] hover:text-[#111827] hover:bg-white/50"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Column (Personal Info + Account Info) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Personal Information */}
            <div className="bg-[#F8F6F3] rounded-xl p-4 border border-[#B7B7B694] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg text-[#087F5B] flex items-center justify-center shrink-0">
                    <AiOutlineUser className="" size={35} />
                  </div>
                  <h3 className="text-base font-semibold text-[#000000]">
                    Personal Information
                  </h3>
                </div>
                <button
                  onClick={() => alert("Edit user information dialog")}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#EBE6DD] text-sm font-semibold text-[#087F5B] hover:border-[#0B5D4B] hover:text-[#0B5D4B] transition-colors cursor-pointer"
                >
                  <span>Edit</span>
                </button>
              </div>

              <div className="divide-y divide-[#F3EFEA] text-xs sm:text-sm">
                {[
                  { label: "Full Name", value: u.name },
                  { label: "Email Address", value: u.email },
                  { label: "Phone Number", value: u.phone },
                  { label: "Date of Birth", value: u.dob },
                  { label: "Address", value: u.address },
                  { label: "City", value: u.city },
                  { label: "State", value: u.state },
                  { label: "Country", value: u.country },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="text-[#737373]">{item.label}</span>
                    <span className="font-medium text-[#111827]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-[#F8F6F3] rounded-xl p-4 border border-[#B7B7B694] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E3F5F7] text-[#087F5B] flex items-center justify-center shrink-0">
                  <GoInfo className="" size={35} />
                </div>
                <h3 className="text-base font-bold text-[#111827]">
                  Account Information
                </h3>
              </div>

              <div className="divide-y divide-[#F3EFEA] text-xs sm:text-sm">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#737373]">Role</span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-[5px] ${
                      u.role === "Member"
                        ? "bg-[#29C7362E] text-[#29C736]"
                        : "bg-[#CCDC162E] text-[#CCDC16]"
                    }`}
                  >
                    {u.role}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#737373]">Account Status</span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      (u.status || u.accountStatus || "Active") === "Active"
                        ? "bg-[#08B72B2E] text-[#08B72B]"
                        : "bg-[#FA38382E] text-[#FA3838]"
                    }`}
                  >
                    {u.status || u.accountStatus || "Active"}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#737373]">Registration Date</span>
                  <span className="font-medium text-[#111827]">
                    {u.registrationDate}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#737373]">Last Login</span>
                  <span className="font-medium text-[#111827]">
                    {u.lastLogin}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (KYC Verification + Review Box) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Identity Verification (KYC) Card */}
            <div className="bg-[#F8F6F3] rounded-xl p-4 border border-[#B7B7B694] shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="">
                    <ShieldCheck className="" size={35} color="#087F5B" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#000000]">
                      Identity Verification (KYC)
                    </h3>
                    <p className="text-sm text-[#9B9B9B]">
                      Verify the user's identity details.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#D97706]">
                  {kycStatus}
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {/* BVN */}
                <div className="flex items-center justify-between p-3 border border-[#F0EDE6]">
                  <div>
                    <span className="text-sm text-[#000000] font-medium block">
                      BVN
                    </span>
                    <span className="text-sm font-medium text-[#111827]">
                      {u.bvn}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      alert(`Verified BVN Record for ${u.name}: 22234567891`)
                    }
                    className="text-sm font-semibold text-[#0B5D4B] hover:underline cursor-pointer"
                  >
                    View
                  </button>
                </div>

                {/* NIN */}
                <div className="flex items-center justify-between p-3 border border-[#F0EDE6]">
                  <div>
                    <span className="text-sm text-[#000000] font-medium block">
                      NIN
                    </span>
                    <span className="text-sm font-bold text-[#111827]">
                      {u.nin}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      alert(`Verified NIN Record for ${u.name}: 987654321564`)
                    }
                    className="text-sm font-semibold text-[#0B5D4B] hover:underline cursor-pointer"
                  >
                    View
                  </button>
                </div>

                {/* Facial Verification */}
                <div className="flex items-center justify-between p-3 border border-[#F0EDE6]">
                  <div className="flex gap-1 items-center">
                    <span className="text-sm text-[#000000] font-medium block">
                      Facial Verification
                    </span>
                    <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EAF7EE] text-[#0B6B40] mt-0.5">
                      Submitted
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      alert("Liveness & Facial match score: 98.4% (Pass)")
                    }
                    className="text-xs font-semibold text-[#0B5D4B] hover:underline cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>

              {/* Verification Review Action Box */}
              <div className="space-y-4 bg-[#C7B83321] p-3 rounded-[5px]">
                <div className="flex items-start gap-3">
                  <div className="">
                    <Clock className="" size={25} color="#9C8E16"/>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#111827]">
                      Verification Review
                    </h4>
                    <p className="text-sm text-[#737373] mt-0.5">
                      The user has submitted their KYC details. Review the
                      information and take action.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={handleApproveKYC}
                    className="w-full flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#087F5B] hover:bg-[#064335] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs"
                  >
                    <Check className="w-4 h-4" />
                    <span>Approve Verification</span>
                  </button>

                  <button
                    onClick={handleRejectKYC}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-[#EF4444] text-[#DC2626] hover:bg-[#FEF2F2] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    <span>Reject Verification</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GROUPS */}
      {activeTab === "Groups" && (
        <div className="space-y-6">
          {/* Current Groups (2) */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#111827]">
              Current Groups (2)
            </h3>

            <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
              <table className="w-full text-left min-w-[680px]">
                <thead>
                  <tr className="bg-[#E5EDEC] text-[#000000] text-sm font-semibold">
                    <th className="px-4 py-5 rounded-tl-md whitespace-nowrap">
                      Group Name
                    </th>
                    <th className="px-4 py-5 whitespace-nowrap">Group Admin</th>
                    <th className="px-4 py-5 whitespace-nowrap">Role</th>
                    <th className="px-4 py-5 whitespace-nowrap">Date Joined</th>
                    <th className="px-4 py-5 whitespace-nowrap">
                      Total Contributions
                    </th>
                    <th className="px-4 py-5 whitespace-nowrap">
                      Total Payouts
                    </th>
                    <th className="px-4 py-5 rounded-tr-md whitespace-nowrap">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      group: "Ikeja Ajo Circle",
                      admin: "Tunde Akinola",
                      role: "Member",
                      joined: "Apr 18, 2025",
                      contributions: "₦600,000",
                      payouts: "NO",
                      status: "Active",
                    },
                    {
                      group: "Ikeja Ajo Circle",
                      admin: "Tunde Akinola",
                      role: "Member",
                      joined: "Apr 18, 2025",
                      contributions: "₦600,000",
                      payouts: "NO",
                      status: "Active",
                    },
                  ].map((g, idx) => (
                    <tr
                      key={idx}
                      className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                    >
                      <td className="px-4 py-3.5 font-bold text-[#111827] whitespace-nowrap">
                        {g.group}
                      </td>
                      <td className="px-4 py-3.5 text-[#4B5563] whitespace-nowrap">
                        {g.admin}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#EAF7EE] text-[#0B6B40]">
                          {g.role}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-[#737373] whitespace-nowrap">
                        {g.joined}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-[#111827] whitespace-nowrap">
                        {g.contributions}
                      </td>
                      <td className="px-4 py-3.5 text-[#737373] whitespace-nowrap">
                        {g.payouts}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF7EE] text-[#0B6B40]">
                          {g.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Past Groups (1) */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#111827]">
              Past Groups (1)
            </h3>

            <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
              <table className="w-full text-left min-w-[680px]">
                <thead>
                  <tr className="bg-[#E5EDEC] text-[#000000] text-sm font-semibold">
                    <th className="px-4 py-5 rounded-tl-md whitespace-nowrap">
                      Group Name
                    </th>
                    <th className="px-4 py-5 whitespace-nowrap">Group Admin</th>
                    <th className="px-4 py-5 whitespace-nowrap">Date Joined</th>
                    <th className="px-4 py-5 whitespace-nowrap">
                      Date Completed
                    </th>
                    <th className="px-4 py-5 whitespace-nowrap">
                      Total Contributions
                    </th>
                    <th className="px-4 py-5 whitespace-nowrap">
                      Total Payouts
                    </th>
                    <th className="px-4 py-5 rounded-tr-md whitespace-nowrap">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      group: "Ikeja Ajo Circle",
                      admin: "Tunde Akinola",
                      joined: "Apr 18, 2025",
                      completed: "Apr 18, 2025",
                      contributions: "₦600,000",
                      payouts: "₦600,000",
                      status: "Completed",
                    },
                  ].map((g, idx) => (
                    <tr
                      key={idx}
                      className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                    >
                      <td className="px-4 py-3.5 font-bold text-[#111827] whitespace-nowrap">
                        {g.group}
                      </td>
                      <td className="px-4 py-3.5 text-[#4B5563] whitespace-nowrap">
                        {g.admin}
                      </td>
                      <td className="px-4 py-3.5 text-[#737373] whitespace-nowrap">
                        {g.joined}
                      </td>
                      <td className="px-4 py-3.5 text-[#737373] whitespace-nowrap">
                        {g.completed}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-[#111827] whitespace-nowrap">
                        {g.contributions}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-[#0B6B40] whitespace-nowrap">
                        {g.payouts}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F3F4F6] text-[#4B5563]">
                          {g.status}
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

      {/* TAB 3: TRANSACTIONS */}
      {activeTab === "Transactions" && (
        <div className="space-y-6">
          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {transactionStats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className={`${s.bg} rounded-xl p-3.5 shadow-2xs flex items-center gap-3 border border-black/5`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-[#737373] font-medium block">
                      {s.label}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-[#111827] block leading-tight mt-0.5">
                      {s.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transaction History Card */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-base sm:text-lg font-bold text-[#111827]">
                Transaction History
              </h3>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-xs font-medium text-[#4B5563] hover:border-[#0B5D4B] transition-colors cursor-pointer self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-[#737373]" />
                <span>Oct 12, 2026 – Oct 18, 2026</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
              </button>
            </div>

            {/* Filter Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
                <input
                  type="text"
                  placeholder="Search by Transaction ID"
                  value={txSearch}
                  onChange={(e) => setTxSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#0B5D4B] transition-colors"
                />
              </div>

              <div className="relative">
                <select
                  value={txStatusFilter}
                  onChange={(e) => setTxStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#4B5563] focus:outline-none focus:border-[#0B5D4B] cursor-pointer"
                >
                  <option>All Statuses</option>
                  <option>Successful</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={txTypeFilter}
                  onChange={(e) => setTxTypeFilter(e.target.value)}
                  className="w-full px-3 py-2 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#4B5563] focus:outline-none focus:border-[#0B5D4B] cursor-pointer"
                >
                  <option>Transaction type</option>
                  <option>Contribution</option>
                  <option>Payout</option>
                  <option>Wallet Funding</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={txGroupFilter}
                  onChange={(e) => setTxGroupFilter(e.target.value)}
                  className="w-full px-3 py-2 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#4B5563] focus:outline-none focus:border-[#0B5D4B] cursor-pointer"
                >
                  <option>Group</option>
                  <option>Ikeja Ajo Circle</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 pt-2">
              <table className="w-full text-left min-w-[760px]">
                <thead>
                  <tr className="bg-[#E5EDEC] text-[#000000] text-sm font-semibold">
                    <th className="px-4 py-5 rounded-tl-md whitespace-nowrap">
                      Transaction ID
                    </th>
                    <th className="px-4 py-5 whitespace-nowrap">Type</th>
                    <th className="px-4 py-5 whitespace-nowrap">Group</th>
                    <th className="px-4 py-5 whitespace-nowrap">Amount</th>
                    <th className="px-4 py-5 whitespace-nowrap">Date & Time</th>
                    <th className="px-4 py-5 whitespace-nowrap">
                      Payment Method
                    </th>
                    <th className="px-4 py-5 whitespace-nowrap">Status</th>
                    <th className="px-4 py-5 rounded-tr-md whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((tx, idx) => (
                    <tr
                      key={idx}
                      className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                    >
                      <td className="px-4 py-3.5 font-medium text-[#111827] whitespace-nowrap">
                        {tx.id}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tx.typeColor}`}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-[#111827] whitespace-nowrap">
                        {tx.group}
                      </td>
                      <td className="px-4 py-3.5 font-bold text-[#111827] whitespace-nowrap">
                        {tx.amount}
                      </td>
                      <td className="px-4 py-3.5 text-[#737373] whitespace-nowrap">
                        {tx.dateTime}
                      </td>
                      <td className="px-4 py-3.5 text-[#111827] whitespace-nowrap font-medium">
                        {tx.paymentMethod}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tx.statusColor}`}
                        >
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <button
                          onClick={() =>
                            alert(`View transaction details for ${tx.id}`)
                          }
                          className="px-3 py-1 rounded border border-[#E5E7EB] text-xs font-semibold text-[#4B5563] hover:border-[#0B5D4B] hover:text-[#0B5D4B] transition-colors cursor-pointer"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ACTIVITY */}
      {activeTab === "Activity" && (
        <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#F3EFEA] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-base sm:text-lg font-bold text-[#111827]">
              Activity History
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <select
                  value={activityCategoryFilter}
                  onChange={(e) => setActivityCategoryFilter(e.target.value)}
                  className="px-3 py-1.5 pr-8 appearance-none bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#4B5563] focus:outline-none focus:border-[#0B5D4B] cursor-pointer"
                >
                  <option>All Categories</option>
                  <option>Account</option>
                  <option>Security</option>
                  <option>Groups</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#737373] pointer-events-none" />
              </div>

              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-xs font-medium text-[#4B5563] hover:border-[#0B5D4B] transition-colors cursor-pointer">
                <Calendar className="w-3.5 h-3.5 text-[#737373]" />
                <span>Oct 12, 2026 – Oct 18, 2026</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 pt-2">
            <table className="w-full text-left min-w-[620px]">
              <thead>
                <tr className="bg-[#E5EDEC] text-[#000000] text-sm font-semibold">
                  <th className="px-4 py-5 rounded-tl-md whitespace-nowrap">
                    Activity
                  </th>
                  <th className="px-4 py-5 whitespace-nowrap">Category</th>
                  <th className="px-4 py-5 whitespace-nowrap">Date & Time</th>
                  <th className="px-4 py-5 rounded-tr-md whitespace-nowrap">
                    Device / Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredActivity.map((act, idx) => (
                  <tr
                    key={idx}
                    className="text-xs sm:text-sm border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors"
                  >
                    <td className="px-4 py-5 text-[#111827] whitespace-nowrap font-medium">
                      {act.activity}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-md ${act.categoryColor}`}
                      >
                        {act.category}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-[#737373] whitespace-nowrap">
                      {act.dateTime}
                    </td>
                    <td className="px-4 py-5 text-[#111827] font-semibold whitespace-nowrap">
                      {act.device}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
