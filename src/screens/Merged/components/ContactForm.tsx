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
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
            {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-[#bdf589]/10 border border-[#bdf589]/30 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#bdf589]" />
                    <p className="text-[#bdf589] text-sm [font-family:'Space_Mono',Helvetica]">
                        Thank you! We'll get back to you within 24 hours.
                    </p>
                </div>
            )}

            {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400 text-sm [font-family:'Space_Mono',Helvetica]">
                        {errorMessage}
                    </p>
                </div>
            )}

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors`}
                        placeholder="Your name"
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <span className="text-red-400 text-xs [font-family:'Space_Mono',Helvetica]">{errors.name}</span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors`}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <span className="text-red-400 text-xs [font-family:'Space_Mono',Helvetica]">{errors.email}</span>
                    )}
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="company" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors"
                        placeholder="Company name"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="message" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={`bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors resize-none`}
                        placeholder="Tell us about your security needs..."
                        disabled={isSubmitting}
                    />
                    {errors.message && (
                        <span className="text-red-400 text-xs [font-family:'Space_Mono',Helvetica]">{errors.message}</span>
                    )}
                </div>

                <div className="md:col-span-2">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-[15px] py-4 rounded-[9px] shadow-[3px_4px_5.8px_#00000026] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:scale-[1.02] transition-transform h-auto border-none focus:ring-2 focus:ring-[#bdf589]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        aria-label="Send Message"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base">
                                    Sending...
                                </span>
                            </>
                        ) : (
                            <span className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base">
                                Get Your Free Assessment
                            </span>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};
