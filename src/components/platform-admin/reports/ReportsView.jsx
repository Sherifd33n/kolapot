import React, { useState } from "react";
import {
  Search,
  Calendar,
  RotateCcw,
  Download,
  Users,
  Layers,
  Database,
  Wallet,
  ArrowLeftRight,
  MinusCircle,
  ChevronDown,
  CheckCircle2,
  X,
} from "lucide-react";

export default function ReportsView() {
  const [period, setPeriod] = useState("Last 30 Days");
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [exportHistoryModal, setExportHistoryModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const reportItems = [
    {
      id: "users",
      title: "Users Report",
      description: "Registered users, user roles and account statuses.",
      icon: Users,
      iconBg: "bg-[#EAF7EE] text-[#0B6B40]",
      headers: ["User ID", "Full Name", "Email", "Phone", "Role", "Status", "Joined Date"],
      sampleData: [
        ["USR-000458", "Aisha Ibrahim", "aishaibrahim@gmail.com", "0803 456 7890", "Member", "Active", "Apr 14, 2025"],
        ["USR-000459", "James Danladi", "james.danladi@gmail.com", "0803 123 4567", "Group Admin", "Active", "May 10, 2025"],
        ["USR-000460", "Tunde Akinola", "tunde.akinola@gmail.com", "0802 987 6543", "Member", "Active", "Jun 22, 2025"],
        ["USR-000461", "Fatima Bello", "fatima.bello@gmail.com", "0805 111 2233", "Member", "Suspended", "Jul 05, 2025"],
      ],
    },
    {
      id: "groups",
      title: "Groups Report",
      description: "Total groups, active groups and group statuses.",
      icon: Layers,
      iconBg: "bg-[#FEF3C7] text-[#B45309]",
      headers: ["Group ID", "Group Name", "Admin", "Members", "Contribution", "Status", "Start Date"],
      sampleData: [
        ["GRP-001458", "Ikeja Ajo Circle", "Tunde Akinola", "10", "₦20,000 / Weekly", "Active", "Apr 28, 2025"],
        ["GRP-001459", "Yaba Ajo Group", "John Doe", "12", "₦50,000 / Monthly", "Active", "May 01, 2025"],
        ["GRP-001460", "Lekki Wealth Pot", "Amara Johnson", "8", "₦100,000 / Monthly", "Completed", "Jan 15, 2025"],
      ],
    },
    {
      id: "contributions",
      title: "Contributions Report",
      description:
        "Contribution volume, successful, pending and failed contributions.",
      icon: Database,
      iconBg: "bg-[#E0F2FE] text-[#0284C7]",
      headers: ["Transaction ID", "Member", "Group", "Cycle", "Amount", "Method", "Date", "Status"],
      sampleData: [
        ["CNB874512", "Aisha Ibrahim", "Ikeja Ajo Circle", "Cycle 1", "₦20,000", "Bank Transfer", "Apr 28, 2025", "Successful"],
        ["CNB874513", "James Danladi", "Ikeja Ajo Circle", "Cycle 1", "₦20,000", "Wallet", "Apr 28, 2025", "Successful"],
        ["CNB874514", "Tunde Akinola", "Yaba Ajo Group", "Cycle 2", "₦50,000", "Card", "May 01, 2025", "Pending"],
      ],
    },
    {
      id: "payouts",
      title: "Payouts Report",
      description: "Payout volume, completed and failed payouts.",
      icon: Wallet,
      iconBg: "bg-[#FEF9C3] text-[#CA8A04]",
      headers: ["Payout ID", "Recipient", "Group", "Gross Amount", "Fees", "Net Amount", "Date", "Status"],
      sampleData: [
        ["POT783451", "Aisha Ibrahim", "Ikeja Ajo Circle", "₦20,000", "₦200", "₦19,800", "Apr 28, 2025", "Successful"],
        ["POT783452", "Tunde M.", "Yaba Ajo Group", "₦600,000", "₦0", "₦495,000", "Nov 14, 2026", "Failed"],
      ],
    },
    {
      id: "wallet",
      title: "Wallet & Transactions Report",
      description: "Wallet transactions, funding, transfers and adjustments.",
      icon: ArrowLeftRight,
      iconBg: "bg-[#FCE7F3] text-[#C026D3]",
      headers: ["Transaction ID", "User", "Type", "Amount", "Method", "Date", "Status"],
      sampleData: [
        ["WLT874512", "Aisha Ibrahim", "Wallet Funding", "₦20,000", "Bank Transfer", "Apr 28, 2025", "Successful"],
        ["WLT874513", "James Danladi", "Withdrawal", "₦50,000", "Card", "Apr 28, 2025", "Successful"],
      ],
    },
    {
      id: "disputes",
      title: "Disputes Report",
      description: "Dispute volume, categories and resolution statuses.",
      icon: MinusCircle,
      iconBg: "bg-[#FEE2E2] text-[#DC2626]",
      headers: ["Dispute ID", "Member", "Category", "Subject", "Group", "Date", "Status"],
      sampleData: [
        ["DSP-00124", "Tunde Akinola", "Group Rules", "Disagreement on payout order", "Ikeja Ajo Group", "Nov 14, 2026", "New"],
        ["DSP-00125", "Jane Doe", "Wallet", "Card deposit error", "Yaba Ajo Group", "Nov 12, 2026", "Resolved"],
      ],
    },
  ];

  const handleExport = (report) => {
    try {
      const title = typeof report === "string" ? report : report.title;
      const headers = report.headers || ["ID", "Name", "Date", "Status", "Amount"];
      const data = report.sampleData || [
        ["1", "Sample Record 1", "2026-11-20", "Completed", "₦50,000"],
        ["2", "Sample Record 2", "2026-11-19", "Completed", "₦25,000"],
      ];

      const csvRows = [
        headers.join(","),
        ...data.map((row) => row.map((cell) => `"${cell}"`).join(",")),
      ];
      const csvString = csvRows.join("\n");
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const safeName = title.replace(/\s+/g, "_").toLowerCase();
      link.setAttribute("href", url);
      link.setAttribute("download", `${safeName}_${period.replace(/\s+/g, "_").toLowerCase()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setToastMessage(`${title} exported successfully as CSV.`);
      setTimeout(() => setToastMessage(null), 4000);
    } catch {
      setToastMessage(`Export initiated for ${typeof report === "string" ? report : report.title}.`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const filteredReports = reportItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="bg-[#EAF7EE] border border-[#0B6B40]/30 text-[#0B6B40] px-4 py-3 rounded-xl flex items-center justify-between text-sm shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0B6B40]" />
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
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
            Reports
          </h1>
          <p className="text-sm text-[#737373] mt-1">
            Generate and export key platform reports.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#E5E7EB] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#087F5B] shadow-2xs"
          />
        </div>
      </div>

      {/* REPORTING PERIOD CONTROLS BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#111827]">
            Reporting Period
          </span>
          <div className="relative">
            <button
              onClick={() => setIsPeriodOpen(!isPeriodOpen)}
              className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#111827] hover:bg-gray-50 cursor-pointer shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#737373]" />
              <span>{period}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>
            {isPeriodOpen && (
              <div className="absolute left-0 mt-1 w-44 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-20 text-xs">
                {["Last 7 Days", "Last 15 Days", "Last 30 Days", "This Quarter", "This Year"].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setPeriod(opt);
                        setIsPeriodOpen(false);
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

        {/* Export History Button */}
        <button
          onClick={() => setExportHistoryModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] hover:bg-gray-50 text-xs font-semibold text-[#111827] rounded-lg transition-colors cursor-pointer shadow-2xs"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#737373]" />
          <span>Export History</span>
        </button>
      </div>

      {/* REPORT CARDS LIST */}
      <div className="space-y-3.5">
        {filteredReports.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 border border-[#F3EFEA] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#087F5B]/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#737373] mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleExport(item)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#0B5D4B] text-[#0B5D4B] hover:bg-[#0B5D4B]/10 text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* EXPORT HISTORY MODAL */}
      {exportHistoryModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-[#F3EFEA]">
              <h3 className="text-lg font-bold text-[#111827]">
                Recent Export History
              </h3>
              <button
                onClick={() => setExportHistoryModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="divide-y divide-[#F3EFEA] text-xs">
              {[
                {
                  name: "Users_Report_Nov2026.csv",
                  date: "Nov 14, 2026, 09:30 AM",
                  size: "240 KB",
                },
                {
                  name: "Payouts_Summary_Q3.pdf",
                  date: "Nov 10, 2026, 04:15 PM",
                  size: "1.2 MB",
                },
                {
                  name: "Contributions_Oct2026.xlsx",
                  date: "Nov 02, 2026, 11:00 AM",
                  size: "580 KB",
                },
              ].map((rec, i) => (
                <div key={i} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#111827]">{rec.name}</p>
                    <p className="text-[#737373] text-[11px] mt-0.5">
                      {rec.date} · {rec.size}
                    </p>
                  </div>
                  <button
                    onClick={() => handleExport(rec.name)}
                    className="p-1.5 text-[#0B5D4B] hover:bg-[#EAF7EE] rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setExportHistoryModal(false)}
                className="px-4 py-2 bg-[#0B5D4B] hover:bg-[#074638] text-white text-xs font-semibold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

