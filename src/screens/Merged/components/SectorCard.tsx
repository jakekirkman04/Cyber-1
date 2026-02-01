interface SectorCardProps {
    name: string;
    placeholder: string;
}

export const SectorCard = ({ name, placeholder }: SectorCardProps): JSX.Element => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center aspect-square hover:border-[#bdf589]/50 hover:bg-white/10 transition-colors duration-300 group">
            <div className="text-2xl [font-family:'Space_Mono',Helvetica] text-[#bdf589] mb-2 group-hover:scale-110 transition-transform duration-300">
                {placeholder}
            </div>
            <div className="text-xs text-white/60 text-center font-medium [font-family:'Space_Mono',Helvetica]">
                {name}
            </div>
        </div>
    );
};
