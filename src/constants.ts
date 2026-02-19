import { ServiceItem, StatItem } from './types';

export const COMPANY_DESCRIPTION = `
Empire Offshore is an international offshore services company specializing in digital growth, technology development, and scalable remote team building. The business provides end-to-end solutions across SEO, technical SEO, link building, content production, full-funnel digital marketing, paid advertising, CRO, UI/UX, web and mobile app development, SaaS and platform builds, eCommerce development, and brand identity design.
`;

export const NAV_LINKS = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Journey', href: '/#journey' },
  { name: 'Services', href: '/#services' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Contact', href: '/#contact' },
];

export interface DetailedServiceItem extends ServiceItem {
  image: string;
  tag: string;
  features: string[];
  slug: string;
}

export const SERVICES: DetailedServiceItem[] = [
  {
    title: 'AI-Optimized Content Writing',
    description: 'High converting blogs, product copy & thought leadership. 300% engagement uplift for US/UK brands.',
    icon: 'pen-tool',
    tag: 'ENGAGE. CONVERT. RANK.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    features: ['E-E-A-T compliant, zero plagiarism', 'Voice search & featured snippet optimized', '50% lower cost vs US/UK agencies'],
    slug: 'contentwriting' // Add slug for routing
  },
  {
    title: 'Strategic Business Development',
    description: 'Lead generation, partnerships & market entry. $2M+ revenue added for clients in 2025.',
    icon: 'trending-up',
    tag: 'UNLOCK GLOBAL MARKETS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    features: ['LinkedIn + Email automation', 'HubSpot & Salesforce Integration', 'US/UK/EU time zone overlap'],
    slug: 'businessdevelopment' // Add slug for routing
  },
  {
    title: 'SEO & Organic Growth',
    description: 'Dominate search rankings with technical SEO and high-authority link building.',
    icon: 'search',
    tag: 'DOMINATE SEARCH',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=800',
    features: ['Technical Audits & Fixes', 'High DR Backlink Campaigns', 'Local & Global SEO Strategy'],
    slug: 'seo' // Add slug for routing
  },
  {
    title: 'Digital Marketing & Ads',
    description: 'Full-funnel paid acquisition across Google, Meta, and LinkedIn.',
    icon: 'megaphone',
    tag: 'SCALE REVENUE',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800',
    features: ['ROAS-focused campaigns', 'Creative A/B Testing', 'Cross-channel retargeting'],
    slug: 'digitalmarketing' // Add slug for routing
  },
  {
    title: 'Web & App Development',
    description: 'Custom SaaS, eCommerce, and mobile applications built for scale.',
    icon: 'code',
    tag: 'BUILD THE FUTURE',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    features: ['React, Node, Python, AWS', 'iOS & Android Native Apps', 'Secure & Scalable Architecture'],
    slug: 'webdevelopment' // Add slug for routing
  },
  {
    title: 'LLC Formation & Taxation',
    description: 'End-to-end LLC setup, compliance & tax planning for US-based and international founders.',
    icon: 'briefcase',
    tag: 'STRUCTURE. COMPLY. SAVE.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    features: [
      'US LLC formation (Wyoming, Delaware, Texas)',
      'EIN, ITIN & bank account assistance',
      'Federal & state tax compliance + filing'
    ],
    slug: 'llcformationandtaxation' // Add slug for routing
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Empire Offshore established with a vision to provide world-class offshore SEO services to global businesses, launching core digital marketing solutions.'
  },
  {
    year: '2019',
    title: 'First 50 Clients',
    description: 'Reached our first major milestone by serving 50+ satisfied clients across North America and Europe, optimizing offshore PPC campaigns for 150% traffic growth.'
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our expert team to 100 professionals and expanded service offerings to include web development, app development, and UI/UX.'
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Recognized as a top offshore service provider with 200+ clients and 500+ projects, excelling in link building offshore and earning 98% client satisfaction.'
  },
  {
    year: '2025',
    title: 'Innovation & Growth',
    description: 'Launched AI-powered solutions and expanded to new markets with 150+ team members, serving clients worldwide achieving 60% ROI.'
  }
];

