import React from "react";

export const Logo = (): JSX.Element => {
    return (
        <div className="flex items-center gap-[9.39px]">
            <div className="relative w-[27.46px] h-[27.46px] rounded-[5.06px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)]" />
            <div className="bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Space_Mono',Helvetica] font-bold text-[23.8px] tracking-[-2.38px] leading-[47.7px]">
                Cybee
            </div>
        </div>
    );
};
