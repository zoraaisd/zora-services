const EnterpriseDifferentiators: React.FC = () => {
  return (
    <section className="py-28 px-6 border-b border-blue-900/40">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-16">
          Why Enterprise Leaders Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Board-Level AI Strategy",
              desc: "We align artificial intelligence initiatives with executive business outcomes and measurable ROI.",
            },
            {
              title: "Security-First Architecture",
              desc: "Built with enterprise-grade compliance, data encryption, and infrastructure resilience.",
            },
            {
              title: "Scalable AI Infrastructure",
              desc: "Cloud-native, modular systems designed for long-term digital growth.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#0b1220] border border-blue-900/40
              hover:border-blue-700 hover:bg-[#0e1626]
              transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseDifferentiators;
