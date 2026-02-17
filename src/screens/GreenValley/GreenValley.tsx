import { Button } from "../../components/ui/button";
import { Target, TrendingUp, DollarSign, Compass, Menu, X, Award, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useAnimatedCounter } from "./hooks/useAnimatedCounter";
import { Logo } from "./components/Logo";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { StatItem } from "./components/StatItem";
import { SectorCard } from "./components/SectorCard";
import { CapabilityCard } from "./components/CapabilityCard";
import { SectionHeader } from "./components/SectionHeader";
import { TestimonialCard } from "./components/TestimonialCard";
import { MetricCard } from "./components/MetricCard";
import { LeadCaptureModal } from "./components/LeadCaptureModal";
import { MethodologyModal } from "./components/MethodologyModal";
import { IndustryCaseStudyModal, caseStudies, CaseStudy } from "./components/IndustryCaseStudyModal";
import { ROICalculatorModal } from "./components/ROICalculatorModal";
import { HeroIllustration } from "./components/HeroIllustration";
import { PortfolioSlider } from "./components/PortfolioSlider";

const navigationItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const services = [
    {
        title: "SEO Strategy",
        description: "Get found by the right people at the right time. We build data-driven SEO strategies that boost your rankings, drive organic traffic, and turn searches into customers.",
        icon: Target,
    },
    {
        title: "Website Design & Strategy",
        description: "Your website is your digital shopfront. We design fast, responsive sites with clear user journeys that look stunning and convert visitors into leads.",
        icon: Compass,
    },
    {
        title: "Growth Strategy",
        description: "Sustainable growth does not happen by accident. We map out actionable growth plans built around your goals, your market, and your budget.",
        icon: TrendingUp,
    },
    {
        title: "Graphic Design",
        description: "From brand identity to social media assets, we create designs that capture attention and communicate your brand story with clarity and impact.",
        icon: Award,
    },
    {
        title: "Content Creation",
        description: "Engaging content is the backbone of digital success. We produce copy, blogs, video scripts, and social content that resonates with your audience.",
        icon: Clock,
    },
    {
        title: "Digital Marketing",
        description: "Reach your ideal customers with precision. We run and optimise campaigns across search, social, and email to maximise your return on every dollar spent.",
        icon: DollarSign,
    },
];

const testimonials = [
    {
        quote: "Green Valley Digital completely transformed our online presence. Our website traffic has tripled in six months and the leads just keep coming. They genuinely care about our success and deliver results.",
        author: "Sarah M.",
        role: "Small Business Owner",
        company: "Bundaberg"
    },
    {
        quote: "We had worked with agencies in Brisbane before but never got the personal attention we get from Green Valley Digital. They understand our local market and deliver real results, not excuses.",
        author: "David R.",
        role: "Operations Manager",
        company: "Wide Bay Region"
    },
    {
        quote: "From the initial strategy session to the finished website, the experience was seamless. Professional, responsive, and incredibly knowledgeable. I recommend them to every business owner I know.",
        author: "Michelle T.",
        role: "Founder",
        company: "Bundaberg E-Commerce Brand"
    },
    {
        quote: "Finally found a digital agency that actually understands small business. No jargon, no surprises, just honest work and excellent results. Our SEO rankings have never been better.",
        author: "James K.",
        role: "Retail Business Owner",
        company: "Sunshine Coast"
    },
    {
        quote: "The team at Green Valley Digital built us a stunning website that actually converts visitors into customers. Their ongoing support and strategic advice has been invaluable to our growth.",
        author: "Lisa P.",
        role: "Marketing Director",
        company: "Bundaberg"
    },
    {
        quote: "Best investment we made for our business. The ROI speaks for itself. They took time to understand our goals and created a digital strategy that works. Highly recommend!",
        author: "Robert H.",
        role: "Business Owner",
        company: "Queensland"
    }
];

const metrics = [
    {
        metric: "20+",
        label: "Years of Digital Experience",
        icon: TrendingUp
    },
    {
        metric: "2015",
        label: "Founded in Bundaberg",
        icon: Clock
    },
    {
        metric: "5.0",
        label: "Google Reviews Rating",
        icon: Award
    }
];

