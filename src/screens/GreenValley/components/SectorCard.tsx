interface SectorCardProps {
    name: string;
    placeholder: string;
    onClick?: () => void;
}

export const SectorCard = ({ name, placeholder, onClick }: SectorCardProps): JSX.Element => {
    return (
        <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center aspect-square hover:border-amber-500/50 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
        >
            <div className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {placeholder}
            </div>
            <div className="text-sm uppercase tracking-widest text-slate-400 text-center font-medium">
                {name}
            </div>
        </div>
    );
};
