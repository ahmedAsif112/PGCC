"use client";

import { useState, useRef, useEffect } from "react";

const COUNTRIES = [
    "United Kingdom", "United States", "Canada", "Australia", "Germany", "France",
    "Netherlands", "Sweden", "Norway", "Denmark", "Switzerland", "Belgium", "Ireland",
    "New Zealand", "Italy", "Spain", "Portugal", "Austria", "Finland", "Poland",
    "Czech Republic", "Hungary", "Romania", "Bulgaria", "Greece", "Turkey", "UAE",
    "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Egypt",
    "South Africa", "Kenya", "Nigeria", "Ghana", "Malaysia", "Singapore", "Japan",
    "South Korea", "China", "India", "Bangladesh", "Afghanistan", "Iran", "Iraq",
    "Russia", "Ukraine", "Brazil", "Argentina", "Mexico", "Chile", "Colombia",
];

const PURPOSES = [
    { value: "study", label: " Study / Education", desc: "University, college, language school" },
    { value: "work", label: " Work / Employment", desc: "Skilled worker, intra-company transfer" },
    { value: "business", label: " Business Visit", desc: "Meetings, conferences, trade" },
    { value: "tourist", label: " Tourism / Holiday", desc: "Leisure, sightseeing, recreation" },
    { value: "family", label: " Family Visit", desc: "Visiting spouse, parents, relatives" },
    { value: "medical", label: " Medical Treatment", desc: "Healthcare, surgery, therapy" },
    { value: "transit", label: " Transit", desc: "Passing through to another country" },
    { value: "settlement", label: " Settlement / PR", desc: "Permanent residency, spouse visa" },
];

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: "", middleName: "", lastName: "", dob: "",
        cnic: "", mobile: "", email: "", password: "", confirmPassword: "",
        destination: "", purpose: "", photo: null as File | null,
    });

    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Country search state
    const [countrySearch, setCountrySearch] = useState("");
    const [countryOpen, setCountryOpen] = useState(false);
    const countryRef = useRef<HTMLDivElement>(null);

    // Purpose dropdown state
    const [purposeOpen, setPurposeOpen] = useState(false);
    const purposeRef = useRef<HTMLDivElement>(null);

    const filteredCountries = COUNTRIES.filter(c =>
        c.toLowerCase().includes(countrySearch.toLowerCase())
    );

    // Close dropdowns on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (countryRef.current && !countryRef.current.contains(e.target as Node)) setCountryOpen(false);
            if (purposeRef.current && !purposeRef.current.contains(e.target as Node)) setPurposeOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleCNIC = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/\D/g, "");
        if (val.length > 5 && val.length <= 12) val = val.slice(0, 5) + "-" + val.slice(5);
        if (val.length > 13) val = val.slice(0, 13) + "-" + val.slice(13, 14);
        if (val.replace(/-/g, "").length > 13) return;
        setFormData(prev => ({ ...prev, cnic: val }));
        setErrors(prev => ({ ...prev, cnic: "" }));
    };

    const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, photo: file }));
            const reader = new FileReader();
            reader.onloadend = () => setPhotoPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const selectCountry = (country: string) => {
        setFormData(prev => ({ ...prev, destination: country }));
        setCountrySearch(country);
        setCountryOpen(false);
        setErrors(prev => ({ ...prev, destination: "" }));
    };

    const selectPurpose = (value: string) => {
        setFormData(prev => ({ ...prev, purpose: value }));
        setPurposeOpen(false);
        setErrors(prev => ({ ...prev, purpose: "" }));
    };

    const selectedPurpose = PURPOSES.find(p => p.value === formData.purpose);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.dob) newErrors.dob = "Date of birth is required.";
        if (!formData.cnic || formData.cnic.replace(/-/g, "").length < 13)
            newErrors.cnic = "Enter a valid 13-digit CNIC number.";
        if (!formData.destination) newErrors.destination = "Please select a destination country.";
        if (!formData.purpose) newErrors.purpose = "Please select your purpose of travel.";
        if (!formData.mobile || formData.mobile.length < 10)
            newErrors.mobile = "Enter a valid mobile number.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email address.";
        if (!formData.password || formData.password.length < 8)
            newErrors.password = "Password must be at least 8 characters.";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match.";
        if (!agreed) newErrors.agreed = "You must agree to the Terms of Use and Privacy Policy.";
        return newErrors;
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            const firstErrorKey = Object.keys(validationErrors)[0];
            const el = document.querySelector(`[name="${firstErrorKey}"]`);
            el?.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4" style={{ fontFamily: "Nunito,sans-serif" }}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "Merriweather,serif" }}>Account Created!</h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-sm text-gray-500">Destination:</span>
                        <span className="text-sm font-bold text-green-700">{formData.destination}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-sm font-bold text-green-700">{selectedPurpose?.label}</span>
                    </div>
                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                        An OTP has been sent to <span className="text-green-700 font-semibold">{formData.mobile}</span>. Please verify to activate your account.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-left space-y-3 mb-8">
                        {[
                            { step: "1", text: "Check your mobile for the OTP" },
                            { step: "2", text: "Verify and activate your account" },
                            { step: "3", text: "Log in to begin your assessment" },
                        ].map(s => (
                            <div key={s.step} className="flex items-center gap-3">
                                <div className="w-7 h-7 bg-green-700 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">{s.step}</div>
                                <span className="text-gray-700 text-sm">{s.text}</span>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setSubmitted(false)} className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-all">
                        Back to Registration
                    </button>
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
            <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                    <a href="/" className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full border-2 border-green-700 flex items-center justify-center bg-white">
                            <span className="text-green-700 font-black text-xs">PGCC</span>
                        </div>
                        <div>
                            <p className="text-green-700 font-black text-base leading-tight" style={{ fontFamily: "Merriweather,serif" }}>UK-GCI</p>
                            <p className="text-gray-400 text-xs tracking-wide">Global Competence Initiative</p>
                        </div>
                    </a>
                    <div className="flex items-center gap-3">
                        <a href="/login" className="border border-green-700 text-green-700 hover:bg-green-50 font-semibold text-sm px-4 py-2 rounded-md transition-all hidden sm:flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Login
                        </a>
                        <a href="/" className="text-gray-500 hover:text-green-700 text-sm font-medium transition-colors">← Home</a>
                    </div>
                </div>
            </nav>

            {/* HERO BANNER */}
            <div className="relative py-12 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d4f1e 0%, #1a7a35 60%, #2d9e50 100%)" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
                <div className="relative max-w-3xl mx-auto text-center text-white">
                    <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse inline-block" />
                        Secure Registration Portal
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black mb-3" style={{ fontFamily: "Merriweather,serif" }}>Create Your Account</h1>
                    <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
                        Register for the <span className="text-green-300 font-semibold">UK Competency Certificate</span> — your gateway to a successful UK visa application.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                        {[{ icon: "⚡", text: "Quick Registration" }, { icon: "🔒", text: "Secure Data Protection" }, { icon: "✅", text: "Simple Verification" }].map(b => (
                            <div key={b.text} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90">
                                <span>{b.icon}</span><span>{b.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
                        <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f9fafb" />
                    </svg>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* SIDEBAR */}
                    <div className="lg:col-span-1 space-y-5">
                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-gradient-to-r from-green-900 to-green-700 px-5 py-4">
                                <p className="text-green-200 text-xs font-bold tracking-widest uppercase mb-1">Certificate</p>
                                <p className="text-white font-black text-base" style={{ fontFamily: "Merriweather,serif" }}>Mandatory Competency Certificate</p>
                            </div>
                            <div className="p-5 space-y-3">
                                <div className="h-px bg-gray-100" />
                                {["All UK visa categories", "Business, Education, Labour, Tourist", "75% passing score required", "Digitally verified certificate"].map(item => (
                                    <div key={item} className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-600 text-xs">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                            <p className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2"><span>📱</span> After Registration</p>
                            <div className="space-y-3">
                                {[{ n: "1", t: "Receive OTP on mobile" }, { n: "2", t: "Verify & activate account" }, { n: "3", t: "Log in to begin assessment" }].map(s => (
                                    <div key={s.n} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-700 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">{s.n}</div>
                                        <span className="text-gray-700 text-xs">{s.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-5">
                            <p className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2"><span>🔐</span> Data Protection</p>
                            {["Protected and encrypted", "Used only for certification", "UK visa verification purposes"].map(item => (
                                <div key={item} className="flex items-center gap-2 mb-2">
                                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-xs">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                            <p className="text-gray-500 text-sm mb-3">Already have an account?</p>
                            <a href="/login" className="flex items-center justify-center gap-2 border border-green-700 text-green-700 hover:bg-green-50 font-bold text-sm px-5 py-2.5 rounded-lg transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                                </svg>
                                Log in Here
                            </a>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

                            <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
                                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-black text-gray-900 text-lg" style={{ fontFamily: "Merriweather,serif" }}>Registration Form</h2>
                                    <p className="text-gray-400 text-xs">All fields marked * are required</p>
                                </div>
                            </div>

                            <div className="p-6 space-y-8">

                                {/* PERSONAL INFO */}
                                <section>
                                    <SectionHeading icon="👤" title="Personal Information" />
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <InputField label="First Name" name="firstName" required placeholder="e.g. Muhammad" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                                        <InputField label="Middle Name" name="middleName" placeholder="Optional" value={formData.middleName} onChange={handleChange} />
                                        <InputField label="Last Name" name="lastName" required placeholder="e.g. Khan" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
                                        <InputField label="Date of Birth" name="dob" type="date" required value={formData.dob} onChange={handleChange} error={errors.dob} />
                                    </div>

                                    {/* CNIC */}
                                    <div className="mt-4">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            CNIC Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="cnic"
                                            value={formData.cnic}
                                            onChange={handleCNIC}
                                            placeholder="XXXXX-XXXXXXX-X"
                                            maxLength={15}
                                            className={`w-full border ${errors.cnic ? "border-red-400 bg-red-50" : "border-gray-200"} rounded-lg px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all font-mono tracking-widest`}
                                        />
                                        {errors.cnic && <p className="text-red-500 text-xs mt-1">{errors.cnic}</p>}
                                        <p className="text-gray-400 text-xs mt-1">Format: 12345-1234567-1</p>
                                    </div>

                                    {/* ── NEW: DESTINATION + PURPOSE ── */}
                                    <div className="grid sm:grid-cols-2 gap-4 mt-4">

                                        {/* DESTINATION COUNTRY (searchable dropdown) */}
                                        <div ref={countryRef}>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                Destination Country <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Search country..."
                                                    value={countrySearch}
                                                    onFocus={() => setCountryOpen(true)}
                                                    onChange={e => {
                                                        setCountrySearch(e.target.value);
                                                        setFormData(prev => ({ ...prev, destination: "" }));
                                                        setCountryOpen(true);
                                                    }}
                                                    className={`w-full border ${errors.destination ? "border-red-400 bg-red-50" : formData.destination ? "border-green-400 bg-green-50" : "border-gray-200"} rounded-lg pl-9 pr-9 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all`}
                                                />
                                                {/* Chevron */}
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <svg className={`w-4 h-4 transition-transform ${countryOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>

                                                {/* Dropdown list */}
                                                {countryOpen && (
                                                    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                                                        <div className="max-h-48 overflow-y-auto">
                                                            {filteredCountries.length > 0 ? filteredCountries.map(country => (
                                                                <button
                                                                    key={country}
                                                                    type="button"
                                                                    onClick={() => selectCountry(country)}
                                                                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-green-50 hover:text-green-700 transition-colors flex items-center gap-2 ${formData.destination === country ? "bg-green-50 text-green-700 font-semibold" : "text-gray-700"}`}
                                                                >
                                                                    {country === "United Kingdom" && <span>🇬🇧</span>}
                                                                    {country === "United States" && <span>🇺🇸</span>}
                                                                    {country === "Canada" && <span>🇨🇦</span>}
                                                                    {country === "Australia" && <span>🇦🇺</span>}
                                                                    {country === "Germany" && <span>🇩🇪</span>}
                                                                    {country === "France" && <span>🇫🇷</span>}
                                                                    {!["United Kingdom", "United States", "Canada", "Australia", "Germany", "France"].includes(country) && <span>🌍</span>}
                                                                    {country}
                                                                    {formData.destination === country && (
                                                                        <svg className="w-4 h-4 ml-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                    )}
                                                                </button>
                                                            )) : (
                                                                <div className="px-4 py-6 text-center text-gray-400 text-sm">
                                                                    <span className="text-2xl block mb-1">🔍</span>
                                                                    No countries found
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
                                            {formData.destination && (
                                                <p className="text-green-700 text-xs mt-1 flex items-center gap-1 font-semibold">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    {formData.destination} selected
                                                </p>
                                            )}
                                        </div>

                                        {/* PURPOSE OF TRAVEL */}
                                        <div ref={purposeRef}>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                Purpose of Travel <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setPurposeOpen(!purposeOpen)}
                                                    className={`w-full border ${errors.purpose ? "border-red-400 bg-red-50" : formData.purpose ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"} rounded-lg px-4 py-3 text-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all`}
                                                >
                                                    <span className={selectedPurpose ? "text-gray-800 font-medium" : "text-gray-400"}>
                                                        {selectedPurpose ? selectedPurpose.label : "Select purpose..."}
                                                    </span>
                                                    <svg className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ml-2 ${purposeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                {/* Purpose dropdown */}
                                                {purposeOpen && (
                                                    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                                                        <div className="max-h-64 overflow-y-auto py-1">
                                                            {PURPOSES.map(p => (
                                                                <button
                                                                    key={p.value}
                                                                    type="button"
                                                                    onClick={() => selectPurpose(p.value)}
                                                                    className={`w-full text-left px-4 py-3 hover:bg-green-50 transition-colors ${formData.purpose === p.value ? "bg-green-50 border-l-2 border-green-600" : ""}`}
                                                                >
                                                                    <p className={`text-sm font-semibold ${formData.purpose === p.value ? "text-green-700" : "text-gray-800"}`}>{p.label}</p>
                                                                    <p className="text-xs text-gray-400 mt-0.5">{p.desc}</p>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {errors.purpose && <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>}
                                            {selectedPurpose && (
                                                <p className="text-green-700 text-xs mt-1 flex items-center gap-1 font-semibold">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    {selectedPurpose.desc}
                                                </p>
                                            )}
                                        </div>

                                    </div>
                                </section>

                                <div className="h-px bg-gray-100" />

                                {/* CONTACT DETAILS */}
                                <section>
                                    <SectionHeading icon="📞" title="Contact Details" />
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                Mobile Number <span className="text-red-500">*</span>
                                                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">OTP here</span>
                                            </label>
                                            <div className="flex">
                                                <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-gray-500 text-sm whitespace-nowrap">
                                                    🇵🇰 +92
                                                </div>
                                                <input
                                                    name="mobile"
                                                    type="tel"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    placeholder="3XX-XXXXXXX"
                                                    className={`flex-1 border ${errors.mobile ? "border-red-400 bg-red-50" : "border-gray-200"} rounded-r-lg px-3 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all`}
                                                />
                                            </div>
                                            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                                        </div>
                                        <InputField label="Email Address" name="email" type="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} error={errors.email} />
                                    </div>
                                </section>

                                <div className="h-px bg-gray-100" />

                                {/* SECURITY */}
                                <section>
                                    <SectionHeading icon="🔒" title="Account Security" />
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {/* Password */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} placeholder="Min. 8 characters"
                                                    className={`w-full border ${errors.password ? "border-red-400 bg-red-50" : "border-gray-200"} rounded-lg px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all pr-11`} />
                                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                                                    </svg>
                                                </button>
                                            </div>
                                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                            {formData.password && (
                                                <div className="mt-2">
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3, 4].map(i => (
                                                            <div key={i} className={`h-1 flex-1 rounded-full transition-all ${formData.password.length >= i * 2 ? (formData.password.length >= 12 ? "bg-green-500" : formData.password.length >= 8 ? "bg-yellow-400" : "bg-red-400") : "bg-gray-200"}`} />
                                                        ))}
                                                    </div>
                                                    <p className="text-xs text-gray-400 mt-1">{formData.password.length < 8 ? "Too short" : formData.password.length < 12 ? "Fair" : "Strong"}</p>
                                                </div>
                                            )}
                                        </div>
                                        {/* Confirm Password */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} onChange={handleChange} placeholder="Re-enter password"
                                                    className={`w-full border ${errors.confirmPassword ? "border-red-400 bg-red-50" : formData.confirmPassword && formData.confirmPassword === formData.password ? "border-green-400 bg-green-50" : "border-gray-200"} rounded-lg px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all pr-11`} />
                                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showConfirmPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                                                    </svg>
                                                </button>
                                            </div>
                                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                            {formData.confirmPassword && formData.confirmPassword === formData.password && (
                                                <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                    Passwords match
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                <div className="h-px bg-gray-100" />

                                {/* PROFILE PHOTO */}
                                <section>
                                    <SectionHeading icon="🖼️" title="Profile Photo (Optional)" />
                                    <div className="flex flex-col sm:flex-row items-start gap-5">
                                        <div className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
                                            {photoPreview
                                                ? <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                                : <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            }
                                        </div>
                                        <div className="flex-1">
                                            <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-green-700 rounded-xl p-5 transition-all bg-gray-50 hover:bg-green-50 group">
                                                <svg className="w-8 h-8 text-gray-400 group-hover:text-green-700 mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-sm font-semibold text-gray-600 group-hover:text-green-700 transition-colors">
                                                    {formData.photo ? formData.photo.name : "Click to upload photo"}
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">JPG or PNG · Plain background preferred</p>
                                            </label>
                                            <input id="photo-upload" type="file" accept="image/jpeg,image/png" onChange={handlePhoto} className="hidden" />
                                        </div>
                                    </div>
                                </section>

                                <div className="h-px bg-gray-100" />

                                {/* TERMS */}
                                <section>
                                    <div
                                        className={`flex items-start gap-3 p-4 rounded-xl border ${errors.agreed ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"} cursor-pointer`}
                                        onClick={() => { setAgreed(!agreed); setErrors(p => ({ ...p, agreed: "" })); }}
                                    >
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${agreed ? "bg-green-700 border-green-700" : "border-gray-300 bg-white"}`}>
                                            {agreed && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                By registering, I agree to the{" "}
                                                <a href="#" className="text-green-700 font-semibold hover:underline" onClick={e => e.stopPropagation()}>Terms of Use</a>{" "}
                                                and <a href="#" className="text-green-700 font-semibold hover:underline" onClick={e => e.stopPropagation()}>Privacy Policy</a>.
                                                I confirm that all information provided is accurate and truthful.
                                            </p>
                                            {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}
                                        </div>
                                    </div>
                                </section>

                                {/* SUBMIT */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-green-700 hover:bg-green-800 text-white font-black text-base py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Create Account
                                </button>

                                <p className="text-center text-gray-500 text-sm">
                                    Already have an account?{" "}
                                    <a href="/login" className="text-green-700 font-bold hover:underline">👉 Log in here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-green-950 text-white mt-12 py-8 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© 2026 Pakistan Global Competence Council. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="mailto:info@pgcc.gov.pk" className="hover:text-green-400 transition-colors">📧 info@pgcc.gov.pk</a>
                        <span>|</span>
                        <span>🤝 Partnership with <span className="text-green-400">Government of the UK</span></span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function SectionHeading({ icon, title }: { icon: string; title: string }) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-base">{icon}</div>
            <h3 className="font-bold text-gray-900">{title}</h3>
            <div className="flex-1 h-px bg-gray-100" />
        </div>
    );
}

function InputField({ label, name, type = "text", required = false, placeholder, value, onChange, error }: {
    label: string; name: string; type?: string; required?: boolean; placeholder?: string;
    value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error?: string;
}) {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
                className={`w-full border ${error ? "border-red-400 bg-red-50" : "border-gray-200"} rounded-lg px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700 transition-all`} />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}