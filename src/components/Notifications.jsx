import React, { useState } from "react";
import { Users, AlertCircle } from "lucide-react";
import { FaWallet } from "react-icons/fa";
import { PiUploadSimple } from "react-icons/pi";
import { BsArrowDownLeft } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";

export default function Notifications({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Contributions",
    "Payouts",
    "Groups",
    "Wallet",
    "Account",
  ];

  const [notifications, setNotifications] = useState([
    {
      id: "notif-1",
      title: "Withdrawal successful",
      description:
        "Your withdrawal of ₦50,000 to Guaranty Trust Bank (GTBank) was completed successfully.",
      time: "2 minutes ago",
      unread: true,
      category: "Wallet",
      icon: FaWallet,
      iconBg: "bg-[#3BD74530] text-[#0B5D4B]",
    },
    {
      id: "notif-2",
      title: "Payout received",
      description: "You received a payout of ₦100,000 from Village Circle.",
      time: "2 minutes ago",
      unread: true,
      category: "Payouts",
      icon: IoWalletSharp,
      iconBg: "bg-[#2F327D30] text-[#2F327D]",
    },
    {
      id: "notif-3",
      title: "You have been added to a group",
      description:
        "Your request to join Community Builders have been approved.",
      time: "2 minutes ago",
      unread: true,
      category: "Groups",
      icon: FaUserGroup,
      iconBg: "bg-[#55423E30] text-[#55423E]",
    },
    {
      id: "notif-4",
      title: "Money added to wallet",
      description: "₦50,000 has been added to your wallet.",
      time: "2 minutes ago",
      unread: false,
      category: "Wallet",
      icon: IoWalletSharp,
      iconBg: "bg-[#2F327D30] text-[#2F327D]",
    },
    {
      id: "notif-5",
      title: "Payment failed",
      description:
        "Your contribution of ₦10,000 to Work Team failed. Please try again.",
      time: "2 minutes ago",
      unread: false,
      category: "Contributions",
      icon: IoIosAlert,
      iconBg: "bg-[#DC5E5E30] text-[#F81111]",
    },
  ]);

  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    );
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (activeFilter === "All") return true;
    return notif.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="space-y-6 animate-tab-content pb-10">
      {/* Title Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['InriaSerif',serif] font-normal text-[#063127]">
          My Notifications
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          Stay updated on your groups, contributions, payouts and wallet activity.
        </p>
      </div>

      {/* Filter Tabs Row */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#064335] text-white shadow-xs"
                  : "bg-[#FAF8F6] text-[#111827] border border-[#D1D7D6] hover:bg-[#f1f1ed] hover:border-[#0B5D4B]/30"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Notifications List */}
      <div className="space-y-3 sm:space-y-3.5">
        {filteredNotifications.length === 0 ? (
          <div className="bg-[#FAF8F6] rounded-md border border-[#CBCCCC] p-10 text-center space-y-2">
            <p className="text-sm font-semibold text-[#111827]">
              No notifications in this category
            </p>
            <p className="text-xs text-[#8798A6]">
              You will see updates here as soon as there is new activity.
            </p>
          </div>
        ) : (
          filteredNotifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                onClick={() => toggleReadStatus(notif.id)}
                className="bg-[#FAF8F6] rounded-md border border-[#CBCCCC] p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-xs hover:border-[#D1D5DB] transition-all cursor-pointer group"
              >
                {/* Notification Avatar / Icon */}
                <div
                  className={`w-11 h-11 rounded-full ${notif.iconBg} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm sm:text-base font-bold text-[#000000] truncate">
                      {notif.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs sm:text-sm text-[#7E7F7D] font-normal">
                        {notif.time}
                      </span>
                      {notif.unread && (
                        <span
                          className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shrink-0 ring-2 ring-white"
                          title="Unread"
                        />
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8798A6] mt-1 leading-relaxed">
                    {notif.description}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
