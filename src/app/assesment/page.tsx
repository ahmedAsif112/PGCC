"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ── SVG Icons ─────────────────────────────────────────────────────────────────
function IcClock({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
function IcCheck({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}
function IcShield({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}
function IcMail({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}
function IcClipboard({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
    );
}
function IcChevronRight({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );
}
function IcWarning({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    );
}
function IcStar({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

// ── Question Data ─────────────────────────────────────────────────────────────
const QUESTIONS = [
    {
        id: 1,
        category: "Cultural Intelligence",
        text: "You arrive abroad for work and feel homesick, struggling to adapt to local customs. What is the most globally competent response?",
        options: [
            { key: "a", text: "Isolate yourself to avoid cultural differences and stick only to Pakistani communities." },
            { key: "b", text: "Join local community events and multicultural groups to build support networks while respecting local norms." },
            { key: "c", text: "Ignore local customs entirely to maintain your traditions exclusively." },
            { key: "d", text: "Complain publicly about the host country on social media." },
        ],
        correct: "b",
    },
    {
        id: 2,
        category: "Professional Readiness",
        text: "Your employer abroad asks you to work extra hours without pay. What action aligns with PGCC's professional readiness framework?",
        options: [
            { key: "a", text: "Agree silently to avoid conflict, even if it feels unfair." },
            { key: "b", text: "Politely raise the issue and report it if needed, knowing that host-country labour laws protect fair pay." },
            { key: "c", text: "Quit immediately without any discussion." },
            { key: "d", text: "Demand immediate payment in an aggressive manner." },
        ],
        correct: "b",
    },
    {
        id: 3,
        category: "Ethical & Civic Conduct",
        text: "You witness a colleague facing workplace discrimination based on ethnicity at your overseas job. What is the most ethical and civic response?",
        options: [
            { key: "a", text: "Ignore it to avoid being involved in a conflict." },
            { key: "b", text: "Support the colleague and report the incident through the official complaint mechanism available under host-country law." },
            { key: "c", text: "Withdraw from social interactions at the workplace." },
            { key: "d", text: "Retaliate on behalf of the colleague without reporting it." },
        ],
        correct: "b",
    },
    {
        id: 4,
        category: "Visa Readiness & Legal Awareness",
        text: "You accidentally overstay your work visa abroad. What responsible action does the PGCC framework require?",
        options: [
            { key: "a", text: "Continue working illegally and hope no one notices." },
            { key: "b", text: "Contact the immigration authority immediately to regularise your status or arrange departure." },
            { key: "c", text: "Blame your employer or recruitment agent for the mistake." },
            { key: "d", text: "Apply for asylum without any valid grounds." },
        ],
        correct: "b",
    },
    {
        id: 5,
        category: "Crisis Preparedness",
        text: "There is a civil unrest situation in the country where you are working. What does the PGCC pre-departure training prepare you to do?",
        options: [
            { key: "a", text: "Panic and attempt to leave the country through unofficial channels." },
            { key: "b", text: "Follow the crisis protocol learned in training — contact the Pakistani embassy, register your location, and await official guidance." },
            { key: "c", text: "Rely solely on social media for evacuation information." },
            { key: "d", text: "Ignore the situation and continue working as normal." },
        ],
        correct: "b",
    },
];

const TOTAL_TIME = 45; // seconds per question

// ── Category color map ────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
    "Cultural Intelligence": "bg-blue-100 text-blue-700 border-blue-200",
    "Professional Readiness": "bg-purple-100 text-purple-700 border-purple-200",
    "Ethical & Civic Conduct": "bg-orange-100 text-orange-700 border-orange-200",
    "Visa Readiness & Legal Awareness": "bg-red-100 text-red-700 border-red-200",
    "Crisis Preparedness": "bg-teal-100 text-teal-700 border-teal-200",
};

// ── Option key labels ─────────────────────────────────────────────────────────
const OPTION_LABELS: Record<string, string> = { a: "A", b: "B", c: "C", d: "D" };

export default function AssessmentPage() {
    const [phase, setPhase] = useState<"intro" | "quiz" | "submitted">("intro");
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [selected, setSelected] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [transitioning, setTransitioning] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const q = QUESTIONS[current];
    const isLast = current === QUESTIONS.length - 1;

    // ── Advance to next question or submit ────────────────────────────────────
    const advance = useCallback((chosenKey: string | null) => {
        if (transitioning) return;
        setTransitioning(true);

        const newAnswers = { ...answers, [current]: chosenKey ?? "skipped" };
        setAnswers(newAnswers);

        if (timerRef.current) clearInterval(timerRef.current);

        setTimeout(() => {
            if (isLast) {
                setPhase("submitted");
            } else {
                setCurrent(prev => prev + 1);
                setSelected(null);
                setTimeLeft(TOTAL_TIME);
                setTransitioning(false);
            }
        }, 350);
    }, [answers, current, isLast, transitioning]);

    // ── Timer logic ───────────────────────────────────────────────────────────
    useEffect(() => {
        if (phase !== "quiz") return;
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    advance(selected);
                    return TOTAL_TIME;
                }
                return prev - 1;
            });
        }, 1000);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [phase, current]);

    const handleSelect = (key: string) => {
        if (transitioning) return;
        setSelected(key);
    };

    const handleNext = () => {
        advance(selected);
    };

    const progressPct = ((current) / QUESTIONS.length) * 100;
    const timerPct = (timeLeft / TOTAL_TIME) * 100;
    const timerUrgent = timeLeft <= 10;
    const timerWarning = timeLeft <= 20 && timeLeft > 10;

    // ── INTRO SCREEN ──────────────────────────────────────────────────────────
    if (phase === "intro") {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "Nunito, sans-serif" }}>
                {/* Top bar */}
                <div className="bg-green-900 text-white text-xs py-2 px-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official National Portal</span>
                        <div className="flex items-center gap-1.5 ml-auto">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                            <span>Applications Open 2025–2026</span>
                        </div>
                    </div>
                </div>
                {/* Navbar */}
                <nav className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                        <a href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-white">
                                <span className="text-green-700 font-black text-xs">PGCC</span>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-green-700 font-black text-base leading-tight" style={{ fontFamily: "Merriweather, serif" }}>PGCC Portal</p>
                                <p className="text-gray-400 text-xs">Pakistan Global Competence Council</p>
                            </div>
                        </a>
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
                            <IcShield className="w-3.5 h-3.5 text-green-700" />
                            Secure Assessment Environment
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <div className="relative py-14 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d4f1e 0%, #1a7a35 60%, #2d9e50 100%)" }}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
                    <div className="relative max-w-2xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            <IcClipboard className="w-3.5 h-3.5" />
                            PGCC Competency Assessment
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Merriweather, serif" }}>
                            Global Competence Assessment
                        </h1>
                        <p className="text-white/80 text-base max-w-lg mx-auto leading-relaxed">
                            This assessment evaluates your readiness for international life and work across the PGCC's four core competency areas. A score of <span className="text-green-300 font-bold">75% or above</span> earns your PGCC Competency Certificate.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
                            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f9fafb" />
                        </svg>
                    </div>
                </div>

                {/* Intro card */}
                <div className="flex-1 flex items-start justify-center px-4 py-12">
                    <div className="w-full max-w-2xl space-y-5">

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: "Questions", value: "5", sub: "Scenario-based" },
                                { label: "Time per Q", value: "45s", sub: "Auto-advances" },
                                { label: "Pass Score", value: "75%", sub: "To certify" },
                            ].map(s => (
                                <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                                    <p className="text-2xl font-black text-green-700" style={{ fontFamily: "Merriweather, serif" }}>{s.value}</p>
                                    <p className="text-xs font-bold text-gray-800 mt-0.5">{s.label}</p>
                                    <p className="text-xs text-gray-400">{s.sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Instructions */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="font-black text-gray-900 text-base mb-4 flex items-center gap-2" style={{ fontFamily: "Merriweather, serif" }}>
                                <IcClipboard className="w-4 h-4 text-green-700" />
                                Before You Begin
                            </h2>
                            <div className="space-y-3">
                                {[
                                    "Each question has 45 seconds. The next question loads automatically when time expires.",
                                    "Read each scenario carefully and select the most appropriate globally competent response.",
                                    "You cannot go back to a previous question once submitted.",
                                    "Ensure you are in a quiet environment free from distractions.",
                                    "Results will be sent to your registered email address after scoring. Your certificate will be linked to your NADRA ID and passport number.",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-green-700 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories covered */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="font-black text-gray-900 text-base mb-4 flex items-center gap-2" style={{ fontFamily: "Merriweather, serif" }}>
                                <IcStar className="w-4 h-4 text-yellow-500" />
                                Assessment Categories
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {QUESTIONS.map(q => (
                                    <span key={q.id} className={`text-xs font-semibold px-3 py-1 rounded-full border ${CATEGORY_COLORS[q.category] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                                        {q.category}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Warning */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                            <IcWarning className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-amber-800">
                                <span className="font-bold">Important:</span> Once you start the assessment, you cannot pause or restart. Your PGCC certificate will only be issued after achieving 75%+. Make sure you are ready before proceeding.
                            </p>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={() => { setPhase("quiz"); setTimeLeft(TOTAL_TIME); }}
                            className="w-full bg-green-700 hover:bg-green-800 text-white font-black text-base py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 flex items-center justify-center gap-3"
                        >
                            <IcClipboard className="w-5 h-5" />
                            Begin Assessment
                            <IcChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ── SUBMITTED SCREEN ──────────────────────────────────────────────────────
    if (phase === "submitted") {
        const answered = Object.values(answers).filter(v => v !== "skipped").length;
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "Nunito, sans-serif" }}>
                {/* Top bar */}
                <div className="bg-green-900 text-white text-xs py-2 px-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official National Portal</span>
                        <div className="flex items-center gap-1.5 ml-auto">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                            <span>Applications Open 2025–2026</span>
                        </div>
                    </div>
                </div>
                <nav className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                        <a href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-white">
                                <span className="text-green-700 font-black text-xs">PGCC</span>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-green-700 font-black text-base leading-tight" style={{ fontFamily: "Merriweather, serif" }}>PGCC Portal</p>
                                <p className="text-gray-400 text-xs">Pakistan Global Competence Council</p>
                            </div>
                        </a>
                    </div>
                </nav>

                <div className="flex-1 flex items-center justify-center px-4 py-12">
                    <div className="w-full max-w-lg">

                        {/* Big success card */}
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                            {/* Green header */}
                            <div className="relative py-10 px-6 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0d4f1e 0%, #1a7a35 60%, #2d9e50 100%)" }}>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                                <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                                    <IcCheck className="w-10 h-10 text-green-700" />
                                </div>
                                <h1 className="text-white font-black text-2xl sm:text-3xl mb-2" style={{ fontFamily: "Merriweather, serif" }}>
                                    Assessment Submitted!
                                </h1>
                                <p className="text-white/80 text-sm">
                                    Your responses have been securely recorded and submitted to PGCC for scoring.
                                </p>
                            </div>

                            {/* Body */}
                            <div className="p-7 space-y-6">

                                {/* Status pill */}
                                <div className="flex justify-center">
                                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-bold px-4 py-2 rounded-full">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
                                        Under Review — Awaiting PGCC Scoring
                                    </div>
                                </div>

                                {/* Submission summary */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                                        <p className="text-2xl font-black text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>{answered}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">Questions Answered</p>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                                        <p className="text-2xl font-black text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>{QUESTIONS.length}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">Total Questions</p>
                                    </div>
                                </div>

                                {/* Email notification box */}
                                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <IcMail className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm mb-1">Result Notification</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Your assessment has been submitted for PGCC scoring. We will notify you of the result at your <span className="text-blue-700 font-semibold">registered email address</span> within <span className="font-semibold">3–5 working days</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* What happens next */}
                                <div>
                                    <p className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                                        <IcClipboard className="w-4 h-4 text-green-700" />
                                        What Happens Next
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            { step: "1", title: "PGCC Scoring", text: "Your answers are evaluated against the PGCC competency framework." },
                                            { step: "2", title: "Email Notification", text: "You will receive your result at your registered email address within 3–5 working days." },
                                            { step: "3", title: "Certificate Issuance", text: "If you achieve 75%+, your PGCC digital certificate will be issued and linked to your NADRA ID and passport number." },
                                            { step: "4", title: "Visa Application", text: "Attach your PGCC certificate as a mandatory document with your international visa application." },
                                        ].map(s => (
                                            <div key={s.step} className="flex items-start gap-3">
                                                <div className="w-7 h-7 bg-green-700 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{s.step}</div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-800">{s.title}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5">{s.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Ref number */}
                                <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-4 text-center">
                                    <p className="text-xs text-gray-400 mb-1">Submission Reference</p>
                                    <p className="font-mono font-bold text-gray-800 text-sm tracking-widest">
                                        PGCC-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 90000) + 10000)}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">Keep this reference for your records</p>
                                </div>

                                {/* CTA */}
                                <a
                                    href="/dashboard"
                                    className="w-full bg-green-700 hover:bg-green-800 text-white font-black text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                                >
                                    Return to Dashboard
                                    <IcChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ── QUIZ SCREEN ───────────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "Nunito, sans-serif" }}>

            {/* Top bar */}
            <div className="bg-green-900 text-white text-xs py-2 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official National Portal</span>
                    <div className="flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                        <span>Assessment in Progress</span>
                    </div>
                </div>
            </div>

            {/* Sticky progress header */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
                    <div className="flex items-center justify-between mb-2.5">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full border-2 border-green-700 flex items-center justify-center bg-white">
                                <span className="text-green-700 font-black text-[10px]">PGCC</span>
                            </div>
                            <span className="text-green-700 font-black text-sm hidden sm:block" style={{ fontFamily: "Merriweather, serif" }}>PGCC Assessment</span>
                        </div>

                        {/* Question counter */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-medium">Question</span>
                            <span className="text-sm font-black text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>{current + 1}</span>
                            <span className="text-gray-300 text-xs">of</span>
                            <span className="text-sm font-black text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>{QUESTIONS.length}</span>
                        </div>

                        {/* Timer */}
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-sm transition-all ${timerUrgent
                            ? "bg-red-50 border-red-300 text-red-600"
                            : timerWarning
                                ? "bg-amber-50 border-amber-300 text-amber-600"
                                : "bg-green-50 border-green-200 text-green-700"
                            }`}>
                            <IcClock className={`w-4 h-4 ${timerUrgent ? "animate-pulse" : ""}`} />
                            <span className="tabular-nums">{timeLeft}s</span>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500"
                            style={{ width: `${progressPct}%` }}
                        />
                    </div>

                    {/* Timer bar */}
                    <div className="mt-2">
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ${timerUrgent ? "bg-red-500" : timerWarning ? "bg-amber-400" : "bg-blue-400"
                                    }`}
                                style={{ width: `${timerPct}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Question area */}
            <main className="flex-1 flex items-start justify-center px-4 py-8 sm:py-12">
                <div className="w-full max-w-3xl">
                    <div
                        className={`bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
                    >
                        {/* Question header */}
                        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                            {/* Category badge */}
                            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${CATEGORY_COLORS[q.category] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                                {q.category}
                            </span>

                            {/* Question number + text */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-green-700 text-white font-black text-base rounded-xl flex items-center justify-center flex-shrink-0" style={{ fontFamily: "Merriweather, serif" }}>
                                    {current + 1}
                                </div>
                                <h2 className="text-gray-900 font-bold text-base sm:text-lg leading-relaxed" style={{ fontFamily: "Merriweather, serif" }}>
                                    {q.text}
                                </h2>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="p-6 space-y-3">
                            {q.options.map((opt) => {
                                const isSelected = selected === opt.key;
                                return (
                                    <button
                                        key={opt.key}
                                        onClick={() => handleSelect(opt.key)}
                                        disabled={transitioning}
                                        className={`w-full text-left flex items-start gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-150 group ${isSelected
                                            ? "border-green-600 bg-green-50 shadow-md"
                                            : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/40"
                                            }`}
                                    >
                                        {/* Key badge */}
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0 transition-all ${isSelected
                                            ? "bg-green-700 text-white"
                                            : "bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-700"
                                            }`}>
                                            {OPTION_LABELS[opt.key]}
                                        </div>
                                        {/* Option text */}
                                        <span className={`text-sm leading-relaxed pt-1 transition-colors ${isSelected ? "text-green-900 font-semibold" : "text-gray-700"
                                            }`}>
                                            {opt.text}
                                        </span>
                                        {/* Check indicator */}
                                        {isSelected && (
                                            <div className="ml-auto flex-shrink-0 w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
                                                <IcCheck className="w-3.5 h-3.5 text-white" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Footer: next button + progress dots */}
                        <div className="px-6 pb-6 flex items-center justify-between">
                            {/* Dot indicators */}
                            <div className="flex items-center gap-1.5">
                                {QUESTIONS.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-full transition-all duration-300 ${i < current
                                            ? "w-2 h-2 bg-green-600"
                                            : i === current
                                                ? "w-4 h-2 bg-green-700"
                                                : "w-2 h-2 bg-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Next / Submit button */}
                            <button
                                onClick={handleNext}
                                disabled={transitioning}
                                className={`flex items-center gap-2 font-black text-sm px-6 py-3 rounded-xl transition-all shadow-sm ${selected
                                    ? "bg-green-700 text-white hover:bg-green-800 hover:shadow-md"
                                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                                    }`}
                            >
                                {isLast ? "Submit Assessment" : "Next Question"}
                                <IcChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Skip notice */}
                    {!selected && (
                        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                            <IcClock className="w-3.5 h-3.5" />
                            Question will auto-advance in {timeLeft} seconds. Select an answer or it will be marked as skipped.
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
}