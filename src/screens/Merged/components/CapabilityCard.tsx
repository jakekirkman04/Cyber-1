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
            className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-[#bdf589]/50 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex items-start gap-4">
                <div className="mt-1">
                    <Icon className="w-6 h-6 text-[#bdf589] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                    <h3 className="text-xl [font-family:'Space_Mono',Helvetica] font-normal text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed [font-family:'Space_Mono',Helvetica] group-hover:text-white/70 transition-colors">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
