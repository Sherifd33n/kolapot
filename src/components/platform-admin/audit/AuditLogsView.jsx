import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Calendar,
  Layers,
  Users,
  MinusCircle,
  CreditCard,
  Wallet,
} from "lucide-react";

export default function AuditLogsView() {
  const [dateRange, setDateRange] = useState("Oct 1, 2026 – Oct 31, 2026");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [moduleFilter, setModuleFilter] = useState("All Modules");
  const [searchQuery, setSearchQuery] = useState("");

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isModuleOpen, setIsModuleOpen] = useState(false);

  // Rows matching Image 2
  const logsData = [
    {
      id: "l1",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Admin",
      action: "Created",
      module: "Groups",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
    {
      id: "l2",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Member",
      action: "Updated",
      module: "Users",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
    {
      id: "l3",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Member",
      action: "Resolved",
      module: "Disputes",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
    {
      id: "l4",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Member",
      action: "Approved",
      module: "Payouts",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
    {
      id: "l5",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Member",
      action: "Resolved",
      module: "Disputes",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
    {
      id: "l6",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Member",
      action: "Resolved",
      module: "Disputes",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
    {
      id: "l7",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Member",
      action: "Approved",
      module: "Payouts",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
    {
      id: "l8",
      dateTime: "Nov 14, 2026, 10:24 AM",
      user: "Aisha Ibrahim",
      role: "Member",
      action: "Resolved",
      module: "Disputes",
      details: 'Created group "Unity Ajo"',
      ip: "197.210.20.15",
      device: "Mobile (Pixel 7)",
    },
  ];

  const filteredLogs = logsData.filter((item) => {
    const matchesSearch =
      item.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ip.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole =
      roleFilter === "All Roles" || item.role === roleFilter;

    const matchesModule =
      moduleFilter === "All Modules" || item.module === moduleFilter;

    return matchesSearch && matchesRole && matchesModule;
  });

  return (
    <div className="space-y-6">
      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
            Audit Logs
          </h1>
          <p className="text-sm text-[#737373] mt-1">
            Record of key administrative actions and system changes on PallyPot.
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
      <div className="bg-white rounded-xl p-4 border border-[#F3EFEA] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {/* Date range picker */}
          <div className="relative">
            <button
              onClick={() => {
                setIsDateOpen(!isDateOpen);
                setIsRoleOpen(false);
                setIsModuleOpen(false);
              }}
              className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#737373]" />
              <span>{dateRange}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isDateOpen && (
              <div className="absolute left-0 mt-1 w-56 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {[
                  "Oct 1, 2026 – Oct 31, 2026",
                  "Nov 1, 2026 – Nov 30, 2026",
                  "Last 7 Days",
                  "Last 30 Days",
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setDateRange(opt);
                      setIsDateOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Role dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsRoleOpen(!isRoleOpen);
                setIsDateOpen(false);
                setIsModuleOpen(false);
              }}
              className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{roleFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isRoleOpen && (
              <div className="absolute left-0 mt-1 w-36 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Roles", "Admin", "Member"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setRoleFilter(opt);
                      setIsRoleOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#FAF8F5] text-[#111827]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Module dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsModuleOpen(!isModuleOpen);
                setIsDateOpen(false);
                setIsRoleOpen(false);
              }}
              className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer"
            >
              <span>{moduleFilter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isModuleOpen && (
              <div className="absolute left-0 mt-1 w-40 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["All Modules", "Groups", "Users", "Disputes", "Payouts"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setModuleFilter(opt);
                        setIsModuleOpen(false);
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
        </div>

        {/* Search Input */}
        <div className="relative w-full md:max-w-xs">
          <Search className="w-4 h-4 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B]"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-[#F3EFEA] shadow-xs overflow-hidden">
        <div className="overflow-x-auto w-full max-w-full">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#EAF0EE] text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 whitespace-nowrap">Date & Time</th>
                <th className="py-3 px-4 whitespace-nowrap">User</th>
                <th className="py-3 px-4 whitespace-nowrap">Role</th>
                <th className="py-3 px-4 whitespace-nowrap">Action</th>
                <th className="py-3 px-4 whitespace-nowrap">Module</th>
                <th className="py-3 px-4 whitespace-nowrap">Details</th>
                <th className="py-3 px-4 whitespace-nowrap">IP Address</th>
                <th className="py-3 px-4 whitespace-nowrap">Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3EFEA] text-xs text-[#111827]">
              {filteredLogs.map((row) => (
                <tr key={row.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                  {/* Date & Time */}
                  <td className="py-3.5 px-4 text-[#737373] whitespace-nowrap">
                    {row.dateTime}
                  </td>

                  {/* User */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[10px] font-bold text-[#6B7280] shrink-0">
                        {row.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-semibold text-[#111827]">
                        {row.user}
                      </span>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="py-3.5 px-4">
                    {row.role === "Admin" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                        Admin
                      </span>
                    )}
                    {row.role === "Member" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#CCFBF1] text-[#0F766E]">
                        Member
                      </span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4">
                    {row.action === "Created" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E0E7FF] text-[#4338CA]">
                        Created
                      </span>
                    )}
                    {row.action === "Updated" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F3E8FF] text-[#9333EA]">
                        Updated
                      </span>
                    )}
                    {row.action === "Resolved" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D]">
                        Resolved
                      </span>
                    )}
                    {row.action === "Approved" && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FCE7F3] text-[#DB2777]">
                        Approved
                      </span>
                    )}
                  </td>

                  {/* Module */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 text-[#0B6B40] font-medium">
                      {row.module === "Groups" && (
                        <Layers className="w-4 h-4 text-[#0B6B40]" />
                      )}
                      {row.module === "Users" && (
                        <Users className="w-4 h-4 text-[#0B6B40]" />
                      )}
                      {row.module === "Disputes" && (
                        <MinusCircle className="w-4 h-4 text-[#0B6B40]" />
                      )}
                      {row.module === "Payouts" && (
                        <Wallet className="w-4 h-4 text-[#0B6B40]" />
                      )}
                      <span className="text-[#111827]">{row.module}</span>
                    </div>
                  </td>

                  {/* Details */}
                  <td className="py-3.5 px-4 text-[#111827] font-medium">
                    {row.details}
                  </td>

                  {/* IP Address */}
                  <td className="py-3.5 px-4 font-mono text-[#737373]">
                    {row.ip}
                  </td>

                  {/* Device */}
                  <td className="py-3.5 px-4 text-[#737373]">
                    {row.device}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <span>Showing 1–{filteredLogs.length} of 42 logs</span>
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
    </div>
  );
}

