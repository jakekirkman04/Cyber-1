import { memo } from "react";

export const BackgroundEffects = memo((): JSX.Element => {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {/* Pink/Red Blob */}
            <div className="absolute top-[425px] left-[-100px] w-[787px] h-[479px] blur-3xl opacity-50 will-change-transform">
                <img
                    className="w-full h-full object-contain"
                    alt="Red blob decoration"
                    src="/red.svg"
                    loading="lazy"
                />
            </div>

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 overflow-hidden">
                <img
                    className="w-full h-full object-cover mix-blend-overlay"
                    alt="Texture"
                    src="/texture.png"
                    loading="lazy"
                />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-30 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    alt="Grid pattern"
                    src="/grid-1.svg"
                    loading="lazy"
                />
            </div>

            {/* Green Blob */}
            <div className="absolute top-[0px] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] opacity-20 pointer-events-none will-change-transform">
                <div className="w-full h-full rounded-full bg-[#bdf589]" />
            </div>

            {/* Purple/Blue Blob */}
            <div className="absolute bottom-[-200px] right-[-100px] w-[800px] h-[800px] blur-[150px] opacity-20 pointer-events-none will-change-transform">
                <div className="w-full h-full rounded-full bg-[#636eb4]" />
            </div>
        </div>
    );
});
