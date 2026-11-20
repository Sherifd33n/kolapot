import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  MoreVertical,
  MoreHorizontal,
  Users,
  UserCheck,
  UserX,
  ShieldAlert,
  ShieldCheck,
  Check,
  Ban,
  Trash2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LuUserCheck, LuUsers } from "react-icons/lu";
import { LiaPauseCircleSolid } from "react-icons/lia";

export default function UserManagementView({ onViewUser }) {
  const [activeTab, setActiveTab] = useState("All Users"); // All Users | Members | Group Admins | Suspended / Deleted
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [verificationFilter, setVerificationFilter] = useState(
    "All Verification Status",
  );
  const [statusOpen, setStatusOpen] = useState(false);
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Initial user list based on Image 3
  const [usersList, setUsersList] = useState([
    {
      id: "USR-000458",
      name: "Aisha Ibrahim",
      initials: "AI",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Member",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Pending",
      status: "Active",
      dob: "Mar 10, 2000",
      address: "12 Goodwill Close, Alagbado",
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      registrationDate: "Apr 14, 2025, 10:24 AM",
      lastLogin: "Nov 5, 2026, 9:18 AM",
    },
    {
      id: "USR-000458",
      name: "James Danladi",
      initials: "JD",
      role: "Member",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Verified",
      status: "Active",
    },
    {
      id: "USR-000458",
      name: "James Danladi",
      initials: "JD",
      role: "Group Admin",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Pending",
      status: "Active",
    },
    {
      id: "USR-000458",
      name: "James Danladi",
      initials: "JD",
      role: "Member",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Verified",
      status: "Suspended",
    },
    {
      id: "USR-000458",
      name: "James Danladi",
      initials: "JD",
      role: "Member",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Verified",
      status: "Active",
    },
    {
      id: "USR-000458",
      name: "James Danladi",
      initials: "JD",
      role: "Group Admin",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Pending",
      status: "Active",
    },
    {
      id: "USR-000458",
      name: "James Danladi",
      initials: "JD",
      role: "Member",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Verified",
      status: "Suspended",
    },
    {
      id: "USR-000458",
      name: "James Danladi",
      initials: "JD",
      role: "Member",
      email: "aishaibrahim@gmail.com",
      phone: "0803 456 7890",
      verification: "Verified",
      status: "Suspended",
    },
  ]);

  // Stat metrics (5 cards matching Image 3)
  const stats = [
    {
      label: "Total Users",
      value: "12,480",
      icon: LuUsers,
      bg: "bg-[#40B39A24]",
      iconBg: "text-[#0B5D4B]",
    },
    {
      label: "Active Users",
      value: "12,080",
      icon: LuUserCheck,
      bg: "bg-[#1CC81324]",
      iconBg: "text-[#1CC813]",
    },
    {
      label: "Members",
      value: "8,000",
      icon: LuUsers,
      bg: "bg-[#EF871724]",
      iconBg: "text-[#EF8717]",
    },
    {
      label: "Group Admins",
      value: "3,000",
      icon: HiOutlineUserCircle,
      bg: "bg-[#E533E224]",
      iconBg: "text-[#E533E2]",
    },
    {
      label: "Suspended Users",
      value: "1,480",
      icon: AiOutlineCloseCircle,
      bg: "bg-[#F90D1124]",
      iconBg: "text-[#F90D11]",
    },
  ];

  // Filtering
  const filteredUsers = usersList.filter((u) => {
    // Tab filter
    if (activeTab === "Members" && u.role !== "Member") return false;
    if (activeTab === "Group Admins" && u.role !== "Group Admin") return false;
    if (activeTab === "Suspended / Deleted" && u.status !== "Suspended")
      return false;

    // Search query
    const q = searchQuery.toLowerCase().trim();
    if (
      q &&
      !u.name.toLowerCase().includes(q) &&
      !u.email.toLowerCase().includes(q) &&
      !u.phone.toLowerCase().includes(q) &&
      !u.id.toLowerCase().includes(q)
    ) {
      return false;
    }

    // Status filter
    if (statusFilter !== "All Statuses" && u.status !== statusFilter) {
      return false;
    }

    // Verification filter
    if (
      verificationFilter !== "All Verification Status" &&
      u.verification !== verificationFilter
    ) {
      return false;
    }

    return true;
  });

  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedUsers = filteredUsers.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (status) => {
    setStatusFilter(status);
    setStatusOpen(false);
    setCurrentPage(1);
  };

  const handleVerificationChange = (verif) => {
    setVerificationFilter(verif);
    setVerificationOpen(false);
    setCurrentPage(1);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(paginatedUsers.map((_, idx) => idx));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (idx) => {
    if (selectedUsers.includes(idx)) {
      setSelectedUsers(selectedUsers.filter((i) => i !== idx));
    } else {
      setSelectedUsers([...selectedUsers, idx]);
    }
  };

  const handleSuspend = (idx) => {
    const updated = [...usersList];
    updated[idx].status = "Suspended";
    setUsersList(updated);
    setOpenActionMenuId(null);
  };

  const handleReactivate = (idx) => {
    const updated = [...usersList];
    updated[idx].status = "Active";
    setUsersList(updated);
    setOpenActionMenuId(null);
  };

  const handleDelete = (idx) => {
    if (confirm("Are you sure you want to permanently delete this user?")) {
      const updated = usersList.filter((_, i) => i !== idx);
      setUsersList(updated);
    }
    setOpenActionMenuId(null);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Row with Search */}
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

      {/* 5 Stat Cards (Image 3) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`${s.bg} rounded-xl p-3 shadow-2xs flex flex-col justify-between space-y-2`}
            >
              <div
                className={`w-9 h-9 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
              >
                <Icon className="" size={30} />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-[#111827] block leading-tight">
                  {s.value}
                </span>
                <span className="text-xs text-[#4B5563] font-medium block mt-0.5">
                  {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Container Card */}
      <div className="rounded-xl p-4 sm:p-6 shadow-xs space-y-5">
        {/* Tab Filters (Image 3) */}
        <div className="flex items-center gap-1 bg-[#E1E2E4] rounded-xl max-w-full overflow-x-auto scrollbar-none p-1">
          {["All Users", "Members", "Group Admins", "Suspended / Deleted"].map(
            (tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-4 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#087F5B] text-white shadow-xs"
                      : "text-[#4B5563] hover:text-[#111827] hover:bg-white/50"
                  }`}
                >
                  {tab}
                </button>
              );
            },
          )}
        </div>

        <div className="">
          {/* Search & Filter Dropdowns Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-white p-4 mb-5 rounded-xl">
            {/* Search by name/email/phone/id */}
            <div className="sm:col-span-6 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#69737D]" />
              <input
                type="text"
                placeholder="Search by name, email, phone or user ID"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#BBBFC4] rounded-lg text-xs sm:text-sm text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#0B5D4B] transition-colors"
              />
            </div>

            {/* Status Filter Dropdown */}
            <div className="sm:col-span-3 relative">
              <button
                onClick={() => {
                  setStatusOpen(!statusOpen);
                  setVerificationOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#BBBFC4] rounded-lg text-xs sm:text-sm text-[#4B5563] hover:border-[#0B5D4B] transition-colors"
              >
                <span className="truncate">{statusFilter}</span>
                <ChevronDown className="w-4 h-4 shrink-0 text-[#9A9D97]" />
              </button>
              {statusOpen && (
                <div className="absolute z-20 w-full mt-1 bg-white border border-[#EBE6DD] rounded-lg shadow-lg py-1">
                  {["All Statuses", "Active", "Suspended"].map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        setStatusFilter(st);
                        setStatusOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs hover:bg-[#F8F9FA] transition-colors ${
                        statusFilter === st
                          ? "font-bold text-[#0B5D4B]"
                          : "text-[#111827]"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Verification Status Dropdown */}
            <div className="sm:col-span-3 relative">
              <button
                onClick={() => {
                  setVerificationOpen(!verificationOpen);
                  setStatusOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#BBBFC4] rounded-lg text-xs sm:text-sm text-[#4B5563] hover:border-[#0B5D4B] transition-colors"
              >
                <span className="truncate">{verificationFilter}</span>
                <ChevronDown className="w-4 h-4 shrink-0 text-[#9A9D97]" />
              </button>
              {verificationOpen && (
                <div className="absolute z-20 w-full mt-1 bg-white border border-[#EBE6DD] rounded-lg shadow-lg py-1">
                  {[
                    "All Verification Status",
                    "Verified",
                    "Pending",
                    "Under Review",
                  ].map((vf) => (
                    <button
                      key={vf}
                      onClick={() => {
                        setVerificationFilter(vf);
                        setVerificationOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs hover:bg-[#F8F9FA] transition-colors ${
                        verificationFilter === vf
                          ? "font-bold text-[#0B5D4B]"
                          : "text-[#111827]"
                      }`}
                    >
                      {vf}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0 border border-[#F3EFEA] bg-white rounded-xl">
            <table className="w-full text-left min-w-[840px]">
              <thead>
                <tr className="border-b bg-[#F6F6FB] border-[#EBE6DD] text-xs font-semibold text-[#737373]">
                  <th className="py-3 px-3 w-10">
                    <input
                      type="checkbox"
                      checked={
                        filteredUsers.length > 0 &&
                        selectedUsers.length === filteredUsers.length
                      }
                      onChange={handleSelectAll}
                      className="rounded border-[#D1D5DB]  focus:ring-[#0B5D4B] cursor-pointer"
                    />
                  </th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium">User</th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium">User ID</th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium">Role</th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium">Email</th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium">Phone Number</th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium">Verification</th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium">Status</th>
                  <th className="py-5 px-3 text-[#000000] text-sm font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={9}
                      className="text-center py-10 text-xs sm:text-sm text-[#737373]"
                    >
                      No users found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, idx) => {
                    const isChecked = selectedUsers.includes(idx);
                    const isActionOpen = openActionMenuId === idx;

                    return (
                      <tr
                        key={idx}
                        className="border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors text-xs sm:text-sm"
                      >
                        {/* Checkbox */}
                        <td className="py-3.5 px-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleSelectUser(idx)}
                            className="rounded border-[#D1D5DB] text-[#0B5D4B] focus:ring-[#0B5D4B] cursor-pointer"
                          />
                        </td>

                        {/* User Avatar + Name */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-2.5">
                            {user.avatar ? (
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-9 h-9 rounded-full object-cover shrink-0"
                              />
                            ) : (
                              <div className="w-9 h-9 rounded-full bg-[#005A8740] text-[#005A87] font-bold text-sm flex items-center justify-center shrink-0">
                                {user.initials}
                              </div>
                            )}
                            <span className="font-semibold text-[#000000] whitespace-nowrap">
                              {user.name}
                            </span>
                          </div>
                        </td>

                        {/* User ID */}
                        <td className="py-3.5 px-3 text-[#69737D] whitespace-nowrap text-sm">
                          {user.id}
                        </td>

                        {/* Role Badge */}
                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-[5px] ${
                              user.role === "Member"
                                ? "bg-[#29C7362E] text-[#29C736]"
                                : "bg-[#CCDC162E] text-[#CCDC16]"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>

                        {/* Email */}
                        <td className="py-3.5 px-3 text-[#69737D] whitespace-nowrap">
                          {user.email}
                        </td>

                        {/* Phone */}
                        <td className="py-3.5 px-3 text-[#69737D] whitespace-nowrap">
                          {user.phone}
                        </td>

                        {/* Verification Status */}
                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-[5px] ${
                              user.verification === "Verified"
                                ? "bg-[#08B72B2E] text-[#08B72B]"
                                : "bg-[#B762082E] text-[#B76208]"
                            }`}
                          >
                            {user.verification}
                          </span>
                        </td>

                        {/* Account Status */}
                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full ${
                              user.status === "Active"
                                ? "bg-[#08B72B2E] text-[#08B72B]"
                                : "bg-[#FA38382E] text-[#FA3838]"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>

                        {/* Actions: View + Dropdown */}
                        <td className="py-3.5 px-3 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-2 relative">
                            <button
                              onClick={() => onViewUser && onViewUser(user)}
                              className="px-3 py-1 border border-[#087F5B] text-[#087F5B] hover:bg-[#0B5D4B] hover:text-white rounded-md text-xs font-semibold transition-colors cursor-pointer"
                            >
                              View
                            </button>

                            <button
                              onClick={() =>
                                setOpenActionMenuId(isActionOpen ? null : idx)
                              }
                              className="p-1 text-[#737373] hover:text-[#111827] rounded-md hover:bg-black/5 transition-colors cursor-pointer"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </button>

                            {/* Action Dropdown Menu (Image 3) */}
                            {isActionOpen && (
                              <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-[#EBE6DD] rounded-lg shadow-xl py-1.5 z-30 text-left animate-in fade-in zoom-in-95 duration-100">
                                <button
                                  onClick={() => handleSuspend(idx)}
                                  className="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#C46915] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                                >
                                  <LiaPauseCircleSolid className="w-6 h-6 text-[#C46915]" />
                                  <span>Suspend Account</span>
                                </button>
                                <button
                                  onClick={() => handleReactivate(idx)}
                                  className="w-full flex items-center gap-3 my-1 px-3 py-1.5 text-xs font-medium text-[#898A91] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                                >
                                  <RefreshCw className="w-5 h-5 text-[#898A91]" />
                                  <span>Reactivate Account</span>
                                </button>
                                <div className="border-[#F0EDE6]" />
                                <button
                                  onClick={() => handleDelete(idx)}
                                  className="w-full flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-[#F33F17] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
                                >
                                  <Trash2 className="w-5 h-5 text-[#F33F17]" />
                                  <span>Delete Account</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Bar (Image 3) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#EBE6DD]">
          <span className="text-xs text-[#737373]">
            Showing 1-{filteredUsers.length} of 12,480 users
          </span>

          <div className="flex items-center gap-1 self-center sm:self-auto">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-md border border-[#EBE6DD] text-[#737373] hover:bg-[#FAF8F5] disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                  currentPage === page
                    ? "bg-[#075140] text-white"
                    : "border border-[#EBE6DD] text-[#4B5563] hover:bg-[#FAF8F5]"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
              disabled={currentPage === 4}
              className="p-1.5 rounded-md border border-[#EBE6DD] text-[#737373] hover:bg-[#FAF8F5] disabled:opacity-40 cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
