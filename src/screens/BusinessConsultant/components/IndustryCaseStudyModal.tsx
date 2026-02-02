import { useEffect } from "react";
import { X, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { LucideIcon } from "lucide-react";

export interface CaseStudy {
    industry: string;
    headline: string;
    challenge: string;
    solution: string;
    results: {
        metric: string;
        label: string;
        icon: LucideIcon;
    }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

interface IndustryCaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
    onBookConsultation: () => void;
}

export const caseStudies: Record<string, CaseStudy> = {
    Retail: {
        industry: "Retail",
        headline: "45% Online Revenue Increase",
        challenge: "A regional retail chain struggled to compete with e-commerce giants while maintaining their brick-and-mortar presence.",
        solution: "We developed an omnichannel strategy that unified their online and offline customer experience, optimized inventory management, and implemented personalized marketing automation.",
        results: [
            { metric: "45%", label: "Online revenue growth", icon: TrendingUp },
            { metric: "28%", label: "Customer retention increase", icon: Users },
            { metric: "18 mo", label: "Time to full ROI", icon: Clock },
        ],
    },
    Manufacturing: {
        industry: "Manufacturing",
        headline: "30% Cycle Time Reduction",
        challenge: "A mid-size manufacturer faced production bottlenecks and rising costs that threatened their competitive position.",
        solution: "We implemented lean manufacturing principles, redesigned their production floor layout, and introduced predictive maintenance systems.",
        results: [
            { metric: "30%", label: "Cycle time reduction", icon: Clock },
            { metric: "$2.4M", label: "Annual cost savings", icon: DollarSign },
            { metric: "22%", label: "Capacity increase", icon: TrendingUp },
        ],
    },
    Tech: {
        industry: "Technology",
        headline: "Series B to Profitable Exit",
        challenge: "A SaaS company with strong product-market fit struggled to scale operations efficiently while preparing for acquisition.",
        solution: "We restructured their go-to-market strategy, optimized unit economics, and built the operational infrastructure needed for due diligence.",
        results: [
            { metric: "3.2x", label: "Revenue multiple increase", icon: TrendingUp },
            { metric: "65%", label: "CAC reduction", icon: DollarSign },
            { metric: "24 mo", label: "To successful exit", icon: Clock },
        ],
    },
    "Real Estate": {
        industry: "Real Estate",
        headline: "Portfolio NOI Up 35%",
        challenge: "A commercial real estate firm needed to maximize returns on an underperforming portfolio while attracting institutional investors.",
        solution: "We conducted property-level analysis, implemented operational improvements across the portfolio, and developed investor-ready reporting frameworks.",
        results: [
            { metric: "35%", label: "NOI improvement", icon: TrendingUp },
            { metric: "$180M", label: "New institutional capital", icon: DollarSign },
            { metric: "92%", label: "Occupancy rate achieved", icon: Users },
        ],
    },
    "Professional Services": {
        industry: "Professional Services",
        headline: "Revenue Per Partner Doubled",
        challenge: "A consulting firm struggled with inconsistent utilization rates and unclear service differentiation in a crowded market.",
        solution: "We redesigned their service offerings, implemented capacity planning systems, and developed a thought leadership strategy.",
        results: [
            { metric: "2x", label: "Revenue per partner", icon: DollarSign },
            { metric: "85%", label: "Utilization rate", icon: TrendingUp },
            { metric: "40%", label: "New client growth", icon: Users },
        ],
    },
    Hospitality: {
        industry: "Hospitality",
        headline: "RevPAR Increased 42%",
        challenge: "A boutique hotel group faced declining occupancy and couldn't compete on price with larger chains.",
        solution: "We repositioned their brand, optimized revenue management systems, and developed unique guest experience programs.",
        results: [
            { metric: "42%", label: "RevPAR increase", icon: TrendingUp },
            { metric: "4.8", label: "Average guest rating", icon: Users },
            { metric: "$1.2M", label: "Additional annual revenue", icon: DollarSign },
        ],
    },
};

export const IndustryCaseStudyModal = ({ isOpen, onClose, caseStudy, onBookConsultation }: IndustryCaseStudyModalProps): JSX.Element | null => {
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

    if (!isOpen || !caseStudy) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-2xl bg-[#1a1a1a]/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <div className="mb-8">
                    <div className="mb-3 text-sm font-medium uppercase tracking-widest bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                        {caseStudy.industry} Case Study
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {caseStudy.headline}
                    </h2>
                </div>

                <div className="space-y-6 mb-8">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-2">
                            The Challenge
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {caseStudy.challenge}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-2">
                            Our Solution
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {caseStudy.solution}
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4">
                        Results Delivered
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        {caseStudy.results.map((result, idx) => {
                            const Icon = result.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                                >
                                    <Icon className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white mb-1">
                                        {result.metric}
                                    </div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                                        {result.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center pt-4 border-t border-white/10">
                    <p className="text-slate-400 mb-4">
                        Ready to achieve similar results for your business?
                    </p>
                    <Button
                        onClick={onBookConsultation}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg shadow-lg bg-green-600 hover:bg-green-700 hover:scale-105 transition-all h-auto border-none focus:ring-2 focus:ring-green-500/50"
                    >
                        <span className="text-sm font-medium uppercase tracking-widest text-white">
                            Schedule Your Consultation
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
