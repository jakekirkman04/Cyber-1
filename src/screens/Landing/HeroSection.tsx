export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen bg-slate-950 text-white py-32 px-6 sm:px-8 lg:px-12 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 text-sm font-medium text-slate-400 uppercase tracking-wider">
          Security Architecture
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Reducing Attack Surface Across Modern Infrastructure
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Technical protection for cloud environments, APIs, internal tools, and data pipelines. Reducing risk through infrastructure hardening and continuous monitoring.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="inline-flex items-center gap-8 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              Cloud Security
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              API Protection
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              Data Pipeline Monitoring
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
