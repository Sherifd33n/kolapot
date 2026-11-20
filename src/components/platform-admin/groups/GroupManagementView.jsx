import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  ChevronDown,
  Plus,
  Users,
  Activity,
  Clock,
  CheckCircle2,
  X,
} from "lucide-react";

export default function GroupManagementView({ onViewGroup }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newGroup, setNewGroup] = useState({
    name: "",
    admin: "",
    members: 10,
    contribution: "₦20,000 / Weekly",
    startDate: "2025-04-28",
    type: "Ajo",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  // Top 4 Stat Cards (Image 3)
  const stats = [
    {
      label: "Total Groups",
      value: "230",
      icon: Users,
      bg: "bg-[#9DE0A94F]",
      iconBg: "bg-[#17AA8912] text-[#17AA89]",
    },
    {
      label: "Active Groups",
      value: "182",
      icon: Activity,
      bg: "bg-[#9DDCE04F]",
      iconBg: "bg-[#179BAA12] text-[#37AFA7]",
    },
    {
      label: "Not Started",
      value: "24",
      icon: Clock,
      bg: "bg-[#E0D89D4F]",
      iconBg: "bg-[#D6C01E26] text-[#B6B74E]",
    },
    {
      label: "Completed Groups",
      value: "42",
      icon: CheckCircle2,
      bg: "bg-[#F3F4F6]",
      iconBg: "bg-black/5 text-[#4B5563]",
    },
  ];

  // Groups list data
  const [groupsList, setGroupsList] = useState([
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Active",
      initials: "IAC",
    },
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Active",
      initials: "IAC",
    },
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Completed",
      initials: "IAC",
    },
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Not Started",
      initials: "IAC",
    },
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Active",
      initials: "IAC",
    },
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Active",
      initials: "IAC",
    },
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Completed",
      initials: "IAC",
    },
    {
      id: "GRP-001458",
      name: "Ikeja Ajo Circle",
      admin: "Tunde Akinola",
      members: 10,
      contribution: "₦20,000 / Weekly",
      dateCreated: "Apr 18, 2025",
      startDate: "Apr 28, 2025",
      status: "Not Started",
      initials: "IAC",
    },
  ]);

  const filteredGroups = groupsList.filter((g) => {
    if (statusFilter !== "All Statuses" && g.status !== statusFilter) {
      return false;
    }
    const q = searchQuery.toLowerCase().trim();
    if (
      q &&
      !g.name.toLowerCase().includes(q) &&
      !g.id.toLowerCase().includes(q) &&
      !g.admin.toLowerCase().includes(q)
    ) {
      return false;
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredGroups.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedGroups = filteredGroups.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize
  );

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (!newGroup.name.trim()) return;

    const created = {
      id: `GRP-00${Math.floor(1000 + Math.random() * 9000)}`,
      name: newGroup.name,
      admin: newGroup.admin || "Platform Admin",
      members: parseInt(newGroup.members) || 10,
      contribution: newGroup.contribution || "₦20,000 / Weekly",
      dateCreated: "Today",
      startDate: newGroup.startDate || "May 1, 2025",
      status: "Not Started",
      initials: newGroup.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 3)
        .toUpperCase() || "GRP",
    };

    setGroupsList([created, ...groupsList]);
    setIsCreateModalOpen(false);
    setNewGroup({
      name: "",
      admin: "",
      members: 10,
      contribution: "₦20,000 / Weekly",
      startDate: "2025-04-28",
      type: "Ajo",
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Header Row with Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-3 border-[#D0D2CE]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            Group Management
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] mt-0.5 font-normal">
            View and manage all savings groups registered on PallyPot.
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

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`${s.bg} rounded-xl p-3.5 shadow-2xs flex items-center gap-3 border border-black/5`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs text-[#595959] font-medium block truncate">
                  {s.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#111827] block leading-tight mt-0.5 truncate">
                  {s.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter and Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1 max-w-xl">
          {/* Search by group name or ID */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9D97]" />
            <input
              type="text"
              placeholder="Search by group name or ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#111827] placeholder:text-[#9A9D97] focus:outline-none focus:border-[#0B5D4B] transition-colors shadow-2xs"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <button
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className="w-full sm:w-44 px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#4B5563] flex items-center justify-between gap-2 hover:border-[#0B5D4B] transition-colors cursor-pointer shadow-2xs"
            >
              <span>{statusFilter}</span>
              <ChevronDown className="w-4 h-4 text-[#737373]" />
            </button>

            {isStatusOpen && (
              <div className="absolute left-0 top-full mt-1 w-full bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20">
                {["All Statuses", "Active", "Completed", "Not Started"].map(
                  (st) => (
                    <button
                      key={st}
                      onClick={() => {
                        setStatusFilter(st);
                        setIsStatusOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs hover:bg-[#F8F9FA] transition-colors cursor-pointer ${
                        statusFilter === st
                          ? "font-bold text-[#0B5D4B]"
                          : "text-[#111827]"
                      }`}
                    >
                      {st}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Create New Group Button */}
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-5 py-2.5 bg-[#087F5B] hover:bg-[#065F46] text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Group</span>
        </button>
      </div>

      {/* Groups Table Card */}
      <div className="bg-white rounded-xl border border-[#F3EFEA] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead>
              <tr className="bg-[#F8F9FA] border-b border-[#EBE6DD] text-xs font-semibold text-[#111827]">
                <th className="py-4 px-4 whitespace-nowrap">Group Name</th>
                <th className="py-4 px-3 whitespace-nowrap">Group ID</th>
                <th className="py-4 px-3 whitespace-nowrap">Group Admin</th>
                <th className="py-4 px-3 whitespace-nowrap">Members</th>
                <th className="py-4 px-3 whitespace-nowrap">Contribution</th>
                <th className="py-4 px-3 whitespace-nowrap">Date Created</th>
                <th className="py-4 px-3 whitespace-nowrap">Start Date</th>
                <th className="py-4 px-3 whitespace-nowrap">Status</th>
                <th className="py-4 px-4 whitespace-nowrap text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EFEA] text-xs text-[#111827]">
              {paginatedGroups.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="text-center py-10 text-xs sm:text-sm text-[#737373]"
                  >
                    No groups found matching your filters.
                  </td>
                </tr>
              ) : (
                paginatedGroups.map((g, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#F3EFEA] hover:bg-[#FAF8F5] transition-colors text-xs sm:text-sm"
                  >
                    <td className="py-3.5 px-4 font-bold text-[#000000] whitespace-nowrap">
                      {g.name}
                    </td>
                    <td className="py-3.5 px-3 text-[#69737D] whitespace-nowrap">
                      {g.id}
                    </td>
                    <td className="py-3.5 px-3 text-[#000000] whitespace-nowrap">
                      {g.admin}
                    </td>
                    <td className="py-3.5 px-3 text-[#000000] whitespace-nowrap font-medium">
                      {g.members}
                    </td>
                    <td className="py-3.5 px-3 font-bold text-[#000000] whitespace-nowrap">
                      {g.contribution}
                    </td>
                    <td className="py-3.5 px-3 text-[#69737D] whitespace-nowrap">
                      {g.dateCreated}
                    </td>
                    <td className="py-3.5 px-3 text-[#69737D] whitespace-nowrap">
                      {g.startDate}
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          g.status === "Active"
                            ? "bg-[#EAF7EE] text-[#0B6B40]"
                            : g.status === "Completed"
                            ? "bg-[#F3F4F6] text-[#4B5563]"
                            : "bg-[#FEF3C7] text-[#D97706]"
                        }`}
                      >
                        {g.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => onViewGroup && onViewGroup(g)}
                        className="px-3.5 py-1 border border-[#087F5B] text-[#087F5B] hover:bg-[#087F5B] hover:text-white rounded-md text-xs font-semibold transition-colors cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <span className="text-center sm:text-left">
            Showing{" "}
            {filteredGroups.length === 0
              ? 0
              : (safeCurrentPage - 1) * pageSize + 1}
            –{Math.min(safeCurrentPage * pageSize, filteredGroups.length)} of{" "}
            {filteredGroups.length} groups
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage === 1}
              className="w-7 h-7 flex items-center justify-center border border-[#EBE6DD] rounded text-[#737373] hover:bg-[#FAF8F5] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-7 h-7 flex items-center justify-center rounded font-medium cursor-pointer ${
                  safeCurrentPage === pageNum
                    ? "bg-[#087F5B] text-white font-bold shadow-2xs"
                    : "border border-[#EBE6DD] hover:bg-[#FAF8F5] text-[#111827]"
                }`}
              >
                {pageNum}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage === totalPages}
              className="w-7 h-7 flex items-center justify-center border border-[#EBE6DD] rounded text-[#737373] hover:bg-[#FAF8F5] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Create New Group Modal (rendered via createPortal to body) */}
      {isCreateModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-xl border border-[#F3EFEA] shadow-2xl max-w-lg w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between border-b pb-3 border-[#F3EFEA]">
                <h3 className="text-lg font-bold text-[#111827]">
                  Create New Savings Group
                </h3>
                <button
                  onClick={() => setIsCreateModalOpen(false)}
                  className="p-1 rounded-md text-[#737373] hover:text-[#111827] hover:bg-black/5 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateGroup} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#111827] block mb-1">
                    Group Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lekki Wealth Circle"
                    value={newGroup.name}
                    onChange={(e) =>
                      setNewGroup({ ...newGroup, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2 border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#111827] focus:outline-none focus:border-[#087F5B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#111827] block mb-1">
                      Group Admin Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tunde Akinola"
                      value={newGroup.admin}
                      onChange={(e) =>
                        setNewGroup({ ...newGroup, admin: e.target.value })
                      }
                      className="w-full px-3.5 py-2 border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#111827] focus:outline-none focus:border-[#087F5B]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#111827] block mb-1">
                      Number of Members
                    </label>
                    <input
                      type="number"
                      min="2"
                      max="50"
                      value={newGroup.members}
                      onChange={(e) =>
                        setNewGroup({ ...newGroup, members: e.target.value })
                      }
                      className="w-full px-3.5 py-2 border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#111827] focus:outline-none focus:border-[#087F5B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#111827] block mb-1">
                      Contribution Amount & Frequency
                    </label>
                    <input
                      type="text"
                      value={newGroup.contribution}
                      onChange={(e) =>
                        setNewGroup({ ...newGroup, contribution: e.target.value })
                      }
                      className="w-full px-3.5 py-2 border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#111827] focus:outline-none focus:border-[#087F5B]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#111827] block mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={newGroup.startDate}
                      onChange={(e) =>
                        setNewGroup({ ...newGroup, startDate: e.target.value })
                      }
                      className="w-full px-3.5 py-2 border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#111827] focus:outline-none focus:border-[#087F5B]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#F3EFEA]">
                  <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(false)}
                    className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-xs font-semibold text-[#4B5563] hover:bg-[#F8F9FA] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#087F5B] hover:bg-[#065F46] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Create Group
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

