"use client";
import mofa from "../assets/mofa.png"
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

// ── Professional SVG Icon Components ──────────────────────────────────────────

function IconUsers({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a4 4 0 00-5.4-3.72M9 20H4v-2a4 4 0 015.4-3.72M15 7a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconCurrency({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconShield({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function IconBadgeCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}
function IconChevronRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
function IconArrowRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
function IconLogin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
  );
}
function IconRegister({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  );
}
function IconDownload({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}
function IconMail({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconMenu({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function IconClose({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
function IconCheck({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
function IconCheckSm({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
function IconGlobe({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconClipboard({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  );
}
function IconPencil({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}
function IconCreditCard({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}
function IconAward({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}
function IconPlane({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}
function IconExclamation({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}
function IconCash({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
function IconTrendingDown({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  );
}
function IconBriefcase({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconHospital({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}
function IconLibrary({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  );
}
function IconScale({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}
function IconDocText({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function IconShieldCheck({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function IconUserGroup({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
function IconHandshake({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}
function IconChartBar({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
function IconDocCheck({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}
function IconIdentification({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </svg>
  );
}
function IconRocket({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}
function IconMapPin({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ── Country Data ──────────────────────────────────────────────────────────────

const COUNTRIES = [
  { name: "United Kingdom", flag: "🇬🇧", code: "GB", desc: "Work, Study & Settlement Visas" },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "SA", desc: "Labour & Employment Visas" },
  { name: "Indonesia", flag: "🇮🇩", code: "ID", desc: "Work Permit & Business Visas" },
  { name: "Qatar", flag: "🇶🇦", code: "QA", desc: "Kafala & Sponsorship Visas" },
  { name: "Cambodia", flag: "🇰🇭", code: "KH", desc: "Business & Employment Visas" },
  { name: "Thailand", flag: "🇹🇭", code: "TH", desc: "Business & Long Stay Visas" },
  { name: "UAE", flag: "🇦🇪", code: "AE", desc: "Employment & Residency Visas" },
];

const PURPOSES = [
  { id: "work", icon: IconBriefcase, label: "Employment / Work", desc: "Skilled worker, labour, or job seeker visa" },
  { id: "study", icon: IconLibrary, label: "Education / Study", desc: "University, college or language courses" },
  { id: "business", icon: IconChartBar, label: "Business", desc: "Meetings, conferences or trade activities" },
  { id: "settlement", icon: IconIdentification, label: "Settlement / Residency", desc: "Permanent residency or family reunion" },
  { id: "visit", icon: IconGlobe, label: "Tourism / Visit", desc: "Holiday, sightseeing or family visits" },
  { id: "medical", icon: IconHospital, label: "Medical Treatment", desc: "Seeking healthcare or specialist treatment" },
  { id: "transit", icon: IconPlane, label: "Transit / Stopover", desc: "Passing through en route to another country" },
];

// ── Portal Dropdown (renders at document.body to escape all stacking contexts) ──

function PortalDropdown({ anchorRef, open, children }: {
  anchorRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  children: React.ReactNode;
}) {
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (open && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open, anchorRef]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: coords.top,
        left: coords.left,
        width: Math.max(coords.width, 340),
        zIndex: 99999,
      }}
    >
      {children}
    </div>,
    document.body
  );
}

// ── Country Selector Component ────────────────────────────────────────────────

function CountrySelector({ heroMode = false }: { heroMode?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof COUNTRIES[0] | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        const portal = document.getElementById("country-portal-dropdown");
        if (!portal || !portal.contains(target)) setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 w-full rounded-xl px-4 py-3.5 text-sm transition-all ${heroMode
          ? "bg-white/15 backdrop-blur border border-white/30 hover:bg-white/25 text-white shadow-lg"
          : "border border-gray-200 hover:border-[#1a7a35] bg-white text-gray-700 shadow-sm hover:shadow-md"
          }`}
      >
        <IconMapPin className={`w-4 h-4 flex-shrink-0 ${heroMode ? "text-green-300" : "text-[#1a7a35]"}`} />
        <span className="flex-1 text-left truncate">
          {selected ? (
            <span className="flex items-center gap-2">
              <span>{selected.flag}</span>
              <span className={`font-medium ${heroMode ? "text-white" : "text-gray-800"}`}>{selected.name}</span>
            </span>
          ) : (
            <span className={heroMode ? "text-white/60" : "text-gray-400"}>Where do you wish to travel?</span>
          )}
        </span>
        <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""} ${heroMode ? "text-white/60" : "text-gray-400"}`} />
      </button>

      <PortalDropdown anchorRef={wrapperRef} open={open}>
        <div id="country-portal-dropdown" className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-4 pt-4 pb-2 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Destination</p>
          </div>
          <div className="divide-y divide-gray-50 max-h-[340px] overflow-y-auto">
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                onClick={() => { setSelected(country); setOpen(false); }}
                className={`flex items-center gap-4 w-full px-4 py-3 hover:bg-[#f0faf4] text-left transition-colors group ${selected?.code === country.code ? "bg-[#f0faf4]" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0 rounded-lg bg-gray-50 border border-gray-100 group-hover:border-[#1a7a35]/20 transition-colors">
                  {country.flag}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800">{country.name}</p>
                  <p className="text-xs text-gray-400 truncate">{country.desc}</p>
                </div>
                {selected?.code === country.code && (
                  <div className="w-5 h-5 bg-[#1a7a35] rounded-full flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">Competency programmes available for all destinations</p>
          </div>
        </div>
      </PortalDropdown>
    </div>
  );
}

// ── Purpose Selector Component ────────────────────────────────────────────────

function PurposeSelector({ heroMode = false }: { heroMode?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof PURPOSES[0] | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        const portal = document.getElementById("purpose-portal-dropdown");
        if (!portal || !portal.contains(target)) setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 w-full rounded-xl px-4 py-3.5 text-sm transition-all ${heroMode
          ? "bg-white/15 backdrop-blur border border-white/30 hover:bg-white/25 text-white shadow-lg"
          : "border border-gray-200 hover:border-[#1a7a35] bg-white text-gray-700 shadow-sm hover:shadow-md"
          }`}
      >
        <IconDocCheck className={`w-4 h-4 flex-shrink-0 ${heroMode ? "text-green-300" : "text-[#1a7a35]"}`} />
        <span className="flex-1 text-left truncate">
          {selected ? (
            <span className={`font-medium ${heroMode ? "text-white" : "text-gray-800"}`}>{selected.label}</span>
          ) : (
            <span className={heroMode ? "text-white/60" : "text-gray-400"}>Purpose of travelling?</span>
          )}
        </span>
        <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""} ${heroMode ? "text-white/60" : "text-gray-400"}`} />
      </button>

      <PortalDropdown anchorRef={wrapperRef} open={open}>
        <div id="purpose-portal-dropdown" className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-4 pt-4 pb-2 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Purpose of Travel</p>
          </div>
          <div className="divide-y divide-gray-50 max-h-[340px] overflow-y-auto">
            {PURPOSES.map((purpose) => {
              const PIcon = purpose.icon;
              return (
                <button
                  key={purpose.id}
                  onClick={() => { setSelected(purpose); setOpen(false); }}
                  className={`flex items-center gap-4 w-full px-4 py-3 hover:bg-[#f0faf4] text-left transition-colors group ${selected?.id === purpose.id ? "bg-[#f0faf4]" : ""}`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg border transition-colors ${selected?.id === purpose.id ? "bg-[#1a7a35]/10 border-[#1a7a35]/20" : "bg-gray-50 border-gray-100 group-hover:border-[#1a7a35]/20"}`}>
                    <PIcon className={`w-5 h-5 ${selected?.id === purpose.id ? "text-[#1a7a35]" : "text-gray-400 group-hover:text-[#1a7a35]"} transition-colors`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">{purpose.label}</p>
                    <p className="text-xs text-gray-400 truncate">{purpose.desc}</p>
                  </div>
                  {selected?.id === purpose.id && (
                    <div className="w-5 h-5 bg-[#1a7a35] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-2.5 h-2.5 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">Your purpose determines the competency programme</p>
          </div>
        </div>
      </PortalDropdown>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

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
          <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official National Portal</span>
          <div className="flex items-center gap-4 ml-auto">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Applications Open 2025–2026
            </span>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 rounded-full border-2 border-[#1a7a35] flex items-center justify-center bg-white shadow-sm">
              <span className="text-[#1a7a35] font-black text-xs text-center leading-tight">PGCC</span>
            </div>
            <div>
              <p className="text-[#1a7a35] font-black text-lg leading-tight font-display">PGCC</p>
              <p className="text-gray-500 text-[10px] tracking-wide">Pakistan Global Competence Council</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {["Home", "How It Works", "Curriculum", "Benefits"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-700 hover:text-[#1a7a35] font-medium text-sm transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="/login"
              className="flex items-center gap-2 border border-[#1a7a35] text-[#1a7a35] hover:bg-[#1a7a35]/5 font-semibold text-sm px-4 py-2 rounded-md transition-all"
            >
              <IconLogin className="w-4 h-4" />
              Login
            </a>
            <a
              href="/signup"
              className="flex items-center gap-2 bg-[#1a7a35] hover:bg-[#155e28] text-white font-semibold text-sm px-4 py-2 rounded-md transition-all shadow-sm"
            >
              <IconRegister className="w-4 h-4" />
              Register
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#28a745] hover:bg-[#218838] text-white font-semibold text-sm px-4 py-2 rounded-md transition-all shadow-sm"
            >
              <IconDownload className="w-4 h-4" />
              Download App
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <IconClose /> : <IconMenu />}
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
        className="relative min-h-[92vh] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0d4f1e 0%, #1a7a35 40%, #2d9e50 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20 overflow-visible">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            Empowering Pakistanis for Global Success
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-lg">
            Pakistan's Gateway<br />
            <span className="text-green-300">to the World</span>
          </h1>

          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            The Pakistan Global Competence Council equips Pakistani citizens with the skills, certifications, and global readiness needed to thrive internationally ensuring you arrive <strong className="text-white">Compliant, Prepared & Ready to Succeed.</strong>
          </p>
          <p className="text-white/60 text-sm mb-8">
            A <span className="text-green-300 font-semibold">National Strategic Initiative</span> · In Partnership with the Government of Pakistan
          </p>

          {/* ── Destination & Purpose Selectors ── */}
          <div className="mb-10 w-full max-w-2xl mx-auto">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Plan Your Journey</p>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5 px-1">Destination</p>
                  <CountrySelector heroMode />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5 px-1">Purpose of Travel</p>
                  <PurposeSelector heroMode />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                <p className="text-white/40 text-xs">Fill both fields to find your competency programme</p>
                <div className="flex items-center gap-1.5 text-green-300 text-xs font-semibold">
                  <IconShieldCheck className="w-3.5 h-3.5" />
                  Verified Portal
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#register"
              className="flex items-center gap-2 bg-[#1a7a35] hover:bg-[#155e28] border-2 border-white/30 text-white font-bold text-base px-8 py-4 rounded-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-200"
            >
              Get Certified Now
              <IconArrowRight />
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
              { val: "800K+", label: "Pakistanis migrated for work in 2022", Icon: IconUsers },
              { val: "PKR 15,000", label: "Certification assessment fee", Icon: IconCurrency },
              { val: "40–45%", label: "Visa rejection rate without PGCC", Icon: IconBadgeCheck },
            ].map((s) => (
              <div key={s.val} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
                <s.Icon className="w-5 h-5 text-green-300 mx-auto mb-2 opacity-80" />
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
              Over 800,000 Pakistanis migrated for work in 2022 alone, yet critical gaps in preparation continue to create vulnerabilities for citizens and damage Pakistan's global image.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: IconDocText, stat: "40–45%", label: "Visa Rejection Rate", desc: "Pakistani applicants face rejection rates as high as 45% in USA, UK & Canada due to poor documentation and communication gaps.", border: "border-red-200", badge: "bg-red-50 text-red-700", iconColor: "text-red-500" },
              { Icon: IconCash, stat: "$29.8B", label: "Remittances at Risk", desc: "Pakistan's $29.8B in annual remittances (2023) rely on low-skilled labour with untapped potential from skilled migrants.", border: "border-orange-200", badge: "bg-orange-50 text-orange-700", iconColor: "text-orange-500" },
              { Icon: IconBriefcase, stat: "Millions", label: "Exploited Workers Abroad", desc: "Pakistani labourers face wage theft, poor conditions and legal penalties due to ignorance of their rights in foreign countries.", border: "border-yellow-200", badge: "bg-yellow-50 text-yellow-700", iconColor: "text-yellow-600" },
              { Icon: IconHospital, stat: "Fragmented", label: "Skill Development Gap", desc: "NAVTTC and TEVTA programs are uncoordinated and misaligned with global demands, limiting international employability.", border: "border-blue-200", badge: "bg-blue-50 text-blue-700", iconColor: "text-blue-500" },
            ].map((c) => (
              <div
                key={c.label}
                className={`border ${c.border} rounded-2xl p-6 hover:shadow-lg transition-all group`}
              >
                <div className={`mb-4 ${c.iconColor}`}>
                  <c.Icon className="w-8 h-8" />
                </div>
                <div className={`inline-block text-xs font-bold px-2 py-1 rounded-md mb-3 ${c.badge}`}>
                  {c.stat}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{c.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <GreenLabel>Process</GreenLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2">How It Works</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Five straightforward steps to obtain your Mandatory PGCC Competency Certificate, a prerequisite for all international visa applications.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1a7a35]/20 via-[#1a7a35] to-[#1a7a35]/20" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: 1, Icon: IconClipboard, title: "Register", desc: "Sign up using your CNIC and personal details on the national PGCC portal." },
                { step: 2, Icon: IconPencil, title: "Training", desc: "Complete certified online or in-person training across four core competency areas." },
                { step: 3, Icon: IconCreditCard, title: "Pay Fee", desc: "Pay PKR 15,000 to unlock and access the full assessment and examination." },
                { step: 4, Icon: IconAward, title: "Get Certified", desc: "Receive your digitally verified PGCC Certificate linked to your NADRA ID and passport." },
                { step: 5, Icon: IconPlane, title: "Apply for Visa", desc: "Present your PGCC Certificate as a mandatory requirement with your visa application." },
              ].map((s) => (
                <div key={s.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-24 h-24 bg-white border-2 border-[#1a7a35] rounded-2xl flex flex-col items-center justify-center shadow-md mb-4 hover:bg-[#1a7a35] hover:text-white transition-all group">
                    <s.Icon className="w-9 h-9 text-[#1a7a35] group-hover:text-white transition-colors" />
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
                The Bridge Between Your Passport and Visa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The PGCC Competency Certificate is a mandatory, government-backed pre-visa qualification that verifies a citizen's global readiness, professional intent, and cultural competence. Integrated with NADRA and the Directorate General of Immigration & Passports, it will be required for all student, work, skilled, and exchange visa applications starting January 2026.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Reduces visa rejection rates by 25–40% through standardized preparation",
                  "Digitally verified and linked to your NADRA Smart ID & Passport",
                  "Required for all international visa categories from Pakistan",
                  "Protects citizens from exploitation, legal penalties, and crises abroad",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#1a7a35] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-[#1a7a35] hover:bg-[#155e28] text-white font-bold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Get Your Certificate: PKR 15,000
                <IconArrowRight />
              </a>
            </div>

            {/* Certificate mock */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-3 bg-[#1a7a35]/10 rounded-3xl blur-xl" />
                <div className="relative bg-white border-2 border-[#1a7a35]/20 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-gradient-to-r from-[#0d4f1e] to-[#1a7a35] px-6 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-green-200 text-xs font-semibold tracking-widest uppercase">Competency Certificate</p>
                      <p className="text-white font-black text-lg font-display mt-0.5">PGCC · National</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <IconGlobe className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="px-6 py-6">
                    <p className="text-gray-500 text-xs mb-4">This certifies that the applicant has demonstrated competency in:</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { Icon: IconLibrary, label: "Cultural Intelligence" },
                        { Icon: IconScale, label: "Ethical Conduct" },
                        { Icon: IconDocText, label: "Foreign Laws" },
                        { Icon: IconShieldCheck, label: "Your Rights" },
                      ].map((p) => (
                        <div key={p.label} className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-2">
                          <p.Icon className="w-4 h-4 text-[#1a7a35] flex-shrink-0" />
                          <span className="text-xs font-semibold text-gray-700">{p.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-2xl font-black text-[#1a7a35] font-display">PKR 15,000</p>
                        <p className="text-xs text-gray-400">One-time assessment fee</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <IconBadgeCheck className="w-3.5 h-3.5" />
                        NADRA Verified
                      </div>
                    </div>
                  </div>
                  <div className="flex h-1.5">
                    <div className="flex-1 bg-[#01411C]" />
                    <div className="flex-1 bg-white border-y border-gray-200" />
                    <div className="flex-1 bg-[#01411C]" />
                    <div className="flex-1 bg-white border-y border-gray-200" />
                    <div className="flex-1 bg-[#01411C]" />
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
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2">Four Core Competency Areas</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A comprehensive multi-disciplinary program covering the full range of skills, ethics, and knowledge required for global success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                Icon: IconLibrary,
                title: "Cultural Intelligence",
                items: ["Host-country norms & etiquette", "Cross-cultural behaviour", "Living & working abroad", "Social integration skills"],
                accent: "#1a7a35",
                bg: "bg-green-50",
                border: "border-green-200",
              },
              {
                num: "02",
                Icon: IconScale,
                title: "Professional Readiness",
                items: ["Sector-specific skill alignment", "Digital preparedness", "CV & proposal development", "Workplace equity & integrity"],
                accent: "#1d6fa8",
                bg: "bg-blue-50",
                border: "border-blue-200",
              },
              {
                num: "03",
                Icon: IconDocText,
                title: "Ethical & Civic Conduct",
                items: ["Anti-fraud awareness", "Responsible representation", "Compliance training", "Crisis preparedness abroad"],
                accent: "#c0392b",
                bg: "bg-red-50",
                border: "border-red-200",
              },
              {
                num: "04",
                Icon: IconShieldCheck,
                title: "Visa Readiness & Rights",
                items: ["Document preparation", "Knowledge of legal rights abroad", "Anti-exploitation remedies", "Modern Slavery & labour laws"],
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: p.accent + "20" }}
                  >
                    <p.Icon className="w-6 h-6" style={{ color: p.accent } as React.CSSProperties} />
                  </div>
                  <span className="text-4xl font-black opacity-10 font-display">{p.num}</span>
                </div>
                <h3 className="font-black text-gray-900 mb-4 text-base">{p.title}</h3>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <IconCheckSm
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: p.accent } as React.CSSProperties}
                      />
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
            <div>
              <GreenLabel>Assessment</GreenLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">
                Hybrid Training & Assessment Programme
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Each candidate undergoes a hybrid online or in-person training and assessment programme, followed by a standardised digital exam and live interview. Certification is issued upon successful completion and linked to your NADRA ID and passport number.
              </p>
              <div className="space-y-5">
                {[
                  { label: "Cultural Intelligence & Cross-cultural Skills", count: "Online ", color: "bg-[#1a7a35]", pct: 33 },
                  { label: "Rights-Based & Legal Knowledge", count: "Exam + Interview", color: "bg-blue-500", pct: 27 },
                  { label: "Visa Readiness & Documentation", color: "bg-red-500", pct: 23, count: "Standardised Test" },
                  { label: "Sector-Specific Professional Skills", color: "bg-purple-500", pct: 17, count: "Track-Based" },
                ].map((q) => (
                  <div key={q.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-gray-700">{q.label}</span>
                      <span className="text-sm font-bold text-[#1a7a35]">{q.count}</span>
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
                { val: "4", label: "Core Competency Areas", Icon: IconDocCheck, bg: "bg-green-50 border-green-200" },
                { val: "Jan 2026", label: "Mandatory Policy Start", Icon: IconChartBar, bg: "bg-blue-50 border-blue-200" },
                { val: "NADRA", label: "Integrated Verification", Icon: IconLibrary, bg: "bg-purple-50 border-purple-200" },
                { val: "100%", label: "Digital Certificate", Icon: IconAward, bg: "bg-orange-50 border-orange-200" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`border ${s.bg} rounded-2xl p-6 text-center hover:shadow-md transition-all`}
                >
                  <div className="flex justify-center mb-3 text-[#1a7a35]">
                    <s.Icon className="w-8 h-8" />
                  </div>
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
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mt-2">Benefits to Pakistan & the World</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: IconTrendingDown, title: "Fewer Visa Rejections", desc: "Reduces visa rejections by 25–40% through standardised preparation, saving applicants time, money, and reputational damage." },
              { Icon: IconLibrary, title: "Protected Citizens", desc: "Educates Pakistanis on their rights, destination-specific laws, and crisis protocols reducing exploitation and legal penalties abroad." },
              { Icon: IconBriefcase, title: "Higher Remittances", desc: "Places skilled Pakistanis in higher-value roles globally, boosting remittances beyond the current $29.8B annually." },
              { Icon: IconHandshake, title: "Stronger National Image", desc: "Creates informed, skilled ambassadors who elevate Pakistan's global reputation and strengthen bilateral diplomatic relations." },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#1a7a35]/40 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a7a35] transition-all">
                  <b.Icon className="w-7 h-7 text-[#1a7a35] group-hover:text-white transition-colors" />
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

            {/* Government of Pakistan */}
            <div className="border border-gray-200 rounded-2xl p-6 text-center hover:border-[#1a7a35]/40 hover:shadow-md transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={mofa}
                  alt="Government of Pakistan Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Government of Pakistan</h3>
              <p className="text-xs text-gray-500">Ministry of Interior & MOFA</p>
            </div>

            {/* NADRA */}
            <div className="border border-gray-200 rounded-2xl p-6 text-center hover:border-[#1a7a35]/40 hover:shadow-md transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
                  <rect x="2" y="14" width="60" height="36" rx="4" fill="#1a3a6b" />
                  <rect x="8" y="22" width="20" height="20" rx="2" fill="#2a5298" />
                  <circle cx="18" cy="30" r="5" fill="white" />
                  <rect x="14" y="36" width="8" height="4" rx="1" fill="white" />
                  <rect x="34" y="22" width="22" height="3" rx="1" fill="white" opacity="0.8" />
                  <rect x="34" y="29" width="16" height="3" rx="1" fill="white" opacity="0.6" />
                  <rect x="34" y="36" width="18" height="3" rx="1" fill="white" opacity="0.6" />
                  <rect x="34" y="43" width="12" height="3" rx="1" fill="white" opacity="0.4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">NADRA</h3>
              <p className="text-xs text-gray-500">Identity & Digital Integration</p>
            </div>

            {/* HEC / NAVTTC */}
            <div className="border border-gray-200 rounded-2xl p-6 text-center hover:border-[#1a7a35]/40 hover:shadow-md transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
                  <rect x="8" y="54" width="48" height="4" rx="1" fill="#1a3a6b" />
                  <rect x="8" y="18" width="48" height="4" rx="1" fill="#1a3a6b" />
                  <path d="M10 18 L32 6 L54 18 Z" fill="#1a3a6b" />
                  <rect x="12" y="22" width="5" height="32" rx="1" fill="#2a5298" />
                  <rect x="21" y="22" width="5" height="32" rx="1" fill="#2a5298" />
                  <rect x="30" y="22" width="5" height="32" rx="1" fill="#2a5298" />
                  <rect x="39" y="22" width="5" height="32" rx="1" fill="#2a5298" />
                  <rect x="48" y="22" width="5" height="32" rx="1" fill="#2a5298" />
                  <rect x="6" y="56" width="52" height="3" rx="1" fill="#1a3a6b" />
                  <rect x="4" y="58" width="56" height="3" rx="1" fill="#1a3a6b" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">HEC & NAVTTC</h3>
              <p className="text-xs text-gray-500">Education & Skills Integration</p>
            </div>

            {/* PGCC */}
            <div className="border border-gray-200 rounded-2xl p-6 text-center hover:border-[#1a7a35]/40 hover:shadow-md transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
                  <circle cx="32" cy="32" r="29" stroke="#1a7a35" strokeWidth="2.5" fill="none" />
                  <circle cx="32" cy="32" r="24" stroke="#1a7a35" strokeWidth="1" fill="none" strokeDasharray="3 2" />
                  <ellipse cx="32" cy="32" rx="12" ry="29" stroke="#1a7a35" strokeWidth="1.5" fill="none" />
                  <line x1="3" y1="32" x2="61" y2="32" stroke="#1a7a35" strokeWidth="1.5" />
                  <path d="M10 18 Q32 24 54 18" stroke="#1a7a35" strokeWidth="1" fill="none" />
                  <path d="M10 46 Q32 40 54 46" stroke="#1a7a35" strokeWidth="1" fill="none" />
                  <path d="M32 20 L40 24 L40 34 Q40 40 32 44 Q24 40 24 34 L24 24 Z" fill="#1a7a35" />
                  <path d="M29 31 L31 33 L35 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Pakistan Global Competence Council</h3>
              <p className="text-xs text-gray-500">Delivery & Certification Body</p>
            </div>

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
          <div className="flex justify-center mb-6 text-white/80">
            <IconRocket className="w-14 h-14" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black mb-4">
            Ready to Go Global?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Register now and take the first step toward becoming a globally competent Pakistani. Your PGCC Competency Certificate is your key to successful visa applications and international opportunities.
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
          <p className="text-white/50 text-sm mt-8">PKR 15,000 · NADRA Verified · Mandatory for All International Visa Applications</p>
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
                  <p className="font-black text-white">PGCC</p>
                  <p className="text-green-400 text-[10px] tracking-wide">Pakistan Global Competence Council</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Equipping Pakistani nationals with the skills, certifications, and global readiness needed to thrive internationally while elevating Pakistan's reputation worldwide.
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
                  <IconMail className="w-4 h-4" />
                  info@pgcc.gov.pk
                </a>
                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <IconHandshake className="w-4 h-4 flex-shrink-0" />
                  A Public-Private Partnership with the Government of Pakistan
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