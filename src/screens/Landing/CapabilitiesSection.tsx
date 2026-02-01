import { Shield, Eye, Lock, Activity } from "lucide-react";

const capabilities = [
  {
    title: "Infrastructure Hardening",
    description: "Reduces lateral movement",
    icon: Shield,
  },
  {
    title: "Application Security Reviews",
    description: "Reduces exploitability",
    icon: Eye,
  },
  {
    title: "Access & Identity Controls",
    description: "Reduces unauthorized access",
    icon: Lock,
  },
  {
    title: "Monitoring & Detection",
    description: "Reduces dwell time",
    icon: Activity,
  },
];

export const CapabilitiesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-slate-950 text-white py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
            Our Capabilities
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every capability is framed around measurable risk reduction, not marketing
            promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-slate-700 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-lg p-8 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Our approach focuses on technical precision and measurable outcomes.
          </p>
          <p className="text-slate-300">
            Risk reduction through clarity, not hype.
          </p>
        </div>
      </div>
    </section>
  );
};
