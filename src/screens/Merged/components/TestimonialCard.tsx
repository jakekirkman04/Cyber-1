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
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#bdf589]/30 transition-all duration-300 hover:bg-white/[0.07] group">
            <Quote className="w-10 h-10 text-[#bdf589] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />

            <p className="text-white/80 text-base leading-relaxed mb-6 [font-family:'Space_Mono',Helvetica]">
                "{quote}"
            </p>

            <div className="flex flex-col gap-1">
                <p className="text-white font-semibold text-sm [font-family:'Space_Mono',Helvetica]">
                    {author}
                </p>
                <p className="text-white/50 text-xs [font-family:'Space_Mono',Helvetica]">
                    {role}, {company}
                </p>
            </div>
        </div>
    );
});
