"use client";

import { useState } from "react";

// ── Professional SVG Icons ─────────────────────────────────────────────────────

function IcChartBar({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    );
}
function IcRefresh({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
    );
}
function IcCreditCard({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    );
}
function IcTarget({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}
function IcHome({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    );
}
function IcClipboard({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
    );
}
function IcBook({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    );
}
function IcPayment({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    );
}
function IcDocument({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}
function IcSupport({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );
}
function IcBell({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
    );
}
function IcLogout({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
    );
}
function IcMenu({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
}
function IcClose({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
function IcPlay({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function IcCheck({ className = "w-3.5 h-3.5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    );
}
function IcChevronRight({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );
}
function IcMail({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}
function IcPhone({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );
}
function IcClock({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function IcCalendar({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    );
}
function IcCash({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function IcShield({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}
function IcWave({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
    );
}
function IcTrendDown({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
    );
}
function IcHospital({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    );
}
function IcCurrency({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function IcTrendUp({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    );
}
function IcHandshake({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}
function IcLightning({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );
}
function IcGlobe({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function IcQuestion({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function IcDownload({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
    );
}
function IcLifebuoy({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );
}

// ─────────────────────────────────────────────────────────────────────────────

const USER = {
    name: "Ahmed",
    fullName: "Ahmed Raza Khan",
    cnic: "35202-1234567-9",
    email: "ahmed.raza@email.com",
    mobile: "0300-1234567",
    avatar: "https://i.pravatar.cc/150?img=68",
    joined: "15 January 2026",
};

const STATS = [
    { label: "Certificate Progress", value: "In Progress", Icon: IcChartBar, color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200", dot: "bg-yellow-400" },
    { label: "Test Attempts Remaining", value: "2 of 3", Icon: IcRefresh, color: "text-blue-600", bg: "bg-blue-50 border-blue-200", dot: "bg-blue-400" },
    { label: "Fee Status", value: "Pending", Icon: IcCreditCard, color: "text-orange-600", bg: "bg-orange-50 border-orange-200", dot: "bg-orange-400" },
    { label: "Assessment Score", value: "Not Taken", Icon: IcTarget, color: "text-gray-500", bg: "bg-gray-50 border-gray-200", dot: "bg-gray-300" },
];

const ACTIVITY = [
    { label: "Last Login", value: "21 February 2026 — 10:45 AM", Icon: IcClock },
    { label: "Registration Date", value: "15 January 2026", Icon: IcClipboard },
    { label: "CNIC Verified", value: "15 January 2026 via NADRA", Icon: IcCash },
    { label: "Certificate Expiry (if issued)", value: "21 February 2028", Icon: IcCalendar },
];

const NAV_LINKS = [
    { Icon: IcHome, label: "Dashboard", href: "#", active: true },
    { Icon: IcClipboard, label: "Assessment", href: "/assesment", active: false },
    { Icon: IcBook, label: "Curriculum", href: "/curriculum", active: false },
    { Icon: IcPayment, label: "Payment", href: "#", active: false },
    { Icon: IcDocument, label: "My Certificate", href: "#", active: false },
    { Icon: IcSupport, label: "FAQ & Support", href: "#", active: false },
];

export default function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "Nunito,sans-serif" }}>

            {/* TOP BAR */}
            <div className="bg-green-900 text-white text-xs py-2 px-4 z-50">
                <div className="max-w-full mx-auto flex items-center justify-between">
                    <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official National Portal</span>
                    <div className="flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                        <span>Applications Open 2025–2026</span>
                    </div>
                </div>
            </div>

            {/* TOP NAVBAR */}
            <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
                <div className="px-4 sm:px-6 flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                            {sidebarOpen ? <IcClose /> : <IcMenu />}
                        </button>
                        <a href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-white shadow-sm">
                                <span className="text-green-700 font-black text-xs">PGCC</span>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-green-700 font-black text-base leading-tight" style={{ fontFamily: "Merriweather,serif" }}>PGCC Portal</p>
                                <p className="text-gray-400 text-xs">Pakistan Global Competence Council</p>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                            <IcBell />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="flex items-center gap-2 pl-2 border-l border-gray-100">
                            <img src={USER.avatar} alt={USER.fullName} className="w-9 h-9 rounded-full border-2 border-green-200 object-cover" />
                            <div className="hidden sm:block">
                                <p className="text-sm font-bold text-gray-800 leading-tight">{USER.fullName}</p>
                                <p className="text-xs text-gray-400">{USER.cnic}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setLogoutModal(true)}
                            className="hidden sm:flex items-center gap-1.5 border border-red-200 text-red-600 hover:bg-red-50 font-semibold text-xs px-3 py-2 rounded-lg transition-all"
                        >
                            <IcLogout />
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 overflow-hidden">

                {/* SIDEBAR */}
                <>
                    {sidebarOpen && (
                        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
                    )}
                    <aside className={`fixed lg:sticky top-0 left-0 h-screen z-30 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:top-auto`}
                        style={{ maxHeight: "100vh", overflowY: "auto" }}>
                        <div className="p-6 border-b border-gray-100 bg-gradient-to-b from-green-50 to-white">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-3">
                                    <img src={USER.avatar} alt={USER.fullName} className="w-20 h-20 rounded-2xl border-4 border-white shadow-md object-cover" />
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                                </div>
                                <h3 className="font-black text-gray-900 text-base leading-tight" style={{ fontFamily: "Merriweather,serif" }}>{USER.fullName}</h3>
                                <p className="text-gray-500 text-xs mt-0.5">{USER.email}</p>
                                <div className="mt-2 bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200 flex items-center gap-1.5">
                                    <IcRefresh className="w-3 h-3" />
                                    In Progress
                                </div>
                            </div>
                        </div>
                        <nav className="flex-1 px-3 py-4 space-y-1">
                            {NAV_LINKS.map(link => (
                                <a key={link.label} href={link.href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${link.active ? "bg-green-700 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                                >
                                    <link.Icon className="w-4 h-4 flex-shrink-0" />
                                    {link.label}
                                    {link.label === "Assessment" && (
                                        <span className="ml-auto text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">Go</span>
                                    )}
                                </a>
                            ))}
                        </nav>
                        <div className="p-4 border-t border-gray-100">
                            <button
                                onClick={() => setLogoutModal(true)}
                                className="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 font-semibold text-sm px-3 py-2.5 rounded-xl transition-all"
                            >
                                <IcLogout className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    </aside>
                </>

                {/* MAIN CONTENT */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <div className="max-w-5xl mx-auto space-y-6">

                        {/* WELCOME BANNER */}
                        <div className="relative rounded-2xl overflow-hidden text-white" style={{ background: "linear-gradient(135deg,#0d4f1e 0%,#1a7a35 60%,#2d9e50 100%)" }}>
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                            <div className="relative px-6 py-7 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                                <div className="flex items-center gap-4">
                                    <img src={USER.avatar} alt={USER.fullName} className="w-16 h-16 rounded-2xl border-4 border-white/30 object-cover shadow-lg flex-shrink-0" />
                                    <div>
                                        <div className="flex items-center gap-1.5 text-green-200 text-sm font-semibold mb-0.5">
                                            <IcWave className="w-4 h-4" />
                                            Welcome back,
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-black leading-tight" style={{ fontFamily: "Merriweather,serif" }}>{USER.name}!</h1>
                                        <p className="text-white/70 text-sm mt-1">You are preparing for a successful international journey with PGCC.</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <a href="/assesment" className="inline-flex items-center gap-2 bg-white text-green-700 font-black text-sm px-5 py-3 rounded-xl hover:bg-green-50 transition-all shadow-lg">
                                        <IcPlay />
                                        Start Assessment
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* STATS GRID */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {STATS.map(s => (
                                <div key={s.label} className={`border ${s.bg} rounded-2xl p-5 hover:shadow-md transition-all`}>
                                    <div className="flex items-center justify-between mb-3">
                                        <s.Icon className={`w-5 h-5 ${s.color}`} />
                                        <span className={`w-2.5 h-2.5 rounded-full ${s.dot}`} />
                                    </div>
                                    <p className={`text-lg font-black leading-tight ${s.color}`} style={{ fontFamily: "Merriweather,serif" }}>{s.value}</p>
                                    <p className="text-gray-500 text-xs mt-1 leading-snug">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-black text-gray-900 text-base" style={{ fontFamily: "Merriweather,serif" }}>Certificate Progress</h2>
                                <span className="text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                                    <IcRefresh className="w-3 h-3" />
                                    In Progress
                                </span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { step: "Account Created & CNIC Verified via NADRA", done: true },
                                    { step: "Training Programme Completed", done: false },
                                    { step: "Assessment Passed (75%+ required)", done: false },
                                    { step: "Fee Paid (PKR 15,000)", done: false },
                                    { step: "PGCC Certificate Issued & Passport Linked", done: false },
                                ].map((item, i) => (
                                    <div key={item.step} className="flex items-center gap-3">
                                        <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${item.done ? "bg-green-700 border-green-700 text-white" : "border-gray-300 text-gray-400"}`}>
                                            {item.done ? <IcCheck /> : (i + 1)}
                                        </div>
                                        <div className="flex-1 flex items-center justify-between">
                                            <p className={`text-sm font-semibold ${item.done ? "text-gray-800" : "text-gray-400"}`}>{item.step}</p>
                                            {item.done && (
                                                <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                                                    <IcCheck className="w-3 h-3" /> Done
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5">
                                <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                                    <span>Overall Progress</span>
                                    <span className="font-bold text-green-700">20%</span>
                                </div>
                                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full w-1/5 bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* QUICK ACTIONS + BENEFITS */}
                        <div className="grid lg:grid-cols-2 gap-6">

                            {/* Quick Actions */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                    <IcLightning className="w-4 h-4 text-yellow-500" /> Quick Actions
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { Icon: IcPlay, label: "Start / Resume Assessment", sub: "Hybrid exam · pass with 75% to get certified", cta: "Start Now", primary: true, done: false, href: "/assesment" },
                                        { Icon: IcBook, label: "Practice Curriculum", sub: "Four core competency areas — cultural, professional, ethical, legal", cta: "View", primary: false, done: false, href: "/curriculum" },
                                        { Icon: IcCreditCard, label: "Pay Assessment Fee", sub: "PKR 15,000 — one-time certification fee", cta: "Pay Now", primary: false, done: false, href: "#" },
                                        { Icon: IcDownload, label: "Download Study Material", sub: "Practice guides & sample questions", cta: "Download", primary: false, done: false, href: "/curriculum-guide.pdf" },].map(action => (
                                            <div key={action.label} className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all ${action.done ? "bg-green-50 border-green-200" : "border-gray-100 hover:border-green-200 hover:bg-green-50/50"}`}>
                                                <div className="flex items-center gap-3">
                                                    <action.Icon className={`w-5 h-5 flex-shrink-0 ${action.done ? "text-green-600" : "text-gray-400"}`} />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-800">{action.label}</p>
                                                        <p className="text-xs text-gray-400">{action.sub}</p>
                                                    </div>
                                                </div>
                                                <a href={action.href}
                                                    download={action.href.endsWith('.pdf') ? true : undefined}
                                                    className={`flex-shrink-0 text-xs font-black px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${action.done
                                                        ? "bg-green-100 text-green-700 cursor-default"
                                                        : action.primary
                                                            ? "bg-green-700 text-white hover:bg-green-800 shadow-sm"
                                                            : "border border-green-700 text-green-700 hover:bg-green-50"
                                                        }`}
                                                >
                                                    {action.done && <IcCheck className="w-3 h-3" />}
                                                    {action.cta}
                                                </a>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                    <IcGlobe className="w-4 h-4 text-green-600" /> Why PGCC Certification Matters
                                </h2>
                                <p className="text-gray-500 text-sm mb-4">Your PGCC certificate helps you and Pakistan by:</p>
                                <div className="space-y-3">
                                    {[
                                        { Icon: IcTrendDown, text: "Reducing visa rejections by 25–40% through standardised preparation" },
                                        { Icon: IcShield, text: "Protecting you from exploitation, legal penalties, and crises abroad" },
                                        { Icon: IcCurrency, text: "Boosting Pakistan's $29.8B remittances by placing skilled workers globally" },
                                        { Icon: IcTrendUp, text: "Elevating Pakistan's global reputation as a source of prepared, skilled talent" },
                                    ].map(b => (
                                        <div key={b.text} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <b.Icon className="w-4 h-4 text-green-700" />
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed pt-1">{b.text}</p>
                                        </div>
                                    ))}
                                </div>
                                {/* Pakistan badge */}
                                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                                    <div className="flex gap-1">
                                        <div className="w-4 h-4 rounded-sm bg-[#01411C]" />
                                        <div className="w-4 h-4 rounded-sm bg-white border border-gray-200" />
                                        <div className="w-4 h-4 rounded-sm bg-[#01411C]" />
                                    </div>
                                    <p className="text-xs text-gray-400">A national initiative by the Government of Pakistan · PGCC</p>
                                </div>
                            </div>
                        </div>

                        {/* RECENT ACTIVITY + SUPPORT */}
                        <div className="grid lg:grid-cols-2 gap-6">

                            {/* Recent Activity */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                    <IcClock className="w-4 h-4 text-gray-500" /> Recent Activity
                                </h2>
                                <div className="space-y-4">
                                    {ACTIVITY.map(item => (
                                        <div key={item.label} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <item.Icon className="w-4 h-4 text-gray-500" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                                                <p className="text-sm font-bold text-gray-800 mt-0.5">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Support */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                    <IcLifebuoy className="w-4 h-4 text-blue-500" /> Support & Resources
                                </h2>
                                <div className="space-y-3 mb-5">
                                    <a href="#" className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all group">
                                        <div className="w-9 h-9 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IcQuestion className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800 group-hover:text-green-700 transition-colors">FAQ</p>
                                            <p className="text-xs text-gray-400">Common questions about the assessment, fee & NADRA integration</p>
                                        </div>
                                        <IcChevronRight className="w-4 h-4 text-gray-300 group-hover:text-green-600 ml-auto flex-shrink-0 transition-colors" />
                                    </a>
                                    <a href="/curriculum-guide.pdf" download className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all group">                                        <div className="w-9 h-9 bg-purple-50 border border-purple-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <IcBook className="w-4 h-4 text-purple-500" />
                                    </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800 group-hover:text-green-700 transition-colors">Curriculum Guide</p>
                                            <p className="text-xs text-gray-400">Download the full PGCC competency study material PDF</p>
                                        </div>
                                        <IcChevronRight className="w-4 h-4 text-gray-300 group-hover:text-green-600 ml-auto flex-shrink-0 transition-colors" />
                                    </a>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-2">
                                    <p className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                                        <IcMail className="w-3.5 h-3.5 text-green-700" />
                                        24/7 Global Help Desk
                                    </p>
                                    <a href="mailto:support@pgcc.gov.pk" className="flex items-center gap-2 text-sm text-green-700 font-semibold hover:underline">
                                        <IcMail className="w-4 h-4" />
                                        support@pgcc.gov.pk
                                    </a>
                                    <a href="tel:+923001234567" className="flex items-center gap-2 text-sm text-green-700 font-semibold hover:underline">
                                        <IcPhone className="w-4 h-4" />
                                        +92 300 1234567
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ASSESSMENT CTA BANNER */}
                        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-white shadow-lg">
                            <div>
                                <h3 className="font-black text-xl mb-1" style={{ fontFamily: "Merriweather,serif" }}>Ready to take your PGCC assessment?</h3>
                                <p className="text-white/75 text-sm">Hybrid exam (online or in-person) · Pass with 75% · Certificate linked to NADRA & Passport</p>
                                <div className="flex items-center gap-4 mt-3 text-sm">
                                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" />2 attempts remaining</span>
                                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" />PKR 15,000 one-time fee</span>
                                </div>
                            </div>
                            <a href="/assesment" className="flex-shrink-0 flex items-center gap-2 bg-white text-green-700 font-black text-sm px-6 py-3.5 rounded-xl hover:bg-green-50 transition-all shadow-md whitespace-nowrap">
                                <IcPlay className="w-5 h-5" />
                                Start Assessment Now
                            </a>
                        </div>

                    </div>
                </main>
            </div>

            {/* FOOTER */}
            <footer className="bg-green-950 text-white py-5 px-4 sm:px-6 border-t border-green-900">
                <div className="max-w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                    <p>© 2026 Pakistan Global Competence Council. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="mailto:info@pgcc.gov.pk" className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                            <IcMail className="w-3.5 h-3.5" /> info@pgcc.gov.pk
                        </a>
                        <span className="text-gray-600 hidden sm:block">|</span>
                        <span className="flex items-center gap-1.5">
                            <IcHandshake className="w-3.5 h-3.5" />
                            A National Initiative by <span className="text-green-400 ml-1">Government of Pakistan</span>
                        </span>
                    </div>
                </div>
            </footer>

            {/* LOGOUT MODAL */}
            {logoutModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
                        <div className="w-16 h-16 bg-red-50 border-2 border-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IcLogout className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="font-black text-gray-900 text-lg mb-2" style={{ fontFamily: "Merriweather,serif" }}>Confirm Logout</h3>
                        <p className="text-gray-500 text-sm mb-6">Are you sure you want to log out of your PGCC account?</p>
                        <div className="flex gap-3">
                            <button onClick={() => setLogoutModal(false)} className="flex-1 border border-gray-300 text-gray-700 font-bold py-2.5 rounded-xl hover:bg-gray-50 transition-all text-sm">
                                Cancel
                            </button>
                            <a href="/login" className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl transition-all text-sm text-center">
                                Yes, Logout
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}