export const WHY_CHOOSE = [
  { title: 'Proven Expertise', desc: '150+ certified professionals with years of industry experience.', icon: 'award' },
  { title: 'Cost-Effective', desc: 'Save up to 60% on operational costs while maintaining premium quality.', icon: 'dollar-sign' },
  { title: 'Fast Turnaround', desc: 'Agile processes and dedicated teams ensure quick project delivery.', icon: 'zap' },
  { title: 'Data Security', desc: 'Enterprise-grade security protocols and strict NDAs.', icon: 'shield' },
  { title: '24/7 Support', desc: 'Round-the-clock availability across time zones.', icon: 'clock' },
  { title: 'Scalable Services', desc: 'Flexible engagement models that grow with your business needs.', icon: 'bar-chart' },
];

export const TESTIMONIALS = [
  {
    text: "Empire Offshore transformed our digital presence with outstanding SEO and content strategy. Our traffic increased by 250% in just 3 months!",
    author: "Lisa Anderson",
    role: "Enterprise Growth Partners",
    stars: 5
  },
  {
    text: "Their BPO and telecommunications services are top-notch. Professional team, seamless communication, and incredible cost savings.",
    author: "James Mitchell",
    role: "Tech Innovations LLC",
    stars: 5
  },
  {
    text: "The app development team delivered beyond expectations. Clean code, modern design, and on-time delivery. Highly recommend!",
    author: "Rachel Thompson",
    role: "Global Solutions Corp",
    stars: 5
  },
  {
    text: "Outstanding graphic design and branding work! They captured our vision perfectly and delivered a complete brand identity.",
    author: "Robert Taylor",
    role: "Prime Marketing Inc",
    stars: 5
  }
];

// Stats for About Section
export const ABOUT_STATS = [
  { label: 'Expert Professionals', value: '150+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Client Satisfaction', value: '98%' },
];

export const STATS: StatItem[] = [
  {
    label: 'Operational Savings',
    value: '60%',
    description: 'Reduction in total costs compared to onshore teams'
  },
  {
    label: 'Client Retention',
    value: '98%',
    description: 'Long-term partnerships averaging 3+ years'
  },
  {
    label: 'Time Zone Alignment',
    value: '100%',
    description: 'Seamless overlap with US and European business hours'
  }
];

// Chart Data
export const GROWTH_DATA = [
  { year: '2018', projects: 20 },
  { year: '2019', projects: 55 },
  { year: '2020', projects: 120 },
  { year: '2021', projects: 210 },
  { year: '2022', projects: 320 },
  { year: '2023', projects: 450 },
  { year: '2024', projects: 510 },
  { year: '2025', projects: 600 },
];

export const SERVICE_DISTRIBUTION_DATA = [
  { name: 'Digital Marketing', value: 30, color: '#3b82f6' }, // Blue
  { name: 'App Development', value: 20, color: '#06b6d4' }, // Cyan
  { name: 'Web Development', value: 15, color: '#ef4444' }, // Red
  { name: 'Content Writing', value: 10, color: '#eab308' }, // Yellow
  { name: 'SEO Services', value: 10, color: '#22c55e' }, // Green
  { name: 'BPO & Telecom', value: 10, color: '#a855f7' }, // Purple
  { name: 'LLC Formation', value: 5, color: '#10b981' }, // Emerald
];

// New Data for WhyChoose Comparison
export const GROWTH_COMPARISON_DATA = [
  { month: 'M1', traditional: 10, empire: 15, label: '' },
  { month: 'M2', traditional: 12, empire: 25, label: '' },
  { month: 'M3', traditional: 15, empire: 45, label: 'AI + Human Expertise' },
  { month: 'M4', traditional: 18, empire: 70, label: '' },
  { month: 'M5', traditional: 20, empire: 100, label: 'Global Offshore Teams' },
  { month: 'M6', traditional: 22, empire: 140, label: '' },
  { month: 'M7', traditional: 25, empire: 190, label: 'SEO & Digital Marketing' },
  { month: 'M8', traditional: 28, empire: 250, label: '' },
  { month: 'M9', traditional: 30, empire: 320, label: 'High-Performance Apps' },
  { month: 'M10', traditional: 32, empire: 400, label: '' },
  { month: 'M11', traditional: 35, empire: 500, label: '' },
  { month: 'M12', traditional: 38, empire: 620, label: '60% Cost Savings' },
];