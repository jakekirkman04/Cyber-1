import { memo } from "react";

export const BackgroundEffects = memo((): JSX.Element => {
    return (
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-[425px] left-[-100px] w-[787px] h-[479px] blur-3xl opacity-30 will-change-transform">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-600 to-yellow-500" />
            </div>

            <div className="absolute inset-0 opacity-20 overflow-hidden">
                <img
                    className="w-full h-full object-cover mix-blend-overlay"
                    alt="Texture overlay"
                    src="/texture.png"
                    loading="lazy"
                />
            </div>

            <div className="absolute inset-0 opacity-20 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    alt="Grid pattern"
                    src="/grid-1.svg"
                    loading="lazy"
                />
            </div>

            <div className="absolute top-[0px] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] opacity-15 pointer-events-none will-change-transform">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
            </div>

            <div className="absolute bottom-[-200px] right-[-100px] w-[800px] h-[800px] blur-[150px] opacity-15 pointer-events-none will-change-transform">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-500 to-slate-700" />
            </div>
        </div>
    );
});
