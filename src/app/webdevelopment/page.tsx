'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Globe, Zap, Shield, TrendingUp, Check, ArrowRight, Layers, Package } from 'lucide-react';

const WebDevelopmentService = () => {
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
                            WEB AND APP DEVELOPMENT SERVICES
                        </p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                            Scalable Digital Platforms <br className="hidden md:block" />
                            <span className="text-[#FFA22B]">Built for Growth</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                            Empire Offshore designs and develops high performance websites and applications that are easy to manage, secure, and scalable. A strong digital platform improves conversions, user retention, and operational efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <a href="/#contact" className="bg-[#FFA22B] text-[#002346] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#ff8f00] transition text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block text-center">
                                Schedule a Call
                            </a>
                            <a href="/#portfolio" className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#002346] transition text-sm md:text-base inline-block text-center">
                                View Portfolio
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
                            DEVELOPMENT SOLUTIONS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            What We <span className="text-[#FFA22B]">Deliver</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            High performance digital solutions designed for growth and scalability
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Business Websites",
                                description: "Professional websites that showcase your brand and drive conversions",
                                items: ["Responsive design", "CMS integration", "Lead capture forms"]
                            },
                            {
                                icon: <Code className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Custom Web Applications",
                                description: "Tailored web apps built to solve your specific business challenges",
                                items: ["Custom features", "User dashboards", "Workflow automation"]
                            },
                            {
                                icon: <Package className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "E-commerce Platforms",
                                description: "Complete online stores with payment processing and inventory management",
                                items: ["Shopping cart", "Payment gateways", "Order management"]
                            },
                            {
                                icon: <Layers className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "SaaS Products",
                                description: "Cloud-based software solutions with subscription and billing systems",
                                items: ["Multi-tenant architecture", "User management", "API development"]
                            },
                            {
                                icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Mobile Applications",
                                description: "iOS and Android apps that deliver exceptional user experiences",
                                items: ["Cross-platform development", "Native performance", "App store deployment"]
                            },
                            {
                                icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Maintenance & Support",
                                description: "Ongoing technical support, updates, and security monitoring",
                                items: ["Regular updates", "Security patches", "Performance optimization"]
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
                            TECHNOLOGY STACK
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Our Technology <span className="text-[#FFA22B]">Stack</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Modern frameworks, secure backends, and cloud-based architecture
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: "React", category: "Frontend Framework" },
                            { name: "Next.js", category: "Framework" },
                            { name: "Node.js", category: "Backend" },
                            { name: "Python", category: "Backend" },
                            { name: "Flutter", category: "Mobile" },
                            { name: "React Native", category: "Mobile" },
                            { name: "WordPress", category: "CMS" },
                            { name: "Shopify", category: "E-commerce" },
                            { name: "MongoDB", category: "Database" },
                            { name: "PostgreSQL", category: "Database" },
                            { name: "AWS", category: "Cloud" },
                            { name: "Docker", category: "DevOps" }
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
                            Our Development <span className="text-[#FFA22B]">Process</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { num: "01", title: "Discovery", desc: "Understanding your business goals and technical requirements", color: "bg-[#FFA22B]" },
                            { num: "02", title: "Planning", desc: "Creating detailed roadmap and technical specifications", color: "bg-[#002346]" },
                            { num: "03", title: "Design", desc: "Crafting intuitive UI/UX that aligns with your brand", color: "bg-[#FFA22B]" },
                            { num: "04", title: "Development", desc: "Building your platform with clean, scalable code", color: "bg-[#002346]" },
                            { num: "05", title: "Launch", desc: "Deploying and supporting your digital product", color: "bg-[#FFA22B]" }
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
                            { icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />, title: "Fast Loading & Secure Systems", desc: "Optimized performance and enterprise-grade security for all platforms" },
                            { icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />, title: "Improved User Experience", desc: "Intuitive interfaces designed to maximize engagement and conversions" },
                            { icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />, title: "Scalable Infrastructure", desc: "Cloud-based architecture that grows seamlessly with your business" },
                            { icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />, title: "Reduced Development Costs", desc: "Offshore teams deliver premium quality at 70% lower cost than local hiring" },
                            { icon: <Code className="w-10 h-10 md:w-12 md:h-12" />, title: "Long Term Technical Support", desc: "Ongoing maintenance, updates, and support for sustained performance" },
                            { icon: <Check className="w-10 h-10 md:w-12 md:h-12" />, title: "Business Impact", desc: "Platforms that improve conversions, user retention, and operational efficiency" }
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
                            DEVELOPMENT VARIATIONS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Development <span className="text-[#FFA22B]">Solutions</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Specialized development services tailored to your business stage and needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Startup MVP Development", desc: "Rapid prototyping and MVP development to validate your business idea" },
                            { title: "Enterprise Level Platforms", desc: "Large-scale applications with complex integrations and workflows" },
                            { title: "Custom Dashboards and Tools", desc: "Business intelligence dashboards and internal management tools" },
                            { title: "API Integrations", desc: "Seamless third-party integrations and custom API development" },
                            { title: "Ongoing Maintenance and Upgrades", desc: "Continuous support, feature updates, and technical improvements" },
                            { title: "E-commerce Solutions", desc: "Complete online stores with inventory and order management" },
                            { title: "Progressive Web Apps", desc: "Modern web apps with offline capabilities and native-like experience" },
                            { title: "Cloud Migration", desc: "Modernizing legacy systems with cloud-based architecture" }
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
                            BUILT-IN EXCELLENCE
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Essential <span className="text-[#FFA22B]">Features</span> in Every Project
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Modern Frontend Frameworks",
                                desc: "React, Next.js, and other cutting-edge frameworks for dynamic user interfaces",
                                features: ["Component-based architecture", "Fast rendering", "Reusable code"]
                            },
                            {
                                title: "Secure Backend Systems",
                                desc: "Robust server infrastructure with industry-standard security practices",
                                features: ["Data encryption", "Authentication systems", "API security"]
                            },
                            {
                                title: "Cloud Based Architecture",
                                desc: "Scalable cloud infrastructure for reliability and global availability",
                                features: ["AWS/Azure hosting", "Auto-scaling", "Load balancing"]
                            },
                            {
                                title: "Performance Optimized Design",
                                desc: "Lightning-fast loading times and smooth user interactions",
                                features: ["Image optimization", "Code minification", "CDN integration"]
                            },
                            {
                                title: "Responsive & Mobile-First",
                                desc: "Perfect display across all devices from desktop to mobile",
                                features: ["Adaptive layouts", "Touch optimization", "Cross-browser compatibility"]
                            },
                            {
                                title: "Easy to Manage",
                                desc: "Intuitive admin panels and content management systems",
                                features: ["User-friendly dashboards", "Content updates", "Role management"]
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
                            TRANSPARENT DELIVERY
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            Typical Project <span className="text-[#FFA22B]">Timelines</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { type: "Business Website", time: "2-4 Weeks", scope: "Professional websites with CMS integration and responsive design" },
                            { type: "Web Application", time: "8-16 Weeks", scope: "Custom web apps with user dashboards and business workflows" },
                            { type: "SaaS Platform", time: "16-24 Weeks", scope: "Complex SaaS products with subscriptions and integrations" }
                        ].map((timeline, index) => (
                            <div
                                key={index}
                                className={`bg-[#003a6b] rounded-xl p-6 md:p-8 text-center hover:bg-[#004a7c] transition-all duration-300 ${getAnimationClass(`timeline-${index}`)}`}
                                data-animate
                                data-id={`timeline-${index}`}
                            >
                                <div className="text-[#FFA22B] text-3xl md:text-4xl font-bold mb-3">{timeline.time}</div>
                                <h3 className="text-xl font-bold mb-3">{timeline.type}</h3>
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
                        Ready to Build Your Digital Platform?
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10">
                        Let's discuss how our development team can create a scalable platform for your growth
                    </p>
                    <a href="/#contact" className="bg-white text-[#002346] px-10 md:px-14 py-4 md:py-5 rounded-lg font-bold hover:bg-gray-100 transition text-base md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3">
                        Schedule Your Consultation
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentService;