import { memo } from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
}

export const TestimonialCard = memo(({ quote, author, role, company }: TestimonialCardProps): JSX.Element => {
    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-amber-500/40 transition-all duration-300 hover:bg-white/15 group">
            <Quote className="w-10 h-10 text-amber-400 mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />

            <p className="text-white/80 text-lg leading-relaxed mb-6">
                "{quote}"
            </p>

            <div className="flex flex-col gap-1">
                <p className="text-white font-semibold text-sm">
                    {author}
                </p>
                <p className="text-slate-400 text-sm">
                    {role}, {company}
                </p>
            </div>
        </div>
    );
});
