"use client";

import { useState } from "react";

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
    { label: "Certificate Progress", value: "In Progress", icon: "📊", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200", dot: "bg-yellow-400" },
    { label: "Test Attempts Remaining", value: "2 of 3", icon: "🔁", color: "text-blue-600", bg: "bg-blue-50 border-blue-200", dot: "bg-blue-400" },
    { label: "Fee Status", value: "Paid", icon: "💳", color: "text-green-700", bg: "bg-green-50 border-green-200", dot: "bg-green-500" },
    { label: "Assessment Score", value: "Not Taken", icon: "🎯", color: "text-gray-500", bg: "bg-gray-50 border-gray-200", dot: "bg-gray-300" },
];

const ACTIVITY = [
    { label: "Last Login", value: "21 February 2026 — 10:45 AM", icon: "🕐" },
    { label: "Registration Date", value: "15 January 2026", icon: "📋" },
    { label: "Fee Paid On", value: "20 January 2026", icon: "💰" },
    { label: "Certificate Expiry (if issued)", value: "21 February 2028", icon: "📅" },
];

const NAV_LINKS = [
    { icon: "🏠", label: "Dashboard", href: "#", active: true },
    { icon: "📝", label: "Assessment", href: "#", active: false },
    { icon: "📚", label: "Curriculum", href: "/curriculum ", active: false },
    { icon: "💳", label: "Payment", href: "#", active: false },
    { icon: "📄", label: "My Certificate", href: "#", active: false },
    { icon: "❓", label: "FAQ & Support", href: "#", active: false },
];

