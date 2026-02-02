interface SectionHeaderProps {
    title: string;
    description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps): JSX.Element => {
    return (
        <div className="text-center mb-16">
            <h2 className="font-semibold text-white text-[2.25rem] leading-tight mb-4">
                {title}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    );
};
