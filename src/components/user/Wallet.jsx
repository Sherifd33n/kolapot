import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  Wallet as WalletIcon,
  Plus,
  ArrowUpRight,
  ArrowLeft,
  Landmark,
  CreditCard,
  ChevronDown,
  Copy,
  Check,
  Info,
  X,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowDownLeft,
} from "lucide-react";
import confetti from "canvas-confetti";
import { FaWallet } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { PiUploadSimple } from "react-icons/pi";
import { RiBankLine } from "react-icons/ri";
import BankTransferView from "./wallet/BankTransferView";
import PayWithCardView from "./wallet/PayWithCardView";
import WithdrawalView from "./wallet/WithdrawalView";
import AddFundsView from "./wallet/AddFundsView";
import WalletSuccessView from "./wallet/WalletSuccessView";
import WalletMetricsSection from "./wallet/WalletMetricsSection";
import WalletTransactionsSection from "./wallet/WalletTransactionsSection";

export default function Wallet({ onNavigate }) {
  // Current view: "main" | "add-funds" | "transfer-details" | "card-payment" | "withdraw" | "success"
  const [view, setView] = useState("main");

  // Wallet balances
  const [balance, setBalance] = useState(120000);
  const [totalContributions] = useState(350000);
  const [totalDeposits, setTotalDeposits] = useState(500000);
  const [totalWithdrawals, setTotalWithdrawals] = useState(380000);

  // Add Money Form state
  const [depositAmount, setDepositAmount] = useState("50,000");
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer"); // "bank-transfer" | "card-payment"
  const [copiedField, setCopiedField] = useState(null);

  // Card payment form state
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Withdraw Modal State
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawError, setWithdrawError] = useState("");

  // Filter states for transactions
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [dateFilter, setDateFilter] = useState("This Month");

  // Transactions list
  const [transactions, setTransactions] = useState([
    {
      id: "tx-1",
      date: "20 Oct 2026, 10:24 AM",
      type: "Deposit",
      description: "Bank transfer from GTBank",
      reference: "DEP-782910",
      amount: "+₦50,000",
      numericAmount: 50000,
      isPositive: true,
      status: "Completed",
    },
    {
      id: "tx-2",
      date: "20 Oct 2026, 10:24 AM",
      type: "Contribution",
      description: "Unity Ajo Circle – Cycle 4",
      reference: "DEP-782910",
      amount: "+₦50,000",
      numericAmount: 50000,
      isPositive: true,
      status: "Completed",
    },
    {
      id: "tx-3",
      date: "20 Oct 2026, 10:24 AM",
      type: "Withdrawal",
      description: "To GTBank (•••• 4821)",
      reference: "DEP-782910",
      amount: "+₦50,000",
      numericAmount: 50000,
      isPositive: false,
      status: "Failed",
    },
    {
      id: "tx-4",
      date: "20 Oct 2026, 10:24 AM",
      type: "Payout",
      description: "Family Circle – Cycle 3",
      reference: "DEP-782910",
      amount: "+₦50,000",
      numericAmount: 50000,
      isPositive: true,
      status: "Completed",
    },
    {
      id: "tx-5",
      date: "20 Oct 2026, 10:24 AM",
      type: "Deposit",
      description: "Bank transfer from GTBank",
      reference: "DEP-782910",
      amount: "+₦50,000",
      numericAmount: 50000,
      isPositive: true,
      status: "Completed",
    },
    {
      id: "tx-6",
      date: "20 Oct 2026, 10:24 AM",
      type: "Deposit",
      description: "Bank transfer from GTBank",
      reference: "DEP-782910",
      amount: "+₦50,000",
      numericAmount: 50000,
      isPositive: true,
      status: "Completed",
    },
  ]);

  // Copy helper
  const handleCopy = (text, field) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Quick preset amounts
  const presetAmounts = ["10,000", "30,000", "50,000", "100,000", "200,000"];

  // Handle Amount change from input
  const handleAmountChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) {
      setDepositAmount("");
      return;
    }
    const formatted = parseInt(raw, 10).toLocaleString();
    setDepositAmount(formatted);
  };

  // Submit deposit method step
  const handleContinueToDeposit = () => {
    const num = parseInt(depositAmount.replace(/,/g, ""), 10);
    if (!num || isNaN(num) || num <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }
    if (paymentMethod === "bank-transfer") {
      setView("transfer-details");
    } else {
      setView("card-payment");
    }
  };

  // Confirm Bank Transfer Payment
  const handleConfirmTransferPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const added = parseInt(depositAmount.replace(/,/g, ""), 10) || 50000;
      setBalance((prev) => prev + added);
      setTotalDeposits((prev) => prev + added);

      // Add transaction
      const newTx = {
        id: `tx-${Date.now()}`,
        date: "Today, Just now",
        type: "Deposit",
        description: "Bank transfer from GTBank",
        reference: `DEP-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: `+₦${added.toLocaleString()}`,
        numericAmount: added,
        isPositive: true,
        status: "Completed",
      };
      setTransactions((prev) => [newTx, ...prev]);

      // Fire confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0B5D4B", "#10B981", "#34D399", "#FBBF24"],
      });

      setView("success");
    }, 1200);
  };

  // Submit Card Payment
  const handleConfirmCardPayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const added = parseInt(depositAmount.replace(/,/g, ""), 10) || 50000;
      setBalance((prev) => prev + added);
      setTotalDeposits((prev) => prev + added);

      // Add transaction
      const newTx = {
        id: `tx-${Date.now()}`,
        date: "Today, Just now",
        type: "Deposit",
        description: "Debit card deposit",
        reference: `DEP-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: `+₦${added.toLocaleString()}`,
        numericAmount: added,
        isPositive: true,
        status: "Completed",
      };
      setTransactions((prev) => [newTx, ...prev]);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0B5D4B", "#10B981", "#34D399", "#FBBF24"],
      });

      setView("success");
    }, 1200);
  };

  // Handle Withdrawal
  const handleExecuteWithdrawal = (e) => {
    e.preventDefault();
    const amountNum = parseInt(withdrawAmount.replace(/,/g, ""), 10);
    if (!amountNum || isNaN(amountNum) || amountNum <= 0) {
      setWithdrawError("Please enter a valid amount to withdraw.");
      return;
    }
    if (amountNum > balance) {
      setWithdrawError(
        `Amount exceeds your available balance of ₦${balance.toLocaleString()}.`
      );
      return;
    }

    setWithdrawError("");
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setBalance((prev) => prev - amountNum);
      setTotalWithdrawals((prev) => prev + amountNum);

      const newTx = {
        id: `tx-${Date.now()}`,
        date: "Today, Just now",
        type: "Withdrawal",
        description: "To GTBank (•••• 4821)",
        reference: `WTH-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: `-₦${amountNum.toLocaleString()}`,
        numericAmount: amountNum,
        isPositive: false,
        status: "Completed",
      };
      setTransactions((prev) => [newTx, ...prev]);
      setWithdrawModalOpen(false);
      setWithdrawAmount("");

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#0B5D4B", "#10B981", "#34D399"],
      });
    }, 1000);
  };

  // Filter transactions
  const filteredTransactions = transactions.filter((tx) => {
    if (typeFilter !== "All Types" && tx.type !== typeFilter) return false;
    if (statusFilter !== "All Statuses" && tx.status !== statusFilter)
      return false;
    return true;
  });

  // =========================================================================
  // VIEW: Add Funds (Image 1)
  // =========================================================================
  if (view === "add-funds") {
    return (
      <AddFundsView
        depositAmount={depositAmount}
        handleAmountChange={handleAmountChange}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        onBack={() => setView("main")}
        onContinue={handleContinueToDeposit}
      />
    );
  }

  // =========================================================================
  // VIEW: Transfer Details (Bank Transfer Payment flow)
  // =========================================================================
  if (view === "transfer-details") {
    return (
      <BankTransferView
        depositAmount={depositAmount}
        paymentReference="PPD784629"
        bankDetails={{
          bankName: "Moniepoint MFB",
          accountNumber: "1234567890",
          accountName: "PallyPot Payments",
        }}
        copiedField={copiedField}
        handleCopy={handleCopy}
        isProcessing={isProcessing}
        onBack={() => setView("add-funds")}
        onComplete={handleConfirmTransferPayment}
        onCancel={() => setView("add-funds")}
      />
    );
  }

  // =========================================================================
  // VIEW: Card Payment flow
  // =========================================================================
  if (view === "card-payment") {
    return (
      <PayWithCardView
        depositAmount={depositAmount}
        cardData={cardData}
        setCardData={setCardData}
        isProcessing={isProcessing}
        onBack={() => setView("add-funds")}
        onSubmit={handleConfirmCardPayment}
      />
    );
  }

  // =========================================================================
  // VIEW: Withdrawal flow (Image 2)
  // =========================================================================
  if (view === "withdraw") {
    return (
      <WithdrawalView
        balance={balance}
        withdrawAmount={withdrawAmount}
        setWithdrawAmount={setWithdrawAmount}
        isProcessing={isProcessing}
        onBack={() => setView("main")}
        onSubmit={({ amount, bankName, accountNumber }) => {
          setIsProcessing(true);
          setTimeout(() => {
            setIsProcessing(false);
            setBalance((prev) => prev - amount);
            setTotalWithdrawals((prev) => prev + amount);

            const newTx = {
              id: `tx-${Date.now()}`,
              date: "Today, Just now",
              type: "Withdrawal",
              description: `To ${bankName} (•••• ${accountNumber.slice(-4)})`,
              reference: `WTH-${Math.floor(100000 + Math.random() * 900000)}`,
              amount: `-₦${amount.toLocaleString()}`,
              numericAmount: amount,
              isPositive: false,
              status: "Completed",
            };
            setTransactions((prev) => [newTx, ...prev]);
            setView("main");

            confetti({
              particleCount: 80,
              spread: 60,
              origin: { y: 0.6 },
              colors: ["#0B5D4B", "#10B981", "#34D399"],
            });
          }, 1000);
        }}
      />
    );
  }

  // =========================================================================
  // VIEW: Success state
  // =========================================================================
  if (view === "success") {
    return (
      <WalletSuccessView
        depositAmount={depositAmount}
        balance={balance}
        onBackToWallet={() => setView("main")}
      />
    );
  }

  // =========================================================================
  // VIEW: Main Wallet Dashboard (Image 2)
  // =========================================================================
  return (
    <div className="space-y-6 animate-tab-content pb-10">
      {/* Title Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-['InriaSerif',serif] font-normal text-[#063127]">
          My Wallet
        </h2>
        <p className="text-sm sm:text-base text-[#7E7F7D] mt-1 font-normal">
          View your transactions and track money moving in and out of your wallet.
        </p>
      </div>

      {/* METRICS ROW (4 Cards) */}
      <WalletMetricsSection
        balance={balance}
        totalContributions={totalContributions}
        totalDeposits={totalDeposits}
        totalWithdrawals={totalWithdrawals}
      />

      {/* WALLET ACTIONS CARD */}
      <div className="bg-white rounded-md p-4 shadow-xs border border-[#F3EFEA] flex flex-col sm:flex-row justify-between gap-5">
        <div>
          <h3 className="text-base font-bold text-[#000000]">Wallet Actions</h3>
          <p className="text-sm text-[#8798A6] mt-0.5">
            Add money to your wallet or withdraw to your bank account.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Action 1: Add Funds */}
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => setView("add-funds")}
              className="inline-flex items-center justify-center gap-4 px-8 py-3 bg-[#0B5D4B] hover:bg-[#064335] text-white font-semibold text-xs sm:text-sm rounded-md transition-colors shadow-xs cursor-pointer w-full sm:w-auto"
            >
              <BsPlusCircleFill className="w-5 h-5" color="#ffffff"/>
              <span>Add Funds</span>
            </button>
            <span className="text-[11px] text-[#7E7F7D] mt-1.5 font-normal text-center">
              Fund your wallet via bank transfer.
            </span>
          </div>

          {/* Action 2: Withdraw */}
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => setView("withdraw")}
              className="inline-flex items-center justify-center gap-4 px-8 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#0B5D4B] border-2 border-[#0B5D4B] font-semibold text-xs sm:text-sm rounded-md transition-colors shadow-xs cursor-pointer w-full sm:w-auto"
            >
              <PiUploadSimple className="w-5 h-5" />
              <span>Withdraw</span>
            </button>
            <span className="text-[11px] text-[#7E7F7D] mt-1.5 font-normal text-center">
              Send money to your bank account.
            </span>
          </div>
        </div>
      </div>

      {/* TRANSACTIONS SECTION */}
      <WalletTransactionsSection
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        filteredTransactions={filteredTransactions}
      />
    </div>
  );
}
