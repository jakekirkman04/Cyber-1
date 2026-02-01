import { Button } from "../../components/ui/button";
import { Shield, Eye, Lock, Activity, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navigationItems = [
    { label: "Home", href: "#hero" },
    { label: "Sectors", href: "#sectors" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
];

const statsData = [
    {
        value: 818,
        label: "Clients",
        borderRight: "border-r [border-right-style:solid] border-[#bdf589]",
        padding: "pl-1.5 pr-[30px]",
    },
    {
        value: 70,
        suffix: "+",
        label: "Countries",
        borderRight: "border-r [border-right-style:solid] border-[#bdf589]",
        padding: "px-[30px]",
    },
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

// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
};

// Custom hook for animated counter
const useAnimatedCounter = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
};

export const Merged = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="bg-[#0f0f0f] overflow-x-hidden w-full min-h-screen relative scroll-smooth">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[425px] left-[-100px] w-[787px] h-[479px]">
                    <img
                        className="w-full h-full"
                        alt=""
                        src="/red.svg"
                        aria-hidden="true"
                    />
                </div>

                <div className="absolute top-[700px] left-[824px] w-[1010px] h-[1010px] bg-[#bdf589] rounded-[505.01px] rotate-[-23.69deg]" />

                <div className="absolute top-[515px] left-[1215px] w-[1381px] h-[1010px] bg-[#636eb4] rounded-[690.55px/505.01px] rotate-[-23.69deg] opacity-80" />

                <div className="absolute top-[-166px] left-[1188px] w-[574px] h-[574px] bg-[#f300f8] rounded-[287.19px] rotate-[-23.69deg] opacity-70" />

                <div className="absolute inset-0 bg-[#ffffff03] backdrop-blur-[271.06px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(271.06px)_brightness(100%)]" />

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                    alt=""
                    src="/texture.png"
                    aria-hidden="true"
                />

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt=""
                    src="/grid-1.svg"
                    aria-hidden="true"
                />
            </div>

            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0f0f0f]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
                <div className="flex w-full max-w-[1280px] mx-auto items-center justify-between px-8 py-6">
                    <nav className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
                        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }} className="flex items-center gap-[9.39px] relative" aria-label="Cybee Home">
                            <div className="relative w-[27.46px] h-[27.46px] rounded-[5.06px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)]" />

                            <div className="relative flex items-center justify-center w-fit bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Space_Mono',Helvetica] font-bold text-transparent text-[23.8px] tracking-[-2.38px] leading-[47.7px] whitespace-nowrap">
                                Cybee
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="inline-flex items-center justify-center gap-2.5 p-2.5 relative h-auto bg-transparent hover:bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 rounded-md transition-colors"
                                    aria-label={`Navigate to ${item.label}`}
                                >
                                    <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap hover:text-[#bdf589] transition-colors">
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 rounded-md"
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
                        className="hidden md:inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] border-[none] bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[9px] before:[background:linear-gradient(299deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none focus:ring-2 focus:ring-[#bdf589]/50"
                        aria-label="Contact Us"
                    >
                        <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                            Contact Us
                        </span>
                    </Button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-white/10">
                        <div className="px-8 py-6 flex flex-col gap-4">
                            {navigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left py-3 [font-family:'Space_Mono',Helvetica] text-white text-lg hover:text-[#bdf589] transition-colors focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 rounded-md bg-transparent border-none cursor-pointer"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="mt-4 py-3 px-6 rounded-[9px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [font-family:'Space_Mono',Helvetica] text-white text-lg border-none cursor-pointer"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section id="hero" ref={heroAnimation.ref} className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 pt-32 pb-16 gap-12">
                {/* Hero Content */}
                <div className={`flex-1 text-center lg:text-left max-w-2xl transition-all duration-1000 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-8 text-sm font-medium text-[#bdf589] uppercase tracking-wider [font-family:'Space_Mono',Helvetica]">
                        Security Architecture
                    </div>

                    <h1 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[80px] tracking-[-4px] leading-tight mb-6">
                        Cyber Security
                    </h1>

                    <p className="text-lg text-white/70 mb-12 leading-relaxed [font-family:'Space_Mono',Helvetica]">
                        Technical protection for cloud environments, APIs, internal tools, and data pipelines. Reducing risk through infrastructure hardening and continuous monitoring.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-16">
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("#contact")}
                            className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] h-auto hover:bg-transparent focus:ring-2 focus:ring-[#bdf589]/50"
                            aria-label="Request Info"
                        >
                            <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                                Request Info
                            </span>
                        </Button>

                        <Button
                            onClick={() => scrollToSection("#capabilities")}
                            className="inline-flex items-center justify-end gap-2.5 px-[15px] py-2.5 relative flex-[0_0_auto] rounded-[9px] shadow-[3px_4px_5.8px_#00000026] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:scale-105 transition-transform h-auto border-none focus:ring-2 focus:ring-[#bdf589]/50"
                            aria-label="Get Started Now"
                        >
                            <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-8 whitespace-nowrap">
                                Get Started Now
                            </span>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                        <div className="inline-flex items-center relative">
                            <div className={`${statsData[0].padding} py-2.5 ${statsData[0].borderRight} inline-flex flex-col items-start justify-center gap-[5px] relative`}>
                                <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[28.3px] whitespace-nowrap">
                                    {clientCount}
                                </div>
                                <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                                    {statsData[0].label}
                                </div>
                            </div>
                            <div className={`${statsData[1].padding} py-2.5 ${statsData[1].borderRight} inline-flex flex-col items-start justify-center gap-[5px] relative`}>
                                <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[28.3px] whitespace-nowrap">
                                    {countryCount}+
                                </div>
                                <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                                    {statsData[1].label}
                                </div>
                            </div>

                            <div className="pl-[30px] pr-0 py-2.5 inline-flex flex-col items-start justify-center gap-[5px] relative">
                                <p className="w-[217px] leading-[18px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm tracking-[0]">
                                    We're dedicated<br />
                                    to safeguarding<br />
                                    your digital assets
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className={`flex-1 relative hidden lg:block transition-all duration-1000 delay-300 ${heroAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="relative w-full max-w-[500px] mx-auto">
                        <img
                            src="/element.png"
                            alt="Cybersecurity shield visualization"
                            className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section id="sectors" ref={sectorsAnimation.ref} className="relative z-10 w-full py-24 px-8">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${sectorsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h2 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl mb-4">
                            Trusted by teams operating in regulated and high-risk environments
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto [font-family:'Space_Mono',Helvetica]">
                            Leading organizations across critical sectors depend on our infrastructure hardening and continuous monitoring.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {sectors.map((sector) => (
                            <div
                                key={sector.name}
                                className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center aspect-square hover:border-[#bdf589]/50 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="text-2xl [font-family:'Space_Mono',Helvetica] text-[#bdf589] mb-2">
                                    {sector.placeholder}
                                </div>
                                <div className="text-xs text-white/60 text-center font-medium [font-family:'Space_Mono',Helvetica]">
                                    {sector.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section id="capabilities" ref={capabilitiesAnimation.ref} className="relative z-10 w-full py-24 px-8">
                <div className={`max-w-6xl mx-auto transition-all duration-1000 ${capabilitiesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h2 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl mb-4">
                            Our Capabilities
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto [font-family:'Space_Mono',Helvetica]">
                            Every capability is framed around measurable risk reduction, not marketing promises.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {capabilities.map((capability, index) => {
                            const Icon = capability.icon;
                            return (
                                <div
                                    key={capability.title}
                                    className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-[#bdf589]/50 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                                    style={{ transitionDelay: `${index * 100}ms` }}>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <Icon className="w-6 h-6 text-[#bdf589] group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl [font-family:'Space_Mono',Helvetica] font-normal text-white mb-2">
                                                {capability.title}
                                            </h3>
                                            <p className="text-sm text-white/50 leading-relaxed [font-family:'Space_Mono',Helvetica]">
                                                {capability.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 bg-white/5 border border-white/10 rounded-lg p-8 text-center">
                        <p className="text-white/50 text-sm mb-4 [font-family:'Space_Mono',Helvetica]">
                            Our approach focuses on technical precision and measurable outcomes.
                        </p>
                        <p className="text-white [font-family:'Space_Mono',Helvetica]">
                            Risk reduction through clarity, not hype.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={contactAnimation.ref} className="relative z-10 w-full py-24 px-8">
                <div className={`max-w-4xl mx-auto transition-all duration-1000 ${contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h2 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto [font-family:'Space_Mono',Helvetica]">
                            Ready to secure your infrastructure? Let's discuss how we can help protect your digital assets.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label htmlFor="company" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors"
                                    placeholder="Company name"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label htmlFor="message" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors resize-none"
                                    placeholder="Tell us about your security needs..."
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2.5 px-[15px] py-4 rounded-[9px] shadow-[3px_4px_5.8px_#00000026] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:scale-[1.02] transition-transform h-auto border-none focus:ring-2 focus:ring-[#bdf589]/50"
                                    aria-label="Send Message"
                                >
                                    <span className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base">
                                        Send Message
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 w-full py-16 px-8 border-t border-white/10">
                <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8">
                    <div className="flex items-center gap-[9.39px]">
                        <div className="relative w-[27.46px] h-[27.46px] rounded-[5.06px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)]" />
                        <div className="bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Space_Mono',Helvetica] font-bold text-[23.8px] tracking-[-2.38px] leading-[47.7px]">
                            Cybee
                        </div>
                    </div>

                    <img
                        className="w-[340px] max-w-full"
                        alt="Partner and client logos"
                        src="/clients.svg"
                    />
                </div>
                <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="[font-family:'Space_Mono',Helvetica] text-white/40 text-sm">
                        © 2026 Cybee. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
