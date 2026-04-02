const PremiumStats: React.FC = () => {
  return (
    <div className="relative mb-44">
      <div
        className="absolute inset-0 -z-10 rounded-[48px] blur-[80px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,237,243,0.10), rgba(125,69,150,0.10), rgba(124,58,237,0.08))",
        }}
      />

      <div className="grid md:grid-cols-4 gap-12">
        {[
          { number: "850+", label: "Projects Delivered" },
          { number: "11+", label: "years of excellence" },
          { number: "900+", label: "Clients" },
          { number: "24/7", label: "Global Operations" },
        ].map((stat, index) => (
          <div key={index} className="relative group">
            <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 min-h-[145px] flex flex-col items-center justify-center text-center border border-blue-800/40 bg-[#0a1b3d]/88 backdrop-blur-sm transition-all duration-300 transform-gpu group-hover:border-[#4cc9f0]/55 group-hover:-translate-y-1 group-hover:shadow-[0_16px_34px_rgba(76,201,240,0.18)]">
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/0 to-cyan-200/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute -left-16 top-0 h-full w-14 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              <h3 className="relative text-4xl sm:text-5xl font-black text-sky-100 leading-none transition duration-300 group-hover:text-cyan-100">
                {stat.number}
              </h3>
              <p className="relative mt-3 text-base font-semibold text-blue-100 leading-snug transition duration-300 group-hover:text-cyan-100">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumStats;
