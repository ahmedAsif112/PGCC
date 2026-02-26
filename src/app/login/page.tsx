"use client";

import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ identifier: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
        if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
    };

    const validate = () => {
        const errs = {};
        if (!form.identifier.trim()) errs.identifier = "CNIC or email is required";
        if (!form.password) errs.password = "Password is required";
        else if (form.password.length < 6) errs.password = "Enter a valid password";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4" style={{ fontFamily: "Nunito,sans-serif" }}>
                <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-10 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "Merriweather,serif" }}>Welcome Back!</h2>
                    <p className="text-gray-500 text-sm mb-6">You have successfully logged in to your PGCC account.</p>
                    <a href="/dashboard" className="block w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-all text-center">
                        Go to Dashboard →
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" style={{ fontFamily: "Nunito,sans-serif" }}>

            {/* TOP BAR */}
            <div className="bg-green-900 text-white text-xs py-2 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <span className="hidden sm:block opacity-80">Pakistan Global Competence Council — Official Portal</span>
                    <div className="flex items-center gap-1.5 ml-auto">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                        <span>Applications Open 2025</span>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                    <a href="/" className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full border-2 border-green-700 flex items-center justify-center bg-white shadow-sm">
                            <span className="text-green-700 font-black text-xs">PGCC</span>
                        </div>
                        <div>
                            <p className="text-green-700 font-black text-lg leading-tight" style={{ fontFamily: "Merriweather,serif" }}>UK-GCI</p>
                            <p className="text-gray-500 text-xs tracking-wide">Global Competence Initiative</p>
                        </div>
                    </a>
                    <div className="flex items-center gap-3">
                        <a href="/register" className="bg-green-700 hover:bg-green-800 text-white font-semibold text-sm px-4 py-2 rounded-md transition-all flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            Register
                        </a>
                        <a href="/" className="text-gray-500 hover:text-green-700 font-medium text-sm transition-colors hidden sm:flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO STRIP */}
            <div className="relative py-10 px-4 sm:px-6 text-white text-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0d4f1e 0%,#1a7a35 60%,#2d9e50 100%)" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="relative max-w-xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure Login — PGCC Official Portal
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black mb-2" style={{ fontFamily: "Merriweather,serif" }}>Welcome Back</h1>
                    <p className="text-white/75 text-sm">Sign in to your account to access your assessment and certificate</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
                        <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f9fafb" />
                    </svg>
                </div>
            </div>

            {/* MAIN */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid lg:grid-cols-5 gap-10 items-start">

                    {/* SIDEBAR */}
                    <div className="lg:col-span-2 space-y-5 order-2 lg:order-1">

                        {/* Info card */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-black text-gray-900 text-base mb-4 flex items-center gap-2" style={{ fontFamily: "Merriweather,serif" }}>
                                <span>🔐</span> Secure Access
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Log in to your PGCC account to access your competency assessment, track your progress, and download your certificate.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { icon: "🛡️", text: "256-bit encrypted connection" },
                                    { icon: "✅", text: "Government-verified portal" },
                                    { icon: "📱", text: "OTP-secured accounts" },
                                ].map(item => (
                                    <div key={item.text} className="flex items-center gap-3 text-sm text-gray-600">
                                        <span className="text-base">{item.icon}</span>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Steps after login */}
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="font-bold text-gray-900 text-sm mb-4">After Logging In:</h3>
                            {[
                                { n: "1", t: "Access your assessment dashboard" },
                                { n: "2", t: "Pay PKR 15,000 to unlock full test" },
                                { n: "3", t: "Complete 30-question assessment" },
                                { n: "4", t: "Download your digital certificate" },
                            ].map(s => (
                                <div key={s.n} className="flex items-start gap-3 mb-3 last:mb-0">
                                    <div className="w-6 h-6 bg-green-700 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{s.n}</div>
                                    <p className="text-xs text-gray-600 leading-relaxed">{s.t}</p>
                                </div>
                            ))}
                        </div>



                        {/* Need help */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm text-center">
                            <p className="text-gray-500 text-sm mb-1">Need help?</p>
                            <a href="mailto:info@pgcc.gov.pk" className="text-green-700 font-bold text-sm hover:underline">📧 info@pgcc.gov.pk</a>
                        </div>
                    </div>

                    {/* LOGIN FORM */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

                            {/* Form header */}
                            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-black text-gray-900 text-base" style={{ fontFamily: "Merriweather,serif" }}>Sign In to Your Account</h2>
                                    <p className="text-gray-500 text-xs">Use your CNIC or registered email</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="px-6 py-8">

                                {/* Identifier */}
                                <div className="mb-5">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        CNIC or Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="identifier"
                                            placeholder="00000-0000000-0 or you@example.com"
                                            value={form.identifier}
                                            onChange={handleChange}
                                            className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all placeholder-gray-400 ${errors.identifier ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-gray-400"}`}
                                        />
                                    </div>
                                    {errors.identifier && <p className="text-red-500 text-xs mt-1">{errors.identifier}</p>}
                                </div>

                                {/* Password */}
                                <div className="mb-2">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Password <span className="text-red-500">*</span>
                                        </label>
                                        <a href="/forgot-password" className="text-xs text-green-700 font-semibold hover:underline">Forgot Password?</a>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Enter your password"
                                            value={form.password}
                                            onChange={handleChange}
                                            className={`w-full border rounded-lg pl-10 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all placeholder-gray-400 ${errors.password ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-gray-400"}`}
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                            {showPassword ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                </div>

                                {/* Remember me */}
                                <div className="mb-7 mt-4">
                                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                                        <div className="relative flex-shrink-0">
                                            <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="sr-only" />
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${rememberMe ? "bg-green-700 border-green-700" : "border-gray-300 group-hover:border-green-700"}`}>
                                                {rememberMe && (
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">Remember me on this device</span>
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-green-700 hover:bg-green-800 active:bg-green-900 disabled:opacity-70 disabled:cursor-not-allowed text-white font-black text-base py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Signing In...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg>
                                            Sign In
                                        </>
                                    )}
                                </button>

                                {/* Divider */}
                                <div className="relative my-7">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200" />
                                    </div>
                                    <div className="relative flex justify-center text-xs">
                                        <span className="bg-white px-3 text-gray-400 font-medium">Don't have an account?</span>
                                    </div>
                                </div>

                                {/* Register CTA */}
                                <a
                                    href="/signup"
                                    className="w-full border-2 border-green-700 text-green-700 hover:bg-green-50 font-black text-base py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Create New Account
                                </a>

                                {/* Trust badges */}
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <p className="text-center text-xs text-gray-400 mb-3">Secured & verified by</p>
                                    <div className="flex items-center justify-center gap-6">
                                        {[
                                            { flag: "🇬🇧", label: "UK Home Office" },
                                            { flag: "🌐", label: "PGCC" },
                                            { flag: "🏛️", label: "British High Commission" },
                                        ].map(b => (
                                            <div key={b.label} className="flex flex-col items-center gap-1">
                                                <span className="text-xl">{b.flag}</span>
                                                <span className="text-xs text-gray-400">{b.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-green-950 text-white mt-8 py-8 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© 2026 Pakistan Global Competence Council. All rights reserved.</p>
                    <div className="flex items-center gap-4 flex-wrap justify-center">
                        <a href="mailto:info@pgcc.gov.pk" className="hover:text-green-400 transition-colors">📧 info@pgcc.gov.pk</a>
                        <span className="hidden sm:block text-gray-600">|</span>
                        <span>🤝 Partnership with <span className="text-green-400">Government of the UK</span></span>
                    </div>
                </div>
            </footer>
        </div>
    );
}