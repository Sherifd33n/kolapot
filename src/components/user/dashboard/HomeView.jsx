import React from "react";
import {
  Users,
  CreditCard,
  Wallet,
  ArrowRight,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { FaWallet } from "react-icons/fa";
import { PiShoppingBagLight } from "react-icons/pi";
import { IoArrowDown, IoArrowUp, IoTrendingUpOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { Eye, EyeOff, UserPlus, FileText } from "lucide-react";

export default function HomeView({ setActiveTab, setGroupsInitialView, hiddenBalances, setHiddenBalances }) {
  const statCards = [
    { title: "Total Savings", amount: "₦350,000", change: "↑ 12% from last month", isPositive: true, icon: FaWallet, iconBg: "bg-[#0B5D4B26] text-[#064335]", hasEye: true },
    { title: "Wallet Balance", amount: "₦50,000", linkText: "View wallet →", icon: FaWallet, iconBg: "bg-[#0B5D4B26] text-[#064335]", hasEye: true },
    { title: "Next Contribution", amount: "₦10,000", subtitle: "Dream Builders", dueText: "Due in 3 days · Jul 10, 2026", isAlert: true, icon: PiShoppingBagLight, iconBg: "bg-[#B3531626] text-[#E87D0C]", hasArrow: true },
    { title: "Upcoming Payout", amount: "₦200,000", subtitle: "Dream Builders", dueText: "Expected Jul 15, 2026", icon: IoTrendingUpOutline, iconBg: "bg-[#14709D26] text-[#14709D]", hasArrow: false },
  ];

  const yourGroups = [
    { initial: "D", initialBg: "bg-[#FDEBE8] text-[#C93B2B]", name: "Dream Builders", frequency: "10 members · Weekly", contribution: "₦10,000", date: "Jul 10, 2026", badge: "Due in 2 days", badgeStyle: "bg-[#F67E0D26] text-[#F67E0D]" },
    { initial: "D", initialBg: "bg-[#FDEBE8] text-[#C93B2B]", name: "Dream Builders", frequency: "10 members · Bi-weekly", contribution: "₦10,000", date: "Jul 15, 2026", badge: "Upcoming", badgeStyle: "bg-[#1CB72626] text-[#1CB726]" },
    { initial: "D", initialBg: "bg-[#FDEBE8] text-[#C93B2B]", name: "Dream Builders", frequency: "10 members · Monthly", contribution: "₦10,000", date: "Jul 30, 2026", badge: "Due", badgeStyle: "bg-[#EA080826] text-[#EA0808]" },
  ];

  const recentActivity = [
    { type: "Contribution", group: "Dream Builders", amount: "₦10,000", date: "Jul 5, 2026", isIncoming: false },
    { type: "Payout Received", group: "Dream Builders", amount: "₦100,000", date: "Jul 4, 2026", isIncoming: true },
    { type: "Wallet Top-Up", group: "Bank Transfer", amount: "₦20,000", date: "Jul 1, 2026", isWallet: true },
    { type: "Contribution", group: "Dream Builders", amount: "₦10,000", date: "Jul 1, 2026", isIncoming: false },
  ];

  const quickActions = [
    { title: "Join Group With Invite", icon: FaCirclePlus, iconBg: "bg-[#0B5D4B26] text-[#064335]" },
    { title: "Join Ajo Group", icon: LuSend, iconBg: "bg-[#C7A90726] text-[#C7A907]" },
    { title: "Invite Members", icon: UserPlus, iconBg: "bg-[#05578026] text-[#055780]" },
    { title: "Make a Contribution", icon: Wallet, iconBg: "bg-[#31921926] text-[#319219]" },
    { title: "Top Up Balance", icon: CreditCard, iconBg: "bg-[#101FCE26] text-[#101FCE]" },
    { title: "View Transactions", icon: FileText, iconBg: "bg-[#8F4E4626] text-[#8F4E46]" },
  ];

  const groupHealth = [
    { name: "Unity Ajo Circle", cycle: "Cycle 4 of 12 · 12 members", progress: 42, avatarBg: "bg-[#E6F4EA] text-[#0B6B40]", payoutsOnTime: "100%", outstanding: "1" },
    { name: "Dream Builders", cycle: "Cycle 2 of 12 · 12 members", progress: 42, avatarBg: "bg-[#FEF1E6] text-[#C95B00]", payoutsOnTime: "100%", outstanding: "10" },
  ];

  return (
    <>
      <div>
        <h2 className="text-2xl sm:text-3xl font-['InriaSerif',serif] font-normal text-[#063127]">
          Good morning, Amara
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-0.5 font-semibold">
          Here's your savings overview.
        </p>
      </div>

      {/* STAT METRICS ROW (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-[5px] p-3 shadow-xl space-y-3 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full ${card.iconBg} flex items-center justify-center shrink-0`}>
                <card.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-[#03271F]">{card.title}</span>
              {card.hasEye && (
                <button
                  onClick={() => setHiddenBalances((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                  className="p-0.5 text-[#03271F] hover:text-[#52635B] transition-colors"
                  aria-label={hiddenBalances[idx] ? "Show balance" : "Hide balance"}
                >
                  {hiddenBalances[idx] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight">
                {hiddenBalances[idx] ? "••••••" : card.amount}
              </h3>
              {card.hasArrow && (
                <button className="w-7 h-7 rounded-full border border-[#EBE6DD] flex items-center justify-center text-[#8FA39A] hover:text-[#064335] hover:border-[#064335] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <div className="text-[11px] font-medium pt-0.5">
              {card.change && <span className="text-[#0B8A55]">{card.change}</span>}
              {card.linkText && (
                <button onClick={() => setActiveTab("Wallet")} className="text-[#0B6B40] hover:underline cursor-pointer">
                  {card.linkText}
                </button>
              )}
              {card.subtitle && (
                <div>
                  <span className="text-[#0B5D4B] block leading-tight">{card.subtitle}</span>
                  <span className={card.isAlert ? "text-[#C26100] font-semibold" : "text-[#7E7F7D]"}>{card.dueText}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MIDDLE SECTION: Your Groups & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* YOUR GROUPS (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-md p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-[#000000]">Your Groups</h3>
            <button onClick={() => setActiveTab("Groups")} className="text-xs font-semibold text-[#0B6B40] hover:underline flex items-center gap-1">
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="divide-y divide-[#F0EDE6] space-y-1">
            {yourGroups.map((group, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab("Groups")}
                className="pt-4 border-t border-[#E4E4E4] pb-2 flex items-center justify-between gap-3 hover:bg-[#FAF9F6] p-2 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-11 h-11 rounded-full ${group.initialBg} font-bold text-xl flex items-center justify-center shrink-0`}>{group.initial}</div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-[#000000] truncate">{group.name}</h4>
                    <p className="text-[11px] text-[#9A9D97] truncate mt-1">{group.frequency}</p>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-[10px] text-[#7E7F7D] block font-semibold">Next Contribution</span>
                  <span className="text-xs font-bold text-[#000000] block my-1">{group.contribution}</span>
                  <span className="text-[10px] text-[#7E7F7D] block font-semibold">{group.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-semibold justify-center py-1 rounded-full w-[100px] inline-flex ${group.badgeStyle}`}>{group.badge}</span>
                  <ChevronRight className="w-4 h-4 text-[#8FA39A]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ACTIVITY (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-md p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-[#000000]">Recent Activity</h3>
            <button onClick={() => alert("Viewing all recent transactions...")} className="text-xs font-semibold text-[#0B6B40] hover:underline flex items-center gap-1">
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 p-1.5 hover:bg-[#FAF9F6] rounded-xl transition-colors">
                <div className="flex items-center gap-6">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activity.isIncoming ? "bg-[#FDEEEE] text-[#C93B2B]" : "bg-[#17DA1729] text-[#0B5D4B]"}`}>
                    {activity.isIncoming ? <IoArrowDown className="w-4 h-4" /> : activity.isWallet ? <Wallet className="w-4 h-4" /> : <IoArrowUp className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#000000]">{activity.type}</h4>
                    <p className="text-[12px] text-[#7E7F7D] font-medium mt-1">{activity.group}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#000000] block">{activity.amount}</span>
                  <span className="text-[12px] text-[#7E7F7D] block font-medium mt-1">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS SECTION */}
      <div className="bg-[#fefdf5] rounded-md p-5 sm:p-6 shadow-xl space-y-4">
        <div>
          <h3 className="text-lg font-bold text-[#000000]">Quick Actions</h3>
          <p className="text-sm text-[#7E7F7D] font-medium">Quick access to your savings tools.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (action.title === "Join Group With Invite") {
                  setGroupsInitialView("join-invite");
                  setActiveTab("Groups");
                } else {
                  alert(`Triggering: ${action.title}`);
                }
              }}
              className="flex items-center justify-between p-3.5 rounded-md border border-[#ECE7DE] bg-white hover:border-[#0B6B40] hover:shadow-xs transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${action.iconBg} flex items-center justify-center shrink-0`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#000000] group-hover:text-[#064335] transition-colors">{action.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8FA39A] group-hover:translate-x-0.5 transition-transform" />
            </button>
          ))}
        </div>
      </div>

      {/* AJO GROUP HEALTH SECTION */}
      <div className="bg-[#fefdf5] rounded-md p-5 sm:p-6 shadow-xl space-y-4">
        <div>
          <h3 className="text-lg font-bold text-[#000000]">Ajo Group Health</h3>
          <p className="text-sm text-[#7E7F7D] font-medium">Contribution and payout performance across your groups.</p>
        </div>
        <div className="space-y-6">
          {groupHealth.map((health, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-full ${health.avatarBg} flex items-center justify-center shrink-0`}>
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#000000]">{health.name}</h4>
                  <p className="text-sm text-[#7E7F7D] mt-1 font-medium">{health.cycle}</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#323635]">Contribution completion</span>
                  <span className="font-bold text-[#0B5D4B] text-base">{health.progress}%</span>
                </div>
                <div className="w-full h-4 bg-[#EBE7DF] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0B5D4B] rounded-full transition-all duration-500" style={{ width: `${health.progress}%` }} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-md bg-[#A0987121] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#23DDB430] text-[#064335] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm mb-1 text-[#70726F] block leading-tight">Payouts completed on time</span>
                    <span className="text-base font-bold text-[#000000]">{health.payoutsOnTime}</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-md bg-[#A0987121] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#23DDB430] text-[#064335] flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm mb-1 text-[#70726F] block leading-tight">Outstanding contributions this cycle</span>
                    <span className="text-base font-bold text-[#000000]">{health.outstanding}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
