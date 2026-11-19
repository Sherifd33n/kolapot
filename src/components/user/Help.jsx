import React, { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import ContactSupportView from "./help/ContactSupportView";

export default function Help({ onNavigate }) {
  const [view, setView] = useState("main"); // "main" | "contact"
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  const filters = [
    "All",
    "Contributions",
    "Payouts",
    "Groups",
    "Wallet",
    "Account",
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "How do I add money to my wallet?",
      category: "Wallet",
      answer:
        "You can add money to your wallet via bank transfer to your dedicated virtual account number or with your debit card (Visa, Mastercard, Verve). Go to the Wallet section, click 'Add Funds', select your preferred method, and follow the instructions.",
    },
    {
      id: "faq-2",
      question: "How do I withdraw from my wallet?",
      category: "Wallet",
      answer:
        "To withdraw funds, go to your Wallet dashboard, click 'Withdraw', specify the amount, enter your destination bank account details, and verify with your OTP. Funds are transferred to your bank account immediately.",
    },
    {
      id: "faq-3",
      question: "How do contributions work?",
      category: "Contributions",
      answer:
        "Members contribute an agreed amount on scheduled dates (weekly, bi-weekly, or monthly). All collected funds form the pool that is disbursed to the scheduled member for that cycle according to the group's rotation roster.",
    },
    {
      id: "faq-4",
      question: "When will I receive my payout?",
      category: "Payouts",
      answer:
        "Your payout date corresponds to your cycle position in your Ajo group. You can check your upcoming payout date and position anytime in the Payouts tab or group details screen.",
    },
    {
      id: "faq-5",
      question: "How do I join a group?",
      category: "Groups",
      answer:
        "You can join a group by clicking 'Join with Invite' on your Groups page and entering an invite link or code from a group admin, or by discovering public circles tailored to your savings goals.",
    },
    {
      id: "faq-6",
      question: "What happens if I miss a contribution?",
      category: "Contributions",
      answer:
        "You will receive automatic reminders when a payment is due. If a contribution remains unpaid, your trust rating may be impacted and group members or the admin will be notified to ensure accountability.",
    },
    {
      id: "faq-7",
      question: "How do I update my bank account?",
      category: "Account",
      answer:
        "You can update or add a new withdrawal bank account directly from the Withdrawal page by selecting or entering new details and checking 'Set as default withdrawal bank'.",
    },
    {
      id: "faq-8",
      question: "Is my money safe on PallyPot?",
      category: "Account",
      answer:
        "Yes, absolutely. PallyPot partners with CBN-licensed and NDIC-insured financial institutions. All transactions are protected with bank-grade encryption and secure authentication protocols.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = faqs.filter((faq) => {
    if (activeFilter === "All") return true;
    return faq.category.toLowerCase() === activeFilter.toLowerCase();
  });

  if (view === "contact") {
    return <ContactSupportView onBack={() => setView("main")} />;
  }

  return (
    <div className="space-y-6 animate-tab-content pb-10">
      {/* Title Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['Inria_Serif',serif] font-normal text-[#031B03]">
          Help & Support
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          Find answers to common questions or get in touch with our support team.
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

      {/* Frequently Asked Questions Card */}
      <div className="bg-[#FAF8F6] rounded-md border border-[#CBCCCC] p-5 sm:p-6 shadow-xs max-w-7xl space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-[#000000]">
          Frequently Asked Questions
        </h3>

        <div className="divide-y divide-[#F0ECE6] p-3 border border-[#B6B6BDC2] rounded-md">
          {filteredFaqs.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#8798A6]">
              No questions found for this category.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="py-3.5 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#000000] group-hover:text-[#0B5D4B] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8798A6] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#0B5D4B]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-2.5 pr-8 animate-tab-content">
                      <p className="text-xs sm:text-sm text-[#67746D] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Still Need Help? Banner */}
      <div className="bg-[#0C6B1414] rounded-md p-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 sm:w-28 sm:h-28 flex items-center justify-center shrink-0">
            <img
              src="/help-image.png"
              alt="Help & Support"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#000000]">
              Still Need Help?
            </h4>
            <p className="text-sm sm:text-base text-[#878889] mt-0.5">
              Our support team is here to help you. We typically respond within a
              few minutes.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setView("contact")}
          className="inline-flex items-center gap-4 px-7 py-2.5 bg-[#0B5D4B] hover:bg-[#0B5D4B] text-white font-semibold text-xs sm:text-sm rounded-md transition-colors cursor-pointer shadow-xs shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Contact Support</span>
        </button>
      </div>
    </div>
  );
}
