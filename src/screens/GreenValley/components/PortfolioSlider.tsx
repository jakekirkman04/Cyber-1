import { memo } from "react";
import { PortfolioCard } from "./PortfolioCard";

const portfolioItems = [
    {
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "E-Commerce Storefront",
        category: "Website Design",
    },
    {
        image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Corporate Landing Page",
        category: "Web Development",
    },
    {
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "SaaS Dashboard",
        category: "UI/UX Design",
    },
    {
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Business Portfolio",
        category: "Website Design",
    },
    {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Restaurant Booking Site",
        category: "Web Development",
    },
    {
        image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Startup Landing Page",
        category: "Growth Strategy",
    },
    {
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Real Estate Platform",
        category: "Website Design",
    },
    {
        image: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Health & Wellness Brand",
        category: "Digital Marketing",
    },
];

export const PortfolioSlider = memo((): JSX.Element => {
    const doubled = [...portfolioItems, ...portfolioItems];

    return (
        <div className="mt-24">
            <h3 className="text-[2.25rem] font-semibold text-white text-center mb-4 leading-tight">
                Our Past Work
            </h3>
            <p className="text-slate-400 text-lg text-center mb-12 max-w-2xl mx-auto">
                A selection of websites and digital projects we have delivered
            </p>

            <div className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />

                <div className="flex gap-6 animate-slide-left hover:[animation-play-state:paused]">
                    {doubled.map((item, index) => (
                        <PortfolioCard
                            key={`${item.title}-${index}`}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
});
