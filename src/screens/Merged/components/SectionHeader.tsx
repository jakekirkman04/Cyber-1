interface SectionHeaderProps {
    title: string;
    description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps): JSX.Element => {
    return (
        <div className="text-center mb-16">
            <h2 className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl mb-4">
                {title}
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto [font-family:'Space_Mono',Helvetica]">
                {description}
            </p>
        </div>
    );
};
