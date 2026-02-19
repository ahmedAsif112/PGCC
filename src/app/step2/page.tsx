"use client";
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ArrowRight, Zap, Target, ShieldCheck, Star, TrendingUp, Check } from 'lucide-react';
import { useRouter } from "next/navigation";


const Step2 = () => {
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);
    const router = useRouter();
    const [goals, setGoals] = useState("");
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements((prev) => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);
    useEffect(() => {
        const savedGoals = localStorage.getItem("step2_goals");
        if (savedGoals) {
            setGoals(savedGoals);
        }
    }, []);
    const isVisible = (id: string) => visibleElements.has(id);
    const handleNext = () => {
        localStorage.setItem("goals", goals);
        router.push("/step3"); // change route if needed
    };
    return (
        <div className="relative min-h-screen bg-white py-12 md:py-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,38,77,.05) 35px, rgba(0,38,77,.05) 70px)`
                }}></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div
                    id="step2-header"
                    data-animate
                    className={`text-center mb-12 md:mb-16 space-y-6 transition-all duration-1000 ${isVisible('step2-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-2xl md:text-5xl font-extrabold text-[#00264D] max-w-4xl mx-auto leading-[1.1]">
                        Imagine If Your Online Presence Actually <span className="text-[#0068D4]">Brought You Clients.</span>
                    </h2>
                    <p className="text-lg text-[#00264D]/70 max-w-2xl mx-auto font-medium">
                        We turn "vanity metrics" into cold, hard revenue. No post-and-pray. Just strategy.
                    </p>
                </div>

                <div
                    id="step2-main-content"
                    data-animate
                    className={`grid lg:grid-cols-2 gap-12 items-start mt-16 transition-all duration-1000 ${isVisible('step2-main-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {/* Left Column: Content Blocks */}
                    <div className="space-y-8 text-left">
                        {/* What You'll Get Section */}
                        <div>
                            <h3 className="text-xl font-bold text-[#00264D] mb-6">
                                What You'll Get:
                            </h3>

                            <div className="space-y-3">
                                {[
                                    { title: "Consistent Qualified Leads", desc: "Wake up every Monday to a calendar full of prospects who actually need your service.", icon: <Check className="text-green-600" size={20} /> },
                                    { title: "Authoritative Branding", desc: "Position yourself as the only logical choice in your market through strategic content.", icon: <Check className="text-green-600" size={20} /> },
                                    { title: "Ads That Convert", desc: "Stop bleeding cash. Get performance-driven campaigns designed for ROI.", icon: <Check className="text-green-600" size={20} /> },
                                    { title: "24/7 Selling System", desc: "A website that works while you sleep, qualifying visitors and closing deals.", icon: <Check className="text-green-600" size={20} /> },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-[#2a88e0] border border-gray-200 transition-all hover:border-green-600/30 hover:shadow-md group"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-white mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-white leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Video - Only visible on mobile, positioned AFTER "What You'll Get" */}
                        <div className="relative lg:hidden">
                            <div className="rounded-[1.5rem] overflow-hidden shadow-2xl bg-gray-100">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto"
                                >
                                    <source src="/blue.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-600/5 blur-[120px] rounded-full -z-10"></div>
                        </div>

                        {/* Why EmpireOffshore Section */}
                        <div className="p-6 rounded-2xl bg-white border border-[#0068D4]/20 shadow-lg">
                            <h3 className="text-lg font-extrabold text-[#00264D] mb-4">Why EmpireOffshore?</h3>
                            <p className="text-sm text-[#00264D]/70 leading-relaxed mb-4">
                                EmpireOffshore helps businesses turn their online presence into a <span className="text-[#0068D4] font-bold">predictable client-generation system</span> through strategic management.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-8 bg-[#0068D4] rounded-full flex-shrink-0"></div>
                                    <p className="text-xs font-bold text-[#00264D] uppercase tracking-tight">Worked with International Clients</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-8 bg-[#0068D4] rounded-full flex-shrink-0"></div>
                                    <p className="text-xs font-bold text-[#00264D] uppercase tracking-tight">Strategy-First Execution</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-8 bg-[#0068D4] rounded-full flex-shrink-0"></div>
                                    <p className="text-xs font-bold text-[#00264D] uppercase tracking-tight">Results > Vanity Metrics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Video - Only visible on desktop */}
                    <div className="relative pt-0 md:pt-12 lg:pt-0 hidden lg:block">
                        <div className="rounded-[1.5rem] overflow-hidden shadow-2xl bg-gray-100">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto"
                            >
                                <source src="/blue.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-600/5 blur-[120px] rounded-full -z-10"></div>
                    </div>
                </div>

                {/* Goals Description Box */}
                <div className="mt-16">
                    <div className="w-full">
                        <label htmlFor="goals" className="block text-sm font-bold text-[#00264D] uppercase tracking-wider mb-4">
                            What Are Your Goals?
                        </label>
                        <textarea
                            id="goals"
                            rows={5}
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                            className="w-full px-6 py-5 rounded-3xl border-2 border-gray-300 focus:border-[#0068D4] focus:outline-none focus:ring-4 focus:ring-[#0068D4]/10 transition-all duration-300 text-[#00264D] placeholder:text-gray-400 resize-none shadow-sm hover:shadow-md hover:border-gray-400"
                            placeholder="E.g. I want to generate 10 qualified leads per month, build authority in my niche, and get consistent bookings from my website..."
                        ></textarea>
                    </div>

                    {/* Relevant Hook Text */}
                    <p className="text-sm md:text-base text-[#00264D]/70 mt-6 leading-relaxed">
                        Based on what you share, we'll create a personalized blueprint showing exactly how to turn your online presence into a consistent lead-generation machine. Your strategy, your timeline, your results.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8 pb-10 flex justify-center">
                        <button
                            onClick={handleNext}
                            className="group relative flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm md:text-base py-4 px-8 md:px-10 rounded-full transition-all shadow-[0_20px_40px_-10px_rgba(22,163,74,0.4)] active:scale-95"
                        >
                            Get My Free Blueprint
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;