import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProcessBar from "./components/ProcessBar";
import TraditionTrust from "./components/TraditionTrust";
import FourVoices from "./components/FourVoices";
import AjoModal from "./components/AjoModal";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import VerifyAccount from "./components/VerifyAccount";
import CompleteProfile from "./components/CompleteProfile";
import VerifiedIdentity from "./components/VerifiedIdentity";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/admin/AdminDashboard";

export default function App() {
  const getInitialPage = () => {
    const hash = (typeof window !== "undefined" ? window.location.hash : "").toLowerCase();
    const pathname = (typeof window !== "undefined" ? window.location.pathname : "").toLowerCase();
    const full = `${pathname} ${hash}`;

    if (full.includes("signin") || full.includes("login")) return "signin";
    if (full.includes("signup") || full.includes("register")) return "signup";
    if (full.includes("verify") && !full.includes("verified")) return "verify";
    if (full.includes("verified")) return "verified";
    if (full.includes("admin") || full.includes("create-group")) return "admin";
    if (
      full.includes("dashboard") ||
      full.includes("group") ||
      full.includes("payout") ||
      full.includes("wallet") ||
      full.includes("contribution") ||
      full.includes("notification") ||
      full.includes("help")
    )
      return "dashboard";
    if (full.includes("profile") || full.includes("complete")) return "complete-profile";
    return "home";
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [userPhone, setUserPhone] = useState("+234 802 123 4567");
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: "create",
  });

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = (typeof window !== "undefined" ? window.location.hash : "").toLowerCase();
      const pathname = (typeof window !== "undefined" ? window.location.pathname : "").toLowerCase();
      const full = `${pathname} ${hash}`;

      if (full.includes("signin") || full.includes("login")) {
        setCurrentPage("signin");
      } else if (full.includes("signup") || full.includes("register")) {
        setCurrentPage("signup");
      } else if (full.includes("verify") && !full.includes("verified")) {
        setCurrentPage("verify");
      } else if (full.includes("verified")) {
        setCurrentPage("verified");
      } else if (full.includes("admin") || full.includes("create-group")) {
        setCurrentPage("admin");
      } else if (
        full.includes("dashboard") ||
        full.includes("group") ||
        full.includes("payout") ||
        full.includes("wallet") ||
        full.includes("contribution") ||
        full.includes("notification") ||
        full.includes("help")
      ) {
        setCurrentPage("dashboard");
      } else if (full.includes("profile") || full.includes("complete")) {
        setCurrentPage("complete-profile");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleUrlChange);
    window.addEventListener("popstate", handleUrlChange);
    return () => {
      window.removeEventListener("hashchange", handleUrlChange);
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  const handleNavigate = (page, data = null) => {
    setCurrentPage(page);
    if (data?.phone) {
      setUserPhone(data.phone);
    }
    if (page === "signin") {
      window.location.hash = "/signin";
    } else if (page === "signup") {
      window.location.hash = "/signup";
    } else if (page === "verify") {
      window.location.hash = "/verify";
    } else if (page === "complete-profile") {
      window.location.hash = "/complete-profile";
    } else if (page === "verified") {
      window.location.hash = "/verified";
    } else if (page === "dashboard") {
      window.location.hash = "/dashboard";
    } else if (page === "admin") {
      window.location.hash = "/admin";
    } else {
      window.location.hash = "";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenModal = (mode = "create") => {
    setModalState({ isOpen: true, mode });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, mode: "create" });
  };

  // Render Dashboard Page (Member)
  if (currentPage === "dashboard") {
    return <Dashboard onNavigate={handleNavigate} />;
  }

  // Render Admin Dashboard (Independent)
  if (currentPage === "admin") {
    return <AdminDashboard onNavigate={handleNavigate} />;
  }

  // Render Sign In Page
  if (currentPage === "signin") {
    return <SignIn onNavigate={handleNavigate} />;
  }

  // Render Sign Up Page
  if (currentPage === "signup") {
    return <SignUp onNavigate={handleNavigate} />;
  }

  // Render Verify Account (OTP) Page
  if (currentPage === "verify") {
    return (
      <VerifyAccount
        onNavigate={handleNavigate}
        phoneNumber={userPhone}
      />
    );
  }

  // Render Complete Profile (KYC) Page
  if (currentPage === "complete-profile") {
    return <CompleteProfile onNavigate={handleNavigate} />;
  }

  // Render Verified Identity Success Page
  if (currentPage === "verified") {
    return <VerifiedIdentity onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-white text-[#F7F4EB] flex flex-col selection:bg-[#E5A93C] selection:text-[#08251B] overflow-x-hidden">
      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Navigation Bar */}
        <Navbar
          onOpenCreateModal={handleOpenModal}
          onNavigate={handleNavigate}
        />

        {/* Hero Section */}
        <main className="flex-1">
          <HeroSection
            onOpenCreateModal={handleOpenModal}
            onNavigate={handleNavigate}
          />

          {/* Interactive Steps Process Bar */}
          <ProcessBar onOpenCreateModal={handleOpenModal} />

          {/* A Tradition Built On Trust */}
          <TraditionTrust />

          {/* One Idea. Four Voices. */}
          <FourVoices />
        </main>
      </div>

      {/* Interactive Modal for Circle Creation / Login */}
      <AjoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialMode={modalState.mode}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

