import { useState, useEffect } from "react";
import { X, Calculator, TrendingUp, DollarSign, Clock, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface ROICalculatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onScheduleConsultation: () => void;
}

interface CalculatorInputs {
    annualRevenue: string;
    operationalCosts: string;
    employeeCount: string;
    industry: string;
}

interface ROIResults {
    projectedRevenueGrowth: number;
    potentialCostSavings: number;
    totalROI12Months: number;
    totalROI24Months: number;
    totalROI36Months: number;
}

const industryMultipliers: Record<string, { revenueMultiplier: number; costMultiplier: number }> = {
    "": { revenueMultiplier: 0.85, costMultiplier: 0.65 },
    "Retail": { revenueMultiplier: 0.82, costMultiplier: 0.68 },
    "Manufacturing": { revenueMultiplier: 0.78, costMultiplier: 0.72 },
    "Tech": { revenueMultiplier: 0.92, costMultiplier: 0.58 },
    "Real Estate": { revenueMultiplier: 0.75, costMultiplier: 0.60 },
    "Professional Services": { revenueMultiplier: 0.88, costMultiplier: 0.62 },
    "Hospitality": { revenueMultiplier: 0.80, costMultiplier: 0.70 },
};

const industryOptions = [
    { value: "", label: "Select your industry" },
    { value: "Retail", label: "Retail" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Tech", label: "Technology" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Professional Services", label: "Professional Services" },
    { value: "Hospitality", label: "Hospitality" },
];

const parseNumber = (value: string): number => {
    const cleaned = value.replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
};

