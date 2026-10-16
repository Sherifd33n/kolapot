import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar({ onOpenCreateModal, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const handleLoginClick = () => {
    if (onNavigate) {
      onNavigate("signin");
    } else {
      onOpenCreateModal?.("login");
    }
  };

  const handleGetStartedClick = () => {
    if (onNavigate) {
      onNavigate("signup");
    } else {
      onOpenCreateModal?.("create");
    }
  };

  return (
    <header className="relative z-50 w-full px-6 py-4 md:px-12 lg:px-3 bg-[#0B5D4B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate("home");
            }
          }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
        >
          <img
            src="/logo.png"
            alt="PallyPot Logo"
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback if logo fails
              e.currentTarget.style.display = "none";
            }}
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#home"
            onClick={() => setActiveNav("home")}
            className={`text-sm tracking-wide transition-colors relative py-1 ${
              activeNav === "home"
                ? "font-semibold text-white"
                : "font-medium text-[#FFFFFF] hover:text-[#E5A93C]"
            }`}
          >
            <span>Home</span>
            {activeNav === "home" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-gradient-to-r from-[#E5A93C] to-[#735722]" />
            )}
          </a>
          <a
            href="#how-it-works"
            onClick={() => setActiveNav("how-it-works")}
            className={`text-sm tracking-wide transition-colors relative py-1 ${
              activeNav === "how-it-works"
                ? "font-semibold text-white"
                : "font-medium text-[#FFFFFF] hover:text-[#E5A93C]"
            }`}
          >
            <span>How It Works</span>
            {activeNav === "how-it-works" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-gradient-to-r from-[#E5A93C] to-[#F1DF7E]" />
            )}
          </a>
          <a
            href="#trust"
            onClick={() => setActiveNav("trust")}
            className={`text-sm tracking-wide transition-colors relative py-1 ${
              activeNav === "trust"
                ? "font-semibold text-white"
                : "font-medium text-[#FFFFFF] hover:text-[#E5A93C]"
            }`}
          >
            <span>Help</span>
            {activeNav === "trust" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-gradient-to-r from-[#E5A93C] to-[#F1DF7E]" />
            )}
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleLoginClick}
            className="px-6 py-2 text-sm font-normal text-[#F8F5EE] border border-[#F8F5EE] hover:border-[#38856B] rounded-full hover:bg-[#113E30]/60 transition-all duration-200"
          >
            Log in
          </button>
          <button
            onClick={handleGetStartedClick}
            className="px-6 py-2.5 text-sm font-medium text-[#0B5D4B] bg-[#F1DF7E] rounded-full shadow-lg shadow-amber-900/20 hover:shadow-amber-500/30 transition-all duration-300 flex items-center gap-2 group hover:scale-[1.02]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#C8D6D0] p-2 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs sm:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] max-w-[85vw] bg-[#072F24] border-l border-[#194E3B] p-6 shadow-2xl sm:hidden flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Header inside drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-[#14483B]">
            <img
              src="/logo.png"
              alt="PallyPot Logo"
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full text-[#C8D6D0] hover:text-white hover:bg-[#0B4032] transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="space-y-4">
            <a
              href="#home"
              onClick={() => {
                setActiveNav("home");
                setMobileMenuOpen(false);
              }}
              className={`block text-base transition-colors ${
                activeNav === "home"
                  ? "font-semibold text-[#E5A93C]"
                  : "font-medium text-[#C8D6D0] hover:text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#how-it-works"
              onClick={() => {
                setActiveNav("how-it-works");
                setMobileMenuOpen(false);
              }}
              className={`block text-base transition-colors ${
                activeNav === "how-it-works"
                  ? "font-semibold text-[#E5A93C]"
                  : "font-medium text-[#C8D6D0] hover:text-white"
              }`}
            >
              How It Works
            </a>
            <a
              href="#trust"
              onClick={() => {
                setActiveNav("trust");
                setMobileMenuOpen(false);
              }}
              className={`block text-base transition-colors ${
                activeNav === "trust"
                  ? "font-semibold text-[#E5A93C]"
                  : "font-medium text-[#C8D6D0] hover:text-white"
              }`}
            >
              Help
            </a>
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-[#14483B] flex flex-col gap-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleLoginClick();
            }}
            className="w-full py-2.5 text-center text-sm font-medium text-[#E3EDE8] border border-[#235846] rounded-full hover:bg-[#0B4032] transition-colors cursor-pointer"
          >
            Log in
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleGetStartedClick();
            }}
            className="w-full py-2.5 text-center text-sm font-semibold text-[#183327] bg-[#F7D070] rounded-full flex items-center justify-center gap-2 hover:bg-[#ebd06c] transition-colors cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
