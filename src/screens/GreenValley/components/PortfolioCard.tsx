import { memo } from "react";

interface PortfolioCardProps {
    image: string;
    title: string;
    category: string;
}

export const PortfolioCard = memo(({ image, title, category }: PortfolioCardProps): JSX.Element => {
    return (
        <div className="flex-shrink-0 w-[340px] group">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:bg-white/15">
                <div className="relative w-full h-[220px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                    <p className="text-xs uppercase tracking-widest text-green-400 font-medium mb-1">
                        {category}
                    </p>
                    <h4 className="text-white font-semibold text-base">
                        {title}
                    </h4>
                </div>
            </div>
        </div>
    );
});
