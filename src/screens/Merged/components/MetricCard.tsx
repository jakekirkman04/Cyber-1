import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
    metric: string;
    label: string;
    icon: LucideIcon;
}

export const MetricCard = memo(({ metric, label, icon: Icon }: MetricCardProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center text-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#bdf589]/30 transition-all duration-300 group">
            <Icon className="w-8 h-8 text-[#bdf589] group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-bold text-white [font-family:'Space_Mono',Helvetica]">
                {metric}
            </div>
            <p className="text-white/60 text-sm [font-family:'Space_Mono',Helvetica] leading-snug">
                {label}
            </p>
        </div>
    );
});
