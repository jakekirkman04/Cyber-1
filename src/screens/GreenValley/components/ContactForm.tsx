import { Button } from "../../../components/ui/button";
import { useState, FormEvent } from "react";
import { supabase } from "../../../lib/supabase";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const ContactForm = (): JSX.Element => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitStatus("idle");
        setErrorMessage("");

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from("contact_submissions")
                .insert([
                    {
                        name: formData.name.trim(),
                        email: formData.email.trim(),
                        company: formData.company.trim() || null,
                        message: formData.message.trim()
                    }
                ]);

            if (error) throw error;

            setSubmitStatus("success");
            setFormData({ name: "", email: "", company: "", message: "" });
            setErrors({});

            setTimeout(() => {
                setSubmitStatus("idle");
            }, 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
            setErrorMessage("Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 md:p-12">
            {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    <p className="text-amber-400 text-lg">
                        Thank you! We'll reach out within 24 hours to discuss your growth strategy.
                    </p>
                </div>
            )}

            {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400 text-lg">
                        {errorMessage}
                    </p>
                </div>
            )}

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white text-sm font-medium uppercase tracking-widest">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors`}
                        placeholder="Your name"
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <span className="text-red-400 text-sm">{errors.name}</span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white text-sm font-medium uppercase tracking-widest">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors`}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <span className="text-red-400 text-sm">{errors.email}</span>
                    )}
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="company" className="text-white text-sm font-medium uppercase tracking-widest">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                        placeholder="Company name"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="message" className="text-white text-sm font-medium uppercase tracking-widest">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={`bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors resize-none`}
                        placeholder="Tell us about your business challenges and growth objectives..."
                        disabled={isSubmitting}
                    />
                    {errors.message && (
                        <span className="text-red-400 text-sm">{errors.message}</span>
                    )}
                </div>

                <div className="md:col-span-2">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-4 rounded-lg shadow-lg bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 hover:scale-[1.02] transition-all h-auto border-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        aria-label="Schedule consultation"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span className="text-sm font-medium uppercase tracking-widest text-white">
                                    Sending...
                                </span>
                            </>
                        ) : (
                            <span className="text-sm font-medium uppercase tracking-widest text-white">
                                Schedule Your Strategy Session
                            </span>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};
