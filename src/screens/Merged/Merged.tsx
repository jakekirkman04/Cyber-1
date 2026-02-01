import { Button } from "../../components/ui/button";
import { Shield, Eye, Lock, Activity } from "lucide-react";

const navigationItems = [
    { label: "Products" },
    { label: "Capabilities" },
    { label: "Resources" },
    { label: "Partners" },
];

const statsData = [
    {
        value: "818",
        label: "Clients",
        borderRight: "border-r [border-right-style:solid] border-[#bdf589]",
        padding: "pl-1.5 pr-[30px]",
    },
    {
        value: "70+",
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

export const Merged = (): JSX.Element => {
    return (
        <div className="bg-[#0f0f0f] overflow-x-hidden w-full min-h-screen relative">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[425px] left-[-100px] w-[787px] h-[479px]">
                    <img
                        className="w-full h-full"
                        alt="Red"
                        src="/red.svg"
                    />
                </div>

                <div className="absolute top-[700px] left-[824px] w-[1010px] h-[1010px] bg-[#bdf589] rounded-[505.01px] rotate-[-23.69deg]" />

                <div className="absolute top-[515px] left-[1215px] w-[1381px] h-[1010px] bg-[#636eb4] rounded-[690.55px/505.01px] rotate-[-23.69deg] opacity-80" />

                <div className="absolute top-[-166px] left-[1188px] w-[574px] h-[574px] bg-[#f300f8] rounded-[287.19px] rotate-[-23.69deg] opacity-70" />

                <div className="absolute inset-0 bg-[#ffffff03] backdrop-blur-[271.06px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(271.06px)_brightness(100%)]" />

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                    alt="Texture"
                    src="/texture.png"
                />

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Grid"
                    src="/grid-1.svg"
                />
            </div>

            {/* Header */}
            <header className="relative z-10 flex w-full max-w-[1280px] mx-auto items-center justify-between px-8 py-10 bg-transparent">
                <nav className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
                    <div className="flex items-center gap-[9.39px] relative">
                        <div className="relative w-[27.46px] h-[27.46px] rounded-[5.06px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)]" />

                        <div className="relative flex items-center justify-center w-fit bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Space_Mono',Helvetica] font-bold text-transparent text-[23.8px] tracking-[-2.38px] leading-[47.7px] whitespace-nowrap">
                            Cybee
                        </div>
                    </div>

                    {navigationItems.map((item, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] h-auto hover:bg-transparent"
                        >
                            <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                                {item.label}
                            </span>
                        </Button>
                    ))}
                </nav>

                <Button
                    variant="outline"
                    className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] border-[none] bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[9px] before:[background:linear-gradient(299deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                    <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                        Contact Us
                    </span>
                </Button>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-8 text-center">
                <div className="mb-8 text-sm font-medium text-[#bdf589] uppercase tracking-wider [font-family:'Space_Mono',Helvetica]">
                    Security Architecture
                </div>

                <h1 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[100px] text-center tracking-[-4px] leading-tight mb-6">
                    Cyber Security
                </h1>

                <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed [font-family:'Space_Mono',Helvetica]">
                    Technical protection for cloud environments, APIs, internal tools, and data pipelines. Reducing risk through infrastructure hardening and continuous monitoring.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
                    <Button
                        variant="ghost"
                        className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] h-auto hover:bg-transparent"
                    >
                        <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                            Request Info
                        </span>
                    </Button>

                    <Button className="inline-flex items-center justify-end gap-2.5 px-[15px] py-2.5 relative flex-[0_0_auto] rounded-[9px] shadow-[3px_4px_5.8px_#00000026] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] h-auto border-none">
                        <span className="relative flex items-center justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-8 whitespace-nowrap">
                            Get Started Now
                        </span>
                    </Button>
                </div>

                {/* Stats Footer */}
                <div className="flex flex-wrap items-center justify-center gap-8">
                    <div className="inline-flex items-center relative">
                        {statsData.map((stat, index) => (
                            <div
                                key={index}
                                className={`${stat.padding} py-2.5 ${stat.borderRight} inline-flex flex-col items-start justify-center gap-[5px] relative`}
                            >
                                <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[28.3px] whitespace-nowrap">
                                    {stat.value}
                                </div>
                                <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}

                        <div className="pl-[30px] pr-0 py-2.5 inline-flex flex-col items-start justify-center gap-[5px] relative">
                            <p className="w-[217px] leading-[18px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm tracking-[0]">
                                We're dedicated<br />
                                to safeguarding<br />
                                your digital assets
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="relative z-10 w-full py-24 px-8">
                <div className="max-w-6xl mx-auto">
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
            <section className="relative z-10 w-full py-24 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl mb-4">
                            Our Capabilities
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto [font-family:'Space_Mono',Helvetica]">
                            Every capability is framed around measurable risk reduction, not marketing promises.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {capabilities.map((capability) => {
                            const Icon = capability.icon;
                            return (
                                <div
                                    key={capability.title}
                                    className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-[#bdf589]/50 transition-colors duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <Icon className="w-6 h-6 text-[#bdf589]" />
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

            {/* Footer */}
            <footer className="relative z-10 w-full py-16 px-8">
                <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8">
                    <div className="flex items-center gap-[9.39px]">
                        <div className="relative w-[27.46px] h-[27.46px] rounded-[5.06px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)]" />
                        <div className="bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Space_Mono',Helvetica] font-bold text-[23.8px] tracking-[-2.38px] leading-[47.7px]">
                            Cybee
                        </div>
                    </div>

                    <img
                        className="w-[340px]"
                        alt="Clients"
                        src="/clients.svg"
                    />
                </div>
            </footer>
        </div>
    );
};
