import { useEffect } from "react";
import { X, Search, Map, Rocket } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface MethodologyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onBookAudit: () => void;
}

const methodologySteps = [
    {
        step: 1,
        title: "Diagnostic Audit",
        description: "We conduct a comprehensive analysis of your current operations, financials, and market position to identify hidden opportunities and bottlenecks.",
        icon: Search,
        highlights: ["Financial deep-dive", "Process mapping", "Market analysis"],
    },
    {
        step: 2,
        title: "Strategy Blueprint",
        description: "Based on our findings, we develop a customized roadmap with clear milestones, resource requirements, and expected ROI for each initiative.",
        icon: Map,
        highlights: ["Custom roadmap", "Clear milestones", "ROI projections"],
    },
    {
        step: 3,
        title: "Execution Engine",
        description: "We partner with your team to implement changes, track progress against KPIs, and iterate based on real-world results.",
        icon: Rocket,
        highlights: ["Hands-on implementation", "KPI tracking", "Continuous optimization"],
    },
];

export const MethodologyModal = ({ isOpen, onClose, onBookAudit }: MethodologyModalProps): JSX.Element | null => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl bg-[#1a1a1a]/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-10">
                    <div className="mb-4 text-sm font-medium uppercase tracking-widest bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                        The Thorne Methodology
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Proven 3-Step Process
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A systematic approach to business transformation that has delivered results for over 340 clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {methodologySteps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.step}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                                        <Icon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                                        Step {step.step}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {step.description}
                                </p>

                                <ul className="space-y-2">
                                    {step.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Button
                        onClick={onBookAudit}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg shadow-lg bg-green-600 hover:bg-green-700 hover:scale-105 transition-all h-auto border-none focus:ring-2 focus:ring-green-500/50"
                    >
                        <span className="text-sm font-medium uppercase tracking-widest text-white">
                            Ready to Start? Book Your Audit
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
