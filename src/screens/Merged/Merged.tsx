import { Button } from "../../components/ui/button";
import { Shield, Eye, Lock, Activity, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useAnimatedCounter } from "./hooks/useAnimatedCounter";
import { Logo } from "./components/Logo";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { StatItem } from "./components/StatItem";
import { SectorCard } from "./components/SectorCard";
import { CapabilityCard } from "./components/CapabilityCard";
import { SectionHeader } from "./components/SectionHeader";
import { ContactForm } from "./components/ContactForm";

const navigationItems = [
    { label: "Home", href: "#hero" },
    { label: "Sectors", href: "#sectors" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
];

const sectors = [
    { name: "Finance", placeholder: "FIN" },
    { name: "SaaS", placeholder: "SAS" },
    { name: "Healthcare", placeholder: "HLT" },
    { name: "E-commerce", placeholder: "ECM" },
    { name: "Infrastructure", placeholder: "INF" },
    { name: "DevOps", placeholder: "DVO" },
];

const capabilities = [
    {
        title: "Infrastructure Hardening",
        description: "Reduces lateral movement",
        icon: Shield,
    },
    {
        title: "Application Security Reviews",
        description: "Reduces exploitability",
        icon: Eye,
    },
    {
        title: "Access & Identity Controls",
        description: "Reduces unauthorized access",
        icon: Lock,
    },
    {
        title: "Monitoring & Detection",
        description: "Reduces dwell time",
        icon: Activity,
    },
];

export const Merged = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Scroll animation refs
    const heroAnimation = useScrollAnimation(0.2);
    const sectorsAnimation = useScrollAnimation(0.1);
    const capabilitiesAnimation = useScrollAnimation(0.1);
    const contactAnimation = useScrollAnimation(0.1);

    // Animated counters
    const clientCount = useAnimatedCounter(818, 2000, heroAnimation.isVisible);
    const countryCount = useAnimatedCounter(70, 2000, heroAnimation.isVisible);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className="bg-[#0f0f0f] overflow-x-hidden w-full min-h-screen relative scroll-smooth text-white selection:bg-[#bdf589] selection:text-[#0f0f0f]">
            {/* Background Effects with Parallax */}
            <div className="fixed inset-0 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                <BackgroundEffects />
            </div>

            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
                <div className="flex w-full max-w-[1280px] mx-auto items-center justify-between px-8 py-6">
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }} className="hover:opacity-80 transition-opacity" aria-label="Cybee Home">
                        <Logo />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="inline-flex items-center justify-center gap-2.5 p-2.5 relative h-auto bg-transparent hover:bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 rounded-md transition-colors group"
                                aria-label={`Navigate to ${item.label}`}
                            >
                                <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap group-hover:text-[#bdf589] transition-colors">
                                    {item.label}
                                </span>
                                <div className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#bdf589] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 rounded-md transition-colors hover:bg-white/5"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Contact Button */}
                    <Button
                        variant="outline"
                        onClick={() => scrollToSection("#contact")}
                        className="hidden md:inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] border-[none] bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[9px] before:[background:linear-gradient(299deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none focus:ring-2 focus:ring-[#bdf589]/50 hover:scale-105 transition-transform"
                        aria-label="Contact Us"
                    >
                        <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                            Contact Us
                        </span>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed inset-0 top-[88px] bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-white/10 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'}`}>
                    <div className="px-8 py-12 flex flex-col gap-6 items-center text-center">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="w-full py-4 [font-family:'Space_Mono',Helvetica] text-white text-2xl hover:text-[#bdf589] transition-colors focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 rounded-md bg-transparent border-none cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="mt-8 w-full py-5 px-8 rounded-[9px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [font-family:'Space_Mono',Helvetica] text-white text-xl font-bold border-none cursor-pointer hover:scale-[1.02] transition-transform"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="hero" ref={heroAnimation.ref} className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 pt-32 pb-16 gap-12 max-w-[1280px] mx-auto">
                {/* Hero Content */}
                <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-8 text-sm font-medium text-[#bdf589] uppercase tracking-[0.2em] [font-family:'Space_Mono',Helvetica]">
                        Security Architecture
                    </div>

                    <h1 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[80px] tracking-[-0.04em] leading-[1.1] mb-8">
                        Cyber Security
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed [font-family:'Space_Mono',Helvetica] max-w-xl">
                        Technical protection for cloud environments, APIs, internal tools, and data pipelines. Reducing risk through infrastructure hardening and continuous monitoring.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-20">
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("#contact")}
                            className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] h-auto hover:bg-white/5 transition-colors focus:ring-2 focus:ring-[#bdf589]/50"
                            aria-label="Request Info"
                        >
                            <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                                Request Info
                            </span>
                        </Button>

                        <Button
                            onClick={() => scrollToSection("#capabilities")}
                            className="inline-flex items-center justify-end gap-2.5 px-[25px] py-4 relative flex-[0_0_auto] rounded-[9px] shadow-[3px_4px_5.8px_#00000026] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:scale-105 transition-transform h-auto border-none focus:ring-2 focus:ring-[#bdf589]/50"
                            aria-label="Get Started Now"
                        >
                            <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-8 whitespace-nowrap">
                                Get Started Now
                            </span>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12">
                        <div className="inline-flex items-center relative gap-8">
                            <StatItem value={clientCount} label="Clients" padding="pl-1.5 pr-8" borderRight="border-r border-[#bdf589]" />
                            <StatItem value={`${countryCount}+`} label="Countries" padding="px-0" />

                            <div className="pl-8 inline-flex flex-col items-start justify-center gap-[5px] relative border-l border-white/10">
                                <p className="leading-relaxed [font-family:'Space_Mono',Helvetica] font-normal text-white/50 text-sm tracking-[0]">
                                    Dedicated to safeguarding<br />
                                    your digital assets with<br />
                                    technical precision
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className={`flex-1 relative hidden lg:block transition-all duration-1000 delay-300 ${heroAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="relative w-full max-w-[550px] mx-auto group">
                        <div className="absolute inset-0 bg-[#bdf589]/20 blur-[100px] rounded-full group-hover:bg-[#bdf589]/30 transition-colors duration-700" />
                        <img
                            src="/element.png"
                            alt="Cybersecurity shield visualization"
                            className="w-full h-auto drop-shadow-[0_0_50px_rgba(189,245,137,0.3)] hover:scale-105 transition-transform duration-700 relative z-10"
                        />
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section id="sectors" ref={sectorsAnimation.ref} className="relative z-10 w-full py-32 px-8 bg-white/[0.02]">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${sectorsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Trusted in High-Risk Environments"
                        description="Leading organizations across critical sectors depend on our infrastructure hardening and continuous monitoring to stay secure."
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {sectors.map((sector) => (
                            <SectorCard key={sector.name} {...sector} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section id="capabilities" ref={capabilitiesAnimation.ref} className="relative z-10 w-full py-32 px-8">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${capabilitiesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Our Capabilities"
                        description="Every capability is framed around measurable risk reduction, not marketing promises. Technical precision driving real outcomes."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {capabilities.map((capability, index) => (
                            <CapabilityCard key={capability.title} {...capability} index={index} />
                        ))}
                    </div>

                    <div className="mt-20 bg-white/5 border border-white/10 rounded-2xl p-12 text-center group hover:border-[#bdf589]/30 transition-colors">
                        <p className="text-white/50 text-base mb-4 [font-family:'Space_Mono',Helvetica] group-hover:text-white/80 transition-colors">
                            Our approach focuses on technical precision and measurable outcomes.
                        </p>
                        <p className="text-xl md:text-2xl text-white [font-family:'Space_Mono',Helvetica] font-bold">
                            Risk reduction through clarity, not hype.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={contactAnimation.ref} className="relative z-10 w-full py-32 px-8 bg-[#bdf589]/[0.02]">
                <div className={`max-w-4xl mx-auto transition-all duration-1000 ${contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Get In Touch"
                        description="Ready to secure your infrastructure? Let's discuss how we can help protect your digital assets."
                    />
                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 w-full py-20 px-8 border-t border-white/10 bg-[#0f0f0f]">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <Logo />

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <img
                            className="w-[340px] max-w-full opacity-60 hover:opacity-100 transition-opacity duration-500"
                            alt="Partner and client logos"
                            src="/clients.svg"
                        />
                        <div className="flex gap-8">
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="[font-family:'Space_Mono',Helvetica] text-white/40 text-sm hover:text-[#bdf589] transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="[font-family:'Space_Mono',Helvetica] text-white/30 text-xs">
                        © 2026 Cybee. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/30 hover:text-white transition-colors text-xs [font-family:'Space_Mono',Helvetica]">Privacy Policy</a>
                        <a href="#" className="text-white/30 hover:text-white transition-colors text-xs [font-family:'Space_Mono',Helvetica]">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
