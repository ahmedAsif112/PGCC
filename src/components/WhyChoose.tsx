'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Activity, CheckCircle, TrendingUp, Users, Clock, Shield, Zap, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from 'recharts';

// Growth data showing business transformation
const BUSINESS_GROWTH_DATA = [
    { month: 'Month 1', traditional: 5, empire: 8, label: 'Start' },
    { month: 'Month 2', traditional: 6, empire: 18, label: '' },
    { month: 'Month 3', traditional: 8, empire: 35, label: 'Clear Strategy' },
    { month: 'Month 4', traditional: 10, empire: 52, label: '' },
    { month: 'Month 5', traditional: 12, empire: 68, label: '' },
    { month: 'Month 6', traditional: 15, empire: 85, label: 'Traffic Growth' },
    { month: 'Month 7', traditional: 17, empire: 98, label: '' },
    { month: 'Month 8', traditional: 19, empire: 112, label: '' },
    { month: 'Month 9', traditional: 22, empire: 128, label: 'Lead Generation' },
    { month: 'Month 10', traditional: 24, empire: 142, label: '' },
    { month: 'Month 11', traditional: 26, empire: 155, label: '' },
    { month: 'Month 12', traditional: 28, empire: 170, label: 'Sales Growth' }
];

const WHY_CHOOSE_REASONS = [
    {
        icon: TrendingUp,
        title: 'Proven Results',
        desc: 'We deliver measurable improvements in traffic, visibility, leads, and sales'
    },
    {
        icon: Target,
        title: 'Clear Strategy',
        desc: 'We remove confusion and replace it with actionable, transparent roadmaps'
    },
    {
        icon: Users,
        title: 'Expert Teams',
        desc: '150+ skilled professionals dedicated to your business growth'
    },
    {
        icon: Clock,
        title: 'Faster Growth',
        desc: 'Accelerated timelines through efficient offshore operations'
    },
    {
        icon: Shield,
        title: 'Reliable Support',
        desc: 'Consistent digital support you can count on, day after day'
    },
    {
        icon: Zap,
        title: 'Efficient Operations',
        desc: 'Streamlined processes that save time and reduce operational costs'
    }
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/95 border border-blue-500/50 p-4 rounded-lg shadow-xl backdrop-blur-md">
                <p className="text-slate-300 text-sm mb-2 font-semibold">{label}</p>
                <div className="space-y-1.5">
                    <p className="text-blue-400 text-sm font-bold flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                        Empire Offshore: {payload[1]?.value}% Growth
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-slate-500"></span>
                        Traditional: {payload[0]?.value}% Growth
                    </p>
                </div>
            </div>
        );
    }
    return null;
};

