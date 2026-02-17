import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
    metric: string;
    label: string;
    icon: LucideIcon;
}

export const MetricCard = memo(({ metric, label, icon: Icon }: MetricCardProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center text-center gap-4 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:border-amber-500/40 transition-all duration-300 group">
            <Icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-bold text-white tracking-tight">
                {metric}
            </div>
            <p className="text-slate-400 text-lg leading-snug">
                {label}
            </p>
        </div>
    );
});
