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

// 5. Overall Admin Portal (Super Admin / Platform Admin Experience)
export * as PlatformAdminPortal from "./platform-admin";
export { default as PlatformAdminDashboard } from "./platform-admin/PlatformAdminDashboard";


