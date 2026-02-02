import { useState, FormEvent, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { supabase } from "../../../lib/supabase";

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    workEmail: string;
    businessRevenue: string;
    primaryGoal: string;
}

interface FormErrors {
    name?: string;
    workEmail?: string;
    businessRevenue?: string;
    primaryGoal?: string;
}

const revenueOptions = [
    { value: "", label: "Select revenue range" },
    { value: "$0-$200k", label: "$0 - $200k" },
    { value: "$1M-$5M", label: "$1M - $5M" },
    { value: "$5M-$20M", label: "$5M - $20M" },
    { value: "$20M+", label: "$20M+" },
];

const goalOptions = [
    { value: "", label: "Select primary goal" },
    { value: "Revenue Growth", label: "Revenue Growth" },
    { value: "Cost Optimization", label: "Cost Optimization" },
    { value: "Market Expansion", label: "Market Expansion" },
    { value: "Operational Efficiency", label: "Operational Efficiency" },
    { value: "Exit Strategy", label: "Exit Strategy" },
    { value: "Digital Transformation", label: "Digital Transformation" },
];

export const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps): JSX.Element | null => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        workEmail: "",
        businessRevenue: "",
        primaryGoal: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        if (submitStatus === "success") {
            const timer = setTimeout(() => {
                onClose();
                setSubmitStatus("idle");
                setFormData({ name: "", workEmail: "", businessRevenue: "", primaryGoal: "" });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus, onClose]);

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

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.workEmail.trim()) {
            newErrors.workEmail = "Work email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
            newErrors.workEmail = "Please enter a valid email";
        }

        if (!formData.businessRevenue) {
            newErrors.businessRevenue = "Please select a revenue range";
        }

        if (!formData.primaryGoal) {
            newErrors.primaryGoal = "Please select a primary goal";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from("lead_submissions")
                .insert([
                    {
                        name: formData.name.trim(),
                        work_email: formData.workEmail.trim(),
                        business_revenue: formData.businessRevenue,
                        primary_goal: formData.primaryGoal,
                    },
                ]);

            if (error) throw error;

            setSubmitStatus("success");
            setErrors({});
        } catch (error) {
            console.error("Error submitting lead:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className={`relative w-full max-w-lg bg-[#1a1a1a]/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl transition-all duration-300 ${submitStatus === "success" ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                {submitStatus === "success" ? (
                    <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Roadmap Requested</h3>
                        <p className="text-slate-400 text-center">
                            Marcus will contact you within 2 hours.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Request Your Growth Roadmap
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Complete the form below to schedule your strategy session.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lead-name" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="lead-name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className={`bg-white/5 border ${errors.name ? "border-red-500" : "border-white/20"} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors`}
                                    placeholder="Your full name"
                                    disabled={isSubmitting}
                                />
                                {errors.name && <span className="text-red-400 text-sm">{errors.name}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="lead-email" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Work Email *
                                </label>
                                <input
                                    type="email"
                                    id="lead-email"
                                    value={formData.workEmail}
                                    onChange={(e) => handleInputChange("workEmail", e.target.value)}
                                    className={`bg-white/5 border ${errors.workEmail ? "border-red-500" : "border-white/20"} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors`}
                                    placeholder="you@company.com"
                                    disabled={isSubmitting}
                                />
                                {errors.workEmail && <span className="text-red-400 text-sm">{errors.workEmail}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="lead-revenue" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Business Revenue *
                                </label>
                                <select
                                    id="lead-revenue"
                                    value={formData.businessRevenue}
                                    onChange={(e) => handleInputChange("businessRevenue", e.target.value)}
                                    className={`bg-white/5 border ${errors.businessRevenue ? "border-red-500" : "border-white/20"} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors appearance-none cursor-pointer`}
                                    disabled={isSubmitting}
                                >
                                    {revenueOptions.map((option) => (
                                        <option key={option.value} value={option.value} className="bg-[#1a1a1a] text-white">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.businessRevenue && <span className="text-red-400 text-sm">{errors.businessRevenue}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="lead-goal" className="text-white text-sm font-medium uppercase tracking-widest">
                                    Primary Goal *
                                </label>
                                <select
                                    id="lead-goal"
                                    value={formData.primaryGoal}
                                    onChange={(e) => handleInputChange("primaryGoal", e.target.value)}
                                    className={`bg-white/5 border ${errors.primaryGoal ? "border-red-500" : "border-white/20"} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors appearance-none cursor-pointer`}
                                    disabled={isSubmitting}
                                >
                                    {goalOptions.map((option) => (
                                        <option key={option.value} value={option.value} className="bg-[#1a1a1a] text-white">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.primaryGoal && <span className="text-red-400 text-sm">{errors.primaryGoal}</span>}
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-4 rounded-lg shadow-lg bg-green-600 hover:bg-green-700 hover:scale-[1.02] transition-all h-auto border-none focus:ring-2 focus:ring-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span className="text-sm font-medium uppercase tracking-widest text-white">
                                            Submitting...
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-sm font-medium uppercase tracking-widest text-white">
                                        Schedule Consultation
                                    </span>
                                )}
                            </Button>
                        </form>
                    </>
                )}
            </div>

            {submitStatus === "success" && (
                <div className="relative w-full max-w-lg bg-[#1a1a1a]/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in">
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Roadmap Requested</h3>
                        <p className="text-slate-400 text-center">
                            Marcus will contact you within 2 hours.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
