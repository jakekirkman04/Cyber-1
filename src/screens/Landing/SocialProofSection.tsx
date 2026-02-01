const sectors = [
  { name: "Finance", placeholder: "FIN" },
  { name: "SaaS", placeholder: "SAS" },
  { name: "Healthcare", placeholder: "HLT" },
  { name: "E-commerce", placeholder: "ECM" },
  { name: "Infrastructure", placeholder: "INF" },
  { name: "DevOps", placeholder: "DVO" },
];

export const SocialProofSection = (): JSX.Element => {
  return (
    <section className="w-full bg-slate-900 text-white py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
            Trusted by teams operating in regulated and high-risk environments
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Leading organizations across critical sectors depend on our infrastructure hardening and continuous monitoring.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center aspect-square hover:border-slate-600 hover:bg-slate-750 transition-colors duration-300"
            >
              <div className="text-2xl font-mono text-slate-500 mb-2">
                {sector.placeholder}
              </div>
              <div className="text-xs text-slate-400 text-center font-medium">
                {sector.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
