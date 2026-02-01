import { Button } from "../../../components/ui/button";

export const ContactForm = (): JSX.Element => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors"
                        placeholder="Your name"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors"
                        placeholder="your@email.com"
                    />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="company" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Company</label>
                    <input
                        type="text"
                        id="company"
                        className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors"
                        placeholder="Company name"
                    />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="message" className="[font-family:'Space_Mono',Helvetica] text-white text-sm">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white [font-family:'Space_Mono',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#bdf589]/50 focus:border-[#bdf589]/50 transition-colors resize-none"
                        placeholder="Tell us about your security needs..."
                    />
                </div>
                <div className="md:col-span-2">
                    <Button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2.5 px-[15px] py-4 rounded-[9px] shadow-[3px_4px_5.8px_#00000026] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:scale-[1.02] transition-transform h-auto border-none focus:ring-2 focus:ring-[#bdf589]/50"
                        aria-label="Send Message"
                    >
                        <span className="[font-family:'Space_Mono',Helvetica] font-normal text-white text-base">
                            Send Message
                        </span>
                    </Button>
                </div>
            </form>
        </div>
    );
};