export default function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "Nunito,sans-serif" }}>

            {/* TOP BAR */}
            <div className="bg-green-900 text-white text-xs py-2 px-4 z-50">
                <div className="max-w-full mx-auto flex items-center justify-between">
                    <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official Portal</span>
                    <div className="flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                        <span>Applications Open 2026</span>
                    </div>
                </div>
            </div>

            {/* TOP NAVBAR */}
            <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
                <div className="px-4 sm:px-6 flex items-center justify-between h-16">
                    {/* Left: hamburger + logo */}
                    <div className="flex items-center gap-3">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                        <a href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-white shadow-sm">
                                <span className="text-green-700 font-black text-xs">PGCC</span>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-green-700 font-black text-base leading-tight" style={{ fontFamily: "Merriweather,serif" }}>UK-GCI Portal</p>
                                <p className="text-gray-400 text-xs">Global Competence Initiative</p>
                            </div>
                        </a>
                    </div>

                    {/* Right: notifications + user */}
                    <div className="flex items-center gap-3">
                        {/* Notification bell */}
                        <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>

                        {/* User avatar + name */}
                        <div className="flex items-center gap-2 pl-2 border-l border-gray-100">
                            <img src={USER.avatar} alt={USER.fullName} className="w-9 h-9 rounded-full border-2 border-green-200 object-cover" />
                            <div className="hidden sm:block">
                                <p className="text-sm font-bold text-gray-800 leading-tight">{USER.fullName}</p>
                                <p className="text-xs text-gray-400">{USER.cnic}</p>
                            </div>
                        </div>

                        {/* Logout btn */}
                        <button
                            onClick={() => setLogoutModal(true)}
                            className="hidden sm:flex items-center gap-1.5 border border-red-200 text-red-600 hover:bg-red-50 font-semibold text-xs px-3 py-2 rounded-lg transition-all"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 overflow-hidden">

                {/* SIDEBAR */}
                <>
                    {/* Mobile overlay */}
                    {sidebarOpen && (
                        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
                    )}
                    <aside className={`fixed lg:sticky top-0 left-0 h-screen z-30 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:top-auto`}
                        style={{ maxHeight: "100vh", overflowY: "auto" }}>

                        {/* User profile section */}
                        <div className="p-6 border-b border-gray-100 bg-gradient-to-b from-green-50 to-white">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-3">
                                    <img src={USER.avatar} alt={USER.fullName} className="w-20 h-20 rounded-2xl border-4 border-white shadow-md object-cover" />
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                                </div>
                                <h3 className="font-black text-gray-900 text-base leading-tight" style={{ fontFamily: "Merriweather,serif" }}>{USER.fullName}</h3>
                                <p className="text-gray-500 text-xs mt-0.5">{USER.email}</p>
                                <div className="mt-2 bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200">
                                    🔄 In Progress
                                </div>
                            </div>
                        </div>

                        {/* Nav links */}
                        <nav className="flex-1 px-3 py-4 space-y-1">
                            {NAV_LINKS.map(link => (
                                <a key={link.label} href={link.href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${link.active ? "bg-green-700 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                                >
                                    <span className="text-base">{link.icon}</span>
                                    {link.label}
                                    {link.label === "Assessment" && (
                                        <span className="ml-auto text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">Go</span>
                                    )}
                                </a>
                            ))}
                        </nav>

                        {/* Sidebar footer */}
                        <div className="p-4 border-t border-gray-100">
                            <button
                                onClick={() => setLogoutModal(true)}
                                className="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 font-semibold text-sm px-3 py-2.5 rounded-xl transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
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
                                        <p className="text-green-200 text-sm font-semibold mb-0.5">👋 Welcome back,</p>
                                        <h1 className="text-2xl sm:text-3xl font-black leading-tight" style={{ fontFamily: "Merriweather,serif" }}>{USER.name}!</h1>
                                        <p className="text-white/70 text-sm mt-1">You are preparing for a successful journey to the United Kingdom.</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <a href="#" className="inline-flex items-center gap-2 bg-white text-green-700 font-black text-sm px-5 py-3 rounded-xl hover:bg-green-50 transition-all shadow-lg">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
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
                                        <span className="text-2xl">{s.icon}</span>
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
                                <span className="text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-200 px-2.5 py-1 rounded-full">In Progress</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { step: "Account Created", done: true },
                                    { step: "Assessment Completed", done: false },
                                    { step: "Fee Paid (PKR 15,000)", done: false },
                                    { step: "Certificate Issued", done: false },
                                ].map((item, i) => (
                                    <div key={item.step} className="flex items-center gap-3">
                                        <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${item.done ? "bg-green-700 border-green-700 text-white" : "border-gray-300 text-gray-400"}`}>
                                            {item.done ? (
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            ) : (i + 1)}
                                        </div>
                                        <div className="flex-1 flex items-center justify-between">
                                            <p className={`text-sm font-semibold ${item.done ? "text-gray-800" : "text-gray-400"}`}>{item.step}</p>
                                            {item.done && <span className="text-xs text-green-600 font-bold">✓ Done</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Progress bar */}
                            <div className="mt-5">
                                <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                                    <span>Overall Progress</span>
                                    <span className="font-bold text-green-700">50%</span>
                                </div>
                                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full w-1/2 bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* QUICK ACTIONS + BENEFITS */}
                        <div className="grid lg:grid-cols-2 gap-6">

                            {/* Quick Actions */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                    <span>⚡</span> Quick Actions
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { icon: "▶️", label: "Start / Resume Assessment", sub: "30 questions • 45 minutes", cta: "Start Now", primary: true, href: "#" },
                                        { icon: "📘", label: "View Curriculum Preview", sub: "Explore the four core areas", cta: "View", primary: false, href: "#" },
                                        { icon: "💳", label: "Pay Fee", sub: "Completed — PKR 15,000 paid", cta: "✓ Done", primary: false, done: true, href: "#" },
                                        { icon: "📄", label: "Download Sample Questions", sub: "Practice before your test", cta: "Download", primary: false, href: "#" },
                                    ].map(action => (
                                        <div key={action.label} className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all ${action.done ? "bg-green-50 border-green-200" : "border-gray-100 hover:border-green-200 hover:bg-green-50/50"}`}>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl flex-shrink-0">{action.icon}</span>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-800">{action.label}</p>
                                                    <p className="text-xs text-gray-400">{action.sub}</p>
                                                </div>
                                            </div>
                                            <a href={action.href}
                                                className={`flex-shrink-0 text-xs font-black px-3 py-1.5 rounded-lg transition-all ${action.done
                                                    ? "bg-green-100 text-green-700 cursor-default"
                                                    : action.primary
                                                        ? "bg-green-700 text-white hover:bg-green-800 shadow-sm"
                                                        : "border border-green-700 text-green-700 hover:bg-green-50"
                                                    }`}
                                            >
                                                {action.cta}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                    <span>🌍</span> Your Impact on the UK
                                </h2>
                                <p className="text-gray-500 text-sm mb-4">Completing this certificate helps the United Kingdom by:</p>
                                <div className="space-y-3">
                                    {[
                                        { icon: "📉", text: "Reducing overstays and visa fraud risks" },
                                        { icon: "🏥", text: "Ensuring better-prepared migrants for NHS and IT roles" },
                                        { icon: "💷", text: "Lowering Home Office processing costs (£100M+ annually)" },
                                        { icon: "📈", text: "Supporting economic contributions (£300–500M GDP boost projected)" },
                                    ].map(b => (
                                        <div key={b.text} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
                                                {b.icon}
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed pt-1">{b.text}</p>
                                        </div>
                                    ))}
                                </div>
                                {/* UK Partnership badge */}
                                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                                    <div className="flex gap-1">
                                        <div className="w-4 h-4 rounded-sm bg-[#012169]" />
                                        <div className="w-4 h-4 rounded-sm bg-[#C8102E]" />
                                        <div className="w-4 h-4 rounded-sm bg-green-700" />
                                    </div>
                                    <p className="text-xs text-gray-400">In partnership with the Government of the United Kingdom</p>
                                </div>
                            </div>
                        </div>

                        {/* RECENT ACTIVITY + SUPPORT */}
                        <div className="grid lg:grid-cols-2 gap-6">

                            {/* Recent Activity */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                    <span>🕒</span> Recent Activity
                                </h2>
                                <div className="space-y-4">
                                    {ACTIVITY.map(item => (
                                        <div key={item.label} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
                                                {item.icon}
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
                                    <span>🛟</span> Support & Resources
                                </h2>
                                <div className="space-y-3 mb-5">
                                    <a href="#" className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all group">
                                        <div className="w-9 h-9 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center text-lg flex-shrink-0">❓</div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800 group-hover:text-green-700 transition-colors">FAQ</p>
                                            <p className="text-xs text-gray-400">Common questions about the test, fee & UK visa</p>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-300 group-hover:text-green-600 ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                    <a href="#" className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all group">
                                        <div className="w-9 h-9 bg-purple-50 border border-purple-200 rounded-lg flex items-center justify-center text-lg flex-shrink-0">📘</div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800 group-hover:text-green-700 transition-colors">Curriculum Guide</p>
                                            <p className="text-xs text-gray-400">Download the full study material PDF</p>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-300 group-hover:text-green-600 ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-2">
                                    <p className="text-xs font-bold text-gray-700 mb-2">📧 Contact Support</p>
                                    <a href="mailto:support@pgcc.gov.pk" className="flex items-center gap-2 text-sm text-green-700 font-semibold hover:underline">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        support@pgcc.gov.pk
                                    </a>
                                    <a href="tel:+923001234567" className="flex items-center gap-2 text-sm text-green-700 font-semibold hover:underline">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        +92 300 1234567
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ASSESSMENT CTA BANNER */}
                        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-white shadow-lg">
                            <div>
                                <h3 className="font-black text-xl mb-1" style={{ fontFamily: "Merriweather,serif" }}>Ready to take your assessment?</h3>
                                <p className="text-white/75 text-sm">30 questions · 45 minutes · Pass with 75% to earn your certificate</p>
                                <div className="flex items-center gap-4 mt-3 text-sm">
                                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" />2 attempts remaining</span>
                                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" />Fee already paid</span>
                                </div>
                            </div>
                            <a href="#" className="flex-shrink-0 flex items-center gap-2 bg-white text-green-700 font-black text-sm px-6 py-3.5 rounded-xl hover:bg-green-50 transition-all shadow-md whitespace-nowrap">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
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
                        <a href="mailto:info@pgcc.gov.pk" className="hover:text-green-400 transition-colors">📧 info@pgcc.gov.pk</a>
                        <span className="text-gray-600 hidden sm:block">|</span>
                        <span>🤝 Partnership with <span className="text-green-400">Government of the UK</span></span>
                    </div>
                </div>
            </footer>

            {/* LOGOUT MODAL */}
            {logoutModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
                        <div className="w-16 h-16 bg-red-50 border-2 border-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
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