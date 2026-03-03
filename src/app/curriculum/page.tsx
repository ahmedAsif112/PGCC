"use client";

import { useState } from "react";

const MODULES = [
    {
        id: 1,
        icon: "🧠",
        title: "Psychological Assessment",
        questions: 10,
        color: "blue",
        border: "border-blue-200",
        bg: "bg-blue-50",
        activeBg: "bg-blue-700",
        badgeBg: "bg-blue-100 text-blue-700 border-blue-200",
        accent: "#1d4ed8",
        objective:
            "Assess mental resilience, adaptability, ethical decision-making, and stress management to identify risks of integration failure. Uses trauma-informed, culturally competent approaches; questions simulate scenarios to screen for anxiety/depression indicators without diagnosing.",
        rationale: "Inspired by RHS-15 (Refugee Health Screener) and GAD-7/PHQ-9 tools, focusing on self-reflection for pre-migration readiness.",
        topics: [
            "Adaptability to new environments (e.g., cultural shock)",
            "Ethical dilemmas in work/life (e.g., integrity under pressure)",
            "Stress/resilience management (e.g., handling isolation or discrimination)",
            "Motivation and mindset for compliance/integration",
        ],
        questions_list: [
            {
                q: "You arrive in the UK and feel homesick, missing family gatherings. What is a healthy way to adapt while respecting UK community norms?",
                options: [
                    "Isolate yourself to avoid cultural differences.",
                    "Join local Pakistani-UK community events or multicultural groups to build support.",
                    "Ignore local customs to maintain your traditions exclusively.",
                    "Complain publicly about UK life on social media.",
                ],
                correct: 1,
                tag: "Civic Conduct / Adaptability",
            },
            {
                q: "At work in the UK, your employer asks you to work extra hours without pay. How should you respond ethically?",
                options: [
                    "Agree to avoid conflict, even if it feels unfair.",
                    "Politely refuse and report it if needed, knowing UK laws protect fair pay.",
                    "Quit immediately without discussion.",
                    "Demand immediate payment aggressively.",
                ],
                correct: 1,
                tag: "Ethical Conduct",
            },
            {
                q: "If facing discrimination in the UK (e.g., based on ethnicity), what resilient action aligns with UK values?",
                options: [
                    "Retaliate to defend yourself.",
                    "Seek support from Equality Act protections or community resources.",
                    "Withdraw from social interactions.",
                    "Ignore it completely.",
                ],
                correct: 1,
                tag: "Resilience / Stress",
            },
            {
                q: "You overstay your visa accidentally. What ethical step shows responsibility?",
                options: [
                    "Hide it and continue working illegally.",
                    "Contact Home Office immediately to regularize status or leave.",
                    "Blame others for the mistake.",
                    "Apply for asylum without valid grounds.",
                ],
                correct: 1,
                tag: "Mindset / Ethical",
            },
            {
                q: "Moving to the UK means colder weather and different food. How can you build resilience?",
                options: [
                    "Complain and avoid adapting.",
                    "Learn about UK climate/health tips and try local foods gradually.",
                    "Rely solely on imported Pakistani items.",
                    "Isolate to preserve habits.",
                ],
                correct: 1,
                tag: "Adaptability / General",
            },
        ],
    },
    {
        id: 2,
        icon: "🛡️",
        title: "Your Own Rights",
        questions: 8,
        color: "green",
        border: "border-green-200",
        bg: "bg-green-50",
        activeBg: "bg-green-700",
        badgeBg: "bg-green-100 text-green-700 border-green-200",
        accent: "#15803d",
        objective:
            "Educate on protections to prevent exploitation (e.g., wage theft, discrimination common among Pakistani migrants). Covers access to services, anti-discrimination laws, and remedies, reducing welfare dependency and promoting self-empowerment.",
        rationale: "Addresses 15–20% higher welfare dependency for recent arrivals. Covers NHS access, employment rights, and anti-exploitation remedies.",
        topics: [
            "Employment rights (min wage £12.57/hour for 21+, no exploitation)",
            "Healthcare/NHS access (free for visa holders via IHS)",
            "Anti-discrimination (Equality Act 2010)",
            "Support for victims (e.g., modern slavery, domestic abuse)",
        ],
        questions_list: [
            {
                q: "As a skilled worker in the UK, what right do you have if unpaid?",
                options: [
                    "No recourse, as a migrant.",
                    "Report to ACAS or tribunal under Employment Rights Act.",
                    "Accept it to keep the job.",
                    "Leave without notice.",
                ],
                correct: 1,
                tag: "Your Own Rights",
            },
            {
                q: "If facing racial discrimination at work, what protection applies?",
                options: [
                    "None, as it's common.",
                    "Equality Act 2010 prohibits it; report to employer or EHRC.",
                    "Ignore to avoid trouble.",
                    "Retaliate personally.",
                ],
                correct: 1,
                tag: "Ethical Conduct / Rights",
            },
            {
                q: "You have access to free NHS care on a work visa. What right ensures this?",
                options: [
                    "Only for citizens.",
                    "Immigration Health Surcharge paid with visa grants access.",
                    "Pay privately always.",
                    "No healthcare rights.",
                ],
                correct: 1,
                tag: "Civic Conduct / Rights",
            },
            {
                q: "As a student, how many hours can you work weekly during term?",
                options: ["Unlimited.", "Up to 20 hours, per visa rules.", "No work allowed.", "40 hours."],
                correct: 1,
                tag: "Your Own Rights",
            },
            {
                q: "If exploited (e.g., forced overtime), what right protects you?",
                options: [
                    "None as a foreigner.",
                    "Modern Slavery Act 2015; seek help from helpline.",
                    "Handle it alone.",
                    "Quit silently.",
                ],
                correct: 1,
                tag: "Ethical / Rights",
            },
        ],
    },
    {
        id: 3,
        icon: "⚖️",
        title: "Purpose of Going & UK Laws",
        questions: 7,
        color: "red",
        border: "border-red-200",
        bg: "bg-red-50",
        activeBg: "bg-red-700",
        badgeBg: "bg-red-100 text-red-700 border-red-200",
        accent: "#b91c1c",
        objective:
            "Ensure alignment with visa intent and deter violations (e.g., 34% visitor visa rejection rate for Pakistanis due to overstay risks). Covers penalties including fines up to £50K, bans 1–10 years, and jail up to 4 years for fraud/overstay.",
        rationale: "Drawn from Immigration Act 1971/2022 updates. Addresses 11% of UK asylum claims from Pakistanis and deterrence of fraud.",
        topics: [
            "Visa-specific rules (e.g., no work on visitor visa)",
            "Penalties for overstay/fraud (Immigration Act 1971/2022 updates)",
            "Purpose verification (e.g., study/work intent)",
            "Compliance to avoid asylum abuse (11% UK claims from Pakistanis)",
        ],
        questions_list: [
            {
                q: "On a visitor visa, can you work in the UK?",
                options: [
                    "Yes, part-time.",
                    "No, strictly prohibited; violation leads to deportation/ban.",
                    "Only if unpaid.",
                    "Yes, if short-term.",
                ],
                correct: 1,
                tag: "Rules & Laws",
            },
            {
                q: "What penalty applies for overstaying more than 90 days?",
                options: [
                    "No issue.",
                    "Re-entry ban 1–10 years, possible jail/fine.",
                    "Just a warning.",
                    "Automatic extension.",
                ],
                correct: 1,
                tag: "Purpose / Laws",
            },
            {
                q: "If a visa is obtained by fraud (fake documents), what happens?",
                options: [
                    "Minor issue.",
                    "Mandatory refusal, criminal charges up to 4 years jail.",
                    "Ignore if not caught.",
                    "Renew easily.",
                ],
                correct: 1,
                tag: "Ethical Conduct / Laws",
            },
            {
                q: "As a student, your main purpose in the UK must be?",
                options: ["Work full-time.", "Genuine study at approved institution.", "Tourism.", "Asylum seeking."],
                correct: 1,
                tag: "Purpose / Rules",
            },
            {
                q: "What law prohibits discrimination based on nationality?",
                options: ["None.", "Equality Act 2010.", "Immigration Act only.", "Visitor rules."],
                correct: 1,
                tag: "Laws",
            },
        ],
    },
    {
        id: 4,
        icon: "🌍",
        title: "General Knowledge",
        questions: 5,
        color: "purple",
        border: "border-purple-200",
        bg: "bg-purple-50",
        activeBg: "bg-purple-700",
        badgeBg: "bg-purple-100 text-purple-700 border-purple-200",
        accent: "#7c3aed",
        objective:
            "Build basic UK awareness to aid integration (e.g., address isolation, lower employment rates). Draws from Life in the UK test: history, values, and norms.",
        rationale: "Based on Life in the UK handbook and UK Home Office materials. Promotes foundational awareness for smoother integration.",
        topics: [
            "UK values (democracy, rule of law)",
            "Culture/history (e.g., Lent, Union Flag)",
            "Daily life (judiciary, customs)",
        ],
        questions_list: [
            {
                q: "What is Lent in UK culture?",
                options: [
                    "40 days before Easter (Christian fasting period).",
                    "Summer festival.",
                    "New Year tradition.",
                    "Political event.",
                ],
                correct: 0,
                tag: "Civic Conduct / General",
            },
            {
                q: "Which country's flag is NOT in the Union Flag?",
                options: ["Wales.", "England.", "Scotland.", "Northern Ireland."],
                correct: 0,
                tag: "General Knowledge",
            },
            {
                q: "What is the judiciary responsible for?",
                options: ["Making laws.", "Interpreting/enforcing laws independently.", "Elections.", "Taxes."],
                correct: 1,
                tag: "Rules / General",
            },
            {
                q: "When did the Habeas Corpus Act (protecting against unlawful detention) become law?",
                options: ["1679.", "1945.", "1066.", "2000."],
                correct: 0,
                tag: "Ethical / General",
            },
            {
                q: "UK principle: Everyone equal under law. What promotes this?",
                options: ["Monarchy only.", "Rule of law.", "No equality.", "Wealth-based."],
                correct: 1,
                tag: "Civic / General",
            },
        ],
    },
];

