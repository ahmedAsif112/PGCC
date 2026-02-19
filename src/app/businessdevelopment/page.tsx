'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Target, Users, BarChart, MessageSquare, Database, Check, ArrowRight, Briefcase, Handshake } from 'lucide-react';

const BusinessDevelopmentService = () => {
    const [isVisible, setIsVisible] = useState({});
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.dataset.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    const getAnimationClass = (id) => {
        return isVisible[id]
            ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out'
            : 'opacity-0 translate-y-10';
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="bg-gradient-to-br from-[#002346] to-[#003a6b] text-white py-12 md:py-20 px-4 md:px-8"
                data-animate
                data-id="hero"
            >
                <div className={`max-w-7xl mx-auto ${getAnimationClass('hero')}`}>
                    <div className="text-center mb-8 md:mb-12 pt-11">
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            LEAD GENERATION AND BUSINESS DEVELOPMENT
                        </p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                            Build Consistent Sales Pipelines <br className="hidden md:block" />
                            <span className="text-[#FFA22B]">Without Manual Effort</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                            Empire Offshore builds automated lead generation systems that help businesses consistently attract and convert qualified prospects. Companies gain a steady flow of opportunities without relying solely on referrals or manual outreach.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <a href="/#contact" className="bg-[#FFA22B] text-[#002346] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#ff8f00] transition text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block text-center">
                                Schedule a Call
                            </a>
                            <a href="/#portfolio" className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#002346] transition text-sm md:text-base inline-block text-center">
                                View Case Studies
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Deliver */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('deliver-title')}`}
                        data-animate
                        data-id="deliver-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            LEAD GENERATION CHANNELS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            What We <span className="text-[#FFA22B]">Deliver</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Complete lead generation systems designed for consistent pipeline growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <MessageSquare className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "LinkedIn Outreach Automation",
                                description: "Systematic LinkedIn prospecting with personalized connection requests and follow-ups",
                                items: ["Profile Optimization", "Automated Sequences", "InMail Campaigns"]
                            },
                            {
                                icon: <Target className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Email Marketing Campaigns",
                                description: "Targeted cold email campaigns with A/B testing and deliverability optimization",
                                items: ["List Building", "Email Sequences", "Response Management"]
                            },
                            {
                                icon: <Database className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "CRM Setup & Integration",
                                description: "Complete CRM configuration to track, manage, and nurture every lead",
                                items: ["Pipeline Configuration", "Automation Rules", "Reporting Dashboards"]
                            },
                            {
                                icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Funnel Optimization",
                                description: "Conversion-focused landing pages and lead magnets that capture quality prospects",
                                items: ["Landing Pages", "Lead Magnets", "Conversion Testing"]
                            },
                            {
                                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Appointment Booking Systems",
                                description: "Automated scheduling that gets qualified leads on your calendar effortlessly",
                                items: ["Calendar Integration", "Qualification Forms", "Reminder Automation"]
                            },
                            {
                                icon: <BarChart className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Lead Scoring & Qualification",
                                description: "Data-driven lead scoring to prioritize your highest-value opportunities",
                                items: ["Scoring Models", "Auto-Qualification", "Sales Handoff Process"]
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className={`bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${getAnimationClass(`service-${index}`)}`}
                                data-animate
                                data-id={`service-${index}`}
                            >
                                <div className="text-[#FFA22B] mb-4 md:mb-6">{service.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold text-[#002346] mb-2 md:mb-3">{service.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-xs md:text-sm text-gray-700">
                                            <Check className="w-4 h-4 md:w-5 md:h-5 text-[#FFA22B] mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('tech-title')}`}
                        data-animate
                        data-id="tech-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            AUTOMATION TOOLS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Lead Generation <span className="text-[#FFA22B]">Tech Stack</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: "HubSpot", category: "CRM & Automation" },
                            { name: "Salesforce", category: "Enterprise CRM" },
                            { name: "LinkedIn Sales Nav", category: "B2B Prospecting" },
                            { name: "Apollo.io", category: "Outbound Engine" },
                            { name: "Lemlist", category: "Email Outreach" },
                            { name: "Instantly.ai", category: "Cold Email" },
                            { name: "Calendly", category: "Scheduling" },
                            { name: "Zapier", category: "Workflow Automation" },
                            { name: "Phantombuster", category: "Data Extraction" },
                            { name: "Hunter.io", category: "Email Finder" },
                            { name: "ZoomInfo", category: "B2B Database" },
                            { name: "Pipedrive", category: "Sales Pipeline" }
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${getAnimationClass(`tech-${index}`)}`}
                                data-animate
                                data-id={`tech-${index}`}
                            >
                                <div className="text-xl md:text-2xl font-bold text-[#002346] mb-1 md:mb-2">{tech.name}</div>
                                <div className="text-xs md:text-sm text-[#FFA22B] font-semibold">{tech.category}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('process-title')}`}
                        data-animate
                        data-id="process-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            HOW WE WORK
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Our Lead Generation <span className="text-[#FFA22B]">Process</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { num: "01", title: "ICP Definition", desc: "Identify your ideal customer profile and target market segments", color: "bg-[#FFA22B]" },
                            { num: "02", title: "System Setup", desc: "Configure CRM, automation tools, and tracking infrastructure", color: "bg-[#002346]" },
                            { num: "03", title: "Campaign Build", desc: "Create outreach sequences, emails, and engagement workflows", color: "bg-[#FFA22B]" },
                            { num: "04", title: "Launch & Test", desc: "Deploy campaigns and optimize based on response data", color: "bg-[#002346]" },
                            { num: "05", title: "Scale & Refine", desc: "Expand successful campaigns and improve conversion rates", color: "bg-[#FFA22B]" }
                        ].map((step, index) => (
                            <div
                                key={index}
                                className={`text-center ${getAnimationClass(`process-${index}`)}`}
                                data-animate
                                data-id={`process-${index}`}
                            >
                                <div className={`${step.color} text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4 shadow-lg`}>
                                    {step.num}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[#002346] mb-2">{step.title}</h3>
                                <p className="text-xs md:text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-[#002346] text-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('why-title')}`}
                        data-animate
                        data-id="why-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            KEY BENEFITS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            Why Choose <span className="text-[#FFA22B]">Empire Offshore?</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />, title: "Predictable Sales Pipeline", desc: "Consistent flow of qualified opportunities entering your funnel monthly" },
                            { icon: <Users className="w-10 h-10 md:w-12 md:h-12" />, title: "Higher Lead Quality", desc: "Targeted outreach ensures you speak with decision-makers, not tire-kickers" },
                            { icon: <Briefcase className="w-10 h-10 md:w-12 md:h-12" />, title: "Reduced Sales Workload", desc: "Automation handles repetitive tasks so your team focuses on closing" },
                            { icon: <Target className="w-10 h-10 md:w-12 md:h-12" />, title: "Faster Deal Cycles", desc: "Qualified leads with clear intent move through your pipeline efficiently" },
                            { icon: <BarChart className="w-10 h-10 md:w-12 md:h-12" />, title: "Scalable Outreach", desc: "Systems that grow with your business without linear cost increases" },
                            { icon: <Check className="w-10 h-10 md:w-12 md:h-12" />, title: "Full Transparency", desc: "Real-time dashboards and detailed reporting on every metric that matters" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`bg-[#003a6b] rounded-xl p-6 md:p-8 hover:bg-[#004a7c] transition-all duration-300 ${getAnimationClass(`why-${index}`)}`}
                                data-animate
                                data-id={`why-${index}`}
                            >
                                <div className="text-[#FFA22B] mb-4 md:mb-6">{item.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                                <p className="text-sm md:text-base text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('industries-title')}`}
                        data-animate
                        data-id="industries-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            SERVICE VARIATIONS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Lead Generation <span className="text-[#FFA22B]">Solutions</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Tailored lead generation strategies for B2B and B2C businesses
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "B2B Lead Generation", desc: "Enterprise and SMB decision-maker outreach with multi-touch campaigns" },
                            { title: "B2C Lead Funnels", desc: "Consumer-focused campaigns with conversion-optimized landing pages" },
                            { title: "Cold Outreach Systems", desc: "Automated email and LinkedIn sequences for new prospect acquisition" },
                            { title: "Automated Follow-Ups", desc: "Intelligent nurture sequences that keep prospects engaged until conversion" },
                            { title: "Market Expansion", desc: "Geographic and vertical market expansion with localized campaigns" },
                            { title: "Partnership Lead Gen", desc: "Channel partner and referral systems for indirect revenue growth" },
                            { title: "Event Lead Capture", desc: "Webinar, trade show, and event attendee conversion systems" },
                            { title: "Inbound Lead Nurture", desc: "Multi-stage nurturing for marketing-qualified leads to sales-ready status" }
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl p-6 border-l-4 border-[#FFA22B] hover:shadow-xl transition-all duration-300 ${getAnimationClass(`industry-${index}`)}`}
                                data-animate
                                data-id={`industry-${index}`}
                            >
                                <h3 className="text-lg font-bold text-[#002346] mb-2">{industry.title}</h3>
                                <p className="text-sm text-gray-600">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('features-title')}`}
                        data-animate
                        data-id="features-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            CORE COMPONENTS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            What's Included in Every <span className="text-[#FFA22B]">Engagement</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Target Audience Research",
                                desc: "Deep analysis of your ideal customer profile, buying behaviors, and pain points",
                                features: ["Buyer persona development", "Industry segmentation", "Competitor analysis"]
                            },
                            {
                                title: "Multi-Channel Campaign Setup",
                                desc: "Coordinated outreach across email, LinkedIn, and other relevant channels",
                                features: ["Campaign sequences", "Message personalization", "A/B testing protocols"]
                            },
                            {
                                title: "CRM & Automation Configuration",
                                desc: "Complete system setup to track, score, and nurture every lead automatically",
                                features: ["Pipeline stages", "Lead scoring rules", "Workflow automation"]
                            },
                            {
                                title: "Performance Tracking & Reporting",
                                desc: "Real-time dashboards showing campaign performance and pipeline metrics",
                                features: ["Weekly reports", "Conversion analytics", "ROI tracking"]
                            },
                            {
                                title: "Lead Qualification Process",
                                desc: "Systematic approach to identify and prioritize your most valuable opportunities",
                                features: ["BANT qualification", "Scoring models", "Sales handoff criteria"]
                            },
                            {
                                title: "Continuous Optimization",
                                desc: "Ongoing testing and refinement to improve response rates and conversions",
                                features: ["Message testing", "Audience refinement", "Channel optimization"]
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${getAnimationClass(`feature-${index}`)}`}
                                data-animate
                                data-id={`feature-${index}`}
                            >
                                <h3 className="text-xl font-bold text-[#002346] mb-3">{feature.title}</h3>
                                <p className="text-gray-600 mb-4">{feature.desc}</p>
                                <ul className="space-y-2">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-[#FFA22B] rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Timeline */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-[#002346] text-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('timeline-title')}`}
                        data-animate
                        data-id="timeline-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            IMPLEMENTATION ROADMAP
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            Expected <span className="text-[#FFA22B]">Timeline</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { type: "Week 1-2", time: "Foundation", scope: "ICP research, system setup, campaign creation, initial list building" },
                            { type: "Week 3-8", time: "Testing Phase", scope: "Launch campaigns, measure responses, A/B testing, refine messaging" },
                            { type: "Month 3+", time: "Scale & Optimize", scope: "Expand successful campaigns, automate processes, predictable lead flow" }
                        ].map((timeline, index) => (
                            <div
                                key={index}
                                className={`bg-[#003a6b] rounded-xl p-6 md:p-8 text-center hover:bg-[#004a7c] transition-all duration-300 ${getAnimationClass(`timeline-${index}`)}`}
                                data-animate
                                data-id={`timeline-${index}`}
                            >
                                <div className="text-[#FFA22B] text-3xl md:text-4xl font-bold mb-3">{timeline.type}</div>
                                <h3 className="text-xl font-bold mb-3">{timeline.time}</h3>
                                <p className="text-gray-300 text-sm">{timeline.scope}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 md:py-24 px-4 md:px-8 bg-[#FFA22B]"
                data-animate
                data-id="cta"
            >
                <div className={`max-w-4xl mx-auto text-center ${getAnimationClass('cta')}`}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        Ready to Build a Predictable Sales Pipeline?
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10">
                        Let's discuss how our lead generation systems can deliver consistent, qualified opportunities
                    </p>
                    <a href="/#contact" className="bg-white text-[#002346] px-10 md:px-14 py-4 md:py-5 rounded-lg font-bold hover:bg-gray-100 transition text-base md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3">
                        Start Your Campaign
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default BusinessDevelopmentService;