export const GreenValley = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [leadModalOpen, setLeadModalOpen] = useState(false);
    const [methodologyModalOpen, setMethodologyModalOpen] = useState(false);
    const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
    const [roiCalculatorOpen, setROICalculatorOpen] = useState(false);

    const heroAnimation = useScrollAnimation(0.2);
    const aboutAnimation = useScrollAnimation(0.1);
    const servicesAnimation = useScrollAnimation(0.1);
    const contactAnimation = useScrollAnimation(0.1);

    const yearsExperience = useAnimatedCounter(20, 2000, heroAnimation.isVisible);
    const foundedYear = useAnimatedCounter(2015, 2000, heroAnimation.isVisible);
    const googleRating = useAnimatedCounter(5, 2000, heroAnimation.isVisible);

    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (rafId.current !== null) return;

            rafId.current = requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 50);
                setScrollY(window.scrollY);
                rafId.current = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId.current !== null) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    const handleServiceClick = (serviceName: string) => {
        setLeadModalOpen(true);
    };

    const handleMethodologyToLead = () => {
        setMethodologyModalOpen(false);
        setTimeout(() => setLeadModalOpen(true), 150);
    };

    const handleCaseStudyToLead = () => {
        setCaseStudyModalOpen(false);
        setTimeout(() => setLeadModalOpen(true), 150);
    };

    const handleROIToLead = () => {
        setROICalculatorOpen(false);
        setTimeout(() => setLeadModalOpen(true), 150);
    };

    return (
        <div className="bg-[#0f0f0f] overflow-x-hidden w-full min-h-screen relative scroll-smooth text-white selection:bg-green-500 selection:text-[#0f0f0f]">
            <div className="fixed inset-0 pointer-events-none will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}>
                <BackgroundEffects />
            </div>

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
                <div className="flex w-full max-w-[1280px] mx-auto items-center justify-between px-8 py-6">
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }} className="hover:opacity-80 transition-opacity" aria-label="Green Valley Digital Home">
                        <Logo />
                    </a>

                    <nav className="hidden md:flex items-center gap-6">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="inline-flex items-center justify-center gap-2.5 p-2.5 relative h-auto bg-transparent hover:bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-md transition-colors group"
                                aria-label={`Navigate to ${item.label}`}
                            >
                                <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap group-hover:text-green-400 transition-colors">
                                    {item.label}
                                </span>
                                <div className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </button>
                        ))}
                    </nav>

                    <button
                        className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-md transition-colors hover:bg-white/5"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Button
                        variant="outline"
                        onClick={() => setLeadModalOpen(true)}
                        className="hidden md:inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-lg border-none bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(135deg,rgba(34,197,94,1)_0%,rgba(100,116,139,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none focus:ring-2 focus:ring-green-500/50 hover:scale-105 transition-transform"
                        aria-label="Contact Green Valley Digital"
                    >
                        <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap">
                            Get In Touch
                        </span>
                    </Button>
                </div>

                <div className={`md:hidden fixed inset-0 top-[88px] bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-white/10 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'}`}>
                    <div className="px-8 py-12 flex flex-col gap-6 items-center text-center">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="w-full py-4 font-medium text-white text-2xl uppercase tracking-widest hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded-md bg-transparent border-none cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => { setMobileMenuOpen(false); setLeadModalOpen(true); }}
                            className="mt-8 w-full py-5 px-8 rounded-lg bg-green-600 font-medium text-white text-xl uppercase tracking-widest border-none cursor-pointer hover:scale-[1.02] transition-transform"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </header>

            <section id="hero" ref={heroAnimation.ref} className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 pt-32 pb-16 gap-12 max-w-[1280px] mx-auto">
                <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-4 text-sm font-medium uppercase tracking-widest text-green-400">
                        Bundaberg & Sunshine Coast, Queensland
                    </div>

                    <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-white">5.0 Google Reviews</span>
                    </div>

                    <h1 className="font-bold text-white text-[3.75rem] md:text-7xl lg:text-[80px] tracking-tighter leading-[1.1] mb-8">
                        We provide Quality Websites and <span className="text-green-400">GROWTH</span>
                    </h1>

                    <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl">
                        Your digital growth partner in Bundaberg and Sunshine Coast. Smart strategy, standout design, and marketing that delivers measurable results for Queensland businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-16">
                        <Button
                            onClick={() => setLeadModalOpen(true)}
                            className="inline-flex items-center justify-end gap-2.5 px-6 py-4 relative flex-[0_0_auto] rounded-lg shadow-lg bg-green-600 hover:bg-green-700 hover:scale-105 transition-all h-auto border-none focus:ring-2 focus:ring-green-500/50"
                            aria-label="Get a free consultation"
                        >
                            <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap">
                                Get a Free Consultation
                            </span>
                        </Button>

                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("#services")}
                            className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-lg h-auto hover:bg-white/5 transition-colors focus:ring-2 focus:ring-green-500/50"
                            aria-label="Explore our services"
                        >
                            <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap">
                                Explore Our Services
                            </span>
                        </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 max-w-lg lg:max-w-none">
                        <div className="text-center lg:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {yearsExperience}+
                            </div>
                            <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                                Years of Experience
                            </div>
                        </div>
                        <div className="text-center lg:text-left border-l border-white/10 pl-6">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {foundedYear}
                            </div>
                            <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                                Founded in Bundaberg
                            </div>
                        </div>
                        <div className="text-center lg:text-left border-l border-white/10 pl-6">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {googleRating}.0
                            </div>
                            <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                                Google Reviews
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex-1 relative hidden lg:block transition-all duration-1000 delay-300 ${heroAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="relative w-full max-w-[550px] mx-auto group">
                        <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full group-hover:bg-green-500/30 transition-colors duration-700 will-change-transform" />
                        <HeroIllustration className="w-full h-auto drop-shadow-[0_0_50px_rgba(34,197,94,0.2)] hover:scale-105 transition-transform duration-700 relative z-10 will-change-transform" />
                    </div>
                </div>
            </section>

            <section id="services" ref={servicesAnimation.ref} className="relative z-10 w-full py-32 px-8">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="What We Do"
                        description="Comprehensive digital solutions tailored to grow your business"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <CapabilityCard key={service.title} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" ref={aboutAnimation.ref} className="relative z-10 w-full py-32 px-8 bg-white/[0.02]">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="About Green Valley Digital"
                        description=""
                    />

                    <div className="max-w-4xl mx-auto space-y-6 text-slate-300 text-lg leading-relaxed mb-16">
                        <p>
                            Green Valley Digital was founded in 2015 by Jay, a digital strategist with over two decades of hands-on experience in the industry. Starting his career in 2001, Jay has watched the digital landscape evolve from its earliest days and has been helping businesses adapt and thrive through every shift.
                        </p>
                        <p>
                            Based in Bundaberg and the Sunshine Coast, in the heart of Queensland, Green Valley Digital was built on a simple belief: every business deserves access to smart, honest digital strategy — not just the big players in the capital cities. We bring big-agency thinking with a local, personal touch.
                        </p>
                        <p>
                            We are not about cookie-cutter solutions or locking you into things you do not need. We take the time to understand your business, your customers, and your goals — then we build a plan that actually works.
                        </p>
                        <p className="text-green-400 font-semibold">
                            All work done by Australians in Australia — supporting local businesses with local expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {metrics.map((metric, index) => (
                            <MetricCard key={index} {...metric} />
                        ))}
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
                        <p className="text-2xl md:text-3xl font-semibold text-white leading-tight italic">
                            "Every business deserves access to smart, honest digital strategy — not just the big players."
                        </p>
                        <p className="text-slate-400 mt-4">— Jay, Founder</p>
                    </div>
                </div>
            </section>

            <section className="relative z-10 w-full py-32 px-8">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader
                        title="Why Partner With Green Valley Digital"
                        description="Real experience. Local expertise. Genuine results."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
                            <div className="text-4xl font-bold text-green-400 mb-4">20+</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Years of Experience</h3>
                            <p className="text-slate-400">
                                With roots in the industry going back to 2001, we have the depth of knowledge to navigate any digital challenge and deliver strategies that stand the test of time.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
                            <div className="text-4xl mb-4">🌴</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Queensland Local Expertise</h3>
                            <p className="text-slate-400">
                                We understand Bundaberg, Sunshine Coast, and the Queensland market because we live and work here. That local insight gives your business a genuine edge.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
                            <div className="text-4xl mb-4">🇦🇺</div>
                            <h3 className="text-xl font-semibold text-white mb-3">Australian-Based Team</h3>
                            <p className="text-slate-400">
                                All work done by Australians in Australia. No outsourcing, no language barriers — just direct communication and local know-how you can trust.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
                            <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Results-Focused Approach</h3>
                            <p className="text-slate-400">
                                Every strategy we build is tied to measurable outcomes. We track, refine, and report so you always know the return on your investment.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
                            <Target className="w-10 h-10 text-green-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Full-Service Digital Partner</h3>
                            <p className="text-slate-400">
                                From design and development to SEO and marketing, everything is under one roof. No juggling multiple agencies — just one team that has you covered.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h3 className="text-[2.25rem] font-semibold text-white text-center mb-4 leading-tight">
                            What Our Clients Say
                        </h3>
                        <div className="mb-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                                <Award className="w-5 h-5 text-yellow-400" />
                                <span className="text-sm font-medium text-white">Trusted by businesses across Queensland</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-lg text-center mb-12 max-w-2xl mx-auto">
                            5.0 on Google Reviews
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </div>

                    <PortfolioSlider />
                </div>
            </section>

            <section id="contact" ref={contactAnimation.ref} className="relative z-10 w-full py-32 px-8 bg-green-500/[0.02]">
                <div className={`max-w-4xl mx-auto transition-all duration-1000 ${contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Get In Touch"
                        description="Ready to grow your digital presence? Let's talk."
                    />
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 uppercase tracking-wider">Locations</h3>
                                <p className="text-slate-300">Bundaberg & Sunshine Coast</p>
                                <p className="text-slate-300">Queensland, Australia</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 uppercase tracking-wider">Email</h3>
                                <a href="mailto:hello@greenvalleydigital.com.au" className="text-green-400 hover:text-green-300 transition-colors">
                                    hello@greenvalleydigital.com.au
                                </a>
                                <h3 className="text-lg font-semibold text-white mb-2 mt-4 uppercase tracking-wider">Phone</h3>
                                <a href="tel:1300887427" className="text-green-400 hover:text-green-300 transition-colors">
                                    1300 887 427
                                </a>
                            </div>
                        </div>

                        <div className="text-center border-t border-white/10 pt-8">
                            <Button
                                onClick={() => setLeadModalOpen(true)}
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg shadow-lg bg-green-600 hover:bg-green-700 hover:scale-105 transition-all h-auto border-none focus:ring-2 focus:ring-green-500/50"
                            >
                                <span className="text-sm font-medium uppercase tracking-widest text-white">
                                    Send Us a Message
                                </span>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-semibold text-white mb-3">Video & Animation Services Available</h3>
                        <p className="text-slate-400">
                            Need video content? Our sister company specializes in animation and video production — perfect for explainer videos, promotional content, and creative visual storytelling.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="relative z-10 w-full py-20 px-8 border-t border-white/10 bg-[#0f0f0f]">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Logo />
                        <p className="text-slate-400 text-sm max-w-md text-center md:text-left">
                            Your digital growth partner in Bundaberg and Sunshine Coast. Smart strategy, standout design, and marketing that works.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-8">
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-white/40 text-sm font-medium uppercase tracking-widest hover:text-green-400 transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">
                        2026 Green Valley Digital. All rights reserved.
                    </p>
                    <p className="text-green-400 text-sm font-medium">
                        All work done by Australians in Australia
                    </p>
                </div>
            </footer>

            <LeadCaptureModal
                isOpen={leadModalOpen}
                onClose={() => setLeadModalOpen(false)}
            />

            <MethodologyModal
                isOpen={methodologyModalOpen}
                onClose={() => setMethodologyModalOpen(false)}
                onBookAudit={handleMethodologyToLead}
            />

            <IndustryCaseStudyModal
                isOpen={caseStudyModalOpen}
                onClose={() => setCaseStudyModalOpen(false)}
                caseStudy={selectedCaseStudy}
                onBookConsultation={handleCaseStudyToLead}
            />

            <ROICalculatorModal
                isOpen={roiCalculatorOpen}
                onClose={() => setROICalculatorOpen(false)}
                onScheduleConsultation={handleROIToLead}
            />
        </div>
    );
};
