import { Button } from "../../components/ui/button";
import { Target, TrendingUp, Users, BarChart3, Menu, X, Award, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useAnimatedCounter } from "./hooks/useAnimatedCounter";
import { Logo } from "./components/Logo";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { StatItem } from "./components/StatItem";
import { SectorCard } from "./components/SectorCard";
import { CapabilityCard } from "./components/CapabilityCard";
import { SectionHeader } from "./components/SectionHeader";
import { ContactForm } from "./components/ContactForm";
import { TestimonialCard } from "./components/TestimonialCard";
import { MetricCard } from "./components/MetricCard";

const navigationItems = [
    { label: "Home", href: "#hero" },
    { label: "Industries", href: "#sectors" },
    { label: "Services", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
];

const sectors = [
    { name: "Private Equity", placeholder: "PE" },
    { name: "Manufacturing", placeholder: "MFG" },
    { name: "Technology", placeholder: "TECH" },
    { name: "Healthcare", placeholder: "HLT" },
    { name: "Financial Services", placeholder: "FIN" },
    { name: "Consumer Goods", placeholder: "CPG" },
];

const capabilities = [
    {
        title: "Strategic Growth Planning",
        description: "Identify untapped market opportunities and build execution roadmaps that drive sustainable revenue growth. Transform strategic vision into measurable quarterly milestones that keep your leadership team aligned and accountable.",
        icon: Target,
    },
    {
        title: "Operational Excellence",
        description: "Streamline workflows, eliminate inefficiencies, and optimize resource allocation across your organization. Implement proven methodologies that reduce costs while improving output quality and employee engagement.",
        icon: TrendingUp,
    },
    {
        title: "Leadership Development",
        description: "Build high-performing executive teams equipped to navigate complexity and drive change. Develop succession pipelines and cultivate the leadership capabilities your organization needs for long-term success.",
        icon: Users,
    },
    {
        title: "Performance Analytics",
        description: "Transform data into actionable insights that inform critical business decisions. Establish KPI frameworks and dashboards that give leadership real-time visibility into what's working and what needs attention.",
        icon: BarChart3,
    },
];

const testimonials = [
    {
        quote: "Thorne Advisory helped us identify $40M in untapped growth opportunities within our first engagement. Their strategic roadmap transformed how we approach market expansion.",
        author: "David Mitchell",
        role: "CEO",
        company: "Meridian Manufacturing"
    },
    {
        quote: "We went from reactive decision-making to proactive strategy execution. Our leadership team is now aligned around clear priorities and measurable outcomes.",
        author: "Jennifer Walsh",
        role: "Chief Strategy Officer",
        company: "Apex Financial Group"
    },
    {
        quote: "The operational improvements they implemented reduced our overhead by 25% while actually improving customer satisfaction. That's the kind of impact you rarely see.",
        author: "Robert Chen",
        role: "COO",
        company: "TechVenture Partners"
    }
];

const metrics = [
    {
        metric: "47%",
        label: "Average revenue growth within 18 months",
        icon: TrendingUp
    },
    {
        metric: "30%",
        label: "Operational cost reduction achieved",
        icon: Clock
    },
    {
        metric: "92%",
        label: "Client retention and referral rate",
        icon: Award
    }
];

export const BusinessConsultant = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const heroAnimation = useScrollAnimation(0.2);
    const sectorsAnimation = useScrollAnimation(0.1);
    const capabilitiesAnimation = useScrollAnimation(0.1);
    const contactAnimation = useScrollAnimation(0.1);

    const clientCount = useAnimatedCounter(340, 2000, heroAnimation.isVisible);
    const yearsCount = useAnimatedCounter(25, 2000, heroAnimation.isVisible);

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

    return (
        <div className="bg-[#0f0f0f] overflow-x-hidden w-full min-h-screen relative scroll-smooth text-white selection:bg-amber-500 selection:text-[#0f0f0f]">
            <div className="fixed inset-0 pointer-events-none will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}>
                <BackgroundEffects />
            </div>

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
                <div className="flex w-full max-w-[1280px] mx-auto items-center justify-between px-8 py-6">
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }} className="hover:opacity-80 transition-opacity" aria-label="Thorne Advisory Home">
                        <Logo />
                    </a>

                    <nav className="hidden md:flex items-center gap-6">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="inline-flex items-center justify-center gap-2.5 p-2.5 relative h-auto bg-transparent hover:bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-md transition-colors group"
                                aria-label={`Navigate to ${item.label}`}
                            >
                                <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap group-hover:text-amber-400 transition-colors">
                                    {item.label}
                                </span>
                                <div className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </button>
                        ))}
                    </nav>

                    <button
                        className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-md transition-colors hover:bg-white/5"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Button
                        variant="outline"
                        onClick={() => scrollToSection("#contact")}
                        className="hidden md:inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-lg border-none bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(135deg,rgba(245,158,11,1)_0%,rgba(100,116,139,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none focus:ring-2 focus:ring-amber-500/50 hover:scale-105 transition-transform"
                        aria-label="Contact Thorne Advisory"
                    >
                        <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap">
                            Contact Us
                        </span>
                    </Button>
                </div>

                <div className={`md:hidden fixed inset-0 top-[88px] bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-white/10 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'}`}>
                    <div className="px-8 py-12 flex flex-col gap-6 items-center text-center">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="w-full py-4 font-medium text-white text-2xl uppercase tracking-widest hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-md bg-transparent border-none cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="mt-8 w-full py-5 px-8 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 font-medium text-white text-xl uppercase tracking-widest border-none cursor-pointer hover:scale-[1.02] transition-transform"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>

            <section id="hero" ref={heroAnimation.ref} className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 pt-32 pb-16 gap-12 max-w-[1280px] mx-auto">
                <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-8 text-sm font-medium uppercase tracking-widest bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                        Strategic Business Advisory
                    </div>

                    <h1 className="font-bold text-white text-[3.75rem] md:text-7xl lg:text-[80px] tracking-tighter leading-[1.1] mb-8">
                        Accelerate Growth, Maximize Value
                    </h1>

                    <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl">
                        Transform strategic challenges into competitive advantages. We partner with leadership teams to unlock operational excellence, drive sustainable growth, and build organizations that outperform their markets.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-20">
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("#capabilities")}
                            className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-lg h-auto hover:bg-white/5 transition-colors focus:ring-2 focus:ring-amber-500/50"
                            aria-label="Explore our services"
                        >
                            <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap">
                                Explore Services
                            </span>
                        </Button>

                        <Button
                            onClick={() => scrollToSection("#contact")}
                            className="inline-flex items-center justify-end gap-2.5 px-6 py-4 relative flex-[0_0_auto] rounded-lg shadow-lg bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 hover:scale-105 transition-all h-auto border-none focus:ring-2 focus:ring-amber-500/50"
                            aria-label="Schedule a strategy consultation"
                        >
                            <span className="relative flex items-center justify-center w-fit font-medium text-white text-sm tracking-widest uppercase text-center whitespace-nowrap">
                                Schedule Consultation
                            </span>
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12">
                        <div className="inline-flex items-center relative gap-8">
                            <StatItem value={`${clientCount}+`} label="Clients" padding="pl-1.5 pr-8" borderRight="border-r border-amber-500" />
                            <StatItem value={`${yearsCount}+`} label="Years" padding="px-0" />

                            <div className="pl-8 inline-flex flex-col items-start justify-center gap-1 relative border-l border-white/10">
                                <p className="leading-relaxed text-slate-600 text-lg">
                                    Executive partnerships<br />
                                    delivering measurable<br />
                                    business transformation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex-1 relative hidden lg:block transition-all duration-1000 delay-300 ${heroAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="relative w-full max-w-[550px] mx-auto group">
                        <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full group-hover:bg-amber-500/30 transition-colors duration-700 will-change-transform" />
                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Business strategy team collaboration"
                            className="w-full h-auto rounded-2xl drop-shadow-[0_0_50px_rgba(245,158,11,0.2)] hover:scale-105 transition-transform duration-700 relative z-10 will-change-transform object-cover aspect-square"
                            loading="eager"
                            width="550"
                            height="550"
                        />
                    </div>
                </div>
            </section>

            <section id="sectors" ref={sectorsAnimation.ref} className="relative z-10 w-full py-32 px-8 bg-white/[0.02]">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${sectorsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Trusted Across Industries"
                        description="From private equity portfolio companies to Fortune 500 enterprises, leadership teams rely on Thorne Advisory to navigate complexity, accelerate growth, and build lasting competitive advantage."
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                        {sectors.map((sector) => (
                            <SectorCard key={sector.name} {...sector} />
                        ))}
                    </div>

                    <div className="mt-20 mb-20">
                        <h3 className="text-[2.25rem] font-semibold text-white text-center mb-4 leading-tight">
                            Proven Impact
                        </h3>
                        <p className="text-slate-600 text-lg text-center mb-12 max-w-2xl mx-auto">
                            Real results from real engagements. Our track record speaks through the success of our clients.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {metrics.map((metric, index) => (
                                <MetricCard key={index} {...metric} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-20">
                        <h3 className="text-[2.25rem] font-semibold text-white text-center mb-4 leading-tight">
                            What Leaders Say
                        </h3>
                        <p className="text-slate-600 text-lg text-center mb-12 max-w-2xl mx-auto">
                            Hear directly from CEOs and executives who have partnered with Thorne Advisory.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="capabilities" ref={capabilitiesAnimation.ref} className="relative z-10 w-full py-32 px-8">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${capabilitiesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Four Pillars of Business Transformation"
                        description="Comprehensive advisory services that address the full spectrum of growth challenges. From strategic planning to operational execution, we partner with you at every stage."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {capabilities.map((capability, index) => (
                            <CapabilityCard key={capability.title} {...capability} index={index} />
                        ))}
                    </div>

                    <div className="mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center group hover:border-amber-500/40 transition-colors">
                        <p className="text-slate-600 text-lg mb-4 group-hover:text-slate-400 transition-colors">
                            Every recommendation we make is tied to measurable business outcomes. No theory, just results.
                        </p>
                        <p className="text-[2.25rem] font-semibold text-white leading-tight">
                            Strategic clarity. Operational excellence. Sustainable growth.
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" ref={contactAnimation.ref} className="relative z-10 w-full py-32 px-8 bg-amber-500/[0.02]">
                <div className={`max-w-4xl mx-auto transition-all duration-1000 ${contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Start Your Growth Journey"
                        description="Schedule a confidential strategy session. We'll explore your business challenges, identify growth opportunities, and outline a path to accelerated performance."
                    />
                    <ContactForm />
                </div>
            </section>

            <footer className="relative z-10 w-full py-20 px-8 border-t border-white/10 bg-[#0f0f0f]">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <Logo />

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-8">
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-white/40 text-sm font-medium uppercase tracking-widest hover:text-amber-400 transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">
                        2026 Thorne Advisory. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/30 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-white/30 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
