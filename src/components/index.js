// ==========================================
// PALLYPOT COMPONENT ARCHITECTURE & PORTALS
// ==========================================
// 1. User Portal (Member Experience)
export * as UserPortal from "./user";
export { default as UserDashboard } from "./user/Dashboard";

// 2. Admin Portal (Group Admin & Platform Management)
export * as AdminPortal from "./admin";
export { default as AdminDashboard } from "./admin/AdminDashboard";

// 3. Authentication & Onboarding
export * as AuthModule from "./auth";

// 4. Public Landing Page
export * as LandingModule from "./landing";