const WhyChoose: React.FC = () => {
    const [isChartVisible, setIsChartVisible] = useState(false);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const chartRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Chart animation observer
        const chartObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsChartVisible(true);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px',
            }
        );

        if (chartRef.current) {
            chartObserver.observe(chartRef.current);
        }

        // Cards animation observer
        const cardObservers: IntersectionObserver[] = [];
        cardRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setVisibleCards((prev) => [...new Set([...prev, index])]);
                            }
                        });
                    },
                    {
                        threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px',
                    }
                );

                observer.observe(ref);
                cardObservers.push(observer);
            }
        });

        return () => {
            chartObserver.disconnect();
            cardObservers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <section
            className="py-20 relative overflow-hidden border-b border-[#003d7a]"
            style={{
                background: 'linear-gradient(135deg, #001f3f 0%, #003d7a 100%)',
            }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#003d7a_1px,transparent_1px),linear-gradient(to_bottom,#003d7a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 space-y-16">

                {/* Section Header */}
                <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        <span className="block md:inline">Why Choose</span>{' '}
                        <span className="text-[#E28713]">Empire Offshore?</span>
                    </h2>
                    <div className="space-y-3 md:space-y-4 leading-relaxed">
                        <p className="text-[#a8c5e6] text-[15px] md:text-[18px]">
                            Clients choose us because we <span className="text-[#00a8cc] font-semibold">deliver results</span>.
                            They choose us because we remove confusion and replace it with <span className="text-[#00a8cc] font-semibold">clear strategy</span>.
                            They choose us because they want reliable digital support that improves their
                            <span className="text-[#00a8cc] font-semibold"> traffic, visibility, leads, and sales</span>.
                        </p>
                        <p className="text-[#a8c5e6] text-[13px] md:text-[15px] opacity-80">
                            At Empire Offshore, everything you see, everything you read, and everything we build is created with one purpose:
                            <span className="text-white font-semibold"> To help your business grow faster and more efficiently.</span>
                        </p>
                    </div>
                </div>

                {/* Growth Comparison Chart */}
                <div ref={chartRef} className="relative group max-w-6xl mx-auto">
                    <div className="relative bg-[#001a33]/60 backdrop-blur-sm border border-[#003d7a] rounded-2xl p-3 md:p-8 shadow-2xl overflow-hidden">

                        {/* Dashboard Header */}
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 md:mb-6 pb-3 md:pb-4 border-b border-[#003d7a] gap-3 md:gap-4">
                            <div>
                                <h3 className="text-lg md:text-2xl text-white font-bold flex items-center gap-2 md:gap-3">
                                    <Activity className="w-5 h-5 md:w-6 md:h-6 text-[#0066cc]" />
                                    How We Revive Dead Businesses
                                </h3>
                                <p className="text-[#a8c5e6] text-xs md:text-sm mt-1">Growth comparison over 12 months</p>
                            </div>
                            <div className="flex gap-3 md:gap-4 text-xs md:text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-slate-600 rounded-full"></span>
                                    <span className="text-[#a8c5e6]">Traditional Approach</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#0066cc] rounded-full shadow-[0_0_10px_#0066cc]"></span>
                                    <span className="text-[#00a8cc] font-bold">Empire Offshore</span>
                                </div>
                            </div>
                        </div>

                        {/* The Chart */}
                        <div className="h-[220px] md:h-[400px] w-full relative -ml-2 md:ml-0">
                            {isChartVisible && (
                                <ResponsiveContainer width="100%" height="100%">
                                    <ComposedChart data={BUSINESS_GROWTH_DATA} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                                        <defs>
                                            <linearGradient id="empireGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0066cc" stopOpacity={0.6} />
                                                <stop offset="95%" stopColor="#0066cc" stopOpacity={0.05} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid stroke="#003d7a" strokeDasharray="3 3" vertical={false} opacity={0.3} />
                                        <XAxis
                                            dataKey="month"
                                            stroke="#64748b"
                                            tick={{ fill: '#a8c5e6', fontSize: 12 }}
                                            axisLine={{ stroke: '#64748b', strokeWidth: 1 }}
                                            tickLine={false}
                                        />
                                        <YAxis
                                            stroke="#64748b"
                                            tick={{ fill: '#a8c5e6', fontSize: 12 }}
                                            axisLine={{ stroke: '#64748b', strokeWidth: 1 }}
                                            tickLine={false}
                                            label={{ value: 'Growth %', angle: -90, position: 'insideLeft', fill: '#a8c5e6' }}
                                        />
                                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(0,102,204,0.2)', strokeWidth: 3 }} />

                                        {/* Traditional Line (Slow Growth) */}
                                        <Line
                                            type="monotone"
                                            dataKey="traditional"
                                            stroke="#64748b"
                                            strokeWidth={3}
                                            dot={false}
                                            activeDot={{ r: 5, fill: '#64748b', strokeWidth: 2, stroke: '#fff' }}
                                            animationDuration={2000}
                                        />

                                        {/* Empire Area (Exponential Growth) */}
                                        <Area
                                            type="monotone"
                                            dataKey="empire"
                                            stroke="#0066cc"
                                            strokeWidth={4}
                                            fill="url(#empireGradient)"
                                            dot={false}
                                            activeDot={{ r: 6, fill: '#0066cc', stroke: '#fff', strokeWidth: 2 }}
                                            animationDuration={2000}
                                        />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            )}

                            {/* Floating Annotations */}
                            {isChartVisible && (
                                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                                    {/* Month 3 */}
                                    <div className="absolute top-[68%] left-[22%] animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0">
                                        <div className="bg-[#0066cc]/10 backdrop-blur border border-[#0066cc]/40 px-3 py-1.5 rounded-lg text-xs text-[#00a8cc] shadow-lg">
                                            Clear Strategy Applied
                                        </div>
                                    </div>

                                    {/* Month 6 */}
                                    <div className="absolute top-[45%] left-[47%] animate-[fadeIn_1s_ease-out_1.5s_forwards] opacity-0">
                                        <div className="bg-[#0066cc]/10 backdrop-blur border border-[#0066cc]/40 px-3 py-1.5 rounded-lg text-xs text-[#00a8cc] shadow-lg">
                                            Traffic Increase
                                        </div>
                                    </div>

                                    {/* Month 9 */}
                                    <div className="absolute top-[20%] left-[72%] animate-[fadeIn_1s_ease-out_2s_forwards] opacity-0">
                                        <div className="bg-[#0066cc]/10 backdrop-blur border border-[#0066cc]/40 px-3 py-1.5 rounded-lg text-xs text-[#00a8cc] shadow-lg">
                                            Lead Generation System
                                        </div>
                                    </div>

                                    {/* Final Result */}
                                    <div className="absolute top-[5%] right-[3%] animate-[slideIn_1s_ease-out_2.5s_forwards] opacity-0">
                                        <div className="bg-[#0066cc] text-white font-bold px-4 py-2 rounded-lg text-sm shadow-[0_0_25px_#0066cc]">
                                            170% Growth Achieved
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Key Insight */}
                        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#003d7a]">
                            <div className="bg-gradient-to-r from-[#0066cc]/10 to-transparent p-4 md:p-6 rounded-xl border border-[#0066cc]/20">
                                <p className="text-base md:text-lg text-white font-semibold text-center">
                                    "We don't just maintain businesses. We <span className="text-[#00a8cc]">revive dead ones</span> and make thriving ones <span className="text-[#00a8cc]">unstoppable</span>."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Grid */}
                <div className="space-y-6 md:space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                            What Makes Us <span className="text-[#E28713]">Different</span>
                        </h3>
                        <p className="text-[#a8c5e6] text-sm md:text-base max-w-2xl mx-auto">
                            Six core reasons why businesses partner with Empire Offshore for long-term growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {WHY_CHOOSE_REASONS.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    className="bg-[#001a33]/50 p-5 md:p-7 rounded-xl border border-[#003d7a] hover:border-[#0066cc]/50 hover:bg-[#001a33]/70 transition-all duration-300 group"
                                    style={{
                                        opacity: visibleCards.includes(index) ? 1 : 0,
                                        transform: visibleCards.includes(index)
                                            ? 'translateY(0) scale(1)'
                                            : 'translateY(30px) scale(0.95)',
                                        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                                    }}
                                >
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0066cc]/10 rounded-xl flex items-center justify-center mb-4 md:mb-5 border border-[#0066cc]/20 group-hover:border-[#0066cc]/50 group-hover:shadow-[0_0_20px_rgba(0,102,204,0.3)] transition-all">
                                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#0066cc] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2 md:mb-3 group-hover:text-white transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#a8c5e6] text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </section>
    );
};

export default WhyChoose;