const colorMap = {
    blue: { ring: "ring-blue-400", btn: "bg-blue-700 hover:bg-blue-800", light: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", progress: "bg-blue-500" },
    green: { ring: "ring-green-400", btn: "bg-green-700 hover:bg-green-800", light: "bg-green-50", text: "text-green-700", border: "border-green-200", progress: "bg-green-500" },
    red: { ring: "ring-red-400", btn: "bg-red-700 hover:bg-red-800", light: "bg-red-50", text: "text-red-700", border: "border-red-200", progress: "bg-red-500" },
    purple: { ring: "ring-purple-400", btn: "bg-purple-700 hover:bg-purple-800", light: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", progress: "bg-purple-500" },
};

// Quiz Component
function QuizSection({ module, onClose }) {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [revealed, setRevealed] = useState(false);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);
    const c = colorMap[module.color];
    const q = module.questions_list[current];
    const total = module.questions_list.length;

    const handleOption = (i) => { if (!revealed) setSelected(i); };
    const handleCheck = () => {
        if (selected === null) return;
        setRevealed(true);
        if (selected === q.correct) setScore(s => s + 1);
    };
    const handleNext = () => {
        if (current + 1 < total) { setCurrent(c => c + 1); setSelected(null); setRevealed(false); }
        else setDone(true);
    };

    if (done) {
        const pct = Math.round((score / total) * 100);
        return (
            <div className="text-center py-6">
                <div className={`w-20 h-20 ${pct >= 75 ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"} border-2 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">{pct >= 75 ? "🏆" : "📚"}</span>
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-1" style={{ fontFamily: "Merriweather,serif" }}>
                    {pct >= 75 ? "Well Done!" : "Keep Practising!"}
                </h3>
                <p className="text-gray-500 text-sm mb-4">You scored <span className={`font-black text-lg ${pct >= 75 ? "text-green-700" : "text-red-600"}`}>{score}/{total}</span> ({pct}%)</p>
                <p className="text-xs text-gray-400 mb-6">Pass threshold: 75% · {pct >= 75 ? "You passed this section!" : "Review the material and try again."}</p>
                <div className="flex gap-3 justify-center">
                    <button onClick={() => { setCurrent(0); setSelected(null); setRevealed(false); setScore(0); setDone(false); }}
                        className="border border-green-700 text-green-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-50 transition-all">
                        Retry
                    </button>
                    <button onClick={onClose} className="bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
                        Back to Curriculum
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Progress */}
            <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                <span>Question {current + 1} of {total}</span>
                <span className={`${c.text} font-bold`}>Score: {score}/{current + (revealed ? 1 : 0)}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full mb-5 overflow-hidden">
                <div className={`h-full ${c.progress} rounded-full transition-all`} style={{ width: `${((current + 1) / total) * 100}%` }} />
            </div>

            {/* Tag */}
            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-4 ${module.badgeBg}`}>{q.tag}</span>

            {/* Question */}
            <p className="text-gray-900 font-bold text-base leading-relaxed mb-5">{q.q}</p>

            {/* Options */}
            <div className="space-y-3 mb-6">
                {q.options.map((opt, i) => {
                    let cls = "border border-gray-200 bg-white text-gray-700 hover:border-gray-300";
                    if (revealed) {
                        if (i === q.correct) cls = "border-2 border-green-500 bg-green-50 text-green-800";
                        else if (i === selected && i !== q.correct) cls = "border-2 border-red-400 bg-red-50 text-red-700";
                        else cls = "border border-gray-100 bg-gray-50 text-gray-400";
                    } else if (selected === i) {
                        cls = `border-2 ${module.border} ${module.bg} ${colorMap[module.color].text}`;
                    }
                    return (
                        <button key={i} onClick={() => handleOption(i)}
                            className={`w-full text-left flex items-start gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${cls}`}>
                            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5 ${revealed && i === q.correct ? "border-green-500 bg-green-500 text-white" :
                                revealed && i === selected && i !== q.correct ? "border-red-400 bg-red-400 text-white" :
                                    selected === i && !revealed ? `${module.border} ${colorMap[module.color].text} border-2` :
                                        "border-gray-300 text-gray-400"
                                }`}>
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                            {revealed && i === q.correct && <span className="ml-auto text-green-500 flex-shrink-0 text-lg">✓</span>}
                            {revealed && i === selected && i !== q.correct && <span className="ml-auto text-red-400 flex-shrink-0 text-lg">✗</span>}
                        </button>
                    );
                })}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
                {!revealed ? (
                    <button onClick={handleCheck} disabled={selected === null}
                        className={`${c.btn} disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all`}>
                        Check Answer
                    </button>
                ) : (
                    <button onClick={handleNext}
                        className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2">
                        {current + 1 < total ? "Next Question" : "See Results"}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}

export default function CurriculumPage() {
    const [activeModule, setActiveModule] = useState(null);
    const [quizModule, setQuizModule] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const NAV_LINKS = [
        { icon: "🏠", label: "Dashboard", href: "/dashboard", active: false },
        { icon: "📝", label: "Assessment", href: "/assesment", active: false },
        { icon: "📚", label: "Curriculum", href: "#", active: true },
        { icon: "💳", label: "Payment", href: "#", active: false },
        { icon: "📄", label: "My Certificate", href: "#", active: false },
        { icon: "❓", label: "FAQ & Support", href: "#", active: false },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "Nunito,sans-serif" }}>

            {/* TOP BAR */}
            <div className="bg-green-900 text-white text-xs py-2 px-4">
                <div className="max-w-full mx-auto flex items-center justify-between">
                    <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official Portal</span>
                    <div className="flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                        <span>Applications Open 2025</span>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
                <div className="px-4 sm:px-6 flex items-center justify-between h-16">
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
                    <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?img=68" alt="Ahmed" className="w-9 h-9 rounded-full border-2 border-green-200 object-cover" />
                        <div className="hidden sm:block">
                            <p className="text-sm font-bold text-gray-800 leading-tight">Ahmed Raza Khan</p>
                            <p className="text-xs text-gray-400">35202-1234567-9</p>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 overflow-hidden">

                {/* SIDEBAR */}
                <>
                    {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
                    <aside className={`fixed lg:sticky top-0 left-0 h-screen z-30 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:top-auto`}
                        style={{ maxHeight: "100vh", overflowY: "auto" }}>
                        <div className="p-6 border-b border-gray-100 bg-gradient-to-b from-green-50 to-white">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-3">
                                    <img src="https://i.pravatar.cc/150?img=68" alt="Ahmed" className="w-20 h-20 rounded-2xl border-4 border-white shadow-md object-cover" />
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                                </div>
                                <h3 className="font-black text-gray-900 text-base leading-tight" style={{ fontFamily: "Merriweather,serif" }}>Ahmed Raza Khan</h3>
                                <p className="text-gray-500 text-xs mt-0.5">ahmed.raza@email.com</p>
                                <div className="mt-2 bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200">🔄 In Progress</div>
                            </div>
                        </div>
                        <nav className="flex-1 px-3 py-4 space-y-1">
                            {NAV_LINKS.map(link => (
                                <a key={link.label} href={link.href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${link.active ? "bg-green-700 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"}`}>
                                    <span>{link.icon}</span>{link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="p-4 border-t border-gray-100">
                            <a href="/login" className="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 font-semibold text-sm px-3 py-2.5 rounded-xl transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                Logout
                            </a>
                        </div>
                    </aside>
                </>

                {/* MAIN */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <div className="max-w-5xl mx-auto space-y-6">

                        {/* PAGE HEADER */}
                        <div className="relative rounded-2xl overflow-hidden text-white" style={{ background: "linear-gradient(135deg,#0d4f1e 0%,#1a7a35 60%,#2d9e50 100%)" }}>
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                            <div className="relative px-6 py-8 sm:px-8">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                                            <span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" /> Curriculum Overview
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-2" style={{ fontFamily: "Merriweather,serif" }}>
                                            📚 Competency Curriculum
                                        </h1>
                                        <p className="text-white/75 text-sm max-w-xl">Comprehensive preparation for UK life across four core pillars. Study each module, then practice with sample questions before your official assessment.</p>
                                    </div>
                                    <a href="/assesment" className="flex-shrink-0 flex items-center gap-2 bg-white text-green-700 font-black text-sm px-5 py-3 rounded-xl hover:bg-green-50 transition-all shadow-lg whitespace-nowrap">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Take Full Assessment
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ASSESSMENT OVERVIEW CARDS */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { val: "30", label: "Total Questions", sub: "Multiple Choice", bg: "bg-gray-50 border-gray-200", text: "text-gray-800" },
                                { val: "45 min", label: "Time Limit", sub: "Timed Assessment", bg: "bg-blue-50 border-blue-200", text: "text-blue-800" },
                                { val: "75%", label: "Pass Threshold", sub: "22/30 correct", bg: "bg-green-50 border-green-200", text: "text-green-800" },
                                { val: "4", label: "Core Modules", sub: "Scenario-based", bg: "bg-purple-50 border-purple-200", text: "text-purple-800" },
                            ].map(s => (
                                <div key={s.label} className={`border ${s.bg} rounded-2xl p-4 text-center hover:shadow-md transition-all`}>
                                    <div className="text-2xl mb-2">{s.icon}</div>
                                    <p className={`text-xl font-black ${s.text}`} style={{ fontFamily: "Merriweather,serif" }}>{s.val}</p>
                                    <p className="text-gray-700 text-xs font-bold mt-0.5">{s.label}</p>
                                    <p className="text-gray-400 text-xs">{s.sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* QUESTION DISTRIBUTION BAR */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="font-black text-gray-900 text-base mb-5" style={{ fontFamily: "Merriweather,serif" }}>Question Distribution</h2>
                            <div className="space-y-4">
                                {MODULES.map(m => {
                                    const c = colorMap[m.color];
                                    return (
                                        <div key={m.id}>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span>{m.icon}</span>
                                                    <span className="text-sm font-semibold text-gray-700">{m.title}</span>
                                                </div>
                                                <span className={`text-sm font-black ${c.text}`}>{m.questions} Questions</span>
                                            </div>
                                            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className={`h-full ${c.progress} rounded-full`} style={{ width: `${(m.questions / 30) * 100}%` }} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-xs text-gray-400 mt-4">Questions are scenario-based, drawing from real UK migrant challenges. Bank expandable to ~100 questions to prevent memorisation.</p>
                        </div>

                        {/* MODULE CARDS */}
                        <div className="space-y-4">
                            <h2 className="font-black text-gray-900 text-lg" style={{ fontFamily: "Merriweather,serif" }}>Modules</h2>
                            {MODULES.map(m => {
                                const c = colorMap[m.color];
                                const isOpen = activeModule === m.id;
                                return (
                                    <div key={m.id} className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all ${isOpen ? `border-2 ${m.border}` : "border-gray-200 hover:border-gray-300"}`}>

                                        {/* Module header */}
                                        <button
                                            onClick={() => { setActiveModule(isOpen ? null : m.id); setQuizModule(null); }}
                                            className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <div className={`w-12 h-12 ${m.bg} border ${m.border} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                                                {m.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${m.badgeBg}`}>Module {m.id}</span>
                                                    <span className="text-xs text-gray-400">{m.questions} questions</span>
                                                </div>
                                                <h3 className="font-black text-gray-900 text-base mt-1" style={{ fontFamily: "Merriweather,serif" }}>{m.title}</h3>
                                                <p className="text-gray-500 text-xs mt-0.5 truncate">{m.objective.slice(0, 80)}...</p>
                                            </div>
                                            <div className="flex items-center gap-3 flex-shrink-0">
                                                <div className="hidden sm:flex items-center gap-1">
                                                    <div className={`h-1.5 w-20 bg-gray-100 rounded-full overflow-hidden`}>
                                                        <div className={`h-full ${c.progress} rounded-full`} style={{ width: `${(m.questions / 30) * 100}%` }} />
                                                    </div>
                                                    <span className={`text-xs font-bold ${c.text}`}>{Math.round((m.questions / 30) * 100)}%</span>
                                                </div>
                                                <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>

                                        {/* Expanded content */}
                                        {isOpen && (
                                            <div className="border-t border-gray-100 px-6 py-6">
                                                {!quizModule ? (
                                                    <div className="grid lg:grid-cols-2 gap-6">
                                                        {/* Left: Objective + Topics */}
                                                        <div className="space-y-5">
                                                            <div>
                                                                <h4 className="font-black text-gray-900 text-sm mb-2 flex items-center gap-2">
                                                                    <span>🎯</span> Learning Objective
                                                                </h4>
                                                                <p className="text-gray-600 text-sm leading-relaxed">{m.objective}</p>
                                                            </div>
                                                            <div className={`${m.bg} border ${m.border} rounded-xl p-4`}>
                                                                <p className="text-xs font-bold text-gray-600 mb-1">📖 Research Basis</p>
                                                                <p className="text-xs text-gray-500 leading-relaxed">{m.rationale}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-black text-gray-900 text-sm mb-3 flex items-center gap-2">
                                                                    <span>📌</span> Key Topics
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {m.topics.map(t => (
                                                                        <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                                                                            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            {t}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Right: Sample questions preview */}
                                                        <div>
                                                            <h4 className="font-black text-gray-900 text-sm mb-3 flex items-center gap-2">
                                                                <span>💡</span> Sample Questions Preview
                                                            </h4>
                                                            <div className="space-y-3">
                                                                {m.questions_list.slice(0, 3).map((q, i) => (
                                                                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                                                                        <div className="flex items-center gap-2 mb-2">
                                                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${m.badgeBg}`}>{q.tag}</span>
                                                                        </div>
                                                                        <p className="text-xs font-semibold text-gray-700 leading-relaxed">{q.q}</p>
                                                                        <div className="mt-2 space-y-1">
                                                                            {q.options.slice(0, 2).map((opt, j) => (
                                                                                <p key={j} className={`text-xs flex items-start gap-1.5 ${j === q.correct ? `${c.text} font-bold` : "text-gray-400"}`}>
                                                                                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-xs flex-shrink-0 mt-0.5 ${j === q.correct ? `${c.border} ${c.text}` : "border-gray-300"}`}>
                                                                                        {String.fromCharCode(65 + j)}
                                                                                    </span>
                                                                                    {opt} {j === q.correct && "✓"}
                                                                                </p>
                                                                            ))}
                                                                            <p className="text-xs text-gray-300 pl-5">+ {q.options.length - 2} more options...</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <button
                                                                onClick={() => setQuizModule(m.id)}
                                                                className={`mt-4 w-full ${c.btn} text-white font-black text-sm py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2`}
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                                Practice Module {m.id} ({m.questions_list.length} sample questions)
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    /* QUIZ MODE */
                                                    <div>
                                                        <div className="flex items-center justify-between mb-6">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-2xl">{m.icon}</span>
                                                                <div>
                                                                    <p className="text-xs text-gray-400">Practice Quiz</p>
                                                                    <h4 className="font-black text-gray-900 text-base" style={{ fontFamily: "Merriweather,serif" }}>{m.title}</h4>
                                                                </div>
                                                            </div>
                                                            <button onClick={() => setQuizModule(null)} className="text-xs font-semibold text-gray-500 hover:text-gray-700 flex items-center gap-1 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all">
                                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                                                Back to Module
                                                            </button>
                                                        </div>
                                                        <QuizSection module={m} onClose={() => setQuizModule(null)} />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* SOURCES FOOTER CARD */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="font-black text-gray-900 text-base mb-4" style={{ fontFamily: "Merriweather,serif" }}>📚 Research Sources</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { title: "UK Home Office", desc: "Overstay data, visa statistics & UK laws (2025)" },
                                    { title: "Migration Observatory", desc: "Integration challenges & employment data" },
                                    { title: "IOM / UNHCR", desc: "Psychological screening (PHQ-9, GAD-7, RHS-15)" },
                                    { title: "Life in the UK Handbook", desc: "General knowledge, history & UK values" },
                                ].map(s => (
                                    <div key={s.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                                        <div className="text-2xl mb-2">{s.icon}</div>
                                        <p className="font-bold text-gray-800 text-xs mb-1">{s.title}</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-4">Questions reviewed annually for updates (e.g., new visa rules from 2026+). Immediate scoring with explanations linked to gov.uk resources.</p>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-white shadow-lg">
                            <div>
                                <h3 className="font-black text-xl mb-1" style={{ fontFamily: "Merriweather,serif" }}>Ready for the full assessment?</h3>
                                <p className="text-white/75 text-sm">30 questions · 45 minutes · 75% to pass · Digitally verified certificate</p>
                            </div>
                            <a href="/assesment" className="flex-shrink-0 flex items-center gap-2 bg-white text-green-700 font-black text-sm px-6 py-3.5 rounded-xl hover:bg-green-50 transition-all shadow-md whitespace-nowrap">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Start Official Assessment
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
                        <span>🤝 Partnership with <span className="text-green-400">Government of the UK</span></span>
                    </div>
                </div>
            </footer>
        </div>
    );
}