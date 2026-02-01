import { HeroSection } from "./HeroSection";
import { SocialProofSection } from "./SocialProofSection";
import { CapabilitiesSection } from "./CapabilitiesSection";

export const Landing = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-slate-950 dark">
      <HeroSection />
      <SocialProofSection />
      <CapabilitiesSection />
    </div>
  );
};