const formatCurrency = (value: number): string => {
    if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
        return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value.toFixed(0)}`;
};

export const ROICalculatorModal = ({ isOpen, onClose, onScheduleConsultation }: ROICalculatorModalProps): JSX.Element | null => {
    const [inputs, setInputs] = useState<CalculatorInputs>({
        annualRevenue: "",
        operationalCosts: "",
        employeeCount: "",
        industry: "",
    });
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState<ROIResults | null>(null);

    const animatedRevenueGrowth = useAnimatedCounter(
        results?.projectedRevenueGrowth || 0,
        1500,
        showResults
    );
    const animatedCostSavings = useAnimatedCounter(
        results?.potentialCostSavings || 0,
        1500,
        showResults
    );
    const animatedROI12 = useAnimatedCounter(
        results?.totalROI12Months || 0,
        1500,
        showResults
    );

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

    const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
        setInputs((prev) => ({ ...prev, [field]: value }));
        setShowResults(false);
    };

    const calculateROI = () => {
        const revenue = parseNumber(inputs.annualRevenue);
        const costs = parseNumber(inputs.operationalCosts);
        const multipliers = industryMultipliers[inputs.industry] || industryMultipliers[""];

        const revenueGrowth = revenue * multipliers.revenueMultiplier;
        const costSavings = costs * multipliers.costMultiplier;

        const annualBenefit = revenueGrowth + costSavings;

        setResults({
            projectedRevenueGrowth: Math.round(revenueGrowth),
            potentialCostSavings: Math.round(costSavings),
            totalROI12Months: Math.round(annualBenefit),
            totalROI24Months: Math.round(annualBenefit * 2.2),
            totalROI36Months: Math.round(annualBenefit * 3.5),
        });
        setShowResults(true);
    };

    const isFormValid = inputs.annualRevenue && inputs.operationalCosts;

    const handleClose = () => {
        setShowResults(false);
        setResults(null);
        setInputs({
            annualRevenue: "",
            operationalCosts: "",
            employeeCount: "",
            industry: "",
        });
        onClose();
    };

    const handleSchedule = () => {
        handleClose();
        setTimeout(() => onScheduleConsultation(), 150);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={handleClose}
            />

            <div className="relative w-full max-w-2xl bg-[#1a1a1a]/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-amber-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">
                        ROI Calculator
                    </h2>
                </div>
                <p className="text-slate-400 mb-8">
                    Estimate your potential return on investment from strategic consulting.
                </p>

                {!showResults ? (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="annual-revenue" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Annual Revenue *
                                </label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                    <input
                                        type="text"
                                        id="annual-revenue"
                                        value={inputs.annualRevenue}
                                        onChange={(e) => handleInputChange("annualRevenue", e.target.value)}
                                        className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                                        placeholder="e.g., 5,000,000"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="operational-costs" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Operational Costs *
                                </label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                    <input
                                        type="text"
                                        id="operational-costs"
                                        value={inputs.operationalCosts}
                                        onChange={(e) => handleInputChange("operationalCosts", e.target.value)}
                                        className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                                        placeholder="e.g., 2,000,000"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="employee-count" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Number of Employees
                                </label>
                                <input
                                    type="text"
                                    id="employee-count"
                                    value={inputs.employeeCount}
                                    onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                                    placeholder="e.g., 50"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="industry" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Industry
                                </label>
                                <select
                                    id="industry"
                                    value={inputs.industry}
                                    onChange={(e) => handleInputChange("industry", e.target.value)}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors appearance-none cursor-pointer"
                                >
                                    {industryOptions.map((option) => (
                                        <option key={option.value} value={option.value} className="bg-[#1a1a1a] text-white">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <p className="text-slate-400 text-sm">
                                Based on our track record of 85% average revenue growth and 65% cost reduction across 200+ engagements, we'll calculate your estimated ROI.
                            </p>
                        </div>

                        <Button
                            onClick={calculateROI}
                            disabled={!isFormValid}
                            className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-4 rounded-lg shadow-lg bg-amber-500 hover:bg-amber-600 hover:scale-[1.02] transition-all h-auto border-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <Calculator className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-widest text-white">
                                Calculate My ROI
                            </span>
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                    <span className="text-sm text-green-400 uppercase tracking-wider font-medium">Revenue Growth</span>
                                </div>
                                <div className="text-3xl font-bold text-white">
                                    {formatCurrency(animatedRevenueGrowth)}
                                </div>
                                <p className="text-slate-400 text-sm mt-1">Projected annual increase</p>
                            </div>

                            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign className="w-5 h-5 text-amber-400" />
                                    <span className="text-sm text-amber-400 uppercase tracking-wider font-medium">Cost Savings</span>
                                </div>
                                <div className="text-3xl font-bold text-white">
                                    {formatCurrency(animatedCostSavings)}
                                </div>
                                <p className="text-slate-400 text-sm mt-1">Annual operational savings</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/20 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-amber-400" />
                                Projected Total ROI
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-amber-400">
                                        {formatCurrency(animatedROI12)}
                                    </div>
                                    <div className="text-slate-400 text-sm mt-1">12 Months</div>
                                </div>
                                <div className="text-center border-l border-r border-white/10">
                                    <div className="text-2xl font-bold text-amber-400">
                                        {formatCurrency(results?.totalROI24Months || 0)}
                                    </div>
                                    <div className="text-slate-400 text-sm mt-1">24 Months</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-amber-400">
                                        {formatCurrency(results?.totalROI36Months || 0)}
                                    </div>
                                    <div className="text-slate-400 text-sm mt-1">36 Months</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                            <p className="text-green-400 text-sm text-center">
                                These projections are based on average results from similar engagements. Actual results may vary based on implementation and market conditions.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => setShowResults(false)}
                                variant="outline"
                                className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-4 rounded-lg h-auto bg-transparent border border-white/20 hover:bg-white/5 transition-all"
                            >
                                <span className="text-sm font-medium uppercase tracking-widest text-white">
                                    Recalculate
                                </span>
                            </Button>
                            <Button
                                onClick={handleSchedule}
                                className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-4 rounded-lg shadow-lg bg-green-600 hover:bg-green-700 hover:scale-[1.02] transition-all h-auto border-none focus:ring-2 focus:ring-green-500/50"
                            >
                                <span className="text-sm font-medium uppercase tracking-widest text-white">
                                    Get Your Roadmap
                                </span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
