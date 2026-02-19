'use client';

import React, { useState, useEffect, useRef } from 'react';

const ABOUT_STATS = [
    { value: '7+', label: 'Years of Excellence' },
    { value: '150+', label: 'Expert Professionals' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' }
];

const steps = [
    {
        step: '01',
        title: 'You explain your goals',
        desc: 'Share your business objectives and challenges with us',
        color: '#FFB509',
        borderColor: 'border-[#FFB509]'
    },
    {
        step: '02',
        title: 'We build the roadmap',
        desc: 'Strategic planning tailored to your growth targets',
        color: '#304BAB',
        borderColor: 'border-[#304BAB]'
    },
    {
        step: '03',
        title: 'We execute with full transparency',
        desc: 'Implementation with clear communication at every stage',
        color: '#FFB509',
        borderColor: 'border-[#FFB509]'
    },
    {
        step: '04',
        title: 'You see the performance improve in real time',
        desc: 'Track measurable results through detailed reporting',
        color: '#304BAB',
        borderColor: 'border-[#304BAB]'
    },
    {
        step: '05',
        title: 'Continuous optimization',
        desc: 'Regular monitoring and improvements based on data',
        color: '#FFB509',
        borderColor: 'border-[#FFB509]'
    }
];

const SERVICES = [
    { title: 'SEO Services', desc: 'Organic traffic and qualified leads' },
    { title: 'Content Marketing', desc: 'Build authority and trust' },
    { title: 'Website Design & Development', desc: 'Improve conversions' },
    { title: 'PPC & Paid Advertising', desc: 'Fast and targeted results' },
    { title: 'Lead Generation Systems', desc: 'Run automatically' },
    { title: 'Automation & Outreach', desc: 'Save time and increase sales' }
];

const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});
    const [animatedStats, setAnimatedStats] = useState<{ [key: number]: number }>({
        0: 0,
        1: 0,
        2: 0,
        3: 0
    });
    const timelineRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // Animate numbers when stats become visible
    useEffect(() => {
        if (visibleSections['stats-grid']) {
            ABOUT_STATS.forEach((stat, idx) => {
                const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
                let currentValue = 0;
                const duration = 2000;
                const steps = 60;
                const increment = targetValue / steps;
                const stepDuration = duration / steps;

                let step = 0;
                const interval = setInterval(() => {
                    step++;
                    currentValue = Math.min(Math.floor(increment * step), targetValue);
                    setAnimatedStats(prev => ({ ...prev, [idx]: currentValue }));

                    if (step >= steps) {
                        clearInterval(interval);
                    }
                }, stepDuration);
            });
        }
    }, [visibleSections['stats-grid']]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => {
            if (timelineRef.current) {
                observer.unobserve(timelineRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('data-section-id');
                        if (id) {
                            setVisibleSections((prev) => ({ ...prev, [id]: true }));
                        }
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white relative border-b border-gray-200 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#304BAB]/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB509]/10 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 space-y-16 relative z-10">

                {/* Header & Split Section */}
                <div className="space-y-10">
                    <div
                        className="text-center space-y-4 opacity-0 translate-y-10 transition-all duration-700"
                        data-section-id="header"
                        ref={(el) => (sectionRefs.current['header'] = el)}
                        style={{
                            opacity: visibleSections['header'] ? 1 : 0,
                            transform: visibleSections['header'] ? 'translateY(0)' : 'translateY(40px)'
                        }}
                    >
                        <div className="inline-block">
                            <span className="text-xs font-semibold tracking-widest text-[#304BAB] uppercase px-3 py-1.5 bg-[#304BAB]/10 rounded-full">
                                About Empire Offshore
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            <span className="block md:inline">Welcome to</span>{' '}
                            <span className="text-[#304BAB]">
                                Empire Offshore
                            </span>
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-3">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                Empire Offshore delivers measurable growth through advanced digital services, performance marketing, SEO, and multi-channel development solutions.
                                Since its inception in 2018, the company has focused on strengthening brand visibility, increasing revenue, and optimizing digital operations
                                through strategic execution and high-level technical expertise.
                            </p>
                            <p className="text-gray-800 text-sm md:text-base font-medium">
                                Every system, service, and workflow is designed to support{' '}
                                <span className="text-[#304BAB] font-bold">
                                    faster, smarter, and more efficient business growth
                                </span>.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Content with gradient card */}
                        <div
                            className="opacity-0 -translate-x-10 transition-all duration-700 delay-200"
                            data-section-id="content-left"
                            ref={(el) => (sectionRefs.current['content-left'] = el)}
                            style={{
                                opacity: visibleSections['content-left'] ? 1 : 0,
                                transform: visibleSections['content-left'] ? 'translateX(0)' : 'translateX(-40px)'
                            }}
                        >
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-[#304BAB]/20 relative overflow-hidden">
                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB509]/10 rounded-bl-full"></div>

                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-1 h-12 bg-[#304BAB] rounded-full"></div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                            Your competition isn't just down the street.
                                        </h3>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-[#FFB509]">
                                        They're leveraging a global talent pool. Are you?
                                    </h4>
                                    <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
                                        <p className="flex items-start gap-3">
                                            <span className="text-[#304BAB] text-2xl flex-shrink-0">•</span>
                                            <span>In the race for market dominance, reducing operational costs isn't enough. You need a strategic advantage. Empire Offshore is your offshore business solution, a force multiplier that lets you tap into a global network of expertise without the overhead.</span>
                                        </p>
                                        <p className="flex items-start gap-3">
                                            <span className="text-[#FFB509] text-2xl flex-shrink-0">•</span>
                                            <span>Imagine a dedicated team of 150+ professionals masterminds in SEO-driven content writing, conversion-focused digital marketing, and agile web & app development, all working in sync with your goals while you sleep.</span>
                                        </p>
                                        <p className="flex items-start gap-3">
                                            <span className="text-[#304BAB] text-2xl flex-shrink-0">•</span>
                                            <span>We become your comprehensive BPO partner, managing critical back-office and customer support functions, so your core team can focus on innovation and strategy.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Stats Grid with enhanced design */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-0 translate-x-10 transition-all duration-700 delay-300"
                            data-section-id="stats-grid"
                            ref={(el) => (sectionRefs.current['stats-grid'] = el)}
                            style={{
                                opacity: visibleSections['stats-grid'] ? 1 : 0,
                                transform: visibleSections['stats-grid'] ? 'translateX(0)' : 'translateX(40px)'
                            }}
                        >
                            {ABOUT_STATS.map((stat, idx) => {
                                const suffix = stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : '';
                                const displayValue = animatedStats[idx] ?? 0;
                                const mainColor = idx % 2 === 0 ? '#304BAB' : '#FFB509';
                                const borderColor = idx % 2 === 0 ? 'border-[#304BAB]/30' : 'border-[#FFB509]/30';
                                const hoverBorder = idx % 2 === 0 ? 'hover:border-[#304BAB]' : 'hover:border-[#FFB509]';

                                return (
                                    <div
                                        key={idx}
                                        className={`relative bg-white p-6 rounded-2xl border-2 ${borderColor} ${hoverBorder} transition-all shadow-xl hover:shadow-2xl flex flex-col items-center justify-center text-center group overflow-hidden`}
                                        style={{
                                            opacity: visibleSections['stats-grid'] ? 1 : 0,
                                            transform: visibleSections['stats-grid'] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                                            transition: `all 0.5s ease ${idx * 100 + 400}ms`
                                        }}
                                    >
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-all duration-300" style={{ backgroundColor: mainColor }}></div>

                                        <div className="relative z-10">
                                            <span className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform block" style={{ color: mainColor }}>
                                                {displayValue}{suffix}
                                            </span>
                                            <span className="text-gray-700 font-semibold text-xs md:text-sm">{stat.label}</span>
                                        </div>

                                        {/* Decorative corner */}
                                        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-full" style={{ backgroundColor: `${mainColor}10` }}></div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

                {/* What We Do Section */}
                <div className="space-y-8 md:space-y-12 relative">
                    {/* Decorative background elements for this section */}
                    <div className="absolute top-20 right-10 w-64 h-64 bg-[#304BAB]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#FFB509]/10 rounded-full blur-3xl"></div>

                    <div
                        className="text-center space-y-6 opacity-0 translate-y-10 transition-all duration-700 relative z-10"
                        data-section-id="what-we-do-header"
                        ref={(el) => (sectionRefs.current['what-we-do-header'] = el)}
                        style={{
                            opacity: visibleSections['what-we-do-header'] ? 1 : 0,
                            transform: visibleSections['what-we-do-header'] ? 'translateY(0)' : 'translateY(40px)'
                        }}
                    >
                        <div className="inline-block">
                            <span className="text-xs font-semibold tracking-widest text-[#FFB509] uppercase px-3 py-1.5 bg-[#FFB509]/10 rounded-full">
                                Our Services
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-5xl font-bold text-gray-900">
                            What We Do for{' '}
                            <span className="text-[#304BAB]">
                                You
                            </span>
                        </h3>
                        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
                            You need digital services that work. Here is what we offer and how we help you win.
                        </p>

                        {/* Decorative divider */}
                        <div className="flex items-center justify-center gap-2 pt-2">
                            <div className="w-2 h-2 rounded-full bg-[#304BAB]"></div>
                            <div className="w-12 md:w-16 h-0.5 bg-[#FFB509]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFB509]"></div>
                            <div className="w-12 md:w-16 h-0.5 bg-[#304BAB]"></div>
                            <div className="w-2 h-2 rounded-full bg-[#304BAB]"></div>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 relative z-10"
                        data-section-id="services-grid"
                        ref={(el) => (sectionRefs.current['services-grid'] = el)}
                    >
                        {SERVICES.map((service, idx) => {
                            const mainColor = idx % 2 === 0 ? '#304BAB' : '#FFB509';
                            const bgColor = idx % 2 === 0 ? 'bg-[#304BAB]/10' : 'bg-[#FFB509]/10';
                            const hoverBg = idx % 2 === 0 ? 'group-hover:bg-[#304BAB]/20' : 'group-hover:bg-[#FFB509]/20';

                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white p-4 md:p-8 rounded-xl md:rounded-2xl border-2 border-gray-200 hover:shadow-2xl opacity-0 overflow-hidden transition-all duration-500"
                                    style={{
                                        opacity: visibleSections['services-grid'] ? 1 : 0,
                                        transform: visibleSections['services-grid'] ? 'translateY(0) rotateX(0deg)' : 'translateY(30px) rotateX(10deg)',
                                        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 100}ms`,
                                        borderColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = mainColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }}
                                >
                                    {/* Icon/Number badge */}
                                    <div className="relative z-10 mb-2 md:mb-4">
                                        <div className={`inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl ${bgColor} ${hoverBg} transition-all duration-500`}>
                                            <span className="text-lg md:text-2xl font-bold" style={{ color: mainColor }}>
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 space-y-1 md:space-y-3">
                                        <h4 className="text-sm md:text-xl font-bold text-gray-900 group-hover:transition-all duration-300 leading-tight">
                                            {service.title}
                                        </h4>
                                        <p className="text-xs md:text-base text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-full" style={{ backgroundColor: `${mainColor}10` }}></div>
                                </div>
                            )
                        })}
                    </div>

                    <div
                        className="relative bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-[#304BAB]/30 text-center opacity-0 overflow-hidden shadow-lg"
                        data-section-id="services-cta"
                        ref={(el) => (sectionRefs.current['services-cta'] = el)}
                        style={{
                            opacity: visibleSections['services-cta'] ? 1 : 0,
                            transform: visibleSections['services-cta'] ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s'
                        }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-[#304BAB]/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#FFB509]/10 rounded-full blur-2xl"></div>

                        {/* Icon */}
                        <div className="relative z-10 flex justify-center mb-4 md:mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#304BAB] flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>

                        <p className="relative z-10 text-gray-700 text-sm md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Think of us as your <span className="text-[#304BAB] font-bold">offshore digital agency</span>.
                            You get an entire digital team without hiring one. You get better execution without the chaos.
                            And you get <span className="text-[#FFB509] font-bold">growth that you can measure</span>.
                        </p>

                        {/* Decorative bottom accent */}
                        <div className="relative z-10 flex justify-center mt-4 md:mt-8">
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#304BAB] animate-pulse"></div>
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFB509] animate-pulse delay-75"></div>
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#304BAB] animate-pulse delay-150"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How We Operate - Flowchart Style */}
                <div className="py-8 md:py-12" ref={timelineRef}>
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div
                            className="text-center space-y-3 md:space-y-4 mb-10 md:mb-16 opacity-0 translate-y-10 transition-all duration-700"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                            }}
                        >
                            <h3 className="text-2xl md:text-5xl font-bold text-gray-800">
                                How We <span className="text-[#304BAB]">Operate</span>
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
                                We work in a way that keeps everything simple for you
                            </p>
                        </div>

                        {/* Mobile View - Vertical */}
                        <div className="md:hidden space-y-4">
                            {steps.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 opacity-0 translate-x-10 transition-all duration-500"
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                                        transitionDelay: `${idx * 100}ms`
                                    }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg" style={{ backgroundColor: item.color }}>
                                        {item.step}
                                    </div>
                                    <div className={`flex-1 bg-white p-4 rounded-xl shadow-md border-2 ${item.borderColor}`}>
                                        <h4 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop View - Flowchart */}
                        <div className="hidden md:block relative">
                            {/* Top Center - Main Process Box */}
                            <div className="flex justify-center mb-12 md:mb-16">
                                <div className="relative">
                                    <div className="px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-3xl bg-[#304BAB] shadow-2xl border-4 border-white">
                                        <h4 className="text-xl md:text-2xl font-bold text-white text-center">OUR WORK PROCESS</h4>
                                    </div>
                                    {/* Vertical line down */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 top-full w-1 bg-[#FFB509] transition-all duration-1000 ${isVisible ? 'h-12 md:h-16' : 'h-0'}`}></div>
                                </div>
                            </div>

                            {/* Steps Grid */}
                            <div className="relative">
                                {/* Horizontal connecting line */}
                                <div className="absolute top-10 md:top-12 left-0 right-0 h-1 bg-gray-200">
                                    <div className={`h-full bg-[#304BAB] transition-all duration-2000 ${isVisible ? 'w-full' : 'w-0'}`}></div>
                                </div>

                                {/* Steps */}
                                <div className="grid grid-cols-5 gap-3 md:gap-4">
                                    {steps.map((item, idx) => (
                                        <div key={idx} className="relative flex flex-col items-center">
                                            {/* Vertical line from horizontal line to circle */}
                                            <div className={`absolute left-1/2 -translate-x-1/2 top-0 w-1 transition-all duration-500`} style={{
                                                backgroundColor: item.color,
                                                height: '40px',
                                                transitionDelay: `${idx * 200 + 1000}ms`,
                                                transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                                                transformOrigin: 'top'
                                            }}></div>

                                            {/* Circle */}
                                            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-xl z-10 mt-10 md:mt-12 transition-all duration-500`} style={{
                                                backgroundColor: item.color,
                                                transitionDelay: `${idx * 200 + 1000}ms`,
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'scale(1)' : 'scale(0)'
                                            }}>
                                                {item.step}
                                            </div>

                                            {/* Vertical line from circle to card */}
                                            <div className={`w-1 transition-all duration-500`} style={{
                                                backgroundColor: item.color,
                                                height: '24px',
                                                transitionDelay: `${idx * 200 + 1500}ms`,
                                                transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                                                transformOrigin: 'top'
                                            }}></div>

                                            {/* Content Card */}
                                            <div className={`bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border-3 ${item.borderColor} hover:shadow-2xl transition-all duration-300 h-full`} style={{
                                                transitionDelay: `${idx * 200 + 1500}ms`,
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                            }}>
                                                <h4 className="font-bold text-sm md:text-base text-gray-900 mb-2 md:mb-3 text-center">{item.title}</h4>
                                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-center">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <div
                            className="text-center mt-12 md:mt-16 bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: '1500ms'
                            }}
                        >
                            <p className="text-gray-700 text-base md:text-xl">
                                Our structure keeps your business moving forward{' '}
                                <span className="text-[#304BAB] font-bold">without confusion</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div
                    className="flex flex-col gap-4 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-6 lg:gap-8"
                    data-section-id="mission-vision"
                    ref={(el) => (sectionRefs.current['mission-vision'] = el)}
                >
                    {/* Mission Card */}
                    <div
                        className="relative group bg-white p-5 md:p-8 rounded-xl md:rounded-3xl border-2 border-[#304BAB]/30 hover:border-[#304BAB] transition-all duration-500 opacity-0 overflow-hidden shadow-lg hover:shadow-2xl"
                        style={{
                            opacity: visibleSections['mission-vision'] ? 1 : 0,
                            transform: visibleSections['mission-vision'] ? 'translateX(0) scale(1)' : 'translateX(-40px) scale(0.95)',
                            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-[#304BAB]/0 group-hover:bg-[#304BAB]/5 transition-all duration-500"></div>

                        {/* Decorative circles */}
                        <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-24 h-24 md:w-32 md:h-32 bg-[#304BAB]/10 rounded-full blur-2xl group-hover:bg-[#304BAB]/20 transition-all duration-500"></div>
                        <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-20 h-20 md:w-24 md:h-24 bg-[#FFB509]/10 rounded-full blur-xl"></div>

                        <div className="relative z-10 flex flex-row items-start gap-3 md:gap-5">
                            {/* Icon with pulse effect */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-[#304BAB]/20 rounded-xl md:rounded-2xl blur-md group-hover:bg-[#304BAB]/30 transition-all duration-500"></div>
                                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#304BAB] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                {/* Animated dots */}
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#FFB509] rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                            </div>

                            <div className="flex-1 space-y-2 md:space-y-3">
                                <h3 className="text-xl md:text-3xl font-bold text-gray-900 group-hover:text-[#304BAB] transition-colors duration-300">
                                    Our Mission
                                </h3>
                                <p className="text-gray-700 text-xs md:text-lg leading-relaxed">
                                    To empower businesses with high quality digital services that create long-term and predictable growth.
                                </p>

                                {/* Progress bar accent */}
                                <div className="pt-1 md:pt-2">
                                    <div className="h-0.5 md:h-1 w-0 group-hover:w-full bg-[#304BAB] rounded-full transition-all duration-700 ease-out"></div>
                                </div>
                            </div>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#FFB509]/10 rounded-tl-2xl md:rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Vision Card */}
                    <div
                        className="relative group bg-white p-5 md:p-8 rounded-xl md:rounded-3xl border-2 border-[#FFB509]/30 hover:border-[#FFB509] transition-all duration-500 opacity-0 overflow-hidden shadow-lg hover:shadow-2xl"
                        style={{
                            opacity: visibleSections['mission-vision'] ? 1 : 0,
                            transform: visibleSections['mission-vision'] ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
                        }}
                    >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-[#FFB509]/0 group-hover:bg-[#FFB509]/5 transition-all duration-500"></div>

                        {/* Decorative circles */}
                        <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-24 h-24 md:w-32 md:h-32 bg-[#FFB509]/10 rounded-full blur-2xl group-hover:bg-[#FFB509]/20 transition-all duration-500"></div>
                        <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-20 h-20 md:w-24 md:h-24 bg-[#304BAB]/10 rounded-full blur-xl"></div>

                        <div className="relative z-10 flex flex-row items-start gap-3 md:gap-5">
                            {/* Icon with pulse effect */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-[#FFB509]/20 rounded-xl md:rounded-2xl blur-md group-hover:bg-[#FFB509]/30 transition-all duration-500"></div>
                                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#FFB509] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                {/* Animated dots */}
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#304BAB] rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                            </div>

                            <div className="flex-1 space-y-2 md:space-y-3">
                                <h3 className="text-xl md:text-3xl font-bold text-gray-900 group-hover:text-[#FFB509] transition-colors duration-300">
                                    Our Vision
                                </h3>
                                <p className="text-gray-700 text-xs md:text-lg leading-relaxed">
                                    To become the most trusted offshore digital agency for brands and entrepreneurs who want to scale globally.
                                </p>

                                {/* Progress bar accent */}
                                <div className="pt-1 md:pt-2">
                                    <div className="h-0.5 md:h-1 w-0 group-hover:w-full bg-[#FFB509] rounded-full transition-all duration-700 ease-out"></div>
                                </div>
                            </div>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-[#304BAB]/10 rounded-tr-2xl md:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;