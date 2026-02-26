"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-gray-800 font-body overflow-x-hidden">

      {/* ── TOP BAR ── */}
      <div className="bg-[#1a5c2a] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official Portal</span>
          <div className="flex items-center gap-4 ml-auto">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Applications Open 2025
            </span>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-[#1a7a35] flex items-center justify-center bg-white shadow-sm">
              <span className="text-[#1a7a35] font-black text-xs text-center leading-tight">PGCC</span>
            </div>
            <div>
              <p className="text-[#1a7a35] font-black text-lg leading-tight font-display">UK-GCI</p>
              <p className="text-gray-500 text-[10px] tracking-wide">Global Competence Initiative</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "How It Works", "Curriculum", "Benefits"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-700 hover:text-[#1a7a35] font-medium text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/login"
              className="flex items-center gap-2 border border-[#1a7a35] text-[#1a7a35] hover:bg-[#1a7a35]/5 font-semibold text-sm px-4 py-2 rounded-md transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login
            </a>
            <a
              href="/signup"
              className="flex items-center gap-2 bg-[#1a7a35] hover:bg-[#155e28] text-white font-semibold text-sm px-4 py-2 rounded-md transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Register
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#28a745] hover:bg-[#218838] text-white font-semibold text-sm px-4 py-2 rounded-md transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download App
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {["Home", "How It Works", "Curriculum", "Benefits"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-[#1a7a35] font-medium text-sm py-2 border-b border-gray-50"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a href="#" className="border border-[#1a7a35] text-[#1a7a35] font-semibold text-sm px-4 py-2 rounded-md text-center">Login</a>
              <a href="#register" className="bg-[#1a7a35] text-white font-semibold text-sm px-4 py-2 rounded-md text-center">Register</a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d4f1e 0%, #1a7a35 40%, #2d9e50 100%)",
        }}
      >
        {/* Grid overlay like screenshot */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            Join thousands of successful applicants
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-lg">
            Transform Your<br />
            <span className="text-green-300">UK Journey</span>
          </h1>

          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            The UK Global Competence Initiative equips Pakistani nationals with essential pre-departure preparation — ensuring you arrive <strong className="text-white">Compliant, Productive & Ready to Integrate.</strong>
          </p>
          <p className="text-white/60 text-sm mb-10">
            Powered by the <span className="text-green-300 font-semibold">Pakistan Global Competence Council (PGCC)</span> · In Partnership with the Government of the United Kingdom
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#register"
              className="flex items-center gap-2 bg-[#1a7a35] hover:bg-[#155e28] border-2 border-white/30 text-white font-bold text-base px-8 py-4 rounded-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-200"
            >
              Register Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-lg transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Hero stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { val: "102K+", label: "Pakistanis to UK annually" },
              { val: "PKR 15K", label: "Certificate fee" },
              { val: "75%", label: "Passing score required" },
            ].map((s) => (
              <div key={s.val} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
                <p className="text-2xl font-black font-display text-green-300">{s.val}</p>
                <p className="text-white/70 text-xs mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── CHALLENGES / IMPACT ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <GreenLabel>Why It Matters</GreenLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Key Challenges Driving This Initiative
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              In 2025, approximately 102,000 Pakistanis travelled to the UK — contributing to its economy while highlighting critical gaps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📋", stat: "34%", label: "Visitor Visa Rejection Rate", desc: "Over a third of applications are rejected, causing loss of time and money.", border: "border-red-200", badge: "bg-red-50 text-red-700" },
              { icon: "💷", stat: "£100M+", label: "Annual Overstay Costs", desc: "Irregular stays cost the UK Home Office over £100M every year.", border: "border-orange-200", badge: "bg-orange-50 text-orange-700" },
              { icon: "📉", stat: "45–61%", label: "Lower Employment Rate", desc: "Recent arrivals face significantly lower employment rates.", border: "border-yellow-200", badge: "bg-yellow-50 text-yellow-700" },
              { icon: "🏥", stat: "106K+", label: "NHS Vacancies", desc: "Critical healthcare roles remain unfilled across the United Kingdom.", border: "border-blue-200", badge: "bg-blue-50 text-blue-700" },
            ].map((c) => (
              <div
                key={c.label}
                className={`border ${c.border} rounded-2xl p-6 hover:shadow-lg transition-all group`}
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <div className={`inline-block text-xs font-bold px-2 py-1 rounded-md mb-3 ${c.badge}`}>
                  {c.stat}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{c.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Productivity gain banner */}
          <div className="mt-10 bg-gradient-to-r from-[#0d4f1e] to-[#1a7a35] rounded-2xl p-8 text-white text-center">
            <p className="text-sm font-semibold text-green-300 uppercase tracking-widest mb-2">Our Solution Delivers</p>
            <p className="font-display text-4xl sm:text-5xl font-black mb-3">£300–500M</p>
            <p className="text-white/80 text-base">Annual productivity gains through better-aligned workers arriving prepared</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <GreenLabel>Process</GreenLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2">How It Works</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Five simple steps to get your Mandatory Competency Certificate for your UK visa application.</p>
          </div>

          <div className="relative">
            {/* connecting line desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1a7a35]/20 via-[#1a7a35] to-[#1a7a35]/20" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: 1, icon: "📋", title: "Register", desc: "Sign up using your CNIC and personal details on this portal." },
                { step: 2, icon: "📝", title: "Assessment", desc: "Complete a 30-question quiz/interview across four core competency areas." },
                { step: 3, icon: "💳", title: "Pay Fee", desc: "Pay PKR 15,000 to unlock and access the full assessment." },
                { step: 4, icon: "🏆", title: "Get Certified", desc: "Receive your digitally verified certificate after scoring 75%+." },
                { step: 5, icon: "✈️", title: "Visa Apply", desc: "Present your certificate during your UK visa application." },
              ].map((s) => (
                <div key={s.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-24 h-24 bg-white border-2 border-[#1a7a35] rounded-2xl flex flex-col items-center justify-center shadow-md mb-4 hover:bg-[#1a7a35] hover:text-white transition-all group">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{s.icon}</span>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#1a7a35] text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE CARD ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <GreenLabel>Mandatory Certificate</GreenLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">
                Your Gateway to a Successful UK Visa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Mandatory Competency Certificate verifies your readiness across four core areas — ensuring you arrive in the UK compliant, productive, and ready to integrate into society.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Reduces UK visa rejections by 25–40%",
                  "Digitally verified & tamper-proof",
                  "Accepted for all UK visa categories",
                  "Aligned with UK earned settlement reforms",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#1a7a35] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-[#1a7a35] hover:bg-[#155e28] text-white font-bold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Get Your Certificate — PKR 15,000
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Certificate mock */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-3 bg-[#1a7a35]/10 rounded-3xl blur-xl" />
                <div className="relative bg-white border-2 border-[#1a7a35]/20 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Certificate header */}
                  <div className="bg-gradient-to-r from-[#0d4f1e] to-[#1a7a35] px-6 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-green-200 text-xs font-semibold tracking-widest uppercase">Certificate of Competency</p>
                      <p className="text-white font-black text-lg font-display mt-0.5">PGCC · UK-GCI</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">🌍</div>
                  </div>
                  <div className="px-6 py-6">
                    <p className="text-gray-500 text-xs mb-4">This certifies that the applicant has demonstrated competency in:</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { icon: "🏛️", label: "Civic Conduct" },
                        { icon: "⚖️", label: "Ethical Conduct" },
                        { icon: "📜", label: "Rules & Laws" },
                        { icon: "🛡️", label: "Your Rights" },
                      ].map((p) => (
                        <div key={p.label} className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-2">
                          <span>{p.icon}</span>
                          <span className="text-xs font-semibold text-gray-700">{p.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-2xl font-black text-[#1a7a35] font-display">PKR 15,000</p>
                        <p className="text-xs text-gray-400">One-time assessment fee</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
                        ✓ Digitally Verified
                      </div>
                    </div>
                  </div>
                  {/* UK & Pakistan flag strip */}
                  <div className="flex h-1.5">
                    <div className="flex-1 bg-[#012169]" />
                    <div className="flex-1 bg-[#C8102E]" />
                    <div className="flex-1 bg-white border-y border-gray-200" />
                    <div className="flex-1 bg-[#01411C]" />
                    <div className="flex-1 bg-white border-y border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <GreenLabel>Curriculum</GreenLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2">Four Core Pillars</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Comprehensive preparation for UK life addressing real migration challenges.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                icon: "🏛️",
                title: "Civic Conduct",
                items: ["Community participation", "Cultural harmony", "Respect for diversity (Equality Act 2010)", "Social integration"],
                accent: "#1a7a35",
                bg: "bg-green-50",
                border: "border-green-200",
              },
              {
                num: "02",
                icon: "⚖️",
                title: "Ethical Conduct",
                items: ["Professional integrity", "Anti-discrimination principles", "Workplace equity", "Handling ethical dilemmas"],
                accent: "#1d6fa8",
                bg: "bg-blue-50",
                border: "border-blue-200",
              },
              {
                num: "03",
                icon: "📜",
                title: "Rules and Laws",
                items: ["UK visa compliance", "Employment regulations", "Overstay penalties (1–10 yr bans)", "Legal awareness"],
                accent: "#c0392b",
                bg: "bg-red-50",
                border: "border-red-200",
              },
              {
                num: "04",
                icon: "🛡️",
                title: "Your Own Rights",
                items: ["NHS healthcare access", "Minimum wage (£12.57/hr)", "Modern Slavery Act", "Anti-exploitation remedies"],
                accent: "#7c3aed",
                bg: "bg-purple-50",
                border: "border-purple-200",
              },
            ].map((p) => (
              <div
                key={p.num}
                className={`${p.bg} border ${p.border} rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-200`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                    style={{ backgroundColor: p.accent + "20" }}
                  >
                    {p.icon}
                  </div>
                  <span className="text-4xl font-black opacity-10 font-display">{p.num}</span>
                </div>
                <h3 className="font-black text-gray-900 mb-4 text-base">{p.title}</h3>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: p.accent }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSESSMENT STRUCTURE ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <GreenLabel>Assessment</GreenLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">
                30-Question Assessment Structure
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                The assessment is carefully structured to measure real-world readiness. A passing score of{" "}
                <span className="text-[#1a7a35] font-bold">75%</span> earns your certificate, aligned with UK earned settlement reforms.
              </p>
              <div className="space-y-5">
                {[
                  { label: "Psychological & Resilience", count: 10, color: "bg-[#1a7a35]", pct: 33 },
                  { label: "Rights-Based Questions", count: 8, color: "bg-blue-500", pct: 27 },
                  { label: "UK Laws & Purpose", count: 7, color: "bg-red-500", pct: 23 },
                  { label: "General UK Knowledge", count: 5, color: "bg-purple-500", pct: 17 },
                ].map((q) => (
                  <div key={q.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-gray-700">{q.label}</span>
                      <span className="text-sm font-bold text-[#1a7a35]">{q.count} Questions</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${q.color} rounded-full transition-all duration-700`}
                        style={{ width: `${q.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — Score card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "30", label: "Total Questions", icon: "📝", bg: "bg-green-50 border-green-200" },
                { val: "75%", label: "Passing Score", icon: "🎯", bg: "bg-blue-50 border-blue-200" },
                { val: "4", label: "Core Pillars", icon: "📚", bg: "bg-purple-50 border-purple-200" },
                { val: "100%", label: "Digital Certificate", icon: "🏆", bg: "bg-orange-50 border-orange-200" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`border ${s.bg} rounded-2xl p-6 text-center hover:shadow-md transition-all`}
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <p className="text-3xl font-black font-display text-[#1a7a35] mb-1">{s.val}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <GreenLabel>Benefits</GreenLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2">Benefits to the United Kingdom</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📉", title: "Fewer Rejections", desc: "Reduces visa rejections and overstays by 25–40%, saving applicants time and money." },
              { icon: "🏢", title: "Eased Home Office", desc: "Reduces workloads and enforcement costs for the UK Home Office significantly." },
              { icon: "👷", title: "Labour Gap Filled", desc: "Helps fill critical labour shortages without displacing existing local workers." },
              { icon: "🤝", title: "Stronger Ties", desc: "Promotes ethical migration and builds stronger UK–Pakistan bilateral relations." },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#1a7a35]/40 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-[#1a7a35] transition-all">
                  <span className="group-hover:scale-110 transition-transform inline-block">{b.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <GreenLabel>Collaboration</GreenLabel>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-gray-900 mt-2">In Collaboration With</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { flag: "🇬🇧", name: "Government of the United Kingdom", sub: "Home Office" },
              { flag: "🏛️", name: "British High Commission", sub: "Pakistan" },
              { flag: "🏥", name: "NHS", sub: "Sector-aligned training guidance" },
              { flag: "🌐", name: "Pakistan Global Competence Council", sub: "Delivery & Certification" },
            ].map((p) => (
              <div
                key={p.name}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:border-[#1a7a35]/40 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{p.flag}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="register"
        className="py-24 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d4f1e 0%, #1a7a35 60%, #2d9e50 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <div className="text-5xl mb-6">🚀</div>
          <h2 className="font-display text-3xl sm:text-5xl font-black mb-4">
            Ready to Prepare for the UK?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Register now and take the first step toward a stronger bilateral future. Your Competency Certificate is your key to a successful UK visa application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="bg-white text-[#1a7a35] hover:bg-green-50 font-black text-base px-10 py-4 rounded-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-200"
            >
              Register Now
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-white/50 hover:border-white text-white font-semibold text-base px-10 py-4 rounded-lg transition-all"
            >
              Learn More
            </a>
          </div>
          <p className="text-white/50 text-sm mt-8">PKR 15,000 · Digitally Verified · Accepted for all UK Visa Categories</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a3518] text-white py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-green-400/50 flex items-center justify-center">
                  <span className="text-green-300 font-black text-xs">PGCC</span>
                </div>
                <div>
                  <p className="font-black text-white">UK-GCI</p>
                  <p className="text-green-400 text-[10px] tracking-wide">Global Competence Initiative</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Equipping Pakistani nationals with pre-departure preparation for UK visa success.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "How It Works", "Curriculum", "Benefits", "Register"].map((l) => (
                  <a key={l} href="#" className="block text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Contact & Support</h4>
              <div className="space-y-3">
                <a href="mailto:info@pgcc.gov.pk" className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@pgcc.gov.pk
                </a>
                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>🤝</span>
                  Partnership with the Government of the United Kingdom
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
            <p>© 2026 Pakistan Global Competence Council. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function GreenLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[#1a7a35] text-xs font-bold tracking-widest uppercase">
      <span className="w-6 h-0.5 bg-[#1a7a35]" />
      {children}
      <span className="w-6 h-0.5 bg-[#1a7a35]" />
    </div>
  );
}