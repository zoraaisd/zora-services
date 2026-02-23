const Industries: React.FC = () => {
  return (
    <section className="py-28 px-6 border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-20">
          Industries We Transform
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            "Banking & Financial Services",
            "Healthcare & Life Sciences",
            "Manufacturing & Supply Chain",
            "Retail & E-Commerce",
            "Telecommunications",
            "Enterprise SaaS",
          ].map((industry, i) => (
            <div
              key={i}
              className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-3xl
              hover:bg-[#0e1626]
              transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {industry}
              </h3>
              <p className="text-gray-500 text-sm">
                AI-powered transformation delivering measurable operational
                advantage.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
