interface StatItemProps {
    value: number | string;
    label: string;
    padding: string;
    borderRight?: string;
}

export const StatItem = ({ value, label, padding, borderRight }: StatItemProps): JSX.Element => {
    return (
        <div className={`${padding} py-2.5 ${borderRight || ""} inline-flex flex-col items-start justify-center gap-1 relative`}>
            <div className="font-bold text-white text-2xl tracking-tight leading-7 whitespace-nowrap">
                {value}
            </div>
            <div className="font-normal text-slate-400 text-lg leading-normal">
                {label}
            </div>
        </div>
    );
};
