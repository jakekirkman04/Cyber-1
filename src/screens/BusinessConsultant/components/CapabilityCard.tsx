import { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

export const CapabilityCard = ({ title, description, icon: Icon, index }: CapabilityCardProps): JSX.Element => {
    return (
        <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 hover:border-amber-500/50 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex items-start gap-4">
                <div className="mt-1">
                    <Icon className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                        {title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-400 transition-colors">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
