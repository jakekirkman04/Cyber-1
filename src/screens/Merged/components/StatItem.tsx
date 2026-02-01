import React from "react";

interface StatItemProps {
    value: number | string;
    label: string;
    padding: string;
    borderRight?: string;
}

export const StatItem = ({ value, label, padding, borderRight }: StatItemProps): JSX.Element => {
    return (
        <div className={`${padding} py-2.5 ${borderRight || ""} inline-flex flex-col items-start justify-center gap-[5px] relative`}>
            <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[28.3px] whitespace-nowrap">
                {value}
            </div>
            <div className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                {label}
            </div>
        </div>
    );
};
